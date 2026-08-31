// ═══════════════════════════════════════════════════
// PROFIEL DATABASE (Profielen_bestand_-_GPT.xlsx)
// ═══════════════════════════════════════════════════
const DB={
'74373':{d:'SRA125 afwerkk.EB2 ano L=7350mm',l:7350,g:6.135,cat:'rail',klasse:'middel'},
'74273':{d:'SRA125 afwerkk.EB1 ano L=7350mm',l:7350,g:8.012,cat:'rail',klasse:'middel'},
'73773-H':{d:'SRA250 afwerkk.EB1 ano L=7350mm',l:7350,g:7.519,cat:'rail',klasse:'middel'},
'73873-H':{d:'SRA250 afwerkk.EB2 ano L=7350mm',l:7350,g:11.407,cat:'rail',klasse:'middel'},
'72073-H':{d:'deurkozijnprof.ano 30x97 L=7300mm',l:7300,g:16.469,cat:'omranding',klasse:'zwaar'},
'70373':{d:'kh omrand.prof. 1010 ano L=7250mm',l:7250,g:15.885,cat:'omranding',klasse:'zwaar'},
'75520':{d:'NI-1610 omrand.prof. ANO L=7250mm',l:7250,g:15.515,cat:'omranding',klasse:'zwaar'},
'72375':{d:'khg omrand.prof. 1810 ano L=7250mm',l:7250,g:24.672,cat:'omranding',klasse:'zwaar'},
'72973':{d:'vh omrand.prof. 1414 ano L=7250mm',l:7250,g:21.815,cat:'omranding',klasse:'zwaar'},
'73672':{d:'SRA250 afwerkk.HB ano L=7200mm',l:7200,g:11.909,cat:'rail',klasse:'middel'},
'73501':{d:'SRA250 loopvlak ano L=7200mm',l:7200,g:4.579,cat:'rail',klasse:'licht'},
'74072':{d:'SRA125 rail ano L=7200mm',l:7200,g:16.315,cat:'rail',klasse:'zwaar'},
'74772':{d:'khg onderz.prof. 1810 ano L=7200mm',l:7200,g:32.566,cat:'omranding',klasse:'zwaar'},
'71972':{d:'deurkozijnprof.ano Gesloten L=7200mm (Fixed)',l:7200,g:21.679,cat:'kozijn',klasse:'zwaar'},
'72372':{d:'SRA250 rail ano L=7200mm',l:7200,g:32.292,cat:'rail',klasse:'zwaar'},
'74172':{d:'SRA125 afwerkk.HB ano L=7200mm',l:7200,g:7.366,cat:'rail',klasse:'middel'},
'72669':{d:'KD-1010 omrand.prof. ano L=7000mm',l:7000,g:11.375,cat:'omranding',klasse:'middel'},
'66222':{d:'kliklijst dekst. grys h318 L=6700mm',l:6700,g:4.288,cat:'kliklijst',klasse:'licht'},
'71965':{d:'deurkozijnprof.ano Gesloten L=6520mm',l:6520,g:19.632,cat:'kozijn',klasse:'zwaar'},
'72065-H':{d:'deurkozijnprof.ano 30x97 L=6500mm',l:6500,g:14.664,cat:'kozijn',klasse:'middel'},
'69764':{d:'SRA350 loopvlak ano L=6250mm',l:6250,g:9.675,cat:'rail',klasse:'middel'},
'74661':{d:'khg omrand.prof. 1810 ano L=6190mm',l:6190,g:21.065,cat:'omranding',klasse:'zwaar'},
'74762':{d:'khg onderz.prof. 1810 ano L=6100mm',l:6100,g:27.59,cat:'omranding',klasse:'zwaar'},
'66551':{d:'Aanrijbev. Zijmontage houder L=6100mm',l:6100,g:1.251,cat:'overig',klasse:'licht'},
'70500':{d:'Glasprofielbuis RVS 60x1.5 L=6100mm',l:6100,g:16.165,cat:'overig',klasse:'zwaar'},
'74700':{d:'ondergeleider GAT ano KHG1810 L=6100mm',l:6100,g:7.365,cat:'ondergeleider',klasse:'middel'},
'70001':{d:'ondergeleider GAT ano L=6100mm',l:6100,g:7.365,cat:'onderzijde',klasse:'middel'},
'72200-H':{d:'Kliklijst alu ano L=6000mm',l:6000,g:0.924,cat:'kliklijst',klasse:'licht'},
'74260':{d:'SRA125 afwerkk.EB1 ano L=6000mm',l:6000,g:6.54,cat:'rail',klasse:'middel'},
'74360':{d:'SRA125 afwerkk.EB2 ano L=6000mm',l:6000,g:5.008,cat:'rail',klasse:'middel'},
'66882':{d:'Koudebrug verbr.prof. extrusie L=6000mm',l:6000,g:4.008,cat:'overig',klasse:'licht'},
'73500-H':{d:'SRA250 loopvlak ano L=6000mm',l:6000,g:3.816,cat:'rail',klasse:'licht'},
'67231':{d:'afwerkingsprof. 1414 onderzijde L=6000mm',l:6000,g:8.36,cat:'overig',klasse:'middel'},
'70000':{d:'bumperprof. RAL 3000 gecoat L=6000mm',l:6000,g:8.778,cat:'overig',klasse:'middel'},
'73490-H':{d:'SRA250 klemkap ano L=6000mm',l:6000,g:4.098,cat:'rail',klasse:'licht'},
'73858':{d:'SRA250 afwerkk.EB2 ano L=5880mm',l:5880,g:9.126,cat:'rail',klasse:'middel'},
'73758':{d:'SRA250 afwerkk.EB1 ano L=5880mm',l:5880,g:6.015,cat:'rail',klasse:'middel'},
'71959':{d:'deurkozijnprof.ano Gesloten L=5850mm',l:5850,g:17.614,cat:'kozijn',klasse:'zwaar'},
'72956-H':{d:'vh omrand.prof. 1414 ano L=5850mm',l:5850,g:17.603,cat:'omranding',klasse:'zwaar'},
'70359-H':{d:'kh omrand.prof. 1010 ano L=5850mm',l:5850,g:12.817,cat:'omranding',klasse:'middel'},
'75514':{d:'NI-1610 omrand.prof. ANO L=5850mm',l:5850,g:12.51,cat:'omranding',klasse:'middel'},
'74257':{d:'SRA125 afwerkk.EB1 ano L=5730mm',l:5730,g:6.246,cat:'rail',klasse:'middel'},
'74357':{d:'SRA125 afwerkk.EB2 ano L=5730mm',l:5730,g:4.783,cat:'rail',klasse:'licht'},
'74057':{d:'SRA125 rail ano L=5680mm',l:5680,g:12.871,cat:'rail',klasse:'middel'},
'74156':{d:'SRA125 afwerkk.HB ano L=5680mm',l:5680,g:5.811,cat:'rail',klasse:'middel'},
'72356':{d:'SRA250 rail ano L=5680mm',l:5680,g:25.475,cat:'rail',klasse:'zwaar'},
'73656':{d:'SRA250 afwerkk.HB ano L=5680mm',l:5680,g:9.395,cat:'rail',klasse:'middel'},
'73480-H':{d:'SRA250 kapbeugel brute L=5500mm',l:5500,g:5.654,cat:'rail',klasse:'middel'},
'75516':{d:'NI-1610 onderz.prof. ANO L=5440mm',l:5440,g:10.945,cat:'omranding',klasse:'middel'},
'74005':{d:'SRA125 loopvlak ano L=5000mm',l:5000,g:1.995,cat:'rail',klasse:'licht'},
'13047':{d:'kliklijst dekst. grys h318 L=4900mm',l:4900,g:3.136,cat:'kliklijst',klasse:'licht'},
'69763':{d:'SRA350 loopvlak ano L=4250mm',l:4250,g:6.579,cat:'rail',klasse:'middel'},
'13003':{d:'kliklijst dekst. grys h318 L=4200mm',l:4200,g:2.688,cat:'kliklijst',klasse:'licht'},
'13002':{d:'kliklijst dekst. grys h318 L=3750mm',l:3750,g:2.4,cat:'kliklijst',klasse:'licht'},
'67951':{d:'Sluitrubber deurstel L=3600mm',l:3600,g:2.657,cat:'rubber',klasse:'licht'},
'73457':{d:'SRA250 bracket 120mm dek.ano L=3070mm',l:3070,g:13.99,cat:'bracket',klasse:'middel'},
'73446':{d:'SRA250 bracket vlakke wand L=3070mm',l:3070,g:12.188,cat:'bracket',klasse:'middel'},
'73453':{d:'SRA250 bracket excl.dekst. L=3070mm',l:3070,g:16.756,cat:'bracket',klasse:'zwaar'},
'73441':{d:'SRA250 bracket 200mm dekst. L=3070mm',l:3070,g:12.191,cat:'bracket',klasse:'middel'},
'13001':{d:'kliklijst dekst. grys h318 L=2800mm',l:2800,g:1.792,cat:'kliklijst',klasse:'licht'}
};

// ═══ PLAN CONSTANTEN ═══
const MAX_P = 1000;   // Streefgewicht per pallet (kg incl. OHD)
const MAX_S = 3000;   // Max stapelgewicht (kg incl. OHD)
const OHD   = 1.06;   // Opheffingsfactor (6% marge)

// Vaste 12-pallet structuur: 4 stapels × 3 pallets
// Stapel 1+2: 7350mm (lang), Stapel 3+4: 5900mm (kort)
// X-pallet = kruispallet, onderop in de stapel
const PLAN_STRUCTURE = [
  // ── Stapel 1 — 7350mm ──
  {nm:'NM-1',  lbl:'Kruispallet 7350mm', t:'long',  x:true,  kg:130, art:'11246', pType:'kruispallet7350', sid:1, spos:1},
  {nm:'NM-2',  lbl:'Pallet 7350mm',      t:'long',  x:false, kg:80,  art:'11249', pType:'pallet7350',      sid:1, spos:2},
  {nm:'NM-3',  lbl:'Pallet 7350mm',      t:'long',  x:false, kg:80,  art:'11249', pType:'pallet7350',      sid:1, spos:3},
  // ── Stapel 2 — 7350mm ──
  {nm:'NM-4',  lbl:'Kruispallet 7350mm', t:'long',  x:true,  kg:130, art:'11246', pType:'kruispallet7350', sid:2, spos:1},
  {nm:'NM-5',  lbl:'Pallet 7350mm',      t:'long',  x:false, kg:80,  art:'11249', pType:'pallet7350',      sid:2, spos:2},
  {nm:'NM-6',  lbl:'Pallet 7350mm',      t:'long',  x:false, kg:80,  art:'11249', pType:'pallet7350',      sid:2, spos:3},
  // ── Stapel 3 — 5900mm ──
  {nm:'NM-7',  lbl:'Kruispallet 5900mm', t:'short', x:true,  kg:95,  art:'11247', pType:'kruispallet5900', sid:3, spos:1},
  {nm:'NM-8',  lbl:'Pallet 5900mm',      t:'short', x:false, kg:70,  art:'11248', pType:'pallet5900',      sid:3, spos:2},
  {nm:'NM-9',  lbl:'Pallet 5900mm',      t:'short', x:false, kg:70,  art:'11248', pType:'pallet5900',      sid:3, spos:3},
  // ── Stapel 4 — 5900mm ──
  {nm:'NM-10', lbl:'Kruispallet 5900mm', t:'short', x:true,  kg:95,  art:'11247', pType:'kruispallet5900', sid:4, spos:1},
  {nm:'NM-11', lbl:'Pallet 5900mm',      t:'short', x:false, kg:70,  art:'11248', pType:'pallet5900',      sid:4, spos:2},
  {nm:'NM-12', lbl:'Pallet 5900mm',      t:'short', x:false, kg:70,  art:'11248', pType:'pallet5900',      sid:4, spos:3},
];

// ═══ KLANTPROFIELEN ═══
// Voeg hier nieuwe klanten toe. Detectie werkt op klantnaam of projectnummer (lowercase match).
const KLANT_PROFIELEN = {
  'psi': {
    naam: 'PSI',
    detectie: ['psi', 'polar specialized'],
    regels: {
      // ── NM-6 regels ──
      artikel_nm6: '66222',              // Hoofdartikel op NM-6 (kliklijst)
      artikel_nm6_std_qty: 160,          // Exact 160× op NM-6 (harde eis)
      artikel_nm6_aanvulling: '72065-H', // Aanvullen na 66222 op NM-6
      artikel_nm6_aanvulling_qty: 12,    // Max 12× 72065-H op NM-6 (NM-6 heeft voorrang boven NM-1/NM-4)
      nm5_nm6_swap: true,                // Swap NM-5/NM-6 als 66222 op NM-5 terechtkomt
      nm6_label: 'Kliklijsten',          // Speciale badge voor NM-6
      nm6_extra_kliklijsten: ['72200-H','13047','13003','13002','13001'], // Extra kliklijsten naast 66222

      // ── NM-1 / NM-4 regels ──
      nm1_nm4_voorkeur: ['72073-H','72065-H'], // Voorkeur voor X-pallets NM-1 en NM-4 (na NM-6)

      // ── Locatiegroepen voor 6000mm profielen (harde eis: per locatie bij elkaar) ──
      // Artikelen die altijd samen op NM-7 moeten (harde eis)
      nm7_vaste_artikelen: ['67231','70000','66882'],

      // ── Gewichtsregels ──
      // Marge (+75 kg) alleen toepassen als het artikel niet op streefgewicht past
      // Nooit de marge gebruiken als het artikel op volle lagen binnen streef past
      marge_alleen_indien_nodig: true,

      // ── 6000mm profielen: harde eis op korte pallets ──
      // Profielen met l===6000 moeten op NM-7 t/m NM-12 (harde eis, min verlengingen)
      artikel_6000_op_kort: true,

      // ── Laaglogica: volle lagen per artikel ──
      // Laaggrootte = aantal stuks per laag; lagen bepaald door gewicht
      // Artikelen niet in deze lijst: vrij verdelen zoals normaal
      laaggrootte: {
        '72356':    8,   // max 32 stuks (4 lagen); aanvullen met kleine profielen toegestaan
        '72356-H':  8,
        '72065-H': 12,
        '72073-H': 12,
        '72956-H':  6,
        '72973':    6,
        '72669':   10,
        '70359-H':  8,
        '70373':    8,
      },
    }
  },
  'sen': {
    naam: 'Senneca Holdings (SEN)',
    detectie: ['sen', 'senneca', 'senneca holdings'],
    regels: {
      // Geen NM-6 kliklijstregel (PSI-specifiek, niet van toepassing)
      // Geen NM-1/NM-4 voorkeur voor 72073-H / 72065-H (worden niet afgenomen)
      // Verdere regels volgen later
    }
  },
  // SCS: regels volgen later
  // 'scs': { naam: 'SCS', detectie: ['scs','storage control'], regels: {} },
};

function getKlantProfiel(klantNaam, projNr){
  const zoek = ((klantNaam||'')+(projNr||'')).toLowerCase();
  for(const [key, profiel] of Object.entries(KLANT_PROFIELEN)){
    if(profiel.detectie.some(d => zoek.includes(d))) return profiel;
  }
  return null; // geen specifiek profiel → standaard planningsregels
}

// ═══ STATE ═══
let known=[], unknwn=[], plan=[], projNr='', klant='';
let checkedItems = {};
let psi66222Mode = null; // null=niet gevraagd, true=160st vaste NM6, false=vrij aantal
let psi66222Qty  = 160;  // aantal als vrij gekozen

// ═══ DRAG & DROP ═══
window.addEventListener('DOMContentLoaded', async function(){
  try{ await renderDB(); } catch(e){ console.warn('DB laden mislukt:', e); }
  try{ await initPlanning(); } catch(e){ console.warn('Planning laden mislukt:', e); }
  switchTab('pallet');

  const dz=document.getElementById('dropZone');
  const fi=document.getElementById('fileInput');

  dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('over');});
  dz.addEventListener('dragleave',()=>dz.classList.remove('over'));
  dz.addEventListener('drop',e=>{
    e.preventDefault();
    dz.classList.remove('over');
    if(e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  });

  fi.addEventListener('change',e=>{
    if(e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  });
});

function normArt(r){return String(r).trim().toUpperCase().replace(/^0+(?=\d)/,'');}
function normArtStrip(r){return normArt(r).replace(/-H$/i,'');}

// Map: nieuw (hernoemd) artikelnummer → oorspronkelijke vaste-DB-sleutel waarop de override staat
function dbRenameFromMap(){
  const m = {};
  const ov = window._dbOverrides || {};
  Object.keys(ov).forEach(function(k){
    const an = ov[k].art_nieuw;
    if(an) m[normArt(an)] = k;
  });
  return m;
}

function isVervallen(art){
  return !!(window._dbOverrides && window._dbOverrides[art] && window._dbOverrides[art].vervallen);
}

// Geeft het effectieve record voor een artikelnummer: gedeelde override (Supabase, evt. via hernoeming) > vaste DB > eigen DB
function dbRecFor(art){
  if(!art) return null;
  const ov = window._dbOverrides && window._dbOverrides[art];
  if(ov) return ov;
  const renameMap = dbRenameFromMap();
  if(renameMap[art]) return window._dbOverrides[renameMap[art]];
  if(DB[art]) return DB[art];
  const cdb = window._customDB && window._customDB[art];
  return cdb || null;
}

// Zoek DB record: eerst exact, dan zonder suffix
function dbLookup(artRaw){
  const exact = normArt(artRaw);
  const ov = window._dbOverrides || {};
  const cdb = window._customDB || {};
  const renameMap = dbRenameFromMap();

  // 1. Exacte match: override (evt. hernoemd) > vaste DB > eigen DB
  if(ov[exact]) return {key: exact, rec: ov[exact], suffixStripped: false, overridden: true};
  if(renameMap[exact]) return {key: exact, rec: ov[renameMap[exact]], suffixStripped: false, overridden: true, renamed: true};
  if(DB[exact]) return {key: exact, rec: DB[exact], suffixStripped: false};
  if(cdb[exact]) return {key: exact, rec: cdb[exact], suffixStripped: false, custom: true};

  // 2. Gestripte match (73773-H → 73773)
  const stripped = normArtStrip(artRaw);
  if(stripped !== exact){
    if(ov[stripped]) return {key: stripped, rec: ov[stripped], suffixStripped: true, overridden: true};
    if(renameMap[stripped]) return {key: stripped, rec: ov[renameMap[stripped]], suffixStripped: true, overridden: true, renamed: true};
    if(DB[stripped]) return {key: stripped, rec: DB[stripped], suffixStripped: true};
    if(cdb[stripped]) return {key: stripped, rec: cdb[stripped], suffixStripped: true, custom: true};
  }

  // 3. -H variant zoeken (73773 → 73773-H) voor projecten opgeslagen vóór -H fix
  const withH = exact + '-H';
  if(ov[withH]) return {key: withH, rec: ov[withH], suffixStripped: false, overridden: true, addedH: true};
  if(renameMap[withH]) return {key: withH, rec: ov[renameMap[withH]], suffixStripped: false, overridden: true, renamed: true, addedH: true};
  if(DB[withH]) return {key: withH, rec: DB[withH], suffixStripped: false, addedH: true};
  if(cdb[withH]) return {key: withH, rec: cdb[withH], suffixStripped: false, custom: true, addedH: true};

  return null;
}

