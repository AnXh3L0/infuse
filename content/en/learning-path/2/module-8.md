+++
style = "module"
weight = 8
title = "Sample-based detection and determination"
+++

## Use Case

You have a sample of a file and need to determine if it is malicious. This may have been sent to the target by email, social media, or instant messenger, or transferred over removable media or otherwise. The file itself may be a binary, a compressed archive, a captured web page, or other file formats. The primary objective is to determine whether the file is malicious. In addition, you may be able to determine some additional useful characterizing information about the file, however for more guidance see the [Malware Analysis Learning Path](https://docs.google.com/document/d/1tgvDPn7FXoaZVrdULKYu8HeOrfDaoelKJLzojDDA6mg/edit).

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Investigate suspicious files using malware platforms
- Utilize sandboxes to assist in determining whether a sample is malicious and what it does

---

If you require more in-depth evaluation of a few specific files, there are online services that will scan a specific file or set of files for malware. If you have a file that you suspect to be malicious, you can upload the file to the scanning service. Note that these services do not keep confidential the contents of the files you upload. You should not upload any files that contain sensitive information. These files may come from email attachments, or be recently downloaded files on the victim’s device. Note that in many cases, the initial download may be a dropper (executable that installs the actual malware, often easier to customize than the “real” malware), and may not be known to anti-malware software. If possible, analyze file creation/modification/download dates to identify files that might have been downloaded by the initial dropper.

If you would prefer not to share a full file with an online service but still want to check if it has ever been submitted, you can simply upload a hash of the file. A hash is like a short fingerprint of a file—it can be used to identify a unique file without revealing its contents. For more information on hashes, go through the “Hashes” section in Chapter 7 of the [Field Guide to Incident Response for Civil Society and Media](https://internews.org/resource/field-guide-to-incident-response-for-civil-society-and-media/). The guide activity assumes the user is learning on a Linux operating system, so you will need to look up the command line utility to use to obtain a SHA sum on your chosen platform, for instance using \_shasum \_or \_openssl \_on MacOS or using Get-FileHash or certutil in PowerShell.

A popular malware intelligence service is Google’s [VirusTotal](https://www.virustotal.com/). VirusTotal will scan a file with a number of antimalware scanners, and report the results back. It can also scan for file hashes or URLs. VirusTotal is free to use, subject to volume constraints. For a detailed description and activity, complete the “Using VirusTotal” section in Chapter 7 of Internews’ [Field Guide to Incident Response for Civil Society and Media](https://internews.org/resource/field-guide-to-incident-response-for-civil-society-and-media/).

‼️ After reading the above chapter, you should be able to:

- Understand what uploading a sample to VirusTotal does (shares your sample with paying VirusTotal customers), and be able to decide if it is appropriate to do so
- Submit a file or check a record by hash and read the Detections, Details, Relations, Behavior, and Community tabs on VirusTotal

## Sandboxes

Sandboxes provide a virtual environment simulating an ordinary computer which captures detailed logs of activities which occur in memory and on disk. This generally allows a safe and automated way to bootstrap malware analysis and understand the actions and intentions of a file.

Several freely available commercial sandbox services include [Hybrid Analysis](https://www.hybrid-analysis.com/), [Any.Run](https://any.run/), [Joe Sandbox](https://www.joesandbox.com/), and [Triage](https://tria.ge/). These services run files that you send it and perform dynamic analysis. This has great advantages in being able to heuristically detect new malware, and also being able to evaluate multiple malware stages. Note that samples submitted will be collected and become available to paying customers and analysts.

Cuckoo Sandbox is a free and open source malware analysis sandbox tool which you can self-host. CERT-EE in Estonia offers a free hosted version online: [Cuckoo V2](https://cuckoo.cert.ee/), [Cuckoo V3 (Beta)](https://cuckoo-hatch.cert.ee/).

To learn more about using Sandboxes for detection of samples, complete the “Sandboxes” section in Chapter 10 of Internews’ [Field Guide to Incident Response for Civil Society and Media](https://internews.org/resource/field-guide-to-incident-response-for-civil-society-and-media/), which uses the Triage sandbox as an example

After completing the activity, you should be able to:

- Submit a file into a sandbox
- Selecting or configure an appropriate operating environment for the sandbox
- Decide whether networking should be disabled or emulated
- Read the overview of results including automated detections
- Have a general understanding of the other categories of information being presented in the sandbox analysis. For the purpose of detection detailed understanding is not necessary but for Malware Analysis or threat hunting you will need to understand these further.

You can find a deeper dive on Sandboxes in the Infuse Malware Analysis learning path.

Note that advanced malware may initiate checks to discover if it is in a virtualized/sandboxed environment thus may behave differently depending on the environment, therefore no sandbox environment will be 100% reliable.

To learn more about the kinds of techniques that Hybrid Analysis uses, you can learn to do your own hybrid (static and dynamic) malware analysis in the Malware Analysis learning path.

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
   <td>Verify SHA256 checksum
   </td>
   <td>A quick guide on how to use the command line to verify sha256 checksums for files
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://techdocs.akamai.com/download-ctr/docs/verify-checksum">https://techdocs.akamai.com/download-ctr/docs/verify-checksum</a> 
   </td>
  </tr>
  <tr>
   <td>VirusTotal
   </td>
   <td>A web service where users can upload either files or hashes thereof to check them against known malware from a wide range of malware detection engines. Owned by Alphabet/ Google
   </td>
   <td>English
   </td>
   <td>Free, with rate limits
   </td>
   <td><a href="https://www.virustotal.com/gui/home/upload">https://www.virustotal.com/gui/home/upload</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>Hybrid Analysis
   </td>
   <td>A service somewhat similar to VirusTotal, but it can also perform dynamic analysis (running the file and observing what happens)
   </td>
   <td>English
   </td>
   <td>Free, with premium features
   </td>
   <td><a href="https://www.hybrid-analysis.com/">https://www.hybrid-analysis.com/</a><span style="text-decoration:underline;"> </span>
   </td>
  </tr>
  <tr>
   <td>Any.run
   </td>
   <td>A commercial sandbox
   </td>
   <td>Free only for non-commercial use
   </td>
   <td>English
   </td>
   <td><a href="https://any.run/">https://any.run/</a> 
   </td>
  </tr>
  <tr>
   <td>Joe Sandbox
   </td>
   <td>A commercial sandbox
   </td>
   <td>Free for public accounts (the results of the analysis will be published on the website)
   </td>
   <td>English
   </td>
   <td><a href="https://www.joesandbox.com/#windows">https://www.joesandbox.com/#windows</a> 
   </td>
  </tr>
  <tr>
   <td>Cuckoo Sandbox
   </td>
   <td>A sandbox service run by the Estonian CERT (Computer Emergency  Response Team)
   </td>
   <td>Free
   </td>
   <td>English
   </td>
   <td><a href="https://cuckoo.cert.ee/">https://cuckoo.cert.ee/</a>
<p>
<a href="https://cuckoo-hatch.cert.ee/">https://cuckoo-hatch.cert.ee/</a> 
   </td>
  </tr>
  <tr>
   <td>Windows Sandbox
   </td>
   <td>A powerful sandbox tool built into Windows
   </td>
   <td>Requires Windows Pro, Education, or Enterprise
   </td>
   <td>Many languages
   </td>
   <td><a href="https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview">https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview</a> 
   </td>
  </tr>
</table>

## Practice

1. Find or create a plain text file on your system, and then calculate its sha256 hash. After you have done that, change the file by editing it in a plain text editor and appending a single character to it. Calculate its sha256 hash again.
2. Grab an obscure Windows executable from something like download.cnet.com. Upload it to VirusTotal or analyze it with Hybrid Analysis. Note that installers may be incorrectly flagged as malicious due to the nature of their operation. Think about why this might be happening, and, if possible, discuss it with a peer or mentor.
3. Find the hash of a well-known piece of malware (you can do so by browsing a site that contains malware hashes, no need to download the sample and hash it yourself!) and upload it to VirusTotal. Explain what you see and what happened.

## Skill Check

Independently (or with a mentor)

1. Browse through recently submitted malware samples on Malware Bazaar. Copy the hashes of 3-5 samples you detected and paste them into VirusTotal search. What are the results? Each one of those hashes should be detected as malicious by at least a couple of VirusTotal malware detection engines. If none of the hashes are detected as malicious or recognized by VirusTotal, then it’s likely you’ve made a mistake somewhere and it’s worth taking a moment to retrace your steps!

With a Peer or a Mentor

1. Ask a peer or mentor to select around 10 random files, which could, for example, be images. They will then take the sha256 hash of 3 randomly selected files and send you both the files and the hashes. Figure out which of those 10 files map to the hashes, and ask the peer or mentor to check your work.
