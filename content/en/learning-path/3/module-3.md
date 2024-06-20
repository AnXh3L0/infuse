+++
style = "module"
weight = 3
title = "Sandboxes and dynamic analysis"
+++

## Use Case

Dynamic analysis is the process of running a piece of malware and observing what it does. The easiest way of doing dynamic analysis is by running a piece of software in a sandbox. A sandbox is a safe, isolated environment which opens a potentially malicious file, URL, or program and generates a huge amount of data on it. This subtopic looks at sandbox analysis, what it can and cannot do, and how to do it.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Understand the use case for and limitations of dynamic analysis
- Understand the advantages and limitations of sandboxes
- Open a suspicious file, URL, or program in a sandbox
- Be able to perform some basic dynamic analysis on either Windows or Android binaries using off-the-shelf tools

---

## Dynamic analysis

When you conduct dynamic analysis on a potentially suspicious file, you will open and execute the file in a specialized tool and observe what this file does, whether it tries to access other files, if it makes network connections, and the like. Static analysis, outlined in subtopic 4, on the other hand, disassembles the file rather than opening or executing it.

Depending on the situation, dynamic analysis can be easier or harder than static analysis, and it can also be more or less accurate. In practice, a combination of static and dynamic analysis will likely produce the best results. Most dynamic analysis will also involve some static analysis, so the line between the two techniques is often blurred.

The general setup for dynamic analysis includes a sandbox in which the malware is run, a debugger to control and monitor program execution, system monitoring to watch for changes to the sandbox system’s state, and something to mediate internet access to block, observe, and/or modify network traffic. These might all exist on one system, or they might be separate virtual or physical devices. For example, you may use a jailbroken iPhone as your sandbox, one tool for remote debugging and system monitoring, and another tool for internet mediation. Not all systems may be used in every situation, for example you might just capture network traffic and monitor system changes without using a debugger.

