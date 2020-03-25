---
title: "My Music Server"
date: "2009-09-05"
draft: false
path: "/blog/my-music-server"
---

Some time ago I realized that using my home desktop (Dell XPS 710) with 1000w power supply as a music server is not a perfect solution. It was not perfect in many ways:

* it was very **power** hungry: I think about 150w when idle and ~350-500w depending on the task running
* it was **noisy**: all those fans and multiple hard drives made a lot of noise
* it was **not secure**: my music collection was on the PC used by everyone so any trojan/virus could wipe out the whole collection...

So I decided to migrate to something more reasonable while being on the budget.


##Requirements
So how my new "Home Music Server" should look like? Here are some ideas I had in mind:

*   Use ~50w of power
*   Be small and generate no noise (preferably no spinning parts, e.g HDD, fans, etc)
*   Somewhat secure
*   Preferably provide access to my collection through the rest of the home
*   Low cost (let's assume < $300)

## My System
What did I have on my hands?

* speakers: <a href="http://www.totemacoustic.com/products/columns/hawk/">Totem Hawks</a>
* amplifier: <a href="http://www.psaudio.com/ps/products/detail/trio-c-100?cat=audio">PS Audio Trio C100 Dual Mono</a>
* DAC: <a href="http://www.glassjaraudio.com/product.sc?categoryId=4&productId=6">Alien DIY USB</a> Digital to Analogue Converter
* storage: about 1.3Tb of music on two 1Tb had drives

So the rest of the system had to be determined. The missing component(s) would be a box that connects multiple hard drives on one side and has USB/SPDIF audio output on the other side. Is it a single component? We will see ;-)

##Music Collection
Let's step back for a bit and see what music I have and how I store it. As I mentioned before I have two 1Tb drives hosting my classical and rock/jazz/other collection. I used to have thousands of CDs but I have digitized them all to lossless storage. The formats I have are about mostly <a href="http://flac.sourceforge.net/">FLAC</a>, <a href="http://www.monkeysaudio.com/">Monkey Audio APE</a> (I know, I know, it sucks) and 10% other formats (wv, shn, some mp3s too). Music is organized in directories sorted by author and then by album. Every (well almost every) album contains <a href="http://en.wikipedia.org/wiki/Cue_sheet_(computing)">.cue</a> file which lists all songs in the album and songs are tagged with author/album/year/etc information.

##Player
I am using <a href="http://www.foobar2000.org/">Foobar 2000</a> player so far it was the best in terms of quality and  flexibility. I'm very happy that it plays every possible audio format and has plugins for almost any situation. So I had big expectations that Foobar will help me connect all my components together while providing some kind of interface to control my library.

##Solution
After googling around I bumped into two components that fit the bill (~$260 total):

* NAS: <a href="http://www.dlink.com/products/?pid=666">D-Link DNS 321 NAS</a> ($99 after rebate)
* Netbook: <a href="http://eeepc.asus.com/global/product900a-spec.html">ASUS Eee PC 900</a> with 4Gb SSD drive ($159 on sale Buy.com)


####NAS
The NAS (Network Attached Storage) is a very good solution for this problem. You connect ethernet cable to it and all you files are accessible from Windows, MAC or Linux (also supports ftp, iTunes, uPNP, etc). So I put one of my hard drives in it and copied all my music there. It uses about 30w of power while drives are spinning. The neat feature is that it powers down the drives when not in use (which lowers power to about 20w). It is running Linux in its NAS guts and supports 3rd party software (I don't use this feature here but it can come handy later)

####Netbook
The core of the system is ASUS Eee PC netbook. It's small, silent and draws 18w of power while idle and 21w when in use which is perfect (see requirements). It comes with Linux pre-installed but I installed Windows XP Sp3 since Foobar music player is Windows only.

##Software
So what did I have to install to get it going?

* Windows XP
* Foobar 2000 player
* To control foobar remotely from any browser (including smartphones) there's a foobar plugin for that: <a href="http://www.hydrogenaudio.org/forums/index.php?showtopic=62218">Foobar HTTP Control</a>

##Extras
One of the interesting features of the system is internet radio. I really like commercial free <a href="http://www.radioparadise.com/">Radio Paradise</a>. Foobar can play a streaming music from it too! Very convenient way to listen to new music.

The other interesting feature is running a bittorrent client on the same system.

##Next Steps

* See how this system can fit into different home automation solutions
* D-Link 321 NAS supports iTunes streaming. When I start iTunes on any computer at home I see it in the list but no music available. Need to configure it it and see if FLAC/APE files are supported
* Find a low cost hardware player that can connect to NAS and strem music off it like radio
