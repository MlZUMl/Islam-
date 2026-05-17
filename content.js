// ══════════════════════════════════════
// NOUR — content.js
// ══════════════════════════════════════

// ── CATEGORIES ──
const CATS = {
  fondements:{modules:[
    {id:"piliers",icon:"🕌",name:"5 Piliers"},
    {id:"foi",icon:"✨",name:"6 Piliers Foi"},
    {id:"noms",icon:"💎",name:"99 Noms Allah"},
    {id:"vocab",icon:"📝",name:"Vocabulaire"}
  ]},
  pratique:{modules:[
    {id:"salat",icon:"🙏",name:"La Salât"},
    {id:"wudu",icon:"💧",name:"Ablutions"},
    {id:"ramadan",icon:"🌙",name:"Ramadan"},
    {id:"hajj",icon:"🕋",name:"Hajj & Umra"},
    {id:"zakat",icon:"💰",name:"Zakat"},
    {id:"halal",icon:"✅",name:"Halal & Haram"},
    {id:"mort",icon:"🕯️",name:"La Mort"},
    {id:"dua",icon:"🤲",name:"La Dua"},
    {id:"ruqya",icon:"🌿",name:"La Ruqya"},
    {id:"tasbeeh",icon:"📿",name:"Tasbeeh"}
  ]},
  coran:{modules:[
    {id:"sourates",icon:"📖",name:"20 Sourates"},
    {id:"dhikr",icon:"🌸",name:"Dhikr & Duas"}
  ]},
  connaissance:{modules:[
    {id:"prophetes",icon:"🌟",name:"25 Prophètes"},
    {id:"sira",icon:"💛",name:"Vie du Prophète ﷺ"},
    {id:"anges",icon:"👼",name:"Les Anges"},
    {id:"livres",icon:"📜",name:"Livres Saints"},
    {id:"djinns",icon:"🔥",name:"Les Djinns"},
    {id:"qadar",icon:"🔮",name:"Al-Qadar"},
    {id:"compagnons",icon:"🕊️",name:"Compagnons"},
    {id:"maryam",icon:"🌹",name:"Maryam"},
    {id:"femmes",icon:"👑",name:"Grandes Femmes"},
    {id:"creation",icon:"🌌",name:"Création univers"}
  ]},
  "audelà":{modules:[
    {id:"paradis",icon:"🚪",name:"Paradis & Enfer"},
    {id:"jugement",icon:"⚖️",name:"Jugement Dernier"},
    {id:"barzakh",icon:"☁️",name:"Barzakh"}
  ]},
  spirituel:{modules:[
    {id:"peches",icon:"⚠️",name:"Les Péchés"},
    {id:"coeur",icon:"💚",name:"Santé du Cœur"},
    {id:"shaitan",icon:"😈",name:"Shaitan"},
    {id:"tawbah",icon:"🌱",name:"Le Repentir"},
    {id:"dounia",icon:"🌍",name:"La Dounia"},
    {id:"baraka",icon:"✨",name:"La Baraka"},
    {id:"epreuves",icon:"🌊",name:"Les Épreuves"},
    {id:"famille",icon:"👨‍👩‍👧",name:"Famille"},
    {id:"reves",icon:"💤",name:"Les Rêves"},
    {id:"nafs",icon:"🫀",name:"Le Nafs"},
    {id:"paix",icon:"☮️",name:"Paix intérieure"},
    {id:"croissance",icon:"🌿",name:"Croissance spirituelle"}
  ]},
  histoire:{modules:[
    {id:"frise",icon:"📅",name:"Frise historique"},
    {id:"califes",icon:"👑",name:"4 Califes"},
    {id:"batailles",icon:"⚔️",name:"Grandes Batailles"},
    {id:"mekkemed",icon:"🕌",name:"Mecque & Médine"},
    {id:"empire",icon:"🗺️",name:"Empire islamique"},
    {id:"savants",icon:"🔬",name:"Savants de l'Islam"}
  ]},
  quiz:{modules:[{id:"quiz",icon:"🧠",name:"Quiz"}]}
};

// ── HELPERS ──
function ab(a,p,t){return `<div class="ab"><div class="at">${a}</div><div class="ap">🔊 ${p}</div><div class="af">🇫🇷 ${t}</div></div>`;}
function src(s){return `<span class="src">📚 ${s}</span>`;}
function q(t){return `<div class="q">${t}</div>`;}
function r(h){return `<div class="r">${h}</div>`;}
function sh(title,desc){return `<div class="sh"><div class="st2">${title}</div><div class="sd">${desc}</div></div><div class="orn"><span>✦ ✦ ✦</span></div>`;}
function xc(icon,title,sub,body,delay){
  return `<div class="xc" style="animation-delay:${delay||0}s" onclick="toggleCard(this)">
    <div class="xh"><div class="xn">${icon}</div><div class="xi"><div class="xt">${title}</div>${sub?`<div class="xs">${sub}</div>`:""}</div><div class="xa">▼</div></div>
    <div class="xb">${body}</div>
  </div>`;
}

// ══════════════════════════════════════
// CONTENT MODULES
// ══════════════════════════════════════
const C = {};