// ═══ BROWSOM PARSING ═══
// BROWSOM-kolommen: A=Pos, B=Projectnr, C=Materiaalnr, D=Omschrijving, H=Lok,
//                   I=Aantal, V=Gewicht(totaal), W=StukGew, X=Lengte
function processFile(file){
  const r=new FileReader();
  r.onload=e=>{
    try{
      const wb=XLSX.read(e.target.result,{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
      parseBrowsom(rows);
    }catch(err){alert('Fout bij inlezen: '+err.message);}
  };
  r.readAsArrayBuffer(file);
}

function parseBrowsom(rows){
  // Zoek headerrij in eerste 10 rijen op bekende BROWSOM kolomnamen
  let headerRow=-1, colMap={};

  for(let i=0;i<Math.min(10,rows.length);i++){
    const cells=rows[i].map(c=>String(c||'').toLowerCase().trim());
    const hasMat  = cells.some(c=>c.includes('materiaal'));
    const hasAant = cells.some(c=>c==='aantal'||c==='qty');
    const hasPos  = cells.some(c=>c==='pos');
    if(hasMat||hasAant||hasPos){
      headerRow=i;
      cells.forEach((c,idx)=>{
        if(c==='materiaalnummer'||c==='materiaal nummer'||(c.includes('materiaal')&&c.includes('nummer'))) colMap.art=idx;
        if(c==='omschrijving'||c==='description') colMap.desc=idx;
        if(c==='lok'||c==='locatie'||c==='location'||c==='magazijn') colMap.lok=idx;
        if(c==='aantal'||c==='qty'||c==='quantity'||c==='stuks') colMap.qty=idx;
        if(c.includes('projectnummer')||c==='project nr'||c==='projectnr') colMap.proj=idx;
        if(c.includes('klantnaam')||c==='klant'||c==='customer') colMap.klant=idx;
      });
      break;
    }
  }

  // Altijd fallback op vaste BROWSOM kolomposities als kolom niet gevonden
  // Standaard BROWSOM: A=Pos(0), B=Projectnr(1), C=Materiaalnr(2),
  // D=Omschrijving(3), G=Klantnaam(6), H=Lok(7), I=Aantal(8)
  if(colMap.art===undefined)   colMap.art=2;
  if(colMap.qty===undefined)   colMap.qty=8;
  if(colMap.lok===undefined)   colMap.lok=7;
  if(colMap.proj===undefined)  colMap.proj=1;
  if(colMap.klant===undefined) colMap.klant=6;
  if(colMap.desc===undefined)  colMap.desc=3;
  if(headerRow===-1)           headerRow=0;

  const knownMap=new Map(), unkMap=new Map();
  const skippedQty0=[]; // Artikelen met qty=0

  const dataRows=rows.slice(headerRow+1);
  let detectedProj='', detectedKlant='';

  for(const row of dataRows){
    if(!row.some(c=>c!=='')) continue;

    // Extract project/klant from first data row
    if(!detectedProj && colMap.proj!==undefined && row[colMap.proj])
      detectedProj=String(row[colMap.proj]).trim();
    if(!detectedKlant && colMap.klant!==undefined && row[colMap.klant])
      detectedKlant=String(row[colMap.klant]).trim();

    const artRaw=String(row[colMap.art]||'').trim();
    if(!artRaw||artRaw==='') continue;
    const artNExact=normArt(artRaw);
    if(!artNExact||artNExact.length<4) continue;

    // LEIDEND: alleen kolom I (index colMap.qty) voor aantallen
    const qty=parseFloat(row[colMap.qty])||0;

    // Prioriteit 2: log artikelen met qty=0
    if(qty<=0){
      if(!skippedQty0.find(s=>s.art===artRaw)){
        skippedQty0.push({art:artRaw, reden:'Aantal is 0 of leeg in kolom I'});
      }
      continue;
    }

    const lok=String(row[colMap.lok]||'').trim();
    // Gewicht ALTIJD berekend via profieldatabase (nooit uit BROWSOM)

    // Prioriteit 3: exact match eerst, dan zonder suffix
    const match = dbLookup(artRaw);
    if(match){
      const {key: artN, rec: dbRec} = match;
      const gewTot=dbRec.g*qty;
      if(knownMap.has(artN)){
        const ex=knownMap.get(artN);
        ex.qty+=qty;
        ex.gew+=gewTot;
        if(lok&&!ex.loks.includes(lok)) ex.loks.push(lok);
        if(lok){ ex.lokQty=ex.lokQty||{}; ex.lokQty[lok]=(ex.lokQty[lok]||0)+qty; }
      } else {
        const lokQty=lok?{[lok]:qty}:{};
        knownMap.set(artN,{art:artN,artOrig:artRaw,desc:dbRec.d,l:dbRec.l,gps:dbRec.g,qty,gew:gewTot,loks:lok?[lok]:[],lokQty,suffixStripped:match.suffixStripped,customDB:!!match.custom});
      }
    } else {
      // Prioriteit 1: artikel niet in DB → bewaar als onbekend
      const desc=String(row[colMap.desc]||'').trim();
      if(unkMap.has(artNExact)){
        const ex=unkMap.get(artNExact);
        ex.qty+=qty;
        if(lok&&!ex.loks.includes(lok)) ex.loks.push(lok);
      } else {
        unkMap.set(artNExact,{art:artNExact,artOrig:artRaw,desc,qty,loks:lok?[lok]:[]});
      }
    }
  }

  known=[...knownMap.values()].sort((a,b)=>b.l-a.l);
  unknwn=[...unkMap.values()];
  window._skippedQty0 = skippedQty0;

  // Auto-fill project fields
  projNr=document.getElementById('inp-proj').value||detectedProj;
  klant=document.getElementById('inp-klant').value||detectedKlant;
  if(!document.getElementById('inp-proj').value && detectedProj)
    document.getElementById('inp-proj').value=detectedProj;
  if(!document.getElementById('inp-klant').value && detectedKlant)
    document.getElementById('inp-klant').value=detectedKlant;

  if(!known.length){
    const sample = rows.slice(0,3).map(r=>r.slice(0,5).join(' | ')).join('\n');
    alert('Geen bekende profielartikelnummers gevonden in dit bestand.\n\nDe tool zoekt in kolom C (Materiaalnummer) en kolom I (Aantal).\n\nEerste rijen van uw bestand:\n'+sample+'\n\nControleer of dit het juiste BROWSOM-exportbestand is.');
    return;
  }
  showReview();
}

// ═══ STEP 2: REVIEW ═══
function showReview(){
  setStep(2);
  document.getElementById('sec-upload').classList.add('hidden');
  document.getElementById('sec-review').classList.remove('hidden');

  const totG=known.reduce((s,p)=>s+p.gew,0);

  document.getElementById('statsRow').innerHTML=`
    <div class="stat"><div class="stat-n">${known.length}</div><div class="stat-l">Profieltypen</div></div>
    <div class="stat"><div class="stat-n">${known.reduce((s,p)=>s+p.qty,0)}</div><div class="stat-l">Totaal stuks</div></div>
    <div class="stat"><div class="stat-n">${Math.round(totG)}</div><div class="stat-l">Nettogewicht kg</div></div>
    <div class="stat"><div class="stat-n">${known.filter(p=>p.l>6000).length}</div><div class="stat-l">Types &gt;6.000mm</div></div>
    <div class="stat"><div class="stat-n">${known.filter(p=>p.l<=6000).length}</div><div class="stat-l">Types &le;6.000mm</div></div>`;

  let aH='';
  if(known.length) aH+=`<div class="alert a-ok">&#10003; ${known.length} profieltype(s) herkend &mdash; gewicht berekend via profieldatabase (${known.reduce((s,p)=>s+p.qty,0)} stuks totaal).</div>`;
  // Prioriteit 2: qty=0 waarschuwing
  const _sq0 = window._skippedQty0||[];
  if(_sq0.length){
    aH+=`<div class="alert" style="background:#FFF8E1;border-left:3px solid #F57F17;padding:10px 14px;font-size:12px;color:#5D4037;margin-bottom:8px">
      <strong style="font-family:var(--fc);letter-spacing:.5px">LET OP — ${_sq0.length} artikel(en) overgeslagen (aantal = 0):</strong>
      <span style="margin-left:8px">${_sq0.map(s=>'<code style="background:#FFF3E0;padding:1px 4px;border-radius:2px">'+esc(s.art)+'</code>').join(' ')}</span>
    </div>`;
  }
  document.getElementById('alertsReview').innerHTML=aH;

  // Toon klantspecifieke kaart als er een profiel is met een NM6-artikel
  const _kp = getKlantProfiel(klant, projNr);
  const _art6 = _kp?.regels?.artikel_nm6;
  const _stdQty = _kp?.regels?.artikel_nm6_std_qty || 0;
  const hasNm6Art = _art6 && known.some(p=>p.art===_art6);
  const psiCard = document.getElementById('card-psi-66222');
  if(_kp && hasNm6Art){
    // Update de tekst in de kaart dynamisch
    psiCard.querySelector('p').innerHTML =
      'Voor klant <strong>'+_kp.naam+'</strong>: Kliklijsten (<strong>'+_art6+'</strong>) worden altijd op NM-6 geplaatst, aangevuld met zoveel mogelijk 72065-H.<br>'
      +'Standaard <strong>'+_stdQty+'&times; artikel '+_art6+'</strong> — klopt dit aantal voor deze order?';
    document.getElementById('btn-psi-ja').textContent = '✓ Ja — '+_stdQty+'× '+_art6+' op NM-6';
    document.getElementById('btn-psi-nee').textContent = 'Nee — ander aantal invullen';
    psiCard.classList.remove('hidden');
    psi66222Mode = null;
    document.getElementById('psi-nee-invoer').classList.add('hidden');
  } else {
    psiCard.classList.add('hidden');
    psi66222Mode = null;
  }

  // Known table
  let t=`<table><thead><tr><th>Art.nr.</th><th>Omschrijving</th><th class="r">Lengte mm</th><th class="r">Stuks</th><th class="r">Gew./st. kg</th><th class="r">Totaal kg</th><th>Categorie</th><th>Locatie(s)</th><th>Pallet</th></tr></thead><tbody>`;
  known.forEach(p=>{
    const pt=p.l>6000?'long':'short';
    const badgeCls=pt==='long'?'b-p7':'b-p5';
    const ptLbl=pt==='long'?'7.350mm pallet':'5.900mm pallet';
    const _dbRec = dbRecFor(p.art)||{};
    const _cat   = _dbRec.cat||'';
    const _klas  = _dbRec.klasse||'';
    const _catBg = _cat==='kliklijst'?'var(--blue-lt)':_cat==='rail'?'#E3F2FD':_cat==='omranding'?'#E8F5E9':_cat==='afwerking'?'#FFF9C4':'var(--g100)';
    const _klasBg= _klas==='zwaar'?'#FFCDD2':_klas==='middel'?'#FFF9C4':_klas==='licht'?'#E8F5E9':'transparent';
    t+=`<tr><td style="font-family:var(--fc);font-weight:600">${esc(p.artOrig)}</td><td>${esc(p.desc)}</td>
      <td class="r">${p.l.toLocaleString('nl-NL')}</td><td class="r;font-weight:600">${p.qty}</td>
      <td class="r">${p.gps.toFixed(3)}</td><td class="r;font-weight:600">${p.gew.toFixed(1)}</td>
      <td><span style="font-size:11px;padding:1px 6px;border-radius:2px;background:${_catBg}">${esc(_cat)||'—'}</span>${_klas?`<span style="font-size:10px;padding:1px 5px;border-radius:2px;background:${_klasBg};margin-left:3px">${esc(_klas)}</span>`:''}</td>
      <td>${p.loks.map(l=>`<span style="font-size:11px;background:var(--blue-lt);color:var(--blue);padding:1px 5px;margin-right:3px;font-family:var(--fc)">${esc(l)}</span>`).join('')}</td>
      <td><span class="badge ${badgeCls}">${ptLbl}</span></td></tr>`;
  });
  t+='</tbody></table>';
  document.getElementById('tbl-known').innerHTML=t;

  // Onbekende artikelen kaart (Prioriteit 1)
  const unkCard = document.getElementById('card-unknown');
  if(unknwn.length){
    let ut=`<table><thead><tr><th>Art.nr. (origineel)</th><th>Omschrijving</th><th class="r">Stuks</th><th>Locatie(s)</th><th>Actie</th></tr></thead><tbody>`;
    unknwn.forEach((p,i)=>{
      ut+=`<tr>
        <td style="font-family:var(--fc);font-weight:600;color:var(--gold)">${esc(p.artOrig)}</td>
        <td style="color:var(--g500);font-size:12px">${esc(p.desc)||'—'}</td>
        <td class="r;font-weight:600">${p.qty}</td>
        <td>${p.loks.map(l=>`<span style="font-size:11px;background:var(--blue-lt);color:var(--blue);padding:1px 5px;margin-right:3px;font-family:var(--fc)">${esc(l)}</span>`).join('')||'—'}</td>
        <td><button onclick="addUnknownToCustomDB(${i})" style="font-size:11px;padding:3px 8px;background:var(--red);color:#fff;border:none;cursor:pointer;font-family:var(--fc);letter-spacing:.5px">+ TOEVOEGEN AAN DB</button></td>
      </tr>`;
    });
    ut+='</tbody></table>';
    document.getElementById('tbl-unknown').innerHTML=ut;
    unkCard.classList.remove('hidden');
  } else {
    unkCard.classList.add('hidden');
  }
}

// ═══ PSI 66222 KEUZE ═══
function psiKeuze(isJa){
  psi66222Mode = isJa;
  document.getElementById('btn-psi-ja').style.opacity = isJa?'1':'0.5';
  document.getElementById('btn-psi-nee').style.opacity = isJa?'0.5':'1';
  if(!isJa){
    document.getElementById('psi-nee-invoer').classList.remove('hidden');
    psi66222Qty = parseInt(document.getElementById('inp-psi-qty').value)||0;
  } else {
    document.getElementById('psi-nee-invoer').classList.add('hidden');
    psi66222Qty = 160;
  }
}

// ═══ STEP 3: PLAN ═══
function runPlanning(){
  // Gebruik veld-waarde, of val terug op wat uit het bestand gelezen is
  projNr=document.getElementById('inp-proj').value.trim() || projNr;
  klant=document.getElementById('inp-klant').value.trim() || klant;

  // Vul het veld alsnog in zodat het zichtbaar is
  if(projNr) document.getElementById('inp-proj').value=projNr;
  if(klant)  document.getElementById('inp-klant').value=klant;

  // Update header badge
  if(projNr){
    const d=document.getElementById('proj-display');
    d.textContent=projNr+(klant?' | '+klant:'');
    d.style.display='block';
  }

  const all=[...known];
  if(!all.length){alert('Geen profielen beschikbaar.');return;}

  // Klantspecifieke NM6-artikel check
  const _kp2 = getKlantProfiel(klant, projNr);
  const _art62 = _kp2?.regels?.artikel_nm6;
  // Zoek 66222 ook als artOrig of via dbLookup (verdekt door -H of opgeslagen als artOrig)
  const hasNm6Art2 = _art62 && all.some(p=>{
    const a = (p.art||'').toUpperCase();
    const b = _art62.toUpperCase();
    return a===b || a===b+'-H' || (p.artOrig||'').toUpperCase()===b;
  });
  if(_kp2 && hasNm6Art2 && psi66222Mode===null){
    alert('Geef eerst aan hoeveel stuks artikel '+_art62+' in de order zitten (zie de blauwe kaart hierboven).');
    return;
  }
  // Als vrij aantal: update qty van het NM6-artikel
  if(_kp2 && hasNm6Art2 && psi66222Mode===false){
    const qtyInp = parseInt(document.getElementById('inp-psi-qty').value)||0;
    psi66222Qty = qtyInp;
    const pNm6 = all.find(p=>p.art===_art62);
    if(pNm6){ pNm6.qty=qtyInp; pNm6.gew=pNm6.gps*qtyInp; }
  }

  // nm6Fixed = altijd true als PSI-klant met 66222 (vraag is beantwoord)
  // Qty van 66222 is al bijgesteld via psi66222Mode (160 of eigen getal)
  plan=computePlan(all, !!(_kp2 && hasNm6Art2), _kp2);
  showResults();
}

function computePlan(profiles, nm6Fixed=false, klantProfiel=null){
  window._planWarnings = [];
  window._unplacedItems = [];

  // ── Constanten ──
  // MAX_P   = streefgewicht per pallet (1000 kg totaal incl. OHD)
  // MARGE   = toegestane afwijking boven streef als stapel ≤ MAX_S (±25 kg)
  // MAX_S   = maximaal stapelgewicht (3000 kg totaal incl. OHD)
  // OHD     = opheffingsfactor (1.06)
  const MARGE = (window._margeOverride || 25); // kg afwijking toegestaan boven 1000 kg mits stapel OK

  const long  = profiles.filter(p=>p.l>6000);
  const short = profiles.filter(p=>p.l<=6000);

  const pallets = PLAN_STRUCTURE.map(s=>({...s,items:[],profW:0,used:false}));

  // ── Limiet helpers ──
  // Profiel-ruimte op pallet bij streefgewicht (1000 kg incl. OHD)
  function normLim(p){ return MAX_P/OHD - p.kg; }
  // Profiel-ruimte met marge (+75 kg), mits stapel het toelaat
  function margeLim(p){ return (MAX_P + MARGE)/OHD - p.kg; }
  // Harde stapellimiet: hoeveel profiel mag dit pallet maximaal hebben
  // gegeven wat de stapelgenoten al wegen
  function stapelLim(p){
    const sibs = pallets.filter(s=>s.sid===p.sid && s.nm!==p.nm);
    const sibKg = sibs.reduce((s,x)=>s+(x.profW+x.kg)*OHD, 0);
    return Math.max(0, (MAX_S - sibKg)/OHD - p.kg);
  }
  // Effectieve limiet: normaal streef, maar nooit meer dan stapelruimte toelaat
  function effectiefLim(p, metMarge=false){
    const basis = metMarge ? margeLim(p) : normLim(p);
    return Math.min(basis, stapelLim(p));
  }

  // Hoeveel kg profiel past er nog op dit pallet?
  function ruimte(p, metMarge=false){
    return Math.max(0, effectiefLim(p, metMarge) - p.profW);
  }

  // Mag dit gewicht toegevoegd worden? (streef + optioneel marge, stapel OK)
  function pasPast(p, addW, metMarge=false){
    if(p.profW + addW > effectiefLim(p, metMarge)) return false;
    const sibs = pallets.filter(s=>s.sid===p.sid);
    const cur   = sibs.reduce((s,x)=>s+(x.profW+x.kg)*OHD, 0);
    return cur + addW*OHD <= MAX_S;
  }

  function addItem(slot, item){
    const ex = slot.items.find(x=>x.art===item.art);
    if(ex){ ex.qty+=item.qty; ex.gew+=item.gew; }
    else slot.items.push({...item});
    slot.profW += item.gew;
    slot.used   = true;
  }

  // Score: voorkeur voor pallet dat dit artikel al heeft, daarna minste types
  function score(slot, item){
    const heeft = slot.items.some(x=>x.art===item.art);
    return (heeft ? -1000 : 0) + slot.items.length;
  }

  // ── NM-6 KLIKLIJSTEN: harde eis voor PSI ──
  // Uitvoeren zodra vraag beantwoord is (ja=160, nee=eigen aantal) — qty al bijgesteld
  // NM-6 = correcte qty 66222 + zoveel mogelijk 72065-H
  if(nm6Fixed && klantProfiel?.regels?.artikel_nm6){
    const art6    = klantProfiel.regels.artikel_nm6;            // '66222'
    const artAanv = klantProfiel.regels.artikel_nm6_aanvulling; // '72065-H'
    const nm6     = pallets.find(p=>p.nm==='NM-6');

    if(nm6 && art6){
      // 1. Harde plaatsing: exact 160× 66222 op NM-6; eventueel restant terug in long[]
      const stdQty66222 = klantProfiel.regels.artikel_nm6_std_qty || 160;
      // Zoek 66222 in long[] (l=6700 > 6000), check ook artOrig en -H variant
      let vIdx = long.findIndex(p=>{
        const a=(p.art||'').toUpperCase(), b=art6.toUpperCase();
        const ao=(p.artOrig||'').toUpperCase();
        return a===b || a===b+'-H' || ao===b || ao===b+'-H';
      });
      if(vIdx>=0){
        const src = long[vIdx];
        const placeQty = Math.min(src.qty, stdQty66222);
        addItem(nm6, {...src, qty:placeQty, gew:placeQty*src.gps});
        if(placeQty >= src.qty){
          long.splice(vIdx, 1);
        } else {
          src.qty -= placeQty;
          src.gew  = src.qty * src.gps;
        }
      } else {
        // Fallback: zoek ook in short[] (zou niet moeten maar zekerheidshalve)
        const sIdx = short.findIndex(p=>{
          const a=(p.art||'').toUpperCase(), b=art6.toUpperCase();
          return a===b || a===b+'-H' || (p.artOrig||'').toUpperCase()===b;
        });
        if(sIdx>=0){
          const src = short[sIdx];
          const placeQty = Math.min(src.qty, stdQty66222);
          addItem(nm6, {...src, qty:placeQty, gew:placeQty*src.gps});
          if(placeQty >= src.qty){ short.splice(sIdx, 1); }
          else { src.qty -= placeQty; src.gew = src.qty * src.gps; }
        }
      }

      // 2. Vul NM-6 aan met zoveel mogelijk 72065-H (harde eis)
      if(artAanv){
        const aIdx = long.findIndex(p=>{
          const a = p.art.toUpperCase();
          const b = artAanv.toUpperCase();
          return a===b || a===b.replace(/-H$/,'') || a+(a.endsWith('-H')?'':'-H')===b;
        });
        if(aIdx>=0){
          const aanv = long[aIdx];
          const r = ruimte(nm6, true);
          if(r >= aanv.gps){
            const maxAanv = klantProfiel.regels.artikel_nm6_aanvulling_qty || Infinity;
          const fitQty = Math.min(aanv.qty, maxAanv, Math.floor(r / aanv.gps));
            if(fitQty>0){
              addItem(nm6, {...aanv, qty:fitQty, gew:fitQty*aanv.gps});
              if(fitQty>=aanv.qty){ long.splice(aIdx,1); }
              else { aanv.qty-=fitQty; aanv.gew=aanv.qty*aanv.gps; }
            }
          }
        }
      }
    }
  }

  // ── NM-1 / NM-4 VOORKEUR: vul X-pallets met voorkeur-artikelen ──
  // Regel: 72073-H zoveel mogelijk op NM-1/NM-4, aangevuld met 72065-H, streef ~1000 kg
  if(nm6Fixed && klantProfiel?.regels?.nm1_nm4_voorkeur){
    const voorkeursArts = klantProfiel.regels.nm1_nm4_voorkeur; // ['72073-H','72065-H']
    const xPallets = ['NM-1','NM-4'].map(nm=>pallets.find(p=>p.nm===nm)).filter(Boolean);

    for(const xPal of xPallets){
      for(const voorkArt of voorkeursArts){
        const vIdx = long.findIndex(p=>{
          const a=(p.art||'').toUpperCase(), b=voorkArt.toUpperCase();
          const ao=(p.artOrig||'').toUpperCase();
          return a===b || a===b.replace(/-H$/,'') || ao===b || ao===b.replace(/-H$/,'');
        });
        if(vIdx<0) continue;
        const item = long[vIdx];
        const r = ruimte(xPal, true);
        if(r < item.gps) continue;
        const fitQty = Math.min(item.qty, Math.floor(r / item.gps));
        if(fitQty<=0) continue;
        addItem(xPal, {...item, qty:fitQty, gew:fitQty*item.gps});
        if(fitQty>=item.qty){ long.splice(vIdx,1); }
        else { item.qty-=fitQty; item.gew=item.qty*item.gps; }
      }
    }
  }

  // ── Hoofdverdeling: long en short profielen ──
  function packItems(items, type){
    if(!items.length) return;
    const slots = pallets.filter(p=>p.t===type);
    const laagMap = klantProfiel?.regels?.laaggrootte || {};

    // Hulpfunctie: geef laaggrootte voor een artikel (0 = geen laaglogica)
    function getLaag(art, artOrig){
      const a = (art||'').toUpperCase();
      const ao = (artOrig||'').toUpperCase();
      for(const [k,v] of Object.entries(laagMap)){
        const b = k.toUpperCase();
        if(a===b || ao===b) return v;
      }
      return 0;
    }

    // Groepeer per artikel, zwaarste groep eerst
    const groups = {};
    items.forEach(item=>{
      if(!groups[item.art]) groups[item.art]={...item,qty:0,gew:0};
      groups[item.art].qty+=item.qty;
      groups[item.art].gew+=item.gew;
      // Bewaar palletVoorkeur op de groep als die aanwezig is
      if(item.palletVoorkeur) groups[item.art].palletVoorkeur = item.palletVoorkeur;
    });
    const sorted = Object.values(groups).sort((a,b)=>b.gew-a.gew);

    for(const grp of sorted){
      const laag = getLaag(grp.art, grp.artOrig);

      // Harde pallettoewijzing: als het artikel een palletVoorkeur heeft, altijd daar naartoe
      if(grp.palletVoorkeur){
        const vPal = slots.find(s => s.nm === grp.palletVoorkeur);
        if(vPal){ addItem(vPal, grp); continue; }
        // Pallet niet gevonden of verkeerd type → val door naar normale logica
      }

      // Pass 1: past de hele groep op één pallet binnen streefgewicht?
      let best=null, bestSc=Infinity;
      for(const slot of slots){
        if(pasPast(slot, grp.gew, false)){
          const s = score(slot, grp);
          if(s<bestSc){ bestSc=s; best=slot; }
        }
      }
      if(best){ addItem(best, grp); continue; }

      // Pass 2 (alleen zonder laaglogica): past met marge?
      // Bij laaglogica slaan we marge over — we willen altijd volle lagen
      if(!laag){
        for(const slot of slots){
          if(pasPast(slot, grp.gew, true)){
            const s = score(slot, grp);
            if(s<bestSc){ bestSc=s; best=slot; }
          }
        }
        if(best){ addItem(best, grp); continue; }
      }

      // Pass 3: groep past niet in één keer → splits per laag (of vrij bij geen laaglogica)
      let remQty = grp.qty;

      // Sorteer: pallet met dit artikel heeft sterk voorkeur, daarna meeste ruimte
      const srtSlots = slots.slice().sort((a,b)=>{
        const aH = a.items.some(x=>x.art===grp.art)?10000:0;
        const bH = b.items.some(x=>x.art===grp.art)?10000:0;
        return (bH + ruimte(b,false)) - (aH + ruimte(a,false));
      });

      for(const slot of srtSlots){
        if(remQty<=0) break;
        // Bereken hoeveel stuks passen binnen streefgewicht (zonder marge bij laaglogica)
        const r = ruimte(slot, false);
        if(r < grp.gps) continue;
        let fitQty = Math.floor(r / grp.gps);
        if(fitQty <= 0) continue;
        // Bij laaglogica: afronden naar beneden op hele lagen
        if(laag){
          const volleLagen = Math.floor(fitQty / laag);
          if(volleLagen <= 0) continue; // minder dan 1 laag past → sla over naar volgend pallet
          fitQty = volleLagen * laag;
        }
        fitQty = Math.min(remQty, fitQty);
        if(fitQty > 0){
          addItem(slot, {...grp, qty:fitQty, gew:fitQty*grp.gps});
          remQty -= fitQty;
        }
      }

      // Noodgeval: nog steeds rest → kan niet meer geplaatst worden (alle pallets vol)
      if(remQty>0){
        if(!window._unplacedItems) window._unplacedItems=[];
        window._unplacedItems.push({
          art:   grp.artOrig||grp.art,
          desc:  grp.desc||'',
          qty:   remQty,
          gps:   grp.gps,
          gew:   remQty*grp.gps
        });
        if(!window._planWarnings) window._planWarnings=[];
        window._planWarnings.push(
          'Artikel '+(grp.artOrig||grp.art)+' ('+remQty+'×): past niet meer op beschikbare pallets.'
        );
      }
    }
  }

  // ── Pre-processing: 6000mm harde eis ──
  // Strategie: vul NM-7 volledig met 6000mm profielen, dan NM-8, enz.
  // Pas daarna de overige korte profielen op de resterende ruimte.
  if(klantProfiel?.regels?.artikel_6000_op_kort){
    const exact6000 = short.filter(p => p.l === 6000);
    exact6000.forEach(p => short.splice(short.indexOf(p), 1));

    const kortePallets = pallets.filter(p => p.t === 'short')
      .sort((a,b) => parseInt(a.nm.split('-')[1]) - parseInt(b.nm.split('-')[1]));

    function plaats6000(pal, grp, qty){
      const gew = qty * grp.gps;
      const ex = pal.items.find(x => x.art === grp.art);
      if(ex){ ex.qty += qty; ex.gew += gew; }
      else   { pal.items.push({...grp, qty, gew}); }
      pal.profW += gew;
      pal.used   = true;
    }

    if(exact6000.length){
      const nm7Artikelen = klantProfiel?.regels?.nm7_vaste_artikelen || [];

      // Splits: vaste NM-7 artikelen vs de rest
      const nm7Items   = exact6000.filter(p => nm7Artikelen.includes(p.art) || nm7Artikelen.includes(p.artOrig));
      const rest6000   = exact6000.filter(p => !nm7Artikelen.includes(p.art) && !nm7Artikelen.includes(p.artOrig));

      // Vaste artikelen → altijd NM-7 (harde eis)
      const nm7 = kortePallets[0];
      if(nm7){
        nm7Items.sort((a,b) => b.gew - a.gew);
        nm7Items.forEach(grp => plaats6000(nm7, grp, grp.qty));
      }

      // Overige 6000mm → vanaf NM-7 (resterende ruimte), dan NM-8 en verder
      let palletIdx = 0;
      rest6000.sort((a,b) => b.gew - a.gew);
      for(const grp of rest6000){
        let remQty = grp.qty;
        for(let pi = palletIdx; pi < kortePallets.length && remQty > 0; pi++){
          const pal = kortePallets[pi];
          const r = Math.max(0, MAX_P / OHD - pal.kg - pal.profW);
          if(r < grp.gps) continue;
          const fit = Math.min(remQty, Math.floor(r / grp.gps));
          if(fit <= 0) continue;
          plaats6000(pal, grp, fit);
          remQty -= fit;
          if(remQty > 0) palletIdx = pi + 1;
        }
        if(remQty > 0){
          if(!window._unplacedItems) window._unplacedItems = [];
          window._unplacedItems.push({art:grp.artOrig||grp.art, desc:grp.desc||'', qty:remQty, gps:grp.gps, gew:remQty*grp.gps});
        }
      }
    }

    packItems(short, 'short');
  } else {
    packItems(short, 'short');
  }

  packItems(long, 'long');

  // ── NM-5/NM-6 swap indien 66222 toch op NM-5 belandde ──
  if(nm6Fixed && klantProfiel?.regels?.nm5_nm6_swap && klantProfiel?.regels?.artikel_nm6){
    const art6 = klantProfiel.regels.artikel_nm6;
    const nm5  = pallets.find(p=>p.nm==='NM-5');
    const nm6  = pallets.find(p=>p.nm==='NM-6');
    if(nm5&&nm6){
      const nm5H = nm5.items.some(i=>i.art===art6||i.art===art6+'-H');
      const nm6H = nm6.items.some(i=>i.art===art6||i.art===art6+'-H');
      if(nm5H&&!nm6H){
        [nm5.items,nm6.items]=[nm6.items,nm5.items];
        [nm5.profW,nm6.profW]=[nm6.profW,nm5.profW];
        [nm5.used, nm6.used ]=[nm6.used, nm5.used ];
      }
    }
  }

  // ── NM-6 aanvulling (verplaats resterende 72065-H naar NM-6) — max artikel_nm6_aanvulling_qty in totaal ──
  if(nm6Fixed && klantProfiel?.regels?.artikel_nm6_aanvulling){
    const artAanv   = klantProfiel.regels.artikel_nm6_aanvulling;
    const maxAanvTot = klantProfiel.regels.artikel_nm6_aanvulling_qty || 12;
    const nm6 = pallets.find(p=>p.nm==='NM-6');
    if(nm6){
      // Tel hoeveel 72065-H er al op NM-6 staan (vanuit eerste plaatsingspass)
      const alreadyOnNm6 = nm6.items.reduce((s,i)=>{
        const a=i.art.toUpperCase(), b=artAanv.toUpperCase();
        return s + ((a===b||a===b.replace(/-H$/,'')||a===b+'-H') ? i.qty : 0);
      }, 0);
      const remaining = maxAanvTot - alreadyOnNm6;
      if(remaining > 0){
        for(const otherPal of pallets.filter(p=>p.nm!=='NM-6')){
          const aanvItem = otherPal.items.find(i=>{
            const a=i.art.toUpperCase(), b=artAanv.toUpperCase();
            return a===b||a===b.replace(/-H$/,'')||a===b+'-H';
          });
          if(!aanvItem) continue;
          const r = ruimte(nm6, true);
          if(r < aanvItem.gps) continue;
          const fitQty = Math.min(aanvItem.qty, remaining, Math.floor(r/aanvItem.gps));
          if(fitQty<=0) continue;
          const fitGew = fitQty*aanvItem.gps;
          addItem(nm6, {...aanvItem, qty:fitQty, gew:fitGew});
          otherPal.profW -= fitGew;
          if(fitQty>=aanvItem.qty){ otherPal.items=otherPal.items.filter(i=>i!==aanvItem); }
          else { aanvItem.qty-=fitQty; aanvItem.gew-=fitGew; }
          if(otherPal.items.length===0) otherPal.used=false;
          break;
        }
      }
    }
  }

  // ── Markeer NM-6 als speciaal pallet ──
  if(nm6Fixed && klantProfiel?.regels?.nm6_label){
    const nm6 = pallets.find(p=>p.nm==='NM-6');
    if(nm6){ nm6.nm6Special=true; nm6.nm6Label=klantProfiel.regels.nm6_label; }
  }

  // ── Finaliseer: sorteer items per pallet en bereken gewichten ──
  pallets.forEach(p=>{
    // Sorteer items: klasse (zwaar→middel→licht) dan gewicht per stuk desc
    // Klasse komt uit DB cat-veld; fallback op gewicht als klasse onbekend
    const klasseRank = k => k==='zwaar'?0 : k==='middel'?1 : k==='licht'?2 : 1;
    const itemKlasse = item => {
      const dbRec = dbRecFor(item.art)||{};
      return dbRec.klasse || (item.gps>=15?'zwaar' : item.gps>=5?'middel':'licht');
    };
    p.items.sort((a,b)=>{
      const kDiff = klasseRank(itemKlasse(a)) - klasseRank(itemKlasse(b));
      if(kDiff!==0) return kDiff;
      return b.gps!==a.gps ? b.gps-a.gps : b.l-a.l;
    });
    p.totalKg    = (p.profW+p.kg)*OHD;
    p.overloaded = p.totalKg > MAX_P;
    const stackKg    = pallets.filter(x=>x.sid===p.sid&&x.used).reduce((s,x)=>(s+(x.profW+x.kg)*OHD),0);
    p.stackViolation = stackKg > MAX_S;
  });

  return pallets.filter(p=>p.used);
}

function phWeightHtml(pal){
  const pct=Math.min(100,(pal.totalKg/MAX_P)*100);
  // bad = stack violation; warn = above 1000kg but within exception rule; ok = normal
  const bc=pal.stackViolation?'bad':pal.overloaded?'warn':pct>88?'warn':'ok';
  return `<div class="wbar" style="background:rgba(255,255,255,.15)"><div class="wfill ${bc}" style="width:${pct.toFixed(1)}%"></div></div>
            <div style="font-size:12px;font-weight:700;margin-top:6px;color:${pal.stackViolation?'#FF5252':pal.overloaded?'#FFD54F':'#69F0AE'}">
              ${pal.totalKg.toFixed(1)} kg incl. 6%
              ${pal.stackViolation?' &#9888;':pal.overloaded?' <span style="font-size:10px">(toegestaan)</span>':''}
            </div>
            <div style="font-size:10px;color:var(--g300);margin-top:2px">Profielen ${pal.profW.toFixed(1)} + Pallet ${pal.kg} kg</div>`;
}

// ═══ RENDER RESULTS ═══
function showResults(){
  setStep(3);
  document.getElementById('sec-review').classList.add('hidden');
  document.getElementById('sec-results').classList.remove('hidden');
  document.getElementById('download-bar').classList.remove('hidden');
  document.getElementById('dl-proj-label').textContent=projNr||'onbekend';
  // Sla project op in database
  saveCurrentProject(); // async, runs in background

  // Group by stapel
  const stapels={};
  plan.forEach(p=>{
    if(!stapels[p.sid]) stapels[p.sid]={id:p.sid,t:p.t,pallets:[]};
    stapels[p.sid].pallets.push(p);
  });

  let html='';
  for(const sid of Object.keys(stapels).sort((a,b)=>a-b)){
    const st=stapels[sid];
    const sw=st.pallets.reduce((s,p)=>s+p.totalKg,0);
    const swOk=sw<=MAX_S;
    const isLong=st.t==='long';
    const stCls=isLong?'long':'short';
    const stLabel=isLong?'7.350mm pallets (profielen &gt;6.000mm)':'5.900mm pallets (profielen &le;6.000mm)';

    html+=`<div class="stack-section">
      <div class="stack-header ${stCls}">
        <div>
          <div class="stack-name ${stCls}">Stapel ${sid} &mdash; ${stLabel}</div>
          <div style="font-size:11px;color:var(--g500);margin-top:2px">${st.pallets.length} pallet${st.pallets.length>1?'s':''} &middot; X-pallet onderop</div>
        </div>
        <div class="stack-weight ${swOk?'ok':'over'}">
          ${Math.round(sw).toLocaleString('nl-NL')} kg ${swOk?'&#10003;':'&#9888; OVERSCHRIJDING'}
          <div style="font-size:10px;font-weight:400;color:var(--g500)">max. 3.000 kg</div>
        </div>
      </div>
      <div class="pallet-row">`;

    st.pallets.forEach(pal=>{
      const typeCls=isLong?'long':'short';
      const palIdx=plan.indexOf(pal);

      const itemRows=pal.items.map((item,idx)=>{
        const palVkHtml=item.palletVoorkeur?`<span class="pr-loc" style="background:#E8F5E9;color:#2E7D32;border:1px solid #A5D6A7" title="Handmatig toegewezen pallet">📌 ${esc(item.palletVoorkeur)}</span>`:'';
        const itemId='chk_'+pal.nm+'_'+idx;
        const locVal=item.loks&&item.loks.length?item.loks.join(', '):'';
        const locHtml=`<span class="pr-loc"${locVal?'':' style="display:none"'}>${esc(locVal)}</span><input class="pr-loc-input" type="text" value="${esc(locVal)}" data-palindx="${palIdx}" data-itemidx="${idx}" placeholder="—">`;
        return `<div class="pr-item" id="row_${itemId}"
            data-pallet="${esc(pal.nm)}"
            data-palindx="${palIdx}"
            data-itemidx="${idx}"
            data-total="${pal.items.length}"
            draggable="false">
          <div class="pr-drag-handle" title="Sleep naar ander pallet">⠇</div>
          <div class="pr-left">
            <input type="checkbox" class="pr-check" id="${itemId}" onchange="toggleDone('${itemId}','${esc(pal.nm)}',${pal.items.length})">
            <div class="pr-pos">${idx+1}</div>
            <div class="pr-info">
              <div class="pr-code">${esc(item.artOrig||item.art)}</div>
              <div class="pr-desc-row">
                <div class="pr-desc">${esc(item.desc)}</div>
                ${locHtml}${palVkHtml}
              </div>
            </div>
          </div>
          <div class="pr-right-wrap">
            ${profielFotoThumbHtml(item.artOrig||item.art)}
            <div class="pr-right">
              <div class="pr-qty">
                <input class="pr-qty-input" type="number" min="1" max="9999"
                  value="${item.qty}" style="display:none"
                  data-palindx="${palIdx}" data-itemidx="${idx}"
                  oninput="bewerkQtyChange(this)">
                <span class="pr-qty-display">${item.qty}×</span>
              </div>
              <div class="pr-gew">${item.l?item.l.toLocaleString('nl-NL')+' mm':''}</div>
              <div class="pr-gew">${item.gew.toFixed(1)} kg</div>
              <button class="pr-item-del" onclick="verwijderArtikel(${palIdx},${idx})" title="Artikel verwijderen">&#10005;</button>
            </div>
          </div>
        </div>`;
      }).join('');

      html+=`<div class="pc ${typeCls}${pal.x?' xpallet':''}" id="pc_${esc(pal.nm)}">
        <div class="ph">
          <button class="pc-verwijder-btn" onclick="verwijderPallet('${esc(pal.nm)}')" title="Pallet verwijderen">&#10005;</button>
          <span class="ph-drag-handle" title="Sleep pallet naar andere positie">⠿⠿</span>
          <div>
            <span class="pnum">${esc(pal.nm)}</span>
            <div class="ptags" style="margin-top:6px">
              <span class="ptyp">${esc(pal.lbl)}</span>
              <span class="pstk-badge ${pal.x?'xp':pal.nm6Special?'nm6special':typeCls}" style="margin-top:3px">${pal.x?'X-PALLET':pal.nm6Special?pal.nm6Label:'Normaal'}</span>
            </div>
          </div>
          <div style="margin-top:auto">
            <div style="font-size:10px;color:var(--g300);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${pal.items.length} type${pal.items.length>1?'s':''} &middot; Art. ${esc(pal.art)}</div>
            <div id="phw_${palIdx}">${phWeightHtml(pal)}</div>
          </div>
        </div>
        <div class="pb">
          ${itemRows}
          <button class="pb-add-btn" onclick="openArtikelPicker(${palIdx},'${esc(pal.nm)}')">
            <span class="sn-add">+</span>Artikel toevoegen
          </button>
          <div class="pb-artikel-picker" id="apicker_${esc(pal.nm)}"></div>
        </div>
      </div>`;
    });
    html+='</div></div>';
  }
  document.getElementById('palletResults').innerHTML=html;

  // Toon overflow-waarschuwing als er niet-geplaatste items zijn
  const unplaced = window._unplacedItems || [];
  const overflowEl = document.getElementById('overflow-warning');
  const overflowBody = document.getElementById('overflow-warning-body');
  const colsWrap = document.getElementById('results-cols-wrap');
  if(overflowEl && overflowBody && colsWrap){
    if(unplaced.length){
      overflowBody.innerHTML = unplaced.map(u=>
        '• Artikel '+(u.art||'')+(u.desc?' — '+esc(u.desc):'')
        +' ('+u.qty+'×, '+u.gew.toFixed(1)+' kg): past niet meer op beschikbare pallets.'
      ).join('<br>');
      overflowEl.style.display = 'block';
      colsWrap.style.display   = 'none';
    } else {
      overflowEl.style.display = 'none';
      colsWrap.style.display   = '';
    }
  }

  // Sla originele pb HTML op per pallet (voor expand/collapse)
  plan.forEach(pal=>{
    const pc = document.getElementById('pc_'+pal.nm);
    if(pc){ const pb=pc.querySelector('.pb'); if(pb) pc._pbOriginal=pb.innerHTML; }
  });
  // Herstel aangevinkte profielen
  restoreCheckedItems();

  // Sidebar summary
  const totK=plan.reduce((s,p)=>s+p.totalKg,0);
  const ovl=plan.filter(p=>p.overloaded).length;
  let sumH=`
    ${projNr?`<div class="sum-block"><div class="sum-label">Projectnummer</div><div class="sum-val" style="font-size:16px">${esc(projNr)}</div></div>`:''}
    ${klant?`<div class="sum-block"><div class="sum-label">Klant</div><div style="font-size:13px;color:var(--g700)">${esc(klant)}</div></div>`:''}
    <div class="sum-divider"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div class="sum-block"><div class="sum-label">Pallets</div><div class="sum-val">${plan.length}</div></div>
      <div class="sum-block"><div class="sum-label">Stapels</div><div class="sum-val">${Object.keys(plan.reduce((a,p)=>{a[p.sid]=1;return a},{})).length}</div></div>
      <div class="sum-block"><div class="sum-label">Totaal kg</div><div class="sum-val">${Math.round(totK)}</div></div>
      <div class="sum-block"><div class="sum-label">&gt;1.000 kg</div><div class="sum-val" style="${ovl?'color:var(--red)':'color:var(--green)'}">${ovl}</div></div>
    </div>
    <div class="sum-divider"></div>
    <table class="sum-table">
      <tr><td style="color:var(--g500)">7350mm pallets</td><td>${plan.filter(p=>p.t==='long').length}</td></tr>
      <tr><td style="color:var(--g500)">5900mm pallets</td><td>${plan.filter(p=>p.t==='short').length}</td></tr>
      <tr><td style="color:var(--g500)">X-pallets</td><td>${plan.filter(p=>p.x).length}</td></tr>
      <tr><td style="color:var(--g500)">Norm. pallets</td><td>${plan.filter(p=>!p.x).length}</td></tr>
    </table>
    <div class="sum-divider"></div>
    <table class="sum-table">`;
  plan.forEach(p=>{
    sumH+=`<tr><td style="color:var(--g500)">${esc(p.nm)}</td><td>${p.totalKg.toFixed(1)} kg${p.overloaded?' &#9888;':''}</td></tr>`;
  });
  sumH+='</table>';
  document.getElementById('summaryArea').innerHTML=sumH;

  // Alerts
  const violations = plan.filter(p=>p.stackViolation);
  let aH='';
  if(violations.length) aH+=`<div class="alert a-danger">&#9888; ${violations.length} pallet(s) overschrijden de stapellimiet van 3.000 kg. Herverdeling vereist.</div>`;
  if(ovl>0 && !violations.length) aH+=`<div class="alert a-warn">&#9432; ${ovl} pallet(s) boven 1.000 kg &mdash; toegestaan via de uitzondering (stapel &le; 3.000 kg).</div>`;
  if(plan.length>=12) aH+=`<div class="alert a-danger">&#9888; Maximum van 12 pallets bereikt.</div>`;
  if(!aH) aH=`<div class="alert a-ok">&#10003; Alle pallets en stapels binnen gewichtslimieten.</div>`;
  document.getElementById('alertsResults').innerHTML=aH;

  // Niet-geplaatste items tonen in sidebar
  const unplacedCard = document.getElementById('unplacedCard');
  const unplacedList = document.getElementById('unplacedList');
  if(unplacedCard && unplacedList){
    const unplaced = window._unplacedItems || [];
    if(unplaced.length){
      unplacedCard.style.display = '';
      let uH = '<table class="sum-table">';
      uH += '<tr style="font-size:10px;color:var(--g400)"><td>Art. / Omschrijving</td><td style="text-align:right">Qty</td><td style="text-align:right">kg</td></tr>';
      unplaced.forEach(u=>{
        uH += '<tr>'
          +'<td><div style="font-family:var(--fc);font-weight:600;font-size:11px;color:var(--g800)">'+(u.art||'')+'</div>'
          +(u.desc?'<div style="font-size:10px;color:var(--g500);white-space:normal;line-height:1.3">'+u.desc+'</div>':'')
          +'</td>'
          +'<td style="text-align:right;font-weight:700;color:var(--red);vertical-align:top">'+u.qty+'×</td>'
          +'<td style="text-align:right;color:var(--g500);font-size:11px;vertical-align:top">'+u.gew.toFixed(1)+' kg</td>'
          +'</tr>';
      });
      const totUnplKg = unplaced.reduce((s,u)=>s+u.gew,0);
      uH += '<tr style="border-top:1px solid var(--g200);margin-top:4px">'
        +'<td style="font-size:11px;color:var(--g500);padding-top:4px">Totaal</td>'
        +'<td style="text-align:right;font-weight:700;color:var(--red);padding-top:4px">'+unplaced.reduce((s,u)=>s+u.qty,0)+'×</td>'
        +'<td style="text-align:right;font-size:11px;color:var(--g600);padding-top:4px">'+totUnplKg.toFixed(1)+' kg</td>'
        +'</tr>';
      uH += '</table>';
      unplacedList.innerHTML = uH;
    } else {
      unplacedCard.style.display = 'none';
    }
  }
}

// ═══ EXCEL EXPORT ═══
function exportExcel(){
  projNr=document.getElementById('inp-proj').value.trim() || projNr;
  klant=document.getElementById('inp-klant').value.trim() || klant;
  const wb=XLSX.utils.book_new();

  // ── Sheet 1: Palletindeling (exact origineel formaat) ──
  const rows=[];

  // Rij 1: titel
  rows.push([null,null,'Palletindeling',`Project: ${projNr}`,null,null,null,`Klant: ${klant}`,null,null,null,null,null,null,null]);

  // Rij 2: kolomheaders
  rows.push([null,null,'Pallets','Part numb.','Omschrijving','Pos',null,'Locatie','Qty','Length mm',null,'Net weight kg','Weight kg','6% Marge kg',null]);

  const stapels={};
  plan.forEach(p=>{if(!stapels[p.sid])stapels[p.sid]=[];stapels[p.sid].push(p);});

  for(const sid of Object.keys(stapels).sort((a,b)=>a-b)){
    const stPals=stapels[sid];
    const stW=stPals.reduce((s,p)=>s+p.totalKg,0);
    let isFirstInStapel=true;

    stPals.forEach(pal=>{
      // Lege rij voor pallet
      rows.push([]);

      // Pallet header rij: NM-x + type + palletgewicht in col K en L
      rows.push([null,null,pal.nm,pal.lbl,null,null,null,null,null,null,pal.kg,pal.kg,null,null,null]);

      // Profielrijen
      pal.items.forEach((item,idx)=>{
        rows.push([null,null,null,item.artOrig||item.art,item.desc,idx+1,null,item.loks.join(', ')||'',item.qty,item.l||null,null,item.gew.toFixed(2),null,null,null]);
      });

      // Subtotaalrij: nettogewicht | weight (+ pallet) | 6% marge | stapelgewicht (alleen eerste pallet)
      const profW=pal.profW.toFixed(2);
      const weight=(pal.profW+pal.kg).toFixed(2);
      const marge=pal.totalKg.toFixed(2);
      const stapelW=isFirstInStapel?stW.toFixed(2):null;
      rows.push([null,null,null,null,null,null,null,null,null,null,null,profW,weight,marge,stapelW]);

      isFirstInStapel=false;
    });
  }

  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:4},{wch:4},{wch:8},{wch:14},{wch:38},{wch:5},{wch:4},{wch:10},{wch:7},{wch:10},{wch:8},{wch:13},{wch:13},{wch:13},{wch:14}];
  XLSX.utils.book_append_sheet(wb,ws,`PSI - ${projNr}`);

  // ── Sheet 2: Overzicht ──
  const r2=[['Pallet','Type','X-Pallet','Stapel','Art.nr','Omschrijving','Pos','Locatie','Qty','Lengte mm','Netto kg','Pallet kg','Totaal incl.6% kg','Stapel totaal kg']];
  plan.forEach(p=>{
    const sw=plan.filter(x=>x.sid===p.sid).reduce((s,x)=>s+x.totalKg,0);
    p.items.forEach((item,idx)=>{
      r2.push([
        p.nm,p.lbl,p.x?'Ja':'Nee',`Stapel ${p.sid}`,
        item.artOrig||item.art,item.desc,idx+1,item.loks.join(', ')||'',
        item.qty,item.l||'',item.gew.toFixed(2),
        idx===0?p.kg:'',idx===0?p.totalKg.toFixed(2):'',
        idx===0?sw.toFixed(2):''
      ]);
    });
  });
  const ws2=XLSX.utils.aoa_to_sheet(r2);
  ws2['!cols']=[{wch:8},{wch:18},{wch:8},{wch:10},{wch:12},{wch:36},{wch:5},{wch:10},{wch:7},{wch:10},{wch:11},{wch:11},{wch:16},{wch:14}];
  XLSX.utils.book_append_sheet(wb,ws2,'Overzicht');

  const dateStr=new Date().toISOString().slice(0,10);
  const klantClean=(klant||'').replace(/[^a-zA-Z0-9]/g,'_').replace(/_+/g,'_').replace(/^_|_$/g,'').slice(0,30);
  const fname=`Gaspack_${projNr||'export'}_${klantClean}_${dateStr}.xlsx`;
  XLSX.writeFile(wb,fname);
}
// ═══ PROJECTENDATABASE (Supabase — gedeeld voor alle gebruikers) ═══
const SB_URL = 'https://gahqjogmbofdonsxenph.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaHFqb2dtYm9mZG9uc3hlbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNjUwOTYsImV4cCI6MjA5MTY0MTA5Nn0.-lVlcXqtUiIGNDLmMBP4u0HeLk3-PiQ3L3VmAuFeems';
const SB_HDR = {'apikey': SB_KEY, 'Authorization': 'Bearer '+SB_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=representation'};

// ═══ PROFIELFOTO'S (Supabase Storage bucket "profielfotos" — gedeeld voor alle gebruikers) ═══
// Bestandsnaam in de bucket moet exact het artikelnummer zijn, bv. 74373.jpg of 73773-H.png.
// Elke pallet-regel toont standaard een kleine thumbnail (indien aanwezig); klik erop voor een grote weergave.
const PR_FOTO_BASE = SB_URL + '/storage/v1/object/public/profielfotos/';
const PR_FOTO_EXTS = ['jpg','png','jpeg'];
window._prFotoCache = window._prFotoCache || {}; // art -> gevonden extensie (string), of false als geen foto bestaat

function profielFotoThumbHtml(art){
  if(!art) return '';
  const cached = window._prFotoCache[art];
  if(cached === false) return '';
  const attrs = 'class="pr-foto-thumb" data-art="'+esc(art)+'" title="Klik voor grote weergave" onclick="toonProfielFotoGroot(this.dataset.art)"';
  if(typeof cached === 'string'){
    return '<img '+attrs+' style="display:block" src="'+PR_FOTO_BASE+encodeURIComponent(art)+'.'+cached+'" onerror="profielFotoThumbError(this)">';
  }
  return '<img '+attrs+' data-tryidx="0" src="'+PR_FOTO_BASE+encodeURIComponent(art)+'.'+PR_FOTO_EXTS[0]+'" onload="profielFotoThumbLoaded(this)" onerror="profielFotoThumbError(this)">';
}

function profielFotoThumbLoaded(img){
  img.style.display = 'block';
  window._prFotoCache[img.dataset.art] = img.src.split('.').pop().split(/[?#]/)[0];
}

function profielFotoThumbError(img){
  const idx = parseInt(img.dataset.tryidx||'0', 10) + 1;
  if(idx < PR_FOTO_EXTS.length){
    img.dataset.tryidx = idx;
    img.src = PR_FOTO_BASE + encodeURIComponent(img.dataset.art) + '.' + PR_FOTO_EXTS[idx];
  } else {
    window._prFotoCache[img.dataset.art] = false;
    img.remove();
  }
}

function toonProfielFotoGroot(art){
  if(!art) return;
  const cached = window._prFotoCache[art];
  const ext = (typeof cached === 'string') ? cached : PR_FOTO_EXTS[0];
  const modal = document.getElementById('pr-foto-modal');
  const img = document.getElementById('pr-foto-modal-img');
  if(!modal||!img) return;
  img.src = PR_FOTO_BASE + encodeURIComponent(art) + '.' + ext;
  modal.classList.add('open');
}

function sluitProfielFotoGroot(){
  const modal = document.getElementById('pr-foto-modal');
  if(modal) modal.classList.remove('open');
}

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') sluitProfielFotoGroot();
});

// ═══ DB-OVERRIDES (Supabase — bewerkingen op de vaste database, gedeeld voor alle gebruikers) ═══
async function dbOvGetAll(){
  try{
    const r = await fetch(SB_URL+'/rest/v1/db_overrides?select=*', {headers: SB_HDR});
    if(!r.ok) throw new Error(await r.text());
    const rows = await r.json();
    const map = {};
    rows.forEach(function(row){
      map[row.art] = {d: row.d, l: row.l, g: row.g, cat: row.cat||undefined, klasse: row.klasse||undefined, art_nieuw: row.art_nieuw||undefined, vervallen: !!row.vervallen, pallet_len: row.pallet_len||undefined, bron: row.bron||'bewerk'};
    });
    return map;
  } catch(e){ console.warn('DB-aanpassingen laden mislukt:', e); return {}; }
}

async function dbOvLoad(){
  window._dbOverrides = await dbOvGetAll();
  cdbRender();
}

async function dbOvUpsertBulk(records){
  const r = await fetch(SB_URL+'/rest/v1/db_overrides?on_conflict=art', {
    method:'POST',
    headers: Object.assign({}, SB_HDR, {'Prefer':'resolution=merge-duplicates,return=representation'}),
    body: JSON.stringify(records)
  });
  if(!r.ok) throw new Error(await r.text());
}

async function dbOvUpsert(art, fields){
  await dbOvUpsertBulk([Object.assign({art: art}, fields)]);
}

// Alle artikelnummers die in het tabblad VAST/VERVALLEN thuishoren: vaste DB + gedeelde overrides (incl. nieuw toegevoegde)
function allVastArtKeys(){
  const keys = new Set(Object.keys(DB));
  const ov = window._dbOverrides || {};
  Object.keys(ov).forEach(function(k){ keys.add(k); });
  return Array.from(keys);
}

async function dbOvDelete(art){
  const r = await fetch(SB_URL+'/rest/v1/db_overrides?art=eq.'+encodeURIComponent(art), {method:'DELETE', headers: SB_HDR});
  if(!r.ok) throw new Error(await r.text());
}

window._dbEditingArt = null;

function dbOverrideBewerken(art){
  window._dbEditingArt = art;
  cdbRender();
  setTimeout(function(){ const inp = document.getElementById('dbov-art'); if(inp){ inp.focus(); inp.select(); } }, 30);
}

function dbOverrideAnnuleren(){
  window._dbEditingArt = null;
  cdbRender();
}

async function dbOverrideOpslaan(origArt){
  const artInp = document.getElementById('dbov-art');
  const descInp = document.getElementById('dbov-desc');
  const lenInp = document.getElementById('dbov-len');
  const gewInp = document.getElementById('dbov-gew');
  const nieuwArt = normArt(artInp?.value||'');
  const desc = (descInp?.value||'').trim();
  const len = parseFloat(lenInp?.value)||0;
  const gew = parseFloat(gewInp?.value)||0;
  if(!nieuwArt || nieuwArt.length<3){ alert('Vul een geldig artikelnummer in (min. 3 tekens).'); return; }
  if(!desc){ alert('Vul een omschrijving in.'); return; }
  if(len<=0){ alert('Vul een geldige lengte in (> 0 mm).'); return; }
  if(gew<=0){ alert('Vul een geldig gewicht in (> 0 kg).'); return; }

  if(nieuwArt !== origArt){
    const renameMap = dbRenameFromMap();
    const bezetDoorAnder = !!DB[nieuwArt]
      || (renameMap[nieuwArt] && renameMap[nieuwArt] !== origArt)
      || (window._dbOverrides && window._dbOverrides[nieuwArt]);
    if(bezetDoorAnder){ alert('Artikelnummer '+nieuwArt+' is al in gebruik door een ander artikel.'); return; }
  }

  const art = origArt;
  const origineel = DB[art] || {};
  const huidigOv = window._dbOverrides && window._dbOverrides[art];
  const fields = {d: desc, l: len, g: gew, cat: huidigOv?.cat ?? origineel.cat ?? null, klasse: huidigOv?.klasse ?? origineel.klasse ?? null, art_nieuw: (nieuwArt!==art ? nieuwArt : null), vervallen: huidigOv?.vervallen||false, pallet_len: huidigOv?.pallet_len ?? null, bron: 'bewerk'};
  const btn = document.querySelector('.db-save-btn[data-art="'+art.replace(/"/g,'')+'"]');
  if(btn){ btn.disabled = true; btn.textContent = 'Bezig…'; }
  try{
    await dbOvUpsert(art, fields);
    if(!window._dbOverrides) window._dbOverrides = {};
    window._dbOverrides[art] = fields;
  } catch(e){
    alert('Opslaan mislukt: '+e.message);
    if(btn){ btn.disabled = false; btn.textContent = 'Opslaan'; }
    return;
  }
  window._dbEditingArt = null;
  cdbRender();
}

async function dbOverrideHerstellen(art){
  if(!confirm('Artikel '+art+' terugzetten naar de oorspronkelijke waarden uit de vaste database?')) return;
  try{
    await dbOvDelete(art);
    if(window._dbOverrides) delete window._dbOverrides[art];
  } catch(e){
    alert('Herstellen mislukt: '+e.message);
    return;
  }
  cdbRender();
}

async function dbVervallenZetten(art){
  const displayArt = (window._dbOverrides && window._dbOverrides[art] && window._dbOverrides[art].art_nieuw) || art;
  if(!confirm('Artikel '+displayArt+' vervallen verklaren? Het verdwijnt dan uit de vaste database en kan later via het tabblad VERVALLEN worden teruggezet.')) return;
  const huidig = window._dbOverrides && window._dbOverrides[art];
  const origineel = DB[art] || {};
  const fields = huidig
    ? Object.assign({}, huidig, {vervallen: true})
    : {d: origineel.d, l: origineel.l, g: origineel.g, cat: origineel.cat||null, klasse: origineel.klasse||null, art_nieuw: null, vervallen: true, bron: 'bewerk'};
  try{
    await dbOvUpsert(art, fields);
    if(!window._dbOverrides) window._dbOverrides = {};
    window._dbOverrides[art] = fields;
  } catch(e){
    alert('Vervallen zetten mislukt: '+e.message);
    return;
  }
  cdbRender();
}

async function dbVervallenHerstellen(art){
  const huidig = window._dbOverrides && window._dbOverrides[art];
  if(!huidig) return;
  const fields = Object.assign({}, huidig, {vervallen: false});
  try{
    await dbOvUpsert(art, fields);
    window._dbOverrides[art] = fields;
  } catch(e){
    alert('Terugzetten mislukt: '+e.message);
    return;
  }
  cdbRender();
}

async function sbGet(){
  try{
    const r = await fetch(SB_URL+'/rest/v1/projects?order=datum.desc', {headers: SB_HDR});
    if(!r.ok) throw new Error(await r.text());
    const projects = await r.json();

    // Sortering: in_progress → not_started → completed, daarna projectnummer numeriek oplopend
    const statusOrder = {'in_progress':0,'not_started':1,'completed':2};
    projects.sort((a,b)=>{
      const sa = statusOrder[a.status||'not_started'] ?? 1;
      const sb = statusOrder[b.status||'not_started'] ?? 1;
      if(sa!==sb) return sa-sb;
      // Zelfde status: projectnummer numeriek oplopend
      const na = parseInt((a.proj_nr||'').replace(/\D/g,''))||0;
      const nb = parseInt((b.proj_nr||'').replace(/\D/g,''))||0;
      return na-nb;
    });

    return projects;
  } catch(e){ console.error('Supabase GET:', e); return []; }
}

async function sbUpsert(entry){
  try{
    const check = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(entry.proj_nr), {headers: SB_HDR});
    const existing = await check.json();
    if(existing && existing.length > 0){
      const r = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(entry.proj_nr), {
        method:'PATCH', headers: SB_HDR, body: JSON.stringify(entry)
      });
      if(!r.ok) throw new Error(await r.text());
    } else {
      const r = await fetch(SB_URL+'/rest/v1/projects', {
        method:'POST', headers: SB_HDR, body: JSON.stringify(entry)
      });
      if(!r.ok) throw new Error(await r.text());
    }
  } catch(e){
    console.error('Supabase UPSERT:', e);
    // Niet-blokkerende foutmelding — toon in de UI zonder alert()
    const errBanner = document.getElementById('db-save-error');
    if(errBanner){
      errBanner.textContent = 'Project opslaan mislukt: '+e.message+' (controleer internetverbinding)';
      errBanner.style.display = 'block';
      setTimeout(()=>{ errBanner.style.display='none'; }, 8000);
    } else {
      console.warn('Opslaan mislukt:', e.message);
    }
  }
}

