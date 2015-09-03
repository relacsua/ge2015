import urllib2
from bs4 import BeautifulSoup

PARLIAMENT_URL = 'http://www.businesstimes.com.sg/in-depth/singapore-general-election#candidates'

# Python script to download all the minister images from the URL above.

def getName(name):
	name = name.split(' ')
	name.append('.jpg')
	return ''.join(name)

def downloadImage():
	opener = urllib2.build_opener()
	opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36')]
	response = opener.open(PARLIAMENT_URL)
	htmlData = response.read()
	f = open('her.html','wb')
	f.write(htmlData)
	f.close()
	# soup = BeautifulSoup(htmlData, "html.parser")
	# mps = soup.findAll('h2', class_ = 'category')
	# print len(mps)

	# for mp in mps:
	# 	image = mp.select('img')
	# 	imageURL = image[0].attrs['src']
	# 	imageName = image[0].attrs['alt']
	# 	imageName = getName(imageName)
	# 	response = opener.open(imageURL)
	# 	imageData = response.read()
	# 	f = open(name,'wb')
	# 	f.write(imageData)
	# 	f.close()
	# 	break

if __name__ == '__main__' : downloadImage()