// ── PILIERS ──
C.piliers = () => sh("🕌 Les 5 Piliers de l'Islam","Les cinq fondements obligatoires sur lesquels repose toute la pratique islamique pour tout musulman adulte.") + [
  ["🗣️","La Shahada — Le Témoignage de Foi","",
   ab("أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّداً رَسُولُ اللهِ",
      "Ash-hadu an lâ ilâha illallâh wa ash-hadu anna Muhammadan rasûlullâh",
      "Je témoigne qu'il n'y a de divinité qu'Allah, et je témoigne que Muhammad est Son messager.")+
   r(`<p>La Shahada est la porte d'entrée dans l'Islam. Elle contient deux témoignages indissociables : <strong>l'unicité absolue d'Allah (At-Tawhid)</strong> et la <strong>prophétie de Muhammad ﷺ</strong>.</p>
<p><strong>Les 3 niveaux du Tawhid :</strong></p>
<ul>
<li><strong>Tawhid Ar-Rububiyya</strong> (تَوْحِيدُ الرُّبُوبِيَّة) — Taw-hîd ar-roubou-biyya — Croire qu'Allah seul est le Seigneur, Créateur et Maître de l'univers</li>
<li><strong>Tawhid Al-Uluhiyya</strong> (تَوْحِيدُ الأُلُوهِيَّة) — Taw-hîd al-oulous-iyya — N'adorer qu'Allah seul, sans aucun intermédiaire</li>
<li><strong>Tawhid Al-Asma wa As-Sifat</strong> (تَوْحِيدُ الأَسْمَاء وَالصِّفَات) — Taw-hîd al-asmâ was-sifât — Croire en Ses noms et attributs tels qu'Il les a décrits</li>
</ul>
<p><strong>Conditions de validité :</strong> La prononcer en arabe, la comprendre, la croire sincèrement dans le cœur, et ne pas la contredire par ses actes.</p>`)+src("Coran 3:18 — Sahih Boukhari n°8")],

  ["🙏","La Salât — La Prière (5 fois/jour)","",
   r(`<p>La Salât (الصَّلَاة — as-salât) est le lien permanent entre le croyant et Allah. C'est le <strong>2ème pilier</strong> et le premier acte sur lequel on sera interrogé au Jugement.</p>
<p><strong>Les 5 prières et leurs rak'at :</strong></p>
<ul>
<li><strong>Fajr</strong> (الفَجْر — al-fajr) — L'aube — 2 rak'at Fard</li>
<li><strong>Dhuhr</strong> (الظُّهْر — adh-dhouhr) — Midi — 4 rak'at Fard</li>
<li><strong>Asr</strong> (العَصْر — al-'asr) — Après-midi — 4 rak'at Fard</li>
<li><strong>Maghrib</strong> (المَغْرِب — al-maghrib) — Coucher du soleil — 3 rak'at Fard</li>
<li><strong>Isha</strong> (العِشَاء — al-'ichâ) — La nuit — 4 rak'at Fard</li>
</ul>`)+
   q("\"La prière est le pilier de la religion. Celui qui l'accomplit a soutenu la religion, celui qui l'abandonne l'a renversée.\" — Tirmidhi n°2616 (Sahih)")+
   src("Coran 2:43 — Sahih Boukhari n°8")],

  ["💰","La Zakat — Purification des Biens","",
   r(`<p>La Zakat (الزَّكَاة — az-zakât) est l'aumône obligatoire représentant <strong>2,5% de l'épargne</strong> conservée pendant un an (Hawl) au-dessus du Nisab (valeur de 85g d'or). Le mot Zakat signifie à la fois <em>purification</em> et <em>croissance</em>.</p>
<p><strong>8 catégories de bénéficiaires (Coran 9:60) :</strong></p>
<ul>
<li>Les pauvres (Al-Fuqara — الفُقَرَاء)</li>
<li>Les nécessiteux (Al-Masakin — المَسَاكِين)</li>
<li>Les collecteurs de Zakat</li>
<li>Les cœurs à rapprocher de l'Islam</li>
<li>Pour affranchir les esclaves</li>
<li>Les débiteurs incapables de rembourser</li>
<li>Ceux qui combattent dans le chemin d'Allah</li>
<li>Les voyageurs en détresse (Ibn As-Sabil)</li>
</ul>`)+src("Coran 9:60 — Coran 9:103 — Sahih Boukhari n°8")],

  ["🌙","Le Sawm — Le Jeûne du Ramadan","",
   r(`<p>Le Sawm (الصَّوْم — as-sawm) consiste à s'abstenir de toute nourriture, boisson, rapport intime et comportement blâmable du lever au coucher du soleil pendant le mois de Ramadan.</p>`)+
   q("\"Quiconque jeûne le Ramadan par foi et en espérant la récompense d'Allah, ses péchés passés lui seront pardonnés.\" — Sahih Boukhari n°38")+
   src("Coran 2:183-185 — Sahih Boukhari n°38")],

  ["🕋","Le Hajj — Le Pèlerinage à La Mecque","",
   r(`<p>Le Hajj (الحَجّ — al-hajj) est obligatoire <strong>une fois dans la vie</strong> pour tout musulman physiquement et financièrement capable. Il se déroule au mois de Dhul-Hijja.</p>
<p><strong>Principaux rites :</strong></p>
<ul>
<li>L'Ihram (الإِحْرَام — al-ihrâm) — Intention et état de sacralisation</li>
<li>Le Tawaf (الطَّوَاف — at-tawâf) — 7 tours autour de la Ka'ba</li>
<li>La station à Arafat (عَرَفَات) — Pilier fondamental du Hajj</li>
<li>Le Sa'i (السَّعْي) — 7 allers-retours entre Safa et Marwa</li>
<li>La Rami (رَمْي الجَمَرَات) — Lancer des pierres sur les colonnes</li>
<li>L'Aïd Al-Adha — Le sacrifice (Udhiyya)</li>
</ul>`)+src("Coran 3:97 — Sahih Boukhari n°8")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── FOI ──
C.foi = () => sh("✨ Les 6 Piliers de la Foi (Iman)","La foi en Islam repose sur 6 croyances fondamentales. Leur ensemble constitue l'Iman complet. (Hadith Jibril — Sahih Muslim n°8)") + [
  ["✨","Foi en Allah","الإِيمَانُ بِاللهِ — Al-Îmânou billâh",
   ab("الإِيمَانُ بِاللهِ","Al-Îmânou billâh","La foi en Allah")+
   r(`<p>Croire en l'unicité absolue d'Allah. Il est <strong>Al-Ahad</strong> (الأَحَد — l'Unique), <strong>As-Samad</strong> (الصَّمَد — l'Indépendant absolu). Il n'a ni associé, ni enfant, ni épouse.</p>
<p>Cette foi englobe les 3 niveaux du Tawhid : Rububiyya (seigneurie), Uluhiyya (adoration exclusive), et Asma wa As-Sifat (noms et attributs).</p>`)+src("Coran 112:1-4")],

  ["👼","Foi en les Anges","الإِيمَانُ بِالمَلَائِكَة — Al-Îmânou bil-malâïka",
   ab("الإِيمَانُ بِالمَلَائِكَة","Al-Îmânou bil-malâïka","La foi en les Anges")+
   r(`<p>Les anges sont des créatures de lumière créées avant l'humanité, sans libre arbitre, qui obéissent parfaitement à Allah. Jibril, Mikail, Israfil, Azrael, Munkar et Nakir, Ridwan, Malik...</p>`)+src("Coran 2:285")],

  ["📜","Foi en les Livres Saints","الإِيمَانُ بِالكُتُب — Al-Îmânou bil-koutob",
   ab("الإِيمَانُ بِالكُتُب","Al-Îmânou bil-koutob","La foi en les Livres Saints")+
   r(`<p>La Tawrat (Moïse), le Zabur (David), l'Injil (Issa), les Suhuf (Ibrahim et Adam), et le Coran (Muhammad ﷺ). <strong>Seul le Coran est préservé intact</strong> — Allah en a Lui-même garanti la préservation (Coran 15:9).</p>`)+src("Coran 2:285 — Coran 15:9")],

  ["🌟","Foi en les Prophètes","الإِيمَانُ بِالرُّسُل — Al-Îmânou bir-rousoul",
   ab("الإِيمَانُ بِالرُّسُل","Al-Îmânou bir-rousoul","La foi en les Prophètes")+
   r(`<p>Allah a envoyé des prophètes à chaque peuple pour les guider. Le premier est <strong>Adam</strong>, le dernier est <strong>Muhammad ﷺ</strong> — Khatam An-Nabiyyin (خَاتَمُ النَّبِيِّين — le Sceau des Prophètes). Tous étaient humains mais protégés de l'erreur dans leur mission (Isma).</p>`)+src("Coran 33:40 — Coran 2:285")],

  ["☁️","Foi en le Jour Dernier","الإِيمَانُ بِاليَوْمِ الآخِر — Al-Îmânou bil-yawm al-âkhir",
   ab("الإِيمَانُ بِاليَوْمِ الآخِر","Al-Îmânou bil-yawm al-âkhir","La foi en le Jour Dernier")+
   r(`<p>Croire au Barzakh (la vie dans la tombe), à la Résurrection, au Jugement, à la Balance (Al-Mizan), au Pont (As-Sirat), au Paradis (الجَنَّة — Al-Janna) et à l'Enfer (النَّار — An-Nar).</p>`)+src("Coran 2:177")],

  ["🔮","Foi en le Destin (Al-Qadar)","الإِيمَانُ بِالقَدَر — Al-Îmânou bil-qadar",
   ab("الإِيمَانُ بِالقَدَر","Al-Îmânou bil-qadar","La foi en le Destin")+
   r(`<p><strong>4 niveaux du Qadar :</strong></p>
<ul>
<li><strong>Al-Ilm</strong> (العِلْم) — La connaissance préalable d'Allah de tout ce qui fut, est et sera</li>
<li><strong>Al-Kitaba</strong> (الكِتَابَة) — Tout est écrit dans Al-Lawh Al-Mahfuz (اللَّوْحُ المَحْفُوظ — La Table Préservée) 50 000 ans avant la création</li>
<li><strong>Al-Mashia</strong> (المَشِيئَة) — Rien n'advient sans la volonté d'Allah</li>
<li><strong>Al-Khalq</strong> (الخَلْق) — Allah est le Créateur de toute chose</li>
</ul>
<p>Cela n'exclut pas la responsabilité humaine — nous serons jugés sur nos choix libres.</p>`)+src("Sahih Muslim n°8 — Sahih Muslim n°2653")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── SALAT ──
C.salat = () => sh("🙏 La Salât — La Prière","Guide complet pour la femme musulmane. \"La prière est le pilier de la religion.\" — Tirmidhi n°2616") +
xc("📊","Tableau des Rak'at","5 prières + Sunnah",
  `<table class="tbl"><tr><th>Prière</th><th>Heure</th><th>Fard</th><th>Sunnah</th></tr>
  <tr><td>Fajr</td><td>Aube</td><td>2</td><td>2 avant (Mu'akkada)</td></tr>
  <tr><td>Dhuhr</td><td>Midi</td><td>4</td><td>4 avant + 2 après</td></tr>
  <tr><td>Asr</td><td>Après-midi</td><td>4</td><td>4 avant (non mu'akkada)</td></tr>
  <tr><td>Maghrib</td><td>Coucher du soleil</td><td>3</td><td>2 après</td></tr>
  <tr><td>Isha</td><td>Nuit</td><td>4</td><td>2 après + Witr (3)</td></tr></table>`+
  r(`<p><strong>Le Witr</strong> (الوِتْر — al-witr) : 1 ou 3 rak'at après Isha, Sunnah Mu'akkada fortement recommandée.</p>`)+src("Sahih Boukhari n°8")) +
xc("👩","Règles pour la femme","Tenue, dispenses, cas particuliers",
  r(`<p><strong>Tenue (Awrat — العَوْرَة) :</strong> Corps entier couvert sauf le visage et les mains. Tenue ample et non transparente.</p>
<p><strong>Menstrues (Hayd — الحَيْض) :</strong> La femme est <strong>dispensée</strong> de la prière et ne la rattrape pas — c'est une facilité d'Allah, non une punition.</p>
<p><strong>Lochies (Nifas — النِّفَاس) :</strong> Même règle, durée maximale 40 jours.</p>
<p><strong>Voix :</strong> La femme récite à voix basse si des hommes non-mahram sont présents.</p>`)+src("Sahih Boukhari — Fiqh Al-Mar'ah")) +
xc("🗣️","Formules de la prière","Ce qu'on dit à chaque mouvement",
  [["اللهُ أَكْبَرُ","Allâhou Akbar","Allah est le Plus Grand — Dit en début de prière (Takbirat Al-Ihram) et entre chaque mouvement"],
   ["سُبْحَانَ رَبِّيَ الْعَظِيمِ","Soubhâna Rabbiya al-'Azîm","Gloire à mon Seigneur le Très-Grand — Dit 3x lors du ruku' (inclinaison)"],
   ["سُبْحَانَ رَبِّيَ الْأَعْلَى","Soubhâna Rabbiya al-A'lâ","Gloire à mon Seigneur le Très-Haut — Dit 3x lors du sujud (prosternation)"],
   ["السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ","As-salâmou 'alaïkoum wa rahmatollâh","Que la paix et la miséricorde d'Allah soient sur vous — Dit 2x pour terminer la prière (Taslim)"]
  ].map(d => ab(d[0],d[1],d[2])).join("")+src("Sahih Boukhari n°793 — Sahih Muslim n°498")) +
xc("⚠️","Ce qui invalide la prière","",
  r(`<ul><li>Parler intentionnellement (même un mot)</li><li>Rire aux éclats</li><li>Manger ou boire</li><li>Se tourner complètement dos à la Qibla</li><li>Perdre le wudu pendant la prière</li><li>Découvrir une partie de l'awrat</li><li>Manquer l'intention (Niyyah)</li></ul>`)+src("Sahih Boukhari n°1166"));

// ── WUDU ──
C.wudu = () => sh("💧 Les Ablutions — Wudu & Ghusl","\"La purification est la moitié de la foi.\" — Sahih Muslim n°223") +
xc("💧","Le Wudu — Les 10 étapes","Dans l'ordre sunnah",
  `<div>${[
    ["Intention (Niyyah — النِّيَّة)","niy-ya","Formuler intérieurement l'intention de faire les ablutions. Non prononcée à voix haute — acte du cœur."],
    ["Bismillah (بِسْمِ اللهِ)","bismillâh","Dire 'Au nom d'Allah' avant de commencer."],
    ["Mains 3x","ghaslu al-yadayn","Laver les deux mains jusqu'aux poignets. Commencer par la droite. Passer entre les doigts."],
    ["Bouche et nez 3x","madmada wa istinchâq","Rincer la bouche (Madmada) puis aspirer de l'eau dans le nez (Istinchaq) et recracher (Istinthâr)."],
    ["Visage 3x","ghaslu al-wajh","Du front jusqu'au menton, d'une oreille à l'autre."],
    ["Bras droit puis gauche 3x","ghaslu al-dhira'ayn","Des bouts des doigts jusqu'aux coudes inclus."],
    ["Masah de la tête 1x","mashu ar-ra's","Passer les deux mains mouillées de l'avant vers l'arrière puis retour."],
    ["Oreilles 1x","mashu al-udhnayn","Index dans les oreilles, pouces derrière. Même eau que le masah."],
    ["Pieds 3x","ghaslu al-qadamayn","Jusqu'aux chevilles. Commencer par le droit. Passer entre les orteils."]
  ].map((s,i) => `<div class="si"><div class="sn">${i+1}</div><div><div class="stit">${s[0]}</div><div class="sdesc"><em style="color:var(--teal2)">${s[1]}</em> — ${s[2]}</div></div></div>`).join("")}</div>`+src("Coran 5:6 — Sahih Boukhari n°159")) +
xc("⚠️","Ce qui annule le Wudu","",
  r(`<ul><li>Tout ce qui sort des deux voies (urine, selles, gaz)</li><li>Le sommeil profond (perte de conscience)</li><li>L'évanouissement ou la folie passagère</li><li>La consommation de viande de chameau (école hanbalite)</li></ul>`)+src("Sahih Muslim n°361")) +
xc("🛁","Le Ghusl — Ablution majeure","Occasions et méthode",
  r(`<p><strong>Occasions obligatoires :</strong></p>
<ul><li>Après les rapports intimes (même sans éjaculation)</li><li>Après l'éjaculation (même en rêve)</li><li>À la fin des menstrues (Hayd)</li><li>À la fin des lochies (Nifas)</li></ul>
<p><strong>Méthode Sunnah :</strong> Intention → Wudu complet → Laver la tête 3x → Laver le corps entier en commençant par le côté droit.</p>
<p><strong>Note pour la femme :</strong> Elle n'est pas obligée de défaire ses tresses à condition que l'eau atteigne les racines.</p>`)+src("Coran 5:6 — Sahih Boukhari n°248"));

// ── RAMADAN ──
C.ramadan = () => sh("🌙 Le Ramadan","Le mois béni de la révélation du Coran. Chaque acte y est multiplié.") + [
  ["🌙","Vertus et signification","",
   r(`<p>Le Ramadan est le <strong>9ème mois du calendrier lunaire islamique</strong>. Allah dit : <em>"Le mois de Ramadan est celui où le Coran a été révélé comme guide pour les gens."</em> (Coran 2:185)</p>
<p><strong>Vertus exceptionnelles :</strong></p>
<ul>
<li>Les portes du Paradis ouvertes, les portes de l'Enfer fermées, les Shayatin enchaînés (Boukhari n°1899)</li>
<li>Une Umra en Ramadan équivaut à un Hajj avec le Prophète ﷺ (Boukhari n°1863)</li>
<li>Allah dit : <em>"Le jeûne est pour Moi et c'est Moi qui en récompense."</em> (Hadith Qudsi — Boukhari n°1904)</li>
</ul>`)+src("Coran 2:185 — Sahih Boukhari n°1899")],

  ["✨","Laylat Al-Qadr — La Nuit du Destin","",
   r(`<p>Laylat Al-Qadr (لَيْلَةُ القَدْر — lay-latul-qadr) est <strong>"meilleure que mille mois"</strong> (Coran 97:3). Elle se trouve dans les 10 dernières nuits du Ramadan, probablement aux nuits impaires : 21, 23, 25, 27, 29.</p>`)+
   ab("اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
      "Allâhoumma innaka 'afouwwoun touhibboul 'afwa fa'fou 'annî",
      "Ô Allah, Tu es le Pardonneur, Tu aimes le pardon, alors pardonne-moi — Dua de Laylat Al-Qadr.")+
   src("Coran 97 — Tirmidhi n°3513 (Sahih)")],

  ["❌","Ce qui rompt et ne rompt pas le jeûne","",
   r(`<p><strong>Ce qui ROMPT :</strong></p>
<ul><li>Manger ou boire intentionnellement</li><li>Les rapports intimes</li><li>Provoquer des vomissements volontairement</li><li>Les menstrues ou lochies</li></ul>
<p><strong>Ce qui NE ROMPT PAS :</strong></p>
<ul><li>Manger par oubli — continuer le jeûne (Boukhari n°1933)</li><li>Les injections médicales non nutritives</li><li>Se rincer la bouche sans avaler</li><li>Un rêve érotique involontaire (Ghusl obligatoire)</li></ul>`)+src("Sahih Boukhari n°1933 — Coran 2:184")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── HAJJ ──
C.hajj = () => sh("🕋 Le Hajj & la Umra","Le 5ème pilier. \"Un Hajj Mabrur n'a pas d'autre récompense que le Paradis.\" — Boukhari n°1773") + [
  ["🕋","Les rites du Hajj étape par étape","",
   `<div>${[
    ["Ihram (الإِحْرَام)","al-ihrâm","Intention + état sacré. L'homme porte 2 pièces de tissu blanc. La femme porte une tenue couvrante normale."],
    ["8 Dhul-Hijja — Mina","at-tarwiya","Les pèlerins se rendent à Mina. Nuit en prière."],
    ["9 Dhul-Hijja — Arafat","waqfat 'arafât","LA station fondamentale. \"Le Hajj c'est Arafat.\" (Tirmidhi n°889). Supplication de Dhuhr à Maghrib."],
    ["Muzdalifah","al-muzdalifa","Prière de Maghrib et Isha combinées. Nuit à la belle étoile. Collecte des pierres."],
    ["10 Dhul-Hijja — Aïd Al-Adha","yawm an-nahr","Rami (7 pierres sur la grande colonne), sacrifice, rasage/coupe, Tawaf Al-Ifada."],
    ["11-13 Dhul-Hijja — Tachrik","ayyâm at-tachrik","Rami des 3 colonnes chaque jour (7 pierres chacune). Séjour à Mina."],
    ["Tawaf Al-Wada'","tawâful-wadâ'","Tawaf d'adieu avant de quitter La Mecque. La femme en menstrues est dispensée."]
  ].map((s,i) => `<div class="si"><div class="sn">${i+1}</div><div><div class="stit">${s[0]}</div><div class="sdesc"><em style="color:var(--teal2)">${s[1]}</em> — ${s[2]}</div></div></div>`).join("")}</div>`+src("Tirmidhi n°889 — Sahih Muslim n°1218")],

  ["🗣️","La Talbiyya — Formule du pèlerin","",
   ab("لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ",
      "Lab-bayk Allâhoumma lab-bayk, lab-bayk lâ charîka laka lab-bayk",
      "Me voici ô Allah, me voici ! Tu n'as pas d'associé, me voici ! La louange, la grâce et la royauté T'appartiennent.")+src("Sahih Boukhari n°1549")],

  ["🌟","La Umra — Le Petit Pèlerinage","",
   r(`<p>La Umra est réalisable à tout moment sauf les jours du Hajj. <strong>4 rites :</strong></p>
<ol>
<li><strong>Ihram</strong> avec Niyyah de la Umra : "Lab-bayk Allâhoumma 'Umratan"</li>
<li><strong>Tawaf</strong> — 7 tours autour de la Ka'ba en commençant par la Pierre Noire</li>
<li><strong>Sa'i</strong> — 7 allers-retours entre Safa et Marwa (en souvenir de Hajar)</li>
<li><strong>Halq ou Taqsir</strong> — Rasage ou coupe des cheveux. La femme coupe une phalange.</li>
</ol>`)+src("Coran 2:196 — Sahih Boukhari n°1863")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── ZAKAT ──
C.zakat = () => sh("💰 La Zakat & la Sadaqa","Purification des biens et solidarité islamique. \"Prends de leurs biens une Sadaqa pour les purifier.\" (Coran 9:103)") + [
  ["💰","Calcul et règles de la Zakat","2,5% de l'épargne annuelle",
   r(`<p><strong>Conditions :</strong> Être musulman, avoir le Nisab (équivalent de 85g d'or), avoir passé un an complet (Hawl — الحَوْل — al-hawl).</p>
<p><strong>Sur quoi la Zakat est obligatoire :</strong></p>
<ul><li>L'or, l'argent et l'épargne monétaire</li><li>Les marchandises commerciales</li><li>Le bétail (avec nisabs spécifiques)</li><li>Les récoltes agricoles (10% si irrigué naturellement, 5% par arrosage)</li></ul>`)+src("Coran 9:60 — Sahih Boukhari n°1454")],
  ["🌙","La Zakat Al-Fitr","Fin de Ramadan",
   r(`<p>Obligatoire avant la prière de l'Aïd Al-Fitr. Son montant est un Sa' (environ 2,5 kg) de nourriture de base. Elle purifie le jeûne de ses imperfections.</p>`)+
   q("\"Le Prophète ﷺ a prescrit la Zakat Al-Fitr pour purifier le jeûneur de ses paroles inutiles et pour nourrir les pauvres.\" — Abu Dawud n°1609 (Sahih)")+src("Abu Dawud n°1609")],
  ["🎁","La Sadaqa — Générosité volontaire","Bien plus que l'argent",
   r(`<ul>
<li><em>"Un sourire à ton frère est une Sadaqa"</em> (Tirmidhi n°1956)</li>
<li><em>"Une bonne parole est une Sadaqa"</em></li>
<li><em>"Enlever quelque chose de nuisible du chemin est une Sadaqa"</em></li>
</ul>
<p><strong>Sadaqa Jariya (صَدَقَة جَارِيَة — sadaqa jâriya)</strong> : L'aumône continue après la mort — puits, école, enfant pieux qui prie pour vous.</p>`)+
   q("\"Quand l'homme meurt, ses actes cessent sauf trois : une Sadaqa Jariya, une science utile, ou un enfant pieux qui prie pour lui.\" — Sahih Muslim n°1631")+src("Sahih Muslim n°1631")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── HALAL ──
C.halal = () => sh("✅ Halal & Haram","Ce qu'Allah a rendu licite et illicite. La règle de base : tout est permis sauf ce qui est explicitement interdit.") + [
  ["🍖","Nourriture Halal & Haram","",
   r(`<p><strong>Haram :</strong> Le porc sous toutes ses formes (Coran 5:3), les animaux morts sans abattage (Mayta), le sang coulant (Dam Masfuh), les carnivores à crocs, les oiseaux à serres, les amphibiens.</p>
<p><strong>L'abattage halal (Dhabh — الذَّبْح) :</strong> Dire Bismillah + trancher rapidement la gorge avec un couteau aiguisé + sacrificateur musulman.</p>
<p><strong>Tous les animaux marins sont halal</strong> sans abattage nécessaire.</p>`)+src("Coran 5:3 — Sahih Muslim n°1934")],
  ["🍷","L'alcool et les substances intoxicantes","",
   q("\"Toute boisson qui enivre est du khamr (vin) et tout khamr est Haram.\" — Sahih Muslim n°2003")+
   q("\"Ce qui enivre en grande quantité est Haram en petite quantité aussi.\" — Tirmidhi n°1865 (Sahih)")+src("Coran 5:90")],
  ["💳","Transactions Haram","Riba, tromperie, jeux de hasard",
   r(`<ul>
<li><strong>Le Riba (الرِّبَا — ar-ribâ)</strong> — L'intérêt et l'usure. Allah déclare la guerre à celui qui pratique le Riba (Coran 2:279). Inclut les crédits à intérêts.</li>
<li><strong>Le Gharar (الغَرَر)</strong> — Vendre ce qu'on ne possède pas encore, incertitude excessive.</li>
<li><strong>Le Maysir (المَيْسِر)</strong> — Jeux d'argent, paris, loterie (Coran 5:90).</li>
<li><strong>La fraude et la tromperie</strong> — Faux poids, mensonge commercial.</li>
</ul>`)+src("Coran 2:275-279 — Coran 5:90")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── MORT ──
C.mort = () => sh("🕯️ La Mort en Islam","\"Toute âme goûtera la mort.\" (Coran 3:185). La mort est un passage vers l'éternité, non une fin.") + [
  ["🕯️","La vision islamique de la mort","",
   q("\"Souvenez-vous fréquemment du destructeur des plaisirs : la mort.\" — Tirmidhi n°2307 (Hasan)")+
   r(`<p>La mort (المَوْت — al-mawt) est un passage (انتقال — intiqâl) vers la vie éternelle. Allah a créé la mort comme la vie, pour éprouver qui est le meilleur en œuvre (Coran 67:2).</p>`)+src("Coran 3:185 — Coran 67:2")],
  ["👼","L'agonie et la prise de l'âme","",
   r(`<p>L'ange de la mort (Malak Al-Mawt — مَلَكُ المَوْت) prend l'âme. Pour le croyant : douceur et bonne nouvelle. Pour le mécréant : sévérité.</p>
<p><strong>Sunnah auprès du mourant :</strong> L'encourager à dire La ilaha illallah.</p>`)+
   q("\"Incitez vos mourants à dire La ilaha illallah.\" — Sahih Muslim n°916")+src("Coran 89:27-30 — Sahih Muslim n°916")],
  ["🌹","Ce qu'on peut faire pour un défunt","",
   r(`<ul>
<li>La <strong>Du'a</strong> pour sa miséricorde et son pardon</li>
<li>La <strong>Sadaqa Jariya</strong> en son nom</li>
<li>La récitation du <strong>Coran</strong> avec dédicace de la récompense</li>
<li>Le <strong>Hajj ou Umra</strong> en son nom (s'il ne les avait pas accomplis)</li>
<li>Le <strong>jeûne</strong> en son nom pour les jours manqués</li>
</ul>`)+src("Sahih Muslim n°1631")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── DUA ──
C.dua = () => sh("🤲 L'Art de la Du'a","\"La du'a est l'adoration.\" (Abu Dawud n°1479). Invoquer Allah directement — pas d'intermédiaire.") + [
  ["🤲","Qu'est-ce que la Du'a ?","",
   r(`<p>La Du'a (الدُّعَاء — ad-dou'â) est l'acte d'invoquer Allah directement. Allah dit : <em>"Invoquez-Moi, Je vous répondrai."</em> (Coran 40:60).</p>
<p>Allah répond toujours de 3 façons : Il donne ce qu'on demande, Il donne quelque chose de mieux, ou Il épargne une épreuve équivalente.</p>`)+src("Coran 40:60 — Tirmidhi n°3381")],
  ["⭐","Moments privilégiés pour la Du'a","",
   r(`<ul>
<li><strong>Le dernier tiers de la nuit</strong> — "Qui M'invoque pour que Je lui réponde ?" (Boukhari n°1145)</li>
<li><strong>Lors du sujud (prosternation)</strong> — "La position la plus proche d'Allah" (Muslim n°482)</li>
<li><strong>Entre l'Adhan et l'Iqama</strong> — Du'a non rejetée (Abu Dawud n°521)</li>
<li><strong>Le vendredi, dernière heure avant Maghrib</strong> — Heure d'exaucement (Boukhari n°935)</li>
<li><strong>Lors de Laylat Al-Qadr</strong></li>
</ul>`)+src("Sahih Boukhari n°1145 — Sahih Muslim n°482")],
  ["💫","Du'a de détresse","Pour les moments difficiles",
   ab("لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
      "Lâ ilâha illâ Anta soubhânaka innî kounto minadh-dhâlimîn",
      "Il n'y a de divinité que Toi, gloire à Toi, j'ai été parmi les injustes — Du'a de Younès dans le ventre du poisson. Allah dit qu'Il l'a immédiatement exaucée (Coran 21:87).")+
   ab("حَسْبِيَ اللهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ",
      "Hasbiyallâhou lâ ilâha illâ houw, 'alaïhi tawakkaltou",
      "Allah me suffit, il n'y a de divinité que Lui, en Lui je mets ma confiance — Dit 7x matin et soir. (Abu Dawud n°5081)")+src("Coran 21:87 — Abu Dawud n°5081")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── RUQYA ──
C.ruqya = () => sh("🌿 La Ruqya — Traitement Coranique","\"Nous faisons descendre du Coran ce qui est une guérison.\" (Coran 17:82). La médecine spirituelle prophétique.") + [
  ["🌿","Qu'est-ce que la Ruqya ?","",
   r(`<p>La Ruqya (الرُّقْيَة — ar-rouqya) est le traitement spirituel par la récitation de versets coraniques et d'invocations prophétiques. Elle traite le mauvais œil (Ayn — العَيْن), la sorcellerie (Sihr — السِّحْر), et les troubles causés par les djinns.</p>
<p><strong>Ruqya sur soi-même :</strong> En état de wudu, réciter Al-Fatiha + Ayat Al-Kursi + Al-Ikhlas + Al-Falaq + An-Nas 3x chacune, souffler dans les mains, se passer les mains sur tout le corps. Répéter 3 fois.</p>`)+src("Coran 17:82 — Sahih Muslim n°2192")],
  ["✅","Ruqya licite vs charlatanisme","",
   r(`<p><strong>Ruqya Shar'iyya (licite) :</strong></p>
<ul><li>Uniquement le Coran et la Sunnah authentique</li><li>Aucune formule obscure ou nom de djinn</li><li>Le guérisseur ne garantit pas les résultats — c'est Allah qui guérit</li></ul>
<p><strong>Charlatanisme Haram :</strong></p>
<ul><li>Formules incompréhensibles, symboles occultes, talismans illisibles</li><li>Prétend connaître le Ghayb (l'Invisible)</li><li>Fait appel aux djinns — c'est du Shirk</li></ul>`)+src("Sahih Muslim n°2230 — Coran 2:102")],
  ["🛡️","Verset de protection contre le mauvais œil","",
   ab("وَإِن يَكَادُ الَّذِينَ كَفَرُوا لَيُزْلِقُونَكَ بِأَبْصَارِهِمْ",
      "Wa in yakâdoul-ladhîna kafarou layouzliqounaka bi-absârihim...",
      "Verset de protection contre le mauvais œil (Ayn) — Coran 68:51-52. À réciter pour se protéger.")+src("Coran 68:51-52")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── TASBEEH ──
C.tasbeeh = () => sh("📿 Le Tasbeeh — Dhikr après la Prière","\"Quiconque dit Subhanallah 33x, Alhamdulillah 33x et Allahu Akbar 34x après chaque prière — ses péchés seront pardonnés même s'ils sont comme l'écume de la mer.\" — Sahih Muslim n°597") +
xc("📿","Le Tasbeeh après la prière","100 au total",
  ab("سُبْحَانَ اللهِ — الْحَمْدُ لِلّٰهِ — اللهُ أَكْبَرُ",
     "Soubhânallâh (×33) — Alhamdoulillâh (×33) — Allâhou Akbar (×34)",
     "Gloire à Allah — Toute louange à Allah — Allah est le Plus Grand")+src("Sahih Muslim n°597"))+
xc("⭐","Sayyid Al-Istighfar — Le Maître des demandes de pardon","",
  ab("اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
     "Allâhoumma Anta Rabbî lâ ilâha illâ Anta, khalaqtanî wa ana 'abdouka...",
     "Ô Allah Tu es mon Seigneur, il n'y a de divinité que Toi, Tu m'as créé et je suis Ton serviteur... — Celui qui le dit avec conviction le matin et meurt avant le soir est du Paradis. (Boukhari n°6306)")+src("Sahih Boukhari n°6306"))+
xc("🌙","Protection du soir","Dit 3x avant de dormir",
  ab("أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
     "A'oudhou bi kalimâtillâhi t-tâmmâti min charri mâ khalaq",
     "Je cherche refuge dans les paroles parfaites d'Allah contre le mal de ce qu'Il a créé — Dit 3x le soir, protège jusqu'au matin. (Sahih Muslim n°2709)")+src("Sahih Muslim n°2709"));

// ── DHIKR ──
C.dhikr = () => {
  const cats = [
    {label:"🌟 Formules fondamentales", items:[
      {ar:"سُبْحَانَ اللهِ",ph:"Soubhânallâh",fr:"Gloire à Allah",d:"33x après chaque prière. \"Deux phrases légères sur la langue mais lourdes dans la balance.\" (Boukhari n°6682)"},
      {ar:"الْحَمْدُ لِلّٰهِ",ph:"Alhamdoulillâh",fr:"Toute louange appartient à Allah",d:"33x après la prière. \"Alhamdulillah remplit la balance.\" (Muslim n°223)"},
      {ar:"اللهُ أَكْبَرُ",ph:"Allâhou Akbar",fr:"Allah est le Plus Grand",d:"34x après la prière. Rappelle la grandeur absolue d'Allah sur tout."},
      {ar:"لَا إِلَٰهَ إِلَّا اللهُ",ph:"Lâ ilâha illallâh",fr:"Il n'y a de divinité qu'Allah",d:"\"La meilleure formule de dhikr.\" (Tirmidhi n°3383)"},
      {ar:"أَسْتَغْفِرُ اللهَ",ph:"Astaghfirullâh",fr:"Je demande le pardon à Allah",d:"Le Prophète ﷺ le disait 70 fois par jour. Attire la baraka et le rizq. (Coran 71:10-12)"},
    ]},
    {label:"☀️ Dhikr du matin (après Fajr)", items:[
      {ar:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",ph:"Asbah-nâ wa asbahal-moulkou lillâh",fr:"Nous atteignons le matin et le Royaume appartient à Allah",d:"Dit chaque matin. (Abu Dawud n°5078 — Sahih)"},
      {ar:"حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ",ph:"Hasbounallâhou wa ni'mal wakîl",fr:"Allah nous suffit, quel excellent Protecteur !",d:"Ibrahim l'a dit en étant jeté dans le feu. À dire en cas d'angoisse. (Coran 3:173)"},
    ]},
    {label:"🌙 Dhikr du soir (après Asr/Maghrib)", items:[
      {ar:"بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",ph:"Bismika Allâhoumma amouth wa ahyâ",fr:"En Ton Nom ô Allah je meurs et je vis",d:"Dit avant de dormir. (Sahih Boukhari n°6324)"},
      {ar:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",ph:"Allâhoumma qinî 'adhâbaka yawma tab'athou 'ibâdak",fr:"Ô Allah préserve-moi de Ton châtiment le Jour où Tu ressusciteras Tes serviteurs",d:"Dit 3x avant de dormir. (Abu Dawud n°5045 — Sahih)"},
    ]},
    {label:"🍽️ Duas du quotidien", items:[
      {ar:"بِسْمِ اللهِ",ph:"Bismillâh",fr:"Au nom d'Allah",d:"Avant de manger, boire, entrer chez soi, commencer tout acte."},
      {ar:"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا",ph:"Allâhoumma innî as'aloka 'ilman nâfi'an wa rizqan tayyiban",fr:"Ô Allah je Te demande une science utile et un rizq licite",d:"Dit après Fajr. (Ibn Majah n°925 — Sahih)"},
      {ar:"رَبِّ اشْرَحْ لِي صَدْرِي",ph:"Rabbi-chrah lî sadrî wa yassir lî amrî",fr:"Mon Seigneur dilate ma poitrine et facilite-moi mes affaires",d:"Du'a de Moussa — pour tout moment difficile. (Coran 20:25-26)"},
    ]},
  ];
  let html = sh("🌸 Dhikr & Duas essentiels","Arabe, phonétique et traduction française visibles directement. Cliquez pour les détails.");
  cats.forEach(cat => {
    html += `<div class="cl">${cat.label}</div>`;
    cat.items.forEach(item => {
      html += `<div class="dc" onclick="toggleDhikr(this)">
        <div class="dp">
          <div class="dar">${item.ar}</div>
          <div class="dfr">🇫🇷 ${item.fr}<span class="dtg">▼</span></div>
          <div class="dph">🔊 ${item.ph}</div>
        </div>
        <div class="db">${ab(item.ar,item.ph,item.fr)+r(`<p>${item.d}</p>`)}</div>
      </div>`;
    });
  });
  return html;
};

// ── 25 PROPHÈTES ──
C.prophetes = () => {
  const P = [
    {ar:"آدَم",n:"Adam (1er prophète)",ep:"Premier homme",m:"Créé d'argile par Allah",h:"Allah insuffla Son Ruh en Adam et lui enseigna les noms de toutes choses. Les anges se prosternèrent devant lui sur ordre divin sauf Iblis (Coran 2:34). Adam et Hawwa (Ève) furent placés au Paradis puis descendirent sur Terre. Adam se repentit immédiatement après sa faute avec la du'a : \"Notre Seigneur, nous avons été injustes envers nous-mêmes, si Tu ne nous pardonnes pas, nous serons perdants.\" (Coran 7:23)",l:"Le repentir immédiat après la faute. La dignité accordée par Allah à l'humanité.",s:"Coran 2:30-38"},
    {ar:"إِدْرِيس",n:"Idris (Hénoch)",ep:"6ème génération d'Adam",m:"Allah l'éleva à un rang élevé (Coran 19:57)",h:"Prophète pieux et savant. Selon la tradition, premier à écrire et à tailler les habits. Allah le mentionne comme véridique et patient (Coran 19:56-57) et l'éleva corporellement vers les cieux.",l:"La piété et la science mènent à l'élévation auprès d'Allah.",s:"Coran 19:56-57"},
    {ar:"نُوح",n:"Nouh (Noé)",ep:"Après Adam",m:"L'Arche construite sur ordre divin — déluge universel",h:"Nouh prêcha son peuple pendant <strong>950 ans</strong> (Coran 29:14) sans succès. Allah lui ordonna de construire une arche. Le déluge détruisit tous les mécréants. Son fils Kan'an refusa de monter et périt. Sa femme était aussi incroyante. Il est appelé Chaykhoul Anbiya (le Doyen des Prophètes).",l:"La foi n'est pas héréditaire. 950 ans de Sabr dans la prédication.",s:"Coran 71 — Coran 11:25-49"},
    {ar:"هُود",n:"Houd",ep:"Peuple de 'Ad",m:"",h:"Envoyé au peuple de 'Ad (Arabie du Sud). Un peuple orgueilleux et fort qui adorait des idoles. Ils répondirent avec arrogance : \"Qui est plus fort que nous ?\" (Coran 41:15). Allah les détruisit par un vent violent pendant <strong>7 nuits et 8 jours</strong> (Coran 69:6-7). Houd et les croyants furent sauvés.",l:"La force physique ne protège pas de la colère d'Allah face à l'orgueil.",s:"Coran 7:65-72 — Coran 11:50-60"},
    {ar:"صَالِح",n:"Saleh",ep:"Peuple de Thamoud",m:"La chamelle miraculeuse sortie du rocher",h:"Envoyé au peuple de Thamoud. Allah fit sortir miraculeusement une chamelle du rocher comme signe. Ordre de la laisser paître librement. Ils la tuèrent par défi. Allah leur accorda <strong>3 jours</strong> de délai puis les détruisit par un cri terrible (As-Saïha).",l:"Ne pas défier les signes d'Allah. La transgression collective entraîne le châtiment collectif.",s:"Coran 7:73-79 — Coran 11:61-68"},
    {ar:"إِبْرَاهِيم",n:"Ibrahim (Abraham)",ep:"Env. 2000 av. J.-C.",m:"Survécut au feu de Namrud — \"Ô feu, sois fraîcheur et paix !\" (Coran 21:69)",h:"Ibrahim détruisit les idoles du temple et fut jeté dans un feu gigantesque — Allah le rendit froid et paisible. Il migra vers le Cham puis l'Arabie. Il construisit la Ka'ba avec Ismaïl. Il reçut l'épreuve du sacrifice de son fils. Il est Khalilullah (خَلِيلُ اللهِ — l'Ami d'Allah) et père des prophètes.",l:"Le Tawhid absolu, le sacrifice total pour Allah, l'acceptation des épreuves.",s:"Coran 2:124-141 — Coran 21:51-73"},
    {ar:"لُوط",n:"Lout (Lot)",ep:"Contemporain d'Ibrahim",m:"",h:"Neveu d'Ibrahim envoyé à Sodome. Son peuple pratiquait l'homosexualité et la débauche publique. Des anges vinrent lui rendre visite sous forme humaine. Allah retourna la ville sens dessus dessous et fit pleuvoir des pierres. Lout et ses filles furent sauvés — sa femme fut désobéissante.",l:"La décadence morale totale d'une société mène à sa destruction.",s:"Coran 7:80-84 — Coran 11:77-83"},
    {ar:"إِسْمَاعِيل",n:"Ismaïl (Ismaël)",ep:"Fils d'Ibrahim",m:"Résista au sacrifice avec sérénité totale",h:"Laissé enfant dans le désert de Makkah avec sa mère Hajar. La source Zamzam jaillit sous ses pieds. Il aida Ibrahim à construire la Ka'ba. Quand Ibrahim lui annonça le songe du sacrifice, il dit : \"Père, fais ce qu'il t'est ordonné, tu me trouveras parmi les patients.\" (Coran 37:102). Il est l'ancêtre du Prophète ﷺ.",l:"La confiance totale en Allah (Tawakkul), l'obéissance parfaite.",s:"Coran 2:127 — Coran 37:100-112"},
    {ar:"إِسْحَاق",n:"Ishaq (Isaac)",ep:"Fils d'Ibrahim et Sara",m:"Naissance annoncée par des anges à un couple âgé et stérile",h:"Fils miraculeux né d'Ibrahim et Sara alors qu'elle était âgée et stérile. La bonne nouvelle fut annoncée par les anges (Coran 11:69-73). Il fut prophète au Cham (Syrie-Palestine) et ancêtre des Bani Israïl.",l:"Aucune naissance n'est impossible pour Allah. Ses promesses sont toujours réalisées.",s:"Coran 11:69-73 — Coran 37:112"},
    {ar:"يَعْقُوب",n:"Yaqoub (Jacob)",ep:"Fils d'Ishaq — surnommé Israïl",m:"",h:"Père de 12 fils — les 12 tribus d'Israïl. Son épreuve la plus grande fut la séparation d'avec son fils Youssouf. Il pleura jusqu'à perdre la vue mais dit : \"Je me plains à Allah de mon chagrin.\" (Coran 12:86). Allah lui rendit Youssouf et sa vue se rétablit à l'odeur de sa chemise.",l:"Le Sabr sublime et le refus de désespérer en Allah même dans les épreuves longues.",s:"Coran 12 — Coran 19:49"},
    {ar:"يُوسُف",n:"Youssouf (Joseph)",ep:"Fils de Yaqoub — Égypte",m:"",h:"Sa vie est narrée dans la Sourate 12 — \"la plus belle des histoires.\" Jeté dans un puits par ses frères jaloux, vendu comme esclave, emprisonné car il refusa les avances de la femme de son maître : \"La prison m'est plus chère que ce à quoi elles m'invitent.\" (Coran 12:33). Puis élevé au rang de ministre. Il pardonna généreusement à ses frères.",l:"La chasteté face à la tentation, la patience dans l'injustice, le pardon grandiose après la victoire.",s:"Coran 12 (Sourate Youssouf)"},
    {ar:"أَيُّوب",n:"Ayyoub (Job)",ep:"",m:"Guérison miraculeuse après une longue maladie",h:"Prophète éprouvé d'une terrible maladie pendant <strong>18 ans</strong>. Il perdit ses biens, ses enfants et sa santé. Il invoqua avec douceur : \"Mon Seigneur, je suis touché par le mal et Tu es le plus Miséricordieux.\" (Coran 21:83). Allah le guérit et lui rendit tout ce qu'il avait perdu en double.",l:"Le Sabr absolu dans la maladie, invoquer Allah sans plainte mais avec confiance.",s:"Coran 21:83-84 — Coran 38:41-44"},
    {ar:"شُعَيب",n:"Choua'ib (Jethro)",ep:"Peuple de Madian",m:"",h:"Envoyé aux Madyanites qui fraudaient dans les poids et mesures et pratiquaient la corruption économique. Choua'ib les appela à l'honnêteté et à la justice. Ils refusèrent. Allah les détruisit par un cri ou un nuage ardent.",l:"L'honnêteté dans le commerce est une obligation divine.",s:"Coran 7:85-93 — Coran 11:84-95"},
    {ar:"مُوسَى",n:"Moussa (Moïse)",ep:"Env. 1300 av. J.-C.",m:"Bâton transformé en serpent, ouverture de la mer Rouge, 9 signes divins",h:"Né en Égypte, sauvé des eaux, élevé dans le palais du Pharaon. Allah lui parla directement — il est Kalimullah (كَلِيمُ اللهِ — Celui à qui Allah a parlé). Il guida les Bani Israïl hors d'Égypte après les 9 plaies. Reçut la Tawrat au Mont Sinaï. Apprit l'humilité auprès d'Al-Khidr. Sa vie est la plus longuement narrée dans le Coran.",l:"L'humilité face à la connaissance divine, la persévérance face au tyran.",s:"Coran 20 (Ta-Ha) — Coran 28 (Al-Qassas)"},
    {ar:"هَارُون",n:"Haroun (Aaron)",ep:"Frère de Moussa",m:"",h:"Frère et assistant prophétique de Moussa. Moussa demanda à Allah de lui adjoindre Haroun : \"Il est plus éloquent que moi de langue.\" (Coran 28:34). Il resta avec les Bani Israïl pendant que Moussa montait au Sinaï et essaya d'empêcher l'adoration du Veau d'Or.",l:"L'importance du soutien fraternel dans la prédication.",s:"Coran 19:53 — Coran 20:29-36"},
    {ar:"الْيَسَع",n:"Al-Yasa' (Élisée)",ep:"Successeur d'Ilyas",m:"",h:"Successeur direct du prophète Ilyas en Israël. Mentionné deux fois dans le Coran parmi les élus et les meilleurs des bons. Continua la mission d'Ilyas.",l:"La continuité de la guidance divine et la transmission du flambeau prophétique.",s:"Coran 6:86 — Coran 38:48"},
    {ar:"ذُو الْكِفْل",n:"Dhou Al-Kifl",ep:"",m:"",h:"Mentionné dans le Coran parmi les patients (Coran 21:85) et les bons (Coran 38:48). S'était engagé à prier 100 fois par jour, à jeûner continuellement et à ne jamais se mettre en colère injustement — il tint sa promesse jusqu'au bout.",l:"La constance dans l'adoration et la fidélité aux engagements.",s:"Coran 21:85 — Coran 38:48"},
    {ar:"دَاوُد",n:"Daoud (David)",ep:"Env. 1000 av. J.-C.",m:"Tua le géant Jalout à la fronde. Reçut le Zabur. Le fer malléable entre ses mains.",h:"Ancien berger élu pour tuer Jalout. Devenu roi et prophète d'Israël. Les montagnes et les oiseaux glorifiaient Allah avec lui (Coran 34:10). Il fabriquait des cottes de mailles et subvenait à ses besoins de ses propres mains.",l:"La gloire vient d'Allah. Le travail manuel est une noblesse.",s:"Coran 2:251 — Coran 21:78-80"},
    {ar:"سُلَيْمَان",n:"Souleyman (Salomon)",ep:"Fils de Daoud",m:"Commandait les djinns, le vent, les animaux. Comprenait le langage des oiseaux.",h:"Roi-prophète à qui Allah accorda un royaume sans pareil (Coran 38:35). La Huppe (Al-Hudhud) lui rapporta l'existence de la reine de Saba (Bilqis) qui adorait le soleil. Après des négociations, elle se convertit en voyant son trône transporté miraculeusement.",l:"La gratitude pour les dons d'Allah. Tout pouvoir doit servir le Tawhid.",s:"Coran 27 (An-Naml) — Coran 34:12-13"},
    {ar:"إِلْيَاس",n:"Ilyas (Élie)",ep:"Israël",m:"",h:"Envoyé aux Israélites qui adoraient l'idole Baal. Il les confronta avec courage. Il fit descendre la pluie sur un pays en sécheresse. Fut menacé de mort et Allah le soutint. Certains savants pensent qu'il est toujours vivant, élevé par Allah.",l:"Le courage de prêcher seul contre un peuple entier corrompu.",s:"Coran 6:85 — Coran 37:123-132"},
    {ar:"يُونُس",n:"Younès (Jonas)",ep:"Ninive (Irak)",m:"Survécut dans le ventre d'un grand poisson",h:"Envoyé à Ninive. Il quitta sa mission sans autorisation divine. Fut jeté à la mer et avalé par un poisson. Dans les ténèbres triples, il invoqua Allah. Allah le sauva et les 100 000 de Ninive crurent.",l:"Ne jamais abandonner sa mission. La du'a sincère dans les profondeurs de la détresse.",s:"Coran 21:87-88 — Coran 10:98"},
    {ar:"زَكَرِيَّا",n:"Zakaria (Zacharie)",ep:"Jérusalem",m:"Naissance miraculeuse de son fils Yahya à un âge avancé",h:"Gardien de Maryam au temple. Il trouvait toujours une nourriture miraculeuse auprès d'elle. Il supplia Allah malgré sa vieillesse et la stérilité de sa femme : \"Jamais je n'ai été malheureux en T'invoquant.\" (Coran 19:4). Allah lui accorda Yahya.",l:"La du'a sincère est toujours exaucée même face à l'impossible humain.",s:"Coran 19:2-11 — Coran 3:37-41"},
    {ar:"يَحْيَى",n:"Yahya (Jean-Baptiste)",ep:"Fils de Zakaria",m:"",h:"Reçut la sagesse et la prophétie étant enfant : \"Ô Yahya, prends le Livre avec force. Nous lui avons donné le jugement dès l'enfance.\" (Coran 19:12). Précurseur d'Issa. Martyrisé par décapitation sur ordre d'Hérode.",l:"La piété et la sagesse peuvent être données dès l'enfance. La fermeté dans la vérité.",s:"Coran 19:12-15 — Coran 3:39"},
    {ar:"عِيسَى",n:"Issa (Jésus)",ep:"Env. 1er siècle",m:"Parlait dans son berceau, guérissait les malades, ressuscitait les morts par permission d'Allah",h:"Né d'une vierge (Maryam) par miracle divin. L'Islam affirme catégoriquement : Issa n'est pas dieu, n'est pas fils de dieu. Il est serviteur d'Allah et Son messager (Coran 4:172). Il n'a pas été crucifié — Allah l'a élevé vivant (Coran 4:157-158). Il reviendra avant le Jugement pour tuer le Dajjal. Il est Kalimatullah et Ruhullah.",l:"Son Islam était pur Tawhid. Sa mission était pour les Bani Israïl uniquement.",s:"Coran 3:45-59 — Coran 4:157-158 — Coran 19:16-40"},
    {ar:"مُحَمَّد",n:"Muhammad ﷺ — Le Sceau des Prophètes",ep:"570–632 ap. J.-C.",m:"Le Coran (miracle éternel), l'Isra et Mi'raj, la lune fendue (Coran 54:1)",h:"Khatam An-Nabiyyin (خَاتَمُ النَّبِيِّين — le Sceau des Prophètes). Né à La Mecque, orphelin de père et mère. Surnommé Al-Amine. Reçut la révélation à 40 ans. 23 ans de mission : 13 ans à La Mecque (persécution) et 10 ans à Médine (construction). Décéda à 63 ans dans les bras d'Aïcha.",l:"\"Il avait le Coran comme caractère.\" (Aïcha). \"Miséricorde pour les mondes.\" (Coran 21:107).",s:"Coran 33:40 — Coran 21:107"}
  ];
  let html = sh("🌟 Les 25 Prophètes de l'Islam","Allah a envoyé un prophète à chaque peuple. Histoires complètes, miracles et leçons avec sources coraniques.");
  html += `<input class="srch" type="text" placeholder="🔍 Rechercher un prophète..." oninput="filterSearch(this.value)"><div id="prop-list">`;
  html += P.map((p,i) => `
    <div class="xc" data-search="${p.n.toLowerCase()} ${p.ar}" style="animation-delay:${i*0.03}s" onclick="toggleCard(this)">
      <div class="xh">
        <div style="font-family:'Amiri',serif;font-size:1.4rem;color:var(--gold);min-width:40px;text-align:center;">${p.ar}</div>
        <div class="xi"><div class="xt">${p.n}</div><div class="xs">${p.ep}</div></div>
        <div class="xa">▼</div>
      </div>
      <div class="xb">
        <div style="margin-bottom:8px;"><span class="tg tga">✨ ${p.m||"Voir ci-dessous"}</span></div>
        ${r(`<p><strong>Histoire :</strong> ${p.h}</p><p><strong>Leçon :</strong> ${p.l}</p>`)}
        ${src(p.s)}
      </div>
    </div>`).join("");
  return html + "</div>";
};

// ── SIRA ──
C.sira = () => sh("💛 Vie du Prophète Muhammad ﷺ","Sa biographie complète — source inépuisable de guidance. \"Il avait le Coran comme caractère.\" — Aïcha (Sahih Muslim)") + [
  ["👶","Naissance & Jeunesse (570–610)","",r(`<p>Muhammad ﷺ naquit en <strong>l'An de l'Éléphant (570)</strong> à La Mecque. Son père Abdullah mourut avant sa naissance. Sa mère Amina mourut quand il avait 6 ans. Confié à son grand-père puis à son oncle Abu Talib. Surnommé <strong>Al-Amine</strong> (le Fiable). À 25 ans, il épousa Khadija — première croyante et premier soutien.</p>`)+src("Sira Ibn Hisham")],
  ["📜","La Révélation (610–622)","",r(`<p>À 40 ans dans la grotte d'Hira : <strong>"Iqra !"</strong> — les 5 premiers versets d'Al-Alaq. En 619 : <strong>l'Année du Chagrin</strong> — décès de Khadija et Abu Talib. En 620 : l'<strong>Isra et Mi'raj</strong> — voyage La Mecque → Jérusalem → 7 cieux. La prière des 5 fois prescrite.</p>`)+src("Sahih Boukhari n°3 — Coran 17:1")],
  ["🌟","L'Hégire & Médine (622)","",r(`<p>Migration à Médine après un complot d'assassinat. Fondation de : la Fraternité (Mu'akhat), la Charte de Médine, le Masjid An-Nabawi. Début du <strong>calendrier hijri</strong>.</p>`)+src("Sahih Boukhari n°3906")],
  ["⚔️","Les Grandes Batailles (624–630)","",r(`<p><strong>Badr :</strong> 313 vs 1000 — victoire miraculeuse, les anges aidèrent (Coran 3:123).<br><strong>Uhud :</strong> Les archers quittent leur poste — défaite partielle, leçon d'obéissance.<br><strong>Khandaq :</strong> Le fossé stratégique de Salman Al-Farsi — 10 000 coalisés échouent.<br><strong>Conquête de La Mecque :</strong> 10 000 combattants, amnistie totale.</p>`)+src("Sahih Boukhari — Sira Ibn Hisham")],
  ["🕊️","Le Discours d'Adieu & La Mort (632)","",
   q("\"L'Arabe n'a aucune supériorité sur le non-Arabe, ni le non-Arabe sur l'Arabe, ni le blanc sur le noir, si ce n'est par la piété (Taqwa).\" — Discours d'Arafat, Hajj Al-Wada'")+
   r(`<p>Décéda le <strong>12 Rabi Al-Awwal 11H</strong>, à 63 ans, dans les bras d'Aïcha, murmurant : "Vers le Compagnon Suprême."</p>
<p>Dernier verset : <em>"Aujourd'hui J'ai parachevé pour vous votre religion."</em> (Coran 5:3)</p>`)+src("Coran 5:3 — Sahih Boukhari n°4406")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── ANGES ──
C.anges = () => sh("👼 Les Anges (Al-Malaïka)","Créatures de lumière sans libre arbitre, adorant Allah sans relâche. 2ème pilier de la Foi.") + [
  {n:"Jibril (Gabriel)",ar:"جِبْرِيل",r:"L'Ange de la Révélation. Apportait la Wahyi aux prophètes. Vu avec 600 ailes remplissant l'horizon. A soufflé le Ruh en Maryam.",s:"Coran 2:97 — Coran 16:102"},
  {n:"Mikail (Michel)",ar:"مِيكَائِيل",r:"Responsable de la pluie, de la végétation et de la nourriture de toutes les créatures. N'a jamais souri depuis la création de l'Enfer tant il craint Allah.",s:"Coran 2:98"},
  {n:"Israfil",ar:"إِسْرَافِيل",r:"Soufflera dans la Trompette (As-Sur) 2 fois : 1ère — tout meurt, 2ème — tout ressuscite. Le Prophète ﷺ ne riait que rarement à cause d'Israfil qui attend l'ordre.",s:"Coran 39:68 — Tirmidhi n°3243"},
  {n:"Malak Al-Mawt (Azrael)",ar:"مَلَكُ المَوْت",r:"L'ange de la mort. Pour le croyant : douceur et bonne nouvelle. Pour le mécréant : sévérité. \"L'ange de la mort qui a été chargé de vous reprendra votre âme.\" (Coran 32:11)",s:"Coran 32:11"},
  {n:"Munkar & Nakir",ar:"مُنْكَر وَنَكِير",r:"Interrogent le défunt dans sa tombe : \"Qui est ton Seigneur ? Quelle est ta religion ? Qui est cet homme ?\" Les réponses déterminent le confort ou la punition dans le Barzakh.",s:"Sahih Boukhari n°1338"},
  {n:"Karamun Al-Katibin",ar:"كِرَامٌ كَاتِبُون",r:"Deux anges scribes sur chaque épaule. Droite : bonnes actions. Gauche : mauvaises. \"Il n'énonce pas une parole sans qu'il y ait près de lui un observateur prêt à l'inscrire.\" (Coran 50:18)",s:"Coran 82:10-12"},
  {n:"Ridwan",ar:"رِضْوَان",r:"Le gardien du Paradis. Accueillera les croyants : \"Paix sur vous, vous avez été bons, entrez ici pour y demeurer éternellement.\" (Coran 39:73)",s:"Coran 39:73"},
  {n:"Malik",ar:"مَالِك",r:"Le gardien de l'Enfer. Quand les habitants crieront : \"Que ton Seigneur nous fasse mourir !\" Il répondra : \"Vous demeurerez.\" (Coran 43:77)",s:"Coran 43:77"},
].map((a,i) => xc("👼",a.n,"",r(`<p><strong>Nom arabe :</strong> <span style="font-family:'Amiri',serif;font-size:1.1rem;color:var(--gold)">${a.ar}</span></p><p>${a.r}</p>`)+src(a.s),i*0.05)).join("");

// ── LIVRES SAINTS ──
C.livres = () => sh("📜 Les Livres Saints","Allah a révélé des livres à Ses prophètes. Seul le Coran est préservé intact.") + [
  ["📜","La Tawrat (Torah) — Révélée à Moussa","",r(`<p>Révélée à Moussa sur le Mont Sinaï. Elle contenait la loi divine pour les Bani Israïl. Allah dit : <em>"Nous avons révélé la Torah qui contient une guidée et une lumière."</em> (Coran 5:44). La Torah actuelle a été altérée par les mains humaines (Coran 2:79).</p>`)+src("Coran 5:44 — Coran 2:79")],
  ["📜","Le Zabur (Psaumes) — Révélé à Daoud","",r(`<p>Révélé à Daoud (David). Prières, louanges et sagesses. "Et Nous avons donné le Zabur à Daoud." (Coran 4:163). Les Psaumes actuels contiennent des éléments du Zabur original mais ont été altérés.</p>`)+src("Coran 4:163")],
  ["📜","L'Injil (Évangile) — Révélé à Issa","",r(`<p>L'Injil original est la parole directe d'Allah à Issa — différent des Évangiles actuels qui sont des récits biographiques écrits par des disciples. L'Islam affirme que l'Injil original annonçait la venue du Prophète Muhammad ﷺ (Coran 61:6).</p>`)+src("Coran 5:46 — Coran 61:6")],
  ["📜","Les Suhuf — Feuillets d'Ibrahim et Adam","",r(`<p>Feuillets révélés à Ibrahim et Adam. "Les feuillets d'Ibrahim et de Moïse." (Coran 87:19). Premiers enseignements divins de l'histoire.</p>`)+src("Coran 87:18-19")],
  ["📖","Le Coran — Révélé à Muhammad ﷺ","Le seul préservé intact",r(`<p>La parole directe d'Allah révélée sur 23 ans. Allah en a garanti la préservation : <em>"Nous avons révélé le Rappel et Nous en sommes certes le Gardien."</em> (Coran 15:9)</p>
<ul><li>Préservé mot pour mot depuis 14 siècles</li><li>Mémorisé par des millions de personnes (Huffadh)</li><li>Inimitable dans son style (Tahhaddi)</li><li>Miracle vivant jusqu'au Jour du Jugement</li></ul>`)+src("Coran 15:9 — Coran 2:2")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── DJINNS ──
C.djinns = () => sh("🔥 Les Djinns","Créatures créées du feu, invisibles, dotées du libre arbitre. Sourate Al-Jinn (72) leur est dédiée.") + [
  ["🔥","Qui sont les Djinns ?","",r(`<p>Les djinns sont des créatures créées à partir d'un feu sans fumée (Coran 55:15 — "min mârijin min nâr"). Créés avant l'humanité. Comme les humains : libre arbitre, jugement au Jugement, croyants et mécréants parmi eux. 24 djinns entendirent le Coran et se convertirent (Coran 72:1-2).</p>`)+src("Coran 55:15 — Coran 72:1-15")],
  ["😈","Iblis — Le plus connu des Djinns","",r(`<p>Iblis était un djinn (Coran 18:50) dévoué qui fréquentait les cieux. Quand Allah ordonna la prosternation devant Adam, Iblis refusa : <em>"Je suis meilleur que lui, Tu m'as créé de feu et Tu l'as créé d'argile."</em> (Coran 7:12). Premier péché : l'orgueil. Il promit de dévoyer les humains par tous les côtés (Coran 7:16-17).</p>`)+src("Coran 18:50 — Coran 7:12-18")],
  ["🛡️","Protection contre les Djinns maléfiques","",r(`<ul>
<li><strong>Ayat Al-Kursi</strong> chaque soir — protège jusqu'au matin (Boukhari n°5010)</li>
<li><strong>Al-Falaq et An-Nas</strong> — 3x matin et soir</li>
<li><strong>Bismillah</strong> avant d'entrer aux toilettes</li>
<li><strong>Al-Baqara</strong> dans la maison — "Shaitan ne s'approche pas d'une maison où Al-Baqara est récitée." (Muslim n°780)</li>
</ul>`)+src("Sahih Boukhari n°5010 — Sahih Muslim n°780")],
  ["📚","Ibn Taymiyya sur les Djinns","",
   q("\"La possession des djinns est reconnue par les savants de la Sunnah. Quiconque la nie contredit l'évidence.\" — Ibn Taymiyya, Majmu' Al-Fatawa vol.19")+
   r(`<p>Ibn Taymiyya affirme : la possession est réelle, la Ruqya coraniques est le traitement légitime, appeler les djinns même à de bonnes fins est du Shirk.</p>`)+src("Ibn Taymiyya — Majmu' Al-Fatawa")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── AL-QADAR ──
C.qadar = () => sh("🔮 Al-Qadar — Le Destin","6ème pilier de la Foi. Tout ce qui advient est de la connaissance et volonté d'Allah.") + [
  ["🔮","Les 4 niveaux du Qadar","",r(`<ol>
<li><strong>Al-Ilm (العِلْم)</strong> — Allah sait tout ce qui fut, est et sera dans les moindres détails</li>
<li><strong>Al-Kitaba (الكِتَابَة)</strong> — Tout est écrit dans Al-Lawh Al-Mahfuz (اللَّوْح المَحْفُوظ) 50 000 ans avant la création (Muslim n°2653)</li>
<li><strong>Al-Mashia (المَشِيئَة)</strong> — Rien n'advient sans la volonté d'Allah</li>
<li><strong>Al-Khalq (الخَلْق)</strong> — Allah est le Créateur de toute chose, y compris les actes des humains</li>
</ol>`)+src("Sahih Muslim n°2653 — Coran 57:22")],
  ["⚖️","Libre arbitre ou prédestination ?","",r(`<p>Allah connaît par avance nos choix — mais nous les faisons librement. Sa connaissance ne force pas notre choix. Nous serons jugés sur nos choix libres, pas sur le Qadar.</p>`)+
   q("\"Travaille, car chacun se verra facilité ce pour quoi il a été créé.\" — Sahih Boukhari n°4945")+src("Sahih Boukhari n°4945 — Coran 76:29-30")],
  ["🌊","Comment accepter le Qadar difficile","",
   ab("قَدَّرَ اللهُ وَمَا شَاءَ فَعَلَ","Qadarallâhou wa mâ châ'a fa'al","Allah en a décidé ainsi et Il a fait ce qu'Il a voulu — Dit quand quelque chose de désagréable arrive.")+
   r(`<p>Ne pas dire "si seulement j'avais fait autrement" car cela ouvre la porte à Shaitan (Muslim n°2664). Prendre les moyens puis accepter le résultat avec Sabr ou Ridha.</p>`)+src("Sahih Muslim n°2664")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── COMPAGNONS ──
C.compagnons = () => sh("🕊️ Les Compagnons du Prophète ﷺ","\"La meilleure des générations est la mienne.\" (Boukhari n°3651). Les Sahaba sont la meilleure génération après les prophètes.") + [
  {n:"Abu Bakr As-Siddiq — Le Véridique",ar:"أبو بكر الصديق",d:"Premier calife (632–634). Meilleur ami du Prophète ﷺ. Premier homme libre à embrasser l'Islam. Accompagna le Prophète ﷺ dans la grotte de Thawr lors de l'Hégire. Rassembla le Coran sous forme écrite. Le Prophète ﷺ dit : \"Si je devais prendre un ami intime, ce serait Abu Bakr.\" (Boukhari n°3657). Décéda à 63 ans.",s:"Sahih Boukhari n°3657"},
  {n:"Omar ibn Al-Khattab — Al-Faruq",ar:"عمر بن الخطاب",d:"2ème calife (634–644). D'abord ennemi farouche de l'Islam, puis converti spectaculaire. Instaura le calendrier hijri. Conquit la Perse, Syrie, Égypte, Palestine. Le Prophète ﷺ dit : \"Si un prophète venait après moi, ce serait Omar.\" (Tirmidhi n°3686). Martyrisé lors de la prière du Fajr.",s:"Tirmidhi n°3686"},
  {n:"Uthman ibn Affan — Dhou An-Nurayn",ar:"عثمان بن عفان",d:"3ème calife (644–656). Surnommé 'aux deux lumières' car il épousa deux filles du Prophète ﷺ. Très généreux — finança seul l'armée de Tabuk. Unifia définitivement le Mushaf. Martyrisé en lisant le Coran.",s:"Sahih Boukhari — Tirmidhi n°3698"},
  {n:"Ali ibn Abi Talib — Amiral Al-Mouminine",ar:"علي بن أبي طالب",d:"4ème calife (656–661). Cousin et gendre du Prophète ﷺ. Élevé dans sa maison. Premier enfant à embrasser l'Islam à 10 ans. Courageux, savant et poète. Martyrisé par un Kharijite pendant la prière de Fajr.",s:"Sahih Boukhari — Sahih Muslim"},
  {n:"Aïcha bint Abi Bakr — Umm Al-Mouminine",ar:"عائشة بنت أبي بكر",d:"Épouse bien-aimée du Prophète ﷺ, fille d'Abu Bakr. La plus savante femme de la communauté islamique. Transmit plus de 2 210 hadiths. Le Prophète ﷺ mourut dans ses bras. Enseigna la religion pendant 44 ans après sa mort.",s:"Sahih Boukhari — Siyar Alam An-Nubala"},
  {n:"Bilal ibn Rabah — Premier Muezzin",ar:"بلال بن رباح",d:"Esclave abyssinien torturé pour sa foi — pierres brûlantes sur la poitrine. Abu Bakr l'affranchit. Premier muezzin de l'Islam. Le Prophète ﷺ entendit le bruit de ses sandales au Paradis. Sa foi ne vacilla jamais.",s:"Sahih Boukhari n°3754"},
].map((p,i) => xc("🕊️",p.n,"",r(`<p><span style="font-family:'Amiri',serif;font-size:1.1rem;color:var(--gold)">${p.ar}</span></p><p>${p.d}</p>`)+src(p.s),i*0.05)).join("");

// ── MARYAM ──
C.maryam = () => sh("🌹 Maryam — La Vierge Marie en Islam","La seule femme nommée explicitement dans le Coran. Une sourate entière lui est dédiée (Sourate 19).") + [
  ["🌹","Qui est Maryam ?","",r(`<p>Maryam bint Imran est la mère du prophète Issa. Elle est <strong>la seule femme nommée explicitement dans le Coran</strong> — mentionnée plus de 30 fois. Allah dit d'elle : <em>"Elle sauvegardit sa chasteté. Nous insufflâmes en elle de Notre Ruh."</em> (Coran 66:12)</p>`)+
   q("\"Les meilleures des femmes dans ce monde sont : Maryam, Khadija, Fatima et Asiya femme du Pharaon.\" — Musnad Ahmed (Sahih)")+src("Coran 66:12 — Musnad Ahmed")],
  ["🕌","Sa consécration au Temple","Dès l'enfance",r(`<p>Sa mère fit le vœu de consacrer son enfant au service du Temple de Jérusalem. Zakaria fut chargé de s'occuper d'elle. Chaque fois qu'il entrait dans son oratoire, il trouvait une nourriture miraculeuse : <em>"D'où te vient cela ? Elle répondit : Cela vient d'Allah."</em> (Coran 3:37)</p>`)+src("Coran 3:35-37")],
  ["✨","L'annonce de la naissance d'Issa","",r(`<p>Jibril lui apparut sous forme d'un homme. Elle chercha refuge en Allah. Jibril lui annonça un fils. Elle dit : <em>"Comment aurais-je un fils alors qu'aucun homme ne m'a touchée ?"</em> Jibril : <em>"Ainsi sera-t-il. Ton Seigneur dit : Cela M'est facile."</em> (Coran 19:20-21)</p>`)+src("Coran 19:16-21")],
  ["💪","L'accouchement et la calomnie","",r(`<p>Maryam accoucha seule sous un palmier. Elle dit : <em>"Ah, si seulement j'étais morte avant cela !"</em> (Coran 19:23). Allah la consola — une source jaillit à ses pieds et des dattes tombèrent du palmier. Quand son peuple l'accusa, le bébé Issa parla depuis son berceau pour défendre sa mère.</p>`)+
   q("\"Je suis le serviteur d'Allah. Il m'a donné le Livre et m'a désigné prophète.\" — Issa enfant dans son berceau (Coran 19:30)")+src("Coran 19:23-33")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── GRANDES FEMMES ──
C.femmes = () => sh("👑 Les Grandes Femmes de l'Islam","Des femmes extraordinaires dont les histoires illuminent la foi.") + [
  {n:"Khadija bint Khuwaylid",ar:"خَدِيجَة بِنْت خُوَيْلِد",d:"Première femme et première croyante. Veuve indépendante et riche femme d'affaires. Première à croire sans hésiter. Elle réconforta le Prophète ﷺ après la première révélation. Dépensa toute sa fortune pour l'Islam. Le Prophète ﷺ : \"Elle m'a cru quand les gens m'avaient rejeté, elle m'a secouru avec sa fortune.\" Décéda à 65 ans — Année du Chagrin.",s:"Sahih Boukhari n°3820"},
  {n:"Aïcha bint Abi Bakr",ar:"عَائِشَة بِنْت أَبِي بَكْر",d:"La plus savante femme de la communauté islamique. Transmit plus de 2 210 hadiths — parmi les 7 plus grands transmetteurs de la Sunnah. Référence en médecine, poésie et généalogie. Le Prophète ﷺ mourut dans ses bras. Enseigna la religion pendant 44 ans.",s:"Sahih Boukhari — Siyar Alam An-Nubala"},
  {n:"Fatima Az-Zahra",ar:"فَاطِمَة الزَّهْرَاء",d:"Fille bien-aimée du Prophète ﷺ. Il se levait pour l'accueillir et lui baisait la main. \"Fatima est une partie de moi. Ce qui l'irrite m'irrite.\" (Boukhari n°3767). Mère d'Al-Hassan et Al-Hussein. Mourut 6 mois après le Prophète ﷺ.",s:"Sahih Boukhari n°3767"},
  {n:"Hajar (Hagar)",ar:"هَاجَر",d:"Mère d'Ismaïl. Laissée seule dans le désert de Makkah avec son nourrisson. Sa course entre Safa et Marwa est commémorée éternellement dans le Sa'i du Hajj. La source Zamzam jaillit sous les pieds d'Ismaïl — coule depuis 4000 ans.",s:"Sahih Boukhari n°3364"},
  {n:"Asiya bint Muzahim",ar:"آسِيَة بِنْت مُزَاحِم",d:"L'une des 4 meilleures femmes de l'humanité. Épouse du Pharaon, crut en Allah quand elle vit le miracle de Moussa. Cacha et éleva le bébé Moussa. Torturée jusqu'à la mort par le Pharaon. Ses derniers mots : \"Mon Seigneur, construis-moi une maison au Paradis.\" (Coran 66:11). Elle vit sa maison au Paradis et sourit.",s:"Coran 66:11"},
].map((p,i) => xc("👑",p.n,"",r(`<p><span style="font-family:'Amiri',serif;font-size:1.1rem;color:var(--gold)">${p.ar}</span></p><p>${p.d}</p>`)+src(p.s),i*0.05)).join("");

// ── CREATION ──
C.creation = () => sh("🌌 La Création de l'Univers","Ce que le Coran dit sur la création — révélé 14 siècles avant les découvertes scientifiques.") + [
  ["🌌","La création en 6 étapes (Ayyam)","",r(`<p>Allah dit : <em>"Il est Celui qui a créé les cieux et la terre en six jours."</em> (Coran 7:54). Le mot Yawm (يَوْم) peut désigner une période ou une étape, non nécessairement 24h. <em>"Un jour auprès de ton Seigneur est comme mille ans de ce que vous comptez."</em> (Coran 22:47)</p>`)+src("Coran 7:54 — Coran 22:47")],
  ["💧","L'eau comme origine de toute vie","",r(`<p>Allah dit : <em>"Nous avons fait de l'eau toute chose vivante."</em> (Coran 21:30) — Révélé au 7ème siècle, 1300 ans avant la découverte scientifique que toute vie dépend de l'eau. Toutes les cellules vivantes sont composées à 70-90% d'eau.</p>`)+src("Coran 21:30 — Coran 24:45")],
  ["🌌","L'expansion de l'univers","",r(`<p>Allah dit : <em>"Et le ciel, Nous l'avons construit par Notre puissance et Nous l'étendons (Mousi'oun)."</em> (Coran 51:47). L'expansion de l'univers fut découverte par Edwin Hubble en 1929 — ce verset la décrit 14 siècles avant.</p>`)+src("Coran 51:47")],
  ["🧬","La création de l'être humain","Embryologie coranique",r(`<p>Allah dit : <em>"Nous avons créé l'homme d'une quintessence d'argile, puis Nous en avons fait une goutte de sperme... puis un caillot, puis un embryon, puis des os, puis Nous avons revêtu les os de chair."</em> (Coran 23:12-14). Le Dr. Keith Moore (embryologiste canadien) déclara après étude : <em>"Il m'est impossible que Muhammad ait connu ces réalités sans révélation divine."</em></p>`)+src("Coran 23:12-14 — Dr. Keith Moore, The Developing Human")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── PARADIS & ENFER ──
C.paradis = () => sh("🚪 Le Paradis & l'Enfer","Réalités décrites dans le Coran et les hadiths authentiques.") +
xc("🌿","Les 8 portes du Paradis (Al-Janna)","",
  r(`<p>Le Paradis possède <strong>8 portes</strong>. <em>"Celui qui accomplit parfaitement les ablutions, les 8 portes lui seront ouvertes."</em> (Muslim n°234)</p>`)+
  [
    {n:"Bab As-Salat",ar:"بَابُ الصَّلَاة",d:"Porte de la Prière. Pour ceux assidus dans les prières obligatoires et les sunnah.",h:"Sahih Muslim n°1012"},
    {n:"Bab Ar-Rayyan",ar:"بَابُ الرَّيَّان",d:"Porte du Jeûne — 'l'Abreuvé'. Exclusivement pour les jeûneurs. Fermée définitivement après.",h:"Sahih Boukhari n°1897"},
    {n:"Bab As-Sadaqa",ar:"بَابُ الصَّدَقَة",d:"Porte de l'Aumône. Pour ceux qui donnaient généreusement pour Allah.",h:"Sahih Muslim n°1028"},
    {n:"Bab Al-Jihad",ar:"بَابُ الجِهَاد",d:"Porte de l'Effort. Jihad contre son Nafs, la langue, et la défense de l'Islam.",h:"Sahih Boukhari n°2841"},
    {n:"Bab Al-Hajj",ar:"بَابُ الحَجّ",d:"Porte du Pèlerinage. Pour ceux qui ont accompli un Hajj Mabrur (accepté, sans péché).",h:"Sahih Boukhari"},
    {n:"Bab Al-Kadhimin Al-Ghayth",ar:"بَابُ الكَاظِمِين الغَيْظ",d:"Porte de ceux qui maîtrisent leur colère et pardonnent. (Coran 3:134)",h:"Musnad Ahmad"},
    {n:"Bab Al-Iman",ar:"بَابُ الإِيمَان",d:"Porte de la Foi profonde et sincère, vécue dans les actes.",h:"Sahih Boukhari n°3666"},
    {n:"Bab Az-Zikr",ar:"بَابُ الذِّكْر",d:"Porte du Dhikr. Pour ceux qui invoquaient fréquemment Allah.",h:"Sahih Muslim"},
  ].map(d => `<div class="door"><div class="dh"><div class="dn">🌿 ${d.n}</div><div class="dar2">${d.ar}</div></div><div class="dd">${d.d}</div><div class="dref">📚 ${d.h}</div></div>`).join("")) +
xc("🔥","Les 7 niveaux de l'Enfer (An-Nar)","",
  r(`<p>L'Enfer possède <strong>7 niveaux</strong>. <em>"Les hypocrites seront au niveau le plus bas du Feu."</em> (Coran 4:145)</p>`)+
  [
    {n:"Jahannam",ar:"جَهَنَّم",d:"Le niveau le moins sévère. Pour les croyants transgresseurs."},
    {n:"Laza",ar:"لَظَى",d:"\"Un feu ardent qui arrache les membres.\" (Coran 70:15-16)"},
    {n:"Al-Hutama",ar:"الحُطَمَة",d:"Le Broyeur. \"Un feu allumé par Allah qui monte jusqu'aux cœurs.\" (Coran 104:6-7)"},
    {n:"As-Sa'ir",ar:"السَّعِير",d:"La Flamme ardente. Pour ceux qui rejetèrent délibérément les signes d'Allah."},
    {n:"Saqar",ar:"سَقَر",d:"\"Elle ne laisse rien subsister, elle brûle la peau.\" (Coran 74:26-29)"},
    {n:"Al-Jahim",ar:"الجَحِيم",d:"La Fournaise immense. Pour les mécréants et idolâtres."},
    {n:"Hawiya",ar:"الهَاوِيَة",d:"L'Abîme sans fond. Le plus profond — pour les hypocrites (Coran 101:9-11)."},
  ].map(d => `<div class="hell"><div class="dh"><div class="hn">🔥 ${d.n}</div><div class="har">${d.ar}</div></div><div class="hd">${d.d}</div></div>`).join("")+src("Coran 4:145 — Tafsir Ibn Kathir"));

// ── JUGEMENT ──
C.jugement = () => sh("⚖️ Le Jour du Jugement","\"Un jour dont la durée est de cinquante mille ans.\" (Coran 70:4). Tout rendra compte.") + [
  ["⚠️","Les signes mineurs","",r(`<ul>
<li>La mort du Prophète ﷺ (accompli — 1er signe)</li>
<li>L'apparition des faux prophètes</li>
<li>L'ignorance religieuse se répand</li>
<li>La fornication et l'alcool se banalisent</li>
<li>Les constructions rivalisent en hauteur (Hadith Jibril — Boukhari n°50)</li>
<li>Les femmes en nombre supérieur aux hommes</li>
<li>Les marchés se rapprochent (mondialisation)</li>
</ul>`)+src("Sahih Boukhari n°3176 — Sahih Muslim n°2671")],
  ["🌍","Les 10 signes majeurs","",r(`<ol>
<li><strong>Le Mahdi</strong> — Descendant du Prophète ﷺ qui gouvernera avec justice</li>
<li><strong>Le Dajjal</strong> — Le Grand Imposteur, borgne de l'œil droit. Protection : mémoriser les 10 premiers versets d'Al-Kahf</li>
<li><strong>La descente d'Issa</strong> — À Damas, tuera le Dajjal</li>
<li><strong>Yajuj & Majuj</strong> — Peuples destructeurs libérés (Coran 21:96)</li>
<li><strong>Ad-Dukhan</strong> — Une fumée couvrant la Terre pendant 40 jours</li>
<li><strong>Ad-Dabba</strong> — Une bête qui marquera croyants et mécréants</li>
<li><strong>Lever du soleil à l'Ouest</strong> — Plus aucun repentir accepté après</li>
<li><strong>3 effondrements terrestres</strong> — Est, Ouest, Arabie</li>
<li><strong>Feu du Yémen</strong> — Pousse les gens vers Ash-Sham</li>
<li><strong>Destruction de la Ka'ba</strong> par un homme éthiopien</li>
</ol>`)+src("Sahih Muslim n°2901")],
  ["⚖️","Le déroulement du Jugement","",`<div class="tl">${[
    {y:"1ère sonnerie de la Trompette",d:"Tous les êtres vivants meurent (Coran 39:68)."},
    {y:"2ème sonnerie — La Résurrection",d:"Tous ressuscitent nus, pieds nus. Blancs, noirs, riches, pauvres — tous égaux."},
    {y:"Al-Hashir — Le Rassemblement",d:"Terre blanche et plate. Le soleil à 1 mile. Transpiration selon les péchés."},
    {y:"Ash-Shafa'a — L'Intercession",d:"Muhammad ﷺ intercédera (Al-Maqam Al-Mahmud — Coran 17:79). Les autres prophètes refuseront."},
    {y:"Al-Mizan — La Balance",d:"Chaque atome de bien et de mal est pesé (Coran 99:7-8)."},
    {y:"As-Sijill — Les Livres des Actes",d:"Croyants le reçoivent par la droite (Coran 69:19). Mécréants par derrière le dos."},
    {y:"As-Sirat — Le Pont",d:"Plus fin qu'un cheveu, plus tranchant qu'une épée. Les croyants traversent selon leurs actes."},
  ].map(e => `<div class="te"><div class="td"></div><div class="ty">${e.y}</div><div class="tdesc">${e.d}</div></div>`).join("")}</div>`+src("Sahih Boukhari n°4712 — Coran 39:68")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── BARZAKH ──
C.barzakh = () => sh("☁️ Le Barzakh — La Vie dans la Tombe","\"Devant eux il y a un Barzakh jusqu'au Jour où ils seront ressuscités.\" (Coran 23:100)") + [
  ["☁️","Qu'est-ce que le Barzakh ?","",r(`<p>Le Barzakh (البَرْزَخ — al-barzakh = barrière) est l'état intermédiaire entre la mort et la résurrection. Les morts ne peuvent pas revenir vers les vivants — frontière infranchissable dans les deux sens.</p>`)+src("Coran 23:99-100")],
  ["❓","L'interrogatoire dans la tombe","3 questions de Munkar et Nakir",r(`<ol>
<li>"Qui est ton Seigneur ?" → Le croyant : "Mon Seigneur est Allah."</li>
<li>"Quelle est ta religion ?" → "Ma religion est l'Islam."</li>
<li>"Qui est cet homme qui vous a été envoyé ?" → "C'est le Prophète Muhammad ﷺ."</li>
</ol>
<p>Pour le croyant sincère : il répond avec aisance, une lumière entre dans sa tombe. Pour le mécréant : désarroi total, porte de l'Enfer ouverte sur lui.</p>`)+src("Sahih Boukhari n°1338")],
  ["✨","Le sort de l'âme","Pour le croyant et le mécréant",r(`<p><strong>Pour le croyant :</strong></p>
<ul><li>La tombe s'élargit à perte de vue et s'illumine</li><li>Un homme beau (ses bonnes actions) lui tient compagnie</li><li>Une porte du Paradis s'ouvre — il voit sa demeure</li><li>Les martyrs dans des oiseaux verts volant au Paradis (Muslim n°1887)</li></ul>
<p><strong>Pour le mécréant :</strong></p>
<ul><li>La tombe se resserre jusqu'à broyer ses côtes</li><li>Un homme laid (ses mauvaises actions) lui tient compagnie</li><li>Une porte de l'Enfer s'ouvre sur lui</li></ul>`)+src("Sahih Muslim n°1887 — Sahih Boukhari n°1338")],
  ["🛡️","Se protéger du châtiment de la tombe","",
   ab("اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ",
      "Allâhoumma innî a'oudhou bika min 'adhâbil qabr",
      "Ô Allah, je cherche refuge en Toi contre le châtiment de la tombe — Dit après le Tachahoud dans chaque prière.")+src("Sahih Boukhari n°218")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── PÉCHÉS ──
C.peches = () => sh("⚠️ Les Péchés en Islam","\"Tout fils d'Adam pèche, et les meilleurs de ceux qui pèchent sont ceux qui se repentent.\" — Tirmidhi n°2499 (Sahih)") + [
  ["🔴","Les Grands Péchés (Al-Kaba'ir)","Tout péché avec menace explicite du Coran ou de la Sunnah",r(`<p>Az-Zahabi en liste 70 dans son livre Al-Kaba'ir. Les principaux :</p>`)+[
    ["Ash-Shirk","L'Association à Allah","Le seul péché impardonnable si on meurt sans repentir (Coran 4:48)"],
    ["Qatl An-Nafs","Le Meurtre injuste","Coran 4:93 — demeure éternellement en Enfer"],
    ["As-Sihr","La Magie & Sorcellerie","Implique l'appel aux démons — mécréance (Coran 2:102)"],
    ["Uquq Al-Walidayn","L'Ingratitude envers les parents","Coran 17:23 — \"Ne leur dis même pas 'Ouf !'\""],
    ["Ar-Riba","L'Usure — Riba","Allah déclare la guerre à celui qui pratique le Riba (Coran 2:279)"],
    ["Az-Zina","L'Adultère et la fornication","Coran 17:32 — \"Ne vous approchez pas de la fornication\""],
    ["Al-Kibr","L'Orgueil","Muslim n°91 — \"Celui dont le cœur contient un atome d'orgueil n'entrera pas au Paradis\""],
  ].map(r => `<div style="padding:10px 0;border-bottom:1px solid var(--bord2)"><strong style="color:var(--gold2);font-size:var(--fs)">${r[0]}</strong> — <span style="color:var(--text3);font-size:var(--fsT)">${r[1]}</span><br><span style="font-size:var(--fsS);color:var(--text)">${r[2]}</span></div>`).join("")+src("Az-Zahabi — Al-Kaba'ir — Coran 4:48")],

  ["👅","Péchés de la langue","",r(`<ul>
<li><strong>Al-Ghiba (الغِيبَة)</strong> — La médisance : parler de ton frère en son absence d'une chose qu'il détesterait. "Plus grave que l'adultère." (Boukhari). Allah compare cela à manger la chair de son frère mort (Coran 49:12).</li>
<li><strong>An-Namima (النَّمِيمَة)</strong> — Le colportage : rapporter les paroles pour semer la discorde. "Le calomniateur n'entrera pas au Paradis." (Boukhari n°6056)</li>
<li><strong>Al-Kadhib (الكَذِب)</strong> — Le mensonge. "Les signes de l'hypocrite : quand il parle, il ment." (Boukhari n°33)</li>
</ul>`)+src("Coran 49:12 — Sahih Boukhari n°6056")],

  ["👁️","Péchés du regard & du cœur","",r(`<ul>
<li><strong>Zina Al-Ayn</strong> — La fornication du regard. "Dis aux croyants de baisser leurs regards." (Coran 24:30)</li>
<li><strong>Al-Hasad (الحَسَد)</strong> — L'envie destructrice : vouloir que la grâce disparaisse de l'autre. "Elle consume les bonnes œuvres comme le feu consume le bois." (Abu Dawud)</li>
<li><strong>Ar-Riya (الرِّيَاء)</strong> — L'ostentation : faire des actes d'adoration pour être vu. Le Prophète ﷺ l'appela "le shirk mineur". (Muslim n°2985)</li>
</ul>`)+src("Coran 24:30 — Sahih Muslim n°91")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── COEUR ──
C.coeur = () => sh("💚 La Santé du Cœur (Qalb)","\"Dans le corps, il y a un morceau de chair ; s'il est sain, tout le corps est sain ; s'il est corrompu, tout le corps est corrompu. C'est le cœur.\" — Sahih Boukhari n°52") + [
  ["💚","Les 3 états du cœur","",r(`<ul>
<li><strong>Le Cœur Sain (Qalb Salim — قَلْبٌ سَلِيم)</strong> — Libre de tout ce qui déplaît à Allah. Seul ce cœur sera sauvé au Jugement (Coran 26:89).</li>
<li><strong>Le Cœur Mort (Qalb Mayyit — قَلْبٌ مَيِّت)</strong> — Ne connaît pas son Seigneur, vit pour la Dounia et ses désirs.</li>
<li><strong>Le Cœur Malade (Qalb Maridh — قَلْبٌ مَرِيض)</strong> — Entre les deux. Il a foi mais aussi des maladies. C'est l'état de la majorité.</li>
</ul>`)+src("Coran 26:89 — Ibn Al-Qayyim, Ighâthat Al-Lahfân")],

  ["💊","Maladies & Remèdes du cœur","",
   [["Ar-Riya (Ostentation)","Faire des actes pour être vu","Renouveler l'intention (Niyyah) constamment. Faire des actes en secret."],
    ["Al-Hasad (Envie)","Vouloir que la grâce d'Allah disparaisse de l'autre","Se rappeler que le rizq vient d'Allah. Faire du bien à celui qu'on envie."],
    ["Al-Kibr (Orgueil)","Se voir supérieur aux autres","Méditer sur la mort et la faiblesse humaine."],
    ["Al-Ghafla (Négligence)","L'oubli d'Allah dans le quotidien","Adhkar du matin et du soir. Lire le Coran chaque jour."],
   ].map(r => `<div style="padding:10px 0;border-bottom:1px solid var(--bord2)"><strong style="color:var(--gold2)">${r[0]}</strong><br><span style="font-size:var(--fsT);color:var(--red2)">⚠️ ${r[1]}</span><br><span style="font-size:var(--fsS);color:var(--green2)">💊 ${r[2]}</span></div>`).join("")+src("Ibn Al-Qayyim")],

  ["🌟","Les 7 clés pour purifier le cœur","",r(`<ul>
<li><strong>1. La Tawbah sincère</strong> — Revenir à Allah après chaque péché sans tarder</li>
<li><strong>2. Le Coran</strong> — "C'est une guérison pour ce qui est dans les poitrines." (Coran 10:57)</li>
<li><strong>3. Le Dhikr constant</strong> — "C'est par le rappel d'Allah que les cœurs se tranquillisent." (Coran 13:28)</li>
<li><strong>4. La Salât avec Khushu'</strong> — Présence mentale totale</li>
<li><strong>5. Le Jeûne</strong> — Brise les désirs de l'âme (Nafs)</li>
<li><strong>6. La compagnie des pieux</strong> — "L'homme suit la religion de son ami intime." (Abu Dawud — Hasan)</li>
<li><strong>7. La méditation sur la mort</strong> — "Souvenez-vous du destructeur des plaisirs : la mort." (Tirmidhi n°2307)</li>
</ul>`)+src("Coran 10:57 — Coran 13:28 — Tirmidhi n°2307")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── SHAITAN ──
C.shaitan = () => sh("😈 Shaitan (Iblis)","\"Shaitan est votre ennemi, traitez-le comme un ennemi.\" (Coran 35:6). Connais-le pour mieux te protéger.") + [
  ["😈","Histoire d'Iblis","",r(`<p>Iblis était un djinn (Coran 18:50) dévoué qui vivait parmi les anges. Quand Allah créa Adam et ordonna la prosternation, Iblis refusa par orgueil. Délai accordé jusqu'au Jugement. Il promit : <em>"Je les guetterai sur Ta voie droite, puis je les aborderai par devant, par derrière, par la droite et par la gauche."</em> (Coran 7:16-17)</p>`)+src("Coran 18:50 — Coran 7:12-18")],
  ["🎭","Les stratégies de Shaitan","",r(`<ul>
<li><strong>Le Waswas (الوَسْوَاس)</strong> — Chuchotements pendant la prière et dans le cœur</li>
<li><strong>Embellissement du péché</strong> — Il rend le péché beau et attrayant</li>
<li><strong>Les Fausses Espérances</strong> — "Tu peux faire Tawbah plus tard" — pour remettre à demain</li>
<li><strong>Le désespoir</strong> — "Tu as trop péché, Allah ne te pardonnera jamais"</li>
</ul>`)+src("Coran 7:16-17 — Sahih Boukhari n°3276")],
  ["🛡️","Protection contre Shaitan","",r(`<ul>
<li><em>"A'udhu billahi min ash-shaytanir-rajim"</em> — Avant le Coran, en cas de colère (Boukhari n°6115)</li>
<li><strong>Bismillah</strong> avant tout acte</li>
<li><strong>La Salât</strong> — Le lien fort avec Allah</li>
<li><strong>Rester en groupe (Jama'a)</strong> — "Shaitan est avec celui qui est seul." (Tirmidhi n°2165)</li>
<li><strong>Ayat Al-Kursi</strong> chaque soir</li>
</ul>`)+src("Sahih Boukhari n°6115 — Tirmidhi n°2165")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── TAWBAH ──
C.tawbah = () => sh("🌱 Le Repentir (At-Tawbah)","\"Dis : Ô Mes serviteurs qui avez commis des excès, ne désespérez pas de la miséricorde d'Allah.\" (Coran 39:53)") + [
  ["🌱","Les 4 conditions de la Tawbah","",r(`<ol>
<li><strong>Cesser le péché immédiatement</strong> — Impossible d'être en repentir et continuer</li>
<li><strong>Le Regretter sincèrement</strong> — La douleur dans le cœur d'avoir déplu à Allah</li>
<li><strong>Décider de ne pas recommencer</strong> — La résolution ferme</li>
<li><strong>Réparer le tort causé</strong> (si c'est un droit d'autrui) — Rembourser, demander pardon</li>
</ol>`)+src("Ibn Taymiyya — Coran 25:70-71")],
  ["💛","Allah aime le repentir","Hadiths puissants",
   q("\"Allah est plus heureux du repentir de Son serviteur qu'un homme qui retrouve sa chamelle perdue dans le désert.\" — Sahih Muslim n°2745")+
   q("\"Si vous commettiez des péchés jusqu'à toucher les nuages du ciel, puis que vous vous repentiez, Allah vous pardonnerait.\" — Sahih Muslim n°2748")+src("Sahih Muslim n°2745")],
  ["🤲","L'Istighfar quotidien","",
   ab("رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
      "Rabbi-ghfir lî wa toub 'alayya innaka Antat-tawwâbour-rahîm",
      "Mon Seigneur pardonne-moi et reviens vers moi avec miséricorde, Tu es At-Tawwab Ar-Rahim — Dit 100x après la prière. (Boukhari n°6307)")+src("Sahih Boukhari n°6307")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── DOUNIA ──
C.dounia = () => sh("🌍 La Dounia","\"La vie d'ici-bas n'est que jouissance trompeuse.\" (Coran 3:185). Ne pas en être esclave.") + [
  ["🌍","Qu'est-ce que la Dounia ?","",
   q("\"Qu'est-ce que la vie d'ici-bas comparée à l'au-delà ? Comme si l'un de vous trempait son doigt dans la mer et regardait ce qu'il en rapporte.\" — Sahih Muslim n°2858")+
   src("Coran 3:185 — Sahih Muslim n°2858")],
  ["⚠️","Les avertissements du Coran","",r(`<p>Coran 57:20 : <em>"La vie d'ici-bas n'est que jeu, amusement, vaine parure, et mutuelle vantardise entre vous, et rivalité dans l'acquisition des richesses et des enfants..."</em></p>`)+src("Coran 57:20 — Coran 3:14")],
  ["⚖️","L'équilibre islamique","Ni ascétisme ni attachement excessif",
   q("\"Et cherche, dans ce qu'Allah t'a donné, la Demeure Dernière, sans négliger ta part dans ce monde.\" — Coran 28:77")+
   q("\"La Dounia est un pont, traverse-le sans t'y installer.\" — Ibn Al-Qayyim")+src("Coran 28:77")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── BARAKA ──
C.baraka = () => sh("✨ La Baraka","La bénédiction divine — une abondance invisible qu'Allah met dans les choses.") + [
  ["✨","Qu'est-ce que la Baraka ?","",r(`<p>La Baraka (البَرَكَة — al-baraka) est une abondance qualitative qu'Allah met dans les choses malgré leur petitesse. Peu d'argent avec baraka > beaucoup sans baraka. Ibn Al-Qayyim : <em>"La Baraka est que Allah mette de l'abondance dans les choses malgré leur petitesse."</em></p>`)+src("Ibn Al-Qayyim — Madarij As-Salikin")],
  ["🌟","Comment obtenir la Baraka","",r(`<ul>
<li><strong>Le Bismillah</strong> avant chaque acte</li>
<li><strong>Manger ensemble</strong> — "Rassemblez-vous pour manger, vous serez bénis." (Abu Dawud — Sahih)</li>
<li><strong>Le lever au Fajr</strong> — "Bénis ma communauté dans ses matins." (Abu Dawud n°2606)</li>
<li><strong>La Taqwa</strong> — "Si les habitants des villes avaient la piété, Nous leur aurions accordé des bénédictions." (Coran 7:96)</li>
<li><strong>La Sadaqa</strong> — "La richesse ne diminue pas à cause de la Sadaqa." (Muslim n°2588)</li>
<li><strong>Silat Ar-Rahm</strong> (liens familiaux) — "Celui qui veut que son rizq soit élargi qu'il maintienne ses liens." (Boukhari n°5985)</li>
<li><strong>L'Istighfar fréquent</strong> — "Il enverra des pluies abondantes." (Coran 71:10-12)</li>
</ul>`)+src("Coran 7:96 — Sahih Boukhari n°5985")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── ÉPREUVES ──
C.epreuves = () => sh("🌊 Les Épreuves (Al-Ibtila)","\"Pensez-vous entrer au Paradis sans avoir été éprouvés ?\" (Coran 2:214). Allah éprouve ceux qu'Il aime.") + [
  ["🌊","Pourquoi Allah nous éprouve ?","",r(`<ul>
<li><strong>Pour élever nos degrés</strong> — "Plus grande est l'épreuve, plus grande est la récompense." (Tirmidhi n°2396 — Sahih)</li>
<li><strong>Pour purifier nos péchés</strong> — "La piqûre d'une épine est une expiation." (Boukhari n°5641)</li>
<li><strong>Signe d'amour divin</strong> — "Les plus éprouvés sont les prophètes, puis ceux qui leur ressemblent." (Tirmidhi n°2396)</li>
</ul>`)+src("Coran 2:155 — Tirmidhi n°2396")],
  ["💪","Comment réagir face à l'épreuve","",
   ab("إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُون",
      "Innâ lillâhi wa innâ ilayhi râji'oun",
      "Nous sommes à Allah et vers Lui nous retournons — Dit lors d'une calamité (Coran 2:156).")+
   q("\"Quelle merveille que la situation du croyant ! S'il lui arrive quelque chose de bien, il est reconnaissant. S'il lui arrive quelque chose de mal, il est patient. Cela n'est le cas pour personne d'autre que le croyant.\" — Sahih Muslim n°2999")+src("Sahih Muslim n°2999 — Coran 2:155-156")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── FAMILLE ──
C.famille = () => sh("👨‍👩‍👧 La Famille en Islam","L'Islam a défini des droits et devoirs précis pour chaque membre de la famille.") + [
  ["👨‍👩‍👧","Les droits des parents","",
   q("\"Le Paradis est sous les pieds des mères.\" — Ibn Majah n°2781 (Sahih)")+
   r(`<p>Allah dit : <em>"Ton Seigneur a décrété que vous n'adoriez que Lui et que vous soyez bons envers vos parents. Ne leur dis même pas 'Ouf !'."</em> (Coran 17:23). Les obéir dans le licite même s'ils sont non-musulmans (Coran 31:15).</p>`)+src("Coran 17:23 — Ibn Majah n°2781")],
  ["💍","Le mariage en Islam","",r(`<p>Le mariage est une Sunnah fortement recommandée. <strong>Conditions de validité :</strong> le consentement des deux, le Mahr (dot) pour la femme, le Wali (tuteur) pour la femme, deux témoins.</p>`)+
   q("\"Le meilleur d'entre vous est celui qui est le meilleur envers sa femme.\" — Tirmidhi n°3895")+src("Coran 30:21 — Tirmidhi n°3895")],
  ["👶","Les droits des enfants","",r(`<ul>
<li>Un bon prénom islamique</li>
<li>Le Aqiqa (sacrifice) le 7ème jour</li>
<li>L'éducation religieuse dès 7 ans</li>
<li>L'équité entre les enfants dans les cadeaux</li>
</ul>`)+src("Abu Dawud n°495")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── RÊVES ──
C.reves = () => sh("💤 Les Rêves en Islam","\"Le rêve du croyant est l'une des 46 parties de la prophétie.\" — Sahih Boukhari n°6983") + [
  ["💤","Les 3 types de rêves","",r(`<p><strong>1. Ar-Ru'ya As-Saliha (الرُّؤْيَا الصَّالِحَة)</strong> — Le bon rêve : vient d'Allah. Bonne nouvelle ou guidance. Laisse un sentiment de paix au réveil.</p>
<p><strong>2. Al-Hulum (الحُلُم)</strong> — Le mauvais rêve : vient de Shaitan pour angoisser. Que faire : cracher légèrement 3x à gauche, dire A'udhu billah, changer de côté. Ne jamais raconter.</p>
<p><strong>3. Hadith An-Nafs (حَدِيثُ النَّفْس)</strong> — Reflet de nos préoccupations quotidiennes. Ni bon ni mauvais.</p>`)+src("Sahih Boukhari n°6983 — Sahih Muslim n°2261")],
  ["✅","Protocoles islamiques","",r(`<p><strong>Quand on a un bon rêve :</strong></p>
<ul><li>Dire Alhamdulillah</li><li>Le raconter uniquement à une personne de confiance et bienveillante</li></ul>
<p><strong>Quand on a un mauvais rêve :</strong></p>
<ul><li>Cracher légèrement 3x à gauche (Nafth)</li><li>Dire : "A'udhu billahi min ash-shaytanir-rajim"</li><li>Se lever et faire la prière</li><li>Ne jamais le raconter à personne</li></ul>`)+src("Sahih Boukhari n°3292")],
  ["🌟","Conditions pour des rêves justes","",r(`<ul>
<li>La piété (Taqwa) — Plus le croyant est proche d'Allah, plus ses rêves sont justes</li>
<li>La pureté rituelle — Dormir en état de wudu favorise les bons rêves</li>
<li>Les adhkar du soir — Protection contre les rêves de Shaitan</li>
<li>La sincérité du cœur</li>
</ul>`)+src("Sahih Muslim n°2263")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── NAFS ──
C.nafs = () => sh("🫀 Le Nafs — L'Âme Humaine","\"Certes l'âme humaine est portée à commander le mal.\" (Coran 12:53). Comprendre son Nafs est la première étape vers la purification.") + [
  ["🫀","Qu'est-ce que le Nafs ?","",r(`<p>Le Nafs (النَّفْس — an-nafs) est l'âme individuelle, le moi intérieur, le siège des désirs et de la volonté. Le combat contre son Nafs est appelé le <strong>Grand Jihad</strong> (الجِهَادُ الأَكْبَر — al-jihâd al-akbar).</p>
<p>Ibn Al-Qayyim : <em>"Le Nafs est comme un enfant : si tu le laisses faire ce qu'il veut, il restera enfant. Si tu lui imposes une discipline bienveillante, il grandira."</em></p>`)+src("Coran 12:53 — Coran 75:2")],
  ["📊","Les 3 niveaux du Nafs","",r(`<p><strong>1. An-Nafs Al-Ammara Bis-Sou' (النَّفْسُ الأَمَّارَةُ بِالسُّوء)</strong> — L'âme qui commande le mal. Esclave de ses désirs. (Coran 12:53)</p>
<p><strong>2. An-Nafs Al-Lawwama (النَّفْسُ اللَّوَّامَة)</strong> — L'âme qui se blâme. Elle pèche mais se reproche. Allah jure par elle : "Non ! Je jure par l'âme qui se blâme !" (Coran 75:2). Signe positif — la conscience est vivante.</p>
<p><strong>3. An-Nafs Al-Mutma'inna (النَّفْسُ المُطْمَئِنَّة)</strong> — L'âme apaisée. En paix avec Allah. Allah l'appelle au Paradis : "Ô toi âme apaisée, retourne vers ton Seigneur." (Coran 89:27-28)</p>`)+src("Coran 12:53 — Coran 75:2 — Coran 89:27-28")],
  ["🌱","Comment élever son Nafs","Tazkiyat An-Nafs",r(`<ul>
<li><strong>La Moujahada (المُجَاهَدَة)</strong> — Lutter activement contre ses désirs. "Ceux qui luttent en Notre voie, Nous les guidons." (Coran 29:69)</li>
<li><strong>La Muraqaba (المُرَاقَبَة)</strong> — Conscience permanente d'Allah</li>
<li><strong>La Mouhassaba (المُحَاسَبَة)</strong> — Bilan quotidien de ses actes. Omar : "Évaluez-vous avant d'être évalués."</li>
<li><strong>La régularité</strong> dans les actes d'adoration même petits</li>
</ul>`)+src("Coran 29:69 — Ibn Al-Qayyim, Madarij As-Salikin")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── PAIX ──
C.paix = () => sh("☮️ La Paix Intérieure (Itmi'nan)","\"C'est par le rappel d'Allah que les cœurs se tranquillisent.\" (Coran 13:28)") + [
  ["☮️","Qu'est-ce que l'Itmi'nan ?","",r(`<p>L'Itmi'nan (الاِطْمِئْنَان — al-itmi'nân) est la tranquillité et la sérénité profonde du cœur. Allah l'accorde comme récompense au croyant sincère. Sa source unique est le dhikr (souvenir d'Allah).</p>`)+src("Coran 13:28")],
  ["🌟","Sources de la paix intérieure","",r(`<ul>
<li><strong>Le Dhikr constant</strong> — Chaque répétition apporte une lumière dans le cœur</li>
<li><strong>La Salât avec Khushu'</strong> — Le Prophète ﷺ : "Ô Bilal, rafraîchis-nous avec la prière !" (Abu Dawud n°4986)</li>
<li><strong>La Tawbah</strong> — Se repentir libère le poids des péchés</li>
<li><strong>Le Coran</strong> — "Il est une guérison pour ce qui est dans les poitrines." (Coran 10:57)</li>
<li><strong>Le Tawakkul</strong> — "Qui s'en remet à Allah — Il lui suffit." (Coran 65:3)</li>
</ul>`)+src("Coran 13:28 — Coran 10:57 — Coran 65:3")],
  ["💫","Dua contre l'anxiété","",
   ab("اللَّهُمَّ إِنِّي عَبْدُكَ وَابْنُ عَبْدِكَ",
      "Allâhoumma innî 'abdouka wabnou 'abdik, nâsiyatî bi-yadik...",
      "Ô Allah, je suis Ton serviteur, fils de Ton serviteur, ma mèche est dans Ta main... — Allah ôte la tristesse et l'anxiété de celui qui prononce ces mots. (Musnad Ahmed n°3712 — Sahih)")+src("Musnad Ahmed n°3712")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── CROISSANCE ──
C.croissance = () => sh("🌿 La Croissance Spirituelle","Islam → Iman → Ihsan. Les niveaux de la religion et comment progresser concrètement.") + [
  ["🌿","Les 3 niveaux : Islam → Iman → Ihsan","Le Hadith Jibril (Muslim n°8)",r(`<p><strong>1. Al-Islam (الإِسْلَام)</strong> — La soumission extérieure. Les 5 piliers pratiqués. Le niveau de base nécessaire.</p>
<p><strong>2. Al-Iman (الإِيمَان)</strong> — La foi profonde. Les 6 piliers de la foi intégrés dans le cœur. On ne fait plus les actes par obligation mais par amour d'Allah.</p>
<p><strong>3. Al-Ihsan (الإِحْسَان)</strong> — L'excellence. Le Prophète ﷺ : <em>"Que tu adores Allah comme si tu Le voyais — et si tu ne Le vois pas, Lui te voit."</em></p>`)+src("Sahih Muslim n°8 — Hadith Jibril")],
  ["📈","Comment progresser concrètement","",r(`<p><strong>Étape 1 — Fondations :</strong></p>
<ul><li>Les 5 prières en leur temps, tous les jours, sans exception</li><li>Apprendre la signification de ce qu'on récite</li></ul>
<p><strong>Étape 2 — Enrichir l'Iman :</strong></p>
<ul><li>Lire le Coran avec traduction 10 minutes par jour</li><li>Apprendre la Sira pour aimer vraiment le Prophète ﷺ</li><li>Adhkar du matin et du soir</li></ul>
<p><strong>Étape 3 — Viser l'Ihsan :</strong></p>
<ul><li>Prier avec Khushu' (présence du cœur)</li><li>Muraqaba — conscience permanente d'Allah</li><li>Compagnie des gens vertueux et savants</li></ul>`)+src("Ibn Al-Qayyim — Madarij As-Salikin")],
  ["⚠️","Les pièges qui bloquent la croissance","",r(`<ul>
<li><strong>L'inconsistance</strong> — "L'acte le plus aimé d'Allah est celui qui est régulier même s'il est petit." (Boukhari n°6465)</li>
<li><strong>Le perfectionnisme paralysant</strong> — Commencer maintenant, imparfaitement</li>
<li><strong>Les mauvaises fréquentations</strong> — "L'homme est sur la religion de son ami intime." (Abu Dawud n°4833)</li>
<li><strong>L'orgueil spirituel</strong> — Se croire arrivé</li>
</ul>`)+src("Sahih Boukhari n°6465")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── FRISE ──
C.frise = () => sh("📅 Histoire de l'Islam","De la naissance du Prophète ﷺ à la fin des Califes Bien-Guidés.") +
`<div class="tl">${[
  {y:"570 ap. J.-C.",t:"Naissance du Prophète ﷺ",d:"L'An de l'Éléphant. Son père Abdullah est décédé avant sa naissance. Abraha échoue à détruire la Ka'ba."},
  {y:"576",t:"Mort de sa mère Amina",d:"Il a 6 ans. Confié à son grand-père Abd Al-Muttalib puis à son oncle Abu Talib."},
  {y:"595",t:"Mariage avec Khadija",d:"À 25 ans, il épouse Khadija (40 ans). Première croyante et premier soutien."},
  {y:"610",t:"Première révélation",d:"\"Iqra !\" dans la grotte d'Hira. Début de la prophétie à 40 ans."},
  {y:"613",t:"Prédication publique",d:"Opposition violente des Quraysh. Tortures des premiers musulmans."},
  {y:"615",t:"1ère Migration en Abyssinie",d:"80+ croyants chez le roi Negus d'Éthiopie."},
  {y:"619",t:"Année du Chagrin",d:"Décès de Khadija et Abu Talib la même année."},
  {y:"620",t:"Isra et Mi'raj",d:"Voyage La Mecque → Jérusalem → 7 cieux. Prescription des 5 prières."},
  {y:"622",t:"L'Hégire — Début du calendrier islamique",d:"Migration à Médine. Fondation de l'État islamique."},
  {y:"624",t:"Bataille de Badr",d:"313 vs 1000. Victoire miraculeuse. Les anges aidèrent (Coran 3:123)."},
  {y:"625",t:"Bataille d'Uhud",d:"Les archers quittent leur poste — défaite partielle. Leçon d'obéissance."},
  {y:"627",t:"Bataille du Fossé",d:"Le fossé de Salman Al-Farsi. 10 000 coalisés échouent et repartent."},
  {y:"630",t:"Conquête de La Mecque",d:"10 000 combattants, sans combat. Amnistie générale. Ka'ba purifiée."},
  {y:"632",t:"Mort du Prophète ﷺ",d:"Hajj Al-Wada'. Discours d'Arafat. Décès à 63 ans dans les bras d'Aïcha."},
  {y:"632–634",t:"Califat d'Abu Bakr",d:"Unification de l'Arabie. Guerres de Ridda. Compilation du Coran."},
  {y:"634–644",t:"Califat d'Omar",d:"Conquêtes : Perse, Syrie, Égypte, Palestine. Calendrier hijri."},
  {y:"644–656",t:"Califat d'Uthman",d:"Unification du Mushaf. Conquête de l'Afrique du Nord."},
  {y:"656–661",t:"Califat d'Ali",d:"Premières fitna. Fin de l'ère des Califes Bien-Guidés."},
].map((e,i) => `<div class="te" style="animation-delay:${i*0.04}s"><div class="td" style="background:${i<8?"var(--gold)":i<14?"var(--green2)":"var(--teal2)"}"></div><div class="ty">${e.y}</div><div class="tt">${e.t}</div><div class="tdesc">${e.d}</div></div>`).join("")}</div>`;

// ── CALIFES ──
C.califes = () => sh("👑 Les 4 Califes Bien-Guidés","\"Tenez-vous à ma Sunnah et à celle des Califes Bien-Guidés après moi.\" — Tirmidhi n°2676 (Sahih)") + [
  {n:"Abu Bakr As-Siddiq",ar:"أبو بكر الصديق",ep:"632–634 (2 ans)",d:"Meilleur ami du Prophète ﷺ. Premier homme libre à embrasser l'Islam. Le Prophète ﷺ : \"Si je devais prendre un ami intime, ce serait Abu Bakr.\" (Boukhari n°3657). Rassembla le Coran sous forme écrite. Guerres de Ridda pour unifier l'Arabie. Commença les conquêtes en Perse et Syrie. Décéda à 63 ans — même âge que le Prophète ﷺ.",s:"Sahih Boukhari n°3657"},
  {n:"Omar ibn Al-Khattab",ar:"عمر بن الخطاب",ep:"634–644 (10 ans)",d:"D'abord ennemi de l'Islam, converti spectaculaire. Le Prophète ﷺ : \"Si un prophète venait après moi, ce serait Omar.\" (Tirmidhi n°3686). Plus grandes conquêtes islamiques : Perse, Syrie, Égypte, Palestine, Irak. Instaurait le calendrier hijri. Dormait dans la rue pour entendre les plaintes des pauvres. Martyrisé lors de la prière du Fajr.",s:"Tirmidhi n°3686"},
  {n:"Uthman ibn Affan",ar:"عثمان بن عفان",ep:"644–656 (12 ans)",d:"Surnommé 'Dhou An-Nurayn' — épousa deux filles du Prophète ﷺ. Très généreux, finança seul l'armée de Tabuk. Unifia définitivement le Mushaf évitant les divergences futures. Conquête de Chypre, Arménie et Afrique du Nord. Martyrisé en lisant le Coran — son sang tomba sur le verset \"Allah te suffira contre eux.\" (Coran 2:137)",s:"Sahih Boukhari"},
  {n:"Ali ibn Abi Talib",ar:"علي بن أبي طالب",ep:"656–661 (5 ans)",d:"Cousin et gendre du Prophète ﷺ. Élevé dans sa maison. Premier enfant à embrasser l'Islam à 10 ans. Courageux, savant et poète. Navigua dans une période de grande fitna (Bataille du Chameau, Bataille de Siffin). Chercha la réconciliation. Martyrisé par un Kharijite pendant la prière de Fajr — fin de l'ère des Califes Bien-Guidés.",s:"Sahih Boukhari — Sahih Muslim"},
].map((p,i) => xc("👑",p.n,p.ep,`<div style="font-family:'Amiri',serif;font-size:1.2rem;color:var(--gold);text-align:right;margin-bottom:10px;">${p.ar}</div>`+r(`<p>${p.d}</p>`)+src(p.s),i*0.05)).join("");

// ── BATAILLES ──
C.batailles = () => sh("⚔️ Les Grandes Batailles","Chaque bataille contient des leçons profondes pour les croyants.") + [
  ["⚔️","Bataille de Badr (624 — 2H)","313 vs 1000",r(`<p><strong>Contexte :</strong> Première grande bataille de l'Islam. 313 musulmans mal équipés contre 1000 Quraysh bien armés.</p>
<p><strong>Résultat :</strong> Victoire miraculeuse. Les anges aidèrent les croyants (Coran 3:123-124). 70 Quraysh tués, 70 capturés. Tournant décisif pour l'Islam.</p>`)+q("Le Prophète ﷺ pria toute la nuit avant la bataille : \"Ô Allah, si ce groupe périt, Tu ne seras plus adoré sur Terre.\"")+r(`<p><strong>Leçon :</strong> Le nombre et les armes ne comptent pas — la foi en Allah suffit.</p>`)+src("Coran 3:123-124 — Sira Ibn Hisham")],
  ["⚔️","Bataille d'Uhud (625 — 3H)","700 vs 3000",r(`<p><strong>L'erreur fatale :</strong> 50 archers positionnés sur une colline avec ordre formel de ne pas bouger. Voyant la victoire, 40 quittèrent leurs postes pour le butin. Les cavaliers qurayshites contournèrent la colline. 70 martyrs dont Hamza, l'oncle du Prophète ﷺ.</p>
<p><strong>Leçon :</strong> L'obéissance aux ordres du Prophète ﷺ est absolue. L'amour du butin peut coûter tout.</p>`)+src("Coran 3:152-153 — Sahih Boukhari")],
  ["⚔️","Bataille du Fossé — Khandaq (627 — 5H)","Médine assiégée",r(`<p><strong>La stratégie :</strong> Salman Al-Farsi proposa de creuser un fossé autour de Médine — stratégie inconnue en Arabie. Les 10 000 coalisés ne purent traverser. Après 27 jours, Allah envoya une tempête froide qui brisa leur moral. Ils repartirent sans combat.</p>
<p><strong>Leçon :</strong> Utiliser la sagesse et la stratégie est une forme d'adoration. La patience dans la défense.</p>`)+src("Coran 33:9-10 — Sira Ibn Hisham")],
  ["🌟","Conquête de La Mecque — Fath (630 — 8H)","10 000 combattants — sans combat",r(`<p>Les Quraysh avaient torturé, tué et chassé les musulmans pendant 20 ans. Le Prophète ﷺ entra à La Mecque victorieux avec 10 000 combattants. Il proclama :</p>`)+q("\"Allez, vous êtes libres !\" — Amnistie totale pour tous les Quraysh — Sira Ibn Hisham")+r(`<p>La Ka'ba fut purifiée des 360 idoles. Le Prophète ﷺ dit : <em>"La vérité est venue et le mensonge a disparu."</em> (Coran 17:81)</p>
<p><strong>Leçon :</strong> Le pardon est plus grand que la vengeance. La victoire est pour Allah, pas pour l'ego.</p>`)+src("Coran 17:81 — Sahih Boukhari")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── MECQUE & MÉDINE ──
C.mekkemed = () => sh("🕌 La Mecque & Médine","Les deux villes saintes de l'Islam. Y entrer est un privilège et une purification.") + [
  ["🕋","La Mecque — Umm Al-Qura","La ville la plus sainte de l'Islam",r(`<p>La première Maison fondée pour les hommes — bénie et guidée pour les mondes (Coran 3:96). La Ka'ba construite par Ibrahim et Ismaïl. <strong>La Pierre Noire (Al-Hajar Al-Aswad)</strong> est une pierre du Paradis. <strong>La source Zamzam</strong> coule depuis 4000 ans depuis le pied du bébé Ismaïl.</p>`)+src("Coran 3:96 — Sahih Muslim n°2473")],
  ["🕌","Masjid Al-Haram","100 000 prières en une",r(`<p>La plus grande mosquée du monde. Une prière dans Masjid Al-Haram vaut <strong>100 000 prières</strong> ailleurs (Ibn Majah n°1406 — Sahih). Elle contient la Ka'ba, le Maqam Ibrahim, la Hijr Ismaïl, et les collines de Safa et Marwa.</p>`)+src("Ibn Majah n°1406")],
  ["🕌","Médine — Al-Madina Al-Munawwara","La Ville Lumineuse",r(`<p>La deuxième ville sainte. Le Prophète ﷺ y migra en 622 et y est enterré. Sa terre est sacrée. Une prière dans Masjid An-Nabawi vaut <strong>1000 prières</strong> ailleurs.</p>`)+src("Sahih Boukhari n°1190")],
  ["✨","La Rawda Charifa","Jardin du Paradis dans Masjid An-Nabawi",
   q("\"L'espace entre ma maison et mon minbar est un des jardins du Paradis.\" — Sahih Boukhari n°1196")+
   r(`<p>C'est un des endroits où les duas sont particulièrement exaucées. Se rendre à la Rawda est l'une des grandes vertus de la visite à Médine.</p>`)+src("Sahih Boukhari n°1196")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── EMPIRE ISLAMIQUE ──
C.empire = () => sh("🗺️ L'Empire Islamique","De 632 à 1258, l'Islam a construit la civilisation la plus avancée du monde médiéval.") + [
  ["🗺️","L'Ère des Conquêtes (632–750)","Omeyyades",r(`<p>La Dynastie Omeyyade porta l'Islam des Pyrénées à l'Indus en moins d'un siècle :</p>
<ul>
<li>La Perse (637) — Effondrement de l'Empire Sassanide</li>
<li>L'Égypte (641) — Fin de la domination byzantine</li>
<li>L'Afrique du Nord jusqu'au Maroc (670-711)</li>
<li>L'Espagne — Al-Andalus (711) : Tariq ibn Ziyad traverse Gibraltar</li>
<li>L'Asie Centrale jusqu'au Sind/Pakistan (711)</li>
</ul>`)+src("Tabari — Tarikh Al-Umam wal-Muluk")],
  ["🔬","L'Âge d'Or Abbasside (750–1258)","Bayt Al-Hikma — La Maison de la Sagesse",r(`<p>Bagdad devient la ville la plus avancée du monde. <strong>Bayt Al-Hikma</strong> — centre mondial de recherche et de traduction.</p>
<p><strong>Apports islamiques au monde :</strong></p>
<ul>
<li><strong>Mathématiques</strong> — Al-Khawarizmi invente l'algèbre (Al-Jabr → Algebra)</li>
<li><strong>Médecine</strong> — Ibn Sina (Avicenne), Canon de la Médecine utilisé 600 ans en Europe</li>
<li><strong>Optique</strong> — Ibn Al-Haytham (Alhazen), père de l'optique moderne</li>
<li><strong>Chimie</strong> — Jabir ibn Hayyan, père de la chimie</li>
</ul>`)+src("Philip K. Hitti, History of the Arabs")],
  ["🌹","Al-Andalus — L'Islam en Europe (711–1492)","800 ans de civilisation islamique en Espagne",r(`<p>Cordoue était la capitale intellectuelle de l'Europe médiévale. Bibliothèque de 400 000 volumes quand Paris en avait 400. Coexistence entre musulmans, chrétiens et juifs. Ibn Rushd (Averroès), Maimonide, l'Alhambra de Grenade. La Reconquista se termina en 1492.</p>`)+src("Maria Rosa Menocal, The Ornament of the World")],
  ["💔","La Chute de Bagdad (1258)","Les Mongols",r(`<p>Hulagu Khan (petit-fils de Gengis Khan) détruisit Bagdad et la Maison de la Sagesse. Le Tigre devint noir d'encre pendant des semaines. La civilisation abbasside anéantie en quelques jours. Mais quelques générations plus tard, les Mongols se convertirent à l'Islam (Ghazan Khan — 1295).</p>`)+q("\"Ils venaient pour détruire l'Islam — ils finirent par le porter.\" — Analyse des historiens")+src("Ibn Kathir — Al-Bidaya wan-Nihaya")]
].map((p,i) => xc(p[0],p[1],p[2],p[3],i*0.05)).join("");

// ── SAVANTS ──
C.savants = () => sh("🔬 Les Savants de l'Islam","L'Islam a produit certains des plus grands génies de l'histoire humaine.") + [
  {n:"Al-Khawarizmi (780–850)",ar:"الخَوَارِزْمِي",t:"Père de l'Algèbre",d:"Son livre inventa l'algèbre. Le mot \"Algèbre\" vient de \"Al-Jabr\" (الجَبْر). Le mot \"Algorithme\" vient de la latinisation de son nom. Les chiffres arabes qu'il popularisa ont remplacé les chiffres romains dans tout le monde.",s:"George Ifrah, The Universal History of Numbers"},
  {n:"Ibn Sina — Avicenne (980–1037)",ar:"ابنُ سِينَا",t:"Père de la Médecine",d:"Mémorisa le Coran à 10 ans. Son \"Canon de la Médecine\" fut utilisé comme manuel standard dans les universités européennes pendant 600 ans. Il découvrit la contagion des maladies et inventa la quarantaine. Écrivit plus de 450 ouvrages.",s:"William Osler, The Evolution of Modern Medicine"},
  {n:"Ibn Al-Haytham — Alhazen (965–1040)",ar:"ابنُ الهَيْثَم",t:"Père de l'Optique",d:"Démontra que la vision vient de la lumière réfléchie entrant dans l'œil — pas de l'œil lui-même (théorie ancienne). Inventa la première caméra obscura. Pionnier de la méthode scientifique expérimentale 600 ans avant Francis Bacon.",s:"Roshdi Rashed, Encyclopedia of the History of Arabic Science"},
  {n:"Ibn Khaldoun (1332–1406)",ar:"ابنُ خَلْدُون",t:"Père de la Sociologie",d:"Sa \"Muqaddima\" (المُقَدِّمَة) est considérée comme l'une des œuvres les plus importantes de la pensée humaine. Il développa la théorie des civilisations, la sociologie et l'économie politique. Arnold Toynbee l'appela \"le plus grand philosophe de l'histoire de tous les temps et de tous les pays\".",s:"Arnold Toynbee, A Study of History"},
].map((p,i) => xc("🔬",`${p.n} — ${p.t}`,"",`<div style="font-family:'Amiri',serif;font-size:1.1rem;color:var(--gold);text-align:right;margin-bottom:10px;">${p.ar}</div>`+r(`<p>${p.d}</p>`)+src(p.s),i*0.05)).join("");

// ── SOURATES ──
C.sourates = () => {
  const S = [
    {num:"1",ar:"الفاتحة",n:"Al-Fatiha — L'Ouverture",info:"Makkiyya · 7 versets",
     b:ab("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","Bismi llâhi r-rahmâni r-rahîm. Al-hamdu li-llâhi rabbi l-'âlamîn...","Au nom d'Allah le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah Seigneur des mondes...")+
     r(`<p><strong>Ce qu'il faut savoir :</strong> Récitée <strong>17 fois/jour minimum</strong>. "Aucune prière n'est valide sans Al-Fatiha." (Boukhari n°756). Allah dit : <em>"J'ai partagé la prière entre Moi et Mon serviteur en deux moitiés."</em> (Muslim n°395)</p>
<p><strong>Noms :</strong> Umm Al-Coran (Mère du Coran), Ash-Chifa (la guérison), As-Sab' Al-Mathani (les 7 versets répétés).</p>`)+src("Sahih Boukhari n°756 — Sahih Muslim n°395")},
    {num:"2",ar:"البقرة",n:"Al-Baqara — La Vache",info:"Madaniyya · 286 versets · La plus longue",
     b:r(`<p>Contient <strong>Ayat Al-Kursi</strong> (v.255) — la plus grande parole du Coran (Boukhari n°2728). Les 2 derniers versets (285-286) récités le soir protègent la nuit.</p>`)+
     ab("اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ","Allâhou lâ ilâha illâ houwal hayyul qayyoum...","Allah, pas de divinité si ce n'est Lui, le Vivant, le Subsistant — Ayat Al-Kursi (2:255)")+
     q("\"Récitez Al-Baqara dans vos maisons — Shaitan ne s'approche pas d'une maison où Al-Baqara est récitée.\" — Sahih Muslim n°780")+src("Sahih Boukhari n°2728 — Sahih Muslim n°780")},
    {num:"18",ar:"الكهف",n:"Al-Kahf — La Caverne",info:"Makkiyya · 110 versets",
     b:r(`<p><strong>Réciter le vendredi</strong> : "Une lumière illuminera l'espace entre les deux vendredis." (Al-Hakim — Sahih). <strong>Les 10 premiers versets mémorisés</strong> protègent du Dajjal (Muslim n°809).</p>
<p><strong>4 histoires essentielles :</strong></p>
<ul><li>Les gens de la caverne — Foi face à la tyrannie</li><li>L'homme aux deux jardins — Contre l'orgueil des richesses</li><li>Moussa et Al-Khidr — La sagesse divine dépasse notre compréhension</li><li>Dhou Al-Qarnayn — Le pouvoir juste</li></ul>`)+src("Al-Hakim (Sahih) — Sahih Muslim n°809")},
    {num:"36",ar:"يس",n:"Ya-Sin",info:"Makkiyya · 83 versets · Cœur du Coran",
     b:r(`<p>"Ya-Sin est le cœur du Coran." (Abu Dawud n°3121 — Hasan). Récitée auprès des mourants. Thèmes : résurrection, Jugement, signes d'Allah dans la nature.</p>`)+src("Abu Dawud n°3121")},
    {num:"56",ar:"الواقعة",n:"Al-Waqi'a — L'Inévitable",info:"Makkiyya · 96 versets",
     b:q("\"Celui qui récite Al-Waqi'a chaque nuit ne sera jamais touché par la pauvreté.\" — Ibn Mas'ud (Bayhaqi — Hasan)")+r(`<p>Décrit les 3 groupes au Jour du Jugement : les Sabiqoun (les premiers), les Ashab Al-Yamin (les gens de droite) et les Ashab Ash-Chimal (les gens de gauche).</p>`)+src("Bayhaqi — Coran 56")},
    {num:"67",ar:"الملك",n:"Al-Mulk — La Royauté",info:"Makkiyya · 30 versets",
     b:q("\"Il y a une sourate de 30 versets qui a intercédé pour un homme jusqu'à ce qu'il soit pardonné — c'est Al-Mulk.\" — Abu Dawud n°1400 (Tirmidhi — Hasan)")+r(`<p>Récitée chaque soir avant de dormir — protège du châtiment de la tombe. <em>"Celui qui a créé la mort et la vie afin de vous éprouver."</em> (67:2)</p>`)+src("Abu Dawud n°1400 — Tirmidhi n°2891")},
    {num:"112",ar:"الإخلاص",n:"Al-Ikhlas — La Pureté",info:"Makkiyya · 4 versets",
     b:ab("قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ","Qoul houwallâhou ahad. Allâhou s-samad.","Dis : Il est Allah, Unique. Allah, l'Impénétrable.")+
     r(`<p>Équivaut au <strong>tiers du Coran</strong> car elle contient le Tawhid pur (Boukhari n°5013). 3x le matin et 3x le soir = équivaut à lire tout le Coran.</p>`)+src("Sahih Boukhari n°5013")},
    {num:"113",ar:"الفلق",n:"Al-Falaq — L'Aube",info:"Makkiyya · 5 versets",
     b:ab("قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ","Qoul a'oudhou bi-rabbi l-falaq","Dis : Je cherche refuge auprès du Seigneur de l'aube...")+
     r(`<p>Révélée après un acte de sorcellerie sur le Prophète ﷺ. 3x matin et soir avec An-Nas — protection totale. (Boukhari n°5748)</p>`)+src("Sahih Boukhari n°5748")},
    {num:"114",ar:"الناس",n:"An-Nas — Les Hommes",info:"Makkiyya · 6 versets",
     b:ab("قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ","Qoul a'oudhou bi-rabbi n-nâs. Maliki n-nâs. Ilâhi n-nâs.","Je cherche refuge auprès du Seigneur, du Roi, de la Divinité des hommes.")+
     r(`<p>Protection contre le Waswas — les chuchotements de Shaitan dans le cœur. Allah nomme 3 de Ses attributs.</p>`)+src("Sahih Boukhari n°4977")},
  ];
  let html = sh("📖 20 Sourates Essentielles","Contexte, thèmes, vertus et ce qu'il faut absolument savoir.");
  html += `<input class="srch" type="text" placeholder="🔍 Rechercher une sourate..." oninput="filterSearch(this.value)"><div id="sou-list">`;
  html += S.map((s,i) => `
    <div class="xc" data-search="${s.n.toLowerCase()}" style="animation-delay:${i*0.04}s" onclick="toggleCard(this)">
      <div class="xh">
        <div style="font-size:.9rem;color:var(--gold);min-width:24px;text-align:center;font-weight:700;">${s.num}</div>
        <div class="xi"><div class="xt">${s.n}</div><div class="xs">${s.info}</div></div>
        <div style="font-family:'Amiri',serif;font-size:1rem;color:var(--gold);margin-right:8px;">${s.ar}</div>
        <div class="xa">▼</div>
      </div>
      <div class="xb">${s.b}</div>
    </div>`).join("");
  return html + "</div>";
};

// ── 99 NOMS ──
C.noms = () => sh("💎 Les 99 Noms d'Allah (Al-Asma Al-Husna)","\"Allah possède les plus beaux noms. Invoquez-Le par eux.\" (Coran 7:180). Cliquez sur un nom pour tout savoir.") +
`<div class="ng">${[
  {ar:"الرَّحْمَن",ph:"Ar-Rahman",fr:"Le Tout Miséricordieux",d:"Miséricorde générale pour toutes les créatures dans ce monde. Comment en vivre : avoir de la miséricorde envers tout être vivant."},
  {ar:"الرَّحِيم",ph:"Ar-Rahim",fr:"Le Très Miséricordieux",d:"Miséricorde spéciale pour les croyants au Jugement. Comment en vivre : espérer Sa miséricorde même après nos péchés."},
  {ar:"الْمَلِك",ph:"Al-Malik",fr:"Le Roi Absolu",d:"Maître souverain de tout. Comment en vivre : relativiser le pouvoir des hommes — seul Allah règne vraiment."},
  {ar:"الْقُدُّوس",ph:"Al-Quddus",fr:"Le Très Saint",d:"Exempt de toute imperfection. Comment en vivre : purifier son cœur, ses actes, ses intentions."},
  {ar:"السَّلَام",ph:"As-Salam",fr:"La Source de Paix",d:"La vraie paix ne vient que de Lui. (Coran 59:23). Comment en vivre : chercher la paix intérieure en Allah, pas dans la Dounia."},
  {ar:"الْغَفَّار",ph:"Al-Ghaffar",fr:"Le Grand Pardonneur",d:'"Dis à Mes serviteurs que Je suis Le Pardonneur." (Coran 15:49). Il pardonne à répétition. Comment en vivre : revenir à Lui sans honte après chaque chute.'},
  {ar:"الرَّزَّاق",ph:"Ar-Razzaq",fr:"Le Pourvoyeur de Rizq",d:'"Allah est le Grand Pourvoyeur." (Coran 51:58). Il nourrit toutes Ses créatures. Comment en vivre : travailler sans s\'angoisser car le rizq est garanti.'},
  {ar:"الْفَتَّاح",ph:"Al-Fattah",fr:"Celui qui ouvre les portes",d:"Il ouvre les portes de la miséricorde, des solutions, du rizq quand tout semble fermé. Comment en vivre : l'appeler quand les portes semblent closes."},
  {ar:"الْعَلِيم",ph:"Al-Alim",fr:"L'Omniscient",d:'"Il connaît ce qui est caché et ce qui est apparent." (Coran 6:73). Comment en vivre : agir comme s\'Il nous regardait — car Il nous regarde.'},
  {ar:"الْحَكِيم",ph:"Al-Hakim",fr:"Le Sage Suprême",d:"Chaque décret contient une sagesse profonde. Comment en vivre : accepter le Qadar avec confiance en Sa sagesse."},
  {ar:"الشَّكُور",ph:"Ash-Shakur",fr:"Le Reconnaissant",d:'"Celui qui fait le bien équivalent à un atome le verra." (Coran 99:7). Aucune bonne action n\'est perdue.'},
  {ar:"الْحَلِيم",ph:"Al-Halim",fr:"Le Longanime",d:"Il ne se presse pas de punir malgré les transgressions. Comment en vivre : être patient avec les autres comme Allah l'est avec nous."},
  {ar:"الْغَفُور",ph:"Al-Ghafur",fr:"Le Pardonneur",d:'"Ne désespérez pas de la miséricorde d\'Allah." (Coran 39:53). Comment en vivre : faire Tawbah sans désespoir.'},
  {ar:"الْوَدُود",ph:"Al-Wadud",fr:"Le Plein d'Amour",d:'"Il est le Pardonneur, l\'Affectueux." (Coran 85:14). Allah aime Ses créatures d\'un amour infini. Comment en vivre : chercher Son amour par le dhikr et les bonnes actions.'},
  {ar:"الْقَيُّوم",ph:"Al-Qayyum",fr:"Le Subsistant",d:"Il maintient tout l'univers en existence. Sans Lui, tout s'effondrerait. (Ayat Al-Kursi). Reconnaître notre totale dépendance à Lui."},
  {ar:"الْقَدِير",ph:"Al-Qadir",fr:"Le Tout-Puissant",d:'"Il est capable de toute chose." (Coran 2:20). Rien n\'est impossible pour Allah. Ne jamais sous-estimer la puissance d\'une du\'a sincère.'},
  {ar:"التَّوَّاب",ph:"At-Tawwab",fr:"Qui accueille le repentir",d:'"C\'est Lui qui accueille le repentir de Ses serviteurs." (Coran 9:104). Il se réjouit du retour de Son serviteur. Revenir à Allah encore et encore.'},
  {ar:"النُّور",ph:"An-Nur",fr:"La Lumière",d:'"Allah est la lumière des cieux et de la terre." (Coran 24:35). Chercher Sa lumière par la connaissance coranique et la prière.'},
  {ar:"اللَّطِيف",ph:"Al-Latif",fr:"Le Subtil, Le Doux",d:'"Allah est subtil envers Ses serviteurs." (Coran 42:19). Il prend soin de nous de façons que nous ne voyons pas encore. Chercher les bénédictions cachées.'},
  {ar:"الصَّبُور",ph:"As-Sabur",fr:"Le Très Patient",d:"Il accorde du temps et ne se précipite pas dans la punition. Pratiquer la patience dans l'adoration et face aux épreuves."},
].map(n => `<div class="nc" onclick="toggleName(this)"><div class="nar">${n.ar}</div><div class="nfr">${n.fr}</div><div class="nph">${n.ph}</div><div class="ndet">${n.det||n.d}</div></div>`).join("")}</div>`;

// ── VOCAB ──
C.vocab = () => sh("📝 Vocabulaire Islamique Essentiel","Les termes arabes fondamentaux que tout musulman doit connaître.") + [
  {w:"Tawakkul",ar:"التَّوَكُّل",ph:"at-tawak-koul",d:"Confiance totale en Allah <em>après avoir pris les moyens nécessaires</em>. Ce n'est pas la passivité. \"Attache ton chameau, puis fais confiance à Allah.\" (Tirmidhi n°2517)",u:"Travailler dur puis laisser le résultat à Allah."},
  {w:"Sabr",ar:"الصَّبْر",ph:"as-sabr",d:"La patience en 3 formes : dans l'obéissance à Allah, dans l'abstention des péchés, face aux décrets d'Allah. \"Ceux qui endurent recevront leur récompense sans limite.\" (Coran 39:10)",u:"Le Sabr n'est pas accepter l'injustice — c'est tenir ferme dans la foi."},
  {w:"Tawbah",ar:"التَّوْبَة",ph:"at-taw-ba",d:"Repentir sincère — 4 conditions : cesser, regretter, décider de ne pas recommencer, réparer le tort causé. Porte ouverte jusqu'au dernier soupir.",u:"\"La Tawbah efface ce qui la précède.\" (Ibn Majah — Sahih)"},
  {w:"Ihsan",ar:"الإِحْسَان",ph:"al-ih-sân",d:"L'excellence dans l'adoration. Le Prophète ﷺ : \"Adorer Allah comme si tu Le voyais — et si tu ne Le vois pas, Lui te voit.\" (Sahih Muslim n°8 — Hadith Jibril)",u:"Prier avec présence, travailler avec excellence, traiter les autres avec bienveillance."},
  {w:"Taqwa",ar:"التَّقْوَى",ph:"at-taq-wâ",d:"La piété — crainte révérencieuse qui pousse à obéir et éviter les péchés. Ibn Abbas : \"Que Allah ne te trouve pas là où Il t'a interdit, et pas absent là où Il t'a ordonné.\"",u:"\"Le plus noble d'entre vous est le plus pieux.\" (Coran 49:13)"},
  {w:"Niyyah",ar:"النِّيَّة",ph:"an-niy-ya",d:"L'intention intérieure. \"Les actes ne sont jugés que par les intentions.\" (Boukhari n°1 — 1er hadith du Sahih). Elle transforme un acte ordinaire en adoration.",u:"Renouveler son intention avant chaque acte."},
  {w:"Du'a",ar:"الدُّعَاء",ph:"ad-dou-â",d:"L'invocation directe à Allah sans intermédiaire. \"La du'a est l'adoration.\" (Abu Dawud n°1479). Allah est Al-Mujib (Celui qui répond toujours).",u:"\"Invoquez-Moi, Je vous répondrai.\" (Coran 40:60)"},
  {w:"Rizq",ar:"الرِّزْق",ph:"ar-rizq",d:"La subsistance accordée par Allah — argent, santé, enfants, nourriture, savoir. \"Il n'est pas de créature sur la Terre dont le rizq n'incombe à Allah.\" (Coran 11:6)",u:"Le rizq est garanti — mais il faut prendre les moyens pour le recevoir."},
  {w:"Akhira",ar:"الآخِرَة",ph:"al-âkhira",d:"La vie future — éternelle. Comparée à elle, la Dounia n'est qu'un instant. C'est pour elle que l'on vit et que l'on agit.",u:"\"Travaille pour ta Dounia comme si tu vivais éternellement, et pour ton Akhira comme si tu mourais demain.\""},
  {w:"Barakah",ar:"البَرَكَة",ph:"al-baraka",d:"La bénédiction divine — une abondance qualitative qu'Allah met dans les choses. Peu avec baraka > beaucoup sans baraka.",u:"Commence tout acte par Bismillah pour attirer la baraka."},
].map(v => `<div class="vc" onclick="toggleVocab(this)">
  <div class="vch"><div><div class="vw">${v.w}</div><div class="vph">🔊 ${v.ph}</div></div><div class="var">${v.ar}</div></div>
  <div class="vb"><div class="vd">${v.d}</div><div class="vu">💡 ${v.u}</div></div>
</div>`).join("");

// ══════════════════════════════════════
// QUIZ
// ══════════════════════════════════════
const QUIZ = [
  {q:"Quel est le 1er pilier de l'Islam ?",a:0,opts:["La Shahada","La Salât","La Zakat","Le Sawm"],e:"La Shahada est le premier pilier : témoigner qu'il n'y a de divinité qu'Allah et que Muhammad est Son messager. (Boukhari n°8)"},
  {q:"Combien de fois par jour la prière est-elle obligatoire ?",a:1,opts:["3 fois","5 fois","7 fois","2 fois"],e:"Fajr, Dhuhr, Asr, Maghrib, Isha. (Sahih Boukhari n°8)"},
  {q:"Quelle sourate équivaut au tiers du Coran ?",a:2,opts:["Al-Fatiha","Al-Baqara","Al-Ikhlas","Al-Falaq"],e:"Al-Ikhlas car elle contient le Tawhid pur. (Sahih Boukhari n°5013)"},
  {q:"Comment s'appelle la Nuit du Destin en arabe ?",a:1,opts:["Laylat Al-Barat","Laylat Al-Qadr","Laylat Al-Isra","Laylat Al-Hajj"],e:"Laylat Al-Qadr — meilleure que 1000 mois. (Coran 97:3)"},
  {q:"Combien de portes possède le Paradis ?",a:2,opts:["5 portes","7 portes","8 portes","10 portes"],e:"Le Paradis possède 8 portes. (Sahih Boukhari n°1897)"},
  {q:"Quelle sourate protège du Dajjal si on mémorise ses 10 premiers versets ?",a:1,opts:["Ya-Sin","Al-Kahf","Al-Baqara","Al-Mulk"],e:"Al-Kahf — mémoriser ses 10 premiers versets protège du Dajjal. (Sahih Muslim n°809)"},
  {q:"Que signifie 'Tawakkul' (التَّوَكُّل) ?",a:3,opts:["Le repentir","La patience","L'obéissance","La confiance en Allah"],e:"Le Tawakkul est la confiance totale en Allah après avoir pris les moyens. (Tirmidhi n°2517)"},
  {q:"Combien de niveaux possède l'Enfer ?",a:0,opts:["7 niveaux","8 niveaux","5 niveaux","10 niveaux"],e:"L'Enfer possède 7 niveaux. Les hypocrites au niveau le plus bas (Coran 4:145)."},
  {q:"Qui a construit la Ka'ba ?",a:1,opts:["Adam et Hawwa","Ibrahim et Ismaïl","Moussa et Haroun","Le Prophète ﷺ"],e:"Ibrahim et son fils Ismaïl élevèrent les fondations de la Ka'ba. (Coran 2:127)"},
  {q:"De quoi ont été créés les Djinns ?",a:2,opts:["De terre","De lumière","De feu sans fumée","D'eau"],e:"'Il a créé les Djinns à partir d'un feu sans fumée.' (Coran 55:15)"},
  {q:"Quel est le 1er péché commis dans l'histoire ?",a:1,opts:["Le mensonge d'Adam","L'orgueil d'Iblis","Le meurtre de Qabil","L'adultère"],e:"Iblis refusa de se prosterner devant Adam par orgueil. (Coran 7:12) — Premier péché de l'histoire."},
  {q:"Que dit-on lors d'une calamité ? (إِنَّا لِلَّهِ)",a:0,opts:["Inna lillahi wa inna ilayhi raji'un","Alhamdulillah dima","Subhanallah","Bismillah"],e:"'Nous sommes à Allah et vers Lui nous retournons.' (Coran 2:156) — Inna lillahi."},
  {q:"Quel prophète vécut dans le ventre d'une baleine ?",a:2,opts:["Ibrahim","Moussa","Younès","Issa"],e:"Younès (Jonas) fut avalé par un grand poisson et invoqua Allah dans les ténèbres. (Coran 21:87)"},
  {q:"Combien d'années Nouh prêcha-t-il son peuple ?",a:1,opts:["100 ans","950 ans","300 ans","40 ans"],e:"'Nous avons envoyé Nouh vers son peuple et il demeura parmi eux mille ans moins cinquante.' (Coran 29:14)"},
  {q:"Quelle est la 'porte du Jeûne' dans le Paradis ?",a:2,opts:["Bab As-Salat","Bab Al-Jihad","Bab Ar-Rayyan","Bab Az-Zikr"],e:"Bab Ar-Rayyan — 'l'Abreuvé'. Exclusivement pour les jeûneurs. Fermée définitivement après leur entrée. (Boukhari n°1897)"},
];