async function sbDelete(projNr){
  try{
    const r = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(projNr), {
      method:'DELETE', headers: SB_HDR
    });
    if(!r.ok) throw new Error(await r.text());
  } catch(e){ console.error('Supabase DELETE:', e); alert('Verwijderen mislukt: '+e.message); }
}

async function saveCurrentProject(){
  if(!plan.length || !projNr) return;
  const entry = {
    proj_nr: projNr,
    klant: klant,
    datum: new Date().toISOString(),
    pallets: plan.length,
    total_kg: Math.round(plan.reduce((s,p)=>s+p.totalKg,0)),
    known: known.map(p=>({art:p.artOrig||p.art,artOrig:p.artOrig||p.art,desc:p.desc,l:p.l,gps:p.gps,qty:p.qty,gew:p.gew,loks:p.loks,palletVoorkeur:p.palletVoorkeur||undefined})),
    plan: plan.map(p=>({nm:p.nm,pType:p.pType,t:p.t,x:p.x,kg:p.kg,art:p.art,lbl:p.lbl,sid:p.sid,spos:p.spos,profW:p.profW,totalKg:p.totalKg,overloaded:p.overloaded,stackViolation:p.stackViolation,items:p.items})),
    checked_items: checkedItems,
    status: 'not_started'
  };
  await sbUpsert(entry);
  await koppelProjectAanContainer();
  try{ await renderDB(); } catch(e){ console.warn("DB:", e); }
}