There are many different methods in which we could conduct dynamic analysis, including by opening up the executable in a sandbox and checking the network connections it makes. For a great resource on detecting malware through the network traffic it generates, check out [this guide](https://malware-traffic-analysis.net/).

In theory, dynamic analysis could tip off a threat actor that you are analyzing their malware. In practice, adversaries often expect their malware to be analyzed and it is very rare to encounter completely novel malware in your career. With the exception of some very sensitive cases, we would not worry about this risk.

## Sandboxes

A (malware) sandbox is a safe environment in which you can open and run a file or an URL. It is essentially a custom-designed virtual machine that is launched before the file or URL is opened, and is then shut down after a certain amount of time.

All the activities in the sandbox, such as files that are opened or created as well as network connections made, are recorded and accessible through an activity report. The activity report can help you understand whether the file or URL was malicious. It can also help you link malware to previously seen activities, for example based on specific network connections or files that are created.

Running known malware inside a sandbox can also be very helpful as you are learning more about malware. It helps you understand what malware does and what changes it makes on the system. For example, a lot of malware when initially run tries to ensure persistence so that it will still run following a reboot. These persistence methods are something you can look for when you perform manual forensics on a possible infected device.

A lot of malware has anti-sandbox features built in: when the malware detects it is running inside a sandbox environment, it will terminate or sometimes do something harmless to confuse the analysis. Moreover, some malware is designed to only run if specific conditions are met, for example a specific version of the operating system, or an IP address located in a specific country. Sandboxes are often updated to respond to anti-sandbox methods and many sandboxes let you choose the certain properties.

This is important to keep in mind when reading a sandbox report: a lack of malicious activity doesn’t automatically mean the file or URL isn’t malicious. On the other hand, if malicious activity was shown, you can be certain that the file or URL was malicious.

Check out [Chapter 10 of the Field Guide to incident response for civil society and media](https://internews.org/wp-content/uploads/2023/11/Field-Guide-to-Threat-Labs.pdf) for a more in-depth introduction to sandboxes.

It is possible to run a sandbox locally. [Cuckoo](https://cuckoosandbox.org/) is an open source sandbox that has been around for many years. A [new version](https://github.com/cert-ee/cuckoo3) is being developed but is not yet available at the time of writing (February 2024).

While running a sandbox locally gives you full control of the environment and means you can keep your files and URLs fully private, it can be quite a lot of work to set up and maintain. Thankfully, there are many online sandboxes available, such as [ANY.RUN](https://any.run/), [Hybrid Analysis](https://www.hybrid-analysis.com/), [Joe Sandbox](https://www.joesandbox.com/), [Triage](https://tria.ge/) and even an online version of [Cuckoo](https://cuckoo.cert.ee/). All of them have free versions that allow you to upload malware and URLs, though some do require registration. Do keep in mind that if you use a free version, anything you run inside a sandbox will be publicly available. This can be a concern if you don’t want to tip off an adversary or are dealing with very private data, such as potentially infected confidential documents.

## Dynamic analysis of Windows binaries

We recommend starting out with an overview class, this time from [OpenSecurityTraining](https://opensecuritytraining.info/Training.html). Their [Malware Dynamic Analysis](https://opensecuritytraining.info/MalwareDynamicAnalysis.html) class includes slides, lab materials, and videos, and it covers setup, analysis, and creating IoCs.

## Dynamic analysis of Android binaries

Many tools can be used to dynamically analyze Android binaries. Those include some of the sandboxes outlined above and [Frida](https://frida.re/docs/android/) (check out [this tool](https://github.com/nccgroup/house) for a GUI frontend to Frida).

PiRogue Tool Suite (outlined in the detecting malware learning path) can also [do excellent dynamic analysis](https://pts-project.org/guides/g8/) of Android binaries, though some of those analysis methods require you to first root your device.

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
   <td>Chapter 10, Field Guide to incident response for civil society and media
   </td>
   <td>The first pages of this chapter provide an in-depth look at how we can use sandboxes to analyze email payloads.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://internews.org/wp-content/uploads/2023/11/Field-Guide-to-Threat-Labs.pdf">https://internews.org/wp-content/uploads/2023/11/Field-Guide-to-Threat-Labs.pdf</a> 
   </td>
  </tr>
  <tr>
   <td>Any.run
   </td>
   <td>A commercial sandbox
   </td>
   <td>English
   </td>
   <td>Free only for non-commercial use
   </td>
   <td><a href="https://any.run/">https://any.run/</a> 
   </td>
  </tr>
  <tr>
   <td>Joe Sandbox
   </td>
   <td>Another commercial sandbox
   </td>
   <td>English
   </td>
   <td>Free for public accounts (the results of the analysis will be published on the website)
   </td>
   <td><a href="https://www.joesandbox.com/#windows">https://www.joesandbox.com/#windows</a>  
   </td>
  </tr>
  <tr>
   <td>Cuckoo Sandbox
   </td>
   <td>A sandbox service run by the Estonian CERT (Computer Emergency Response Team)
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://cuckoo.cert.ee/">https://cuckoo.cert.ee/</a>
<p>
<a href="https://cuckoo-hatch.cert.ee/">https://cuckoo-hatch.cert.ee/</a> 
   </td>
  </tr>
  <tr>
   <td>Hybrid Analysis
   </td>
   <td>A sandbox service by CrowdStrike which mixes static and dynamic analysis
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.hybrid-analysis.com/">https://www.hybrid-analysis.com/</a> 
   </td>
  </tr>
  <tr>
   <td>Triage sandbox
   </td>
   <td>Community driven sandbox
   </td>
   <td>English
   </td>
   <td>Registration required
   </td>
   <td><a href="https://tria.ge/">https://tria.ge/</a> 
   </td>
  </tr>
  <tr>
   <td>Online class on malware dynamic analysis
   </td>
   <td>A three-day class that provides an interview of dynamic malware analysis.
<p>
While the class might be based on Windows XP, all that matters at this stage of malware analysis is the program binary format. The basics thereof have not changed in the last decade+, rendering the class still relevant.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://opensecuritytraining.info/MalwareDynamicAnalysis.html">https://opensecuritytraining.info/MalwareDynamicAnalysis.html</a> 
   </td>
  </tr>
  <tr>
   <td>Case study 1: Dynamic Analysis of a Windows Malicious Self-Propagating Binary
   </td>
   <td>This blogpost, a 15 minute read, demonstrates dynamic analysis of a Windows binary, including network traffic and command and control traffic.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.keysight.com/blogs/tech/nwvs/2022/06/10/dynamic-analysis-of-a-windows-malicious-self-propagating-binary">https://www.keysight.com/blogs/tech/nwvs/2022/06/10/dynamic-analysis-of-a-windows-malicious-self-propagating-binary</a> 
   </td>
  </tr>
  <tr>
   <td>Case study 2: Configuring a Windows Domain to Dynamically Analyze an Obfuscated Lateral Movement Tool
   </td>
   <td>Investigates malware that has pretty powerful de-obfuscation mechanisms and explains how security analysts can use dynamic analysis to learn more about it. It includes pieces on how to build a test environment and do dynamic analysis on a specific domain.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.real-sec.com/2020/07/configuring-a-windows-domain-to-dynamically-analyze-an-obfuscatedlateral-movement-tool/">https://www.real-sec.com/2020/07/configuring-a-windows-domain-to-dynamically-analyze-an-obfuscatedlateral-movement-tool/</a>  
   </td>
  </tr>
  <tr>
   <td>Cast study 3: Starting dynamic analysis on a Windows x64 rootkit
   </td>
   <td>An in-depth look at the dynamic analysis of Windows rootkits, including an overview of how to set up a VM specifically to collect data on it. Also shows how to combine static and dynamic analysis.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://medium.com/@0x4ndr3/starting-dynamic-analysis-on-a-windows-x64-rootkit-8c7a74871fda">https://medium.com/@0x4ndr3/starting-dynamic-analysis-on-a-windows-x64-rootkit-8c7a74871fda</a> 
   </td>
  </tr>
  <tr>
   <td>Malware traffic analysis
   </td>
   <td>A great resource which looks at how to use captured network packets to detect and analyze malware.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://malware-traffic-analysis.net/">https://malware-traffic-analysis.net/</a> 
   </td>
  </tr>
  <tr>
   <td>Hack The Box course on mobile penetration testing
   </td>
   <td>The tools and techniques used for mobile malware dynamic analysis are largely the same as those used for mobile application penetration testing. This article (and associated exercises) provides a solid introduction to the practice.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://www.hackthebox.com/blog/intro-to-mobile-pentesting">https://www.hackthebox.com/blog/intro-to-mobile-pentesting</a> and <a href="https://app.hackthebox.com/tracks/Intro-to-Android-Exploitation">https://app.hackthebox.com/tracks/Intro-to-Android-Exploitation</a> 
   </td>
  </tr>
  <tr>
   <td>Frida and House for Android
   </td>
   <td>Frida is an open-source multi-platform debugging framework. While it doesn’t have a GUI, it is quite powerful, letting you dynamically monitor app behavior. To make it a little easier to use, there’s a tool called House that is an interface to Frida.
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://frida.re/docs/android/">https://frida.re/docs/android/</a> and <a href="https://github.com/nccgroup/house">https://github.com/nccgroup/house</a> 
   </td>
  </tr>
  <tr>
   <td>Advanced guide - How to use PiRogue to intercept the TLS traffic of a mobile app
   </td>
   <td>A series of instructions on how you could use PiRogue Tool Suite in order to perform dynamic analysis on potentially malicious Android binaries
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://pts-project.org/guides/g8/">https://pts-project.org/guides/g8/</a> 
   </td>
  </tr>
</table>

## Skill Check

### General

1. Go to the ‘Sandbox’ section in Chapter 10 of the [Field Guide to incident response for civil society and media](https://internews.org/resource/field-guide-to-incident-response-for-civil-society-and-media/) and do exercises 10.2 to 10.4. In the last exercise, make sure you run at least one macOS and Android malware sample each.
2. In the same chapter, skip to the ‘Analyzing links’ subsection and do exercise 10.12.

### Windows-specific

Perform dynamic analysis on a piece of non-malicious Windows software. It probably includes an installer, which will perform similar actions to malware. What files does it create? What registry keys does it create? What network traffic does it send?
