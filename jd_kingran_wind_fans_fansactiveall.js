/*
粉丝福利红包
远程更新，看频道通知
cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#粉丝福利红包
1 1 1 1 * jd_fans_fansactiveall.js, tag=粉丝福利红包, enabled=true
 */

const $ = new Env('粉丝福利红包');
var version_='jsjiami.com.v7';const Ii1I1l=iii1II;(function(i1lliI,liI1l1,IllIlI,IiillI,ili11I,li11l,lliiIl){return i1lliI=i1lliI>>0x4,li11l='hs',lliiIl='hs',function(li11i,lliiIi,iiIi1I,IllIl1,ll1Ii){const llIIlI=iii1II;IllIl1='tfi',li11l=IllIl1+li11l,ll1Ii='up',lliiIl+=ll1Ii,li11l=iiIi1I(li11l),lliiIl=iiIi1I(lliiIl),iiIi1I=0x0;const ll1Il=li11i();while(!![]&&--IiillI+lliiIi){try{IllIl1=-parseInt(llIIlI(0x26f,'RmHQ'))/0x1+parseInt(llIIlI(0x266,'bh(O'))/0x2+parseInt(llIIlI(0x28a,'LD@L'))/0x3*(-parseInt(llIIlI(0x2bb,'wsa8'))/0x4)+-parseInt(llIIlI(0x1ed,'kV4a'))/0x5*(-parseInt(llIIlI(0x29a,'o7(U'))/0x6)+parseInt(llIIlI(0x2b2,'[Un2'))/0x7*(-parseInt(llIIlI(0x1f5,'c(&e'))/0x8)+-parseInt(llIIlI(0x292,'LD@L'))/0x9*(-parseInt(llIIlI(0x1ff,'iXl)'))/0xa)+-parseInt(llIIlI(0x299,'Bn0^'))/0xb*(-parseInt(llIIlI(0x20f,'^g3i'))/0xc);}catch(iiIi11){IllIl1=iiIi1I;}finally{ll1Ii=ll1Il[li11l]();if(i1lliI<=IiillI)iiIi1I?ili11I?IllIl1=ll1Ii:ili11I=ll1Ii:iiIi1I=ll1Ii;else{if(iiIi1I==ili11I['replace'](/[GbJqpeunThIVMUPtBX=]/g,'')){if(IllIl1===lliiIi){ll1Il['un'+li11l](ll1Ii);break;}ll1Il[lliiIl](ll1Ii);}}}}}(IllIlI,liI1l1,function(ill1II,i1llil,i1llii,l1i1I1,llIIil,llIIii,Ii1I1i){return i1llil='\x73\x70\x6c\x69\x74',ill1II=arguments[0x0],ill1II=ill1II[i1llil](''),i1llii='\x72\x65\x76\x65\x72\x73\x65',ill1II=ill1II[i1llii]('\x76'),l1i1I1='\x6a\x6f\x69\x6e',(0x130723,ill1II[l1i1I1](''));});}(0xbd0,0xb5f37,Iii11l,0xbf),Iii11l)&&(version_=Iii11l);const notify=$[Ii1I1l(0x2a5,'Bn0^')]()?require('./sendNotify'):'',jdCookieNode=$['isNode']()?require(Ii1I1l(0x1fa,'K(*Q')):'';CryptoJS=$[Ii1I1l(0x1fb,'Oioh')]()?require(Ii1I1l(0x214,'cPT#')):CryptoJS;const getToken=require(Ii1I1l(0x1e9,'^g3i'));let cookiesArr=[],cookie='';if($['isNode']()){Object[Ii1I1l(0x206,'fU91')](jdCookieNode)['forEach'](lI1IIi=>{const IIlIl=Ii1I1l;cookiesArr[IIlIl(0x298,'JKMV')](jdCookieNode[lI1IIi]);});if(process[Ii1I1l(0x2a9,'wsa8')]['JD_DEBUG']&&process[Ii1I1l(0x1df,'U7Pa')][Ii1I1l(0x2b8,'wttM')]===Ii1I1l(0x2c6,'vSDE'))console[Ii1I1l(0x1f9,'3w[a')]=()=>{};}else cookiesArr=[$[Ii1I1l(0x2ce,'^&d5')](Ii1I1l(0x242,'fU91')),$[Ii1I1l(0x2a1,'bh(O')](Ii1I1l(0x27f,'Mu#u')),...jsonParse($[Ii1I1l(0x2cc,'!MT!')](Ii1I1l(0x212,'Mu#u'))||'[]')[Ii1I1l(0x26c,'kV4a')](I1l11I=>I1l11I[Ii1I1l(0x227,'Vi89')])][Ii1I1l(0x21b,'bh(O')](Ilil1l=>!!Ilil1l);let time=Date[Ii1I1l(0x2ec,'K(*Q')](),allMessage='';!(async()=>{const ili11l=Ii1I1l,iIIiii={'btvnU':'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','KKuyF':ili11l(0x25d,'RB(u'),'uCSGc':ili11l(0x278,'c(&e'),'CrSIa':function(iilll,il1iI1,IlllIi){return iilll(il1iI1,IlllIi);},'pgjjH':function(iIIiil,i1l1Ii){return iIIiil===i1l1Ii;},'cOhpg':'ReDJM','tPrrH':function(I1iIIi,I1iIIl){return I1iIIi<I1iIIl;},'JJXVC':function(lI1IIl,i1ilI){return lI1IIl(i1ilI);},'UtcZo':function(iii1lI,i1ilI1){return iii1lI+i1ilI1;},'YqAcN':function(Iiilii,Iil1li){return Iiilii+Iil1li;},'TAzAf':'1111*\x0a'};if(!cookiesArr[0x0]){$['msg']($['name'],iIIiii[ili11l(0x2c0,'^&d5')],iIIiii[ili11l(0x2af,'0TqC')],{'open-url':ili11l(0x231,'SE80')});return;}authorCodeList=await getAuthorCodeList(iIIiii[ili11l(0x229,'(ImB')]),$['authorCode']=authorCodeList[iIIiii[ili11l(0x21e,'HgI9')](random,0x0,authorCodeList[ili11l(0x260,'K(*Q')])],$['activityId']=$[ili11l(0x25f,'SE80')];if(!$[ili11l(0x265,'0TqC')]){if(iIIiii[ili11l(0x22f,'o7(U')](ili11l(0x1e7,'Ss1('),iIIiii['cOhpg']))return IIIIIl[ili11l(0x26a,'S7rd')](I1lIil);else{console[ili11l(0x20c,'JKMV')](ili11l(0x263,'Bn0^'));return;}}for(let Iil1ll=0x0;iIIiii[ili11l(0x2ca,'Mu#u')](Iil1ll,cookiesArr['length']);Iil1ll++){if(cookiesArr[Iil1ll]){cookie=cookiesArr[Iil1ll],$[ili11l(0x275,'c(&e')]=iIIiii[ili11l(0x1f2,'rg2l')](decodeURIComponent,cookie[ili11l(0x270,'pA4i')](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[ili11l(0x2cb,'wttM')]=Iil1ll+0x1,$[ili11l(0x234,'kV4a')]=!![],$[ili11l(0x210,'cPT#')]='',message='',console['log'](iIIiii['UtcZo'](iIIiii['UtcZo'](iIIiii[ili11l(0x246,'TTFC')](iIIiii[ili11l(0x26b,'Mu#u')](ili11l(0x24a,'JKMV'),$[ili11l(0x2dc,'kV4a')]),'】'),$['nickName']||$[ili11l(0x2aa,'Bn0^')]),iIIiii[ili11l(0x257,'U7Pa')]));if(!$[ili11l(0x207,'niQY')]){$['msg']($[ili11l(0x2be,'#jD&')],ili11l(0x284,'TTFC'),'京东账号'+$[ili11l(0x258,'wsa8')]+'\x20'+($[ili11l(0x2ed,'K(*Q')]||$[ili11l(0x2e6,'[Un2')])+ili11l(0x21a,'iXl)'),{'open-url':ili11l(0x276,'pA4i')});$[ili11l(0x285,'0FO)')]()&&await notify[ili11l(0x219,'xXSb')]($[ili11l(0x241,'[Un2')]+'cookie已失效\x20-\x20'+$[ili11l(0x275,'c(&e')],'京东账号'+$[ili11l(0x2e2,'TTFC')]+'\x20'+$[ili11l(0x28d,'kV4a')]+ili11l(0x252,'#jD&'));continue;}await main(),await $[ili11l(0x1e6,'K(*Q')](0x7d0);}}if(allMessage){if($[ili11l(0x1f8,'kV4a')]())await notify['sendNotify'](''+$[ili11l(0x241,'[Un2')],''+allMessage);$[ili11l(0x283,'^g3i')]($['name'],'',allMessage);}})()[Ii1I1l(0x224,'0FO)')](iillI=>{const Iiilll=Ii1I1l;$[Iiilll(0x28b,'s7*N')]('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+iillI+'!','');})['finally'](()=>{const Iiilli=Ii1I1l;$[Iiilli(0x2e7,'K0ma')]();});function iii1II(_0x1da48d,_0x4e470b){const _0x2d5fce=Iii11l();return iii1II=function(_0x4b7804,_0x1358cd){_0x4b7804=_0x4b7804-0x1dc;let _0x10888f=_0x2d5fce[_0x4b7804];if(iii1II['PqDYmD']===undefined){var _0x189b8c=function(_0x2bad82){const _0x22c17e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x565aa3='',_0x492411='';for(let _0x4c3b8e=0x0,_0x414fa3,_0xb926b7,_0x246ab8=0x0;_0xb926b7=_0x2bad82['charAt'](_0x246ab8++);~_0xb926b7&&(_0x414fa3=_0x4c3b8e%0x4?_0x414fa3*0x40+_0xb926b7:_0xb926b7,_0x4c3b8e++%0x4)?_0x565aa3+=String['fromCharCode'](0xff&_0x414fa3>>(-0x2*_0x4c3b8e&0x6)):0x0){_0xb926b7=_0x22c17e['indexOf'](_0xb926b7);}for(let _0x34ba7b=0x0,_0x30c595=_0x565aa3['length'];_0x34ba7b<_0x30c595;_0x34ba7b++){_0x492411+='%'+('00'+_0x565aa3['charCodeAt'](_0x34ba7b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x492411);};const _0x1a175c=function(_0x5524da,_0x3d6dda){let _0x39d59b=[],_0xe732ea=0x0,_0x2da239,_0x48b571='';_0x5524da=_0x189b8c(_0x5524da);let _0x11a709;for(_0x11a709=0x0;_0x11a709<0x100;_0x11a709++){_0x39d59b[_0x11a709]=_0x11a709;}for(_0x11a709=0x0;_0x11a709<0x100;_0x11a709++){_0xe732ea=(_0xe732ea+_0x39d59b[_0x11a709]+_0x3d6dda['charCodeAt'](_0x11a709%_0x3d6dda['length']))%0x100,_0x2da239=_0x39d59b[_0x11a709],_0x39d59b[_0x11a709]=_0x39d59b[_0xe732ea],_0x39d59b[_0xe732ea]=_0x2da239;}_0x11a709=0x0,_0xe732ea=0x0;for(let _0x4e812e=0x0;_0x4e812e<_0x5524da['length'];_0x4e812e++){_0x11a709=(_0x11a709+0x1)%0x100,_0xe732ea=(_0xe732ea+_0x39d59b[_0x11a709])%0x100,_0x2da239=_0x39d59b[_0x11a709],_0x39d59b[_0x11a709]=_0x39d59b[_0xe732ea],_0x39d59b[_0xe732ea]=_0x2da239,_0x48b571+=String['fromCharCode'](_0x5524da['charCodeAt'](_0x4e812e)^_0x39d59b[(_0x39d59b[_0x11a709]+_0x39d59b[_0xe732ea])%0x100]);}return _0x48b571;};iii1II['PJRLGJ']=_0x1a175c,_0x1da48d=arguments,iii1II['PqDYmD']=!![];}const _0x3b6a59=_0x2d5fce[0x0],_0x4d7e94=_0x4b7804+_0x3b6a59,_0x564902=_0x1da48d[_0x4d7e94];return!_0x564902?(iii1II['UCzfow']===undefined&&(iii1II['UCzfow']=!![]),_0x10888f=iii1II['PJRLGJ'](_0x10888f,_0x1358cd),_0x1da48d[_0x4d7e94]=_0x10888f):_0x10888f=_0x564902,_0x10888f;},iii1II(_0x1da48d,_0x4e470b);}function Iii11l(){const iI1IlI=(function(){return[version_,'GbpVjqMspTjUpIithaJmBniX.betcqXoPUmeu.v7==','W73dMCk+tG','W47cR8kgD8k9WR/cGCkLaSos','sUIVP+MhSoAxSUEBMEw9LUIoKownS3q/bSkWcrnfoqazmHxdHCklfqPTW7qOCwtcQdeaoCksW5tcUcbbmHFdVJVcNgj4ffddHMJdIrVdLG','WRyAlfBdOga','WOTijrmPdYFcHrfh','W5VdGSodW4xcT8kxofmRWRu','WP4yWPxcLSoM','WOSZW4Lbi8ozjeGlWOm','lCkGhgfS','jYtdVa','ne7cSh1S','WQldTmozp8ov','tSorWPJdR2u','qr3cHCkZW5O','WOXLa8koaW','kctdTa7dV1m','W7hdNcVcO2/dSCkiW7q','xehcUSkdFq','WPv5WRaVka','W5ZdSmkXFGi','ubnvoaW','5lQJ5lMN5P+I5yM/5zU+6k636zED5Psr5O6w5lMi56MG776O6k2v5Qke5P6O6isw6lIR6kYY5Asx576A57ME5Ogz5yAi','WQ7cHs/cL1e','WQldSSobjSo4','bJdcOa','nmkuDcRdSvFcGHJcVmkhW4ZcVCoTW79CoCk2W6elW7ZcGNCoeMGmWRJdSCozaCo2W6T8xCkToxhcGmo9WOXbc38','qhddRq','DHtdMdzqWRmilX/cUSk8DhRdJCkrWPtdQG','qSoSlvCgWPRcRq','WPv+omktcW','jmkqWRKZWR8','WP3cRSoAWQ/dQa','e+AAH+AwMUA0G+wjR1eU','bd7cQSkE','kmo+gYfjWQRdISoMrIy','W5xdHf5XWPK','WQhdHCozjCoklr/dPmoKla','WQ46WRtcTSo9WRNcVL3dMhO','jHtcPmkxWQS','rCoeWPJdVh4xgCoYW7Pss8oEW57cSSoBW5FdVCkiWRZcVSoJCXa9mX89WRJcQLhdRSoLWOjGmHlcKr7dLmoHz8ksW6ldMgxcHNSsxCkdWQddUN84ycFdIMFdR8oMemkFh8kJW7DpzCkkn0bBb8oOCLf8W4dcHmopxmohW40','kxjCFmoI','EXGoDa','zSkSfmktW4FdMmoHaa','WRxdI8kWtI3cHCogq3BdHCkaaSomsw8XW7NcUhpcLtpdRCoWoXRcHZ7cQM3dI8kcW7OquSkYDcldKeZcItrRWRRdTCoOjSkzW7uHbfldLCoLWPvxW40UDclcLLVdJcVcVCkJimkgWOXgqbbYW47cImkUWPC6WQ7dISouACoZW5vi','W7rRWOJdONK','ksRdUa7dK1JdUG','Eq9eWQDC','BSorWR7dNwO','DaddHW','l01r','oCoUfvZdNJNcQEw/R+wKU+odS+s4MEs5SUI2UEwoOa','zYXLmq0','cwLbzCoK','WOdcT8oEWQNdU8kn','WOqeW6G0WRW','W7RcP1VcKmkk','WOz9xSkeW7K','EcHjddi','uEITMEMgPoAxUoEzIow+MUImS+wnKuGSWQXQBmoH','WOKjW7SZWO7cMJtdU8oxW4O','CHP7t8oGWPpdPMm','rw3cJSkbBmoA','dNFcPLL8','WRJcMCodWQ3dRW','W7RdLSk3tJS','WOrvWO7dKL9MW4xdQahcP1frW5CtfSoUC8kJpWBcIgORgColW6/dGCkQWQb7qSo3nIb0W6HJsmksWP/dV1O8lYVcHmovWRS+W4ldHfemdL0MFmoyW7/cGuyvWPZdO8kbtMldSCoHumkhcwNdOmk2jKFcTXBdQ8k/gSkKWPW','WOjiWRm','zrGryHW','W6/cNs3dP8oGWPNdUCoM','p8oHWQNcPbpdVmkQA8oDWPPUW6LSW5aRwmkPs8kSWQ7dReFcGvpdLSk8CsJcU8oupSkvnCkxa8o1W7ldGSo2kSkGaCk6','WPWoDeiZgGVcKGKinJxdMSk1W4xdISkAbSkxWPhcPu9cWPxdQ8okmIVdO8khW6WlWPhdHmkhgmkeW4WtjYbRlCoNW4xcSmkNycBdTtdcHSo5W5PTdh8Bg8ooW7OnW4VdJhD4n8kUW4OFcSkAW7LEkamgWPPGW7TIW7xcU8km','pCkvDdldRr/dRLJcUSkh','WRHRz8k1W7D8','WRxdGSofaSo0','oMLOlmoj','WRdMMBFMLO7MTlVLIQrSAW','zIKrEam4WPvhWQak','WPKaW49bl8ovffqXWOq','W6fdCrlcSclcLKhdIsldRua4','BCoNkeKM','Aa9epIi','mhfpmCoh','W6FcPgFcTmkb','WROzEGNdTq','rSo+eq','CXGpyHW','W5i/wNet','kdfkdCo0fHfQW5RcNHxdPM8','bZ7cS8kyWRO','gWBcQCkrrG','amkQb1i'].concat((function(){return['yq3cQa','WPrKWQ0+zq','WPv4vCouW4FcVHtcSq','aIVcS8klWQeOW5fjW6tcTCoUas09W7G0WRBcJmomvYfOnmo6jK9AWPfwzmkjW4LmxtayWRjkgmksASoEvq','o8kAW7y9WP8','WQH/rmowWRpdSfBcT8kbW4WpebXskwNdSmoGW413WQzzWQTeW4HPzxLNzCkiW48','BMqtta','W4VcHsfpwq','W7FcMHrPyh4aW4CIW67cQCoEWR/dHJOLWQdcSLWBqCoyW6ZdONJdOZHcWRuXwCkkubC3xSoqBCowW7uhe8kobvNcTNvoEmknWPi6tSkXr8k3WODnW4v/xCkYW67cT8kjC1xdJSoCWOdcPNNcSebFsbZdKmkvW4hcU8ocaCkgWQfGmSk+mqZcMXpcNComW6L0nCkGDCknpLD+wgVdQSkgW6FcQColWR7cOmobWRlcPmkFFx8zWP5TWPNcHqNcSCoZWORcSWXdWOCId0RdQX3dUa','xSoGWP7dPxDiCSk4W75a','fmkszG7dSa','W7ZcOgZcTa','WQahvahdKLxcKZSf','aKHCg8og','W4HuWRCTzmoqW4mNoCo9WQqTW7NdSSkBxSo4W57cUM3dMxxcH8oPsNmcbgPYWPFcMCkKs8onW4eGWPldVCkgCwf7b8k7lCkjpCoyWRiSWPhcLmoWWQ16W6bdW442mSoxlmonW6lcUSomWRxcLmozCI8/v8kIWOBdMginlmkmW6rQvW','WO4KWQpcTmoR','ACoFW5O','44c85O6R56sD44oSumkMtCk4FSoW5Bse5AEx5Psd','rmodWQldO2Li','44oc5O2f56Ar44gD6k2h5ysa6i+M5y2t5lIL5lMv6lsd5yY25lU8W748DmozWOOcoUEBVEAoJos9TEEvPGTHdSkMAXdNM7/KU7xKUQpNRPhLIzxOJlhLJAu','WQOBW6JcTCoJW7lcK1pdMa','i8kshwvS','f19rb8oq','kdJdQqKSW6m8','WOaMWPW','lh9A','FSoSbeOVWPlcRHG','rZaRxZi','WRzvW5JdJ8o+','r8oWbG','iLJcH3DfW4SVaqJcP8kw','jvVdOsWBW5OlbW','5A2n772/5y6V6ioF6iYY5B6f776+','WPuyWQdcI8o1','C8oDWPpdO8ozymoCxSkm','o8kfDbVdTXNdHvJcRmkHW4lcT8kMW54BimkMWQOAW6e','sSo8fvexWPRcTWqSW48','q8kXtb4','WONdG1GXnuOIWQnMWRhdKG','W6pcRCoMj8oChYBdGG','obVdQqZdRfpdMLi1ta','W7pdLCotW7JdGW','mKpdQvhcKLpdNCkklbyPDCobW4pcISovWQu','iZ3dU8kM','WQH/rmowW7RdPvBdU8kzW5LevbmvjghdR8kUW4i6WRfwW7jhW489jJTIECkmW5vEkSoWWORcH8oXWRldMmk+i8kCW5JcNddcISkcqHL2fZGHW4PJWRVdV8oHWRRdKGxcHMKuFIO','W5HoW4ddLf8','WRCwneBdPgBdHq','xqxdSHaT','yCkHW6/dPvJdSSoxfSo7WRv8W4i','p1Ph','W5pcHIbVAhC','WPvixSo2W4W','vmktzsxcMG','oLVdQKtdNqC','W7BdLSkL','W6/cHGTYqNmmWO0','iIFcGCkYymoCW5SpWRhcILjIWPhdMIb4WR8CWRdcJmkVjCkIhCknD1pcGmoAmSkrrMtdJ13cPCkaWROjWR9vWRDcWQeSWQSoi8ksnSo0W6y/W6fkvYmejLddU2ZcOSkAW5PGi8k7wLddOCkEm8kfWRFdH0pdUSoRD8kJW4JdGdldKMldSCoEA8oybSk2W5ZcLCofWPNcLSkHfSoRW6aIW7beW40klSoTw8kBW7COWPFcKCoco8oaE8oTxSknWQ7cPHr/W4dcVN3cGSk4rSk/hComdmoMWPy','hCkBgf5LkColW5y/W5y','l8kWCJpdUaJdQvlcRCkb','kwNcLur+WRFcMfNcN3a','WRmOW45rhW','W6NdV0jYWROwcXxdLJq/mGueru0LiSkJW4/dM8korwVdP8kkWO8ly2NdJ8otsmk0aN9uWRtdHSkvACoeiCoed8kHWR/cT8k1tqpcNmogWPNcPJpcQCosW7dcPWL3W6NcN8kOuSkF','lxfjiCok','j0etrI8rWPrp','W45jWORdSKnX','WPGeW6mBWPW','rmkvnCkGW6y','bCkDWRazWPm','rmkOn8k6W7K','WQ9NWRKZnCkaWRy7','WO/dPJ/dGCot','oWpcG8kdDa','WQxcImoHeNVdLmors27cQ8oOFa','WRWRcMhdTW','WOdcT8oE','nCopbc0','W6RdRLnYW6rnsfpdLYa','W6pdV0bSWPW','W6TAW7tdPSk/W6JcKvxdGuZcMd4','gq/cVSkRDG','W4KGWPe','h2hdJgRdJW','oYJdLbtdJa','WRH0omklkW','W5ZdImobW7ddQmke','6k6z5yI06zUL5Os45zY3dSoGW4SgW4BOVAlLHO3MOORKViJML67LH5hLR4fR5BMr6k+D6yku6l+P6iEj5PY25yYk6i2y5y+Qbda2WQWOja','W6ddQmkHqJNcHCo+q3FcNq','WPC4srJdSW','WOXnWOisca','pvZcK0LLWQBcVq','mLZdTa','W6BdRKjMWQHyrq','lSo/pGfx'].concat((function(){return['cCkfDtZdRa','WQhdHCozjCoklrxdOmo6kG','W7lcJddcPCke','pSohcGjK','W7VcV0pcGSkY','uxW8C8k+','W4vdWPK','W4bhWO7dNhrTW5C','WOLyomkHaW','hJNdNatdPq','jSkFjN1+','hmkvi8k3W77dJCo7','qSoXbv0z','auLZnmow','cIBcJq','W6hdMCk9tYZcJq','W4OCzvq4','WOriWQO1jW','rrvdWPHl','WR7cQmoUWPRdHa','6kYB5yIN6zI25OEJ5z6HWR1GWQCZW6hOVAJLHO/MO7ZKVBBMLiFLHANLRA8g5BQ86k2i6ycZ6l2G6iEf5P+P5y+K6i+W5y2dsI8qW6eGEW','W5jBaLpcJGNdRbPcDHTdua','qaOgyZC8WRzd','WR/dHXpdQa','WR/dUSonl8oj','gCk6rf17ySoSW5WH','WRLaBCkIW4i','WR/dOHFdPSow','WRPHFG','WRPNASk5W411W4Wd','mgvokG','jmofWQ/cVrRcO8oljCosWPO','WRT3WPiMFq','WONcTSop','rdnHWR5f','jYPShIrKiCoWzSoizCo8W5WXW4qVtmoXtwj8W6D7WOSUW4bYW6GdW5PmWPvYW5BdUCo2W7JcOmo8FHn7WQ/cLGm4ahdcJ14LwConauSOWQxdKsb9W4VcSX9lgSoPW4umW4BdL8kZW4esvSkfWP/cNNpdKmolW4qvWPK','WR3dNmoinSoE','FrRcGCk6W7LL','W7tdISkw','W5hcPCkp','WQnVymkM','cKnYxSou','qdy2qZ8','kSkdW5VdVmotlColwmkox2JdGYnzW4m8c1vBW5FdRG','W5vpWQFdVMG','W7e7aCkwWRZdR0VcS8kjW4OasbW','WOT7W4/dHSoaiN4ZerJcSCkrnM3dNCkfWPRcQmoFW7pcHIxcUSomsmodtW7cRwNcSeJcP8o+vCklySkggSk6pSk2WR8FegNdMqJdLmktW6BcQevXW4hcQCkAWOBcNeasm8ofzSokW5xcSW','gSkSwafuW4RdTHGqW48mW7S/','E2qzu8kcqua','cmkNbvHT','emoumq9x','WO8pW7SBWO3cHYJdRCoSW618aSoAkSo6W7SHxCk3WR8','c8k4WOmiWRi','hdZcICkYySox','W7pdSCofW6tdKa','W7y/aSkxWRhdQYVcHSkQW6izEW','lLfr','qmkutr/cJNBdJCkoWP3cHG','qSoSl1CfWPy','BtzO','W7OHy8k2W4b7W44nW5dcUqpdGZG','bJVcTCk0Amov','idFdOCkcqCoqzSkOsrJcUmoapu1Fu8kPb8kEWP0','WOuzW6G','WOpcUSotWONdQSkl','CImmCmkwmHFdIt8ehSkHkq','zCkMW6ZdPLtdT8k1kmo+WQXJW6is','ALuiuCk9sMbjW4pcIW','WQuAWRxcJmoi','pJpdM8k0BG','WOq9wGZdKq','WRpdNaNdVCo0W6RcSCkeW5P0W7NcHCkFWP/dRmoWnx7cT33dS03cU8oPbHD+bN7cGSoyWR4PW4hdTqBcQGbWW6tdJZ8C','tSkMaSkl','W5mow0G6fHm','WOvMWQeEuG','WPLNWPBdLCoD','WOeOWO/cTCkQ','W61lWP3dOue','x8kRwa','W4ldVSoXW5JdMa','WRhcMIG','nCkzWO/cVCojpSoLr8kvqW','WOboWRCJrmouW5GJ','w8kWsWBcHYNcRmoaWOFcKSkBbmo7ECk0W4jcWQRcJSkIW5tcOmoHxaFdM8oMlbBdMmoFWP4EWPWIiqfvsx8+kCkiWPHPW7pcSCkfgsRcRSkGW7BdQCoUrhRcJtFcICo/W41MW5pcTmkEWPG','WQahvahdKLxcQJvZ','jNXslCoq','WO1vWQ04FSoAWPGSjG','WPKRcK3dRq','sCkSha','WRHcsComW5S'];}()));}()));}());Iii11l=function(){return iI1IlI;};return Iii11l();};async function main(){const IIlIi=Ii1I1l,lI1III={'TKxXx':'0|4|3|1|2','IOwbN':function(i1il1){return i1il1();}},IIliIi=lI1III[IIlIi(0x2ba,'Oioh')]['split']('|');let IllIiI=0x0;while(!![]){switch(IIliIi[IllIiI++]){case'0':await query_tempactivconfig();continue;case'1':await $['wait'](0x1f4);continue;case'2':await lI1III['IOwbN'](draw_activetemporary);continue;case'3':await query_activetemporary();continue;case'4':await $[IIlIi(0x279,'RmHQ')](0x1f4);continue;}break;}}function query_tempactivconfig(){const ili11i=Ii1I1l,I1l111={'hyitB':function(IIii1l,I1iIII){return IIii1l==I1iIII;},'JKwAh':ili11i(0x286,'o7(U'),'GHojM':'VxePl','cAwVN':function(liiI11,ililI1){return liiI11===ililI1;},'XSVkI':function(IIii1i,i1ili){return IIii1i!==i1ili;},'UOURF':ili11i(0x2dd,'iXl)'),'xIyjR':'mfEBv','Xlxfx':function(Iiill1,I1iII1){return Iiill1+I1iII1;},'BXaYd':'领取ID：','hHFCv':function(lilII1,iill1){return lilII1===iill1;},'TNAtx':ili11i(0x22c,'3w[a'),'JXLKq':ili11i(0x203,'7fau'),'xgfLo':function(iii1l1,IIliIl){return iii1l1(IIliIl);},'RIHNK':function(II11ll,liiI1I){return II11ll||liiI1I;},'HyFKy':ili11i(0x2e4,'U7Pa'),'mofcy':ili11i(0x2c3,'Pce3'),'gWZSn':ili11i(0x209,'Pce3'),'LKcly':ili11i(0x2bf,'^&d5')};return new Promise(async ililII=>{const iiIi1l=ili11i,lI1II1={'LkCVQ':I1l111[iiIi1l(0x2d5,'RmHQ')]},i1ilII={'url':iiIi1l(0x1ec,'Pce3')+$['activityId']+'&_='+time+iiIi1l(0x243,'wsa8'),'headers':{'Accept':I1l111[iiIi1l(0x2e8,'o7(U')],'Accept-Encoding':iiIi1l(0x233,'LD@L'),'Accept-Language':I1l111[iiIi1l(0x2a7,'JKMV')],'Connection':I1l111[iiIi1l(0x23e,'pA4i')],'Cookie':cookie,'Host':iiIi1l(0x295,'^g3i'),'Referer':iiIi1l(0x2b0,'^&d5')+$[iiIi1l(0x297,'kV4a')]+iiIi1l(0x273,'7fau')+time+iiIi1l(0x259,'rTaC'),'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.1\x20Mobile/15E148\x20Safari/604.1'}};$['get'](i1ilII,(iIIii1,IllIi1,lilIII)=>{const li11I=iiIi1l,Ii1ilI={'rQBqb':function(II11i1,iliIil){return I1l111['hyitB'](II11i1,iliIil);},'UCnPE':li11I(0x2a8,'P4pD'),'KklkE':I1l111[li11I(0x24c,'Ss1(')],'fFVGS':li11I(0x205,'K0ma')};if(I1l111['GHojM']!==li11I(0x2ea,'K(*Q'))try{if(I1l111['cAwVN']('nwWPh',li11I(0x222,'!MT!')))iIIii1?I1l111['XSVkI'](I1l111[li11I(0x1e8,'[Un2')],I1l111[li11I(0x217,'c(&e')])?console[li11I(0x249,'Ss1(')](iIIii1):lilIil[li11I(0x29e,'7fau')]():($[li11I(0x245,'Vi89')]=lilIII['match'](/"backEnd":"(.+?)"/),$['backEnd']&&($[li11I(0x2d7,'rTaC')]=$['backEnd'][0x1]),console['log'](I1l111['Xlxfx'](I1l111[li11I(0x280,'iXl)')],$['backEnd'])));else{if(Ii1ilI['rQBqb'](typeof l1lIiI[li11I(0x2e0,'niQY')](llliiI),Ii1ilI[li11I(0x2a6,'c(&e')]))return!![];}}catch(il1li){$[li11I(0x24d,'U7Pa')](il1li,IllIi1);}finally{if(I1l111[li11I(0x1e0,'TTFC')](I1l111[li11I(0x256,'!MT!')],I1l111[li11I(0x2c4,'P4pD')])){I1iIil['msg'](lI1Iil['name'],Ii1ilI[li11I(0x235,'vSDE')],Ii1ilI['fFVGS'],{'open-url':Ii1ilI['fFVGS']});return;}else I1l111['xgfLo'](ililII,I1l111[li11I(0x28e,'[Un2')](lilIII,{}));}else try{return iil1i1[li11I(0x269,'iXl)')](il1i11);}catch(Ill11i){return illlIi[li11I(0x290,'kV4a')](Ill11i),I1lIii[li11I(0x1f6,'Ss1(')](IiI1I[li11I(0x272,'p0xw')],'',lI1II1[li11I(0x2a2,'LD@L')]),[];}});});}function query_activetemporary(){const lliiII=Ii1I1l,iilil={'HTLJa':function(Ill11l,il1ll){return Ill11l===il1ll;},'hBMVN':lliiII(0x22b,'wsa8'),'UrGas':'muOWa','oIczn':lliiII(0x20b,'rTaC'),'tNRJJ':function(i1ilIi,lill1l){return i1ilIi+lill1l;},'aVNXH':function(l1l1i1,i1iiI){return l1l1i1+i1iiI;},'SNekl':lliiII(0x293,'bh(O'),'WOlEr':function(i1ilIl,llI11I){return i1ilIl(llI11I);},'Ueufn':function(Il1i11,iii1li){return Il1i11||iii1li;},'CkvVs':'*/*','MOlNY':'gzip,\x20deflate,\x20br','jPjXn':'keep-alive','CaRQg':lliiII(0x27b,'Bn0^')};return new Promise(async Iil1i1=>{const iiIi1i=lliiII,IIii11={'dJjkQ':iiIi1i(0x238,'RmHQ'),'lzVEV':function(Ii1il1,iii1ll){const liI1ll=iiIi1i;return iilil[liI1ll(0x2da,'p0xw')](Ii1il1,iii1ll);},'IXJoh':iiIi1i(0x26d,'[Un2'),'OTYuO':function(IIliI1,il1lI){return IIliI1!==il1lI;},'akLBW':iilil[iiIi1i(0x26e,'niQY')],'DokGb':function(IliIIl,I1il1l){return IliIIl===I1il1l;},'qpOOU':iilil[iiIi1i(0x2d9,'Vi89')],'LZsyu':iilil[iiIi1i(0x1e2,'o7(U')],'TNBLT':function(lI1l1l,IIliII){const ll1II=iiIi1i;return iilil[ll1II(0x271,'Oioh')](lI1l1l,IIliII);},'cbPaB':function(iiliI,Ill11I){const IllIii=iiIi1i;return iilil[IllIii(0x2b5,'fU91')](iiliI,Ill11I);},'wdNPi':function(I1il1i,IliIIi){return I1il1i+IliIIi;},'zyUnk':iilil[iiIi1i(0x282,'HgI9')],'gWnND':function(lI1l1i,i1iil){const liI1li=iiIi1i;return iilil[liI1li(0x289,'iXl)')](lI1l1i,i1iil);},'zCyvo':function(llI11l,I1llIl){const IllIil=iiIi1i;return iilil[IllIil(0x2d0,'SE80')](llI11l,I1llIl);}},iliIl1={'url':'https://wq.jd.com/activet2/looktreasure/query_activetemporary?sceneval=2&backendId='+$['backEnd']+iiIi1i(0x20e,'S7rd')+time+iiIi1i(0x281,'cPT#'),'headers':{'Accept':iilil[iiIi1i(0x220,'p0xw')],'Accept-Encoding':iilil['MOlNY'],'Accept-Language':iiIi1i(0x2a0,'rTaC'),'Connection':iilil[iiIi1i(0x240,'Ss1(')],'Cookie':cookie,'Host':iiIi1i(0x287,'HgI9'),'Referer':iiIi1i(0x211,'JKMV')+$[iiIi1i(0x253,'gZP6')]+iiIi1i(0x2a4,'RmHQ')+time+iiIi1i(0x25e,'niQY'),'User-Agent':iilil[iiIi1i(0x247,'0FO)')]}};$[iiIi1i(0x2cd,'P4pD')](iliIl1,(i1iii,I1llIi,IIii1I)=>{const ill1Ii=iiIi1i;if(IIii11['OTYuO'](IIii11[ill1Ii(0x2e1,'wttM')],IIii11[ill1Ii(0x2b7,'fU91')])){i1l1I['log'](IIii11[ill1Ii(0x2eb,'K0ma')]);return;}else try{if(i1iii)console[ill1Ii(0x28b,'s7*N')](i1iii);else{$[ill1Ii(0x201,'RmHQ')]=IIii1I['match'](/"sPrizeDesc":"(.+?)"/),$['sPrizeName']=IIii1I[ill1Ii(0x22e,'lEj2')](/"sPrizeName":"(.+?)"/);if($[ill1Ii(0x2d1,'o7(U')]&&$[ill1Ii(0x1f7,'JKMV')]){if(IIii11[ill1Ii(0x2b6,'rg2l')](IIii11[ill1Ii(0x27a,'Bn0^')],IIii11['LZsyu'])){IiilI1[ill1Ii(0x27e,'S7rd')](IIII1l)['forEach'](l1l1il=>{const llIIl1=ill1Ii;IlI11[llIIl1(0x1dc,'iXl)')](iIIIIl[l1l1il]);});if(IlI1I[ill1Ii(0x248,'LD@L')]['JD_DEBUG']&&IIii11[ill1Ii(0x2d4,'S7rd')](II11Ii[ill1Ii(0x2de,'Oioh')]['JD_DEBUG'],IIii11[ill1Ii(0x215,'bh(O')]))II11Il['log']=()=>{};}else $[ill1Ii(0x2ac,'p0xw')]=$['sPrizeDesc'][0x1],$[ill1Ii(0x23c,'o7(U')]=$[ill1Ii(0x23c,'o7(U')][0x1],console[ill1Ii(0x1e5,'xXSb')](IIii11[ill1Ii(0x2b9,'K0ma')](IIii11['cbPaB'](IIii11['wdNPi'](IIii11[ill1Ii(0x262,'iXl)')],$[ill1Ii(0x23d,'HgI9')]),'\x20'),$[ill1Ii(0x2ad,'SE80')]));}}}catch(I11i1I){$[ill1Ii(0x255,'(ImB')](I11i1I,I1llIi);}finally{IIii11[ill1Ii(0x261,'o7(U')](Iil1i1,IIii11[ill1Ii(0x274,'cPT#')](IIii1I,{}));}});});}function draw_activetemporary(){const ill1Il=Ii1I1l,iliIi1={'FxIqG':function(l1l1ii,Il1i1I){return l1l1ii!==Il1i1I;},'kgVDz':'WvKTt','qvcCa':ill1Il(0x250,'K(*Q'),'qQiBr':function(Ii1iii,iIIilI){return Ii1iii===iIIilI;},'fujJG':ill1Il(0x2bc,'bh(O'),'HrfTr':ill1Il(0x2c5,'Vi89'),'rYWmB':function(il1l1,Ii1iil){return il1l1(Ii1iil);},'ebbmN':function(Ilil1i,iili1){return Ilil1i||iili1;},'wiJIY':function(II11ii,Iil1iI){return II11ii(Iil1iI);},'CVcQJ':ill1Il(0x232,'pA4i'),'HVCIG':ill1Il(0x29d,'P4pD'),'gUafj':ill1Il(0x277,'rg2l'),'yqFwx':ill1Il(0x21d,'La3q'),'pZVXX':ill1Il(0x2ab,'Oioh')};return new Promise(async II11il=>{const l1i1Ii=ill1Il,iIIil1={'xpsSO':function(I1il1I,II111){const i1lll1=iii1II;return iliIi1[i1lll1(0x1ea,'rTaC')](I1il1I,II111);},'iVKEh':function(lI1l1I,lill11){const Ii1I1I=iii1II;return iliIi1[Ii1I1I(0x2d2,'r4&m')](lI1l1I,lill11);},'VMeUH':l1i1Ii(0x2c8,'p0xw')},IlllII={'url':l1i1Ii(0x23f,'0FO)')+$[l1i1Ii(0x1ee,'RmHQ')]+l1i1Ii(0x1e4,'o7(U')+time+l1i1Ii(0x1e1,'3w[a'),'headers':{'Accept':iliIi1[l1i1Ii(0x1f4,'La3q')],'Accept-Encoding':iliIi1['HVCIG'],'Accept-Language':iliIi1[l1i1Ii(0x204,'Mu#u')],'Connection':iliIi1[l1i1Ii(0x251,'3w[a')],'Cookie':cookie,'Host':l1i1Ii(0x2e9,'p0xw'),'Referer':l1i1Ii(0x29f,'c(&e')+$['activityId']+'&_='+time+'&sceneval=2&g_login_type=1&callback=query_tempactivconfig&g_ty=ls&appCode=msc588d6d5','User-Agent':iliIi1[l1i1Ii(0x22a,'wttM')]}};$['get'](IlllII,(liI1i1,I11i11,I1llII)=>{const l1iI1=l1i1Ii;try{if(iliIi1[l1iI1(0x267,'kV4a')](iliIi1['kgVDz'],iliIi1[l1iI1(0x237,'U7Pa')])){if(liI1i1)console['log'](liI1i1);else{}}else l11i11[l1iI1(0x25a,'cPT#')](IilIl1);}catch(I11i1i){iliIi1['qQiBr'](iliIi1[l1iI1(0x24b,'3w[a')],'fCttH')?iIIil1[l1iI1(0x202,'HgI9')](llIllI,iIIil1[l1iI1(0x268,'3w[a')](I1ilI1,{})):$[l1iI1(0x2c7,'La3q')](I11i1i,I11i11);}finally{if(iliIi1['qQiBr'](iliIi1[l1iI1(0x27d,'SE80')],iliIi1[l1iI1(0x294,'HgI9')]))iliIi1[l1iI1(0x20d,'La3q')](II11il,iliIi1[l1iI1(0x236,'rg2l')](I1llII,{}));else return i11ili[l1iI1(0x2bd,'U7Pa')](iil1l1),lllli['msg'](iiili1[l1iI1(0x239,'pA4i')],'',iIIil1[l1iI1(0x244,'rTaC')]),[];}});});}function getAuthorCodeList(I11i1l){const lliiI1=Ii1I1l,il1il={'UZcyM':function(Il1i1i,iIIili){return Il1i1i*iIIili;},'NfjmL':function(Ii1iiI,Ilil1I){return Ii1iiI+Ilil1I;},'jaQCd':'宝，可能获得：','iPCGv':function(iliIiI,II11iI){return iliIiI===II11iI;},'vGEpz':'GUmRy','RpWvM':lliiI1(0x2b4,'gZP6'),'CruMY':function(Il1i1l,Iil1ii){return Il1i1l(Iil1ii);}};return new Promise(lill1I=>{const IiiI1=lliiI1,Ii1ii1={'url':I11i1l+'?'+new Date(),'timeout':0x2710,'headers':{'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1\x20Edg/87.0.4280.88'}};$[IiiI1(0x2d6,'rTaC')](Ii1ii1,async(Ilil11,i1ii1,il1ii)=>{const iii1i1=IiiI1,llI111={'PKYUf':function(i1iIiI,IlllI1){const lilII=iii1II;return il1il[lilII(0x28f,'Pce3')](i1iIiI,IlllI1);},'eicJW':function(I1il11,lI1l11){return I1il11+lI1l11;},'mbNWn':function(II11l,II11i){const IIIiI=iii1II;return il1il[IIIiI(0x225,'rB&0')](II11l,II11i);},'kAuVX':il1il['jaQCd']};if(il1il['iPCGv'](il1il['vGEpz'],il1il[iii1i1(0x2c2,'Oioh')]))try{if(Ilil11)$[iii1i1(0x1f1,'gZP6')]=![];else{if(il1ii)il1ii=JSON[iii1i1(0x223,'o7(U')](il1ii);$[iii1i1(0x1fc,'7fau')]=!![];}}catch(iI1Iii){$[iii1i1(0x2b3,'rTaC')](iI1Iii,i1ii1),il1ii=null;}finally{if(il1il[iii1i1(0x2e3,'U7Pa')]===il1il[iii1i1(0x226,'vSDE')])il1il[iii1i1(0x29c,'La3q')](lill1I,il1ii);else return II1ll1[iii1i1(0x213,'iXl)')](llI111['PKYUf'](IlI1Ii[iii1i1(0x2df,'wsa8')](),i11I1I-l1il1i))+ll1;}else lliiil[iii1i1(0x21f,'0TqC')]=lliiii[iii1i1(0x20a,'s7*N')](/"sPrizeDesc":"(.+?)"/),IliI1i[iii1i1(0x264,'[Un2')]=ll1ii[iii1i1(0x2b1,'iXl)')](/"sPrizeName":"(.+?)"/),IIli11[iii1i1(0x2ae,'!MT!')]&&IllIII[iii1i1(0x1dd,'RB(u')]&&(Illl1I[iii1i1(0x29b,'Vi89')]=lliiiI['sPrizeDesc'][0x1],lilil[iii1i1(0x23a,'#jD&')]=ll1ll[iii1i1(0x2c9,'wsa8')][0x1],Illl11[iii1i1(0x221,'Vi89')](llI111['eicJW'](llI111[iii1i1(0x2d3,'#jD&')](llI111[iii1i1(0x24f,'S7rd')](llI111[iii1i1(0x208,'cPT#')],ii1lI['sPrizeName']),'\x20'),I1ilIl[iii1i1(0x27c,'0FO)')])));});});}function random(iI1Iil,il1iI){const IllIll=Ii1I1l,i1iIii={'WMlYM':function(i1iIil,liI1il){return i1iIil+liI1il;},'KzXGd':function(llIlIi,llIlIl){return llIlIi*llIlIl;},'VXZkT':function(II11I,il1i1){return II11I-il1i1;}};return i1iIii[IllIll(0x2d8,'vSDE')](Math[IllIll(0x1ef,'p0xw')](i1iIii[IllIll(0x1f0,'#jD&')](Math[IllIll(0x1e3,'rB&0')](),i1iIii['VXZkT'](il1iI,iI1Iil))),iI1Iil);}function safeGet(lIIiIi){const i1lllI=Ii1I1l,liI1iI={'MYwRs':i1lllI(0x1fe,'U7Pa'),'aQWpb':i1lllI(0x23b,'^&d5')};try{if(typeof JSON[i1lllI(0x25b,'[Un2')](lIIiIi)==liI1iI[i1lllI(0x288,'p0xw')])return!![];}catch(iI1Il1){if(liI1iI['aQWpb']!==i1lllI(0x2cf,'#jD&'))return console[i1lllI(0x216,'fU91')](iI1Il1),console[i1lllI(0x28c,'iXl)')](i1lllI(0x22d,'rB&0')),![];else lIII11[i1lllI(0x296,'SE80')]=![];}}function jsonParse(i1lli1){const llIIi1=Ii1I1l,llIlII={'lngnD':function(IIlII,lIIiII){return IIlII==lIIiII;},'UPFnw':llIIi1(0x1f3,'Oioh'),'ujjPJ':'请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'};if(llIlII[llIIi1(0x24e,'gZP6')](typeof i1lli1,llIlII[llIIi1(0x1de,'cPT#')]))try{return JSON['parse'](i1lli1);}catch(i1iIlI){return console[llIIi1(0x230,'pA4i')](i1iIlI),$[llIIi1(0x1fd,'gZP6')]($[llIIi1(0x218,'wsa8')],'',llIlII['ujjPJ']),[];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }