+++
style = "module"
weight = 7
title = "Detecting malware through image acquisition (iOS, Android)"
+++

## Use Case

The first step in detecting malware on a device is to collect data from the device itself for analysis. Ideally the data will be retrieved from the device to a safe space with minimal disruption to the device itself. More advanced malware may attempt to detect forensic activity and delete itself to hamper detection and analysis.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Discuss with the client the suggested approach of traffic analysis including explaining the process, the risks, and limitations of the action
- Select an appropriate network traffic analysis tool and implement it using the relevant hardware or software configuration
- Investigate and understand which rule sets or heuristics are being used by each given network traffic analysis approach and understand their strengths or weaknesses
- Read the results of flagged network flows and be able to triage which results require further investigation or risk-remediating action

---

For a broader view of malware detection methods and possible challenges, we recommend that all Learners take a look [at this talk](https://media.ccc.de/v/37c3-11874-einfuhrung_in_smartphone_malware_forensik) (it’s originally in German but also translated into French and English), which is a great introduction to the topic and lasts around 50 minutes (plus questions and answers).

## iOS, Android

Mobile operating systems are typically more limited/locked down than desktop ones, so creating and working with a full backup is not as straightforward, and you may not be able to easily get all information from a device. A full-featured cross platform tool for mobile data extraction is the Amnesty International Security Lab’s 🧰 [Mobile Verification Toolkit](https://mvt.re) (MVT). Full documentation is available on their web site, but there are also walkthroughs, for example [this one](https://www.youtube.com/watch?v=iLOSlHhGI9U) (English, 6 minute video). Do note that this latter walkthrough also includes materials we will cover in the next subtopic. Alternatively, you can also use [this guide](https://pts-project.org/guides/g4/) which will show you how to do backups on both iOS and Android.

When it comes to OS, you can use a tool called [libimobiledevice](https://libimobiledevice.org/) or iTunes to make a backup. This backup you can then analyze using MVT.

Detecting malware on Android is a little more complicated. You can use a tool called [androidqf](https://github.com/botherder/androidqf) to capture logs. See [this write-up](https://securitylab.amnesty.org/latest/2023/09/fellowship-apkqf-simplifying-android-forensics/) for more details on androidqf and why it’s difficult to do a backup without first connecting an Android device to another computer.

You can install MVT on Linux or macOS. Most Linux systems have pip3, a tool used to install Python packages, which makes installing MVT somewhat straightforward. On macOS, you will typically need to install two tools—XCode and Homebrew—first before being able to install MVT. You can follow the instructions in [this guide](https://docs.mvt.re/en/latest/install/) to install MVT.

## iOS, Android

🧰 For mobile devices, the system architecture makes on-device antimalware software less effective. However, the [Mobile Verification Toolkit](https://mvt.re) (MVT) will scan an Android or iOS device’s extracted data for various malware.

In the previous section, we went over backing up a device with MVT. Once you have done so, you can scan the backup using the command line tool.

Do note, however, that MVT has some limitations:

- MVT checks the device backup against known IoCs. This means that it can only check for malware that has those specific IoCs. It does not look for other heuristics (such as a jailbroken system or suspicious automations or scripts) which might suggest an infection.
- For iOS the best approach is to [gain access to a device backup, and then extract the data from the backup](https://docs.mvt.re/en/latest/ios/backup/itunes/). This should provide most of the data that is available on the device. (There is further analysis work which could be conducted on a jailbroken iOS device, though this falls outside of the scope of this learning path). It’s also worth noting that an encrypted backup contains significantly more data than an unencrypted one. We recommend always working with the former, if possible.
- For Android, unless the device is rooted, you will not be able to extract everything. However, you can get much of the device’s data without root access.

For a quick read on the IoCs that MVT checks for, how to download and give MVT new IoC data, and a list of potential IoCs you could use in your detection efforts, check out [this sub-page in the MVT documentation.](https://docs.mvt.re/en/latest/iocs/)

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
   <td>Smartphone malware forensics: An introduction
   </td>
   <td>A talk by two mobile malware researchers working with journalists where they outline the basics of smartphone malware forensics, how it differs from desktop forensics, and what the leading tools and methods are
   </td>
   <td>Original talk is in German, translated into French and English. Slides are in English
   </td>
   <td>Free
   </td>
   <td><a href="https://media.ccc.de/v/37c3-11874-einfuhrung_in_smartphone_malware_forensik">https://media.ccc.de/v/37c3-11874-einfuhrung_in_smartphone_malware_forensik</a> 
   </td>
  </tr>
  <tr>
   <td>Mobile forensics
   </td>
   <td>This comprehensive guide was initially created by Security Without Borders. It looks at how to do basic forensics and data gathering on every major platform.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://pellaeon.gitbook.io/mobile-forensics/">https://pellaeon.gitbook.io/mobile-forensics/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>How to make a Windows 10/11 image backup
   </td>
   <td>In order to analyze a system for malware, we first need to make a copy of the files and folders on this system. This guide shows us how we can do so on Windows.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.computerworld.com/article/3655693/how-to-make-image-backup-windows-10-windows-11.html">https://www.computerworld.com/article/3655693/how-to-make-image-backup-windows-10-windows-11.html</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>How to back up a Mac or Macbook
   </td>
   <td>This article focuses on disk images on macOS.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.macworld.com/article/671336/how-to-back-up-a-mac-or-macbook.html">https://www.macworld.com/article/671336/how-to-back-up-a-mac-or-macbook.html</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>How To Backup Your Entire Linux System Using Rsync
   </td>
   <td>This piece uses rsync, a very powerful command line utility which can also be used to clone a Linux system for the purposes of analyzing the subsequent disk image.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://ostechnix.com/backup-entire-linux-system-using-rsync/">https://ostechnix.com/backup-entire-linux-system-using-rsync/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>MVT, mobile verification toolkit
   </td>
   <td>A free tool which can analyze backups of iOS and Android systems to look for IoCs associated with malware or spyware infections. Used extensively in device forensics for civil society
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://docs.mvt.re/en/latest/">https://docs.mvt.re/en/latest/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>Backing up with iTunes
   </td>
   <td>This article in the MVT documentation shows how to use iTunes to create a backup which can subsequently be analyzed with MVT.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://docs.mvt.re/en/latest/ios/backup/itunes/">https://docs.mvt.re/en/latest/ios/backup/itunes/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>I analyzed my phone for Pegasus spyware
   </td>
   <td>A step-by-step video which illustrates how you can use MVT in order to find IoCs associated with Pegasus on iOS
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.youtube.com/watch?v=iLOSlHhGI9U">https://www.youtube.com/watch?v=iLOSlHhGI9U</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>Beginner guide - How to backup a mobile device for forensic analysis purpose
   </td>
   <td>An introductory guide on how to use common tools to make a backup of iOS and Android devices in order to scan them for malware later on
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://pts-project.org/guides/g4/">https://pts-project.org/guides/g4/</a> 
   </td>
  </tr>
  <tr>
   <td>libimobiledevice
   </td>
   <td>The home page for a software library which can be used to access and backup iOS devices from a Windows, macOS, or Linux device 
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://libimobiledevice.org/">https://libimobiledevice.org/</a> 
   </td>
  </tr>
  <tr>
   <td>Simplifying Android Forensics
   </td>
   <td>A write-up by an Amnesty Tech fellow on the current tools which can be used to backup Android devices for forensic analysis and some of their limitations
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://securitylab.amnesty.org/latest/2023/09/fellowship-apkqf-simplifying-android-forensics/">https://securitylab.amnesty.org/latest/2023/09/fellowship-apkqf-simplifying-android-forensics/</a> 
   </td>
  </tr>
  <tr>
   <td>Install libimobiledevice
   </td>
   <td>A quick guide on how to install libimobiledevice for the purposes of a forensic investigation
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://docs.mvt.re/en/latest/ios/install/">https://docs.mvt.re/en/latest/ios/install/</a> 
   </td>
  </tr>
  <tr>
   <td>androidqf
   </td>
   <td>Android Quick Forensics is a tool which can be used to easily access data from an Android device for future forensics, analysis, and malware scanning.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://github.com/botherder/androidqf">https://github.com/botherder/androidqf</a> 
   </td>
  </tr>
  <tr>
   <td>SANS Course on Digital Acquisition and Rapid Triage
   </td>
   <td>A very comprehensive, long, and pricey course on acquiring and analyzing data from mobile devices
   </td>
   <td>English
   </td>
   <td>around 8000+ USD
   </td>
   <td><a href="https://www.sans.org/cyber-security-courses/digital-acquisition-rapid-triage/">https://www.sans.org/cyber-security-courses/digital-acquisition-rapid-triage/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
</table>

## Practice

For the practice exercises in this subtopic, first backup your device (instructions for each platform are outlined below), and then answer the questions under the “all systems” tag.

### iOS

Install MVT on your desktop operating system. Follow the directions outlined in [this section](https://docs.mvt.re/en/latest/ios/install/) to make a backup, either by using iTunes or by first installing [libimobiledevice](https://docs.mvt.re/en/latest/ios/install/).

### Android

Install MVT on your desktop operating system. Install [Androidqf](https://github.com/botherder/androidqf) and use it to make a backup.

### Windows, macOS, Linux

Conduct a backup of your desktop operating system using a tool of your choice. You can use one of the tools outlined in the learning resources section above.

### All systems

Check for the following in your backup:

- What data did you get from the device? What data did you not get?
- What was most recently modified?
- Are the timestamps preserved in the data acquisition copy?

## Skill Check

Prior to doing the skill check portion of the exercise, make sure that you have first backed up your files (as described in the practice section). Once you have completed this, do the following:

### Windows, macOS, Linux

You have completed a backup of your desktop operating system. Open it and within it, find:

- The downloads folder
- At least one executable file
- At least one system settings or configuration file

It is perfectly all right to use your favorite search engine to figure out where those files and folders should be located on a disk and then search for them in the same location, just within your backup.

### iOS

If your iOS backup has been encrypted, use MVT to decrypt it by following [these instructions](https://docs.mvt.re/en/latest/ios/backup/check/#decrypting-a-backup). Read the output of the command to make sure that the decryption has run successfully.

After you have decrypted the backup, ask MVT to download the newest IoCs and then use the tool to scan the backup for malware.

### Android

Ask MVT to download the latest IoCs and then use it to scan the backup you made using androidqf.