async function deleteProject(projNrToDel, e){
  if(e) e.stopPropagation();
  if(!confirm('Project "'+projNrToDel+'" verwijderen?')) return;
  await sbDelete(projNrToDel);
  await renderDB();
}

function loadProject(entry){
  projNr = entry.proj_nr;
  klant  = entry.klant || '';
  // Normaliseer known: gebruik artOrig als art wanneer -H suffix aanwezig
  // (fix voor projecten opgeslagen vóór de -H database fix)
  known = (entry.known || []).map(item => {
    const origArt = item.artOrig || item.art;
    const match = dbLookup(origArt);
    if(match){
      // Altijd l, gps, desc bijwerken vanuit DB — ook als art key gelijk is
      // Zo worden artikelen met l=0 (opgeslagen vóór DB fix) correct hersteld
      return {...item, art: match.key, artOrig: origArt, desc: match.rec.d, l: match.rec.l, gps: match.rec.g, gew: (item.qty||0)*match.rec.g, palletVoorkeur: item.palletVoorkeur||undefined};
    }
    return item;
  });
  plan   = entry.plan  || [];
  checkedItems = entry.checked_items || {};
  psi66222Mode = null; // reset PSI-keuze bij nieuw project laden

  document.getElementById('inp-proj').value = projNr;
  document.getElementById('inp-klant').value = klant;

  const d=document.getElementById('proj-display');
  d.textContent=projNr+(klant?' | '+klant:'');
  d.style.display='block';

  // Bewerkpaneel sluiten bij laden project
  const bp=document.getElementById('bewerk-panel');
  if(bp) bp.style.display='none';
  const btnb=document.getElementById('btn-bewerk');
  if(btnb) btnb.style.display='';

  setStep(3);
  ['sec-upload','sec-review'].forEach(id=>document.getElementById(id).classList.add('hidden'));
  document.getElementById('sec-results').classList.remove('hidden');
  document.getElementById('download-bar').classList.remove('hidden');
  document.getElementById('dl-proj-label').textContent=projNr;

  // FIX: gebruik de opgeslagen indeling als die er is — NIET altijd herberekenen.
  // Herberekenen overschreef hier voorheen elke keer de opgeslagen pallet-indeling
  // (inclusief handmatige drag-and-drop wijzigingen) met een verse, soms afwijkende
  // berekening, omdat psi66222Mode en de marge-instelling niet bewaard worden en dus
  // bij elke herberekening op hun defaults terugvallen. Alleen projecten zonder
  // opgeslagen plan (legacy, van vóór deze fix) worden nog automatisch herberekend.
  if(plan.length){
    showResults();
    return;
  }

  const _kpLoad = getKlantProfiel(klant, projNr);
  const _art6Load = _kpLoad?.regels?.artikel_nm6;
  const hasNm6Load = _art6Load && known.some(p=>{
    const a=(p.art||'').toUpperCase(), b=_art6Load.toUpperCase();
    return a===b || a===b+'-H' || (p.artOrig||'').toUpperCase()===b;
  });

  if(_kpLoad && hasNm6Load){
    // PSI order: zet psi66222Mode automatisch op true (standaard 160 stuks)
    // tenzij opgeslagen project een afwijkend aantal had
    if(psi66222Mode === null) psi66222Mode = true;
    plan = computePlan([...known], true, _kpLoad);
  } else {
    plan = computePlan([...known], false, _kpLoad);
  }
  showResults();
}

// Expliciete herberekening — alleen aanroepen op verzoek van de gebruiker (knop
// "Herberekenen"), nooit automatisch bij het laden van een project. Past de huidige
// artikeldatabase en NM-6 regels toe op het opgeslagen artikellijst (known[]).
// Waarschuwing: dit overschrijft de huidige indeling, inclusief handmatige
// drag-and-drop aanpassingen die nog niet (opnieuw) zijn opgeslagen.
function herberekenPlan(){
  if(!known.length){ return; }
  if(!confirm('Indeling opnieuw berekenen met de huidige artikeldatabase en NM-6 regels?\n\nHandmatige aanpassingen aan de huidige indeling gaan hierbij verloren.')) return;

  const _kpHb = getKlantProfiel(klant, projNr);
  const _art6Hb = _kpHb?.regels?.artikel_nm6;
  const hasNm6Hb = _art6Hb && known.some(p=>{
    const a=(p.art||'').toUpperCase(), b=_art6Hb.toUpperCase();
    return a===b || a===b+'-H' || (p.artOrig||'').toUpperCase()===b;
  });

  if(_kpHb && hasNm6Hb){
    if(psi66222Mode === null) psi66222Mode = true;
    plan = computePlan([...known], true, _kpHb);
  } else {
    plan = computePlan([...known], false, _kpHb);
  }
  showResults();
}

let _dbAllProjects = [];
let _dbFilter = 'all';

const STATUS_LABELS = {
  'not_started': 'Not started',
  'in_progress': 'In progress',
  'completed': 'Completed'
};

async function renderDB(){
  const body = document.getElementById('db-body');
  body.innerHTML='<div class="db-empty" style="color:var(--g500)">&#8635; Projecten laden...</div>';

  const projects = await sbGet();
  _dbAllProjects = projects;
  window._dbProjects = projects;

  const cnt = document.getElementById('db-count');
  if(cnt) cnt.textContent = projects.length+' project'+(projects.length!==1?'en':'');
  const ccnt = document.getElementById('container-count');
  if(ccnt) ccnt.textContent = _containers.length+' container'+(_containers.length!==1?'s':'');

  renderDBRows();
}

function filterDB(){ renderDBRows(); }

function setFilter(f){
  _dbFilter = f;
  ['all','not_started','in_progress','completed'].forEach(k=>{
    const btn = document.getElementById('filt-'+k);
    if(btn) btn.classList.toggle('active', k===f);
  });
  renderDBRows();
}

function renderDBRows(){
  const body = document.getElementById('db-body');
  if(!body) return;

  const q = (document.getElementById('db-search-inp')?.value||'').toLowerCase().trim();
  let projects = _dbAllProjects.filter(p=>{
    const matchFilter = _dbFilter==='all' || (p.status||'not_started')===_dbFilter;
    const matchSearch = !q || (p.proj_nr||'').toLowerCase().includes(q) || (p.klant||'').toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if(!projects.length){
    body.innerHTML = _dbAllProjects.length
      ? '<div class="db-empty">Geen projecten gevonden voor deze zoekopdracht.</div>'
      : '<div class="db-empty">Nog geen projecten opgeslagen. Laad uw eerste BROWSOM-bestand om te beginnen.</div>';
    return;
  }

  let html = '<div class="db-col-hdr"><span>Projectnummer</span><span>Klant</span><span>Datum</span><span>Status</span><span style="text-align:right">Pallets</span><span style="text-align:right">Totaal kg</span><span></span></div>';

  // Map filtered projects back to global index
  projects.forEach((p)=>{
    const globalIdx = window._dbProjects.indexOf(p);
    const d = new Date(p.datum);
    const dateStr = d.toLocaleDateString('nl-NL',{day:'2-digit',month:'2-digit',year:'numeric'});
    const timeStr = d.toLocaleTimeString('nl-NL',{hour:'2-digit',minute:'2-digit'});
    const status = p.status || 'not_started';
    const statusLabel = STATUS_LABELS[status] || status;
    html+='<div class="db-row" onclick="loadProject(window._dbProjects['+globalIdx+'])">'
      +'<div class="db-row-proj">'+esc(p.proj_nr)+'</div>'
      +'<div class="db-row-klant">'+esc(p.klant||'—')+'</div>'
      +'<div class="db-row-date">'+dateStr+'<br><span style="color:var(--g300)">'+timeStr+'</span></div>'
      +'<div><span class="status-badge status-'+status+'" onclick="event.stopPropagation();cycleStatus(window._dbProjects['+globalIdx+'])">'+statusLabel+'</span></div>'
      +'<div class="db-row-stats" style="text-align:right">'+p.pallets+'</div>'
      +'<div class="db-row-stats" style="text-align:right">'+(p.total_kg||0).toLocaleString('nl-NL')+' kg</div>'
      +'<div style="text-align:right"><button class="btn btn-sm" style="background:var(--red);color:#fff;padding:4px 10px;font-size:10px" onclick="event.stopPropagation();deleteProject(window._dbProjects['+globalIdx+'].proj_nr,event)" title="Verwijderen">&#10005;</button></div>'
      +'</div>';
  });

  body.innerHTML=html;
}

async function cycleStatus(p){
  const order = ['not_started','in_progress','completed'];
  const cur = p.status || 'not_started';
  const next = order[(order.indexOf(cur)+1) % order.length];
  p.status = next;
  // Sla op in Supabase
  try{
    const r = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(p.proj_nr), {
      method:'PATCH', headers: SB_HDR, body: JSON.stringify({status: next})
    });
    if(!r.ok) throw new Error(await r.text());
  } catch(e){ console.warn('Status opslaan mislukt:', e); alert('Status opslaan mislukt: '+e.message); return; }
  // Herlaad volledige lijst van Supabase zodat sortering klopt
  await renderDB();
}

async function showDB(){
  ['sec-review','sec-results'].forEach(id=>document.getElementById(id).classList.add('hidden'));
  document.getElementById('download-bar').classList.add('hidden');
  document.getElementById('sec-upload').classList.remove('hidden');
  document.getElementById('proj-display').style.display='none';
  known=[];unknwn=[];plan=[];projNr='';klant='';checkedItems={};
  document.getElementById('inp-proj').value='';
  document.getElementById('inp-klant').value='';
  document.getElementById('fileInput').value='';
  setStep(1);
  try{ await renderDB(); } catch(e){ console.warn("DB:", e); }
}

function showUpload(){}

// ═══ CHECKBOX AFVINKEN ═══
// checkedItems gedeclareerd in STATE sectie bovenaan

function toggleDone(itemId, palNm, totalItems){
  const cb = document.getElementById(itemId);
  const row = document.getElementById('row_'+itemId);
  if(!cb || !row) return;
  if(cb.checked){
    row.classList.add('done');
    checkedItems[itemId] = true;
  } else {
    row.classList.remove('done');
    delete checkedItems[itemId];
  }
  // Check of alle profielen van deze pallet afgevinkt zijn
  checkPalletComplete(palNm, totalItems);
  // Sla vinkjes op in Supabase (debounced)
  clearTimeout(window._checkSaveTimer);
  window._checkSaveTimer = setTimeout(saveCheckedItems, 800);
}

function checkPalletComplete(palNm, totalItems){
  const pc = document.getElementById('pc_'+palNm);
  if(!pc) return;
  let doneCount = 0;
  for(let i=0; i<totalItems; i++){
    const cb = document.getElementById('chk_'+palNm+'_'+i);
    if(cb && cb.checked) doneCount++;
  }
  if(doneCount === totalItems){
    pc.classList.add('pallet-done');
    // Verwijder eerdere done-elementen om duplicaten te voorkomen
    pc.querySelectorAll('.pallet-done-label,.pallet-expand-btn').forEach(el=>el.remove());
    // Haal gewichtstekst op uit de ph
    const weightEl = pc.querySelector('[style*="#69F0AE"],[style*="#FFD54F"],[style*="#FF5252"]');
    const weightTxt = weightEl ? weightEl.textContent.trim() : '';
    // Bouw compacte pb inhoud
    const pb = pc.querySelector('.pb');
    const palNmSafe = palNm.replace(/'/g,"\\'");
    pb.innerHTML =
      '<div class="pallet-done-label">&#10003; KLAAR &mdash; alle '+totalItems+' type'+(totalItems>1?'s':'')+' afgevinkt'
      +(weightTxt?' &nbsp;|&nbsp; <span style="color:var(--green);font-weight:700">'+weightTxt+'</span>':'')
      +'</div>'
      +'<button class="pallet-expand-btn" onclick="expandPallet(\''+palNmSafe+'\')">TOON</button>';
    pc._pbBackup = null; // reset backup
  } else {
    if(pc.classList.contains('pallet-done')){
      pc.classList.remove('pallet-done');
      // Herstel de originele pb inhoud
      if(pc._pbOriginal){
        const pb = pc.querySelector('.pb');
        pb.innerHTML = pc._pbOriginal;
        // Re-attach checkboxes state
        for(let i=0; i<totalItems; i++){
          const itemId = 'chk_'+palNm+'_'+i;
          const cb = document.getElementById(itemId);
          const row = document.getElementById('row_'+itemId);
          if(cb && checkedItems[itemId]){ cb.checked=true; if(row) row.classList.add('done'); }
        }
      }
    }
  }
}

function expandPallet(palNm){
  const pc = document.getElementById('pc_'+palNm);
  if(!pc || !pc.classList.contains('pallet-done')) return;

  const palDef = plan.find(p=>p.nm===palNm);
  const totalItems = palDef ? palDef.items.length : 0;

  // Herstel originele pb inhoud
  pc.classList.remove('pallet-done');
  if(pc._pbOriginal){
    const pb = pc.querySelector('.pb');
    if(pb) pb.innerHTML = pc._pbOriginal;
  }

  // Zet alle vinkjes van deze pallet terug op ongedaan
  for(let i=0; i<totalItems; i++){
    const itemId = 'chk_'+palNm+'_'+i;
    delete checkedItems[itemId];
    const cb = document.getElementById(itemId);
    const row = document.getElementById('row_'+itemId);
    if(cb){ cb.checked = false; }
    if(row){ row.classList.remove('done'); }
  }

  // Sla gewijzigde vinkjesstatus op
  clearTimeout(window._checkSaveTimer);
  window._checkSaveTimer = setTimeout(saveCheckedItems, 800);
}

async function saveCheckedItems(){
  if(!projNr) return;
  try{
    const r = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(projNr), {
      method:'PATCH',
      headers: SB_HDR,
      body: JSON.stringify({checked_items: checkedItems})
    });
    if(!r.ok) console.warn('Vinkjes opslaan mislukt:', await r.text());
  } catch(e){ console.warn('Vinkjes opslaan fout:', e); }

  // Auto-status: in_progress bij eerste vinkje, completed als alles afgevinkt
  try{
    const checkedCount = Object.keys(checkedItems).length;
    const totalItems = plan.reduce((s,p)=>s+p.items.length, 0);
    const proj = window._dbProjects && window._dbProjects.find(p=>p.proj_nr===projNr);
    const curStatus = proj ? (proj.status||'not_started') : 'not_started';
    let newStatus = null;
    if(checkedCount > 0 && checkedCount < totalItems && curStatus === 'not_started'){
      newStatus = 'in_progress';
    } else if(checkedCount > 0 && checkedCount >= totalItems && curStatus !== 'completed'){
      newStatus = 'completed';
    } else if(checkedCount > 0 && curStatus === 'not_started'){
      newStatus = 'in_progress';
    }
    if(newStatus){
      const rs = await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(projNr), {
        method:'PATCH',
        headers: SB_HDR,
        body: JSON.stringify({status: newStatus})
      });
      if(rs.ok && proj) proj.status = newStatus;
    }
  } catch(e){ console.warn('Auto-status fout:', e); }
}

