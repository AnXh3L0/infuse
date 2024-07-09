---
style: module
title: "Enquête active : analyse des e-mails malveillants"
description: Qu'il s'agisse de pure ingénierie sociale, de phishing ou de
  livraison de logiciels malveillants, les e-mails malveillants peuvent être
  assez complexes. Ce module vous apprendra à les interpréter et à les
  comprendre, ainsi qu'à trouver l'infrastructure à laquelle ils sont liés.
weight: 6
---

## Cas d'utilisation

Ce module vous apprendra à **interpréter et à comprendre les e-mails malveillants** et à **trouver l’infrastructure à laquelle ils sont liés**. Qu'il s'agisse d'ingénierie sociale pure, d'hameçonnage ou de diffusion de logiciels malveillants, les e-mails malveillants peuvent être assez complexes. Bien que l'objectif immédiat de cette compétence soit d'identifier l'infrastructure des cybercriminels, ces compétences avancées d'inversion des e-mails complexes sont également une bonne préparation pour comprendre les campagnes des cybercriminels, et elles constituent une bonne introduction à l'analyse des logiciels malveillants plus complexes. Certaines de ces techniques peuvent également **vous aider à analyser les messages suspects envoyés par d'autres moyens, tels que WhatsApp**.

Notez que pendant l'enquête active, vous devrez peut-être effectuer des actions qui alerteront le cybercriminel au sujet de l'enquête (ou au moins que quelqu'un interagit avec son piège). Déterminez s'il s'agit d'un coût acceptable pour mener une enquête.

Il est préférable d'effectuer ce type d'analyse à partir d'une machine virtuelle ou d'un appareil dédié. Pour assurer une protection supplémentaire, il peut être judicieux d'utiliser un VPN de bonne réputation afin que votre adresse IP ne fuie pas lorsque vous effectuez une enquête active.

Ce module traite de l'analyse du _corps_ d'un e-mail malveillant, tandis que le module

Investigation passive : analyser les en-têtes des e-mails traite des _en-têtes_ des e-mails. Pour effectuer des enquêtes appropriées, vous pourriez utiliser les deux compétences. Notez que l'analyse du contenu et des comportements des pièces jointes est couverte dans le parcours d'apprentissage Analyse des logiciels malveillants.

## Objectifs

Après avoir terminé ce sous-thème, les participants devraient être en mesure de faire ce qui suit :

- Analyser le code HTML d'un e-mail et comprendre les bases du MIME ;
- Comprendre et détecter les pixels de suivi et le contenu actif similaire ;
- Utiliser des outils tels que VirusTotal et URLScan pour évaluer les pièces jointes et les URL de contenus malveillants.

---

## Connaissances de base : HTML Emails et MIME

Afin de pratiquer cela, vous devez comprendre les bases des courriels HTML et MIME. Si vous pensez qu'il est nécessaire de revenir un peu sur ce sujet, consultez certaines des ressources sur les sujets clés ci-dessous :

- La majorité des e-mails sont envoyés au format HTML, ce qui permet l'utilisation de diverses méthodes intelligentes de présentation et de tromperie par les hameçonneurs.
- Bien qu'il ne soit pas nécessaire d'avoir la capacité d'écrire du code HTML ou de concevoir des pages Web, les participants doivent être familiers avec l'ouverture et l'examen du code source d'un e-mail HTML et comprendre les éléments essentiels présents. Pour ce faire, lisez cette introduction aux e-mails [MIME](https://learn.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/aa494197%28v=exchg.140%29) et HTML.
- L'apprentissage des bases du HTML est inévitable et des ressources comme [W3Schools](https://www.w3schools.com/html/) peuvent fournir un bon point de départ. Notez également que certains clients de messagerie (par exemple Outlook) ne vous permettent pas de télécharger tout le corps des e-mails.
- MIME est une norme Internet qui étend le format des e-mails au-delà des e-mails en texte brut et permet le texte dans des jeux de caractères autres que ASCII, des pièces jointes non textuelles, des corps de messages avec plusieurs parties et des informations d'en-tête dans des jeux de caractères non-ASCII. Les fonctionnalités MIME peuvent être utilisées à mauvais escient pour masquer du contenu et attacher du contenu malveillant. [Cet article de Wikipédia](https://en.wikipedia.org/wiki/MIME) fournit une bonne introduction initiale.

## Identification des menaces potentielles : images intégrées et pixels de suivi

Lorsque vous enquêtez sur des e-mails potentiellement malveillants pour découvrir une infrastructure malveillante, ne cherchez pas seulement des liens et des pièces jointes. Les cybercriminels peuvent inclure des traqueurs dans leurs e-mails, tout comme les spécialistes du marketing. [Cet article pour les spécialistes du marketing](https://www.nutshell.com/blog/email-tracking-pixels-101-how-do-tracking-pixels-work) explique comment fonctionne le suivi des e-mails. Notez que n'importe quelle ressource chargée à partir du Web, pas seulement des images, peut être utilisée pour le suivi. Examinez les types d'informations qui peuvent être obtenues par un pixel de suivi ou un élément de suivi, y compris l'adresse IP (géolocalisation) et les informations d'empreintes digitales du navigateur. Internews a créé un exercice de formation (décrit dans la section pratique ci-dessous) qui vous aidera à vous familiariser avec les traqueurs et certaines des informations qu'ils peuvent repérer.

## Outils et flux de travail pour l'analyse des e-mails malveillants

Une fois que vous avez compris les concepts fondamentaux et les menaces potentielles, vous avez besoin d'un flux de travail et d'outils d’analyse.

- Le flux de travail [Suspicious Phishing Email](https://communitydocs.accessnow.org/58-Suspicious_Phishing_Email.html) d'Access Now fournit une approche systématique pour évaluer les e-mails suspects. Il comprend une liste d'étapes allant de l'observation initiale à la catégorisation et au signalement des menaces.
- [VirusTotal](https://virustotal.com/) peut être utilisé pour évaluer les URL et les pièces jointes pour le contenu malveillant connu. Notez cependant que les URL et les fichiers soumis peuvent être consultés par d'autres utilisateurs et peuvent conduire à ce que le cybercriminel soit alerté de l'analyse effectuée. Ce n'est généralement qu'un risque lors de campagnes très ciblées ; dans d'autres cas, les cybercriminels supposent généralement que quelqu'un a détecté et analysé leurs modèles d'attaque.
- Consultez [quelques-uns des outils d'analyse des e-mails décrits dans cet article](https://intezer.com/blog/incident-response/automate-analysis-phishing-email-files/). Ils peuvent examiner le contenu des e-mails et les pièces jointes, et plusieurs d'entre eux sont basés sur la ligne de commande, ce qui est particulièrement utile pour les analystes qui examinent le contenu créé par des acteurs sophistiqués, qui pourraient essayer de créer des messages de manière à exploiter les failles de sécurité des programmes de messagerie. L'article détaille également certaines techniques utilisées par les auteurs de menaces pour entraver l'analyse. [Cet article](https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91) examine également la façon de convertir des fichiers Outlook en texte brut et de les analyser via un bloc-notes ou une ligne de commande, afin de réduire la surface d'attaque des e-mails malveillants qui exploitent les bugs d'Outlook.

## Pratique

- Lisez attentivement les deux études de cas ci-dessous, en notant tous les éléments qui sont nouveaux pour vous et qui nécessitent une pratique supplémentaire :
  - [Analyser les fichiers d'e-mails malveillants | par Josh Lemon | Medium](https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91)
  - [Analyser les e-mails malveillants. Une introduction à l'analyse d'un e-mail d'hameçonnage | par Kyle Bubp | Medium](https://medium.com/@kylebubp/analyzing-malicious-emails-fb4ddcf0663e)
- Un projet Internews qui se concentre sur la sécurité des journalistes [a créé un exercice de simulation](https://docs.google.com/document/d/1QZWSERCexs8uGEyVzUZ9-9Ep-Z7XJle_/edit#heading=h.xc3zfaqq1a2o) pour aider les utilisateurs à mieux comprendre et à pratiquer le travail avec les traqueurs. Parcourez le projet et faites quelques exercices.

## Contrôle de compétence

Demandez à un pair ou à un mentor de vous envoyer un e-mail. Idéalement, l'e-mail contiendra plusieurs éléments tels que des pixels de suivi, des pièces jointes et des liens qui nécessiteraient une analyse approfondie. Sinon, accédez à votre propre boîte de réception et choisissez un e-mail non malveillant (espérons-le). Utilisez les compétences utilisées dans ce module pour l'analyser :

- Pouvez-vous lire les en-têtes de l'e-mail pour déterminer l'adresse de l'expéditeur ?
- Pouvez-vous confirmer l'authenticité de l'expéditeur ? Est-il probable que l'e-mail ait été falsifié ?
- Quelle infrastructure a été utilisée pour transmettre le message ?
- Quel contenu actif (MIME, pixels de suivi) est inclus dans l'e-mail ?
- Quelles données pourraient être divulguées en ouvrant et en interagissant avec l'e-mail ?
- Qu'est-ce que l'expéditeur veut que vous fassiez à la réception de l'e-mail ?

Discutez de vos réponses aux questions ci-dessus avec votre pair ou votre mentor.

## Ressources d'apprentissage

{{% resource title="Introduction to HTML email" languages="Multiple" cost="Free" description="A brief introduction to the concept of sending emails that contain HTML." url="https://en.wikipedia.org/wiki/HTML_email" %}}

{{% resource title="Introduction to MIME" languages="Multiple" cost="Free" description="A brief introduction to the MIME format for messages." url="https://en.wikipedia.org/wiki/MIME" %}}

{{% resource title="How to include images in email" languages="English" cost="Free" description="Although this page is oriented towards email senders, it goes over the ways that attackers may embed images in their email." url="https://mailchimp.com/resources/embed-image-in-email/" %}}

{{% resource title="Learn HTML" languages="Multiple (auto-translated)" cost="Free" description="Most phishing malicious emails use HTML to deceive users. In order to extract URLs (and thus server addresses) from emails, you will have to learn some HTML." url="https://www.w3schools.com/html/" %}}

{{% resource title="Intro to tracking pixels" languages="English" cost="Free" description="When investigating potentially malicious emails to discover attacker infrastructure, don’t just look for links and attachments. Attackers may include trackers in their emails, just like marketers do. This article for marketers explains how email tracking works. Note that any resource loaded from the web can be used for tracking." url="https://www.nutshell.com/blog/email-tracking-pixels-101-how-do-tracking-pixels-work" %}}

{{% resource title="VirusTotal" languages="Main interface is in English" cost="Free, with some rate limitations and additional pro features" description="A tool to evaluate URLs and attachments for known malice. Note that submitted URLs and files can be accessed by other users." url="https://www.virustotal.com/gui/home/url" %}}

{{% resource title="Malicious email workflow" languages="Multiple" cost="Free" description="A playbook for what to do when evaluating a suspicious email." url="https://communitydocs.accessnow.org/58-Suspicious_Phishing_Email.html" %}}

{{% resource title="Exchange malicious email investigation playbook" languages="English" cost="Free" description="A playbook for investigating malicious emails in a Microsoft Exchange environment (where the investigator has admin access)." url="https://learn.microsoft.com/en-us/security/operations/incident-response-playbook-phishing" %}}

{{% resource title="Example analyses of phishing emails" languages="English" cost="Free" description="Analyses of sample phishing emails. Includes a look at HTML files with embedded malicious scripts and encoded content." url="https://medium.com/@kylebubp/analyzing-malicious-emails-fb4ddcf0663e" additional_urls="https://www.vadesecure.com/en/blog/m365-phishing-email-analysis-eevilcorp" %}}

{{% resource title="Example analyses of malware emails" languages="English" cost="Free" description="Since malicious emails could exploit security holes within email programs, this guide shows how best to analyze them using command line tools and text editors." url="https://intezer.com/blog/incident-response/automate-analysis-phishing-email-files/" additional_urls="https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91" %}}


