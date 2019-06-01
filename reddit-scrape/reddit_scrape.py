#! python3
# Mehmet Hatip API Test

import requests, json, praw, os, shutil, logging, re, pprint, sys
from imgurpython import ImgurClient

message = "Enter name of subreddit, e to exit, r for random: "

def find_extension(url):
    try:
        return re.search(r'\.\w+$', url).group()
    except:
        return 'NONE'

def download_file(name, url, text=None):
    try:
        if not os.path.isfile(name):
            if text:
                saveFile = open(name, 'w')
                saveFile.write(text)
            else:
                res = requests.get(url, stream=True)
                #res.raise_for_status()
                saveFile = open(name, 'wb')
                for chunk in res:
                    saveFile.write(chunk)
            saveFile.close()
            return str(f'Downloaded {name}')
        else:
            return str(f'File {name} already exists')
    except Exception as e:
        print(e)
        return str(f'File {name} could not be downloaded')

def get_subreddit():
    sub = sys.argv[1] if len(sys.argv) > 1 else input(message)
    return sub

def make_dir(sub):
    if not os.path.isdir(sub):
        print(f'Making {sub} directory...')
        os.mkdir(sub)
    else:
        print(f'{sub} directory exists')
    os.chdir(sub)

def main():
    logging.basicConfig(level=logging.DEBUG, format='%(message)s')

    logging.disable(logging.DEBUG)
    logging.disable(logging.CRITICAL)


    reddit = praw.Reddit(
    client_id='TNXJh1DaoUyO1w',
    client_secret='hKfekLF_vORYMV4-XQEm3iNz55Q',
    user_agent='windows:my_script:1.0 (by /u/memohat)'
    )

    imgur = ImgurClient(
    client_id='39b04bdb6b54455',
    client_secret='9017657f85f04d1e32bb1f573102f8ec110ddc09'
    )

    sub = get_subreddit()

    while True:
        if sub == 'e':
            print('Exiting')
            break
        elif sub == 'r':
            sub = reddit.random_subreddit().display_name
            print(f'Subreddit: {sub}')

        make_dir(sub)

        for submission in reddit.subreddit(sub).top(limit=10):
            url = submission.url
            title = re.sub(r"[^\s\w',]", '', submission.title)
            text = submission.selftext
            extension = ''

            # logging
            logging.info("Initial URL: " + str(url))
            logging.info("ID: " + submission.id)
            variables = pprint.pformat(vars(submission))
            logging.debug(variables)

            if bool(re.search(r'gfycat\.com\/\w+', url)):
                url_id = re.search(r'(gfycat\.\w+\/)(\w+)', url).group(2)
                url = r'https://giant.gfycat.com/' + url_id + r'.webm'
                extension = find_extension(url)

            elif bool(re.search(r'imgur', url)):
                regex = re.search(r'(imgur.com\/)(\w+\/)?(\w+)(\.\w+)?$', url)
                domain, album, id, extension = regex.groups()
                logging.info('Imgur ID: ' + id)

                if album:
                    images = imgur.get_album_images(id)
                    folder_name = str(title + '_' + id)
                    os.mkdir(folder_name)
                    os.chdir(folder_name)
                    print(f'Downloading imgur album to "{folder_name}"', end='')
                    i = 1

                    for item in images:
                        print('.', end='')
                        url = item.link
                        extension = find_extension(url)

                        if item.title:
                            title = item.title

                        else:
                            title = 'Untitled' + str(i)
                            i += 1

                        status = download_file(title + extension, url)

                    print('\nFinished imgur album')
                    os.chdir('..')
                    continue

                else:
                    url = imgur.get_image(id).link
                    extension = find_extension(url)

            elif bool(submission.is_video):
                url = submission.media['reddit_video']['fallback_url']
                extension = '.mp4'

            elif text:
                extension = '.txt'

            else:
                extension = find_extension(url)

            logging.info('Download URL: ' + url)
            name = title + extension
            status = download_file(name, url, text=text)
            print(status)

        os.chdir("..")
        print("Done")
        sub = input(message)

if __name__ == '__main__':
    main()