function restoreCheckedItems(){
  // Herstel vinkjes na het laden van resultaten
  Object.keys(checkedItems).forEach(itemId=>{
    const cb = document.getElementById(itemId);
    const row = document.getElementById('row_'+itemId);
    if(cb && row){
      cb.checked = true;
      row.classList.add('done');
    }
  });
  // Sla originele pb HTML op en check dan of pallet klaar is
  if(plan && plan.length){
    plan.forEach(pal=>{
      const pc = document.getElementById('pc_'+pal.nm);
      if(pc && !pc._pbOriginal){
        const pb = pc.querySelector('.pb');
        if(pb) pc._pbOriginal = pb.innerHTML;
      }
      checkPalletComplete(pal.nm, pal.items.length);
    });
  }
}

// ═══ KLANTAFKORTINGEN ═══
const KLANT_AFKORTINGEN = {
  'polar specialized': 'PSI',
  'psi': 'PSI',
  'storage control': 'SCS',
  'senneca': 'SEN',
};
function getKlantAfkorting(naam){
  const l = (naam||'').toLowerCase();
  for(const [k,v] of Object.entries(KLANT_AFKORTINGEN)) if(l.includes(k)) return v;
  return (naam||'').replace(/[^a-zA-Z]/g,'').substring(0,3).toUpperCase()||'ONB';
}

// ═══ SUPABASE CONTAINERS ═══
async function sbGetContainers(){
  try{
    const r = await fetch(SB_URL+'/rest/v1/containers?order=verzenddatum.asc', {headers:SB_HDR});
    if(!r.ok) throw new Error(await r.text());
    return await r.json();
  }catch(e){console.error('Containers GET:',e);return[];}
}
async function sbSaveContainer(container){
  try{
    const check = await fetch(SB_URL+'/rest/v1/containers?naam=eq.'+encodeURIComponent(container.naam),{headers:SB_HDR});
    const existing = await check.json();
    if(existing&&existing.length>0){
      await fetch(SB_URL+'/rest/v1/containers?naam=eq.'+encodeURIComponent(container.naam),{method:'PATCH',headers:SB_HDR,body:JSON.stringify(container)});
      return existing[0].id;
    } else {
      const r = await fetch(SB_URL+'/rest/v1/containers',{method:'POST',headers:SB_HDR,body:JSON.stringify(container)});
      const d = await r.json();
      return Array.isArray(d)?d[0]?.id:d?.id;
    }
  }catch(e){console.error('Container SAVE:',e);return null;}
}
async function koppelProjectAanContainer(){
  if(!projNr||!klant) return;
  const afk = getKlantAfkorting(klant);
  const naam = projNr+' - '+afk;
  const _vdRaw = (document.getElementById('inp-verzenddatum')?.value||'').trim();
  let vd = null;
  if(_vdRaw){
    const _p=_vdRaw.split('/');
    if(_p.length===3&&_p[2].length===4) vd=_p[2]+'-'+_p[1].padStart(2,'0')+'-'+_p[0].padStart(2,'0');
  }
  const lw = parseInt(document.getElementById('inp-looptijd')?.value)||0;
  const id = await sbSaveContainer({naam,klant,afkorting:afk,verzenddatum:vd||null,status:'actief',looptijd_weken:lw||null,afrond_datum:null});
  if(id){
    try{
      await fetch(SB_URL+'/rest/v1/projects?proj_nr=eq.'+encodeURIComponent(projNr),{
        method:'PATCH',headers:SB_HDR,
        body:JSON.stringify({container_id:id,container_naam:naam,verzenddatum:vd||null})
      });
    }catch(e){console.error('Container koppeling:',e);}
  }
}

// ═══ KALENDER PLANNING ═══
let planYear=new Date().getFullYear(), planMonth=new Date().getMonth(), planView='maand';
let _containers=[];
const MND=['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];
const DGN=['Ma','Di','Wo','Do','Vr','Za','Zo'];

const CONTAINER_COLORS=[
  {pak:'#BBDEFB',pakBorder:'#1565C0',pakTxt:'#0D47A1',oranje:'#FFE0B2',oranjeBorder:'#E65100',oranjeTxt:'#BF360C',verzend:'#C8E6C9',verzendBorder:'#2E7D32',verzendTxt:'#1B5E20'},
  {pak:'#FFF9C4',pakBorder:'#F9A825',pakTxt:'#6D4C00',oranje:'#FFE0B2',oranjeBorder:'#E65100',oranjeTxt:'#BF360C',verzend:'#C8E6C9',verzendBorder:'#2E7D32',verzendTxt:'#1B5E20'},
];
function containerColor(i){return CONTAINER_COLORS[i%CONTAINER_COLORS.length];}
function addWerkdagen(dt,weken){
  const d=new Date(dt);
  let r=weken*5;
  while(r>0){d.setDate(d.getDate()-1);const w=d.getDay();if(w!==0&&w!==6)r--;}
  // Afronden naar eerstvolgende maandag (vooruit)
  while(d.getDay()!==1){d.setDate(d.getDate()+1);}
  return d;
}
function isWerkdag(d){const w=d.getDay();return w!==0&&w!==6;}
function getWeekNr(d){const dt=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));const day=dt.getUTCDay()||7;dt.setUTCDate(dt.getUTCDate()+4-day);const ys=new Date(Date.UTC(dt.getUTCFullYear(),0,1));return Math.ceil((((dt-ys)/86400000)+1)/7);}
function dateBetween(c,s,e){return c>=s&&c<=e;}
function countWerkdagen(start,end){
  // Count werkdagen between two dates (inclusive)
  let count=0;
  const d=new Date(start);
  while(d<=end){
    const w=d.getDay();
    if(w!==0&&w!==6) count++;
    d.setDate(d.getDate()+1);
  }
  return count;
}
function calcProgress(c){
  // Returns 0-100% based on verstreken werkdagen
  if(!c.afrond_datum||!c.looptijd_weken) return 0;
  const today=new Date(); today.setHours(0,0,0,0);
  const ad=new Date(c.afrond_datum+'T00:00:00');
  const startPak=addWerkdagen(ad,c.looptijd_weken);
  if(today<startPak) return 0;
  if(today>=ad) return 100;
  const totalDagen=countWerkdagen(startPak,ad);
  const verstreken=countWerkdagen(startPak,today);
  return Math.min(100,Math.round((verstreken/totalDagen)*100));
}
async function initPlanning(){
  try{ _containers=await sbGetContainers(); }catch(e){ _containers=[]; }
  renderPlanning();
  renderContainerList();
}
function planNav(d){
  if(planView==='maand'){planMonth+=d;if(planMonth<0){planMonth=11;planYear--;}if(planMonth>11){planMonth=0;planYear++;}}
  else planYear+=d;
  renderPlanning();
}
function planGoToday(){const n=new Date();planYear=n.getFullYear();planMonth=n.getMonth();renderPlanning();}
function setPlanView(v){
  planView=v;
  document.getElementById('pvb-maand').classList.toggle('active',v==='maand');
  document.getElementById('pvb-jaar').classList.toggle('active',v==='jaar');
  renderPlanning();
}
function renderPlanning(){
  const lbl=document.getElementById('plan-month-label');
  if(!lbl) return;
  if(planView==='maand'){lbl.textContent=MND[planMonth]+' '+planYear;renderMaandKal();}
  else{lbl.textContent='Jaar '+planYear;renderJaarKal();}
}
function renderMaandKal(){
  const today=new Date();
  const first=new Date(planYear,planMonth,1);
  const last=new Date(planYear,planMonth+1,0);
  let dow=first.getDay();dow=dow===0?6:dow-1;
  let html='<div class="cal-grid">';
  html+='<div class="cal-wk-hdr">W</div>';
  DGN.forEach(d=>html+='<div class="cal-day-hdr">'+d+'</div>');
  let _pwk=-1;
  if(dow>0){const _fd=new Date(planYear,planMonth,1-dow);const _wk=getWeekNr(_fd);html+='<div class="cal-wk">'+_wk+'</div>';_pwk=_wk;}
  for(let i=0;i<dow;i++){const d=new Date(planYear,planMonth,1-dow+i);html+='<div class="cal-day other-month"><div class="cal-day-nr">'+d.getDate()+'</div></div>';}
  for(let d=1;d<=last.getDate();d++){
    const isT=today.getFullYear()===planYear&&today.getMonth()===planMonth&&today.getDate()===d;
    const ds=planYear+'-'+String(planMonth+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const _dd=new Date(planYear,planMonth,d);const _ddow=_dd.getDay()===0?6:_dd.getDay()-1;
    if(_ddow===0){const _wkn=getWeekNr(_dd);if(_wkn!==_pwk){html+='<div class="cal-wk">'+_wkn+'</div>';_pwk=_wkn;}}
    const cur=new Date(ds+'T00:00:00');
    html+='<div class="cal-day'+(isT?' today':'')+'"><div class="cal-day-nr">'+(isT?'<span class="today-dot">'+d+'</span>':d)+'</div>';
    _containers.forEach((c,ci)=>{
      const col=containerColor(ci);
      const vd=c.verzenddatum?new Date(c.verzenddatum+'T00:00:00'):null;
      const ad=c.afrond_datum?new Date(c.afrond_datum+'T00:00:00'):null;
      const lw=c.looptijd_weken||0;
      const startPak=ad&&lw?addWerkdagen(ad,lw):null;

      // Is verzenddatum?
      if(vd && ds===c.verzenddatum){
        html+='<div class="cal-event verzonden" title="'+esc(c.naam)+' — Verzending" style="background:'+col.verzend+';border-color:'+col.verzendBorder+';color:'+col.verzendTxt+';font-weight:700">&#9658; '+esc(c.naam)+'</div>';
        return;
      }
      // Is tussen afrond en verzend? (oranje, alleen werkdagen)
      if(ad && vd && cur>ad && cur<vd && isWerkdag(cur)){
        html+='<div class="cal-event" title="'+esc(c.naam)+' — wacht op verzending" style="background:'+col.oranje+';border-color:'+col.oranjeBorder+';color:'+col.oranjeTxt+';opacity:.85">&#8674; '+esc(c.naam)+'</div>';
        return;
      }
      // Is inpakperiode? (containerkleur: startPak t/m afrond, alleen werkdagen)
      if(startPak && ad && cur>=startPak && cur<=ad && isWerkdag(cur)){
        const isAfrond=ds===c.afrond_datum;
        html+='<div class="cal-event" title="'+esc(c.naam)+(isAfrond?' — Afronddag':' — Inpakken')+'" style="background:'+col.pak+';border-color:'+col.pakBorder+';color:'+col.pakTxt+';'+(isAfrond?'font-weight:700;border-left-width:4px':'')+'">'+(isAfrond?'&#10003; ':'')+esc(c.naam)+'</div>';
        return;
      }
    });
    html+='</div>';
  }
  const rem=(dow+last.getDate())%7;if(rem>0){for(let i=1;i<=7-rem;i++)html+='<div class="cal-day other-month"><div class="cal-day-nr">'+i+'</div></div>';}
  html+='</div>';
  document.getElementById('plan-cal').innerHTML=html;
}
function goToMonth(m){ planMonth=m; setPlanView('maand'); }
function renderJaarKal(){
  const today=new Date();
  let html='<div class="year-grid">';
  for(let m=0;m<12;m++){
    const first=new Date(planYear,m,1),last=new Date(planYear,m+1,0);
    let dow=first.getDay();dow=dow===0?6:dow-1;
    html+='<div class="year-month"><div class="year-month-hdr" onclick="goToMonth('+m+')">'+MND[m]+'</div><div class="year-mini-grid">';
    html+='<div style="background:var(--g700);color:#aaa;text-align:center;font-size:7px;padding:1px">W</div>';
    DGN.forEach(d=>html+='<div style="background:var(--g800);color:#fff;text-align:center;font-size:8px;padding:1px">'+d[0]+'</div>');
    let _yrPwk=-1;
    if(dow>0){const _yrf=new Date(planYear,m,1-dow);const _yw0=getWeekNr(_yrf);html+='<div style="background:var(--g100);text-align:center;font-size:20px;color:var(--red);font-weight:600;line-height:28px">'+_yw0+'</div>';_yrPwk=_yw0;}
    for(let i=0;i<dow;i++)html+='<div class="year-mini-cell"></div>';
    for(let d=1;d<=last.getDate();d++){
      const ds=planYear+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const _yc=new Date(ds+'T00:00:00');
      const _yrd=new Date(planYear,m,d);const _yrdow=_yrd.getDay()===0?6:_yrd.getDay()-1;
      if(_yrdow===0){const _yrwk=getWeekNr(_yrd);if(_yrwk!==_yrPwk){html+='<div style="background:var(--g100);text-align:center;font-size:20px;color:var(--red);font-weight:600;line-height:28px">'+_yrwk+'</div>';_yrPwk=_yrwk;}}
      let _yearBg='',_yearColor='',_yearBorder='',_yearFound=false;
      _containers.forEach((c,ci)=>{
        if(_yearFound) return;
        const _cc2=containerColor(ci);
        const _vd2=c.verzenddatum?new Date(c.verzenddatum+'T00:00:00'):null;
        const _ad2=c.afrond_datum?new Date(c.afrond_datum+'T00:00:00'):null;
        const _lw2=c.looptijd_weken||0;
        const _sp2=_ad2&&_lw2?addWerkdagen(_ad2,_lw2):null;
        if(c.verzenddatum===ds){_yearBg=_cc2.verzend;_yearColor=_cc2.verzendTxt;_yearBorder=_cc2.verzendBorder;_yearFound=true;return;}
        if(_ad2&&_vd2&&_yc>_ad2&&_yc<_vd2&&isWerkdag(_yc)){_yearBg=_cc2.oranje;_yearColor=_cc2.oranjeTxt;_yearBorder=_cc2.oranjeBorder;_yearFound=true;return;}
        if(_sp2&&_ad2&&dateBetween(_yc,_sp2,_ad2)&&isWerkdag(_yc)){_yearBg=_cc2.pak;_yearColor=_cc2.pakTxt;_yearBorder=_cc2.pakBorder;_yearFound=true;return;}
      });
      const hasEv=_yearFound;
      const _containers_dummy=_containers.some(c=>{
        if(c.verzenddatum===ds) return true;
        const _vd=c.verzenddatum?new Date(c.verzenddatum+'T00:00:00'):null;
        const _ad=c.afrond_datum?new Date(c.afrond_datum+'T00:00:00'):null;
        const _lw=c.looptijd_weken||0;
        const _sp=_ad&&_lw?new Date(_ad.getTime()-_lw*7*24*3600*1000):null;
        if(_ad&&_vd&&_yc>_ad&&_yc<_vd) return true;
        if(_sp&&_ad&&_yc>=_sp&&_yc<=_ad) return true;
        return false;
      });
      const isT=today.getFullYear()===planYear&&today.getMonth()===m&&today.getDate()===d;
      html+='<div class="year-mini-cell'+(isT?' today-cell':hasEv?' has-event':'')+'" title="'+ds+'">'+d+'</div>';
    }
    html+='</div></div>';
  }
  html+='</div>';
  document.getElementById('plan-cal').innerHTML=html;
}
function renderContainerList(){
  const el=document.getElementById('container-list');if(!el)return;
  const ccnt=document.getElementById('container-count');
  if(ccnt) ccnt.textContent=_containers.length+' container'+(_containers.length!==1?'s':'');
  if(!_containers.length){el.innerHTML='<div style="color:var(--g500);font-size:13px;padding:1rem">Nog geen containers. Laad een BROWSOM-bestand om automatisch een container aan te maken.</div>';return;}
  const today=new Date();
  let html='';
  _containers.forEach(c=>{
    const isV=c.status==='verzonden';
    const isE=c.verzenddatum&&new Date(c.verzenddatum)<today&&!isV;
    const _vd=c.verzenddatum?new Date(c.verzenddatum+'T00:00:00'):null;
    const fmtDate=dt=>dt?String(dt.getDate()).padStart(2,'0')+'/'+String(dt.getMonth()+1).padStart(2,'0')+'/'+dt.getFullYear():'—';
    const datum=fmtDate(_vd);
    const _lw = c.looptijd_weken||0;
    // eindDatum = START van inpakperiode (afrond_datum - looptijd weken)
    let eindDatum = '';
    const _ad = c.afrond_datum ? new Date(c.afrond_datum+'T00:00:00') : null;
    if(_ad && _lw){
      const _start = new Date(_ad); _start.setDate(_start.getDate()-_lw*7);
      eindDatum = fmtDate(_start);
    }
    const _ci=_containers.indexOf(c);const _cc=containerColor(_ci);
    html+='<div class="container-card'+(isV?' verzonden':'')+'" style="border-left:6px solid '+_cc.pakBorder+';background:#fff">'
      +'<div><div class="cc-naam">'+esc(c.naam)+'</div><div class="cc-sub">'+esc(c.klant||'—')+'</div>'
      +(c.afrond_datum?'<div style="font-size:11px;color:var(--g500);margin-top:2px;font-weight:700">Week '+getWeekNumber(new Date(c.afrond_datum+'T00:00:00'))+': '+fmtDate(new Date(c.afrond_datum+'T00:00:00'))+(_lw?' — Looptijd: '+_lw+' wk':'')+(eindDatum?' (start: '+eindDatum+')':'')+'</div>':'')
      +(!c.afrond_datum&&_lw?'<div style="font-size:11px;color:var(--g500);margin-top:2px;font-weight:700">Looptijd: '+_lw+' weken</div>':'')
      +'<div class="cc-prog"><div class="cc-prog-fill" style="width:'+(isV?100:calcProgress(c))+'%;background:'+(isV?'var(--green)':calcProgress(c)===0?'var(--g300)':'var(--green)')+';transition:width .4s ease"></div></div></div>'
      +'<div style="text-align:right">'      +'<div class="cc-datum'+(isV?' verzonden':'')+'">'+(isV?'&#10003; Verzonden':isE?'<span style="color:var(--green);background:var(--green-lt);padding:1px 6px;border-radius:2px">Afgerond</span>':'&#128197; '+datum)+'</div>'      +'<div style="margin-top:8px;display:grid;grid-template-columns:auto auto auto auto auto auto auto;gap:5px;align-items:center;justify-content:flex-end">'      +'<span style="font-size:12px;color:var(--g500);font-family:var(--fc);letter-spacing:1px;white-space:nowrap">AFRONDDATUM:</span>'      +'<input type="text" value="'+fmtDate(c.afrond_datum?new Date(c.afrond_datum+'T00:00:00'):null)+'" data-id="'+c.id+'" placeholder="DD/MM/JJJJ" onchange="updateContainerAfrond(this.dataset.id,this.value,this)" style="font-size:13px;padding:2px 6px;border:1px solid var(--g300);width:96px">'      +'<span style="font-size:12px;color:var(--g500);font-family:var(--fc);letter-spacing:1px;white-space:nowrap">WEKEN:</span>'      +'<input type="number" value="'+(_lw||'')+'" min="1" max="52" data-id="'+c.id+'" placeholder="0" onchange="updateContainerLooptijd(this.dataset.id,this.value,this)" style="font-size:13px;padding:2px 6px;border:1px solid var(--g300);width:50px">'      +'<span style="font-size:12px;color:var(--g500);font-family:var(--fc);letter-spacing:1px;white-space:nowrap">VERZEND:</span>'      +'<input type="text" value="'+datum+'" data-id="'+c.id+'" placeholder="DD/MM/JJJJ" onchange="updateContainerDatumText(this.dataset.id,this.value,this)" style="font-size:13px;padding:2px 6px;border:1px solid var(--g300);width:96px">'      +'<button data-cid="'+c.id+'" data-naam="'+esc(c.naam)+'" onclick="deleteContainerConfirm(this.dataset.cid,this.dataset.naam)" style="padding:3px 8px;font-size:12px;background:transparent;border:1px solid var(--g300);cursor:pointer;color:var(--red)">&#10005;</button>'      +'</div></div></div>';
  });
  el.innerHTML=html;
}
// ── Container veld opslaan met debounce + feedback ──
const _cSaveTimers = {};
function _containerSaveFeedback(el, ok){
  if(!el) return;
  el.style.borderColor = ok ? 'var(--green)' : 'var(--red)';
  el.title = ok ? '✅ Opgeslagen' : '❌ Ongeldige datum';
  clearTimeout(el._fbTimer);
  el._fbTimer = setTimeout(() => { el.style.borderColor = 'var(--g300)'; el.title = ''; }, 2000);
}
function _debounceContainerSave(id, fn, delay){
  clearTimeout(_cSaveTimers[id]);
  _cSaveTimers[id] = setTimeout(fn, delay || 800);
}

async function updateContainerAfrond(id, tekst, el){
  const parts = tekst.trim().split('/');
  if(parts.length!==3||parts[2].length!==4){ _containerSaveFeedback(el, false); return; }
  const isoDate = parts[2]+'-'+parts[1].padStart(2,'0')+'-'+parts[0].padStart(2,'0');
  try{
    const r = await fetch(SB_URL+'/rest/v1/containers?id=eq.'+id,{method:'PATCH',headers:SB_HDR,body:JSON.stringify({afrond_datum:isoDate})});
    _containerSaveFeedback(el, r.ok);
  }catch(e){console.warn(e); _containerSaveFeedback(el, false);}
  _containers=await sbGetContainers();renderPlanning();renderContainerList();
}
async function updateContainerLooptijd(id, weken, el){
  const lw = parseInt(weken)||null;
  try{
    const r = await fetch(SB_URL+'/rest/v1/containers?id=eq.'+id,{method:'PATCH',headers:SB_HDR,body:JSON.stringify({looptijd_weken:lw})});
    _containerSaveFeedback(el, r.ok);
  }catch(e){console.warn(e); _containerSaveFeedback(el, false);}
  _containers=await sbGetContainers();renderPlanning();renderContainerList();
}
async function updateContainerDatum(id, datum, el){
  try{
    const r = await fetch(SB_URL+'/rest/v1/containers?id=eq.'+id,{method:'PATCH',headers:SB_HDR,body:JSON.stringify({verzenddatum:datum||null})});
    _containerSaveFeedback(el, r.ok);
  }catch(e){console.warn(e); _containerSaveFeedback(el, false);}
  _containers=await sbGetContainers();renderPlanning();renderContainerList();
}
async function updateContainerDatumText(id, tekst, el){
  const parts = tekst.trim().split('/');
  if(parts.length!==3){ _containerSaveFeedback(el, false); return; }
  const dd=parts[0].padStart(2,'0'), mm=parts[1].padStart(2,'0'), yyyy=parts[2];
  if(yyyy.length!==4||isNaN(Number(dd))||isNaN(Number(mm))){ _containerSaveFeedback(el, false); return; }
  const isoDate = yyyy+'-'+mm+'-'+dd;
  await updateContainerDatum(id, isoDate, el);
}
async function deleteContainerConfirm(id,naam){
  if(!confirm('Container "'+naam+'" verwijderen?'))return;
  try{await fetch(SB_URL+'/rest/v1/containers?id=eq.'+id,{method:'DELETE',headers:SB_HDR});}catch(e){console.warn(e);}
  _containers=await sbGetContainers();renderPlanning();renderContainerList();
}

// ═══ TAB NAVIGATIE ═══
function renderRegels(){
  const el = document.getElementById('regels-content');
  if(!el) return;
  const kp = KLANT_PROFIELEN['psi'];
  const regels = kp.regels;
  const laagMap = regels.laaggrootte || {};

  // Bewerkbare waarden uit KLANT_PROFIELEN (live)
  const generiek = [
    {label:'Streefgewicht per pallet', key:'MAX_P_display', waarde:'1.000 kg (incl. 6% opheffing)', editable:false, toelichting:'Doel bij het vullen van elk pallet'},
    {label:'Marge boven streefgewicht', key:'MARGE', waarde: (window._margeOverride||25) + ' kg', editable:true, type:'number', live:'MARGE', toelichting:'Toegestaan mits stapel ≤ 3.000 kg; alleen als nodig'},
    {label:'Max. stapelgewicht', key:'MAX_S_display', waarde:'3.000 kg', editable:false, toelichting:'Hard maximum voor de totale stapel (3 pallets)'},
    {label:'Opheffingsfactor', key:'OHD_display', waarde:'1,06 (6%)', editable:false, toelichting:'Alle gewichten worden vermenigvuldigd met 1,06'},
    {label:'Lange pallets (7.350mm)', waarde:'Profielen langer dan 6.000mm', editable:false, toelichting:'NM-1 t/m NM-6'},
    {label:'Korte pallets (5.900mm)', waarde:'Profielen \u2264 6.000mm', editable:false, toelichting:'NM-7 t/m NM-12'},
    {label:'6.000mm profielen', waarde:'Altijd op korte pallets \u2014 harde eis', editable:false, toelichting:'Min. verlengingen van 5.900mm pallets'},
    {label:'Marge alleen indien nodig', waarde: regels.marge_alleen_indien_nodig ? 'Ja' : 'Nee', editable:false, toelichting:'Marge nooit gebruiken als artikel binnen streef past'},
  ];

  const palletRegels = [
    {nm:'NM-1', type:'Kruispallet 7350mm', klasse:'xpallet', regels:['Voorkeur: 72073-H, daarna aanvullen met 72065-H','NM-6 heeft voorrang op 72065-H']},
    {nm:'NM-2', type:'Pallet 7350mm', klasse:'long', regels:['Geen speciale plaatsingsregel \u2014 vrije verdeling']},
    {nm:'NM-3', type:'Pallet 7350mm', klasse:'long', regels:['Geen speciale plaatsingsregel \u2014 vrije verdeling']},
    {nm:'NM-4', type:'Kruispallet 7350mm', klasse:'xpallet', regels:['Voorkeur: 72073-H, daarna aanvullen met 72065-H','NM-6 heeft voorrang op 72065-H']},
    {nm:'NM-5', type:'Pallet 7350mm', klasse:'long', regels:['Geen speciale plaatsingsregel \u2014 vrije verdeling']},
    {nm:'NM-6', type:'Pallet 7350mm (Kliklijsten)', klasse:'nm6special', regels:[
      'Exact '+regels.artikel_nm6_std_qty+'\u00d7 artikel '+regels.artikel_nm6+' (kliklijst 6700mm) \u2014 harde eis',
      'Aanvullen met max. '+regels.artikel_nm6_aanvulling_qty+'\u00d7 artikel '+regels.artikel_nm6_aanvulling,
      'NM-6 heeft voorrang op 72065-H boven NM-1 en NM-4',
    ]},
    {nm:'NM-7',  type:'Kruispallet 5900mm', klasse:'xpallet', regels:['6.000mm profielen hebben voorrang (harde eis)']},
    {nm:'NM-8',  type:'Pallet 5900mm', klasse:'short', regels:['6.000mm profielen hebben voorrang']},
    {nm:'NM-9',  type:'Pallet 5900mm', klasse:'short', regels:['6.000mm profielen hebben voorrang']},
    {nm:'NM-10', type:'Kruispallet 5900mm', klasse:'xpallet', regels:['6.000mm profielen hebben voorrang']},
    {nm:'NM-11', type:'Pallet 5900mm', klasse:'short', regels:['6.000mm profielen hebben voorrang']},
    {nm:'NM-12', type:'Pallet 5900mm', klasse:'short', regels:['6.000mm profielen hebben voorrang']},
  ];

  const prioriteit = [
    'NM-6: exact '+regels.artikel_nm6_std_qty+'\u00d7 66222 (hoogste prioriteit)',
    'NM-6: max '+regels.artikel_nm6_aanvulling_qty+'\u00d7 72065-H (v\u00f3\u00f3r NM-1/NM-4)',
    'NM-1 / NM-4: voorkeur 72073-H, dan 72065-H',
    '6.000mm profielen op korte pallets (NM-7\u2013NM-12) \u2014 harde eis',
    'Laaglogica: volle lagen per artikel, restant naar volgend pallet',
    'Vrije verdeling: overige artikelen op basis van gewicht',
  ];

  let h = '';

  // Kop met bewerkknop
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem">'
    +  '<div style="display:flex;align-items:center;gap:12px">'
    +  '<div style="font-family:var(--fc);font-size:20px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--g900)">Verdelingsregels</div>'
    +  '<span style="font-size:11px;background:var(--red);color:#fff;padding:2px 8px;font-family:var(--fc);letter-spacing:1px">PSI</span>'
    +  '</div>'
    +  '<div style="display:flex;gap:8px">'
    +  '<button id="btn-regels-bewerk" class="btn btn-outline" onclick="regelBewerk(true)" style="font-size:12px">\u270f\ufe0f Bewerken</button>'
    +  '<button id="btn-regels-opslaan" class="btn btn-primary" onclick="regelOpslaan()" style="display:none;font-size:12px">&#10003; Opslaan</button>'
    +  '<button id="btn-regels-annuleer" class="btn btn-outline" onclick="regelBewerk(false)" style="display:none;font-size:12px">Annuleren</button>'
    +  '</div></div>';

  // Generieke regels
  h += '<div class="card" style="margin-bottom:1rem"><div class="card-title">Algemene gewichtsregels</div>'
    +  '<table class="sum-table" style="font-size:13px"><tbody>';
  generiek.forEach(r => {
    const valHtml = r.editable
      ? '<input id="regel_'+r.live+'" type="number" value="'+(window._margeOverride||25)+'" disabled style="width:70px;padding:3px 6px;border:1px solid var(--g300);font-family:var(--fn);font-size:13px;background:var(--g50)">'
      : '<span style="font-weight:700;color:var(--g900)">'+r.waarde+'</span>';
    h += '<tr>'
      +  '<td style="color:var(--g500);width:220px;padding:6px 0">'+r.label+'</td>'
      +  '<td style="padding:6px 8px">'+valHtml+'</td>'
      +  '<td style="color:var(--g400);font-size:11px;padding:6px 0">'+(r.toelichting||'')+'</td>'
      +  '</tr>';
  });
  h += '</tbody></table></div>';

  // Prioriteitvolgorde
  h += '<div class="card" style="margin-bottom:1rem"><div class="card-title">Prioriteitvolgorde bij verdeling</div>'
    +  '<ol style="margin:0;padding-left:20px;font-size:13px;line-height:2">';
  prioriteit.forEach(p => { h += '<li>'+p+'</li>'; });
  h += '</ol></div>';

  // NM-6 bewerkbare regels
  h += '<div class="card" style="margin-bottom:1rem"><div class="card-title">NM-6 specifieke regels</div>'
    +  '<table class="sum-table" style="font-size:13px"><tbody>'
    +  '<tr><td style="color:var(--g500);width:220px;padding:6px 0">Artikel op NM-6</td>'
    +  '<td style="font-weight:700;color:var(--g900);padding:6px 8px">'+regels.artikel_nm6+'</td><td></td></tr>'
    +  '<tr><td style="color:var(--g500);padding:6px 0">Standaard aantal 66222</td>'
    +  '<td style="padding:6px 8px"><input id="regel_nm6_qty" type="number" value="'+regels.artikel_nm6_std_qty+'" disabled style="width:70px;padding:3px 6px;border:1px solid var(--g300);font-family:var(--fn);font-size:13px;background:var(--g50)"></td>'
    +  '<td style="color:var(--g400);font-size:11px">Harde eis — exact dit aantal op NM-6</td></tr>'
    +  '<tr><td style="color:var(--g500);padding:6px 0">Max. 72065-H op NM-6</td>'
    +  '<td style="padding:6px 8px"><input id="regel_nm6_aanv_qty" type="number" value="'+regels.artikel_nm6_aanvulling_qty+'" disabled style="width:70px;padding:3px 6px;border:1px solid var(--g300);font-family:var(--fn);font-size:13px;background:var(--g50)"></td>'
    +  '<td style="color:var(--g400);font-size:11px">NM-6 heeft voorrang boven NM-1/NM-4</td></tr>'
    +  '</tbody></table></div>';

  // Laaglogica tabel — bewerkbaar
  h += '<div class="card" style="margin-bottom:1rem"><div class="card-title">Laaglogica per artikel</div>'
    +  '<p style="font-size:12px;color:var(--g500);margin-bottom:10px">Artikelen worden in volle lagen verdeeld. Aantal lagen per pallet bepaald door gewicht. Restant naar volgend pallet.</p>'
    +  '<div class="tw"><table id="laag-tabel"><thead><tr>'
    +  '<th>Artikelnummer</th><th class="r">Stuks per laag</th><th>Opmerking</th>'
    +  '</tr></thead><tbody>';
  Object.entries(laagMap).forEach(([art, laag]) => {
    h += '<tr>'
      +  '<td style="font-family:var(--fc);font-weight:600;color:var(--g800)">'+art+'</td>'
      +  '<td class="r"><input id="laag_'+art.replace(/[^a-zA-Z0-9]/g,'_')+'" type="number" value="'+laag+'" disabled style="width:60px;padding:3px 6px;border:1px solid var(--g300);font-family:var(--fn);font-size:13px;text-align:right;background:var(--g50)"></td>'
      +  '<td style="font-size:11px;color:var(--g500)">'+(art==='72356'||art==='72356-H'?'Aanvullen met kleine profielen toegestaan na volle lagen':'')+'</td>'
      +  '</tr>';
  });
  h += '</tbody></table></div></div>';

  // Pallet-specifieke regels
  h += '<div class="card" style="margin-bottom:1rem"><div class="card-title">Pallet-specifieke plaatsingsregels</div>'
    +  '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;margin-top:4px">';
  palletRegels.forEach(p => {
    const bc = p.klasse==='xpallet'?'var(--g600)':p.klasse==='nm6special'?'#6A1B9A':p.klasse==='long'?'var(--red)':'var(--gold)';
    const bg = p.klasse==='xpallet'?'var(--g700)':p.klasse==='nm6special'?'#6A1B9A':p.klasse==='long'?'var(--red)':'var(--gold)';
    h += '<div style="border:1px solid var(--g200);border-top:3px solid '+bc+';padding:12px 14px">'
      +  '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
      +  '<span style="font-family:var(--fc);font-weight:700;font-size:16px">'+p.nm+'</span>'
      +  '<span style="font-size:10px;background:'+bg+';color:#fff;padding:2px 7px;font-family:var(--fc)">'+p.type+'</span>'
      +  '</div><ul style="margin:0;padding-left:16px;font-size:12px;color:var(--g600);line-height:1.8">';
    p.regels.forEach(r => { h += '<li>'+r+'</li>'; });
    h += '</ul></div>';
  });
  h += '</div></div>';

  h += '<div class="card" style="border-top-color:var(--g300)">'
    +  '<div class="card-title" style="color:var(--g400)">Toekomstige klanten</div>'
    +  '<p style="font-size:12px;color:var(--g400)">SCS \u2014 regels nog niet geconfigureerd.</p></div>';

  el.innerHTML = h;
}

function regelBewerk(aan){
  const inputs = document.querySelectorAll('#regels-content input[type="number"]');
  inputs.forEach(inp => { inp.disabled = !aan; inp.style.background = aan ? '#fff' : 'var(--g50)'; });
  document.getElementById('btn-regels-bewerk').style.display   = aan ? 'none' : '';
  document.getElementById('btn-regels-opslaan').style.display  = aan ? '' : 'none';
  document.getElementById('btn-regels-annuleer').style.display = aan ? '' : 'none';
}

function regelOpslaan(){
  // Marge
  const mEl = document.getElementById('regel_MARGE');
  if(mEl){ const v = parseInt(mEl.value); if(v > 0) window.MARGE_OVERRIDE = v; }

  // NM-6 qty
  const nm6q = document.getElementById('regel_nm6_qty');
  if(nm6q){ const v = parseInt(nm6q.value); if(v > 0) KLANT_PROFIELEN['psi'].regels.artikel_nm6_std_qty = v; }
  const nm6a = document.getElementById('regel_nm6_aanv_qty');
  if(nm6a){ const v = parseInt(nm6a.value); if(v >= 0) KLANT_PROFIELEN['psi'].regels.artikel_nm6_aanvulling_qty = v; }

  // Laaggrootte
  const laagMap = KLANT_PROFIELEN['psi'].regels.laaggrootte;
  Object.keys(laagMap).forEach(art => {
    const id = 'laag_' + art.replace(/[^a-zA-Z0-9]/g,'_');
    const inp = document.getElementById(id);
    if(inp){ const v = parseInt(inp.value); if(v > 0) laagMap[art] = v; }
  });

  // Pas MARGE aan als override gezet
  if(window.MARGE_OVERRIDE) {
    // MARGE is const — sla op als window override zodat computePlan hem kan lezen
    window._margeOverride = window.MARGE_OVERRIDE;
  }

  regelBewerk(false);
  renderRegels(); // herrender met nieuwe waarden

  // Feedback
  const btn = document.getElementById('btn-regels-opslaan');
  if(btn){ const old = btn.textContent; btn.textContent = '✓ Opgeslagen'; setTimeout(()=>{ btn.textContent = old; },1500); }
}


function switchTab(tab){
  document.getElementById('tab-planning').classList.toggle('active',tab==='planning');
  document.getElementById('tab-pallet').classList.toggle('active',tab==='pallet');
  document.getElementById('tab-artikeldb').classList.toggle('active',tab==='artikeldb');
  document.getElementById('tab-regels').classList.toggle('active',tab==='regels');
  document.getElementById('sec-planning').classList.toggle('hidden',tab!=='planning');
  document.getElementById('sec-artikeldb').classList.toggle('hidden',tab!=='artikeldb');
  document.getElementById('sec-regels').classList.toggle('hidden',tab!=='regels');
  if(tab==='regels') renderRegels();
  if(tab==='artikeldb') cdbRender();
  const sb=document.getElementById('steps-bar');
  if(sb) sb.style.display=tab==='pallet'?'flex':'none';
  document.getElementById('sec-upload').classList.toggle('hidden',tab!=='pallet');
  if(tab==='planning'){
    ['sec-review','sec-results'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('hidden');});
    const db=document.getElementById('download-bar');if(db)db.classList.add('hidden');
    initPlanning();
  }
  if(tab==='regels'||tab==='artikeldb'||tab==='pallet'){
    ['sec-review','sec-results'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('hidden');});
    const db=document.getElementById('download-bar');if(db)db.classList.add('hidden');
  }
  if(tab==='pallet'){ setStep(1); renderDB(); }
}

