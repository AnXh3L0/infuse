+++
style = "module"
weight = 9
title = "Malicious document analysis"
+++

## Use Case

While many people know to be suspicious of executable binary files, office document formats such as PDF, DOC, DOCX, XLSX, and ODT, which are used on a daily basis, are unfortunately known to be weaponized with malicious dynamic content or application exploits.

This subtopic teaches learners how they can triage and analyze potentially malicious documents.

## Objectives

After completing this subtopic, practitioners should be able to do the following:

- Set up a REMNux virtual machine for document analysis
- Disassemble and analyze PDF documents
- Disassemble and analyze Microsoft Office documents

---

Many threat actors can use documents with malicious payloads as an attack vector. Read through [this page](https://cyberhub.am/en/blog/2023/10/25/technical-writeup-malware-campaigns-targeting-armenian-infrastructure-and-users/) for a case study thereof.

_Greater Internet Freedom_, an Internews Project, recently created a small course on analyzing malicious documents. Read through all four parts of the course (listed below) in order to complete this subtopic.

Please note that some of the tools included in this guide require Python to be installed on your system. MacOS and Linux systems may have Python installed by default. If you are running Windows, we recommend setting up [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) and running the tools from there.

[Part 1 - Introduction and VMs - Internews Greater Internet Freedom](https://greaterinternetfreedom.org/course/part01-intro-and-vms/)\
[Part 2 - PDF Documents](https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-02-pdf-documents/)\
[Part 3 - Microsoft Office Documents](https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-03-microsoft-office-documents/)\
[Part 4 - Defensive Measures and Next Steps](https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-04-defensive-measures-next-steps-and-closure/)

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
   <td>Analysis of malicious documents – Part 01 – Introduction and VMs
   </td>
   <td>Introduces the topic of malicious document analysis and shows learners how to set up an appropriate VM for the task
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://greaterinternetfreedom.org/course/part01-intro-and-vms/">https://greaterinternetfreedom.org/course/part01-intro-and-vms/</a> 
   </td>
  </tr>
  <tr>
   <td>Analysis of malicious documents – Part 02 – PDF documents
   </td>
   <td>Shows how tools such as text editors and specialist PDF disassemblers can be used to analyze files in that format to look for things like executable scripts
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-02-pdf-documents/">https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-02-pdf-documents/</a> 
   </td>
  </tr>
  <tr>
   <td>Analysis of malicious documents – Part 03 – Microsoft Office documents
   </td>
   <td>Looks at the structure of Microsoft Office documents and how they can embed active content
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-03-microsoft-office-documents/">https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-03-microsoft-office-documents/</a> 
   </td>
  </tr>
  <tr>
   <td>Analysis of malicious documents – Part 04 – Defensive measures, next steps, and closure
   </td>
   <td>Demonstrates some steps and countermeasures we can take when working with documents from unknown sources or potentially malicious files
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-04-defensive-measures-next-steps-and-closure/">https://greaterinternetfreedom.org/course/analysis-of-malicious-documents-part-04-defensive-measures-next-steps-and-closure/</a> 
   </td>
  </tr>
  <tr>
   <td>Analyzing malicious PDFs
   </td>
   <td>A series of tools which we could use for even more in-depth analysis of PDF files
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://resources.infosecinstitute.com/topics/hacking/analyzing-malicious-pdf/">https://resources.infosecinstitute.com/topics/hacking/analyzing-malicious-pdf/</a> 
   </td>
  </tr>
  <tr>
   <td>How to analyze malicious Microsoft Office files
   </td>
   <td>An additional resource which looks at how Microsoft Office files could serve malicious payloads and how we can detect those
   </td>
   <td>English
   </td>
   <td>Free
   </td>
   <td><a href="https://intezer.com/blog/malware-analysis/analyze-malicious-microsoft-office-files/">https://intezer.com/blog/malware-analysis/analyze-malicious-microsoft-office-files/</a> 
   </td>
  </tr>
</table>

## Skill Check

Complete all of the challenges in the course linked above.
