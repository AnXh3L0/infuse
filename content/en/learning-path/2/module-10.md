+++
style = "module"
weight = 10
title = "Discovering where the malware came from"
+++

## Use Case

No malware spontaneously appears on a targeted person’s device. It always comes from somewhere. Sometimes, that somewhere is obvious: the targeted person realizes that the link they clicked on was malicious. In other cases, the infection vector may be less clear. Learning where the infection came from can be important for managing future risk. If the initial infection source was untargeted, the victim may have just been the victim of a criminal gang with no goals other than making money. On the other hand, if the initial infection came from a sophisticated targeted social engineering attack, they are likely to face continuing future attacks from the same threat actor.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Understand how timestamps work on desktop and mobile devices
- Look at operating system metadata to learn where malicious files were downloaded from

---

## File Timestamps

The first step in tracing the origin of the attack is to establish the time that the malware was installed. If you have identified the downloaded malware file, you can use the timestamps on the file. This is harder than one might imagine at first because file system timestamps are complicated. The short answer is to start with the file creation time of the first file that was downloaded. Note that files extracted from archives may have different creation times; it’s important to start with the actual file that was downloaded.

## Windows, macOS, Linux

For more information on desktop filesystem timestamps, see [this whitepaper from SANS on Windows](https://www.sans.org/white-papers/36842/), [this description of the near-infinite time stamps on MacOS](https://forensic4cast.com/2016/10/macos-timestamps-from-extended-attributes-and-spotlight/), [this description of linux timestamps](https://linuxhandbook.com/file-timestamps/) and [a way of viewing file creation time on ext4](https://blog.roberthallam.org/2018/01/file-creation-time-on-ext4-linux/).

## iOS, Android

For mobile devices, MVT provides some timestamp information. For iOS, this is [described in the documentation](https://docs.mvt.re/en/latest/ios/records/). For Android, less information is extracted, and you might have to do on-device checks.

The [Google Files](https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.files&hl=en_US&gl=US) app will show the modified time of a file from the meatball menu for each file.

Note that mobile malware typically is much less obvious about leaving easily accessible traces on the file system. The common ways that mobile devices are infected is via fake sideloaded apps, malicious apps in the Apple/Google app store, or via sophisticated browser exploits that gain deep access to the device before downloading any files. In the last cases, malicious files may not show up in common download directories.

## Suspicious Messages/Downloads

Whether or not you find a malicious file, the next step is to find where it came from. There are several bits of information you can collect and look for.

In some operating systems, downloads are associated with their source. This means that files can contain metadata which shows what server they were downloaded from. [This guide](https://winaero.com/beware-chromium-based-browsers-save-download-origin-url-for-files/#:~:text=To%20Find%20Origin%20URL%20For%20File%20Downloaded%20with,the%20following%20command%3A%20Get-Content%20%22file%20name%22%20-Stream%20Zone.Identifier.) shows how to check such information on Windows and Linux, while [this one](https://osxdaily.com/2010/10/12/find-out-where-a-file-was-downloaded-from/) does the same for macOS. Such metadata will show you the server from which the file was downloaded, but not what caused the download.[^1] Also note that the link the targeted person clicked on might not be the download URL due to redirects.

Next up, look for emails, messages, etc. that may have triggered the download. You can use any timestamp and URL information you identified previously to help.

## Learning Resources

<table>
  <tr>
   <td>Title
   </td>
   <td>Description
   </td>
   <td>Language
   </td>
   <td>Cost
   </td>
   <td>URL
   </td>
  </tr>
  <tr>
   <td>Filesystem Timestamps: What Makes Them Tick?
   </td>
   <td>An overview of what timestamps are, how portable they are, and how they work on a somewhat technical level. Mostly Windows focused
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://www.sans.org/white-papers/36842/">https://www.sans.org/white-papers/36842/</a> 
   </td>
  </tr>
  <tr>
   <td>macOS timestamps from extended attributes and spotlight
   </td>
   <td>A guide to using advanced file metadata in macOS to find different file timestamps and what those timestamps mean
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://forensic4cast.com/2016/10/macos-timestamps-from-extended-attributes-and-spotlight/">https://forensic4cast.com/2016/10/macos-timestamps-from-extended-attributes-and-spotlight/</a> 
   </td>
  </tr>
  <tr>
   <td>File Timestamps in Linux: atime, mtime, ctime Explained
   </td>
   <td>Linux has different types of timestamps. This article goes over explains how to interpret them.
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://linuxhandbook.com/file-timestamps/">https://linuxhandbook.com/file-timestamps/</a> 
   </td>
  </tr>
  <tr>
   <td>File creation time on ext4 Linux
   </td>
   <td>The most modern file system that Linux uses is called ext4. This article looks at how ext4 manages timestamps and how to find detailed info on the creation of files.
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://blog.roberthallam.org/2018/01/file-creation-time-on-ext4-linux/">https://blog.roberthallam.org/2018/01/file-creation-time-on-ext4-linux/</a> 
   </td>
  </tr>
  <tr>
   <td>Records extracted by mvt-ios
   </td>
   <td>Looks at what files MVT generates when analyzing iOS dumps and how to read them
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://docs.mvt.re/en/latest/ios/records/">https://docs.mvt.re/en/latest/ios/records/</a> 
   </td>
  </tr>
  <tr>
   <td>Files by Google
   </td>
   <td>An Android app which gives access to advanced file metadata
   </td>
   <td>multiple
   </td>
   <td>free
   </td>
   <td><a href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.files&hl=en_US&gl=US">https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.files&hl=en_US&gl=US</a> 
   </td>
  </tr>
  <tr>
   <td>Mark of the Web from a Read Team’s Perspective
   </td>
   <td>Introduces Mark of the Web, a flag in Windows which suggests that a file was downloaded from the web and requires special security precautions when opening
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://outflank.nl/blog/2020/03/30/mark-of-the-web-from-a-red-teams-perspective/">https://outflank.nl/blog/2020/03/30/mark-of-the-web-from-a-red-teams-perspective/</a> 
   </td>
  </tr>
  <tr>
   <td>Beward: Chromium-based browsers save download origin url for files
   </td>
   <td>Looks at how Windows and Linux systems sometimes save metadata on which URLs a file was downloaded from
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://winaero.com/beware-chromium-based-browsers-save-download-origin-url-for-files/">https://winaero.com/beware-chromium-based-browsers-save-download-origin-url-for-files/</a> 
   </td>
  </tr>
  <tr>
   <td>Find Out Where a File was Downloaded From in Mac OS X
   </td>
   <td>macOS files that have been downloaded from the URL usually have the download URL embedded within their metadata. This piece shows how to extract said URL
   </td>
   <td>English
   </td>
   <td>free
   </td>
   <td><a href="https://osxdaily.com/2010/10/12/find-out-where-a-file-was-downloaded-from/">https://osxdaily.com/2010/10/12/find-out-where-a-file-was-downloaded-from/</a> 
   </td>
  </tr>
</table>

## Skill Check

For at least five files in your downloads folder:

- Write out all of the timestamps they contain and what they could indicate
- If available, find the extended attributes or metadata that describes which URL or service they were downloaded from (in our testing, not all files had information about URLs in their metadata, so don’t worry if you are unable to find it)

Ask a peer or mentor to double check your work and ensure that you have correctly read all the metadata.

On Android, install a (non-malicious) app and use the file manager to find the app properties and see what you can learn about the app. If you have access to a test Android phone, download an app from outside Google Play and do the same. Ask a peer or mentor to double check your work and ensure that you have correctly read all the app properties.

## Notes

[^1]:
    On Windows, you will additionally see a number corresponding to a Zone ID. The Zones associated with downloaded files are as follows:

    - ZoneId=1: Local Intranet
    - ZoneId=2: Trusted sites
    - ZoneId=3: Internet
    - ZoneId=4: Restricted sites