// ═══ AFDRUKKEN ═══
function printPlan(){
  // Vul print-header in
  const totKg = Math.round(plan.reduce((s,p)=>s+p.totalKg,0));
  document.getElementById('print-proj-info').innerHTML =
    '<strong>Project:</strong> '+(projNr||'—')+'&nbsp;&nbsp;&nbsp;<strong>Klant:</strong> '+(klant||'—');
  document.getElementById('print-date').textContent =
    'Afdrukdatum: '+new Date().toLocaleDateString('nl-NL',{day:'2-digit',month:'2-digit',year:'numeric'});
  document.getElementById('print-stats').innerHTML =
    '<div><span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#888">Pallets</span><br><strong style="font-size:18px">'+plan.length+'</strong></div>'
    +'<div><span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#888">Totaal kg</span><br><strong style="font-size:18px">'+totKg.toLocaleString('nl-NL')+'</strong></div>'
    +'<div><span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#888">Stapels</span><br><strong style="font-size:18px">'+Object.keys(plan.reduce((a,p)=>{a[p.sid]=1;return a},{})).length+'</strong></div>'
    +'<div><span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#888">7350mm pallets</span><br><strong style="font-size:18px">'+plan.filter(p=>p.t==='long').length+'</strong></div>'
    +'<div><span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#888">5900mm pallets</span><br><strong style="font-size:18px">'+plan.filter(p=>p.t==='short').length+'</strong></div>';

  // Vul print-footer in
  document.getElementById('print-footer-proj').textContent =
    'Project: '+(projNr||'—')+'          Klant: '+(klant||'—');

  // Bereken aantal pagina's via bladhoogte
  const body = document.body;
  const pageH = 1122; // A4 pixels bij 96dpi
  const totalPages = Math.ceil(body.scrollHeight / pageH) || 1;
  document.getElementById('print-footer-page').textContent =
    'Pagina 1 van '+totalPages;

  // Zet alle geminimaliseerde pallets even open voor print
  document.querySelectorAll('.pc.pallet-done .pb').forEach(pb=>{
    pb.dataset.wasHidden = pb.style.display;
    pb.style.display='block';
  });
  window.print();
  // Herstel na print
  setTimeout(()=>{
    document.querySelectorAll('.pc.pallet-done .pb').forEach(pb=>{
      pb.style.display = pb.dataset.wasHidden||'';
    });
  }, 1000);
}

// ═══ HELPERS ═══
function setStep(n){['stp1','stp2','stp3'].forEach((id,i)=>{const el=document.getElementById(id);el.className='step';if(i+1<n)el.classList.add('done');else if(i+1===n)el.classList.add('active');});}
function showPalletOverzicht(){
  const overflowEl = document.getElementById('overflow-warning');
  const colsWrap   = document.getElementById('results-cols-wrap');
  if(overflowEl) overflowEl.style.display='none';
  if(colsWrap)   colsWrap.style.display='';
}
function goBack(){
  const colsWrap = document.getElementById('results-cols-wrap');
  const overflowEl = document.getElementById('overflow-warning');
  // Als palletoverzicht verborgen is (overflow-modus), toon het eerst
  if(colsWrap && colsWrap.style.display==='none'){
    showPalletOverzicht(); return;
  }
  // Anders: terug naar review
  document.getElementById('sec-results').classList.add('hidden');
  document.getElementById('sec-review').classList.remove('hidden');
  setStep(2);
}
function resetTool(){ showDB(); }
function getWeekNumber(d){var date=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()));date.setUTCDate(date.getUTCDate()+4-(date.getUTCDay()||7));var yearStart=new Date(Date.UTC(date.getUTCFullYear(),0,1));return Math.ceil((((date-yearStart)/86400000)+1)/7);}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

// ═══ BEWERKPANEEL ═══
function openBewerkPanel(){
  window._bewerkActief = true;
  window._planSnapshot = JSON.parse(JSON.stringify(plan)); // snapshot voor annuleren

  // Activeer bewerkmode op palletResults
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');

  // Toon bewerk-bar, verberg bewerk-knop
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btn = document.getElementById('btn-bewerk');
  if(btn) btn.style.display = 'none';

  // Activeer drag en qty inputs
  activeerBewerkmode();

  // Toon "pallet toevoegen" knop
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap) addWrap.style.display = 'flex';
}

function sluitBewerkPanel(){
  window._bewerkActief = false;

  // Herstel snapshot als annuleren
  if(window._planSnapshot){
    plan = window._planSnapshot;
    window._planSnapshot = null;
    showResults();
  }

  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.remove('zichtbaar');
  const btn = document.getElementById('btn-bewerk');
  if(btn) btn.style.display = '';

  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.remove('bewerk-actief');

  // Verberg "pallet toevoegen" knop en reset picker
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap){ addWrap.style.display = 'none'; }
  const picker = document.getElementById('add-pallet-picker');
  const collapsed = document.getElementById('add-pallet-collapsed');
  if(picker){ picker.style.display = 'none'; }
  if(collapsed){ collapsed.style.display = ''; }
}

function activeerBewerkmode(){
  // Zet draggable op alle pr-items, toon qty inputs
  const items = document.querySelectorAll('#palletResults .pr-item');
  items.forEach(el => {
    el.setAttribute('draggable', 'true');
    el.addEventListener('dragstart', onDragStart);
    el.addEventListener('dragover',  onDragOver);
    el.addEventListener('dragleave', onDragLeave);
    el.addEventListener('drop',      onDrop);
    el.addEventListener('dragend',   onDragEnd);
  });

  // Toon qty inputs, verberg qty display
  document.querySelectorAll('#palletResults .pr-qty-input').forEach(inp => {
    inp.style.display = 'inline-block';
  });
  document.querySelectorAll('#palletResults .pr-qty-display').forEach(sp => {
    sp.style.display = 'none';
  });

  // Toon loc inputs, verberg loc spans
  document.querySelectorAll('#palletResults .pr-loc-input').forEach(inp => {
    inp.style.display = 'inline-block';
  });
  document.querySelectorAll('#palletResults .pr-loc').forEach(sp => {
    sp.style.display = 'none';
  });

  // Voeg drop-targets toe op pallet-cards (pb divs)
  document.querySelectorAll('#palletResults .pb').forEach(pb => {
    pb.addEventListener('dragover', e => {
      if(window._palDragNm) return; // pallet-drag → niet afvangen in pb
      e.preventDefault(); pb.style.outline = '2px dashed var(--blue)';
    });
    pb.addEventListener('dragleave', e => { pb.style.outline = ''; });
    pb.addEventListener('drop', e => {
      pb.style.outline = '';
      if(window._palDragNm) return; // pallet-drag → niet afvangen in pb
      e.preventDefault();
      e.stopPropagation();
      const pc = pb.closest('.pc');
      if(!pc) return;
      const targetNm = pc.id.replace('pc_','');
      verplaatsItem(window._dragPalIdx, window._dragItemIdx, targetNm, null);
    });
  });

  // Maak .ph draggable voor pallet-verslepen
  document.querySelectorAll('#palletResults .ph').forEach(ph => {
    ph.setAttribute('draggable', 'true');
    ph.addEventListener('dragstart', onPalDragStart);
    ph.addEventListener('dragend',   onPalDragEnd);
  });
  document.querySelectorAll('#palletResults .pc').forEach(pc => {
    pc.addEventListener('dragover',  onPalDragOver);
    pc.addEventListener('dragleave', onPalDragLeave);
    pc.addEventListener('drop',      onPalDrop);
  });
}

