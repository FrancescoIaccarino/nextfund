→··import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

type Bando = {
    id: string
    titolo: string
    descrizione: string
    data_apertura: string | null
    data_chiusura: string | null
    stato: string
    forma_agevolazione: string
    regioni: string
    soggetto_concedente: string
    link_istituzionale: string
    aggiornato_il: string
}

function StatoBadge({ stato }: { stato: string }) {
    const colors: Record<string, string> = {
          aperto: 'bg-green-100 text-green-800',
          chiuso: 'bg-red-100 text-red-800',
          in_arrivo: 'bg-yellow-100 text-yellow-800',
    }
    const labels: Record<string, string> = {
          aperto: 'Aperto',
          chiuso: 'Chiuso',
          in_arrivo: 'In Arrivo',
    }
    const color = colors[stato] ?? 'bg-gray-100 text-gray-800'
   i mcpoonrstt  {l acbreela t=e Cllaibeenlts [}s tfartoom]  '?@?s usptaabtaos
     e / srueptaubrans e(-
                         j s ' 
      i<msppoarnt  cLliansks Nfarmoem= {'`nienxlti/nlei-nbkl'o
                                        cikm ppoxr-t2  Ppayg-e0H.e5a dreoru nfdreodm  t'e@x/tc-oxmsp ofnoenntt-ss/elmaiybooultd/ P$a{gceoHleoard}e`r}'>


                                           c o n s t  {sluapbaebla}s
  e U r l  <=/ sppraonc>e
  s s .)e
  n}v
.
  NeExXpTo_rPtU BdLeIfCa_uSlUtP AaBsAySnEc_ UfRuLn!c
tcioonns tB asnudpiaUbpadsaetKeedyP a=g ep(r)o c{e
s s .ceonnvs.tN EsXuTp_aPbUaBsLeI C=_ ScUrPeAaBtAeSCEl_iAeNnOtN(_sKuEpYa!b
  a
                                                 steyUprel ,B asnudpoa b=a s{e
                                                                             K e yi)d
                                                                             :
                                                                               s tcroinnsgt
                                                                             {  tdiattoal:o :b asntdrii,n ge
                                                                              r r odre s}c r=i zaiwoaniet:  ssutpraibnags
                                                                             e 
                                                   d a t a._farpoemr(t'ubraan:d is't)r
                                                                             i n g   |. sneullelc
                                                                             t ( 'd*a't)a
                                                                             _ c h i u.sourrdae:r (s'targignigo r|n antuol_li
                                                                             l ' ,s t{a taos:c esntdriinngg:
                                                                                 f aflosrem a}_)a
                                                 g e v o l.alziimointe(:1 0s0t)r
                                                 i
                                                 n g 
c o nrsetg iaopneir:t is t=r ibnagn
                                                 d i ?s.ofgiglettetro(_(cbo)n c=e>d ebn.tset:a tsot r=i=n=g 
' a pleirntko_'i)s t?i?t u[z]i
  o n acloen:s ts tirniAnrgr
                                                 i v oa g=g iboarnndait?o._fiill:t esrt(r(ibn)g 
                                                   =}>

  bf.usntcattioo n= =S=t a'tionB_aadrgrei(v{o 's)t a?t?o  [}]:
{  csotnastto :c hsitursiin g=  }b)a n{d
                                       i ? .cfoinlstte rc(o(lbo)r s=:>  Rbe.csotradt<os t=r=i=n g',c hsitursion'g)>  ?=?  {[
] 

                                                       arpeetrutron:  ('
                                                                               b g - g r<e>e
                                         n - 1 0 0   t<ePxatg-egHreeaedne-r8
0 0 ' , 
                                                 tcihtilues=o":B a'nbdgi- rAegdg-i1o0r0n atteix ti-nr eTde-m8p0o0 'R,e
                                         a l e " 
                                           i n _ a r r i v od:e s'cbrgi-pyteilolno=w"-D1a0t0i  tuefxfti-cyiealllio wa-g8g0i0o'r,n
                                       a t i} 
o g ncio nnsott tlea bdeal si:n cReenctoirvdi<.sgtorvi.nigt,  — sitlr ipnogr>t a=l e{ 
n a z i oanpaelret od:e l'lAep eargteov'o,l
  a z i o ncih ipuusbob:l i'cChhei.u"s
    o ' , 
             isnt_aatrsr=i{v[o
    :   ' I n   A r r i v{o 'l,a
                           b e l}:
  ' Bcaonndsit  Acpoelrotri '=,  cvoalloures:[ sSttartion]g (?a?p e'rbtgi-.glreanyg-t1h0)0  }t,e
    x t - g r a y - 8 0 0{' 
    l a bceoln:s t' Ilna bAerlr i=v ol'a,b evlasl[uset:a tSot]r i?n?g (sitnaAtror
                                                                       i v or.elteunrgnt h()
                         } , 
  < s p a n   c l]a}s
s N a m e = {/`>i
n
l i n e - b l<odcikv  pcxl-a2s spNya-m0e.=5" mraoxu-nwd-e7dx lt emxxt--axust of opnxt--4s epmyi-b1o2l"d> 
$ { c o l o r } `{}e>r
r o r   & &  {(l
               a b e l } 
         <</>dsipva nc>l
a s s)N
a}m
e
=e"xbpgo-rrte dd-e5f0a ublotr daesry nbco rfduenrc-trieodn- 2B0a0n drioUupnddaetde-dlPga gpe-(4)  m{b
  - 8  ctoenxstt- rseudp-a7b0a0s"e> 
  =   c r e a t e C l i e nEtr(rsourpea bnaesle Ucralr,i csaumpeanbtaos edKeeiy )b
a
n d ic.o nRsitp r{o vdaa ttar:a  bqaunadlic,h ee rmrionru t}o .=
    a w a i t   s u p a<b/adsiev
> 
        . f r o m ()'}b
a
n d i ' ) 
{ !.bsaenldeic t|(|' *b'a)n
 d i . l e.nogrtdhe r=(='=a g0g i?o r(n
                       a t o _ i l ' ,   {  <adsicve ncdliansgs:N afmael=s"et e}x)t
   - c e n t.elri mpiyt-(2140 0t)e
 x
 t - gcroanys-t5 0a0p"e>r
   t i   =   b a n d i ? . f<ipl tcelra(s(sbN)a m=e>= "bt.esxtta-txol  =f=o=n t'-ampeedrituom' )m b?-?2 "[>]N
 e s scuonn sbta nidnoA rdriisvpoo n=i bbialned ia?l. fmiolmteenrt(o(<b/)p >=
                                                                     >   b . s t a t o   = = =< p' icnl_aasrsrNiavmoe'=)" t?e?x t[-]s
                                                                   m " >cIoln sdta tcahbiaussei  v=i ebnaen daig?g.ifoirlntaetro( (obg)n i= >n obt.tset aatlol e= =2=: 0'0c<h/ipu>s
   o ' )   ? ?   [ ] 

< / drievt>u
 r n   ( 
           )< >:
     ( 
           < P a g e H e<a>d
             e r 
                              t i{talpee=r"tBia.nldein gAtghg i>o r0n a&t&i  (i
             n   T e m p o   R e a l e " 
             < s e c t i o n  dcelsacsrsiNpatmieo=n"=m"bD-a1t2i" >u
             f f i c i a l i   a g g i o r n a<thi2  ocglnais snNoatmtee= "dtae xitn-c2exnlt ifvoin.tg-obvo.lidt  t— eixlt -pgorratya-l9e0 0n amzbi-o6n afllee xd eiltleem sa-gceevnotlearz igoanpi- 3p"u>b
             b l i c h e . " 
                              s tBaatnsd=i{ [A
                                             p e r t i 
               {   l a b e l :   ' B a n d<is pAapne rctlia's,s Nvaamleu=e":b gS-tgrrienegn(-a1p0e0r ttie.xlte-nggrtehe)n -}8,0
             0   t e x t - s m   f{o nlta-bseelm:i b'oIlnd  Aprxr-i3v op'y,- 1v arlouuen:d eSdt-rfiunlgl("i>n
             A r r i v o . l e n g t h )   } , 
               { a p e r t]i}.
             l e n g t h }/
             > 
              
                          < d i v   c l a s s<N/asmpea=n">m
             a x - w - 7 x l   m x - a u t o  <p/xh-24> 
             p y - 1 2 " > 
               {<edrirvo rc l&a&s s(N
             a m e = " g r i d   g<rdiidv- ccollass-s1N ammde:=g"rbigd--rceodl-s5-02  blogr:dgerri db-ocrodlesr--3r egda-p2-060" >r
             o u n d e d - l g   p - 4   m b - 8  {taepxetr-trie.dm-a7p0(0("b>)
                                                                             = >   < B a n d o C a rEdr rkoerye= {nbe.li dc}a rbiacnadmoe=n{tbo}  d/e>i) }b
             a n d i .   R i p r o v a   t r a< /qduiavl>c
             h e   m i n u t o . 
                     < / s e c t i<o/nd>i
                     v > 
                                      ) })
                       }
                     
                      
                       { ! b a n d{ii n|A|r rbiavnod.il.elnegntght h>  =0= =& &0  (?
                       ( 
                                          < d<isve cctliaosns Ncalmaes=s"Ntaemxet=-"cmebn-t1e2r" >p
                     y - 2 4   t e x t - g r a y - 5 0<0h"2> 
                     c l a s s N a m e = " t e<xpt -c2lxals sfNoanmte-=b"otledx tt-exxlt -fgornaty--m9e0d0i ummb -m6b -f2l"e>xN eistseumns -bcaenndtoe rd igsappo-n3i"b>i
                     l e   a l   m o m e n t o < / p > 
                       I n   A r r i v o 
                         < p   c l a s s N a m e = " t e x<ts-psamn" >cIlla sdsaNtaambea=s"eb gv-iyeenlel oawg-g1i0o0r ntaetxot -oygenlil onwo-t8t0e0  atlelxet -2s:m0 0f<o/npt>-
                         s e m i b o l d   p x<-/3d ipvy>-
                         1   r o u n d e d)- f:u l(l
                         " > 
                                         < > 
                                           { i n{Aarpreirvtoi..lleennggtthh} 
                                         >   0   & &   ( 
                                                             < / s p a<ns>e
                                                             c t i o n   c l a s s N a m e = "<m/bh-21>2
                                                             " > 
                                                                                         < d i<vh 2c lcalsassNsaNmaem=e"=g"rtiedx tg-r2ixdl- cfoolnst--1b omldd: gtreixdt--cgorlasy--29 0l0g :mgbr-i6d -fcloelxs -i3t egmasp--c6e"n>t
                                                             e r   g a p - 3 " > 
                                                               { i n A r r i v o . mBaapn(d(ib )A p=e>r t<iB
                                                                                                           a n d o C a r d   k e y = { b . i d }< sbpaannd oc=l{abs}s N/a>m)e}=
                                                             " b g - g r e e n - 1 0 0   t e x<t/-dgirve>e
                                                             n - 8 0 0   t e x t - s m   f<o/nste-csteimoinb>o
                                                             l d   p x - 3   p y - 1  )r}o
                                                             u
                                                             n d e d - f u l l " > 
                                                               { c h i u s i . l e n g t h   >   0   &{&a p(e
                                                             r t i . l e n g t h } 
                                                                   < s e c t i o n   c l a s s N a<m/es=p"amnb>-
                                                             1 2 " > 
                                                                                     < / h 2 ><
             h 2   c l a s s N a m e = " t e x<td-i2vx lc lfaosnstN-abmoel=d" gtreixdt -ggrriady--c9o0l0s -m1b -m6d :fglreixd -ictoelmss--2c elngt:egrr igda-pc-o3l"s>-
             3   g a p - 6 " > 
                               B a n d i   C h i u{saip
                                 e r t i . m a p ( ( b )   = >   < B a<nsdpoaCna rcdl aksesyN=a{mbe.=i"db}g -bgarnadyo-=1{0b0}  t/e>x)t}-
             g r a y - 6 0 0   t e x t - s m  <f/odnitv->s
             e m i b o l d   p x - 3   p y<-/1s ercotuinodne>d
             - f u l l " > 
                       ) } 
              
               {{cihniAursrii.vloe.nlgetnhg}t
             h   >   0   & &   ( 
                             < / s p a n ><
             s e c t i o n   c l a s s N a m e<=/"hm2b>-
             1 2 " > 
                                     < d i v  <chl2a scslNaasmseN=a"mger=i"dt egxrti-d2-xclo lfso-n1t -mbdo:lgdr itde-xcto-lgsr-a2y -l9g0:0g rmibd--6c ofllse-x3  igtaepm-s6-"c>e
             n t e r   g a p - 3 " > 
               { c h i u s i . m a p ( (Ibn)  A=r>r i<vBoa
                                                       n d o C a r d   k e y = { b . i d }  <bsapnadno =c{lba}s s/N>a)m}e
             = " b g - y e l l o w - 1 0 0   t<e/xdti-vy>e
             l l o w - 8 0 0   t e x t - s<m/ sfeocntti-osne>m
             i b o l d   p x - 3   p y)-}1
               r o u n d e d - f u<l/l>"
             > 
                           ) } 
              
                              < d{iivn AcrlraisvsoN.almeen=g"tmht}-
             8   t e x t - c e n t e r   t e x t -<s/ms ptaenx>t
             - g r a y - 4 0 0 " > 
                       < / h 2 > 
                       D a t i   a g g i o r n a t i   o<gdniiv  ncoltatses Ndaam{e'= "'g}r
                       i d   g r i d - c o l<sa- 1h rmedf:=g"rhitdt-pcso:l/s/-w2w wl.gi:ngcreindt-icvoil.sg-o3v .giatp/-i6t"/>o
                       p e n - d a t a "   t a r g e t = " _{bilnaAnrkr"i vroe.lm=a"pn(o(obp)e n=e>r  <nBoarnedfoeCrarredr "k ecyl=a{sbs.Niadm}e =b"aunnddoe=r{lbi}n e/ >h)o}v
                       e r : t e x t - g r a y - 6 0 0 "<>/
                       d i v > 
                                       i n c e n t i<v/is.egcotvi.oint>
                       
                                           < / a)>}
                                           
                                            
                                             { '   '{}c· hLiiucsein.zlae nIgOtDhL  >v 20. 0&
                                           &   ( 
                                                     < / d i v > 
                                                           < s e c<t/idoinv >c
                                                     l a s s N<a/m>e
                                                     = " m)b
                                                     -}1
                                                     2
                                                     "f>u
                                                     n c t i o n   B a n d o C a r d (<{h 2b acnldaos s}N:a m{e =b"atnedxot:- 2Bxaln dfoo n}t)- b{o
                                                       l d  ctoenxstt- gfroarym-a9t0D0a tmeb -=6  (fdl:e xs tirtienmgs -|c ennutlelr)  g=a>p -{3
                                                         " > 
                                                         i f   ( ! d )   r e t u r n   n uBlaln
                                                     d i   C hrieutsuir
                                                     n   n e w   D a t e ( d ) . t o L o c<aslpeaDna tcelSatsrsiNnagm(e'=i"tb-gI-Tg'r,a y{- 1d0a0y :t e'x2t--dgirgaiyt-'6,0 0m otnetxht:- s'ms hfoorntt'-,s eymeiabro:l d' npuxm-e3r ipcy'- 1} )r
                                                     o u n}d
                                                     e
                                                     d - frueltlu"r>n
                                                       ( 
                                                              < d i v   c l a s s N a m e{=c"hbigu-swih.ilteen gbtohr}d
                                                     e r </></></thi2>
