---
theme: default
fonts:
  sans: 'Nunito Sans'
  serif: 'Nunito Sans'
  mono: 'Fira Code'
---

---
layout: default
title: NoSQL
subtitle: Relevanz im Big-Data Kontext
colorSchema: light
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
footnotes:
  - "Unter anderem werden keine UI-Elemente betrachtet."
  - "Bildquelle: Eigene Darstellung (erstellt mit Mermaid.js)"
---

das ist ein test

<Outline>
  <OutlineItem :number="1">Einführung</OutlineItem>
  <OutlineItem :number="2">Konzeptuelle Modellierung</OutlineItem>
  <OutlineItem :number="3">Informationsarchitektur</OutlineItem>
  <OutlineItem :number="4">Interaktionsdesign</OutlineItem>
  <OutlineItem :number="5">Interfacedesign</OutlineItem>
  <OutlineItem :number="6" active>Informationsdesign</OutlineItem>
  <OutlineItem :number="7" disabled>Sensorisches Design</OutlineItem>
  <OutlineItem :number="8" disabled>Gestaltungsrichtlinien</OutlineItem>
</Outline>

---
layout: default
title: NoSQL
subtitle: Relevanz im Big-Data Kontext
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
source: https://www.geeksforgeeks.org/dbms/types-of-nosql-databases/
---

<Quotebox source="[UXQ23, S. 39]">
  Ein Nutzungsszenario (use scenario) ist eine "erzählende, textuelle Beschreibung,
  wie ein Benutzer eine oder mehrere Aufgaben mit dem geplanten interaktiven
  System ausführen wird".
</Quotebox>

<BulletedList title="Anmerkungen">
  <li>
    Es beschreibt die konkrete Erledigung einer Aufgabe am <span class="highlight">zukünftigen</span> System aus der Perspektive des Benutzers
    <SubText>Technische Aspekte des interaktiven Systems bleiben außen vor</SubText>
  </li>
  <li>
    Typische Darlegungsformen: Narrative Form, Storyboard
    <SubText>Zur Veranschaulichung von Nutzungsszenarien können zudem <span class="highlight">User Journey Maps</span> dienen</SubText>
  </li>
</BulletedList>

---
layout: default
title: Text Komponente Demo
subtitle: Mit SubText Beispielen
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
---

<Text title="Text Komponente">
  Dies ist ein normaler Text mit der <span class="highlight">highlight</span> Klasse für wichtige Begriffe.
  <SubText>Dies ist ein SubText, der zusätzliche Informationen liefert und in grauer Farbe dargestellt wird.</SubText>
</Text>

<Text title="Weiteres Beispiel">
  Die <span class="highlight">Text-Komponente</span> folgt dem gleichen Pattern wie BulletedList.
  <SubText>Sie unterstützt auch <span class="highlight">Highlights</span> innerhalb des SubTexts für besondere Hervorhebungen.</SubText>
</Text>

---
layout: default
title: HighlightBox Demo
subtitle: Hervorgehobene Infoboxen
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
---

<HighlightBox title="Farbwiedergabe">
  Ausgabegeräte können nur einen Ausschnitt eines Farbraums darstellen, den sog. Gamut. Die Wiedergabe einer Farbe kann zudem von Gerät zu Gerät variieren (z. B. IPS vs. OLED-Panel).
</HighlightBox>

---
layout: default
title: Code Komponente Demo
subtitle: Mit Syntax-Highlighting
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
---

<Code title="TypeScript Beispiel">

```typescript
import { IonButton } from '@ionic/core/components/ion-button.js';
import { IonIcon } from 'ionicons/components/ion-icon.js';
import { initialize } from '@ionic/core/components';
import { star } from 'ionicons/icons';

initialize();
addIcons({ 'star': star });
customElements.define('ion-button', IonButton);
customElements.define('ion-icon', IonIcon);
```

</Code>

<Code title="Vue Template Beispiel">

```vue
<ion-app>
  <ion-header>
    <ion-toolbar><ion-title>Listen</ion-title></ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-list-header>Title</ion-list-header>
      <ion-item>Non clickable</ion-item>
      <ion-item button>Clickable</ion-item>
    </ion-list>
  </ion-content>
</ion-app>
```

</Code>

---
layout: default
title: Nativ Slidev Code-Blöcke
subtitle: Mit Line Highlighting
chapter: Test
presentation: MongoDB und Redis im Big-Data Kontext
---

# Mit Slidev Features

Slidev unterstützt Line Highlighting direkt:

```typescript {2,5-7}
import { IonButton } from '@ionic/core/components/ion-button.js';
import { IonIcon } from 'ionicons/components/ion-icon.js';
import { initialize } from '@ionic/core/components';
import { star } from 'ionicons/icons';

initialize();
addIcons({ 'star': star });
```

<BulletedList title="Slidev Code Features">
  <li>
    <span class="highlight">Line Highlighting</span>: Mit {2,5-7} Syntax
    <SubText>Hebt bestimmte Zeilen hervor</SubText>
  </li>
  <li>
    <span class="highlight">Shiki Syntax</span>: Automatisches Highlighting
    <SubText>Unterstützt alle gängigen Sprachen</SubText>
  </li>
</BulletedList>

---
layout: cover
---

# Ende