// Drag state
let _dragEl = null;
function onDragStart(e){
  _dragEl = e.currentTarget;
  window._dragPalIdx  = parseInt(_dragEl.dataset.palindx);
  window._dragItemIdx = parseInt(_dragEl.dataset.itemidx);
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => _dragEl.classList.add('dragging'), 0);
}
function onDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  if(e.currentTarget !== _dragEl) e.currentTarget.classList.add('drag-over');
}
function onDragLeave(e){ e.currentTarget.classList.remove('drag-over'); }
function onDragEnd(e){
  if(_dragEl) _dragEl.classList.remove('dragging');
  document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
}
function onDrop(e){
  e.preventDefault();
  e.stopPropagation();
  const target = e.currentTarget;
  target.classList.remove('drag-over');
  if(!_dragEl || target === _dragEl) return;

  const toPalNm  = target.dataset.pallet;
  const toItemIdx = parseInt(target.dataset.itemidx);
  verplaatsItem(window._dragPalIdx, window._dragItemIdx, toPalNm, toItemIdx);
}

// ═══ PALLET DRAG-DROP ═══
let _palDragEl = null;
window._palDragNm = null;

function onPalDragStart(e){
  const pc = e.currentTarget.closest('.pc');
  if(!pc) return;
  _palDragEl = pc;
  window._palDragNm = pc.id.replace('pc_','');
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => pc.classList.add('pal-dragging'), 0);
}

function onPalDragEnd(e){
  if(_palDragEl) _palDragEl.classList.remove('pal-dragging');
  document.querySelectorAll('#palletResults .pc').forEach(el => {
    el.classList.remove('pal-drop-before','pal-drop-after');
  });
  _palDragEl = null;
  window._palDragNm = null;
}

function onPalDragOver(e){
  if(!window._palDragNm) return;  // geen pallet-drag bezig
  const pc = e.currentTarget;
  if(pc === _palDragEl) return;
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'move';
  // Toon indicator boven of onder afhankelijk van muispositie
  const rect = pc.getBoundingClientRect();
  const mid  = rect.top + rect.height / 2;
  pc.classList.toggle('pal-drop-before', e.clientY < mid);
  pc.classList.toggle('pal-drop-after',  e.clientY >= mid);
}

function onPalDragLeave(e){
  const pc = e.currentTarget;
  // Alleen resetten als muis echt buiten de pc gaat
  if(!pc.contains(e.relatedTarget)){
    pc.classList.remove('pal-drop-before','pal-drop-after');
  }
}

function onPalDrop(e){
  if(!window._palDragNm) return;
  e.preventDefault();
  e.stopPropagation();
  const targetPc = e.currentTarget;
  if(targetPc === _palDragEl) return;
  const targetNm     = targetPc.id.replace('pc_','');
  const insertBefore = targetPc.classList.contains('pal-drop-before');
  targetPc.classList.remove('pal-drop-before','pal-drop-after');
  verplaatsPallet(window._palDragNm, targetNm, insertBefore);
}

function verplaatsPallet(fromNm, toNm, insertBefore){
  const fromIdx = plan.findIndex(p => p.nm === fromNm);
  const toIdx   = plan.findIndex(p => p.nm === toNm);
  if(fromIdx === -1 || toIdx === -1 || fromIdx === toIdx) return;

  const fromPal = plan.splice(fromIdx, 1)[0];
  // toIdx kan verschoven zijn na splice
  const newToIdx = plan.findIndex(p => p.nm === toNm);

  // Verplaats naar doelstapel
  const toPal = plan[newToIdx];
  fromPal.sid = toPal.sid;
  fromPal.t   = toPal.t;

  // Invoegen voor of na doel
  const insertAt = insertBefore ? newToIdx : newToIdx + 1;
  plan.splice(insertAt, 0, fromPal);

  // Herbereken spos per stapel
  const sposCount = {};
  plan.forEach(p => {
    if(!sposCount[p.sid]) sposCount[p.sid] = 0;
    p.spos = ++sposCount[p.sid];
  });

  // Herbereken stackViolation
  plan.forEach(p => {
    const stackKg = plan.filter(x => x.sid === p.sid && x.used)
      .reduce((s,x) => s + (x.profW + x.kg) * OHD, 0);
    p.stackViolation = stackKg > MAX_S;
  });

  // Re-render bewerkmode behouden
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btnBewerk = document.getElementById('btn-bewerk');
  if(btnBewerk) btnBewerk.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap && window._bewerkActief) addWrap.style.display = 'flex';
}

function verplaatsItem(fromPalIdx, fromItemIdx, toNm, toItemIdx){
  const fromPal = plan[fromPalIdx];
  const toPal   = plan.find(p => p.nm === toNm);
  if(!fromPal || !toPal) return;
  if(fromPal === toPal && fromItemIdx === toItemIdx) return;

  // Verplaats item
  const item = fromPal.items.splice(fromItemIdx, 1)[0];
  if(!item) return;

  // Gewicht bijwerken op bronpallet
  fromPal.profW -= item.gew;
  if(!fromPal.items.length) fromPal.used = false;

  // Voeg toe aan doelpallet
  if(fromPal === toPal){
    // Volgorde binnen zelfde pallet
    const insertAt = toItemIdx !== null ? toItemIdx : toPal.items.length;
    toPal.items.splice(insertAt, 0, item);
  } else {
    // Check of artikel al op doelpallet staat — samenvoegen
    const bestaand = toPal.items.find(x => x.art === item.art);
    if(bestaand){
      bestaand.qty += item.qty;
      bestaand.gew += item.gew;
    } else {
      const insertAt = toItemIdx !== null ? toItemIdx : toPal.items.length;
      toPal.items.splice(insertAt, 0, item);
    }
    toPal.profW += item.gew;
    toPal.used = true;
  }

  // Herbereken totalKg voor alle pallets na gewichtswijziging
  plan.forEach(p => {
    p.totalKg = (p.profW + p.kg) * OHD;
    p.overloaded = p.totalKg > MAX_P;
  });

  // Herrender — bewerkmode actief houden
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  document.getElementById('btn-bewerk').style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap && window._bewerkActief) addWrap.style.display = 'flex';
}

function bewerkQtyChange(inp){
  const palIdx  = parseInt(inp.dataset.palindx);
  const itemIdx = parseInt(inp.dataset.itemidx);
  const qty = parseInt(inp.value) || 0;
  if(qty <= 0 || !plan[palIdx]) return;
  const item = plan[palIdx].items[itemIdx];
  if(!item) return;
  const oudeGew = item.gew;
  item.qty = qty;
  item.gew = qty * item.gps;
  plan[palIdx].profW += (item.gew - oudeGew);
  // Update display zonder volledige re-render
  const display = inp.nextElementSibling;
  if(display) display.textContent = qty + '×';

  // Herbereken gewicht/overschrijding voor dit pallet en stapelgenoten, live tonen
  const pal = plan[palIdx];
  plan.forEach(p => {
    if(p.sid !== pal.sid) return;
    p.totalKg = (p.profW + p.kg) * OHD;
    p.overloaded = p.totalKg > MAX_P;
  });
  plan.forEach(p => {
    if(p.sid !== pal.sid) return;
    const stackKg = plan.filter(x => x.sid===p.sid && x.used).reduce((s,x)=>(s+(x.profW+x.kg)*OHD),0);
    p.stackViolation = stackKg > MAX_S;
    const phw = document.getElementById('phw_'+plan.indexOf(p));
    if(phw) phw.innerHTML = phWeightHtml(p);
  });
}

function bewerkOpslaanInline(){
  // Lees eventuele openstaande qty-wijzigingen uit de inputs
  document.querySelectorAll('#palletResults .pr-qty-input').forEach(inp => {
    const palIdx  = parseInt(inp.dataset.palindx);
    const itemIdx = parseInt(inp.dataset.itemidx);
    const qty = parseInt(inp.value) || 0;
    if(qty > 0 && plan[palIdx] && plan[palIdx].items[itemIdx]){
      const item = plan[palIdx].items[itemIdx];
      const oudeGew = item.gew;
      item.qty = qty;
      item.gew = qty * item.gps;
      plan[palIdx].profW += (item.gew - oudeGew);
    }
  });

  // Lees locatie-wijzigingen uit de loc inputs
  document.querySelectorAll('#palletResults .pr-loc-input').forEach(inp => {
    const palIdx  = parseInt(inp.dataset.palindx);
    const itemIdx = parseInt(inp.dataset.itemidx);
    if(!plan[palIdx] || !plan[palIdx].items[itemIdx]) return;
    const val = inp.value.trim();
    plan[palIdx].items[itemIdx].loks = val ? val.split(',').map(s => s.trim()).filter(Boolean) : [];
  });

  // Herbereken totalKg en overloaded per pallet
  plan.forEach(p => {
    p.totalKg = (p.profW + p.kg) * OHD;
    p.overloaded = p.totalKg > MAX_P;
    const stackKg = plan.filter(x=>x.sid===p.sid&&x.used).reduce((s,x)=>(s+(x.profW+x.kg)*OHD),0);
    p.stackViolation = stackKg > MAX_S;
  });

  // Verwijder lege pallets
  plan = plan.filter(p => p.items.length > 0 || p.used);

  window._bewerkActief = false;
  window._planSnapshot = null;

  showResults();

  // Opslaan
  saveCurrentProject();

  const btn = document.getElementById('btn-bewerk');
  if(btn) btn.style.display = '';

  // Verberg "pallet toevoegen" knop en reset picker
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap){ addWrap.style.display = 'none'; }
  const picker = document.getElementById('add-pallet-picker');
  const collapsed = document.getElementById('add-pallet-collapsed');
  if(picker){ picker.style.display = 'none'; }
  if(collapsed){ collapsed.style.display = ''; }
}


// ═══ ARTIKEL VERWIJDEREN (bewerkmode) ═══
function verwijderArtikel(palIdx, itemIdx){
  const pal = plan[palIdx];
  if(!pal || !pal.items[itemIdx]) return;
  const item = pal.items.splice(itemIdx, 1)[0];
  pal.profW  -= item.gew;
  pal.totalKg = (pal.profW + pal.kg) * OHD;
  pal.overloaded = pal.totalKg > MAX_P;
  if(pal.items.length === 0) pal.used = true; // leeg maar bewaard
  plan.forEach(function(p){
    const stackKg = plan.filter(function(x){ return x.sid===p.sid && x.used; })
      .reduce(function(s,x){ return s+(x.profW+x.kg)*OHD; },0);
    p.stackViolation = stackKg > MAX_S;
  });
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btn = document.getElementById('btn-bewerk');
  if(btn) btn.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap && window._bewerkActief) addWrap.style.display = 'flex';
}

// ═══ PALLET VERWIJDEREN (bewerkmode) ═══
function verwijderPallet(nm){
  const idx = plan.findIndex(p => p.nm === nm);
  if(idx === -1) return;

  const pal = plan[idx];

  // Verplaats items van dit pallet terug naar _unplacedItems
  if(pal.items && pal.items.length > 0){
    if(!window._unplacedItems) window._unplacedItems = [];
    pal.items.forEach(function(item){
      const bestaand = window._unplacedItems.find(function(u){ return u.art === item.art; });
      if(bestaand){
        bestaand.qty += item.qty;
        bestaand.gew += item.gew;
      } else {
        window._unplacedItems.push({
          art:  item.art,
          desc: item.desc || '',
          qty:  item.qty,
          gps:  item.gps,
          gew:  item.gew,
          l:    item.l || null
        });
      }
    });
  }

  // Verwijder pallet uit plan
  plan.splice(idx, 1);

  // Herbereken stackViolation voor overgebleven pallets
  plan.forEach(function(p){
    const stackKg = plan.filter(function(x){ return x.sid === p.sid && x.used; })
      .reduce(function(s, x){ return s + (x.profW + x.kg) * OHD; }, 0);
    p.stackViolation = stackKg > MAX_S;
  });

  // Re-render en bewerkmode behouden
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btnBewerk = document.getElementById('btn-bewerk');
  if(btnBewerk) btnBewerk.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap && window._bewerkActief) addWrap.style.display = 'flex';
}

// ═══ ARTIKEL TOEVOEGEN AAN PALLET (bewerkmode) ═══
function openArtikelPicker(palIdx, nm){
  const picker = document.getElementById('apicker_' + nm);
  if(!picker) return;
  if(picker.classList.contains('open')){
    picker.classList.remove('open');
    picker.innerHTML = '';
    return;
  }
  picker.innerHTML =
    '<div class="pb-artikel-picker-hdr">'
    + '<span>Artikel toevoegen</span>'
    + '<button onclick="sluitArtikelPicker(\'' + nm + '\')">&#10005;</button>'
    + '</div>'
    + '<div class="pb-artikel-search">'
    + '<input id="asearch_' + nm + '" type="text" placeholder="Zoek op artikelnummer of omschrijving\u2026"'
    + ' oninput="filterArtikelPicker(' + palIdx + ',\'' + nm + '\',this.value)" autocomplete="off">'
    + '</div>'
    + '<div id="apresults_' + nm + '"></div>';
  picker.classList.add('open');
  filterArtikelPicker(palIdx, nm, '');
  setTimeout(function(){ var i=document.getElementById('asearch_'+nm); if(i) i.focus(); }, 60);
}

function sluitArtikelPicker(nm){
  const picker = document.getElementById('apicker_' + nm);
  if(picker){ picker.classList.remove('open'); picker.innerHTML = ''; }
}

function filterArtikelPicker(palIdx, nm, query){
  const resultsDiv = document.getElementById('apresults_' + nm);
  if(!resultsDiv) return;
  const q = query.trim().toLowerCase();
  if(!q){
    resultsDiv.innerHTML = '<div class="pb-artikel-picker-empty">Typ een artikelnummer of omschrijving om te zoeken.</div>';
    return;
  }
  // Zoek in DB + eigen DB
  const hits = [];
  allVastArtKeys().forEach(function(art){
    if(isVervallen(art)) return; // vervallen artikelen niet aanbieden voor nieuwe toevoegingen
    const entry = dbRecFor(art);
    const displayArt = (window._dbOverrides && window._dbOverrides[art] && window._dbOverrides[art].art_nieuw) || art;
    if(art.toLowerCase().includes(q) || displayArt.toLowerCase().includes(q) || (entry.d||'').toLowerCase().includes(q)){
      hits.push({art: displayArt, desc: entry.d||'', l: entry.l||null, gps: entry.g||0, eigen: false});
    }
  });
  const cdb = window._customDB || {};
  Object.keys(cdb).forEach(function(art){
    if(DB[art]) return; // al in vaste DB
    const entry = cdb[art];
    if(art.toLowerCase().includes(q) || (entry.d||'').toLowerCase().includes(q)){
      hits.push({art: art, desc: entry.d||'', l: entry.l||null, gps: entry.g||0, eigen: true});
    }
  });
  if(hits.length === 0){
    resultsDiv.innerHTML = '<div class="pb-artikel-picker-empty">Geen artikelen gevonden voor "'+esc(query)+'".</div>';
    return;
  }
  // Sorteer: exacte match eerst, dan op artikelnummer
  hits.sort(function(a,b){
    const aEx = a.art.toLowerCase()===q ? 0 : 1;
    const bEx = b.art.toLowerCase()===q ? 0 : 1;
    return aEx - bEx || a.art.localeCompare(b.art);
  });
  const shown = hits.slice(0, 25);
  var html = '';
  shown.forEach(function(h){
    var lTxt = h.l ? (h.l >= 1000 ? (h.l/1000).toFixed(3).replace('.',',')+'m' : h.l+'mm') : '';
    var eigenBadge = h.eigen ? '<span style=\"font-size:10px;font-family:var(--fc);letter-spacing:.5px;background:var(--red);color:#fff;padding:1px 5px;border-radius:3px;margin-left:6px\">EIGEN</span>' : '';
    html += '<div class=\"pb-artikel-picker-item pb-db-item\" onclick=\"selectArtikelUitDB('+palIdx+',\''+nm+'\',\''+h.art+'\','+h.eigen+')">'
      + '<span class=\"pb-artikel-picker-code\">'+esc(h.art)+eigenBadge+'</span>'
      + '<span class=\"pb-artikel-picker-desc\">'+esc(h.desc)+'</span>'
      + '<span class=\"pb-artikel-picker-qty\" style=\"color:var(--g500)\">'+lTxt+'&nbsp;&nbsp;'+h.gps.toFixed(3)+' kg/st</span>'
      + '</div>';
  });
    if(hits.length > 25) html += '<div class="pb-artikel-picker-cat" style="text-align:center">'+hits.length+' resultaten &mdash; verfijn de zoekopdracht</div>';
  resultsDiv.innerHTML = html;
}

function selectArtikelUitDB(palIdx, nm, artNr){
  const resultsDiv = document.getElementById('apresults_' + nm);
  if(!resultsDiv) return;
  const entry = dbRecFor(artNr);
  if(!entry) return;
  var lTxt = entry.l ? (entry.l >= 1000 ? (entry.l/1000).toFixed(3).replace('.',',')+'m' : entry.l+'mm') : '';
  resultsDiv.innerHTML =
    '<div class="pb-db-confirm">'
    + '<div class="pb-db-confirm-art">'
      + '<span class="pb-artikel-picker-code" style="font-size:16px">'+esc(artNr)+'</span>'
      + '<span class="pb-artikel-picker-desc" style="font-size:13px;color:var(--g700)">'+esc(entry.d||'')+'</span>'
    + '</div>'
    + '<div class="pb-db-confirm-meta">'+lTxt+(lTxt?'&nbsp;&middot;&nbsp;':'')+entry.g.toFixed(3)+' kg/st</div>'
    + '<div class="pb-db-confirm-row">'
      + '<label class="pb-db-confirm-label">Aantal stuks</label>'
      + '<div class="pb-db-confirm-inputs">'
        + '<input id="adbqty_'+nm+'" type="number" min="1" max="9999" value="1" class="pb-db-qty-input">'
        + '<button class="pb-db-confirm-btn" onclick="bevestigArtikelToevoegen('+palIdx+',\''+nm+'\',\''+artNr+'\')">'
          + '<span class="sn-add" style="font-size:14px">+</span>Toevoegen'
        + '</button>'
        + '<button class="pb-db-cancel-btn" onclick="filterArtikelPicker('+palIdx+',\''+nm+'\',document.getElementById(\'asearch_'+nm+'\').value)">&#8592; Terug</button>'
      + '</div>'
    + '</div>'
    + '</div>';
  var inp = document.getElementById('adbqty_' + nm);
  if(inp){ inp.focus(); inp.select();
    inp.addEventListener('keydown', function(e){ if(e.key==='Enter') bevestigArtikelToevoegen(palIdx, nm, artNr); });
  }
}

function bevestigArtikelToevoegen(palIdx, nm, artNr){
  const qtyInp = document.getElementById('adbqty_' + nm);
  const qty = qtyInp ? (parseInt(qtyInp.value) || 1) : 1;
  const entry = dbRecFor(artNr);
  if(!entry) return;
  const pal = plan[palIdx];
  if(!pal) return;
  const gew = qty * entry.g;
  const bestaand = pal.items.find(function(x){ return x.art === artNr; });
  if(bestaand){
    bestaand.qty += qty;
    bestaand.gew += gew;
  } else {
    pal.items.push({art: artNr, artOrig: artNr, desc: entry.d||'', qty: qty, gps: entry.g, gew: gew, l: entry.l||null, loks: []});
  }
  pal.profW  += gew;
  pal.totalKg = (pal.profW + pal.kg) * OHD;
  pal.overloaded = pal.totalKg > MAX_P;
  pal.used = true;
  plan.forEach(function(p){
    const stackKg = plan.filter(function(x){ return x.sid===p.sid && x.used; }).reduce(function(s,x){ return s+(x.profW+x.kg)*OHD; },0);
    p.stackViolation = stackKg > MAX_S;
  });
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btnBewerk = document.getElementById('btn-bewerk');
  if(btnBewerk) btnBewerk.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap && window._bewerkActief) addWrap.style.display = 'flex';
}

function voegArtikelToe(palIdx, nm, unplacedIdx){
  const unplaced = window._unplacedItems || [];
  if(unplacedIdx < 0 || unplacedIdx >= unplaced.length) return;
  const u = unplaced[unplacedIdx];
  const pal = plan[palIdx];
  if(!pal) return;
  const bestaand = pal.items.find(function(x){ return x.art === u.art; });
  if(bestaand){
    bestaand.qty += u.qty;
    bestaand.gew += u.gew;
  } else {
    pal.items.push({
      art: u.art, artOrig: u.art, desc: u.desc,
      qty: u.qty, gps: u.gps, gew: u.gew,
      l: u.l || null, loks: []
    });
  }
  pal.profW  += u.gew;
  pal.totalKg = (pal.profW + pal.kg) * OHD;
  pal.overloaded = pal.totalKg > MAX_P;
  pal.used   = true;
  window._unplacedItems.splice(unplacedIdx, 1);
  plan.forEach(function(p){
    const stackKg = plan.filter(function(x){ return x.sid===p.sid && x.used; })
      .reduce(function(s,x){ return s+(x.profW+x.kg)*OHD; }, 0);
    p.stackViolation = stackKg > MAX_S;
  });
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btnBewerk = document.getElementById('btn-bewerk');
  if(btnBewerk) btnBewerk.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap) addWrap.style.display = 'flex';
}

// ═══ PALLET TOEVOEGEN (bewerkmode) ═══
function toggleAddPalletPicker(){
  const collapsed = document.getElementById('add-pallet-collapsed');
  const picker    = document.getElementById('add-pallet-picker');
  if(!collapsed || !picker) return;
  const isOpen = picker.style.display !== 'none';
  collapsed.style.display = isOpen ? '' : 'none';
  picker.style.display    = isOpen ? 'none' : 'flex';
}

function voegPalletToe(type){
  // Sluit picker
  const collapsed = document.getElementById('add-pallet-collapsed');
  const picker    = document.getElementById('add-pallet-picker');
  if(picker)    picker.style.display    = 'none';
  if(collapsed) collapsed.style.display = '';

  // Volgend NM-nummer
  const maxNm = plan.reduce((m,p)=>{ const n=parseInt(p.nm.split('-')[1]); return n>m?n:m; }, 0);
  const nextNm = 'NM-' + (maxNm + 1);

  // Zoek een bestaande stapel van dit type met < 3 pallets
  const stapelsVanType = {};
  plan.forEach(p => {
    if(p.t === type){
      if(!stapelsVanType[p.sid]) stapelsVanType[p.sid] = [];
      stapelsVanType[p.sid].push(p);
    }
  });

  let targetSid  = null;
  let targetSpos = null;
  for(const [sid, pallets] of Object.entries(stapelsVanType)){
    if(pallets.length < 3){
      targetSid  = parseInt(sid);
      targetSpos = pallets.length + 1;
      break;
    }
  }

  // Geen ruimte in bestaande stapel — maak nieuwe stapel aan
  if(targetSid === null){
    const maxSid = plan.reduce((m,p)=>p.sid>m?p.sid:m, 0);
    targetSid  = maxSid + 1;
    targetSpos = 1;
  }

  const isLong  = type === 'long';
  const newPal  = {
    nm:             nextNm,
    lbl:            isLong ? 'Pallet 7350mm' : 'Pallet 5900mm',
    t:              type,
    x:              false,
    kg:             isLong ? 80 : 70,
    art:            isLong ? '11249' : '11248',
    pType:          isLong ? 'pallet7350' : 'pallet5900',
    sid:            targetSid,
    spos:           targetSpos,
    items:          [],
    profW:          0,
    totalKg:        isLong ? 80 * OHD : 70 * OHD,
    overloaded:     false,
    stackViolation: false,
    nm6Special:     false,
    nm6Label:       '',
    used:           true  // voorkomt verwijdering bij opslaan
  };
  plan.push(newPal);

  // Re-render en bewerkmode herstellen
  showResults();
  const pr = document.getElementById('palletResults');
  if(pr) pr.classList.add('bewerk-actief');
  const bar = document.getElementById('bewerk-bar');
  if(bar) bar.classList.add('zichtbaar');
  const btnBewerk = document.getElementById('btn-bewerk');
  if(btnBewerk) btnBewerk.style.display = 'none';
  activeerBewerkmode();
  const addWrap = document.getElementById('add-pallet-wrap');
  if(addWrap) addWrap.style.display = 'flex';
}










