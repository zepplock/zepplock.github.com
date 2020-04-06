---
title: "Digital Audio, Error Correction (part 2) "
date: "2020-04-05"
draft: false
path: "/articles/digital-audio-error-correction-part2"
tags: ["audio", "Digital Audio"]
---

### Analog audio degradation

Let's continue exploring digital audio and see which aspects of it differ from the analog world. With analog audio, we are accustomed to typical things that affect audio quality: *distortion, noise, compression, clipping, frequency roll-off, etc*. What about the effects of digital audio degradation? How to identify and troubleshoot these issues?

### Setup

To explore possible causes of audio degradation in the digital domain, let's assume we have a fairly typical home audio system: a digital track streaming from Tidal (it might as well be Amazon, Spotify, Qobuz, etc), a Mac laptop with Roon (or Foobar), connected to an external DAC via USB (or Coax/Optical). Obviously cables, an amplifier, and speakers.

### Digital Quality Degradation

#### Potential issue #1: streaming to your computer

It might surprise you but there are **dozens** of pieces of network equipment between you and and a streaming service: *servers, switched, routers, firewalls, modems*. Each and every one of those is dropping, error checking, error correcting, retransmitting and recovering packets of audio data while it is being streamed to your computer. The same principles of error correction are applied to websites, video and other media delivered over the Internet. If audio data was affected or altered in any way by network equipment you would see it everywhere, from Wikipedia articles to YouTube clips. Here's an analogy:

    I installed a $1000 audiophile network switch in my home network:
    my soundstage improved by about 20%.
    
    It's like saying: 
    with my new cable, a news anchor lady looks about 20 years younger.

Here's another one:

    I upgraded my ethernet cable to $1000 one:
    female voices sound sooo much better.

    It's like saying:
    with my new cable, the words on Wikipedia are sharper and images are brighter.

Yes, funny, I know. But I hear it from people all the time.

#### Potential issue #2: comparison to video

Now let's see what digital errors really look like. To help us, we will use another analogy, this time we will compare analog and digital quality degradation in videos.

    Analog: old TV broadcasts had washed out colors, ghosting, and noise.
    Digital: modern cable boxes have skipped frames and freezes.

Clearly analog and digital video exhibit different quality degradation. Same applies to audio:

    Analog: analog audio had noise, frequency roll-off, and distortion.
    Digital: modern streaming audio has skipping and stuttering artifacts.

It is important to recognize the different symptoms of audio quality degradation. It makes troubleshooting so much easier.

#### Potential issue #3: buffering and skipping

The modern error correction techniques deal with errors very well up until a breaking point. It is usually achieved via two basic algorithms: checksums and buffering. Without going into technical details it looks like this:

    A computer player has a bucket (a buffer), a sponge (error rejection) and 2 hoses.
    Sponge filters dust, rocks, and other garbage.
    A bucket gets filled from one hose (from the Internet)
    and gets drained to the other hose (to computer and DAC).

Unless a bucket gets completely drained, or a sponge gets really clogged - there's no audio degradation since we have absolutely identical audio data. If audio data gets corrupted in any way along the digital path - it gets error rejected or error corrected by [Ethernet](https://en.wikipedia.org/wiki/Ethernet), [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) and other network protocols.

---
back to [part 1](/articles/digital-audio-myths-part1)