function loadProjectEnBewerk(entry){
  loadProject(entry);
  setTimeout(function(){ openBewerkPanel(); }, 150);
}

async 

// ═══════════════════════════════════════════════════
// EIGEN ARTIKELDATABASE (localStorage)
// ═══════════════════════════════════════════════════
const CDB_KEY = 'salco_custom_artikeldb';

function cdbLoad(){
  try{
    const raw = localStorage.getItem(CDB_KEY);
    window._customDB = raw ? JSON.parse(raw) : {};
  } catch(e){ window._customDB = {}; }
  cdbRender();
}

function cdbSave(){
  try{ localStorage.setItem(CDB_KEY, JSON.stringify(window._customDB||{})); } catch(e){ console.warn('CDB opslaan mislukt:', e); }
}

function cdbToevoegen(artIn, descIn, lenIn, gewIn, silent){
  const art = (artIn || document.getElementById('cdb-art').value||'').trim().toUpperCase().replace(/^0+(?=\d)/,'');
  const desc = (descIn || document.getElementById('cdb-desc').value||'').trim();
  const len = parseFloat(lenIn || document.getElementById('cdb-len').value)||0;
  const gew = parseFloat(gewIn || document.getElementById('cdb-gew').value)||0;
  const fb = document.getElementById('cdb-feedback');

  if(!art||art.length<3){ if(!silent&&fb){ fb.style.display='block'; fb.style.color='var(--red)'; fb.textContent='Vul een geldig artikelnummer in (min. 3 tekens).'; } return false; }
  if(len<=0){ if(!silent&&fb){ fb.style.display='block'; fb.style.color='var(--red)'; fb.textContent='Vul een geldige lengte in (> 0 mm).'; } return false; }
  if(gew<=0){ if(!silent&&fb){ fb.style.display='block'; fb.style.color='var(--red)'; fb.textContent='Vul een geldig gewicht in (> 0 kg).'; } return false; }

  if(!window._customDB) window._customDB = {};
  const isUpdate = !!window._customDB[art];
  window._customDB[art] = {d: desc||art, l: len, g: gew};
  cdbSave();

  if(!silent){
    // Reset invoervelden
    document.getElementById('cdb-art').value='';
    document.getElementById('cdb-desc').value='';
    document.getElementById('cdb-len').value='';
    document.getElementById('cdb-gew').value='';
    if(fb){ fb.style.display='block'; fb.style.color='var(--green)'; fb.textContent=(isUpdate?'Bijgewerkt: ':'Toegevoegd: ')+art+' — '+desc+' ('+len+'mm, '+gew+'kg/st)'; setTimeout(()=>{ fb.style.display='none'; },3000); }
  }
  cdbRender();
  return true;
}

function cdbVerwijderen(art){
  if(!window._customDB||!window._customDB[art]) return;
  if(!confirm('Artikel '+art+' verwijderen uit eigen database?')) return;
  delete window._customDB[art];
  cdbSave();
  cdbRender();
}

function cdbAllesVerwijderen(){
  if(!window._customDB||!Object.keys(window._customDB).length) return;
  if(!confirm('Weet u zeker dat u ALLE '+Object.keys(window._customDB).length+' eigen artikelen wilt verwijderen? Dit kan niet ongedaan worden gemaakt.')) return;
  window._customDB = {};
  cdbSave();
  cdbRender();
}


// Actieve dbtab: 'vast', 'eigen' of 'vervallen'
window._dbTab = 'vast';
function dbTabSwitch(tab){
  window._dbTab = tab;
  const bVast = document.getElementById('dbtab-vast');
  const bEigen = document.getElementById('dbtab-eigen');
  const bVervallen = document.getElementById('dbtab-vervallen');
  const btnWissen = document.getElementById('btn-alles-wissen');
  if(bVast){ bVast.style.background = tab==='vast'?'var(--red)':'#fff'; bVast.style.color = tab==='vast'?'#fff':'var(--g600)'; }
  if(bEigen){ bEigen.style.background = tab==='eigen'?'var(--red)':'#fff'; bEigen.style.color = tab==='eigen'?'#fff':'var(--g600)'; }
  if(bVervallen){ bVervallen.style.background = tab==='vervallen'?'var(--red)':'#fff'; bVervallen.style.color = tab==='vervallen'?'#fff':'var(--g600)'; }
  if(btnWissen) btnWissen.style.display = tab==='eigen'?'':'none';
  const zoek = document.getElementById('cdb-zoek'); if(zoek) zoek.value='';
  cdbRender();
}

function cdbRender(){
  const customDB = window._customDB||{};
  const customKeys = Object.keys(customDB);
  const cntEl = document.getElementById('cdb-count');
  if(cntEl) cntEl.textContent = customKeys.length;
  const vastCntEl = document.getElementById('db-vast-count');
  if(vastCntEl) vastCntEl.textContent = allVastArtKeys().filter(art=>!isVervallen(art)).length;
  const vervallenCntEl = document.getElementById('db-vervallen-count');
  if(vervallenCntEl) vervallenCntEl.textContent = allVastArtKeys().filter(isVervallen).length;

  const tbl = document.getElementById('cdb-tabel');
  if(!tbl) return;

  const zoekRaw = (document.getElementById('cdb-zoek')||{}).value||'';
  const zoek = zoekRaw.toLowerCase().trim();
  const tab = window._dbTab || 'vast';

  if(tab === 'vast'){
    let entries = allVastArtKeys().filter(art=>!isVervallen(art)).map(function(art){
      const rec = dbRecFor(art);
      const ov = window._dbOverrides && window._dbOverrides[art];
      const displayArt = (ov && ov.art_nieuw) || art;
      return [art, displayArt, rec];
    });
    if(zoek) entries = entries.filter(([art,displayArt,r])=> art.toLowerCase().includes(zoek) || displayArt.toLowerCase().includes(zoek) || (r.d||'').toLowerCase().includes(zoek));
    entries.sort((a,b)=> a[1].localeCompare(b[1]));
    if(!entries.length){
      tbl.innerHTML='<div style="color:var(--g500);font-size:13px;padding:1rem">Geen artikelen gevonden voor "'+esc(zoekRaw)+'".</div>';
      return;
    }
    let html='<table><thead><tr><th>Artikelnummer</th><th>Omschrijving</th><th class="r">Lengte mm</th><th class="r">Gew./st. kg</th><th>Pallet type</th><th></th></tr></thead><tbody>';
    entries.forEach(function([art,displayArt,r]){
      const editing = window._dbEditingArt === art;
      const pt = r.l>6000?'<span class="badge b-p7">7.350mm pallet</span>':'<span class="badge b-p5">5.900mm pallet</span>';
      if(editing){
        html+='<tr data-art="'+esc(art)+'" style="background:var(--g50)">'
          +'<td><input id="dbov-art" type="text" value="'+esc(displayArt)+'" style="width:110px;padding:4px 6px;border:1px solid var(--g300);font-size:12px;font-family:var(--fc);font-weight:600"></td>'
          +'<td><input id="dbov-desc" type="text" value="'+esc(r.d)+'" style="width:100%;padding:4px 6px;border:1px solid var(--g300);font-size:12px;font-family:var(--fn)"></td>'
          +'<td class="r"><input id="dbov-len" type="number" min="1" max="20000" value="'+r.l+'" style="width:90px;padding:4px 6px;border:1px solid var(--g300);font-size:12px;font-family:var(--fn);text-align:right"></td>'
          +'<td class="r"><input id="dbov-gew" type="number" min="0.001" step="0.001" value="'+r.g+'" style="width:90px;padding:4px 6px;border:1px solid var(--g300);font-size:12px;font-family:var(--fn);text-align:right"></td>'
          +'<td>'+pt+'</td>'
          +'<td style="text-align:right;white-space:nowrap">'
            +'<button class="db-save-btn" data-art="'+esc(art)+'" style="background:var(--red);border:none;cursor:pointer;color:#fff;padding:3px 9px;font-size:12px;border-radius:2px">Opslaan</button> '
            +'<button class="db-cancel-btn" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--g600);padding:3px 7px;font-size:12px;border-radius:2px">Annuleren</button>'
          +'</td>'
          +'</tr>';
        return;
      }
      const ovRec = window._dbOverrides && window._dbOverrides[art];
      // Handmatige bewerkingen tonen de AANGEPAST-badge + Herstel-knop; een Excel-import is een
      // stille vervanging van de brondata en toont hier bewust niets speciaals.
      const isBewerkt = !!(ovRec && ovRec.bron !== 'import');
      const isRenamed = !!(ovRec && ovRec.art_nieuw);
      const ovBadge = isBewerkt?' <span class="badge" style="background:var(--blue-lt);color:var(--blue)">AANGEPAST</span>':'';
      const renameHint = isRenamed?' <span style="font-size:10px;color:var(--g500);font-weight:400">(was '+esc(art)+')</span>':'';
      html+='<tr data-art="'+esc(art)+'">'
        +'<td style="font-family:var(--fc);font-weight:600;color:var(--g800)">'+esc(displayArt)+renameHint+ovBadge+'</td>'
        +'<td>'+esc(r.d)+'</td>'
        +'<td class="r">'+r.l.toLocaleString('nl-NL')+'</td>'
        +'<td class="r">'+r.g.toFixed(3)+'</td>'
        +'<td>'+pt+'</td>'
        +'<td style="text-align:right;white-space:nowrap">'
          +'<button class="db-edit-btn" data-art="'+esc(art)+'" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--g700);padding:3px 7px;font-size:12px;border-radius:2px">Bewerken</button> '
          +'<button class="db-vervallen-btn" data-art="'+esc(art)+'" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--red);padding:3px 7px;font-size:12px;border-radius:2px" title="Artikel vervallen verklaren">Vervallen</button>'
          +(isBewerkt?' <button class="db-reset-btn" data-art="'+esc(art)+'" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--red);padding:3px 7px;font-size:12px;border-radius:2px" title="Terugzetten naar oorspronkelijke waarden">Herstel</button>':'')
        +'</td>'
        +'</tr>';
    });
    html+='</tbody></table>';
    tbl.innerHTML=html;
    tbl.querySelectorAll('.db-edit-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbOverrideBewerken(this.dataset.art); });
    });
    tbl.querySelectorAll('.db-vervallen-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbVervallenZetten(this.dataset.art); });
    });
    tbl.querySelectorAll('.db-reset-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbOverrideHerstellen(this.dataset.art); });
    });
    tbl.querySelectorAll('.db-save-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbOverrideOpslaan(this.dataset.art); });
    });
    tbl.querySelectorAll('.db-cancel-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbOverrideAnnuleren(); });
    });
  } else if(tab === 'vervallen'){
    let entries = allVastArtKeys().filter(isVervallen).map(function(art){
      const rec = dbRecFor(art);
      const ov = window._dbOverrides[art];
      const displayArt = ov.art_nieuw || art;
      return [art, displayArt, rec];
    });
    if(zoek) entries = entries.filter(([art,displayArt,r])=> art.toLowerCase().includes(zoek) || displayArt.toLowerCase().includes(zoek) || (r.d||'').toLowerCase().includes(zoek));
    entries.sort((a,b)=> a[1].localeCompare(b[1]));
    if(!entries.length){
      tbl.innerHTML='<div style="color:var(--g500);font-size:13px;padding:1rem">'+(zoek?'Geen vervallen artikelen gevonden voor "'+esc(zoekRaw)+'".':'Nog geen vervallen artikelen.')+'</div>';
      return;
    }
    let html='<table><thead><tr><th>Artikelnummer</th><th>Omschrijving</th><th class="r">Lengte mm</th><th class="r">Gew./st. kg</th><th>Pallet type</th><th></th></tr></thead><tbody>';
    entries.forEach(function([art,displayArt,r]){
      const pt = r.l>6000?'<span class="badge b-p7">7.350mm pallet</span>':'<span class="badge b-p5">5.900mm pallet</span>';
      html+='<tr data-art="'+esc(art)+'" style="opacity:.7">'
        +'<td style="font-family:var(--fc);font-weight:600;color:var(--g800)">'+esc(displayArt)+'</td>'
        +'<td>'+esc(r.d)+'</td>'
        +'<td class="r">'+r.l.toLocaleString('nl-NL')+'</td>'
        +'<td class="r">'+r.g.toFixed(3)+'</td>'
        +'<td>'+pt+'</td>'
        +'<td style="text-align:right;white-space:nowrap"><button class="db-terugzetten-btn" data-art="'+esc(art)+'" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--g700);padding:3px 7px;font-size:12px;border-radius:2px">Terugzetten</button></td>'
        +'</tr>';
    });
    html+='</tbody></table>';
    tbl.innerHTML=html;
    tbl.querySelectorAll('.db-terugzetten-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ dbVervallenHerstellen(this.dataset.art); });
    });
  } else {
    let entries = Object.entries(customDB);
    if(zoek) entries = entries.filter(([art,r])=> art.toLowerCase().includes(zoek) || (r.d||'').toLowerCase().includes(zoek));
    entries.sort((a,b)=> a[0].localeCompare(b[0]));
    if(!entries.length && !zoek){
      tbl.innerHTML='<div style="color:var(--g500);font-size:13px;padding:1rem">Nog geen eigen artikelen. Voeg er één toe via het formulier hierboven, of importeer een Excel-bestand.</div>';
      return;
    }
    if(!entries.length){
      tbl.innerHTML='<div style="color:var(--g500);font-size:13px;padding:1rem">Geen eigen artikelen gevonden voor "'+esc(zoekRaw)+'".</div>';
      return;
    }
    let html='<table><thead><tr><th>Artikelnummer</th><th>Omschrijving</th><th class="r">Lengte mm</th><th class="r">Gew./st. kg</th><th>Pallet type</th><th></th></tr></thead><tbody>';
    entries.forEach(function([art,r]){
      const pt = r.l>6000?'<span class="badge b-p7">7.350mm pallet</span>':'<span class="badge b-p5">5.900mm pallet</span>';
      html+='<tr data-art="'+esc(art)+'">'
        +'<td style="font-family:var(--fc);font-weight:600;color:var(--blue)">'+esc(art)+'</td>'
        +'<td>'+esc(r.d)+'</td>'
        +'<td class="r">'+r.l.toLocaleString('nl-NL')+'</td>'
        +'<td class="r">'+r.g.toFixed(3)+'</td>'
        +'<td>'+pt+'</td>'
        +'<td style="text-align:right"><button class="cdb-del-btn" data-art="'+esc(art)+'" style="background:none;border:1px solid var(--g300);cursor:pointer;color:var(--red);padding:3px 7px;font-size:12px;border-radius:2px">&#10005;</button></td>'
        +'</tr>';
    });
    html+='</tbody></table>';
    tbl.innerHTML=html;
    // Event delegation for delete buttons
    tbl.querySelectorAll('.cdb-del-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ cdbVerwijderen(this.dataset.art); });
    });
  }
}

// Excel-import rechtstreeks naar de gedeelde database (Supabase db_overrides) — zichtbaar voor alle gebruikers
function dbOvImportExcel(input){
  const file = input.files[0];
  if(!file) return;
  const status = document.getElementById('dbov-import-status');
  if(status) status.textContent = 'Bestand inlezen…';

  const reader = new FileReader();
  reader.onload = async function(e){
    try{
      const wb = XLSX.read(e.target.result, {type:'array'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, {header:1, defval:''});
      if(rows.length<2){ if(status) status.textContent='Geen data gevonden in het bestand.'; return; }

      const hdrs = rows[0].map(c=>String(c||'').toLowerCase().trim());
      const colArt  = hdrs.findIndex(c=>c.includes('artikel')||c==='art'||c.includes('materi'));
      const colDesc = hdrs.findIndex(c=>c.includes('omschr')||c.includes('desc')||c==='naam');
      // 'Afmeting' (mm) moet winnen van 'Standaardafmeting' (m) — daarom eerst exacte match, dan pas losse 'lengte'-varianten
      const colLen  = (function(){
        let i = hdrs.findIndex(c=>c==='afmeting'||c==='lengte_mm'||c==='lengte'||c==='l_mm'||c==='l');
        if(i<0) i = hdrs.findIndex(c=>c.includes('lengte'));
        return i;
      })();
      // 'Gewicht per /st.' (per stuk) moet winnen van 'Gewicht per /m' (per meter)
      const colGew  = (function(){
        let i = hdrs.findIndex(c=>c==='gewicht_kg'||c==='kg');
        if(i<0) i = hdrs.findIndex(c=>(c.includes('gewicht')||c.includes('gew')) && (c.includes('/st')||c.includes(' st')||c.includes('stuk')));
        if(i<0) i = hdrs.findIndex(c=>c.includes('gewicht')||c.includes('gew')||c==='g');
        return i;
      })();
      const colCat    = hdrs.findIndex(c=>c.includes('categorie')||c==='cat');
      const colKlas   = hdrs.findIndex(c=>c.includes('klasse')||c.includes('class'));
      const colPallet = hdrs.findIndex(c=>c==='pallet');

      if(colArt<0||colLen<0||colGew<0){
        if(status) status.textContent='Kolommen niet gevonden. Verwacht: Artikelnummer/Materiaalnummer, Lengte_mm/Afmeting, Gewicht_kg/"Gewicht per /st." (en optioneel Omschrijving).';
        return;
      }

      const dataRows = rows.slice(1).filter(row=>{
        const first = String(row[colArt]||'').trim();
        return first && !first.startsWith('→') && !first.startsWith('->');
      });

      // Bouw op via een Map (niet direct een array) zodat dubbele artikelnummers in hetzelfde
      // bestand elkaar overschrijven (laatste rij wint) i.p.v. de gedeelde database te laten crashen
      // op een "ON CONFLICT" met hetzelfde artikelnummer twee keer in één opslag-actie.
      const bodyMap = new Map();
      let skipped=0, skippedRows=[];
      dataRows.forEach(row=>{
        const artRaw = String(row[colArt]||'').trim();
        if(!artRaw) return;
        const desc = colDesc>=0 ? String(row[colDesc]||'').trim() : artRaw;
        const lenRaw = String(row[colLen]||'').replace(',','.');
        const gewRaw = String(row[colGew]||'').replace(',','.');
        const len = parseFloat(lenRaw)||0;
        const gew = parseFloat(gewRaw)||0;
        if(len<=0||gew<=0){
          skipped++;
          skippedRows.push(artRaw+' (l='+row[colLen]+', g='+row[colGew]+')');
          return;
        }
        const art = normArt(artRaw);
        const huidigOv = window._dbOverrides && window._dbOverrides[art];
        const bestaand = huidigOv || DB[art];
        const catRaw    = colCat>=0    ? String(row[colCat]||'').trim().toLowerCase()  : '';
        const klasRaw   = colKlas>=0   ? String(row[colKlas]||'').trim().toLowerCase() : '';
        const palletRaw = colPallet>=0 ? String(row[colPallet]||'').replace(',','.').trim() : '';
        const cat    = (catRaw  && catRaw!=='nan')  ? catRaw  : (bestaand?.cat||null);
        const klasse = (klasRaw && klasRaw!=='nan') ? klasRaw : (bestaand?.klasse||null);
        const pallet_len = palletRaw ? (parseInt(palletRaw)||null) : (huidigOv?.pallet_len ?? null);
        // Een eerdere handmatige bewerking blijft zichtbaar als "aangepast", ook na een latere import;
        // anders is dit gewoon een stille vervanging vanuit Excel, zonder AANGEPAST-badge.
        const bron = (huidigOv?.bron === 'bewerk') ? 'bewerk' : 'import';
        bodyMap.set(art, {
          art: art, d: desc||art, l: len, g: gew, cat: cat, klasse: klasse, pallet_len: pallet_len,
          art_nieuw: huidigOv?.art_nieuw || null,
          vervallen: huidigOv?.vervallen || false,
          bron: bron,
        });
      });

      const bodies = Array.from(bodyMap.values());
      let added=0, updated=0;
      bodies.forEach(function(b){
        const bestondAlAf = (window._dbOverrides && window._dbOverrides[b.art]) || DB[b.art];
        if(bestondAlAf) updated++; else added++;
      });

      if(!bodies.length){
        if(status) status.textContent = 'Geen geldige rijen gevonden om te importeren.';
        return;
      }

      if(status) status.textContent = 'Bezig met opslaan naar de gedeelde database…';
      try{
        await dbOvUpsertBulk(bodies);
      } catch(err){
        if(status) status.textContent = 'Opslaan mislukt: '+err.message;
        return;
      }

      if(!window._dbOverrides) window._dbOverrides = {};
      bodies.forEach(function(b){
        window._dbOverrides[b.art] = {d: b.d, l: b.l, g: b.g, cat: b.cat||undefined, klasse: b.klasse||undefined, art_nieuw: b.art_nieuw||undefined, vervallen: b.vervallen, pallet_len: b.pallet_len||undefined, bron: b.bron};
      });
      cdbRender();
      input.value='';
      if(status){
        let msg = added+' toegevoegd, '+updated+' bijgewerkt (gedeeld voor alle gebruikers)';
        if(skipped) msg += ' — '+skipped+' overgeslagen (ongeldig): '+skippedRows.join(', ');
        msg += '.';
        status.textContent = msg;
      }
      setTimeout(()=>{ if(status) status.textContent=''; }, 8000);
    } catch(err){
      if(status) status.textContent='Fout bij inlezen: '+err.message;
    }
  };
  reader.readAsArrayBuffer(file);
}

// Export van de gedeelde database in exact hetzelfde formaat als "Profielen bestand.xlsx",
// zodat het bestand direct weer aangevuld en teruggeïmporteerd kan worden.
function dbOvExportExcel(){
  const arts = allVastArtKeys().filter(art=>!isVervallen(art));
  arts.sort(function(a,b){ return a.localeCompare(b, undefined, {numeric:true}); });

  const rows = [['Materiaalnummer','Omschrijving','Standaardafmeting','Afmeting','Eenheid','Gewicht per /m','Gewicht per /st.','Pallet']];
  arts.forEach(function(art){
    const rec = dbRecFor(art);
    if(!rec) return;
    const ov = window._dbOverrides && window._dbOverrides[art];
    const displayArt = (ov && ov.art_nieuw) || art;
    const artOut = /^\d+$/.test(displayArt) ? Number(displayArt) : displayArt;
    const standaardafmeting = rec.l ? +(rec.l/1000).toFixed(3) : '';
    const gewPerM = (rec.l && rec.g) ? +(rec.g/(rec.l/1000)).toFixed(3) : '';
    rows.push([artOut, rec.d||'', standaardafmeting, rec.l||'', 'm', gewPerM, rec.g||'', (ov && ov.pallet_len) || '']);
  });

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, 'Profielenbestand');
  XLSX.writeFile(wb, 'Profielen_database_export.xlsx');
}

// Vanuit de "onbekende artikelen" kaart direct naar DB toevoegen
function addUnknownToCustomDB(idx){
  const p = unknwn[idx];
  if(!p) return;
  // Zet het formulier op de artikel-DB tab in en switch
  switchTab('artikeldb');
  setTimeout(()=>{
    document.getElementById('cdb-art').value = p.artOrig;
    document.getElementById('cdb-desc').value = p.desc||'';
    document.getElementById('cdb-len').value = '';
    document.getElementById('cdb-gew').value = '';
    document.getElementById('cdb-art').focus();
    const fb = document.getElementById('cdb-feedback');
    if(fb){ fb.style.display='block'; fb.style.color='var(--blue)'; fb.textContent='Artikel '+p.artOrig+' ('+p.qty+'× in BROWSOM) is ingevuld. Vul lengte en gewicht in en klik TOEVOEGEN.'; }
  }, 100);
}

// Laad custom DB en gedeelde DB-aanpassingen bij opstarten
window.addEventListener('DOMContentLoaded', function(){ cdbLoad(); dbOvLoad(); }, {once:false});

