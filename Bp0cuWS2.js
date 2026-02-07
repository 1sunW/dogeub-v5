const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["chunks/Home.JZtO064B.js", "chunks/vendor-modules.DTgpwBwG.js", "assets/BuigefS6.css", "chunks/Nav.CMWBzhLH.js", "assets/CWMGFbIm.css", "chunks/Apps.mx-APlep.js", "chunks/apps.module.C0aMNKX4.js", "assets/B9IX6286.css", "chunks/Apps2.7p3p2y9B.js", "chunks/Settings.D93ala-G.js", "chunks/Player.DIceRdJP.js", "chunks/localGmLoader.BHvzcz9h.js", "chunks/New.BGYggK0m.js"]))) => i.map(i => d[i]);
const bc = e;
(function(a, b) {
    const aZ = e
      , c = a();
    while (!![]) {
        try {
            const af = parseInt(aZ(0x36e)) / 0x1 + -parseInt(aZ(0x1fb)) / 0x2 * (-parseInt(aZ(0x2b6)) / 0x3) + parseInt(aZ(0x223)) / 0x4 + -parseInt(aZ(0x191)) / 0x5 * (-parseInt(aZ(0x15a)) / 0x6) + parseInt(aZ(0x2db)) / 0x7 * (-parseInt(aZ(0x349)) / 0x8) + -parseInt(aZ(0x2c5)) / 0x9 + parseInt(aZ(0x133)) / 0xa;
            if (af === b)
                break;
            else
                c['push'](c['shift']());
        } catch (ag) {
            c['push'](c['shift']());
        }
    }
}(d, 0x4a9e5));
import {j as f, r, R as g, a as h, c as i, b as j, G as l, L as m, X as n, P as o, I as p, u as t, d as u, A as v, e as w, f as x, S as y, g as z, F as A, M as C, h as F, E as I, i as M, z as N, Q as O, k as P, W as R, Z as S, l as W, C as Y, B as a0, m as a1, T as a2, n as a3, o as a4, p as a5, q as a6, s as a7, t as a8, N as a9, v as ab, w as ac, x as ad} from './chunks/vendor-modules.DTgpwBwG.js';
(function() {
    const b0 = e
      , b = {
        'YLJaJ': b0(0x36a),
        'LfvCb': function(aj, ak) {
            return aj === ak;
        },
        'LgFxe': function(aj, ak) {
            return aj(ak);
        },
        'gROuD': b0(0x35b),
        'kHxmJ': b0(0x287),
        'TqrYU': 'log',
        'hkDzH': b0(0x2d7),
        'AHDPo': function(aj, ak, al) {
            return aj(ak, al);
        },
        'BPsHB': b0(0x161)
    }
      , af = (function() {
        let aj = !![];
        return function(ak, al) {
            const am = aj ? function() {
                const b1 = e;
                if (al) {
                    const an = al[b1(0x209)](ak, arguments);
                    return al = null,
                    an;
                }
            }
            : function() {}
            ;
            return aj = ![],
            am;
        }
        ;
    }())
      , ag = document['createElement'](b0(0x3b3))['relList'];
    if (ag && ag['supports'] && ag[b0(0x1e7)]('modulepreload'))
        return;
    for (const aj of document[b0(0x18a)](b['BPsHB']))
        ai(aj);
    new MutationObserver(ak => {
        const b2 = b0;
        for (const al of ak)
            if (al['type'] === b['YLJaJ']) {
                for (const am of al[b2(0x27a)])
                    b['LfvCb'](am['tagName'], b2(0x25e)) && b['LfvCb'](am['rel'], b2(0x14e)) && b['LgFxe'](ai, am);
            }
    }
    )['observe'](document, {
        'childList': !0x0,
        'subtree': !0x0
    });
    function ah(ak) {
        const b3 = b0
          , al = {};
        return ak[b3(0x298)] && (al[b3(0x298)] = ak[b3(0x298)]),
        ak['referrerPolicy'] && (al[b3(0x11f)] = ak[b3(0x11f)]),
        ak['crossOrigin'] === 'use-credentials' ? al[b3(0x365)] = b3(0x19f) : ak['crossOrigin'] === b[b3(0x10a)] ? al['credentials'] = b3(0x2de) : al[b3(0x365)] = b3(0x319),
        al;
    }
    function ai(ak) {
        const b4 = b0
          , al = {
            'xnEIv': function(ao, ap) {
                return ao + ap;
            },
            'UmKOf': b['kHxmJ'],
            'qhAww': function(ao) {
                return ao();
            },
            'dnKtK': b['TqrYU'],
            'UwFld': b4(0x3b6),
            'teQZo': b4(0x196),
            'OmyUF': 'exception',
            'CdhQm': b[b4(0x1d8)],
            'NwKpg': function(ao, ap) {
                return ao < ap;
            }
        }
          , am = af(this, function() {
            const b5 = b4;
            let ao;
            try {
                const ar = Function(al['xnEIv'](b5(0x146) + al[b5(0x2f2)], ');'));
                ao = al[b5(0x3ce)](ar);
            } catch (at) {
                ao = window;
            }
            const ap = ao['console'] = ao['console'] || {}
              , aq = [al[b5(0x21a)], b5(0x1a4), al[b5(0x28e)], al[b5(0x23d)], al['OmyUF'], al['CdhQm'], 'trace'];
            for (let au = 0x0; al['NwKpg'](au, aq[b5(0x15d)]); au++) {
                const av = af['constructor'][b5(0x26c)]['bind'](af)
                  , aw = aq[au]
                  , ax = ap[aw] || av;
                av['__proto__'] = af[b5(0x14d)](af),
                av['toString'] = ax[b5(0x2f3)][b5(0x14d)](ax),
                ap[aw] = av;
            }
        });
        am();
        if (ak['ep'])
            return;
        ak['ep'] = !0x0;
        const an = ah(ak);
        b[b4(0x197)](fetch, ak[b4(0x28c)], an);
    }
}());
const us = 'modulepreload'
  , gs = function(a) {
    return '/' + a;
}
  , me = {}
  , q = function(b, af, ag) {
    const b6 = e
      , ah = {
        'aUtVm': b6(0x1c8),
        'BGueV': 'stylesheet',
        'fIVPw': 'nonce',
        'kYITP': b6(0x371),
        'uIWPP': function(ak, al) {
            return ak === al;
        },
        'iTBdZ': function(ak, al) {
            return ak > al;
        },
        'vIehi': function(ak, al) {
            return ak(al);
        }
    };
    let ai = Promise[b6(0x2ff)]();
    if (af && ah['iTBdZ'](af[b6(0x15d)], 0x0)) {
        let ak = function(an) {
            const b7 = b6;
            return Promise[b7(0x337)](an['map'](ao => Promise['resolve'](ao)['then'](ap => ({
                'status': 'fulfilled',
                'value': ap
            }), ap => ({
                'status': 'rejected',
                'reason': ap
            }))));
        };
        document['getElementsByTagName'](b6(0x3b3));
        const al = document['querySelector']('meta[property=csp-nonce]')
          , am = al?.[b6(0x341)] || al?.[b6(0x2ea)]('nonce');
        ai = ah[b6(0x207)](ak, af['map'](an => {
            const b8 = b6
              , ao = {
                'qwMSK': 'load',
                'dQfLa': b8(0x196)
            };
            if (an = gs(an),
            an in me)
                return;
            me[an] = !0x0;
            const ap = an[b8(0x193)](ah['aUtVm'])
              , aq = ap ? b8(0x1c5) : '';
            if (document[b8(0x2a3)](b8(0x155) + an + '\x22]' + aq))
                return;
            const ar = document[b8(0x304)]('link');
            if (ar['rel'] = ap ? ah['BGueV'] : us,
            ap || (ar['as'] = b8(0x2e4)),
            ar['crossOrigin'] = '',
            ar['href'] = an,
            am && ar[b8(0x3c7)](ah[b8(0x23c)], am),
            document[b8(0x2ed)]['appendChild'](ar),
            ap)
                return new Promise( (at, au) => {
                    const b9 = b8;
                    ar[b9(0x3d8)](ao[b9(0x28d)], at),
                    ar['addEventListener'](ao[b9(0x25d)], () => au(new Error(b9(0x230) + an)));
                }
                );
        }
        ));
    }
    function aj(an) {
        const ba = b6
          , ao = new Event(ah[ba(0x25f)],{
            'cancelable': !0x0
        });
        if (ao['payload'] = an,
        window['dispatchEvent'](ao),
        !ao[ba(0x241)])
            throw an;
    }
    return ai[b6(0x31c)](an => {
        const bb = b6;
        for (const ao of an || [])
            ah[bb(0x388)](ao[bb(0x320)], 'rejected') && aj(ao[bb(0x36c)]);
        return b()['catch'](aj);
    }
    );
}
  , bs = bc(0x26f)
  , Be = {
    'version': bs
};
let U, G, H;
const xs = () => {
    const bd = bc
      , a = {
        'qqbhl': function(b, c) {
            return b in c;
        },
        'iMjyx': bd(0x156)
    };
    bd(0x19e)in navigator && navigator[bd(0x19e)]['getRegistrations']()['then'](b => b[bd(0x281)](c => c['unregister']())),
    a['qqbhl'](a[bd(0x26e)], window) && caches['keys']()['then'](b => b['forEach'](c => caches[bd(0x143)](c))),
    localStorage[bd(0x114)](),
    sessionStorage['clear'](),
    location['href'] = '/';
}
  , Pe = () => {
    const bf = bc
      , a = {
        'wjndO': bf(0x28c),
        'KspCW': bf(0x12f),
        'mLVQg': function(c, af) {
            return c || af;
        },
        'kYQQh': function(c, af, ag) {
            return c(af, ag);
        }
    }
      , b = JSON['parse'](localStorage[bf(0x130)] || '{}');
    a['kYQQh'](q, async () => {
        const {meta: c} = await Promise['resolve']()['then']( () => ea);
        return {
            'meta': c
        };
    }
    , void 0)['then']( ({meta: c}) => {
        const bg = bf
          , af = {
            'RNEhO': function(al, am, an) {
                return al(am, an);
            }
        }
          , {tabName: ag, tabIcon: ah} = b
          , {tabName: ai, tabIcon: aj} = c[0x0][bg(0x2d4)]
          , ak = (al, am) => {
            const bh = bg;
            document['title'] = al,
            document[bh(0x2a3)]('link[rel~=\x27icon\x27]')?.['setAttribute'](a['wjndO'], am);
        }
        ;
        U && window['removeEventListener'](a['KspCW'], U),
        G && window['removeEventListener']('focus', G),
        b['clkOff'] ? (ak(ag, ah),
        U = () => {
            const bi = bg
              , al = JSON[bi(0x138)](localStorage[bi(0x130)] || '{}');
            af[bi(0x1ba)](ak, al[bi(0x1d0)] || ai, al['tabIcon'] || aj);
        }
        ,
        G = () => ak(ai, aj),
        window['addEventListener'](bg(0x12f), U),
        window[bg(0x3d8)]('focus', G),
        ak(ai, aj)) : (ak(a[bg(0x311)](ag, ai), ah || aj),
        U = G = null);
    }
    );
}
  , Ie = () => {
    const bj = bc
      , a = {
        'IdEZn': 'Alt',
        'NhDQy': function(af, ag) {
            return af === ag;
        }
    }
      , b = JSON[bj(0x138)](localStorage['options'] || '{}')
      , c = b['panic'];
    H && (window[bj(0x1bd)](bj(0x256), H),
    H = null),
    c?.[bj(0x3de)] && c?.['url'] && b[bj(0x354)] && (H = af => {
        const bk = bj
          , ag = [];
        af[bk(0x38f)] && ag[bk(0x1e6)]('Ctrl'),
        af[bk(0x2bf)] && ag['push'](a[bk(0x2b7)]),
        af['shiftKey'] && ag['push']('Shift'),
        af['metaKey'] && ag['push']('Meta'),
        ag['push'](af[bk(0x3de)]['length'] === 0x1 ? af['key'][bk(0x34e)]() : af['key']),
        a['NhDQy'](ag[bk(0xfa)]('+'), c[bk(0x3de)]) && (af['preventDefault'](),
        window['location'][bk(0x28c)] = c['url']);
    }
    ,
    window['addEventListener']('keydown', H));
}
;
(( () => {
    const bl = bc
      , b = {
        'wdFMi': 'options',
        'jkZRL': function(af, ag) {
            return af(ag);
        },
        'HXPTu': '100%',
        'pdwpi': bl(0x345)
    }
      , c = JSON[bl(0x138)](localStorage[bl(0x130)] || '{}');
    if (!c['version'] && localStorage['setItem'](b[bl(0x2a5)], JSON['stringify']({
        'version': Be['version']
    })),
    c['beforeUnload'] && window[bl(0x3d8)](bl(0x1f4), af => {
        af['preventDefault'](),
        af['returnValue'] = '';
    }
    ),
    window[bl(0x1f5)] === window[bl(0x26d)] && c[bl(0x1eb)]) {
        const af = b[bl(0x1ea)](open, bl(0x3c1));
        if (!af || af['closed'])
            b[bl(0x1ea)](alert, bl(0x3d7)),
            location[bl(0x28c)] = 'https://google.com';
        else {
            const ag = af[bl(0x343)]
              , ah = ag['document']
              , ai = ah['createElement']('iframe');
            Object['assign'](ai, {
                'src': location[bl(0x28c)]
            }),
            Object['assign'](ai['style'], {
                'width': b['HXPTu'],
                'height': b[bl(0x198)],
                'border': 'none'
            }),
            Object['assign'](ah[bl(0x35e)]['style'], {
                'margin': 0x0,
                'height': bl(0x1d9)
            }),
            ah[bl(0x1b6)]['style'][bl(0x383)] = '100%',
            ah['head'][bl(0x18c)](Object['assign'](document[bl(0x304)](bl(0x3b3)), {
                'rel': bl(0x329),
                'href': ''
            })),
            ah['body'][bl(0x333)](ai);
            const aj = ah['createElement'](bl(0x2e4));
            aj['textContent'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20d\x20=\x20document;\x0a\x20\x20\x20\x20\x20\x20\x20\x20setInterval(()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20op\x20=\x20JSON.parse(localStorage.getItem(\x27options\x27)\x20||\x20\x27{}\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d.title\x20=\x20op.tabName\x20||\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20icon\x20=\x20d.querySelector(\x22link[rel~=\x27icon\x27]\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(!icon)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20icon\x20=\x20d.createElement(\x27link\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20icon.rel\x20=\x20\x27icon\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d.head.appendChild(icon);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20icon.href\x20=\x20op.tabIcon\x20||\x20\x27\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20},\x20800);\x0a\x20\x20\x20\x20\x20\x20',
            ah[bl(0x2ed)]['appendChild'](aj),
            location[bl(0x28c)] = b['pdwpi'];
        }
        history['replaceState'](null, '', '/');
    }
    Pe(),
    Ie();
}
)());
const ma = Object['freeze'](Object[bc(0x299)]({
    '__proto__': null,
    'ckOff': Pe,
    'panic': Ie,
    'resetInstance': xs
}, Symbol['toStringTag'], {
    'value': bc(0x218)
}));
function ws() {
    const bm = bc
      , a = {
        'IisPU': 'text-2xl\x20font-semibold\x20text-gray-300'
    };
    return f[bm(0x136)]('div', {
        'className': bm(0x1dd),
        'children': f['jsx']('h1', {
            'className': a[bm(0x16c)],
            'children': 'Loading...'
        })
    });
}
const Re = r['memo']( ({pages: a}) => f['jsx'](r[bc(0x363)], {
    'fallback': f['jsx'](ws, {}),
    'children': f['jsx'](g, {
        'children': a['map']( (b, c) => f['jsx'](h, {
            'path': b[bc(0x399)],
            'element': b['element']
        }, b['path'] + '-' + c))
    })
}));
function e(a, b) {
    a = a - 0xfa;
    const c = d();
    let f = c[a];
    return f;
}
Re[bc(0x1ee)] = bc(0x122);
const B = i(a => ({
    'tabs': [{
        'title': 'New\x20Tab',
        'id': crypto[bc(0x240)](),
        'url': bc(0x17a),
        'active': !0x0,
        'history': [bc(0x17a)],
        'historyIndex': 0x0,
        'isLoading': !0x1
    }],
    'frameRefs': null,
    'showTabs': !0x1,
    'showMenu': !0x1,
    'iframeUrls': {},
    'activeFrameRef': null,
    'showUI': !0x0,
    'zoomLevels': {},
    'wispStatus': null,
    'setWispStatus': b => a({
        'wispStatus': b
    }),
    'toggleUI': () => a(b => ({
        'showUI': !b['showUI']
    })),
    'setZoom': (b, c, af) => {
        const bn = bc
          , ag = {
            'bOQSl': function(ai, aj) {
                return ai / aj;
            },
            'RBbJt': function(ai, aj) {
                return ai(aj);
            }
        }
          , ah = af?.[bn(0x1fd)];
        ah && (ah['style'][bn(0x291)] = bn(0x16d) + c / 0x64 + ')',
        ah['style']['transformOrigin'] = bn(0x1f7),
        ah['style']['width'] = ag[bn(0x15c)](0x64, c / 0x64) + '%',
        ah[bn(0x32d)][bn(0x383)] = 0x64 / ag['bOQSl'](c, 0x64) + '%'),
        ag['RBbJt'](a, ai => ({
            'zoomLevels': {
                ...ai[bn(0x1b5)],
                [b]: c
            }
        }));
    }
    ,
    'resetZoom': (b, c) => {
        const bo = bc
          , af = c?.['current'];
        af && (af[bo(0x32d)][bo(0x291)] = '',
        af['style']['width'] = '',
        af['style']['height'] = ''),
        a(ag => ({
            'zoomLevels': {
                ...ag['zoomLevels'],
                [b]: 0x64
            }
        }));
    }
    ,
    'setShowTabs': b => a({
        'showTabs': b
    }),
    'toggleTabs': () => a(b => ({
        'showTabs': !b['showTabs']
    })),
    'toggleMenu': () => a(b => ({
        'showMenu': !b['showMenu']
    })),
    'setFrameRefs': b => a({
        'frameRefs': b
    }),
    'addTab': b => a(c => ({
        'tabs': [...c[bc(0x16f)], {
            ...b,
            'history': [b[bc(0x247)] || 'tabs://new'],
            'historyIndex': 0x0,
            'isLoading': !0x1
        }]
    })),
    'removeTab': b => a(c => ({
        'tabs': c[bc(0x16f)]['filter']( ({id: af}) => af != b)
    })),
    'setActive': b => a(c => ({
        'tabs': c['tabs'][bc(0x27c)](af => ({
            ...af,
            'active': af['id'] === b
        }))
    })),
    'setLastActive': b => a(c => {
        const bp = bc
          , af = {
            'uxsTf': function(ai, aj) {
                return ai + aj;
            }
        }
          , ag = c[bp(0x16f)][bp(0x2d3)](ai => ai['id'] === b)
          , ah = ag > 0x0 ? ag - 0x1 : af[bp(0x118)](ag, 0x1);
        return {
            'tabs': c['tabs'][bp(0x27c)]( (ai, aj) => ({
                ...ai,
                'active': aj === ah
            }))
        };
    }
    ),
    'updateUrl': (b, c, af=!0x0) => a(ag => ({
        'tabs': ag['tabs'][bc(0x27c)](ah => {
            const bq = bc
              , ai = {
                'koBfX': function(aj, ak) {
                    return aj !== ak;
                },
                'IxFKu': function(aj, ak) {
                    return aj + ak;
                },
                'KIuOe': function(aj, ak) {
                    return aj - ak;
                }
            };
            if (ai[bq(0x3c3)](ah['id'], b))
                return ah;
            if (af) {
                const aj = [...ah[bq(0x3ba)]['slice'](0x0, ai[bq(0x210)](ah[bq(0x36b)], 0x1)), c];
                return {
                    ...ah,
                    'url': c,
                    'history': aj,
                    'historyIndex': ai['KIuOe'](aj[bq(0x15d)], 0x1),
                    'isLoading': c !== 'tabs://new'
                };
            }
            return {
                ...ah,
                'url': c,
                'isLoading': ai[bq(0x3c3)](c, bq(0x17a))
            };
        }
        )
    })),
    'updateTitle': (b, c) => a(af => ({
        'tabs': af[bc(0x16f)][bc(0x27c)](ag => ag['id'] === b ? {
            ...ag,
            'title': c
        } : ag)
    })),
    'setLoading': (b, c) => a(af => ({
        'tabs': af[bc(0x16f)]['map'](ag => ag['id'] === b ? {
            ...ag,
            'isLoading': c
        } : ag)
    })),
    'refreshTab': b => {
        const br = bc
          , c = B['getState']()['frameRefs']?.['current']?.[b];
        c?.['contentWindow'] && c['contentWindow']['location'][br(0x39c)]();
    }
    ,
    'goBack': (b, c) => {
        a(af => {
            const bu = e
              , ag = {
                'kAXUZ': function(ak, al) {
                    return ak !== al;
                },
                'EJCiS': function(ak, al) {
                    return ak <= al;
                },
                'cgmjV': function(ak, al) {
                    return ak === al;
                }
            }
              , ah = af['tabs']['map'](ak => {
                const bt = e;
                if (ag[bt(0x12a)](ak['id'], b) || ag[bt(0x1b8)](ak['historyIndex'], 0x0))
                    return ak;
                const al = ak[bt(0x36b)] - 0x1
                  , am = ak[bt(0x3ba)][al];
                return ag['cgmjV'](am, bt(0x17a)) && c && c(),
                {
                    ...ak,
                    'url': am,
                    'historyIndex': al,
                    'isLoading': !0x0
                };
            }
            )
              , ai = ah['find'](ak => ak['id'] === b)
              , aj = ai ? {
                ...af['iframeUrls'],
                [b]: ai[bu(0x247)]
            } : af[bu(0x1c3)];
            return {
                'tabs': ah,
                'iframeUrls': aj
            };
        }
        );
    }
    ,
    'goForward': b => {
        const c = {
            'XPwiI': function(af, ag) {
                return af(ag);
            }
        };
        c['XPwiI'](a, af => {
            const bw = e
              , ag = af['tabs']['map'](aj => {
                const bv = e;
                if (aj['id'] !== b || aj['historyIndex'] >= aj[bv(0x3ba)][bv(0x15d)] - 0x1)
                    return aj;
                const ak = aj['historyIndex'] + 0x1;
                return {
                    ...aj,
                    'url': aj['history'][ak],
                    'historyIndex': ak,
                    'isLoading': !0x0
                };
            }
            )
              , ah = ag['find'](aj => aj['id'] === b)
              , ai = ah ? {
                ...af[bw(0x1c3)],
                [b]: ah[bw(0x247)]
            } : af['iframeUrls'];
            return {
                'tabs': ag,
                'iframeUrls': ai
            };
        }
        );
    }
    ,
    'setIframeUrl': (b, c) => a(af => ({
        'iframeUrls': {
            ...af['iframeUrls'],
            [b]: c
        }
    })),
    'updateActiveFrameRef': b => a({
        'activeFrameRef': b
    }),
    'clearStore': ({showTb: b}) => a( () => ({
        'tabs': [{
            'title': bc(0x28b),
            'id': crypto['randomUUID'](),
            'url': 'tabs://new',
            'active': !0x0,
            'history': [bc(0x17a)],
            'historyIndex': 0x0,
            'isLoading': !0x1
        }],
        'frameRefs': null,
        'showTabs': b,
        'iframeUrls': {}
    }))
}))
  , Te = r['createContext']()
  , he = () => {
    const bx = bc;
    try {
        return JSON[bx(0x138)](localStorage['getItem'](bx(0x130)) || '{}');
    } catch {
        return {};
    }
}
  , vs = ({children: b}) => {
    const by = bc
      , c = {
        'RrtKB': by(0x22c),
        'NAJak': function(aj) {
            return aj();
        }
    }
      , [af,ag] = r['useState'](he);
    r[by(0x144)]( () => {
        const bz = by;
        try {
            localStorage['setItem'](bz(0x130), JSON['stringify'](af));
        } catch {}
    }
    , [af]);
    const ah = r[by(0x3b8)]( (aj, ak=!0x0) => {
        const bA = by;
        if (!aj || typeof aj != c['RrtKB'])
            return;
        const al = {
            ...c[bA(0x38a)](he),
            ...aj
        };
        try {
            localStorage[bA(0x1d2)](bA(0x130), JSON['stringify'](al));
        } catch {}
        ak && ag(am => ({
            ...am,
            ...aj
        }));
    }
    , [])
      , ai = r[by(0x373)]( () => ({
        'options': af,
        'updateOption': ah
    }), [af, ah]);
    return f[by(0x136)](Te[by(0x22d)], {
        'value': ai,
        'children': b
    });
}
  , T = () => {
    const bB = bc
      , a = r[bB(0x221)](Te);
    if (!a)
        throw new Error(bB(0x1ce));
    return a;
}
  , ks = () => {
    const bC = bc
      , b = {
        'hdzeW': function(an, ao) {
            return an === ao;
        },
        'pXLpS': 'div',
        'nOmPu': 'items-center\x20border\x20rounded-md\x20duration-150',
        'dyKrA': '#111e2fb0',
        'lmWUa': bC(0x24f),
        'vhKNN': '#ffffff0c',
        'oXGKM': bC(0x1b1),
        'dZAlX': bC(0x3ac),
        'FVnmV': bC(0x17a),
        'hzQtf': 'New\x20Tab',
        'Mglmd': 'ml-auto\x20flex-shrink-0\x20duration-200',
        'aJOXX': 'cursor-not-allowed\x20opacity-50',
        'yFNFg': function(an, ao) {
            return an < ao;
        },
        'cGUNR': function(an) {
            return an();
        },
        'tuzxt': function(an) {
            return an();
        },
        'XzpgX': 'h-10\x20items-center\x20overflow-hidden\x20gap-1\x20px-1',
        'woesk': bC(0x107),
        'RVMrM': 'flex\x20items-center\x20justify-center',
        'jCJeB': function(an, ao) {
            return an != ao;
        },
        'vmCmK': 'cursor-not-allowed\x20opacity-50\x20hover:bg-transparent'
    }
      , {tabs: af, addTab: ag, removeTab: ah, setActive: ai, showTabs: aj, setLastActive: ak, showUI: al} = b['cGUNR'](B)
      , {options: am} = b[bC(0x11d)](T);
    return f[bC(0x3da)]('div', {
        'className': j(b['XzpgX'], aj && al ? bC(0x322) : b['woesk']),
        'style': {
            'backgroundColor': am['tabBarColor'] || bC(0x3c8)
        },
        'children': [af['map']( ({title: an, id: ao, active: ap, isLoading: aq, url: ar}) => {
            const bD = bC
              , at = {
                'OmREd': function(av, aw) {
                    return av > aw;
                },
                'uwjTe': function(av, aw) {
                    return av(aw);
                }
            }
              , au = b['hdzeW'](ar, bD(0x17a)) || !aq;
            return f[bD(0x3da)](b[bD(0x128)], {
                'className': j(bD(0x2d8), b[bD(0x3c4)]),
                'onClick': () => ai(ao),
                'style': {
                    'backgroundColor': ap ? am[bD(0x269)] || b[bD(0x1a2)] : '',
                    'borderColor': ap ? am[bD(0x34b)] || b[bD(0x260)] : b[bD(0x2ce)]
                },
                'children': [au ? f['jsx'](l, {
                    'size': 0xf,
                    'className': 'flex-shrink-0'
                }) : f[bD(0x136)](m, {
                    'size': 0xf,
                    'className': b['oXGKM']
                }), f[bD(0x136)]('span', {
                    'className': b['dZAlX'],
                    'children': b['hdzeW'](ar, b[bD(0x382)]) ? b['hzQtf'] : an
                }), f['jsx'](n, {
                    'size': 0xd,
                    'className': j(b[bD(0x27b)], af[bD(0x15d)] < 0x2 ? b['aJOXX'] : bD(0x189)),
                    'onClick': av => {
                        const bE = bD;
                        av['stopPropagation'](),
                        at[bE(0x2e7)](af['length'], 0x1) && (ap && at['uwjTe'](ak, ao),
                        ah(ao));
                    }
                })]
            }, ao);
        }
        ), f[bC(0x136)](bC(0x3b9), {
            'disabled': af['length'] >= 0x14,
            'className': j(bC(0x186), b[bC(0x25a)], bC(0x24a), b[bC(0x3c2)](am['type'], 'light') ? bC(0x1e4) : 'hover:bg-[#a7a7a7]', af[bC(0x15d)] >= 0x14 ? b[bC(0x29b)] : ''),
            'onClick': () => {
                const bF = bC;
                if (b['yFNFg'](af[bF(0x15d)], 0x14)) {
                    let an = crypto[bF(0x240)]();
                    ag({
                        'title': bF(0x28b),
                        'id': an,
                        'url': bF(0x17a)
                    }),
                    ai(an);
                }
            }
            ,
            'children': f[bC(0x136)](o, {
                'size': 0xf
            })
        })]
    });
}
  , ys = [bc(0x2d0), 'play.geforcenow.com']
  , ze = [{
    'appName': 'Google',
    'desc': bc(0x1f6),
    'icon': bc(0x23e),
    'url': 'https://google.com',
    'disabled': !0x1
}, {
    'appName': 'Bing',
    'desc': bc(0x100),
    'icon': '/assets/img/bing.webp',
    'url': bc(0x19b),
    'disabled': !0x1
}, {
    'appName': 'Pinterest',
    'desc': bc(0x2dd),
    'icon': bc(0x2c2),
    'url': 'https://pinterest.com',
    'disabled': !0x1
}, {
    'appName': 'Twitch',
    'desc': bc(0x387),
    'icon': bc(0x2ba),
    'url': bc(0x244),
    'disabled': !0x1
}, {
    'appName': 'Movies/TV',
    'desc': bc(0x1d5),
    'icon': '/assets/img/movie-logo.webp',
    'url': 'https://beech.watch',
    'disabled': !0x1
}, {
    'appName': 'GeForce\x20NOW',
    'desc': bc(0x21d),
    'icon': bc(0x117),
    'url': bc(0x2a2),
    'disabled': !0x1
}, {
    'appName': bc(0x3d9),
    'desc': 'Step-by-step\x20math\x20solver\x20powered\x20by\x20Symbolab.',
    'icon': bc(0x18f),
    'url': 'https://symbolab.com',
    'disabled': !0x1
}, {
    'appName': 'CoolMathapps',
    'desc': 'Fun\x20logic\x20and\x20math\x20games\x20at\x20Coolmath\x20Games!',
    'icon': bc(0x389),
    'url': 'https://coolmathgames.com',
    'disabled': !0x1
}, {
    'appName': bc(0x12b),
    'desc': bc(0x30a),
    'icon': bc(0x1a1),
    'url': 'https://9animetv.to',
    'disabled': !0x1
}, {
    'appName': bc(0x37a),
    'desc': bc(0x1d1),
    'icon': 'https://play-lh.googleusercontent.com/91TVBW8CFsOsbh7r3Y-kACNVYely0I7C-UcYP3-Jw-_MHCtfa_18i_4L7ozvGMoI9bk',
    'url': 'https://crazygames.com',
    'disabled': !0x1
}, {
    'appName': bc(0x171),
    'desc': bc(0x10b),
    'icon': bc(0x149),
    'url': bc(0x31f),
    'disabled': !0x1
}, {
    'appName': 'FMHY.net',
    'desc': 'The\x20largest\x20collection\x20of\x20free\x20stuff\x20on\x20the\x20internet!',
    'icon': '/assets/img/fmhy.webp',
    'url': bc(0x252),
    'disabled': !0x1
}, {
    'appName': bc(0x37f),
    'desc': bc(0x1da),
    'icon': '/assets/img/discord.webp',
    'url': bc(0x2c1),
    'disabled': !0x1
}, {
    'appName': 'YouTube',
    'desc': bc(0x1bf),
    'icon': bc(0x24c),
    'url': 'https://youtube.com',
    'disabled': !0x1
}, {
    'appName': 'Reddit',
    'desc': 'Community\x20discussion,\x20news,\x20memes,\x20and\x20more.',
    'icon': '/assets/img/reddit.webp',
    'url': bc(0x1d3),
    'disabled': !0x1
}, {
    'appName': bc(0x2d2),
    'desc': bc(0x2ee),
    'icon': 'https://www.google.com/s2/favicons?sz=128&domain=wikipedia.org',
    'url': bc(0x302),
    'disabled': !0x1
}, {
    'appName': bc(0x377),
    'desc': 'Host,\x20review,\x20and\x20collaborate\x20on\x20code.',
    'icon': bc(0x267),
    'url': bc(0x23b),
    'disabled': !0x1
}, {
    'appName': bc(0x288),
    'desc': bc(0x20d),
    'icon': bc(0x33e),
    'url': 'https://mail.google.com',
    'disabled': !0x1
}, {
    'appName': bc(0x2c3),
    'desc': 'Email\x20and\x20calendar\x20from\x20Microsoft.',
    'icon': bc(0x310),
    'url': bc(0x3b5),
    'disabled': !0x1
}, {
    'appName': 'Netflix',
    'desc': bc(0x14c),
    'icon': 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
    'url': 'https://netflix.com',
    'disabled': !0x1
}, {
    'appName': bc(0x1f9),
    'desc': bc(0x273),
    'icon': bc(0x2b9),
    'url': bc(0x14f),
    'disabled': !0x1
}, {
    'appName': 'X\x20(Twitter)',
    'desc': bc(0x1e2),
    'icon': '/assets/img/twitter-x.webp',
    'url': 'https://x.com/i/flow/login',
    'disabled': !0x1
}, {
    'appName': bc(0x3cc),
    'desc': bc(0x312),
    'icon': bc(0x31a),
    'url': bc(0x238),
    'disabled': !0x1
}]
  , Fe = JSON[bc(0x138)](bc(0x1ec))
  , Me = {
    'default': [{
        'appName': 'App\x20name',
        'desc': 'App\x20description',
        'icon': '',
        'url': '#',
        'disabled': !0x1
    }],
    'apps': ze,
    'games': Fe
}
  , ha = Object['freeze'](Object[bc(0x299)]({
    '__proto__': null,
    'apps': ze,
    'default': Me,
    'games': Fe
}, Symbol['toStringTag'], {
    'value': bc(0x218)
}))
  , fe = new TextEncoder()[bc(0x1a8)](btoa(new Date()['toISOString']()['slice'](0x0, 0xa) + location[bc(0x120)])[bc(0x11a)]('')['reverse']()['join']('')[bc(0x2d6)](6.7))
  , ue = {
    'enc': b => {
        const bG = bc;
        if (!b)
            return b;
        try {
            const c = new TextEncoder()['encode'](b)
              , af = new Uint8Array(c['length']);
            for (let ag = 0x0; ag < c['length']; ag++)
                af[ag] = c[ag] ^ fe[ag % 0x8];
            return Array['from'](af, ah => ah['toString'](0x10)['padStart'](0x2, '0'))[bG(0xfa)]('');
        } catch {
            return b;
        }
    }
    ,
    'dnc': b => {
        const bH = bc
          , c = {
            'ipfVG': function(af, ag) {
                return af - ag;
            },
            'rjEKJ': function(af, ag) {
                return af + ag;
            },
            'hxzlH': function(af, ag) {
                return af < ag;
            },
            'zFzAf': function(af, ag) {
                return af <= ag;
            },
            'jwbKt': function(af, ag) {
                return af >= ag;
            },
            'ejSTj': function(af, ag) {
                return af <= ag;
            },
            'SMMGS': function(af, ag) {
                return af % ag;
            }
        };
        if (!b)
            return b;
        try {
            const af = c[bH(0x142)](Math['min'](b['indexOf']('?') + 0x1 || b['length'] + 0x1, c['rjEKJ'](b[bH(0x29f)]('#'), 0x1) || b[bH(0x15d)] + 0x1, b['indexOf']('&') + 0x1 || b[bH(0x15d)] + 0x1), 0x1);
            let ag = 0x0;
            for (let aj = 0x0; aj < af && c['hxzlH'](aj, b['length']); aj++) {
                const ak = b[bH(0x173)](aj);
                if (!(ak >= 0x30 && c['zFzAf'](ak, 0x39) || c[bH(0x307)](ak, 0x41) && c['ejSTj'](ak, 0x46) || ak >= 0x61 && ak <= 0x66))
                    break;
                ag = aj + 0x1;
            }
            if (c['hxzlH'](ag, 0x2) || c['SMMGS'](ag, 0x2))
                return decodeURIComponent(b);
            const ah = ag >> 0x1
              , ai = new Uint8Array(ah);
            for (let al = 0x0; al < ah; al++) {
                const am = al << 0x1;
                ai[al] = parseInt(b[am] + b[am + 0x1], 0x10) ^ fe[al % 0x8];
            }
            return new TextDecoder()[bH(0x368)](ai) + b['slice'](ag);
        } catch {
            return decodeURIComponent(b);
        }
    }
}
  , ge = (b, c) => {
    const bI = bc
      , af = {
        'SVorY': function(ah, ai) {
            return ah(ai);
        }
    }
      , ag = b[bI(0x257)]();
    return ag ? /^https?:\/\//i[bI(0x24d)](ag) || /^[\w-]+\.[\w.-]+/i['test'](ag) || ag[bI(0x398)]('localhost') ? ag['startsWith']('http') ? ag : 'https://' + ag : c + af[bI(0x301)](encodeURIComponent, ag) : '';
}
  , Ns = new Set([...ys, ...Object['values'](Me[bc(0x395)] || {})[bc(0x362)](a => a['filter'](b => b[bc(0x247)] && !b['local'])['map'](b => {
    const bJ = bc;
    try {
        return new URL(b['url'][bJ(0x398)]('http') ? b[bJ(0x247)] : bJ(0x2bb) + b[bJ(0x247)])['hostname'][bJ(0x3df)](/^www\./, '');
    } catch {
        return null;
    }
}
)['filter'](Boolean))])
  , D = (b, af=!0x1, ag, ah='https://www.google.com/search?q=') => {
    const bK = bc
      , ai = {
        'eSrFn': bK(0x386),
        'NwLAF': bK(0x148),
        'QJxGP': function(ak, al, am) {
            return ak(al, am);
        },
        'JrwDA': '/scramjet/'
    };
    let aj;
    switch (ag) {
    case 'uv':
        aj = ai['eSrFn'];
        break;
    case ai[bK(0x328)]:
        aj = '/scramjet/';
        break;
    default:
        const ak = ai[bK(0x31b)](ge, b, ah);
        aj = [...Ns][bK(0x2a6)](al => ak['includes'](al)) ? bK(0x1b2) : ai['eSrFn'];
    }
    if (af) {
        const al = b['split'](bK(0x386))[0x1]
          , am = b[bK(0x11a)](ai['JrwDA'])[0x1]
          , an = al ? ue['dnc'](al) : am ? decodeURIComponent(am) : b;
        return an[bK(0x193)]('/') ? an['slice'](0x0, -0x1) : an;
    } else {
        const ao = ge(b, ah)
          , ap = aj === ai[bK(0x2b5)] ? encodeURIComponent(ao) : ue['enc'](ao);
        return location[bK(0x2c0)] + '//' + location[bK(0x120)] + aj + ap;
    }
}
;
function Ss(b) {
    const bL = bc;
    var c = window['open']();
    c[bL(0x268)]['body']['style'][bL(0x141)] = '0',
    c['document']['body']['style'][bL(0x383)] = '100vh';
    var af = c['document']['createElement']('iframe');
    af[bL(0x32d)][bL(0x22e)] = 'none',
    af['style'][bL(0x126)] = '100%',
    af[bL(0x32d)][bL(0x383)] = bL(0x330),
    af['style']['margin'] = '0',
    af['src'] = b,
    c['document']['body']['appendChild'](af);
}
const L = ({Icon: b, size: c=0xf, action: af= () => alert(bc(0x325)), disabled: ag=!0x1}) => {
    const bM = bc
      , ah = {
        'hyZYi': 'light',
        'MQNNW': bM(0x2a4)
    }
      , {options: ai} = T();
    return f[bM(0x136)](bM(0x3b9), {
        'className': j('flex\x20justify-center\x20items-center', bM(0x163), ag ? 'cursor-not-allowed\x20opacity-70' : '', ai[bM(0x113)] != ah[bM(0x179)] ? ah[bM(0x381)] : bM(0x3ad)),
        'onClick': aj => {
            ag || af(aj);
        }
        ,
        'children': f['jsx'](b, {
            'size': c
        })
    });
}
  , js = () => {
    const bN = bc
      , af = {
        'EzLDt': function(aC, aD) {
            return aC(aD);
        },
        'gLalV': 'auto',
        'INxYd': function(aC, aD) {
            return aC !== aD;
        },
        'fHunu': function(aC, aD, aE) {
            return aC(aD, aE);
        },
        'EWICa': function(aC, aD) {
            return aC(aD);
        },
        'ntYmW': function(aC, aD) {
            return aC === aD;
        },
        'tZXRi': bN(0x1dc),
        'dNahs': function(aC) {
            return aC();
        },
        'UyWRj': function(aC, aD) {
            return aC(aD);
        },
        'HsGtC': function(aC) {
            return aC();
        },
        'PnMmx': bN(0x353),
        'SryMr': function(aC, aD, aE) {
            return aC(aD, aE);
        },
        'HcLFc': bN(0x289),
        'HMSOn': bN(0x132),
        'yEIvr': function(aC, aD) {
            return aC == aD;
        },
        'JSKln': '#a1a1a173',
        'EvIOy': 'input',
        'pPNzq': 'tabs://new'
    }
      , [ag,ah] = r[bN(0x303)](p)
      , ai = af['UyWRj'](B, aC => aC['tabs']['find'](aD => aD['active']))
      , {updateUrl: aj, refreshTab: ak, goBack: al, goForward: am, toggleTabs: an, toggleMenu: ao, showUI: ap} = B()
      , aq = r['useRef'](null)
      , {options: ar} = af[bN(0x3d2)](T)
      , {state: at} = t()
      , au = u()
      , {iframeUrls: av} = B()
      , aw = aC => aC?.['includes']('/uv/service/') || aC?.[bN(0x3d3)](bN(0x1b2))
      , ax = aC => !aC || aC === bN(0x17a) || aC[bN(0x193)]('/new')
      , ay = aC => {
        const bO = bN;
        if (ax(aC))
            af['EzLDt'](ah, p);
        else {
            if (aw(aC)) {
                const aD = D(aC, !0x0, ar[bO(0x208)] || af[bO(0x391)], ar[bO(0x168)] || void 0x0);
                af['EzLDt'](ah, aD[bO(0x398)](bO(0x2bb)) ? F : p);
            } else
                af[bO(0x261)](ah, p);
        }
    }
      , az = aC => {
        const bP = bN;
        if (ax(aC))
            return '';
        if (aw(aC)) {
            const aD = D(aC, !0x0, ar[bP(0x208)] || af[bP(0x391)], ar['engine'] || void 0x0);
            return aD['startsWith']('https://') ? aD['slice'](0x8) : aD;
        }
        return aC;
    }
      , [aA,aB] = r[bN(0x303)](az(ai?.[bN(0x247)]));
    return r[bN(0x144)]( () => {
        const bQ = bN
          , aC = av[ai?.['id']];
        ai?.['url'] === bQ(0x17a) ? af['EzLDt'](aB, '') : aC && af[bQ(0x164)](aC, 'about:blank') && (aB(az(aC)),
        ay(aC));
    }
    , [av, ai?.['id']]),
    r['useEffect']( () => {
        const bR = bN;
        at?.['url'] && ai && (af['fHunu'](aj, ai['id'], D(at[bR(0x247)], !0x1, ar['prType'] || bR(0x19c), ar[bR(0x168)] || void 0x0)),
        au('.', {
            'replace': !0x0,
            'state': {}
        }));
    }
    , [at?.['url'], ai?.['id']]),
    r[bN(0x144)]( () => {
        const bS = bN;
        ai && ay(ai[bS(0x247)]);
    }
    , [ai]),
    f['jsxs'](bN(0x2c4), {
        'className': af[bN(0x32a)](j, af[bN(0x1df)], ap ? '' : bN(0x107)),
        'children': [f['jsx'](L, {
            'Icon': v,
            'size': '17',
            'action': () => ai && al(ai['id'], () => {
                af['EWICa'](aB, '');
            }
            )
        }), f['jsx'](L, {
            'Icon': w,
            'size': '17',
            'action': () => ai && am(ai['id'])
        }), f[bN(0x136)](L, {
            'Icon': x,
            'size': '16',
            'action': () => ai && ak(ai['id'])
        }), f['jsxs'](bN(0x2c4), {
            'className': af['SryMr'](j, af['HcLFc'], af[bN(0x27d)]),
            'style': {
                'backgroundColor': ar['omninputColor'] || '#06080d8f',
                'borderColor': af[bN(0x332)](ar[bN(0x113)], 'light') ? af['JSKln'] : '#efefef30'
            },
            'children': [f['jsx'](ag, {
                'size': '15'
            }), f['jsx'](af['EvIOy'], {
                'className': bN(0x22f),
                'placeholder': 'Search\x20with\x20Google\x20or\x20enter\x20address',
                'onSelect': () => ah(y),
                'onBlur': () => ay(av[ai?.['id']]),
                'value': aA,
                'ref': aq,
                'onChange': aC => aB(aC['target']['value']),
                'onKeyDown': aC => {
                    const bT = bN;
                    af[bT(0x1f2)](aC[bT(0x3de)], af[bT(0x2eb)]) && ai && aA[bT(0x15d)] !== 0x0 && (aj(ai['id'], D(aA, !0x1, ar[bT(0x208)] || bT(0x19c), ar[bT(0x168)] || void 0x0)),
                    aq[bT(0x1fd)]['blur']());
                }
            })]
        }), f[bN(0x136)](L, {
            'Icon': z,
            'size': '15',
            'action': () => Ss(ai?.['url']),
            'disabled': ai?.['url'] == af[bN(0x36d)]
        }), f[bN(0x136)](L, {
            'Icon': A,
            'size': '17',
            'action': an
        }), f['jsx'](L, {
            'Icon': C,
            'size': '17',
            'action': aC => {
                const bU = bN;
                aC?.['stopPropagation'](),
                af[bU(0x34a)](ao);
            }
        })]
    });
}
  , Cs = (b, c) => {
    let af;
    return (...ag) => {
        af || (b['apply'](void 0x0, ag),
        af = !0x0,
        setTimeout( () => af = !0x1, c));
    }
    ;
}
  , As = {
    'color': bc(0x1f3),
    'size': 0x96,
    'blur': 0x14,
    'opacity': 0.4,
    'transition': 0xc8
};
function Bs(b={}) {
    const bV = bc
      , af = {
        'InYQk': function(ar, at) {
            return ar - at;
        },
        'zNIGo': function(ar, at) {
            return ar / at;
        },
        'WoRng': function(ar, at) {
            return ar - at;
        },
        'dMzhK': 'div'
    }
      , ag = r['useRef'](null)
      , ah = r[bV(0x394)](null)
      , [ai,aj] = r[bV(0x303)](!0x1)
      , ak = r['useRef'](!0x1)
      , al = r[bV(0x373)]( () => ({
        ...As,
        ...b
    }), [b])
      , am = r[bV(0x373)]( () => ({
        'position': 'absolute',
        'pointerEvents': bV(0x1aa),
        'zIndex': 0xa,
        'width': al[bV(0x1ca)] + 'px',
        'height': al['size'] + 'px',
        'background': 'radial-gradient(circle,\x20rgba(' + al['color'] + ',\x20' + al['opacity'] + bV(0x384) + al[bV(0x327)] + ',\x20' + al['opacity'] * 0.5 + bV(0x151),
        'borderRadius': bV(0x27f),
        'filter': 'blur(' + al[bV(0x12f)] + bV(0x308),
        'transition': 'opacity\x20' + al['transition'] + bV(0x335),
        'willChange': 'transform,\x20opacity',
        'transform': 'translate3d(-50%,\x20-50%,\x200)'
    }), [al['size'], al[bV(0x327)], al[bV(0x106)], al['blur'], al[bV(0x13f)]])
      , an = r['useCallback'](Cs(ar => {
        const bW = bV;
        if (!ag['current'] || !ah[bW(0x1fd)] || !ak[bW(0x1fd)])
            return;
        const at = ag[bW(0x1fd)][bW(0x336)]()
          , au = ar[bW(0x286)] - at[bW(0x2f8)]
          , av = ar['clientY'] - at['top'];
        ah['current'][bW(0x32d)][bW(0x291)] = 'translate3d(' + af['InYQk'](au, af[bW(0xfd)](al['size'], 0x2)) + 'px,\x20' + af[bW(0x290)](av, al['size'] / 0x2) + bW(0x2d5);
    }
    , 0x8), [al['size']])
      , ao = r['useCallback']( () => {
        aj(!0x0),
        ak['current'] = !0x0;
    }
    , [])
      , ap = r['useCallback']( () => {
        aj(!0x1),
        ak['current'] = !0x1;
    }
    , []);
    r[bV(0x144)]( () => {
        const bX = bV
          , ar = ag['current'];
        if (ar)
            return ar['addEventListener']('mouseenter', ao, {
                'passive': !0x0
            }),
            ar['addEventListener'](bX(0x225), ap, {
                'passive': !0x0
            }),
            ar['addEventListener']('mousemove', an, {
                'passive': !0x0
            }),
            () => {
                const bY = bX;
                ar[bY(0x1bd)](bY(0x30d), ao),
                ar[bY(0x1bd)](bY(0x225), ap),
                ar[bY(0x1bd)](bY(0xfc), an);
            }
            ;
    }
    , [ao, ap, an]);
    const aq = f[bV(0x136)](af['dMzhK'], {
        'ref': ah,
        'style': {
            ...am,
            'opacity': ai ? 0x1 : 0x0
        }
    });
    return {
        'elementRef': ag,
        'glowElement': aq,
        'isHovering': ai
    };
}
function Ps({children: b, className: af='', glowOptions: ag={}, as: ah='div', style: ai={}, ...aj}) {
    const bZ = bc
      , {elementRef: ak, glowElement: al} = Bs(ag)
      , am = r['useMemo']( () => ({
        'position': bZ(0x213),
        'overflow': bZ(0x107),
        'isolation': 'isolate',
        'contain': bZ(0x1fc),
        ...ai
    }), [ai]);
    return f['jsxs'](ah, {
        'ref': ak,
        'className': af,
        'style': am,
        ...aj,
        'children': [al, b]
    });
}
const ce = r['memo']( ({options: b, action: c, width: af, height: ag}) => {
    const c0 = bc
      , ah = {
        'gVOlh': c0(0x111),
        'uPqKy': c0(0x3bc),
        'TXrVN': function(al) {
            return al();
        }
    }
      , {options: ai} = ah[c0(0x140)](T)
      , aj = r['useMemo']( () => {
        const c1 = c0
          , al = ai['type'] === ah['gVOlh'] ? {
            'filter': ah[c1(0x176)]
        } : {}
          , am = {
            ...af && {
                'width': af
            },
            ...ag && {
                'height': ag
            }
        };
        return {
            ...al,
            ...am
        };
    }
    , [ai['type'], af, ag])
      , ak = r[c0(0x373)]( () => j(b, c && c0(0x18e), c0(0x123)), [b, c]);
    return f['jsx']('img', {
        'src': '/logo.svg',
        'className': ak,
        'id': 'btn-logo',
        'draggable': 'false',
        'alt': c0(0x352),
        'onClick': c,
        'style': aj
    });
}
);
ce['displayName'] = bc(0x283);
const Is = 'er5fvg8\x20bnl15p1\x20n8lfdoj\x20ir2hl4z\x20e6f0ft3'
  , Rs = bc(0x315)
  , Ts = 'odk3eom\x20ojurkzg\x20ljvfqwo\x20iuhk0jm\x20cop8yit\x20ch7sgd3'
  , zs = bc(0x374)
  , K = {
    'nav-backgroundColor': bc(0x194),
    'searchBarColor': Is,
    'searchResultStyle': Rs,
    'settings-panelColor': bc(0x1b7),
    'settings-contentColor': bc(0x39b),
    'appsSearchColor': Ts,
    'appItemColor': zs,
    'theme-default': 'lzmrelo',
    'theme-mocha': 'ow7qdkd',
    'theme-dark': bc(0x2dc),
    'theme-light': bc(0x2f4),
    'theme-forest': bc(0x33b),
    'theme-stellar': bc(0x29d),
    'theme-paper': bc(0x275)
}
  , Fs = r['memo'](function({logo: af=!0x0, cls: ag, nav: ah=!0x0, navigating: ai}) {
    const c2 = bc
      , aj = {
        'uGxmu': c2(0x259),
        'VtNAt': function(aA, aB) {
            return aA(aB);
        },
        'PXvJL': function(aA, aB) {
            return aA === aB;
        },
        'UvitO': function(aA, aB) {
            return aA(aB);
        },
        'zcJmP': function(aA, aB) {
            return aA || aB;
        },
        'bAMWv': function(aA, aB) {
            return aA && aB;
        },
        'JtnrK': 'bounce-up',
        'joSCU': function(aA, aB) {
            return aA && aB;
        },
        'ODQIS': c2(0x2c4),
        'rrPeK': c2(0x20c),
        'ogxiN': 'default',
        'uyXEc': c2(0x29c),
        'uTEau': c2(0x2a0),
        'BiwtC': 'w-[1.08rem]\x20h-[1.08rem]\x20shrink-0',
        'rUICB': function(aA, aB) {
            return aA > aB;
        }
    }
      , [ak,al] = r[c2(0x303)]('')
      , [am,an] = r['useState']([])
      , ao = r[c2(0x394)](null)
      , ap = r[c2(0x394)]('')
      , aq = u()
      , {options: ar} = T()
      , at = r[c2(0x3b8)](async aA => {
        const c3 = c2;
        if (!aA[c3(0x257)]()) {
            an([]);
            return;
        }
        ap['current'] = aA;
        try {
            const aB = await fetch(aj[c3(0x2b0)] + encodeURIComponent(aA));
            if (!aB['ok'])
                return aj['VtNAt'](an, []);
            const aC = await aB['json']();
            if (ap['current'] !== aA)
                return;
            const aD = Array['isArray'](aC) ? aC[c3(0x1bc)](aE => aE[c3(0x187)])['slice'](0x0, 0x4) : [];
            r[c3(0x3dc)]( () => an(aD));
        } catch {
            aj[c3(0x2af)](ap[c3(0x1fd)], aA) && an([]);
        }
    }
    , [])
      , au = aA => {
        const c4 = c2;
        ah ? aq('/search', {
            'state': {
                'url': aA
            }
        }) : ai['go'](ai['id'], ai[c4(0x1e1)](aA));
    }
      , av = r['useCallback'](aA => {
        const c5 = c2
          , aB = aA['target']['value'];
        if (al(aB),
        ao[c5(0x1fd)] && clearTimeout(ao['current']),
        !aB[c5(0x257)]()) {
            ap[c5(0x1fd)] = '',
            aj[c5(0x1a0)](an, []);
            return;
        }
        ao['current'] = setTimeout( () => at(aB), 0x12c);
    }
    , [at])
      , aw = r[c2(0x3b8)](aA => {
        const c6 = c2;
        if (aA['key'] !== c6(0x1dc))
            return;
        const aB = ak['trim']();
        aB && aj[c6(0x1a0)](au, aB);
    }
    , [ak, au])
      , ax = r[c2(0x3b8)](aA => {
        au(aA);
    }
    , [au]);
    r[c2(0x144)]( () => () => ao['current'] && clearTimeout(ao[c2(0x1fd)]), []);
    const ay = r['useMemo']( () => c2(0x37c) + (ar[c2(0x347)] || c2(0x167)) + '\x20or\x20type\x20URL', [ar[c2(0x347)]])
      , az = r[c2(0x373)]( () => ar[c2(0x204)] ?? c2(0x200), [ar[c2(0x204)]]);
    return f[c2(0x3da)]('div', {
        'className': j(aj[c2(0x14a)](ag, 'absolute\x20w-full\x20px-20\x20py-4\x20flex\x20flex-col\x20items-center\x20mt-8\x20z-50')),
        'data-m': aj['bAMWv'](!ag, aj[c2(0x1a7)]),
        'data-m-duration': aj['joSCU'](!ag, c2(0x23f)),
        'children': [af && f[c2(0x136)](ce, {
            'options': c2(0x2e0)
        }), f['jsx'](Ps, {
            'glowOptions': {
                'color': ar[c2(0x1ac)] || c2(0x21c),
                'size': 0x46,
                'opacity': 0.2
            },
            'children': f['jsxs'](c2(0x2c4), {
                'className': 'w-[40.625rem]',
                'children': [f[c2(0x3da)](aj[c2(0x33d)], {
                    'id': c2(0x321),
                    'className': j('flex\x20items-center\x20gap-3\x20shadow-xl\x20pl-4\x20pr-4\x20w-full\x20h-[3.41rem]', am['length'] ? aj[c2(0x346)] : 'rounded-[14px]', K[c2(0x219)], K['theme-' + (ar['theme'] || aj[c2(0x37d)])]),
                    'children': [az ? f['jsx'](c2(0x251), {
                        'src': az,
                        'className': 'w-5\x20h-5\x20shrink-0',
                        'alt': c2(0x102),
                        'loading': c2(0x313)
                    }) : f['jsx'](I, {
                        'size': 0x16
                    }), f[c2(0x136)](aj[c2(0x357)], {
                        'type': c2(0x185),
                        'placeholder': ay,
                        'className': c2(0x2ac),
                        'autoComplete': aj['uTEau'],
                        'value': ak,
                        'onChange': av,
                        'onKeyDown': aw
                    }), f['jsx'](y, {
                        'className': aj[c2(0x17b)]
                    })]
                }), aj[c2(0x1e0)](am[c2(0x15d)], 0x0) && f[c2(0x136)](c2(0x2c4), {
                    'className': j('shadow-xl\x20mt-0\x20p-2\x20text-[14px]\x20w-full\x20rounded-b-[14px]\x20space-y-1', K['searchResultStyle'], K[c2(0x278) + (ar[c2(0x17d)] || 'default')]),
                    'children': am[c2(0x27c)](aA => f[c2(0x3da)](c2(0x2c4), {
                        'className': c2(0x3c6),
                        'onClick': () => ax(aA['phrase']),
                        'children': [f[c2(0x3da)](c2(0x234), {
                            'xmlns': 'http://www.w3.org/2000/svg',
                            'width': '16',
                            'height': '16',
                            'viewBox': '0\x200\x2024\x2024',
                            'fill': c2(0x1aa),
                            'stroke': c2(0x13a),
                            'strokeWidth': '2',
                            'strokeLinecap': c2(0x370),
                            'strokeLinejoin': c2(0x370),
                            'style': {
                                'marginRight': c2(0x2c9)
                            },
                            'children': [f['jsx'](c2(0x202), {
                                'cx': '11',
                                'cy': '11',
                                'r': '8'
                            }), f['jsx']('path', {
                                'd': c2(0x162)
                            })]
                        }), f[c2(0x136)]('span', {
                            'className': 'text-[15px]',
                            'children': aA['phrase']
                        })]
                    }, aA[c2(0x187)]))
                })]
            })
        })]
    });
})
  , te = ({name: b, type: c, state: af}) => {
    const c7 = bc
      , {options: ag} = T()
      , [ah,ai] = af;
    return f[c7(0x3da)](R, {
        'children': [f['jsx'](S, {
            'className': c7(0x316),
            'children': b
        }), f[c7(0x136)](W, {
            'className': j('w-full\x20h-10\x20pl-3\x20rounded-lg\x20outline-0\x20border', ag[c7(0x113)] == c7(0x111) ? 'bg-black/15' : 'bg-black/35'),
            'value': ah[c],
            'onChange': aj => ai({
                ...ah,
                [c]: aj[c7(0x376)][c7(0x2d4)]
            })
        })]
    });
}
  , Ms = ({state: b, set: af, update: ag}) => {
    const c8 = bc
      , ah = {
        'dlkwD': function(ap, aq) {
            return ap(aq);
        },
        'nUhDV': c8(0x159),
        'jMOaE': 'div',
        'uAqkm': c8(0x274),
        'cZCHY': 'URL',
        'pvIhT': c8(0x38b),
        'PHlzD': 'Cancel',
        'kqEdS': function(ap) {
            return ap();
        },
        'upkoB': 'cursor-pointer\x20hover:opacity-80'
    }
      , {options: ai} = T()
      , [aj,ak] = r[c8(0x303)]({
        'name': '',
        'icon': '',
        'link': ''
    })
      , al = ap => /^(https?:)?\/\//['test'](ap) ? ap : c8(0x2bb) + ap
      , am = () => ak({
        'name': '',
        'icon': '',
        'link': ''
    })
      , an = () => {
        const c9 = c8;
        af(!0x1),
        ag({
            ...aj,
            'link': ah['dlkwD'](al, aj['link'][c9(0x257)]()),
            'icon': al(aj['icon']['trim']())
        }),
        am();
    }
      , ao = () => !!(aj['name'] && aj[c8(0x3b3)]);
    return f['jsx'](f[c8(0x2fb)], {
        'children': f[c8(0x136)](M, {
            'open': b,
            'onClose': () => af(!0x1),
            'className': ah[c8(0x190)],
            'children': f['jsx'](ah[c8(0x20b)], {
                'className': ah[c8(0x14b)],
                'children': f['jsxs'](N, {
                    'className': c8(0x10f),
                    'style': {
                        'backgroundColor': ai['quickModalBgColor'] || '#252f3e'
                    },
                    'children': [f[c8(0x136)](O, {
                        'className': c8(0x1e3),
                        'children': c8(0x3d6)
                    }), f[c8(0x136)](te, {
                        'name': 'Name',
                        'type': c8(0x105),
                        'state': [aj, ak]
                    }), f[c8(0x136)](te, {
                        'name': ah['cZCHY'],
                        'type': c8(0x3b3),
                        'state': [aj, ak]
                    }), f[c8(0x136)](te, {
                        'name': ah[c8(0x180)],
                        'type': c8(0x329),
                        'state': [aj, ak]
                    }), f[c8(0x3da)]('div', {
                        'className': 'absolute\x20bottom-5\x20right-5\x20flex\x20flex-row\x20gap-5',
                        'children': [f['jsx'](P, {
                            'onClick': () => {
                                af(!0x1),
                                am();
                            }
                            ,
                            'className': 'cursor-pointer\x20duration-150\x20hover:opacity-80',
                            'children': ah['PHlzD']
                        }), f['jsx'](P, {
                            'onClick': ah[c8(0x157)](ao) && ( () => an()),
                            'className': j(ah['kqEdS'](ao) ? ah[c8(0x1be)] : c8(0x2bc), 'duration-150'),
                            'children': c8(0x348)
                        })]
                    })]
                })
            })
        })
    });
}
  , le = ({name: b, type: c, state: af}) => {
    const cb = bc
      , ag = {
        'ZlGCX': function(ak, al, am) {
            return ak(al, am);
        },
        'uvKEw': 'w-full\x20h-10\x20pl-3\x20rounded-lg\x20outline-0\x20border',
        'xRKhZ': function(ak, al) {
            return ak == al;
        }
    }
      , {options: ah} = T()
      , [ai,aj] = af;
    return f[cb(0x3da)](R, {
        'children': [f[cb(0x136)](S, {
            'className': cb(0x316),
            'children': b
        }), f[cb(0x136)](W, {
            'className': ag[cb(0x392)](j, ag['uvKEw'], ag[cb(0x22b)](ah[cb(0x113)], cb(0x111)) ? cb(0x1a9) : cb(0x29e)),
            'value': ai[c],
            'onChange': ak => aj({
                ...ai,
                [c]: ak['target'][cb(0x2d4)]
            })
        })]
    });
}
  , Ds = ({state: b, set: af, update: ag, initialData: ah}) => {
    const cc = bc
      , ai = {
        'ClqxK': function(aq, ar) {
            return aq && ar;
        },
        'fGTRi': function(aq, ar) {
            return aq(ar);
        },
        'rxugG': function(aq) {
            return aq();
        },
        'FUfaN': cc(0x2c4),
        'WgtlB': 'Edit\x20shortcut',
        'sRlRm': 'Name',
        'MnUbA': cc(0x105),
        'kXQeN': 'URL',
        'tjrig': cc(0x329),
        'UMDGC': cc(0x2cf),
        'YMeAo': cc(0x396)
    }
      , {options: aj} = T()
      , [ak,al] = r['useState']({
        'name': '',
        'icon': '',
        'link': ''
    });
    r['useEffect']( () => {
        const cd = cc;
        ai['ClqxK'](ah, b) && al({
            'name': ah[cd(0x105)] || '',
            'icon': ah[cd(0x329)] || '',
            'link': ah['link'] || ''
        });
    }
    , [ah, b]);
    const am = aq => /^(https?:)?\/\//['test'](aq) ? aq : cc(0x2bb) + aq
      , an = () => {
        al({
            'name': '',
            'icon': '',
            'link': ''
        });
    }
      , ao = () => {
        const cf = cc;
        af(!0x1),
        ag({
            ...ak,
            'link': am(ak['link'][cf(0x257)]()),
            'icon': ai['fGTRi'](am, ak['icon']['trim']())
        }),
        ai[cf(0x3a2)](an);
    }
      , ap = () => ak[cc(0x105)] && ak[cc(0x3b3)];
    return f[cc(0x136)](M, {
        'open': b,
        'onClose': () => af(!0x1),
        'className': 'fixed\x20inset-0\x20bg-black/40\x20z-50',
        'children': f[cc(0x136)](ai['FUfaN'], {
            'className': cc(0x274),
            'children': f[cc(0x3da)](N, {
                'className': 'w-[30rem]\x20h-[20.8rem]\x20p-5\x20rounded-xl\x20relative\x20flex\x20flex-col\x20gap-3\x20shadow-2xl',
                'style': {
                    'backgroundColor': aj['quickModalBgColor'] || '#252f3e'
                },
                'children': [f['jsx'](O, {
                    'className': 'text-[1rem]\x20mb-1',
                    'children': ai[cc(0x12c)]
                }), f['jsx'](le, {
                    'name': ai['sRlRm'],
                    'type': ai['MnUbA'],
                    'state': [ak, al]
                }), f[cc(0x136)](le, {
                    'name': ai['kXQeN'],
                    'type': cc(0x3b3),
                    'state': [ak, al]
                }), f['jsx'](le, {
                    'name': 'Icon\x20URL',
                    'type': ai[cc(0x36f)],
                    'state': [ak, al]
                }), f[cc(0x3da)](ai[cc(0x154)], {
                    'className': cc(0x147),
                    'children': [f[cc(0x136)](P, {
                        'onClick': () => {
                            af(!0x1),
                            an();
                        }
                        ,
                        'className': ai[cc(0x3cb)],
                        'children': ai['YMeAo']
                    }), f[cc(0x136)](P, {
                        'onClick': ap() && ( () => ao()),
                        'className': j(ap() ? cc(0x10d) : cc(0x2bc), 'duration-150'),
                        'children': cc(0x2b2)
                    })]
                })]
            })
        })
    });
}
  , De = ({cls: af, nav: ag=!0x0, navigating: ah}) => {
    const cg = bc
      , ai = {
        'cpixb': '/search',
        'jVLYn': 'mousedown',
        'rGNDi': cg(0x3b7),
        'rZVlt': function(aC, aD) {
            return aC(aD);
        },
        'FaBXh': 'https://google.com',
        'JMEfW': 'Google',
        'toFcK': 'https://github.com',
        'hfKgf': cg(0x235),
        'gjjeK': cg(0x377),
        'ssOqf': cg(0x323),
        'WGpbX': 'w-[2.5rem]\x20h-[2.5rem]\x20flex\x20items-center\x20justify-center\x20rounded-full\x20bg-[#6d6d6d73]',
        'KKazA': 'div'
    }
      , {options: aj, updateOption: ak} = T()
      , al = u()
      , [am,an] = r['useState']({})
      , [ao,ap] = r[cg(0x303)](null)
      , [aq,ar] = r[cg(0x303)]({
        'add': !0x1,
        'edit': !0x1,
        'index': null
    })
      , [at,au] = r[cg(0x303)](!0x1)
      , av = r[cg(0x394)](null)
      , aw = [{
        'link': ai[cg(0x12d)],
        'icon': 'https://google.com/favicon.ico',
        'name': ai['JMEfW']
    }, {
        'link': 'https://facebook.com',
        'icon': cg(0x13c),
        'name': cg(0x296)
    }, {
        'link': cg(0x32e),
        'icon': 'https://quora.com/favicon.ico',
        'name': cg(0x11b)
    }, {
        'link': ai[cg(0x2cd)],
        'icon': ai['hfKgf'],
        'name': ai[cg(0x3c9)]
    }]
      , [ax,ay] = r['useState']( () => {
        const ch = cg;
        try {
            return JSON[ch(0x138)](localStorage[ch(0x203)]('options'))?.['quickLinks'] || aw;
        } catch {
            return aw;
        }
    }
    )
      , az = aC => {
        const ci = cg;
        ag ? al(ai['cpixb'], {
            'state': {
                'url': aC
            }
        }) : ah['go'](ah['id'], ah[ci(0x1e1)](aC));
    }
    ;
    r['useEffect']( () => {
        const cj = cg
          , aC = aF => !av[cj(0x1fd)]?.[cj(0x30c)](aF['target']) && ap(null)
          , aD = aF => aF[cj(0x3de)] === cj(0x243) && au(!0x0)
          , aE = aF => aF['key'] === cj(0x243) && au(!0x1);
        return document[cj(0x3d8)](ai['jVLYn'], aC),
        document['addEventListener'](cj(0x256), aD),
        document['addEventListener'](ai[cj(0x1cd)], aE),
        () => {
            const ck = cj;
            document['removeEventListener'](ck(0x2ab), aC),
            document['removeEventListener'](ck(0x256), aD),
            document['removeEventListener']('keyup', aE);
        }
        ;
    }
    , []),
    r[cg(0x144)]( () => ak({
        'quickLinks': ax
    }), [ax]),
    r['useEffect']( () => {
        an({});
    }
    , [ax]);
    const aA = j(cg(0x2b4), aj['type'] === ai['ssOqf'] ? 'border\x20hover:border-[#ffffff1c]' : 'border-2\x20hover:border-[#4f4f4f1c]', 'hover:backdrop-blur')
      , aB = ai['WGpbX'];
    return f['jsxs']('div', {
        'className': j(cg(0x1fe), af || 'w-full\x20max-w-[40rem]\x20mx-auto\x20mt-[16rem]'),
        'children': [ax['map']( (aC, aD) => f['jsxs']('div', {
            'className': aA,
            'onClick': () => az(aC['link']),
            'children': [f['jsxs'](cg(0x2c4), {
                'ref': ao === aD ? av : null,
                'onClick': aE => {
                    const cl = cg;
                    aE[cl(0x3a4)](),
                    at ? ay(ax['filter']( (aF, aG) => aG !== aD)) : ap(ao === aD ? null : aD);
                }
                ,
                'className': j('absolute\x20-top-2\x20-right-2\x20duration-200\x20ease', ao === aD ? 'opacity-100' : cg(0x24b)),
                'children': [at ? f['jsx'](Y, {
                    'size': '16',
                    'className': 'opacity-70\x20text-red-500'
                }) : f[cg(0x136)](a0, {
                    'size': '16',
                    'className': cg(0x2a1)
                }), ao === aD && f[cg(0x3da)]('div', {
                    'className': 'absolute\x20top-5\x20right-0\x20rounded-md\x20shadow-lg\x20border\x20border-white/10\x20py-1\x20w-[101px]\x20z-50',
                    'style': {
                        'backgroundColor': aj[cg(0x2d9)] || '#252f3e'
                    },
                    'onClick': aE => aE[cg(0x3a4)](),
                    'children': [f['jsxs']('button', {
                        'onClick': () => ar({
                            'add': !0x1,
                            'edit': !0x0,
                            'index': aD
                        }) || ap(null),
                        'className': cg(0x236),
                        'children': [f['jsx'](a1, {
                            'size': '14'
                        }), cg(0x340)]
                    }), f['jsxs']('button', {
                        'onClick': () => ay(ax[cg(0x1bc)]( (aE, aF) => aF !== aD)) || ap(null),
                        'className': cg(0x201),
                        'children': [f[cg(0x136)](a2, {
                            'size': '14'
                        }), cg(0x1c0)]
                    })]
                })]
            }), f['jsx'](cg(0x2c4), {
                'className': aB,
                'children': am[aD] ? f['jsx'](l, {
                    'className': cg(0x1fa)
                }) : f['jsx']('img', {
                    'src': aC[cg(0x329)],
                    'alt': aC['name'],
                    'className': cg(0x158),
                    'loading': 'lazy',
                    'onError': () => an(aE => ({
                        ...aE,
                        [aD]: !0x0
                    }))
                }, aC[cg(0x329)])
            }), f[cg(0x136)](cg(0x2c4), {
                'className': cg(0x135),
                'children': aC['name']
            })]
        }, aD)), f[cg(0x3da)]('div', {
            'className': aA,
            'onClick': () => ar({
                'add': !0x0,
                'edit': !0x1,
                'index': null
            }),
            'children': [f['jsx'](ai[cg(0x276)], {
                'className': aB,
                'children': f['jsx'](o, {
                    'className': 'w-7\x20h-7'
                })
            }), f['jsx'](ai['KKazA'], {
                'className': 'mt-3\x20text-sm\x20font-medium\x20text-center',
                'children': cg(0x1ef)
            })]
        }), f['jsx'](Ms, {
            'state': aq[cg(0x2e5)],
            'set': aC => ar({
                ...aq,
                'add': aC
            }),
            'update': aC => ay([...ax, aC])
        }), f['jsx'](Ds, {
            'state': aq[cg(0x1a3)],
            'set': aC => ar({
                ...aq,
                'edit': aC
            }),
            'initialData': aq['index'] != null ? ax[aq[cg(0x2fd)]] : null,
            'update': aC => {
                const aD = [...ax];
                aD[aq['index']] = aC,
                ai['rZVlt'](ay, aD);
            }
        })]
    });
}
;
function d() {
    const d9 = ['https://google.com/favicon.ico', 'cjgqhro\x20o6eazf2', 'text-[0.7rem]', ',0.2)\x201px,\x20transparent\x201px),\x0a\x20\x20\x20\x20\x20\x20\x20\x20linear-gradient(to\x20bottom,\x20rgba(', 'EAqBV', 'same-origin', 'https://www.google.com/s2/favicons?sz=128&domain=instagram.com', 'QJxGP', 'then', '#d1d1d1', 'wServer', 'https://neal.fun', 'status', 'search-div', 'flex', 'dark', 'opacity-0', 'nothing\x20here\x20yet', 'WebCrawler', 'color', 'NwLAF', 'icon', 'fHunu', 'UpwNU', 'uqrgY', 'style', 'https://quora.com', 'flex\x20flex-col\x20w-full', '100%', '#151519', 'yEIvr', 'append', 'Automatic', 'ms\x20ease-out', 'getBoundingClientRect', 'all', 'createRoot', '50\x20apps', 'barColor', 'm0e5c6g', 'Ultraviolet\x20only', 'ODQIS', 'https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png', '/assets/img/wikipedia.ico', '\x20Edit', 'nonce', '#9db4ff', 'window', 'flex-1\x20min-w-0', 'https://google.com', 'rrPeK', 'engineName', 'Confirm', '8VGvuFK', 'dNahs', 'tabOutline', 'px-3\x20py-2\x20text-sm\x20rounded-md', '#d6daff', 'toUpperCase', '#09121e', 'isLoading', '#111e2fb0', 'logo', 'h-10\x20flex\x20items-center\x20overflow-hidden\x20gap-1\x20px-2', 'panicToggleEnabled', 'function', '/assets/img/khan.png', 'uyXEc', 'text-2xl\x20font-medium\x20mb-2', '40\x20apps', '#1f2937', 'anonymous', 'tabBarColor', 'eruda', 'body', '/scram/scramjet.wasm.wasm', '#c9c9c9', 'space-y-2', 'flatMap', 'Suspense', 'elements', 'credentials', 'hover:bg-[#ffffff0c]', '73,\x2073,\x2073', 'decode', '#e6dec7', 'childList', 'historyIndex', 'reason', 'pPNzq', '486967BIEagy', 'tjrig', 'round', 'vite:preloadError', 'absolute\x20inset-0\x20w-full\x20h-full\x20transition-opacity\x20duration-200', 'useMemo', 'jk56g3d\x20mqeen1e', 'Yahoo', 'target', 'GitHub', '#b2b2b2', 'flex\x20items-center\x20gap-2\x20px-3\x20rounded-md\x20border', 'Crazyapps', 'defaultTheme', 'Search\x20', 'ogxiN', '#18283e', 'Discord', '#fefbf5', 'MQNNW', 'FVnmV', 'height', ')\x200%,\x20rgba(', 'createPortal', '/uv/service/', 'Watch\x20and\x20stream\x20games\x20live\x20on\x20Twitch.tv.', 'uIWPP', '/assets/img/cmg.webp', 'NAJak', 'Icon\x20URL', 'show', ',0.112)\x203px,\x20transparent\x201px)', 'Bookmarks', 'ctrlKey', 'FCzEK', 'gLalV', 'ZlGCX', 'SearXNG\x20(metasearch)', 'useRef', 'games', 'Cancel', 'Dogpile', 'startsWith', 'path', '#d4f3e1', 'hno4utj', 'reload', '#c1d4f1', 'Ecosia', 'errorTrace-wrapper', 'iIgoa', '/docs', 'rxugG', 'get', 'stopPropagation', 'bg-gray-200\x20hover:bg-gray-300', 'min-h-screen\x20flex\x20flex-col\x20items-center\x20justify-center\x20p-6', 'https://www.ecosia.org/search?q=', 'mocha', 'find', 'flex\x20gap-2', 'siteTextColor', 'truncate\x20text-[0.79rem]\x20ml-1\x20min-w-0', 'hover:bg-[#97979773]', '#2d2f44', 'KKotA', 'Create\x20Bookmark', 'HVcrh', 'Kagi', 'link', 'bgDesign', 'https://outlook.live.com/mail/', 'info', 'keyup', 'useCallback', 'button', 'history', 'Baidu', 'invert(80%)', 'mwmTs', 'SFProText,\x20system-ui,\x20sans-serif', 'showMenu', 'ClassLink', 'about:blank', 'jCJeB', 'koBfX', 'nOmPu', 'border-gray-700', 'rounded-[9px]\x20w-full\x20h-11\x20hover:bg-[#d4d4d418]\x20cursor-pointer\x20duration-100\x20ease-in\x20px-3\x20pl-2.5\x20flex\x20items-center', 'setAttribute', '#070e15', 'gjjeK', 'w-6\x20h-6\x20rounded\x20flex\x20items-center\x20justify-center', 'UMDGC', 'Instagram', 'CobHR', 'qhAww', 'contentWindow', 'oCDIJ', 'xBodp', 'HsGtC', 'includes', 'text-[0.7rem]\x20text-gray-500\x20dark:text-gray-400', 'grid', 'Add\x20shortcut', 'Please\x20enable\x20popups\x20to\x20continue.', 'addEventListener', 'Symbolab', 'jsxs', 'Paper', 'startTransition', '#cdcdcd', 'key', 'replace', '#7f89d9', '#7ca387c4', '/assets/img/schoology.ico', 'join', '#fffbeb', 'mousemove', 'zNIGo', 'EuyOu', 'dots', 'Search\x20freely\x20with\x20Bing,\x20by\x20Microsoft.', '#c7bfa8', 'Search\x20icon', 'https://www.bing.com/search?q=', '#1a252f', 'name', 'opacity', 'hidden', 'max', 'text-sm\x20font-medium\x20truncate', 'gROuD', 'Games,\x20visualizations,\x20interactives\x20and\x20other\x20weird\x20stuff.', 'mt-16', 'cursor-pointer\x20hover:opacity-80', '#e4e4e5', 'w-[30rem]\x20h-[20.8rem]\x20p-5\x20rounded-xl\x20relative\x20flex\x20flex-col\x20gap-3\x20shadow-2xl', 'scope', 'light', 'https://www.startpage.com/sp/search?q=', 'type', 'clear', 'min', 'root', '/assets/img/geforcenow.webp', 'uxsTf', 'updateUrl', 'split', 'Quora', '#858585', 'tuzxt', 'text-[0.8rem]', 'referrerPolicy', 'host', 'SearXNG', 'Routing', 'select-none', 'TDeRS', '#a0b0c8', 'width', 'lightTheme', 'pXLpS', 'Sogou', 'kAXUZ', '9anime', 'WgtlB', 'FaBXh', 'relative\x20w-full\x20max-w-2xl\x20max-h-[80vh]\x20rounded-lg\x20border\x20shadow-lg\x20overflow-hidden\x20transition-all', 'blur', 'options', 'memo', 'rounded-lg\x20border-1\x20flex\x20items-center\x20px-2\x20ml-1\x20mr-1', '4034350GfjxfE', '#0d0d0d', 'mt-3\x20text-sm\x20font-medium\x20text-center\x20w-full\x20px-1\x20overflow-hidden\x20whitespace-nowrap\x20text-ellipsis', 'jsx', '#17281f', 'parse', '#c3baa6', 'currentColor', 'hover:bg-[#ffffff15]', 'https://facebook.com/favicon.ico', 'cursor-pointer\x20underline', 'Dots', 'transition', 'TXrVN', 'margin', 'ipfVG', 'delete', 'useEffect', 'active', 'return\x20(function()\x20', 'absolute\x20bottom-5\x20right-5\x20flex\x20flex-row\x20gap-5', 'scr', '/assets/img/nf.webp', 'zcJmP', 'uAqkm', 'Watch\x20TV\x20shows,\x20movies,\x20and\x20originals.', 'bind', 'modulepreload', 'https://amazon.com', '#c5c8e6', ')\x2050%,\x20transparent\x2070%)', 'done', 'getCSS', 'FUfaN', 'link[href=\x22', 'caches', 'kqEdS', 'w-7\x20h-7\x20object-contain', 'fixed\x20inset-0\x20bg-black/40\x20z-50', '2322LKtcgR', '/search', 'bOQSl', 'length', 'Lazy\x20loading\x20failed:', 'Light', '/assets/img/bigideasmath.ico', 'link[rel=\x22modulepreload\x22]', 'm21\x2021-4.3-4.3', 'h-6\x20w-7\x20rounded-md', 'INxYd', 'Petal', 'JJmBV', 'Google', 'engine', '#282323', 'bg-[#ffffff0c]\x20hover:bg-[#ffffff15]', '#374151', 'IisPU', 'scale(', 'hover:bg-gray-100', 'tabs', 'WfitB', 'Neal.fun', 'flex\x20items-center\x20gap-2', 'charCodeAt', 'KuDwr', '#2d3e28', 'uPqKy', 'lMtzV', '#18151c', 'hyZYi', 'tabs://new', 'BiwtC', '#191a19', 'theme', 'eWIyU', 'mBrUb', 'pvIhT', 'flex\x20items-center\x20gap-3\x20px-3\x20py-2\x20rounded-md\x20cursor-pointer', '#7c5f5f', 'AwHCm', 'w-full\x20flex\x20justify-between\x20items-center\x20px-3\x20py-2', 'text', 'flex-none\x20mx-1\x20w-6\x20h-6', 'phrase', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-image:\x20', 'cursor-pointer', 'querySelectorAll', 'block', 'appendChild', 'shift+', 'cursor-pointer\x20duration-300\x20ease-out\x20scale-[1.12]\x20hover:scale-[1.15]', '/assets/img/symb.webp', 'nUhDV', '2150asrXxm', 'Stripes', 'endsWith', 'gydmck0\x20j2l269k', 'All', 'error', 'AHDPo', 'HXPTu', '/libcurl/index.mjs', '209,\x20213,\x20219', 'https://bing.com', 'auto', 'w-5\x20h-5\x20relative', 'serviceWorker', 'include', 'UvitO', '/assets/img/9ani.webp', 'dyKrA', 'edit', 'warn', 'contentDocument', 'hYFlP', 'JtnrK', 'encode', 'bg-black/15', 'none', 'animate-spin', 'glowWrapperColor', '#1d2d22', '/settings', 'hover:bg-gray-200', 'setLoading', 'flex-shrink-0\x20animate-spin', '/scramjet/', 'bgColor', 'Gigablast', 'zoomLevels', 'documentElement', 'myz7mzk\x20nplfryf', 'EJCiS', 'catch', 'RNEhO', 'Qvmew', 'filter', 'removeEventListener', 'upkoB', 'Watch,\x20create,\x20and\x20share\x20videos\x20worldwide.', '\x20Remove', 'ZNXYA', 'location', 'iframeUrls', 'VWuHL', '[rel=\x22stylesheet\x22]', '#1a1514', 'text-xs\x20text-gray-500\x20truncate', '.css', 'alt\x20+\x20c', 'size', '/assets/img/classlink.ico', '#ebe3cd', 'rGNDi', 'useOptions\x20must\x20be\x20used\x20within\x20an\x20OptionsProvider', 'iframe', 'tabName', 'Play\x20free\x20browser\x20games\x20instantly,\x20no\x20install.', 'setItem', 'https://reddit.com', '/s_sw.js', 'Watch\x20and\x20stream\x20movies\x20and\x20TV\x20shows.', 'SW\x20reg\x20err\x20(', 'updateTitle', 'hkDzH', '100vh', 'Chat,\x20voice,\x20and\x20communities\x20all\x20in\x20one\x20place.', 'clearStore', 'Enter', 'fixed\x20inset-0\x20z-9999\x20flex\x20items-center\x20justify-center\x20bg-inherit', 'w-full\x20max-w-2xl', 'PnMmx', 'rUICB', 'process', 'Real-time\x20news\x20and\x20social\x20conversations.', 'text-[1rem]\x20mb-1', 'hover:bg-[#ffffff1e]', 'send', 'push', 'supports', '#4c4c4c', '#474b52', 'jkZRL', 'aboutBlank', '{\x22Popular\x22:[{\x22appName\x22:\x22GeForce\x20Now\x22,\x22desc\x22:\x22All-Time\x20favorites\x22,\x22icon\x22:\x22/assets/img/geforcenow.webp\x22,\x22url\x22:\x22https://play.geforcenow.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Roblox\x22,\x22desc\x22:\x22All-Time\x20favorites\x22,\x22icon\x22:\x22/assets/img/roblox.webp\x22,\x22url\x22:\x22https://www.easyfun.gg/cloud-games/roblox.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Neal.fun\x22,\x22desc\x22:\x22All-Time\x20favorites\x22,\x22icon\x22:\x22/assets/img/nf.webp\x22,\x22url\x22:\x22https://neal.fun\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Retro\x20Bowl\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/retro.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/browl-lib.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22BasketBros.io\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/basketbros.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/bbo-js.zip\x22,\x22disabled\x22:false,\x22local\x22:true}],\x22Action\x22:[{\x22appName\x22:\x221v1.lol\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/1v1.webp\x22,\x22url\x22:\x22https://1v1.lol\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Awesome\x20Tanks\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/atanks2.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/atnk-v2.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Bounce\x20Back\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/bounceback.jpg\x22,\x22url\x22:\x22https://skoolcdn.github.io/gfiles/gfiles/html5/bounceback\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22BuildNow.GG\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/buildnow.webp\x22,\x22url\x22:\x22https://games.crazygames.com/en_US/buildnow-gg/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Counter\x20Strike\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn2.iconfinder.com/data/icons/popular-games-1/50/csgo_squircle-512.png\x22,\x22url\x22:\x22https://play-cs.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Funny\x20Shooter\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/funnyshooter2.webp\x22,\x22url\x22:\x22https://htmlxm.github.io/h4/funny-shooter-2\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Janissary\x20Battles\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/janissary.png\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/8b55f4f729be4e70b6155f27d2e04690/?gd_sdk_referrer_url=https://gamedistribution.com/games/janissary-battles\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Master\x20Archer\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/masterarcher.jpg\x22,\x22url\x22:\x22https://playcanv.as/p/JERg21J8\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Missiles\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/missiles/miss.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/missiles/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rooftop\x20Snipers\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/c127771edb0e821e4109b7058ae3f094.jpeg\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/templatedata-roof.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Station\x20141\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/station141.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/station-141/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stick\x20Archers\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/stick-archers/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/stick-archers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stick\x20Merge\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/stick-merge/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/stick-merge/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Superhot\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/superhot/hot.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/superhot/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Time\x20Shooter\x20SWAT\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/time-shooter-3.webp\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/6493b872f0564380a7adad671d1e0a57/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Wolfenstein\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/wolfenstein-3d/art/wolf3d.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/wolfenstein-3d/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ballistic\x20Chickens\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/ballistic-chickens/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ballistic-chickens/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Boxhead\x202Play\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/boxhead2play/boxhead2play.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/boxhead2play/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Champion\x20Archer\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/championarcher/championarcher.png\x22,\x22url\x22:\x22https://assets.hbmc.net/championarcher/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Creative\x20Kill\x20Chamber\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/creativekillchamber/creativekillchamber.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/creativekillchamber/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Defend\x20The\x20Tank\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/defend-the-tank/landscape.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/defend-the-tank/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Dragon\x20vs\x20Bricks\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/dragon-vs-bricks/icon.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/dragon-vs-bricks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Endless\x20War\x203\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/endlesswar3/endlesswar3.png\x22,\x22url\x22:\x22https://assets.hbmc.net/endlesswar3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Evil\x20Glitch\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/evil-glitch/icon.jpeg\x22,\x22url\x22:\x22https://assets.hbmc.net/evil-glitch/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Exo\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/exo/small.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/exo/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Froggy\x27s\x20Battle\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/froggys-battle/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/froggys-battle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Just\x20One\x20Boss\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/just-one-boss/pv1Gr5.png\x22,\x22url\x22:\x22https://assets.hbmc.net/just-one-boss/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kitchen\x20Gun\x20Game\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/kitchen-gun-game/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/kitchen-gun-game/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Matrix\x20Rampage\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/matrixrampage/matrixrampage.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/matrixrampage/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22n-gon\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/n-gon/bot.png\x22,\x22url\x22:\x22https://assets.hbmc.net/n-gon/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Pixel\x20Gun\x20Survival\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/pixel-gun-survival/512x384.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/pixel-gun-survival/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Protektor\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/protektor/loading-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/protektor/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Shell\x20Shockers\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/shellshockers/favicon.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/shellshockers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Shot\x20in\x20the\x20Dark\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/shotinthedark/shot.png\x22,\x22url\x22:\x22https://assets.hbmc.net/shotinthedark/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Smoking\x20Barrels\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/smokingbarrels/smokingbarrels.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/smokingbarrels/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Soldier\x20Legend\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/soldier-legend/logo.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/soldier-legend/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stick\x20Duel\x20Battle\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/stick-duel-battle/512x340.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/stick-duel-battle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Storm\x20the\x20House\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/stormthehouse2/stormthehouse2.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/stormthehouse2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tactical\x20Weapon\x20Pack\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/tactical-weapon-pack-2/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/tactical-weapon-pack-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tactical\x20Assassin\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/tacticalassasin2/tacticalassassin2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tacticalassasin2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tank\x20Trouble\x202\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/tank-trouble-2/loading-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tank-trouble-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Zombs\x20Royale\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/zombs-royale/zomb.png\x22,\x22url\x22:\x22https://assets.hbmc.net/zombs-royale/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hotline\x20Miami\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/217.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/hotline-miami/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22ULTRAKILL\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/196.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/ultrakill/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Sports\x22:[{\x22appName\x22:\x22Archery\x20World\x20Tour\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/awt.jpg\x22,\x22url\x22:\x22https://gamesnacks.com/embed/games/archery\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Basket\x20Random\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/basketrandom.webp\x22,\x22url\x22:\x22https://files.twoplayergames.org/files/games/other/Basket_Random/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Basketball\x20FRVR\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/4avPP7yNU6hARlzIldyPajBnKYj3rGohlmfnRtR7JxSGXNbfBW9AblVhY3wAbo0sbYU7=w240-h480-rw\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/bfrvr-lib.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Basketball\x20Stars\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/basketballstars.webp\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/69d78d071f704fa183d75b4114ae40ec/?gd_sdk_referrer_url=https://gamedistribution.com/games/basketball-stars\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cannon\x20Basketball\x204\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/cannon-basketball-4/img/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cannon-basketball-4/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Champion\x20Island\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/champion-island/splash.png\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/chp-island-arch.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Let\x27s\x20Surf\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/ltsf.png\x22,\x22url\x22:\x22https://assets.hbmc.net/edge-surf/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Penalty\x20Kicks\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/penaltykicks.png\x22,\x22url\x22:\x22https://www.mathplayground.com/penalty-kicks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Soccer\x20Random\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22https://img.gamedistribution.com/308d826f20034d7b972f25258c8d0a44-512x512.jpeg\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/scruntime.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Soccer\x20Skills\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/soccer-skills/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/soccer-skills/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Volley\x20Random\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/volley-random.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/vlruntime.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Boxing\x20Random\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/boxing-random/512x340.jpg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/e8c02771085e4c8b9de3deda5e087e0e/?gd_sdk_referrer_url=https%3A%2F%2Fwww.twoplayergames.org%2Fgame%2Fboxing-random\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22CN\x20Ping\x20Pong\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/cnpingpong/tabletennisultimate.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cnpingpong/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Mini\x20Putt\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/miniputt/miniputt.png\x22,\x22url\x22:\x22https://assets.hbmc.net/miniputt/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stickman\x20Golf\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets-fb/stickman-golf/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/stickman-golf/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Platformer\x22:[{\x22appName\x22:\x2299\x20Balls\x203D\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/99balls3d.webp\x22,\x22url\x22:\x22https://gamesnacks.com/games/99balls3d\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x2299\x20Balls\x20Evo\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/99ballsevo.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/99balls/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Achievement\x20Unlocked\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/achievementunlocked/achievementunlocked.png\x22,\x22url\x22:\x22https://assets.hbmc.net/achievementunlocked/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Amidst\x20The\x20Clouds\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/amidst-the-clouds/splash.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/amidst-the-clouds/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Appel\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://store-images.s-microsoft.com/image/apps.14476.13631454430641262.37c87ec2-8482-46a7-a63a-261257b0eba0.238f1630-e1a2-4cdc-ab31-ae80905aacb4?mode=scale&q=90&h=300&w=300\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/appel/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Big\x20NEON\x20Tower\x20Tiny\x20Square\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/bntts/icons/icon-256.png\x22,\x22url\x22:\x22https://www.coolmathgames.com/0-big-neon-tower-tiny-square/play\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Big\x20Tower\x20Tiny\x20Square\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/btts/images.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/btts/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bob\x20The\x20Robber\x202\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/btr2.jpeg\x22,\x22url\x22:\x22https://assets.hbmc.net/bobtherobber2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Boxel\x20Rebound\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/boxelrebound.webp\x22,\x22url\x22:\x22https://trinculo54.github.io/Boxel-rebound-hope/Newer/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Circlo\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/circlo/img/circlo.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/circlo/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cubeform\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/cubeform.webp\x22,\x22url\x22:\x22https://www.mathplayground.com/cubeform/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Doodle\x20Jump\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/doodle-jump/doodle.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/doodle-jump/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fireboy\x20and\x20Watergirl\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/fireboy-and-watergirl.webp\x22,\x22url\x22:\x22https://ubg100.github.io/games/fbwg1/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Happy\x20Wheels\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/happywheels.jpeg\x22,\x22url\x22:\x22https://games-online.io/game/HappyWheels\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Henry\x20Stickmin:\x20Breaking\x20the\x20Bank\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/breakingthebank/breakingthebank.png\x22,\x22url\x22:\x22https://assets.hbmc.net/breakingthebank/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Henry\x20Stickmin:\x20Escaping\x20The\x20Prision\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/escapingtheprison/escapingtheprison.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/escapingtheprison/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Henry\x20Stickmin:\x20Fleeing\x20The\x20Complex\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/fleeingthecomplex.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/fleeingthecomplex/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Offline\x20Paradise\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/offline-paradise/assets/icon.webp\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/offline-paradise/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Pizza\x20Tower\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d55ae41-e76d-4375-b2d9-5b40b36a2f82/dfy6oec-3cccc997-2959-4bd2-a2ee-32e7442e6bbd.png/v1/fill/w_894,h_894/pizza_tower_icon_by_kingkenny11_dfy6oec-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzBkNTVhZTQxLWU3NmQtNDM3NS1iMmQ5LTViNDBiMzZhMmY4MlwvZGZ5Nm9lYy0zY2NjYzk5Ny0yOTU5LTRiZDItYTJlZS0zMmU3NDQyZTZiYmQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7hNeai6noPkCoPf1YXkrj7t8u6oQAJSpv1hiw0YpiyY\x22,\x22url\x22:\x22https://kdata1.com/2021/03/3527391/2.1/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rolling\x20Forests\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/rolling-forests/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/rolling-forests/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rolly\x20Vortex\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/rolly-vortex/icon-256.png\x22,\x22url\x22:\x22https://assets.hbmc.net/rolly-vortex/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rotate\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://img.gamedistribution.com/0faa4468d18e4f7aa2e0161b4fefa193-512x512.jpeg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/0faa4468d18e4f7aa2e0161b4fefa193/?gd_sdk_referrer_url=https://gamedistribution.com/games/rotate\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Run\x203\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/run3.webp\x22,\x22url\x22:\x22https://bonbang.github.io/store99/run-3\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slope\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/slope.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/slope/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slope\x202\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/slope-2/slope-2-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/slope-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slope\x20Ball\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/slope-ball/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/slope-ball/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stack\x20Bounce\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/stackbounce.webp\x22,\x22url\x22:\x22https://gamesnacks.com/games/stackbounce\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stickman\x20Hook\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/stickmanhook.webp\x22,\x22url\x22:\x22https://stickman-hook.io/iframe/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Super\x20Mario\x2064\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://nintendocore.org/cdn/shop/products/Super-Mario-64-1.png\x22,\x22url\x22:\x22https://ultimatemen.github.io/games/superm64/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Super\x20Mario\x20Bros\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://lh3.googleusercontent.com/PwJw4lIjmSVwOkpaeYigpJgwzEnTKIRQhxy7PmV0qnEVh4xuHb2vojFtNU4JCrCJL5YL5xi8WG7peK2kscQXjaEQ=w640-h400-e365-rj-sc0x00ffffff\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/mario/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tunnel\x20Rush\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg\x22,\x22url\x22:\x22https://tunnelrush.app/iframe/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Doctor\x20Acorn\x202\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/doctor-acorn2/loading-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/doctor-acorn2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Double\x20Wires\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/doublewires/doublewires.png\x22,\x22url\x22:\x22https://www.gamenora.com/upload/games/swf/Double%20Wires/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fancy\x20Pants\x20Adventures\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/fancypantsadventures/fancypantsadventure.png\x22,\x22url\x22:\x22https://assets.hbmc.net/fancypantsadventures/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22George\x20and\x20the\x20Printer\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22https://img.itch.zone/aW1nLzQyODUxNTUucG5n/original/nUotXS.png\x22,\x22url\x22:\x22https://assets.hbmc.net/georgeandtheprinter/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Go\x20Ball\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/go-ball/loading-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/go-ball/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Marvin\x20Spectrum\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/marvinspectrum/marvinspectrum.png\x22,\x22url\x22:\x22https://assets.hbmc.net/marvinspectrum/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ninja\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/ninja/logo1.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ninja/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ninja\x20vs\x20Evilcorp\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/ninjavsevilcorp/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ninjavsevilcorp/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Noob\x20Steve\x20Parkour\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/noob-steve-parkour/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/noob-steve-parkour/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22NS\x20Shaft\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/ns-shaft/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ns-shaft/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22NS\x20Resurgence\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/nsresurgence/neon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/nsresurgence/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stickman\x20Boost\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/stickman-boost/icon-256.png\x22,\x22url\x22:\x22https://assets.hbmc.net/stickman-boost/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Super\x20Mario\x20Construct\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/supermarioconstruct/textareaimage.png\x22,\x22url\x22:\x22https://assets.hbmc.net/supermarioconstruct/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22This\x20Is\x20The\x20Only\x20Level\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/thisistheonlylevel/thisistheonlylevel.png\x22,\x22url\x22:\x22https://assets.hbmc.net/thisistheonlylevel/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Yoshi\x20Fabrication\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets-fb/yoshifabrication/flowwatertm0.png\x22,\x22url\x22:\x22https://assets.hbmc.net/yoshifabrication/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Adventure\x22:[{\x22appName\x22:\x2210\x20Minutes\x20Till\x20dawn\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/tmtd.png\x22,\x22url\x22:[\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/tmtd/Build.zip\x22,\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/tmtd/Build2.zip\x22],\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Ages\x20of\x20Conflict\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/ages-of-conflict/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/ages-of-conflict/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Alien\x20Hominid\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/alienhominid/alienhominid.jpg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/alienhominid/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Alien\x20Shooter\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://www2.minijuegosgratis.com/v3/games/thumbnails/241062_7_sq.jpg\x22,\x22url\x22:\x22https://691164868467584636.playables.usercontent.goog/v/assets/index.html#origin=https%3A%2F%2Fwww.youtube.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Amongus\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec\x22,\x22url\x22:\x22https://assets.hbmc.net/among-us/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ashbelt\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://f4.bcbits.com/img/a4238131019_10.jpg\x22,\x22url\x22:\x22https://ultimatemen.github.io/games/ashbelt/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bacon\x20May\x20Die\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets/img/baconmaydie.webp\x22,\x22url\x22:\x22https://game.enjoy4fun.com/baconmaydie/v2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Deepest\x20Sword\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://images.sftcdn.net/images/t_app-icon-m/p/f97701fd-a064-4cac-9247-9793e72d8220/2271577798/deepest-sword-logo\x22,\x22url\x22:\x22https://html-classic.itch.zone/html/4017918/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Genshin\x20Impact\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets/img/genshin.webp\x22,\x22url\x22:\x22https://www.easyfun.gg/cloud-games/genshin-impact.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Knife\x20Master\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/knife-master/512x512.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/knife-master/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Om-Nom\x20Bounce\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/om-bounce/assets/icon.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/om-bounce/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rabbit\x20Samurai\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/rabbit-samurai/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/rabbit-samurai/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rabbit\x20Samurai\x202\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/rabbit-samurai2/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/rabbit-samurai2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Radius\x20Raid\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/radiusraid.jpg\x22,\x22url\x22:\x22https://jackrugile.com/radius-raid/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stickman\x20Archero\x20Fight\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://www5.minijuegosgratis.com/v3/games/thumbnails/241942_7_sq.jpg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/3f4c166817ad4fd4b5b05d9adba22fcd/?gd_sdk_referrer_url=https://www.gamegab.com/play/16561/Stickman-Archero-Fight/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stickman\x20Survival\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/Stickman-Survival/Icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/Stickman-Survival/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Chroma\x20Incident\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/thechromaincident.png\x22,\x22url\x22:\x22https://js13kgames.com/games/the-chroma-incident/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Veloce\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://img.itch.zone/aW1nLzI1NjI0MjgucG5n/original/qN6zkD.png\x22,\x22url\x22:\x22https://assets.hbmc.net/veloce/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Battle\x20for\x20Gondor\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/battleforgondor/battleforgondor.JPG\x22,\x22url\x22:\x22https://assets.hbmc.net/battleforgondor/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hex\x20Empire\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/hexempire/hexempire.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/hexempire/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Just\x20Fall\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/just-fall/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/just-fall/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stick\x20War\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/stickwar/stickwar.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/stickwar/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Battle\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/thebattle/thebattle.png\x22,\x22url\x22:\x22https://assets.hbmc.net/thebattle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bendy\x20and\x20the\x20Ink\x20Machine\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/215.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/bendy/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Buckshot\x20Roulette\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/205.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/buckshot-roulette/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Five\x20Nights\x20at\x20Freddy\x27s\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/38.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/genizy/fnaf/7be68ae3d98c60a9a62b4164c2d61a416a0beb1a/1/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Five\x20Nights\x20at\x20Freddy\x27s\x202\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/39.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/genizy/fnaf/7be68ae3d98c60a9a62b4164c2d61a416a0beb1a/2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Five\x20Nights\x20at\x20Freddy\x27s\x203\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/40.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/genizy/fnaf/7be68ae3d98c60a9a62b4164c2d61a416a0beb1a/3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Five\x20Nights\x20at\x20Freddy\x27s\x204\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/41.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/genizy/fnaf/7be68ae3d98c60a9a62b4164c2d61a416a0beb1a/4/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Five\x20Nights\x20at\x20Freddy\x27s\x204\x20(Halloween\x20Edition)\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/428.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/genizy/fnaf/7be68ae3d98c60a9a62b4164c2d61a416a0beb1a/4-halloween/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Running\x22:[{\x22appName\x22:\x22Avalanche\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/avalanche/avalanche.png\x22,\x22url\x22:\x22https://assets.hbmc.net/avalanche/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Backrooms\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/backrooms.jpg\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/brm-v1.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Chrome\x20Dino\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/chromedino.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/chrome-dino/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cluster\x20Truck\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/clustertruck.webp\x22,\x22url\x22:\x22https://www.snake-games.io/localgames/cluster-rush/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Crossy\x20Road\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/crossy-road/icon.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/crossy-road/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Crowd\x20Run\x203D\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/crowd-run-3d.webp\x22,\x22url\x22:\x22https://games.cdn.famobi.com/html5games/c/crowd-run-3d/v040/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Death\x20Run\x203D\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/death-run-3d/img/death.png\x22,\x22url\x22:\x22https://assets.hbmc.net/death-run-3d/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Dino\x20Run\x203d\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/dino3d.jpg\x22,\x22url\x22:\x22https://russell2259.github.io/dino3d/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ducklife\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/ducklife1/ducklife.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ducklife1/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ducklife\x202\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/ducklife2/ducklife2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ducklife2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ducklife\x203\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/ducklife3/duck.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ducklife3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ducklife\x204\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/ducklife4/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/ducklife4/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Getaway\x20Shootout\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/getaway-shootout/img/index.jpg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/getaway-shootout/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Jetpack\x20Joyride\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/jetpack-joyride/splash.jpg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/jetpack-joyride/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22OvO\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/ovo.webp\x22,\x22url\x22:\x22https://ovo.onrender.com/versions/1.4.4b/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22OvO\x202\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://lh3.googleusercontent.com/FOaLiWCIhdC5K-oE5UofoDpn3w2ZEAq359yAembr-Q-7mRqNd9ramV97FqyqPuqohwDdQZOm5MF9DL-QcTliLNmf=w640-h400-e365-rj-sc0x00ffffff\x22,\x22url\x22:\x22https://dthesle.github.io/OvO2/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22OvO\x20Dimensions\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/ovodimensions.webp\x22,\x22url\x22:\x22https://www.miniplay.com/embed/ovo-dimensions\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Papery\x20Planes\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/papery-planes/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/papery-planes/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Polybranch\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/polybranch/img/pic1.png\x22,\x22url\x22:\x22https://assets.hbmc.net/polybranch/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Snow\x20Rider\x203D\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://img.gamepix.com/games/snow-rider-3d/cover/snow-rider-3d.png?width=600&height=340&fit=cover&quality=90\x22,\x22url\x22:\x22https://23azostore.github.io/s8/snow-rider-3d/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Subway\x20Surfers\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/subway.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/subway-surfers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Subway\x20Surfers:\x20New\x20York\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/subway-surfers-ny/NewYorkIcon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/subway-surfers-ny/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tall\x20Man\x20Run\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/tall-man-run.webp\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/7980c23fbbae4af6851e01052fce3cce/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Temple\x20Run\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/temple-run.webp\x22,\x22url\x22:\x22https://burgerbounty.github.io/s8/temple-run-2/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Temple\x20Run\x202\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://upload.wikimedia.org/wikipedia/en/9/98/Temple_Run_2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/temple-run-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tube\x20Jumpers\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/tube-jumpers/img/shark.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/tube-jumpers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tunnel\x20Rush\x20Mania\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/tl2qr3PCg-vpzloUgjMAY9eXz9y58Gdmb77_d9RbmrWoQu8rIvj4Fn3eCurqBoWsY84\x22,\x22url\x22:\x22https://html5.gamemonetize.co/2fp4sd31llh6u6vjxe1wxbx8meapsgop/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x203\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/vex3.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/vex3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x204\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://mobimg.b-cdn.net/v2/fetch/1d/1d957ad4cb8024ec9b63d54d6c61235b.png\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/80e6a5ae477f4d4fbcd1ea293d10087d/?gd_sdk_referrer_url=https://gamedistribution.com/games/vex-4\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x205\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://img.gamedistribution.com/f120262ab72743039fbce88c1f370df8-512x512.jpeg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/f120262ab72743039fbce88c1f370df8/?gd_sdk_referrer_url=https://gamedistribution.com/games/vex-5\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x206\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/vex-6.png\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/4925e12574364121a48c61c35f649c36/?gd_sdk_referrer_url=https://gamedistribution.com/games/vex-6\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x207\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://img.gamedistribution.com/0c454c9562d249d28ba3a2b50564042c-512x512.jpg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/rvvASMiM/0c454c9562d249d28ba3a2b50564042c/index.html?gd_sdk_referrer_url=https%3A%2F%2Ftr.y8.com%2Fgames%2Fvex_7&key=y8&value=default&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3RyLnk4LmNvbS9nYW1lcy92ZXhfNyIsInBhcmVudERvbWFpbiI6InRyLnk4LmNvbSIsInRvcERvbWFpbiI6InRyLnk4LmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE2In0%253D\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Vex\x208\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets/img/vex8.webp\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/949009d40a2846f89f887de2285d6c28/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Aquapark\x20Slides\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/aquapark-slides/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/aquapark-slides/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ball\x20Dodge\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn-icons-png.flaticon.com/512/5930/5930147.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ball-dodge/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Burger\x20&\x20Frights\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/burger-and-frights/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/burger-and-frights/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cubefield\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/cubefield/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cubefield/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Flippy\x20Fish\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/flippy-fish/2022_10_28_0jt_Kleki.png\x22,\x22url\x22:\x22https://assets.hbmc.net/flippy-fish/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Happy\x20Hop\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/happy-hop/loading-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/happy-hop/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Helicopter\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22/assets-fb/helicopter/helicopter.png\x22,\x22url\x22:\x22https://assets.hbmc.net/helicopter/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Speed\x20Stars\x22,\x22desc\x22:\x22Running\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/266.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/speed-stars/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Racing\x22:[{\x22appName\x22:\x22Asphalt\x20Retro\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/asr.jpg\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/2c122cee7ef04222a962449e32a34e98/?gd_sdk_referrer_url=https://gamedistribution.com/games/asphalt-retro\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cars\x20Simulator\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/cars-simulator/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cars-simulator/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Draw\x20the\x20Hill\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/drawthehill.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/drhil-conn.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Drift\x20Boss\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/driftboss.png\x22,\x22url\x22:\x22https://www.mathplayground.com/drift-boss-v3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Drift\x20Hunters\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/drifthunters.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/drif-v1.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Drive\x20Mad\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/drive-mad.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/drm-js.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Eggy\x20Car\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/eggycar.webp\x22,\x22url\x22:\x22https://webglmath.github.io/eggy-car/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22HexGL\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/hexgl.webp\x22,\x22url\x22:\x22https://hexgl.bkcore.com/play/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Madalin\x20Stunt\x20Cars\x202\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/madalin-stunt-cars-2/img/logo.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/madalin-stunt-cars-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Madalin\x20Stunt\x20Cars\x203\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/madalin-stunt-cars-3/img/index.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/madalin-stunt-cars-3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Monster\x20Tracks\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/monstertracks.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/monster-tracks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Monster\x20Truck\x20Stunts\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://images.twoplayergames.org/files/games/other/Monster_Truck_Port_Stunt/MonsterTruckPortStunt_180x135.jpg?auto=format&w=100\x22,\x22url\x22:\x22https://files.twoplayergames.org/files/games/other/Monster_Truck_Port_Stunt/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Moto\x20X3M\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets/img/motox3m.webp\x22,\x22url\x22:\x22https://www.coolmathgames.com/0-moto-x3m/play\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Moto\x20X3M\x20Pool\x20Party\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/motox3m-pool/splash.jpg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/motox3m-pool/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Moto\x20X3M\x20Spooky\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/motox3m-spooky/splash.jpeg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/motox3m-spooky/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Moto\x20X3M\x20Winter\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/motox3m-winter/download.jpeg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/motox3m-winter/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Polytrack\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/polytrack/pltrk.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/pltrk.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Rocket\x20League\x202D\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://img.itch.zone/aW1hZ2UvMTcwNjIyLzgyMDkwMS5wbmc=/original/j3UIZb.png\x22,\x22url\x22:\x22https://v6p9d9t4.ssl.hwcdn.net/html/3325334/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Smash\x20Karts\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://img.gamepix.com/games/smash-karts/icon/smash-karts.png\x22,\x22url\x22:\x22https://smartcart1.github.io/s/smash-karts/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slowroads\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/slowroads/static/media/splash-logo-placeholder-7b.2d60164d.png\x22,\x22url\x22:\x22https://assets.hbmc.net/slowroads/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Swerve\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/swerve/img/favicon.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/swerve/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Adrenaline\x20Challenge\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/adrenalinechallenge/adrenalinechallenge.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/adrenalinechallenge/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Adventure\x20Drivers\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/adventure-drivers/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/adventure-drivers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Scrap\x20Metal\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/scrapmetal/1run4progresslogo-light_orig.png\x22,\x22url\x22:\x22https://assets.hbmc.net/scrapmetal/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sky\x20Car\x20Stunt\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/sky-car-stunt/512x384.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/sky-car-stunt/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tanuki\x20Sunset\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/tanuki-sunset/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tanuki-sunset/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Heist\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/theheist/theheist.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/theheist/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22X\x20Trial\x20Racing\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22/assets-fb/x-trial-racing/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/x-trial-racing/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bergentruck\x20201x\x22,\x22desc\x22:\x22Car/Racing\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/455.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/bergentruck/BERGENTRUCK_201X.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Puzzle\x22:[{\x22appName\x22:\x222048\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/2048.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/2048/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Amaze!\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/hypAu2hPcTpg-FkZr7CjrWDspK_9Nm3UKvPWln9zaFUnIr-m6WQvEZ2baAaG0ufzrg\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/amaze-js.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22Bad\x20Ice\x20Cream\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/bad-ice-cream/bad-ice-cream.png\x22,\x22url\x22:\x22https://assets.hbmc.net/bad-ice-cream/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bad\x20Ice\x20Cream\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/bad-ice-cream-2/bad-ice-cream-2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/bad-ice-cream-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bad\x20Ice\x20Cream\x203\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/bad-ice-cream-3/bad-ice-cream-3.png\x22,\x22url\x22:\x22https://assets.hbmc.net/bad-ice-cream-3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bitlife\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/bitlife.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/bitlife/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Black\x20Hole\x20Square\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/blackholesquare.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/black-hole-square/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bloxorz\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/bloxorz.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/flashgamedump/main/bloxorz.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Chess.com\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/chess.webp\x22,\x22url\x22:\x22https://chess.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Connect\x203\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/connect3/connect3.png\x22,\x22url\x22:\x22https://assets.hbmc.net/connect3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Core\x20Ball\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/core-ball/pr_source.png\x22,\x22url\x22:\x22https://assets.hbmc.net/core-ball/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cut\x20the\x20Rope\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/ctr.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ctr/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cut\x20the\x20Rope\x20Holiday\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/ctr-holiday/Holiday_Gift.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/ctr-holiday/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cut\x20the\x20Rope\x20Time\x20Travel\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/ctr-tr/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/ctr-tr/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Google\x20Feud\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/google-feud/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/google-feud/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Grey\x20Box\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/greybox/ico.png\x22,\x22url\x22:\x22https://assets.hbmc.net/greybox/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hacker\x20Tetris\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/hackertetris.png\x22,\x22url\x22:\x22https://assets.hbmc.net/twitch-tetris/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hextris\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/hextris.webp\x22,\x22url\x22:\x22https://assets.hbmc.net/hextris/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Jstris\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/jstris.webp\x22,\x22url\x22:\x22https://jstris.jezevec10.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Pokemon\x202048\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/p2048.webp\x22,\x22url\x22:\x22https://filipekiss.github.io/2048\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Polka\x20Dot\x20Game\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://img.gamepix.com/games/polka-dot-game/icon/polka-dot-game.png\x22,\x22url\x22:\x22https://www.polkadotgame.com/game.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20School\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddleschool/riddleschool.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddleschool/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20School\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddleschool2/riddleschool2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddleschool2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20School\x203\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddleschool3/riddleschool3.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddleschool3/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20School\x204\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddleschool4/riddleschool4.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddleschool4/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20School\x205\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddleschool5/riddleschool5.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddleschool5/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20Transfer\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddletransfer/riddletransfer.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddletransfer/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Riddle\x20Transfer\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/riddletransfer2/riddletransfer2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/riddletransfer2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Watermelon\x20Game\x20(Suika)\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/suika.webp\x22,\x22url\x22:\x22https://watermelongame.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22World\x27s\x20Hardest\x20GM\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets/img/worldshardestgm.webp\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/worlds-hardest-game/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22World\x27s\x20Hardest\x20Game\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/worlds-hardest-game-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22osu!\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/osu.png\x22,\x22url\x22:\x22https://assets.hbmc.net/osu%21/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22xx142-b2.exe\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/xx142-b2exe/splash.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/xx142-b2exe/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x222048\x20Multitask\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://lh3.googleusercontent.com/x7qbQKPHcGheSAiY0Ehyb_9wianRS91C4uiRI3Llr8PBx1Fbg5I5372WjHzNfBCajISDG0O_p2U_VgM_oHTa7X6uyw=s128-rj-sc0x00ffffff\x22,\x22url\x22:\x22https://assets.hbmc.net/2048-multitask/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x229007199254740992\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/9007199254740992/logo-4.png\x22,\x22url\x22:\x22https://assets.hbmc.net/9007199254740992/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22A\x20Dance\x20of\x20Fire\x20and\x20Ice\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/a-dance-of-fire-and-ice/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/a-dance-of-fire-and-ice/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Align\x204\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/align-4/board.png\x22,\x22url\x22:\x22https://assets.hbmc.net/align-4/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Astray\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/astray/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/astray/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cupcake\x202048\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/cupcake2048/favicon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cupcake2048/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Deal\x20or\x20No\x20Deal\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/deal-or-no-deal/index.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/deal-or-no-deal/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Doge\x202048\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/doge2048/doge1.jpeg\x22,\x22url\x22:\x22https://assets.hbmc.net/doge2048/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Factory\x20Balls\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/s2kqCYcsYoDKz18p7EvCW7FAkE4tKoABJJg5Zvo5EQxUfmQXX01bXs7wYyZVjM7puQ=w240-h480-rw\x22,\x22url\x22:\x22https://assets.hbmc.net/factoryballs/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fair\x20Squares\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/fairsquares/index.apple-touch-icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/fairsquares/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Flash\x20Tetris\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/flashtetris/flashtetris.png\x22,\x22url\x22:\x22https://assets.hbmc.net/flashtetris/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Game\x20Inside\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/game-inside/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/game-inside/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Gravity\x20Soccer\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/gravity-soccer/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/gravity-soccer/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Handshakes\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/handshakes/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/handshakes/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Impossible\x20Quiz\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/impossiblequiz/impossiblequiz.png\x22,\x22url\x22:\x22https://assets.hbmc.net/impossiblequiz/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Meme\x202048\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/meme2048/advice_dog_background.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/meme2048/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Minesweeper\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22hthttps://play-lh.googleusercontent.com/eX5S3Tv3eSO1aWDMQ7MGRO1AaZM-mF0EvRbNsUM887kJVHj0aKv4GnDNj6ds_qvhpakg\x22,\x22url\x22:\x22https://assets.hbmc.net/minesweeper/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Pandemic\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/pandemic2/pandemic2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/pandemic2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Push\x20The\x20Square\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/push-the-square/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/push-the-square/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Push\x20Your\x20Luck\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/push-your-luck/Bg.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/push-your-luck/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Shuttle\x20Deck\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/shuttledeck/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/shuttledeck/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sleeping\x20Beauty\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/sleepingbeauty/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/sleepingbeauty/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Solitaire\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/solitaire/screen-shot-win.png\x22,\x22url\x22:\x22https://assets.hbmc.net/solitaire/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sushi\x20Unroll\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/sushi-unroll/favicon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/sushi-unroll/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Synesthesia\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/synesthesia/index.apple-touch-icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/synesthesia/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tiny\x20Islands\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/tiny-islands/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tiny-islands/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Waterworks\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/waterworks/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/waterworks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Win\x20the\x20Whitehouse\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/win-the-whitehouse/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/win-the-whitehouse/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Wordle\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22/assets-fb/wordle/logo_144x144.png\x22,\x22url\x22:\x22https://assets.hbmc.net/wordle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Amanda\x20The\x20Adventurer\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/450.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/amanda-the-adventurer/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Baldi\x27s\x20Basics\x20Plus\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/467.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/baldi-plus/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kindergarten\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/445.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/kindergarten/1/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kindergarten\x202\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/446.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/kindergarten/2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Lacey\x27s\x20Flash\x20apps\x22,\x22desc\x22:\x22Brain\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/463.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/lacysflashgames/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Idle/Clicker\x22:[{\x22appName\x22:\x22Adventure\x20Capitalist\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/adventurecapitalist.png\x22,\x22url\x22:\x22https://than1089.github.io/adventure-capitalist/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bloons\x20TD\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/bloonstd/bloonstd.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/bloonstd/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Candy\x20Jump\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets/img/candyjump.webp\x22,\x22url\x22:\x22https://candyjump.games235.com/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cookie\x20Clicker\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets/img/cookieclicker.webp\x22,\x22url\x22:\x22https://cdn.jsdelivr.net/gh/rewz099/js-lib-cdn/cc-ajax.zip\x22,\x22disabled\x22:false,\x22local\x22:true},{\x22appName\x22:\x22DogeMiner\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/dogeminer.png\x22,\x22url\x22:\x22https://assets.hbmc.net/DogeMiner/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Flappy\x20Bird\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/fp.png\x22,\x22url\x22:\x22https://assets.hbmc.net/flappybird/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Idle\x20Breakout\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets/img/idlebreakout.webp\x22,\x22url\x22:\x22https://www.onlinegames.io/games/2024/more/idle-breakout/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Monkey\x20Mart\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets/img/monkeymart.webp\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/monkey-mart/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Papa\x27s\x20Burgeria\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/papasburgeria/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/papasburgeria/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Papa\x27s\x20Freezeria\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://www.speedrun.com/static/game/k6q4wmxd/cover.png?v=7eb2e2d\x22,\x22url\x22:\x22https://en.gameslol.net/data/awayjs/papa/freezeria.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Papa\x27s\x20Pizzeria\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/pizzeria.jpeg\x22,\x22url\x22:\x22https://assets.hbmc.net/papaspizzaria/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Papa\x27s\x20Taco\x20Mia\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://static.wikia.nocookie.net/fliplinestudios/images/d/d6/Taco_Mia_oldicon.jpg/revision/latest?cb=20121130030830\x22,\x22url\x22:\x22https://www.numuki.com/gameframe/papa-s-taco-mia\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slime\x20Rush\x20TD\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/slime-rush-td/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/slime-rush-td/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22A\x20Dark\x20Room\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/adarkroom/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/adarkroom/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Canyon\x20Defense\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/canyondefense/canyondefense.png\x22,\x22url\x22:\x22https://assets.hbmc.net/canyondefense/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22CS:GO\x20Clicker\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/csgo-clicker/case1.png\x22,\x22url\x22:\x22https://assets.hbmc.net/csgo-clicker/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Evolution\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/evolution/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/evolution/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Grindcraft\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/grindcraft/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/grindcraft/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Idle\x20Shark\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/idle-shark/favicon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/idle-shark/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Merge\x20Round\x20Racers\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/merge-round-racers/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/merge-round-racers/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Particle\x20Clicker\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/particle-clicker/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/particle-clicker/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Popcat\x20Classic\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/popcat-classic/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/popcat-classic/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sort\x20the\x20Court\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/sort-the-court/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/sort-the-court/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Space\x20Company\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/space-company/whiteLogo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/space-company/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Space\x20Garden\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/spacegarden/spl.png\x22,\x22url\x22:\x22https://assets.hbmc.net/spacegarden/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Starve\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/starve/favicon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/starve/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22You\x20Are\x20Bezos\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22/assets-fb/you-are-bezos/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/you-are-bezos/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22BLOODMONEY!\x22,\x22desc\x22:\x22Idle/Clicking\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/454.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/bloodmoney/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Sandbox/Creative\x22:[{\x22appName\x22:\x22Angry\x20Birds:\x20Showdown\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://static.wikia.nocookie.net/angrybirdsfanon/images/0/0a/Angry_Birds_Showdown_App_Icon_%28Alpha%29.png/revision/latest?cb=20190801034150\x22,\x22url\x22:\x22https://6381249690777614785.playables.usercontent.goog/v/assets/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bloons\x20TD\x202\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/btd2.png\x22,\x22url\x22:\x22https://assets.hbmc.net/bloonstd2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Burrito\x20Bison:\x20Launcha\x20Libre\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/vpTgm9u7-GzZP_MceTWpDi0HbinXd_4phCoTwf4ZspFL-115FtNRdo_SU1p-khLDnLA\x22,\x22url\x22:\x22https://rawcdn.githack.com/GameHub88/Yexex-Assets/main/bb/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cannon\x20Balls\x203D\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://gameforge.com/de-DE/littlegames/includes/images/games/7_5ea03e7e3fe27.jpg\x22,\x22url\x22:\x22https://14726002176993811037.playables.usercontent.goog/v/assets/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cell\x20Machine\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/cell-machine/img/te9nDu.png\x22,\x22url\x22:\x22https://assets.hbmc.net/cell-machine/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Dante\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/dante/splash.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/dante/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Friday\x20Night\x20Funkin\x27\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/fnf.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/fridaynightfunkin/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fruit\x20Ninja\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/fruit-ninja/FruitNinjaTeaser.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/fruitninja/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Glass\x20City\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/glass-city/image.png\x22,\x22url\x22:\x22https://assets.hbmc.net/glass-city/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Google\x20Snake\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/p19u9SINIT3SZUQ8NcdcX5ROSFeEgTBc8J2okk8TsqSz2cq6eFJ0ekT-TwwqEXAKrQ\x22,\x22url\x22:\x22https://assets.hbmc.net/google-snake/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22GunSpin\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/fLqvWSVq5rENEvu32xl0hf96wwSHVwQm-_9xc6KZg9Vgv9PbAtf1CyBYW7i1mlAXoSA\x22,\x22url\x22:\x22https://ubg365.github.io/gunspin/play.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kick\x20The\x20Buddy\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets/img/super-buddy-kick.webp\x22,\x22url\x22:\x22https://html5.gamedistribution.com/rvvASMiM/09399bfcb6e8462b873a6154b506ea99/index.html?gdpr-targeting=1&gd_sdk_referrer_url=https%3A%2F%2Fwww.silvergames.com%2Fen%2Fsuper-buddy-kick&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5zaWx2ZXJnYW1lcy5jb20vZW4vc3VwZXItYnVkZHkta2ljayIsInBhcmVudERvbWFpbiI6InNpbHZlcmdhbWVzLmNvbSIsInRvcERvbWFpbiI6InNpbHZlcmdhbWVzLmNvbSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Learn\x20To\x20Fly\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/learntofly.png\x22,\x22url\x22:\x22https://assets.hbmc.net/learntofly/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Learn\x20To\x20Fly\x202\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/ltf2.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/learntofly2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Learn\x20To\x20Fly\x203\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/learn-to-fly-3/ltf-3ll.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/learn-to-fly-3/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Line\x20Rider\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/G5DWbtulfohlQU3Pwp8_pfyMzL66Ry-V1fDR3Su8ISNCoJ6--wP1DQ3DUwSgHZUiZQ=w240-h480-rw\x22,\x22url\x22:\x22https://www.linerider.com/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Little\x20Alchemy\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets/img/littlealchemy.webp\x22,\x22url\x22:\x22https://littlealchemy.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Little\x20Alchemy\x202\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLDbrBKQlCSOXK7WNgx3myLJKrMD--5F8YkpI7ILih54J3ka6hyXDGOmZJr8_aXhuQA4&usqp=CAU\x22,\x22url\x22:\x22https://littlealchemy2.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Melon\x20Sandbox\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/6q7J7_wky8t9gMihsZsvmKAIvfJ1h1gen2SwakrzN7OGigFFN2_VUycZBaOTn2Qs6_E\x22,\x22url\x22:\x22https://nowgg.nl/play/playducky/7199/melon-sandbox.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Mindustry\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/mindustry/splash.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/mindustry/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Minecraft\x20(Java\x20Edition)\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets/img/minecraft.webp\x22,\x22url\x22:\x22https://mcraft.fun\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Pool/Billiards\x20Classic\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/KAyIN39YIUSorZxZ8iDtwO12C4V90ZSdi3tO7RUfxPxqGOhF6BYXv5VpAxlvfUWozI18\x22,\x22url\x22:\x22https://13739011225202344337.playables.usercontent.goog/v/assets/index.html#origin=https%3A%2F%2Fwww.youtube.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Portal\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/portalflash/portaltheflashversion.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/portalflash/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rise\x20Higher\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/risehigher.jpg\x22,\x22url\x22:\x22https://www.mathplayground.com/rise-higher/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stack\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/stack/stack.png\x22,\x22url\x22:\x22https://assets.hbmc.net/stack/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Stack\x20Bump\x203D\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/stack-bump-3d/thumbnail.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/stack-bump-3d/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Final\x20Earth\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/the-final-earth/images.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/the-final-earth/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Final\x20Earth\x202\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/the-final-earth-2/thumb.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/the-final-earth-2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22There\x20is\x20No\x20Game\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets/img/there-is-no-gms.webp\x22,\x22url\x22:\x22https://23azostore.github.io/s/there-is-no-game/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Tiny\x20Fishing\x22,\x22desc\x22:\x22All-Time\x20favorites\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/tiny-fishing/thumb.png\x22,\x22url\x22:\x22https://raw.githack.com/Skoolgq/Polaris-Assets/main/tiny-fishing/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22100ng\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/100ng/100ng-logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/100ng/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Angry\x20Sharks\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/angry-sharks/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/angry-sharks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Baldi\x27s\x20Basics\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/baldis-basics/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/baldis-basics/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Big\x20Red\x20Button\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/bigredbutton/bigredbutton.png\x22,\x22url\x22:\x22https://assets.hbmc.net/bigredbutton/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Black\x20Knight\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/blackknight/blackknight.png\x22,\x22url\x22:\x22https://assets.hbmc.net/blackknight/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Craftmine\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/craftmine/craftmine.png\x22,\x22url\x22:\x22https://assets.hbmc.net/craftmine/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Edge\x20Not\x20Found\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/edgenotfound/edge.png\x22,\x22url\x22:\x22https://assets.hbmc.net/edgenotfound/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Eel\x20Slap\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/eel-slap/eel-slap.png\x22,\x22url\x22:\x22https://assets.hbmc.net/eel-slap/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Elastic\x20Man\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/elasticman/elasticman.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/elasticman/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fake\x20Virus\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/fake-virus/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/fake-virus/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Flappy\x202048\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/flappy-2048/ClearSans-Bold-webfont.svg\x22,\x22url\x22:\x22https://assets.hbmc.net/flappy-2048/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22FNAW\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/fnaw/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/fnaw/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Frying\x20Nemo\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/frying-nemo/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/frying-nemo/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Generic\x20Fishing\x20Game\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/generic-fishing-game/icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/generic-fishing-game/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Gimme\x20The\x20Airpod\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/gimme-the-airpod/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/gimme-the-airpod/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Goodnight\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/goodnight/goodnight.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/goodnight/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hacker\x20Typer\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/hackertype/logo192.png\x22,\x22url\x22:\x22https://assets.hbmc.net/hackertype/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hungry\x20Lamu\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/hungry-lamu/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/hungry-lamu/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Interactive\x20Buddy\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/interactivebuddy/interactivebuddy.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/interactivebuddy/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kitten\x20Cannon\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/kittencannon/kittencannon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/kittencannon/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Mine\x20Blocks\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/mineblocks/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/mineblocks/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Minecraft\x20Classic\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/minecraft-classic/pack.png\x22,\x22url\x22:\x22https://assets.hbmc.net/minecraft-classic/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Minecraft\x20Beta\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/minecraftbeta/bg_main.png\x22,\x22url\x22:\x22https://assets.hbmc.net/minecraftbeta/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22My\x20Rusty\x20Submarine\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/my-rusty-submarine/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/my-rusty-submarine/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Physibox\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn-icons-png.flaticon.com/512/5930/5930147.png\x22,\x22url\x22:\x22https://assets.hbmc.net/physibox/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Precision\x20Client\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/precision-client/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/precision-client/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Resent\x20Client\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/resent-client/splash.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/resent-client/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Ruffle\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/ruffle/logo.svg\x22,\x22url\x22:\x22https://assets.hbmc.net/ruffle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sand\x20Game\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/sand-game/sand-game.PNG\x22,\x22url\x22:\x22https://assets.hbmc.net/sand-game/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Sandboxels\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/sandboxels/sandboxels.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/sandboxels/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Santy\x20Is\x20Home\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/santy-is-home/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/santy-is-home/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Spinning\x20Rat\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/spinningrat/apple-touch-icon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/spinningrat/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Hotel\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/the-hotel/splash.png\x22,\x22url\x22:\x22https://assets.hbmc.net/the-hotel/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Toss\x20the\x20Turtle\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/tosstheturtle/tosstheturtle.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tosstheturtle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Townscaper\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/townscaper/WebGL.jpg\x22,\x22url\x22:\x22https://assets.hbmc.net/townscaper/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22TV\x20Static\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/tv-static/static.png\x22,\x22url\x22:\x22https://assets.hbmc.net/tv-static/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Wall\x20Smash\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/wallsmash/thumb.png\x22,\x22url\x22:\x22https://assets.hbmc.net/wallsmash/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Weave\x20Silk\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/weavesilk/thumb.png\x22,\x22url\x22:\x22https://assets.hbmc.net/weavesilk/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22WebGL\x20Fluid\x20Simulation\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/webgl-fluid-simulation/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/webgl-fluid-simulation/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22WebRetro\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22/assets-fb/webretro/Flint_sprite.png\x22,\x22url\x22:\x22https://assets.hbmc.net/webretro/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22People\x20Playground\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://img.tapimg.net/market/images/f3f8c0d88767c8b847dd476179ff5634.png?imageView2/0/h/270/format/jpg/interlace/1/ignore-error/1&t=1\x22,\x22url\x22:\x22https://html-classic.itch.zone/html/14803006/ppg/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Class\x20of\x20\x2709\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/259.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/class-of-09/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Cuphead\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/465.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/web-ports/cuphead/734089aa8d8a82017733717dece88c83ba952a98/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Deltarune\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/425.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/deltarune/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Raft\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/457.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/raft/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22R.E.P.O\x20(REPO)\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/195.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/repo/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Undertale\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/184.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/undertale/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Undertale\x20(Yellow)\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/456.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/undertale-yellow/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22WebFishing\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/423.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/webfishing/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Happy\x20Sheepies\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/351.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/happy-sheepies/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Yume\x20Nikki\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/433.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/yume-nikki/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Crazy\x20Cattle\x203D\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/164.png\x22,\x22url\x22:\x22https://1games.io/game/crazy-cattle-3d/\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Horror/Survival\x22:[{\x22appName\x22:\x22Andy\x27s\x20Apple\x20Farm\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/426.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/andys-apple-farm/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Baldi\x27s\x20Basics\x20Classic\x20Remastered\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/466.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/baldi-remaster/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Dead\x20Plate\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/462.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/dead-plate/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Deadseat\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/458.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/deadseat/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Do\x20NOT\x20Take\x20This\x20Cat\x20Home\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/193.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/donottakethiscathome/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Fears\x20to\x20Fathom:\x20Home\x20Alone\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/460.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/fears-to-fathom/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Human\x20Expenditure\x20Program\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/482.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/human-expenditure-program/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Omori\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/427.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/omori-fixed/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slender:\x20The\x20Eight\x20Pages\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/451.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/slender/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22That\x27s\x20Not\x20My\x20Neighbor\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/216.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/thats-not-my-neighbor/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22The\x20Man\x20From\x20The\x20Window\x22,\x22desc\x22:\x22Survival/Horror\x20apps\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/gn-math/covers@main/459.png\x22,\x22url\x22:\x22https://rawcdn.githack.com/fowntain/web-port-doge/1102f068fff0083d2a5ed979ebac6425540d78a5/the-man-in-the-window/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}],\x22Multiplayer\x22:[{\x22appName\x22:\x22Defly.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.glitch.global/82c5292a-89b3-4a53-84e2-abbc0fa27724/defly_io.webp?v=1679319580067\x22,\x22url\x22:\x22https://defly.io/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Diep.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/6lO401fxwNTk919VwTKOdKGot82kf1WFBYGdhnVgDVsmkdK6Nv6d2ZDpmKBVO9CW2s8\x22,\x22url\x22:\x22https://diep.io/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Florr.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/florr.webp\x22,\x22url\x22:\x22https://florr.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Kirka.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.glitch.global/40d8a6f7-c124-43fe-8544-1617c1dcc948/download%20(1).jpeg?v=1680006191209\x22,\x22url\x22:\x22https://kirka.io/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Krunker.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/krunker.webp\x22,\x22url\x22:\x22https://krunker.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Robostorm\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22https://cdn.jsdelivr.net/gh/Skoolgq/Polaris-Assets/images/robostorm.jpg\x22,\x22url\x22:\x22https://robostorm.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Rocket\x20Bot\x20Royale\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets/img/rocketbotroyale.webp\x22,\x22url\x22:\x22https://rocketbotroyale.winterpixel.io/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Aquapark.io\x22,\x22desc\x22:\x22Sport\x20apps\x22,\x22icon\x22:\x22/assets/img/aquapark.webp\x22,\x22url\x22:\x22https://classroom6x.gitlab.io/aquaparkio/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Geometry\x20Dash\x20Lite\x22,\x22desc\x22:\x22Ball/Platformer\x20apps\x22,\x22icon\x22:\x22/assets/img/geometrydash.webp\x22,\x22url\x22:\x22https://geometrydash-lite.io/\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Evowars.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/8MffWSh6-Onwm--Hb5r7UUi21c7MxurIFIrNbBfIPHbb6KIcthHB2PUKcch6L0dO7HA\x22,\x22url\x22:\x22https://evowars.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Hole.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets/img/hole-io.webp\x22,\x22url\x22:\x22https://hole-io.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Paper.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets/img/paperio.webp\x22,\x22url\x22:\x22https://paper-io.com\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Slither.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA\x22,\x22url\x22:\x22https://slither.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Snowbattle.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/snowbattle/img/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/snowbattle/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Territorial.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets/img/territorial.webp\x22,\x22url\x22:\x22https://territorial.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Yohoho.io\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22https://lh3.googleusercontent.com/BulAgT61Ocg2r5obu2apG_IOYUi3t16vdmBwy0uAgmiOatFUfcRVuRKFPGSsz0kRJN8N\x22,\x22url\x22:\x22https://rawcdn.githack.com/GameHub88/Yexex-Assets/main/yohoho/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Bonk.io\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://b.thumbs.redditmedia.com/9p8-wn2_KPdgjPTaR9fx-NIVgFhvsgBL0WPdbv5GMkA.png\x22,\x22url\x22:\x22https://bonk.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Taming.io\x22,\x22desc\x22:\x22Sandbox/Arcade\x20apps\x22,\x22icon\x22:\x22https://play-lh.googleusercontent.com/EoY1Ey67rMjTHXIUqZCL3m4Ad4Of8BQr7tUHIcHWkM4YEiMugylaTPBNPAZQ6J8jumI=w240-h480-rw\x22,\x22url\x22:\x22https://taming.io\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Paper.io\x202\x22,\x22desc\x22:\x22Domination-type\x20fun\x22,\x22icon\x22:\x22/assets-fb/paperio2/logo.png\x22,\x22url\x22:\x22https://assets.hbmc.net/paperio2/index.html\x22,\x22disabled\x22:false,\x22local\x22:false},{\x22appName\x22:\x22Surviv.io\x22,\x22desc\x22:\x22Fun\x20Action\x22,\x22icon\x22:\x22/assets-fb/surviv/favicon.png\x22,\x22url\x22:\x22https://assets.hbmc.net/surviv/index.html\x22,\x22disabled\x22:false,\x22local\x22:false}]}', 'tOXDc', 'displayName', 'New', 'G-HWLK0PZVBM', 'shadowRoot', 'ntYmW', '59,\x20130,\x20246', 'beforeunload', 'top', 'Google.com\x20helps\x20you\x20find\x20anything\x20online.', 'top\x20left', 'activeFrameRef', 'Amazon', 'w-7\x20h-7', '126782QNdoGw', 'layout\x20style\x20paint', 'current', 'flex\x20flex-wrap\x20justify-center\x20gap-4', '#162218', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/120px-Google_Favicon_2025.svg.png', 'w-full\x20px-3\x20py-1.5\x20text-[0.74rem]\x20flex\x20items-center\x20gap-2\x20hover:bg-white/10\x20duration-150\x20text-left\x20text-red-400', 'circle', 'getItem', 'engineIcon', '225,\x20225,\x2073', 'buCVo', 'vIehi', 'prType', 'apply', 'requestIdleCallback', 'jMOaE', 'rounded-t-[14px]\x20rounded-b-none', 'Google\x27s\x20fast,\x20secure\x20email\x20service.', 'https://searx.be/search?q=', '66,\x2069,\x2073', 'IxFKu', 'yRLvj', 'kFbAd', 'relative', 'hHYDs', 'load', 'remove', 'https://www.gigablast.com/search?q=', 'Module', 'searchBarColor', 'dnKtK', 'Griddy', '255,\x20255,\x20255', 'Play\x20high-end\x20PC\x20games\x20via\x20GeForce\x20NOW\x20cloud.', 'Bing', 'Quizlet', '#ffffff1c', 'useContext', '#fffaea', '519532Wyyyit', 'shift\x20+\x20f', 'mouseleave', 'Big\x20Ideas\x20Math', '#353535', '#c7bab8', '#3f7a5a', 'Presearch', 'xRKhZ', 'object', 'Provider', 'border', 'h-full\x20w-full\x20outline-0\x20text-[0.8rem]\x20ml-2', 'Unable\x20to\x20preload\x20CSS\x20for\x20', 'text-sm\x20text-gray-500', 'Stellar', 'onload', 'svg', 'https://github.com/favicon.ico', 'w-full\x20px-3\x20py-1.5\x20text-[0.74rem]\x20flex\x20items-center\x20gap-2\x20hover:bg-white/10\x20duration-150\x20text-left', '/scram/scramjet.all.js', 'https://instagram.com', 'xnZGJ', 'Pvxzw', 'https://github.com', 'fIVPw', 'teQZo', '/assets/img/goog.webp', '0.8', 'randomUUID', 'defaultPrevented', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20repeating-linear-gradient(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2045deg,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rgba(', 'Shift', 'https://twitch.tv', '#fdedea', 'opacity-100\x20z-10\x20pointer-events-auto', 'url', 'Swisscows', '/materials', 'duration-100\x20rounded-lg', 'opacity-0\x20group-hover:opacity-100', '/assets/img/youtube.webp', 'test', 'DmhnW', '#344646', '#9baec8', 'img', 'https://fmhy.net', ',0.15),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rgba(', 'https://www.sogou.com/web?query=', 'jGOwG', 'keydown', 'trim', 'New\x20Bookmark', '/return?q=', 'RVMrM', 'You.com', 'set', 'dQfLa', 'LINK', 'kYITP', 'lmWUa', 'EzLDt', 'bookmarks', 'CJyYw', 'DriUH', '#fff', 'h-[calc(100%-100px)]\x20flex\x20flex-col\x20items-center\x20justify-center\x20p-6\x20gap-8', 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU', 'document', 'tabColor', 'QuKKY', 'YsHCU', 'prototype', 'self', 'iMjyx', '5.0.41', 'initialize', 'src', 'aflqC', 'Shop\x20millions\x20of\x20products\x20online.', 'flex\x20justify-center\x20items-center\x20h-full', 'lp2oyx1', 'KKazA', '#3d2a2a', 'theme-', 'zoom', 'addedNodes', 'Mglmd', 'map', 'HMSOn', 'https://you.com/search?q=', '50%', '#463131', 'forEach', 'DuckDuckGo', 'Logo', '#0c1711', 'Home', 'clientX', '{}.constructor(\x22return\x20this\x22)(\x20)', 'Gmail', '\x20h-[calc(100%-8px)]\x20w-full', 'getState', 'New\x20Tab', 'href', 'qwMSK', 'UwFld', 'updateActiveFrameRef', 'WoRng', 'transform', 'radial-gradient(circle,\x20rgba(', 'Qwant', 'Home\x20|\x20Schoology', '#f3f4f6', 'Facebook', '#15261c', 'integrity', 'defineProperty', 'https://presearch.com/search?q=', 'vmCmK', 'input', 'l8hvl7z', 'bg-black/35', 'indexOf', 'off', 'opacity-50', 'https://play.geforcenow.com', 'querySelector', 'hover:bg-[#fff3]', 'wdFMi', 'some', 'init', '46,\x2066,\x2054', 'border-gray-300', 'textMuted', 'mousedown', 'flex-1\x20bg-transparent\x20outline-hidden\x20text-[16.5px]\x20leading-[20px]\x20placeholder:font-[Inter]\x20placeholder:font-medium', 'Yandex', 'SLToJ', 'PXvJL', 'uGxmu', 'span', 'Save', '80%', 'flex\x20flex-col\x20items-center\x20justify-center\x20relative\x20group\x20w-20\x20h-[5.5rem]\x20rounded-md\x20border-transparent\x20cursor-pointer\x20duration-200\x20ease-in-out', 'JrwDA', '3bxirmf', 'IdEZn', '#ffffff', 'https://play-lh.googleusercontent.com/1Ns1T_qN0pEXMvZeZ5lQNAR8z4blP7ce2J2Nn5doXvt2T1g_W7VMORdWHaApkOooupI=w240-h480-rw', '/assets/img/twitch.webp', 'https://', 'cursor-not-allowed\x20opacity-70', '#d1d1d170', '#25273a', 'altKey', 'protocol', 'https://discord.com/app', '/assets/img/pin.webp', 'Outlook', 'div', '4721832rjTZOX', '#c3b6b6', '#162337', 'forest', '12px', '#06080d8f', 'match', '102,\x20105,\x20109', 'toFcK', 'vhKNN', 'cursor-pointer\x20duration-150\x20hover:opacity-80', 'neal.fun', 'https://petalsearch.com/search?query=', 'Wikipedia', 'findIndex', 'value', 'px,\x200)', 'slice', 'table', 'flex\x20flex-1\x20flex-shrink\x20px-2\x20h-[calc(100%-7px)]\x20min-w-[60px]\x20max-w-[200px]', 'quickModalBgColor', '#232538', '2938607BzYZyg', 'b5gde0a', 'Discover\x20and\x20save\x20ideas\x20with\x20Pinterest.', 'omit', 'title', 'w-[15.8rem]\x20h-30', 'RSnAI', 'VOEEp', '#111827', 'script', 'add', 'sNsJK', 'OmREd', 'menuColor', '#221a1a', 'getAttribute', 'tZXRi', 'getElementById', 'head', 'The\x20free\x20encyclopedia\x20that\x20anyone\x20can\x20edit.', 'hlvVE', '232,\x20255,\x20243', 'Clear\x20Tabs', 'UmKOf', 'toString', 'przouz2', 'Quizlet:\x20Study\x20Tools\x20&\x20Learning\x20Resources\x20for\x20Students\x20and\x20Teachers\x20|\x20Quizlet', '#0a0b14', 'Save\x20Changes', 'left', 'BTRjo', '#0a0b0f8f', 'Fragment', 'Lycos', 'index', 'Zoom', 'resolve', '120%', 'SVorY', 'https://wikipedia.org', 'useState', 'createElement', 'zeBlo', 'scale-95\x20opacity-0', 'jwbKt', 'px)', 'absolute\x20inset-0\x20w-full\x20h-full', 'Watch\x20unlimited\x20anime\x20episodes\x20in\x20HD\x20for\x20free.', '#312929', 'contains', 'mouseenter', 'mochaTheme', '#c6c6c68f', 'https://www.google.com/s2/favicons?sz=128&domain=outlook.live.com', 'mLVQg', 'Share\x20photos,\x20reels,\x20and\x20stories.', 'lazy'];
    d = function() {
        return d9;
    }
    ;
    return d();
}
De[bc(0x1ee)] = 'QuickLinks';
const qs = ({id: b, updateFn: c}) => {
    const cm = bc
      , af = {
        'WfitB': cm(0x2c4),
        'DCtfQ': '-mt-3\x20absolute\x20z-50'
    }
      , ag = {
        'id': b,
        'go': c,
        'process': D
    };
    return f['jsx'](af[cm(0x170)], {
        'className': cm(0x266),
        'children': f[cm(0x3da)](cm(0x2c4), {
            'className': cm(0x1de),
            'children': [f[cm(0x136)]('div', {
                'className': 'flex\x20justify-center\x20w-full',
                'children': f['jsx'](ce, {
                    'options': 'w-[15.8rem]\x20h-30\x20mr-5\x20mb-2'
                })
            }), f[cm(0x136)](Fs, {
                'nav': !0x1,
                'logo': !0x1,
                'cls': af['DCtfQ'],
                'navigating': ag
            }), f['jsx'](De, {
                'cls': cm(0x10c),
                'nav': !0x1,
                'navigating': ag
            })]
        })
    });
}
  , Ls = ({zoom: b}) => {
    const cn = bc
      , af = {
        'pxbMZ': function(ax, ay) {
            return ax === ay;
        },
        'xWQdk': function(ax, ay, az) {
            return ax(ay, az);
        },
        'jGOwG': function(ax, ay) {
            return ax(ay);
        }
    }
      , ag = B(ax => ax[cn(0x16f)])
      , ah = af['jGOwG'](B, ax => ax['updateUrl'])
      , ai = B(ax => ax[cn(0x1d7)])
      , aj = af['jGOwG'](B, ax => ax[cn(0x1b0)])
      , ak = B(ax => ax['setFrameRefs']);
    B(ax => ax['wispStatus']);
    const {iframeUrls: al, setIframeUrl: am, showMenu: an, toggleMenu: ao} = B()
      , ap = r['useRef']({})
      , aq = r[cn(0x394)]({})
      , ar = r[cn(0x394)]({})
      , {options: at} = T()
      , au = B(ax => ax[cn(0x28f)])
      , av = af[cn(0x255)](B, ax => ax[cn(0x1f8)]);
    r[cn(0x144)]( () => {
        const co = cn;
        ak(ap);
        const ax = new Set(ag[co(0x27c)](ay => ay['id']));
        Object['keys'](ap['current'])[co(0x281)](ay => {
            ax['has'](ay) || delete ap['current'][ay];
        }
        );
    }
    , [ak, ag]),
    r['useEffect']( () => {
        const cp = cn
          , ax = [];
        ag[cp(0x281)](az => {
            const cq = cp
              , aA = {
                'mGgzl': cq(0x39f),
                'kcVZQ': function(aE, aF) {
                    return aE === aF;
                },
                'VbGOK': function(aE, aF) {
                    return aE !== aF;
                }
            };
            if (az[cq(0x247)] === cq(0x17a))
                return;
            const aB = ap[cq(0x1fd)][az['id']];
            if (!aB)
                return;
            const aC = () => {
                const cr = cq;
                aj(az['id'], !0x1);
                try {
                    aB['contentWindow']?.[cr(0x268)]?.[cr(0x2ec)](aA['mGgzl']) && aB[cr(0x3cf)]['location']['replace'](az[cr(0x247)]);
                } catch {}
            }
              , aD = () => {
                const ct = cq;
                try {
                    const aE = aB[ct(0x3cf)]['location'][ct(0x28c)]
                      , aF = aB['contentWindow'][ct(0x268)]['title'];
                    if (aA['kcVZQ'](aE, 'about:blank'))
                        return;
                    !az[ct(0x350)] && aA['VbGOK'](aE, aq[ct(0x1fd)][az['id']]) && aE !== az['url'] && (aq[ct(0x1fd)][az['id']] = aE,
                    ah(az['id'], aE)),
                    aF && aA['VbGOK'](aF, ar['current'][az['id']]) && aF !== az['title'] && (ar['current'][az['id']] = aF,
                    ai(az['id'], aF));
                } catch {}
            }
            ;
            aB[cq(0x3d8)]('load', aC),
            aB[cq(0x3d8)](cq(0x215), aD),
            ax['push']({
                'iframe': aB,
                'handleLoad': aC,
                'checkState': aD,
                'tabId': az['id']
            });
        }
        );
        const ay = setInterval( () => {
            const cu = cp;
            ag[cu(0x281)](az => {
                const cv = cu;
                if (az[cv(0x247)] === 'tabs://new')
                    return;
                const aA = ap['current'][az['id']];
                if (aA)
                    try {
                        const aB = aA[cv(0x3cf)]['location'][cv(0x28c)]
                          , aC = aA[cv(0x3cf)][cv(0x268)]['title'];
                        if (aB === cv(0x3c1))
                            return;
                        if (aA[cv(0x3cf)]?.[cv(0x268)]?.['getElementById'](cv(0x39f))) {
                            aA['contentWindow'][cv(0x1c2)]['replace'](az[cv(0x247)]);
                            return;
                        }
                        !az[cv(0x350)] && aB !== aq['current'][az['id']] && aB !== az['url'] && (aq['current'][az['id']] = aB,
                        am(az['id'], aB)),
                        aC && aC !== ar[cv(0x1fd)][az['id']] && aC !== az[cv(0x2df)] && (ar[cv(0x1fd)][az['id']] = aC,
                        ai(az['id'], aC));
                    } catch {}
            }
            );
        }
        , 0x1f4);
        return () => {
            const cw = cp;
            ax[cw(0x281)]( ({iframe: az, handleLoad: aA, checkState: aB}) => {
                const cx = cw;
                az['removeEventListener']('load', aA),
                az['removeEventListener'](cx(0x215), aB);
            }
            ),
            clearInterval(ay);
        }
        ;
    }
    , [ag, aj, ai, am]),
    r['useEffect']( () => {
        const ax = {
            'oydAc': function(az, aA) {
                return af['pxbMZ'](az, aA);
            }
        }
          , ay = af['xWQdk'](setInterval, () => {
            ag['forEach'](az => {
                const cy = e;
                if (ax['oydAc'](az[cy(0x247)], cy(0x17a)))
                    return;
                const aA = ap[cy(0x1fd)][az['id']];
                if (aA)
                    try {
                        const aB = aA['contentWindow'][cy(0x1c2)]['href'];
                        aB !== al[az['id']] && am(az['id'], aB);
                    } catch {}
            }
            );
        }
        , 0x1f4);
        return () => clearInterval(ay);
    }
    , [ag, al, am]),
    r[cn(0x144)]( () => {
        const cz = cn;
        if (av?.['current'])
            try {
                av[cz(0x1fd)]['contentWindow']['document'][cz(0x35e)]['style'][cz(0x279)] = b;
            } catch {}
    }
    , [av, b]),
    r['useEffect']( () => {
        const cA = cn;
        ag[cA(0x281)](ax => {
            const cB = cA;
            if (ax[cB(0x145)]) {
                const ay = {
                    'current': ap[cB(0x1fd)][ax['id']]
                };
                au(ay);
            }
        }
        );
    }
    , [ag]);
    const aw = ag[cn(0x3a9)](ax => ax[cn(0x247)] === cn(0x17a) && ax[cn(0x145)]);
    return f['jsxs']('div', {
        'className': 'relative\x20w-full\x20h-full',
        'children': [ag['map']( ({id: ax, url: ay, active: az}) => ay === 'tabs://new' ? null : f['jsxs'](cn(0x2c4), {
            'className': j(cn(0x309), az ? 'opacity-100\x20z-10\x20pointer-events-auto' : 'opacity-0\x20z-0\x20pointer-events-none'),
            'children': [az && f[cn(0x136)](cn(0x2c4), {
                'className': 'absolute\x20inset-0\x20w-full\x20h-full\x20flex\x20items-center\x20justify-center\x20-z-20',
                'style': {
                    'backgroundColor': at[cn(0x35c)] || cn(0x3c8)
                },
                'children': f['jsx'](m, {
                    'size': 0x20,
                    'className': cn(0x1ab)
                })
            }), f['jsx'](cn(0x1cf), {
                'ref': aA => ap[cn(0x1fd)][ax] = aA,
                'src': ay,
                'style': {
                    'display': cn(0x18b),
                    'width': '100%',
                    'height': '100%'
                },
                'className': cn(0x372)
            }), an && f['jsx']('div', {
                'className': 'absolute\x20inset-0\x20w-full\x20h-full\x20z-50',
                'onClick': () => ao()
            })]
        }, ax)), aw && f['jsx'](cn(0x2c4), {
            'className': j('absolute\x20inset-0\x20w-full\x20h-full', cn(0x246)),
            'children': f[cn(0x136)](qs, {
                'id': aw['id'],
                'updateFn': ah
            })
        }, aw['id'])]
    });
}
  , Es = () => {
    const cC = bc
      , b = {
        'ZNXYA': function(at, au, av, aw) {
            return at(au, av, aw);
        },
        'mBrUb': function(at, au) {
            return at + au;
        },
        'QuKKY': function(at, au, av, aw) {
            return at(au, av, aw);
        },
        'yRLvj': function(at) {
            return at();
        },
        'AxKlO': function(at, au, av) {
            return at(au, av);
        },
        'VOEEp': 'opacity-50',
        'KKotA': function(at, au) {
            return at === au;
        },
        'QEpIW': cC(0x366),
        'CJyYw': 'opacity-50\x20cursor-not-allowed',
        'AwHCm': cC(0x3b9),
        'SLToJ': function(at, au) {
            return at === au;
        },
        'Aqzul': cC(0x16e),
        'PETUd': function(at, au) {
            return at >= au;
        },
        'BTRjo': function(at, au, av, aw) {
            return at(au, av, aw);
        },
        'EuyOu': 'light'
    }
      , {tabs: af, zoomLevels: ag, setZoom: ah, resetZoom: ai} = B()
      , aj = B(at => at['activeFrameRef'])
      , {options: ak} = b[cC(0x211)](T)
      , al = af[cC(0x3a9)](at => at['active'])
      , am = al && ag[al['id']] || 0x64
      , an = al?.[cC(0x247)] === cC(0x17a)
      , ao = al && !an && aj?.['current']
      , ap = r[cC(0x3b8)]( () => {
        const cD = cC;
        ao && am < 0xc8 && b[cD(0x1c1)](ah, al['id'], Math[cD(0x115)](b[cD(0x17f)](am, 0xa), 0xc8), aj);
    }
    , [ao, al, am, ah, aj])
      , aq = r[cC(0x3b8)]( () => {
        const cE = cC;
        ao && am > 0x32 && b[cE(0x26a)](ah, al['id'], Math[cE(0x108)](am - 0xa, 0x32), aj);
    }
    , [ao, al, am, ah, aj])
      , ar = r[cC(0x3b8)]( () => {
        ao && ai(al['id'], aj);
    }
    , [ao, al, ai, aj]);
    return f['jsxs'](cC(0x2c4), {
        'className': cC(0x184),
        'children': [f[cC(0x136)]('span', {
            'className': b['AxKlO'](j, cC(0x11e), ao ? void 0x0 : b[cC(0x2e2)]),
            'children': cC(0x2fe)
        }), f[cC(0x3da)]('div', {
            'className': cC(0x172),
            'children': [f['jsx'](cC(0x3b9), {
                'type': 'button',
                'onClick': aq,
                'disabled': !ao || am <= 0x32,
                'className': j(cC(0x3ca), b[cC(0x3af)](ak['type'], 'light') ? cC(0x16e) : b['QEpIW'], !ao || am <= 0x32 ? b[cC(0x263)] : ''),
                'children': f[cC(0x136)](a3, {
                    'size': 0xe
                })
            }), f[cC(0x3da)](cC(0x3b9), {
                'type': b[cC(0x183)],
                'onClick': ar,
                'disabled': !ao,
                'className': j('text-[0.75rem]\x20min-w-[3rem]\x20text-center\x20px-2\x20py-0.5\x20rounded', b[cC(0x2ae)](ak['type'], 'light') ? b['Aqzul'] : 'hover:bg-[#ffffff0c]', ao ? '' : b[cC(0x263)]),
                'children': [am, '%']
            }), f['jsx']('button', {
                'type': 'button',
                'onClick': ap,
                'disabled': !ao || b['PETUd'](am, 0xc8),
                'className': b[cC(0x2f9)](j, 'w-6\x20h-6\x20rounded\x20flex\x20items-center\x20justify-center', ak['type'] === b[cC(0xfe)] ? 'hover:bg-gray-100' : cC(0x366), !ao || am >= 0xc8 ? b[cC(0x263)] : ''),
                'children': f[cC(0x136)](o, {
                    'size': 0xe
                })
            })]
        })]
    });
}
  , _s = ({isOpen: af, onClose: ag, inLoader: ah=!0x1}) => {
    const cF = bc
      , ai = {
        'EmUiS': function(aT, aU) {
            return aT(aU);
        },
        'shQZs': function(aT, aU) {
            return aT(aU);
        },
        'tNcDu': function(aT, aU) {
            return aT(aU);
        },
        'xHWoz': function(aT) {
            return aT();
        },
        'EIYTD': cF(0x111),
        'lMtzV': cF(0x2c4),
        'rFsrc': function(aT, aU, aV) {
            return aT(aU, aV);
        },
        'UYZHk': 'fixed\x20inset-0\x20z-[9999]\x20flex\x20items-center\x20justify-center\x20p-4\x20transition-opacity',
        'UpwNU': function(aT, aU, aV) {
            return aT(aU, aV);
        },
        'ADFrW': cF(0x306),
        'GjytZ': '#1a252f',
        'CobHR': cF(0x172),
        'IJaJn': 'Edit\x20Bookmark',
        'hlvVE': 'hover:bg-[#ffffff0c]',
        'uqrgY': function(aT, aU, aV) {
            return aT(aU, aV);
        },
        'FCzEK': 'p-1\x20rounded-md',
        'oCDIJ': cF(0x361),
        'eWIyU': 'Bookmark\x20Name',
        'BqFWT': 'button',
        'GmcDB': 'flex-1\x20px-3\x20py-2\x20text-sm\x20rounded-md\x20flex\x20items-center\x20justify-center\x20gap-2',
        'kFbAd': 'opacity-50\x20cursor-not-allowed',
        'xnZGJ': cF(0x2f7),
        'ovriv': 'bg-[#ffffff0c]\x20hover:bg-[#ffffff15]',
        'Pvxzw': 'Cancel'
    }
      , {options: aj, updateOption: ak} = T()
      , al = ai['xHWoz'](u)
      , {tabs: am, updateUrl: an, setLoading: ao} = B()
      , [ap,aq] = r[cF(0x303)]([])
      , [ar,at] = r[cF(0x303)]('')
      , [au,av] = r[cF(0x303)]('')
      , [aw,ax] = r[cF(0x303)]('')
      , [ay,az] = r['useState'](null)
      , [aA,aB] = r[cF(0x303)](!0x1)
      , [aC,aD] = r[cF(0x303)](!0x1)
      , [aE,aF] = r['useState'](!0x1)
      , [aG,aH] = r['useState'](new Set())
      , [aI,aJ] = r['useState'](new Set());
    r[cF(0x144)]( () => {
        af ? (aF(!0x0),
        setTimeout( () => aD(!0x0), 0xa)) : (aD(!0x1),
        setTimeout( () => aF(!0x1), 0xc8));
    }
    , [af]),
    r['useEffect']( () => aq(aj['bookmarks'] || []), [aj[cF(0x262)]]);
    const aK = aT => {
        aq(aT),
        ak({
            'bookmarks': aT
        });
    }
      , aL = (aT, aU) => {
        const cG = cF;
        let aV = 0x1
          , aW = aT;
        const aX = ap['filter'](aY => aY['id'] !== aU)['map'](aY => aY[cG(0x105)]);
        for (; aX['includes'](aW); )
            aW = aT + '\x20(' + aV++ + ')';
        return aW;
    }
      , aM = () => {
        at(''),
        av(''),
        ax(''),
        az(null),
        aB(!0x1);
    }
      , aN = () => {
        const cH = cF;
        if (!ar[cH(0x257)]())
            return;
        const aT = aU => /^(https?:)?\/\//[cH(0x24d)](aU) ? aU : 'https://' + aU;
        aK([...ap, {
            'id': crypto[cH(0x240)](),
            'name': ai['EmUiS'](aL, au[cH(0x257)]() || cH(0x258)),
            'url': aT(ar['trim']()),
            'icon': aw['trim']() ? ai['EmUiS'](aT, aw['trim']()) : null
        }]),
        aM();
    }
      , aO = () => {
        const cI = cF;
        if (!ar[cI(0x257)]() || !ay)
            return;
        const aT = aW => /^(https?:)?\/\//['test'](aW) ? aW : cI(0x2bb) + aW
          , aU = ap[cI(0x3a9)](aW => aW['id'] === ay)
          , aV = aw['trim']() ? aT(aw['trim']()) : null;
        aU && aU['icon'] !== aV && (aJ(aW => {
            const aX = new Set(aW);
            return aX['delete'](ay),
            aX;
        }
        ),
        aH(aW => {
            const aX = new Set(aW);
            return aX['delete'](ay),
            aX;
        }
        )),
        ai['EmUiS'](aK, ap[cI(0x27c)](aW => aW['id'] === ay ? {
            ...aW,
            'name': aL(au[cI(0x257)]() || cI(0x258), ay),
            'url': aT(ar[cI(0x257)]()),
            'icon': aV
        } : aW)),
        aM();
    }
      , aP = aT => {
        const cJ = cF;
        az(aT['id']),
        at(aT['url']),
        av(aT['name']),
        ax(aT[cJ(0x329)] || ''),
        aB(!0x0);
    }
      , aQ = aT => aK(ap[cF(0x1bc)](aU => aU['id'] !== aT))
      , aR = aT => /^(https?:)?\/\//['test'](aT) ? aT : 'https://' + aT;
    if (!aE)
        return null;
    const aS = aj[cF(0x113)] === ai['EIYTD'];
    return a4[cF(0x385)](f['jsxs'](ai['lMtzV'], {
        'className': ai['rFsrc'](j, ai['UYZHk'], aC ? 'opacity-100' : cF(0x324)),
        'children': [f[cF(0x136)]('div', {
            'className': 'fixed\x20inset-0\x20bg-black/50',
            'onClick': ag
        }), f[cF(0x3da)](ai[cF(0x177)], {
            'className': ai[cF(0x32b)](j, cF(0x12e), aC ? 'scale-100\x20opacity-100' : ai['ADFrW']),
            'style': {
                'backgroundColor': aj[cF(0x2e8)] || ai['GjytZ']
            },
            'children': [f[cF(0x3da)](cF(0x2c4), {
                'className': 'flex\x20items-center\x20justify-between\x20px-4\x20py-3\x20border-b',
                'style': {
                    'borderColor': aS ? '#e5e7eb' : cF(0x16b)
                },
                'children': [f['jsxs']('div', {
                    'className': ai[cF(0x3cd)],
                    'children': [f[cF(0x136)]('h2', {
                        'className': 'text-lg\x20font-medium',
                        'children': aA ? ay ? ai['IJaJn'] : cF(0x3b0) : 'Bookmarks'
                    }), !aA && f['jsx']('button', {
                        'onClick': () => aB(!0x0),
                        'className': j('p-1\x20rounded-md', aS ? 'hover:bg-gray-100' : ai[cF(0x2ef)]),
                        'children': f['jsx'](o, {
                            'size': 0x12
                        })
                    })]
                }), f[cF(0x136)]('button', {
                    'onClick': ag,
                    'className': ai[cF(0x32c)](j, ai[cF(0x390)], aS ? cF(0x16e) : cF(0x366)),
                    'children': f['jsx'](n, {
                        'size': 0x14
                    })
                })]
            }), f[cF(0x136)]('div', {
                'className': 'p-4\x20overflow-y-auto\x20max-h-[calc(80vh-4rem)]',
                'children': aA ? f[cF(0x3da)](ai[cF(0x177)], {
                    'className': ai[cF(0x3d0)],
                    'children': [[[ai[cF(0x17e)], au, av, a5], ['Bookmark\x20URL', ar, at, l], ['Bookmark\x20Icon\x20(URL)', aw, ax, a6]][cF(0x27c)]( ([aT,aU,aV,aW], aX) => f['jsxs'](cF(0x2c4), {
                        'className': j(cF(0x379), aS ? 'bg-gray-50\x20border-gray-300' : 'bg-[#ffffff0c]\x20border-gray-700'),
                        'children': [f['jsx'](aW, {
                            'size': 0x10
                        }), f[cF(0x136)]('input', {
                            'value': aU,
                            'onChange': aY => aV(aY['target'][cF(0x2d4)]),
                            'placeholder': aT,
                            'className': 'w-full\x20py-2\x20text-sm\x20bg-transparent\x20outline-none'
                        })]
                    }, aX)), f['jsxs']('div', {
                        'className': cF(0x3aa),
                        'children': [f['jsxs'](ai['BqFWT'], {
                            'onClick': ay ? aO : aN,
                            'disabled': !ar['trim'](),
                            'className': j(ai['GmcDB'], aS ? 'bg-gray-200\x20hover:bg-gray-300' : cF(0x16a), !ar[cF(0x257)]() && ai[cF(0x212)]),
                            'children': [ay ? f[cF(0x136)](a7, {
                                'size': 0x10
                            }) : f['jsx'](o, {
                                'size': 0x10
                            }), ay ? ai[cF(0x239)] : 'Add\x20Bookmark']
                        }), f[cF(0x136)](ai['BqFWT'], {
                            'onClick': aM,
                            'className': j(cF(0x34c), aS ? cF(0x3a5) : ai['ovriv']),
                            'children': ai[cF(0x23a)]
                        })]
                    })]
                }) : ap['length'] === 0x0 ? f[cF(0x136)]('p', {
                    'className': cF(0x231),
                    'children': 'No\x20bookmarks\x20yet.'
                }) : f[cF(0x136)]('div', {
                    'className': 'space-y-2',
                    'children': ap['map'](aT => f[cF(0x3da)]('div', {
                        'onClick': () => {
                            const cK = cF;
                            if (ah) {
                                const aU = am[cK(0x3a9)](aV => aV['active']);
                                if (aU) {
                                    const aV = D(ai['shQZs'](aR, aT[cK(0x247)]), !0x1, aj[cK(0x208)] || cK(0x19c), aj[cK(0x168)] || null);
                                    ao(aU['id'], !0x0),
                                    an(aU['id'], aV),
                                    ag();
                                }
                            } else
                                al(cK(0x15b), {
                                    'state': {
                                        'url': ai['EmUiS'](aR, aT[cK(0x247)])
                                    }
                                });
                        }
                        ,
                        'className': j(cF(0x181), aS ? cF(0x16e) : 'hover:bg-[#ffffff0c]'),
                        'children': [f['jsx']('div', {
                            'className': 'w-5\x20h-5\x20relative\x20flex-shrink-0',
                            'children': aT['icon'] && !aG['has'](aT['id']) ? f['jsxs'](f[cF(0x2fb)], {
                                'children': [!aI['has'](aT['id']) && f[cF(0x136)](cF(0x2c4), {
                                    'className': 'absolute\x20inset-0\x20bg-gray-600\x20rounded\x20animate-pulse'
                                }), f['jsx'](cF(0x251), {
                                    'src': aT[cF(0x329)],
                                    'className': cF(0x19d),
                                    'onLoad': () => aJ(aU => new Set(aU)['add'](aT['id'])),
                                    'onError': () => aH(aU => new Set(aU)[cF(0x2e5)](aT['id']))
                                })]
                            }) : f['jsx'](l, {
                                'size': 0x14
                            })
                        }), f[cF(0x3da)]('div', {
                            'className': cF(0x344),
                            'children': [f['jsx'](cF(0x2c4), {
                                'className': cF(0x109),
                                'children': aT['name']
                            }), f[cF(0x136)](cF(0x2c4), {
                                'className': cF(0x1c7),
                                'children': aT['url']
                            })]
                        }), f['jsx'](cF(0x3b9), {
                            'onClick': aU => {
                                aU['stopPropagation'](),
                                aP(aT);
                            }
                            ,
                            'className': j('p-1.5\x20rounded-md', aS ? 'hover:bg-gray-200' : cF(0x13b)),
                            'children': f['jsx'](a1, {
                                'size': 0x10
                            })
                        }), f[cF(0x136)](cF(0x3b9), {
                            'onClick': aU => {
                                const cL = cF;
                                aU[cL(0x3a4)](),
                                ai['tNcDu'](aQ, aT['id']);
                            }
                            ,
                            'className': j('p-1.5\x20rounded-md', aS ? cF(0x1af) : cF(0x13b)),
                            'children': f['jsx'](a2, {
                                'size': 0x10
                            })
                        })]
                    }, aT['id']))
                })
            })]
        })]
    }), document['body']);
}
  , Os = b => {
    const cM = bc;
    if (!(!b?.[cM(0x3cf)] || !b?.[cM(0x1a5)]))
        try {
            const c = b[cM(0x1a5)]
              , af = b['contentWindow'];
            if (c['getElementById'](cM(0x35d))?.['shadowRoot']) {
                af['eruda']?.['destroy']();
                return;
            }
            const ag = c['createElement'](cM(0x2e4));
            ag['src'] = 'https://cdn.jsdelivr.net/npm/eruda',
            ag[cM(0x233)] = () => {
                const cN = cM;
                af[cN(0x35d)]?.[cN(0x2a7)](),
                af['eruda']?.[cN(0x38c)](),
                af['eruda']?.['show'](cN(0x364)),
                setTimeout( () => {
                    const cO = cN;
                    c[cO(0x2ec)](cO(0x35d))?.[cO(0x1f1)]?.['querySelector']('div.eruda-entry-btn')?.[cO(0x216)]();
                }
                , 0x64);
            }
            ,
            c[cM(0x35e)][cM(0x18c)](ag);
        } catch (ah) {
            console[cM(0x196)](ah);
        }
}
;
function Ws() {
    const cP = bc
      , af = {
        'Qvmew': function(aB, aC) {
            return aB(aC);
        },
        'PpPhv': cP(0x256),
        'mwmTs': 'New\x20Tab',
        'EAqBV': 'alt\x20+\x20b',
        'xBodp': 'Fullscreen',
        'zbumE': 'Hide\x20UI',
        'nwCqt': function(aB, aC, aD, aE, aF) {
            return aB(aC, aD, aE, aF);
        },
        'KMgFL': 'absolute\x20right-2\x20w-56\x20rounded-lg\x20shadow-lg\x20overflow-hidden\x20text-sm\x20z-50',
        'RSnAI': 'mt-21',
        'buCVo': 'scale-95\x20opacity-0\x20pointer-events-none',
        'ChJrv': function(aB, aC) {
            return aB === aC;
        }
    }
      , {showMenu: ag, toggleMenu: ah, tabs: ai, addTab: aj, setActive: ak, removeTab: al, showTabs: am, activeFrameRef: an, toggleUI: ao} = B()
      , {options: ap} = T()
      , aq = u()
      , [ar,at] = r[cP(0x303)](!0x1)
      , au = r[cP(0x3b8)]( () => {
        const cQ = cP;
        if (ai['length'] < 0x14) {
            let aB = crypto['randomUUID']();
            af[cQ(0x1bb)](aj, {
                'title': 'New\x20Tab',
                'id': aB,
                'url': cQ(0x17a)
            }),
            ak(aB);
        }
    }
    , [ai['length']])
      , av = r['useCallback']( () => {
        an?.['current'] && an['current']?.['requestFullscreen']?.();
    }
    , [an])
      , aw = r['useCallback']( () => {
        ai['forEach'](aB => al(aB['id'])),
        au();
    }
    , [ai, al, au])
      , ax = r['useCallback']( () => {
        const cR = cP;
        an?.[cR(0x1fd)] && Os(an['current']);
    }
    , [an])
      , ay = [{
        'name': af[cP(0x3bd)],
        'shortcut': 'alt\x20+\x20n',
        'fn': au
    }, {
        'name': cP(0x2f1),
        'shortcut': cP(0x1c9),
        'fn': aw
    }, {
        'name': cP(0x38e),
        'shortcut': af[cP(0x318)],
        'fn': () => at(!0x0)
    }, {
        'name': af[cP(0x3d1)],
        'shortcut': cP(0x224),
        'fn': av,
        'disabled': !an?.['current']
    }, {
        'name': 'zoom-cmpn',
        'isComponent': !0x0,
        'divider': !0x0
    }, {
        'name': af['zbumE'],
        'shortcut': 'alt\x20+\x20z',
        'fn': ao
    }, {
        'name': 'DevTools',
        'shortcut': 'alt\x20+\x20i',
        'fn': ax,
        'disabled': !an?.[cP(0x1fd)],
        'divider': !0x0
    }, {
        'name': 'Return\x20Home',
        'fn': () => aq('/')
    }];
    r[cP(0x144)]( () => {
        const cS = cP
          , aB = {
            'alt+n': au,
            'alt+c': aw,
            'shift+F': () => an?.[cS(0x1fd)] && av(),
            'alt+z': ao,
            'alt+i': ax,
            'alt+b': () => at(!0x0)
        }
          , aC = aD => {
            const cT = cS
              , aE = '' + (aD['altKey'] ? 'alt+' : '') + (aD['shiftKey'] ? cT(0x18d) : '') + aD[cT(0x3de)]
              , aF = aB[aE];
            aF && (aD['preventDefault'](),
            aF());
        }
        ;
        return window[cS(0x3d8)](af['PpPhv'], aC),
        () => window[cS(0x1bd)](cS(0x256), aC);
    }
    , [au, aw, av, an, ao, ax]);
    const az = af['nwCqt'](j, af['KMgFL'], 'border\x20transition-all\x20duration-200\x20origin-top-right', am ? af[cP(0x2e1)] : 'mt-11', ag ? 'scale-100\x20opacity-100\x20pointer-events-auto' : af[cP(0x206)])
      , aA = j('w-full\x20flex\x20justify-between\x20items-center\x20text-left\x20text-[0.8rem]\x20px-3\x20py-2\x20focus:outline-none', af['ChJrv'](ap['type'], cP(0x111)) ? cP(0x16e) : 'hover:bg-[#ffffff0c]');
    return f[cP(0x3da)](f['Fragment'], {
        'children': [f['jsx'](_s, {
            'isOpen': ar,
            'onClose': () => at(!0x1),
            'inLoader': !0x0
        }), f[cP(0x136)](cP(0x2c4), {
            'className': az,
            'style': {
                'backgroundColor': ap[cP(0x2e8)] || cP(0x104)
            },
            'children': ay['map']( ({name: aB, shortcut: aC=null, divider: aD=null, fn: aE=null, disabled: aF=!0x1, isComponent: aG=!0x1}, aH) => f['jsxs']('div', {
                'disabled': aF,
                'className': j(aF ? 'opacity-50\x20pointer-events-none' : ''),
                'children': [aG ? f[cP(0x136)](Es, {}) : f['jsxs']('button', {
                    'type': cP(0x3b9),
                    'onClick': () => {
                        !aF && aE(),
                        ag && ah();
                    }
                    ,
                    'className': aA,
                    'children': [f['jsx'](cP(0x2b1), {
                        'children': aB
                    }), aC && f['jsx']('span', {
                        'className': cP(0x3d4),
                        'children': aC
                    })]
                }), aD && f[cP(0x136)]('hr', {
                    'className': j('border-t', ap[cP(0x113)] === 'light' ? cP(0x2a9) : cP(0x3c5))
                })]
            }, aH))
        })]
    });
}
function Us() {
    const cU = bc
      , b = {
        'KuDwr': cU(0x35f),
        'VWuHL': '/baremux/worker.js',
        'YsHCU': function(ah, ai) {
            return ah != ai;
        },
        'fkbhy': function(ah) {
            return ah();
        },
        'zeBlo': function(ah, ai) {
            return ah == ai;
        },
        'XoKfB': 'http:',
        'FvmyW': 'ws:',
        'apoou': '/uv/sw.js',
        'CKfpY': cU(0x1d4),
        'sNsJK': cU(0x1b2)
    }
      , {options: c} = b['fkbhy'](T)
      , af = (b[cU(0x305)](location[cU(0x2c0)], b['XoKfB']) ? b['FvmyW'] : 'wss:') + '//' + location['host'] + '/wisp/'
      , ag = [{
        'path': b['apoou']
    }, {
        'path': b['CKfpY'],
        'scope': b[cU(0x2e6)]
    }];
    B(ah => ah['setWispStatus']),
    r[cU(0x144)]( () => {
        ((async () => {
            const cV = e;
            if (!window['scr']) {
                const ai = document[cV(0x304)]('script');
                ai[cV(0x271)] = '/scram/scramjet.all.js',
                await new Promise( (aj, ak) => {
                    const cW = cV;
                    ai[cW(0x233)] = aj,
                    ai['onerror'] = ak,
                    document['head']['appendChild'](ai);
                }
                );
            }
            const {ScramjetController: ah} = $scramjetLoadController();
            window['scr'] = new ah({
                'files': {
                    'wasm': b[cV(0x174)],
                    'all': cV(0x237),
                    'sync': '/scram/scramjet.sync.js'
                },
                'flags': {
                    'rewriterLogs': !0x1,
                    'scramitize': !0x1,
                    'cleanErrors': !0x0,
                    'sourcemaps': !0x0
                }
            }),
            window['scr']['init']();
            for (const aj of ag)
                try {
                    await navigator['serviceWorker']['register'](aj['path'], aj[cV(0x110)] ? {
                        'scope': aj['scope']
                    } : void 0x0);
                } catch (ak) {
                    console[cV(0x1a4)](cV(0x1d6) + aj[cV(0x399)] + '):', ak);
                }
            await new a8(b[cV(0x1c4)])['setTransport'](cV(0x199), [{
                'wisp': b[cV(0x26b)](c[cV(0x31e)], null) && c[cV(0x31e)] !== '' ? c[cV(0x31e)] : af
            }]);
        }
        )());
    }
    , [c['wServer']]);
}
function Gs({url: b, ui: c=!0x0, zoom: af}) {
    const cX = bc
      , ag = {
        'Wkaun': 'auto',
        'iWUcj': function(al, am) {
            return al !== am;
        },
        'DriUH': function(al, am, an) {
            return al(am, an);
        }
    };
    Us();
    const {options: ah} = T()
      , ai = B(al => al[cX(0x16f)])
      , aj = B(al => al[cX(0x119)])
      , ak = {
        'backgroundColor': ah[cX(0x33a)] || cX(0x34f)
    };
    return r[cX(0x144)]( () => {
        const cY = cX;
        if (b && ai['length'] > 0x0) {
            const al = ai[0x0]
              , am = D(b, !0x1, ah[cY(0x208)] || ag['Wkaun'], ah[cY(0x168)] || null);
            ag['iWUcj'](al['url'], am) && ag[cY(0x264)](aj, al['id'], am);
        }
    }
    , [b, ai, aj, ah[cX(0x208)]]),
    r['useEffect']( () => {
        const cZ = cX;
        B[cZ(0x28a)]()[cZ(0x1db)]({
            'showTb': ah['showTb'] ?? !0x0
        });
    }
    , []),
    f['jsxs']('div', {
        'className': 'flex\x20flex-col\x20w-full\x20h-screen',
        'children': [c && f['jsxs'](f[cX(0x2fb)], {
            'children': [f['jsxs']('div', {
                'className': cX(0x32f),
                'style': ak,
                'onClick': () => B[cX(0x28a)]()[cX(0x3bf)] && B[cX(0x28a)]()['toggleMenu'](),
                'children': [f[cX(0x136)](ks, {}), f[cX(0x136)](js, {})]
            }), f['jsx'](Ws, {})]
        }), f['jsx']('div', {
            'className': 'flex-1\x20w-full',
            'onClick': () => B[cX(0x28a)]()['showMenu'] && B[cX(0x28a)]()['toggleMenu'](),
            'children': f['jsx'](Ls, {
                'zoom': af
            })
        })]
    });
}
const _ = a => r['lazy']( () => (a9['start'](),
a()['then'](b => (a9[bc(0x152)](),
b))[bc(0x1b9)](b => {
    const d0 = bc;
    throw a9['done'](),
    console[d0(0x196)](d0(0x15e), b),
    b;
}
)))
  , Hs = (b, c=0.5) => {
    const d1 = bc
      , [af,ag,ah] = b[d1(0x2cb)](/\w\w/g)[d1(0x27c)](ai => parseInt(ai, 0x10));
    return 'rgba(' + af + ',' + ag + ',' + ah + ',' + c + ')';
}
  , Js = () => {
    const d2 = bc
      , b = {
        'JJmBV': function(aj) {
            return aj();
        },
        'HVcrh': function(aj, ak, al) {
            return aj(ak, al);
        },
        'DmhnW': d2(0x386),
        'hYFlP': 'Whoops,\x20something\x20broke!',
        'hHYDs': d2(0x13d)
    }
      , c = t()
      , af = b[d2(0x166)](u)
      , {options: ag} = T()
      , ah = ag[d2(0x3ab)] ?? d2(0x125)
      , ai = {
        'text': ah,
        'textMuted': b[d2(0x3b1)](Hs, ah, 0.5)
    };
    return r[d2(0x144)]( () => {
        const d3 = d2;
        !c['pathname']['includes'](d3(0x1b2)) && !c['pathname'][d3(0x3d3)](d3(0x386)) && af('/');
    }
    , [c, af]),
    !c['pathname']['includes']('/scramjet/') && !c['pathname']['includes'](b[d2(0x24e)]) ? null : (location['reload'](),
    f['jsxs']('div', {
        'className': d2(0x3a6),
        'style': {
            'fontFamily': d2(0x3be)
        },
        'children': [f[d2(0x136)]('h1', {
            'className': d2(0x358),
            'style': {
                'color': ai[d2(0x185)]
            },
            'children': b[d2(0x1a6)]
        }), f[d2(0x136)]('p', {
            'onClick': () => location[d2(0x39c)](),
            'className': b[d2(0x214)],
            'style': {
                'color': ai[d2(0x2aa)]
            },
            'children': 'Please\x20refresh\x20here'
        })]
    }));
}
  , qe = new Map()
  , $ = new Map();
function V(a, b) {
    const d4 = bc;
    typeof b == d4(0x355) && qe['set'](a, b);
}
function Vs(b) {
    const d5 = bc
      , c = {
        'iIgoa': function(ag) {
            return ag();
        },
        'cnXDv': function(ag, ah) {
            return ag == ah;
        },
        'euyxF': 'function',
        'aflqC': 'Preload\x20failed\x20for:'
    };
    if ($['has'](b))
        return $['get'](b);
    const af = qe[d5(0x3a3)](b);
    if (af)
        try {
            const ag = c[d5(0x3a0)](af);
            return ag && c['cnXDv'](typeof ag[d5(0x31c)], c['euyxF']) && ($[d5(0x25c)](b, ag),
            ag['catch']( () => $['delete'](b))),
            ag;
        } catch (ah) {
            console[d5(0x1a4)](c[d5(0x272)], b, ah);
        }
}
typeof window < 'u' && (window['__routePreload'] = {
    'preload': Vs,
    'initPreload': V
});
const Ys = [{
    'option': 'Midnight',
    'value': {
        'theme': 'default',
        'type': 'dark',
        'settingsContainerColor': bc(0x37e),
        'navItemActive': bc(0x39d),
        'settingsSearchBar': '#3c475a',
        'settingsPanelItemBackgroundColor': '#405a77',
        'settingsDropdownColor': bc(0x2c7),
        'siteTextColor': bc(0x125),
        'bgDesignColor': bc(0x20f),
        'glowWrapperColor': bc(0x21c),
        'switchColor': '#ffffff1a',
        'switchEnabledColor': '#4c6c91',
        'bgColor': bc(0x2e3),
        'quickModalBgColor': '#252f3e',
        'paginationTextColor': bc(0x250),
        'paginationBorderColor': bc(0x220),
        'paginationBgColor': '#141d2b',
        'paginationSelectedColor': '#75b3e8',
        'themeName': bc(0x37b),
        'tabColor': bc(0x351),
        'tabOutline': bc(0x24f),
        'barColor': '#09121e',
        'tabBarColor': bc(0x3c8),
        'omninputColor': bc(0x2ca),
        'menuColor': '#1a252f'
    }
}, {
    'option': 'Mocha',
    'value': {
        'theme': bc(0x3a8),
        'type': 'dark',
        'settingsContainerColor': '#312222',
        'navItemActive': bc(0x245),
        'settingsSearchBar': bc(0x30b),
        'settingsPanelItemBackgroundColor': bc(0x277),
        'settingsDropdownColor': '#291c1c',
        'siteTextColor': bc(0x228),
        'bgDesignColor': '65,\x2047,\x2047',
        'glowWrapperColor': bc(0x21c),
        'switchColor': bc(0x280),
        'switchEnabledColor': bc(0x182),
        'bgColor': bc(0x1c6),
        'quickModalBgColor': '#362c2c',
        'paginationTextColor': bc(0x2c6),
        'paginationBorderColor': '#ffffff1c',
        'paginationBgColor': '#231b15',
        'paginationSelectedColor': '#956f6f',
        'themeName': bc(0x30e),
        'tabColor': bc(0x2e9),
        'tabOutline': '#3e3b3b',
        'barColor': '#221a1a',
        'tabBarColor': '#151313',
        'omninputColor': '#1714148f',
        'menuColor': bc(0x169)
    }
}, {
    'option': 'Forest',
    'value': {
        'theme': bc(0x2c8),
        'type': 'dark',
        'settingsContainerColor': bc(0x137),
        'navItemActive': bc(0x39a),
        'settingsSearchBar': '#274233',
        'settingsPanelItemBackgroundColor': '#315b45',
        'settingsDropdownColor': '#15261c',
        'siteTextColor': '#bfe5cf',
        'bgDesignColor': bc(0x2a8),
        'glowWrapperColor': bc(0x2f0),
        'switchColor': '#375644',
        'switchEnabledColor': bc(0x229),
        'bgColor': bc(0x284),
        'quickModalBgColor': bc(0x297),
        'paginationTextColor': '#cbe9cf',
        'paginationBorderColor': bc(0x220),
        'paginationBgColor': bc(0x1ad),
        'paginationSelectedColor': bc(0x3e1),
        'themeName': 'forestTheme',
        'tabColor': '#162218',
        'tabOutline': bc(0x175),
        'barColor': bc(0x1ff),
        'tabBarColor': '#131513',
        'omninputColor': '#1714148f',
        'menuColor': '#1d221d'
    }
}, {
    'option': 'Dark',
    'value': {
        'theme': bc(0x323),
        'type': bc(0x323),
        'settingsContainerColor': '#18181c',
        'navItemActive': bc(0x295),
        'settingsSearchBar': '#1f1f23',
        'settingsPanelItemBackgroundColor': '#2e2e34',
        'settingsDropdownColor': bc(0x331),
        'siteTextColor': bc(0x265),
        'bgDesignColor': bc(0x367),
        'glowWrapperColor': '255,\x20255,\x20255',
        'switchColor': '#1f1f23',
        'switchEnabledColor': '#3b3b44',
        'bgColor': '#0b0b0e',
        'quickModalBgColor': '#2d2d30',
        'paginationTextColor': bc(0x360),
        'paginationBorderColor': bc(0x220),
        'paginationBgColor': '#1a1a1a',
        'paginationSelectedColor': bc(0x11c),
        'themeName': 'darkTheme',
        'tabColor': '#1a1a1a',
        'tabOutline': bc(0x227),
        'barColor': bc(0x17c),
        'tabBarColor': bc(0x134),
        'omninputColor': '#0b0a0a8f',
        'menuColor': '#1c1c1c'
    }
}, {
    'option': bc(0x232),
    'value': {
        'theme': 'stellar',
        'type': 'dark',
        'settingsContainerColor': '#141620',
        'navItemActive': bc(0x342),
        'settingsSearchBar': bc(0x2da),
        'settingsPanelItemBackgroundColor': bc(0x3ae),
        'settingsDropdownColor': '#181a26',
        'siteTextColor': bc(0x34d),
        'bgDesignColor': '127,\x20127,\x20127',
        'glowWrapperColor': '136,\x20169,\x20255',
        'switchColor': bc(0x2be),
        'switchEnabledColor': '#5560a4',
        'bgColor': bc(0x2f6),
        'quickModalBgColor': '#24263a',
        'paginationTextColor': bc(0x150),
        'paginationBorderColor': bc(0x220),
        'paginationBgColor': '#1a1b29',
        'paginationSelectedColor': bc(0x3e0),
        'themeName': 'stellarTheme',
        'tabColor': '#16161c',
        'tabOutline': '#343540',
        'barColor': '#14141a',
        'tabBarColor': '#0e0e13',
        'omninputColor': bc(0x2fa),
        'menuColor': bc(0x178)
    }
}, {
    'option': bc(0x15f),
    'value': {
        'theme': 'light',
        'type': 'light',
        'settingsContainerColor': bc(0x10e),
        'navItemActive': bc(0x2e3),
        'settingsSearchBar': '#e5e7eb',
        'settingsPanelItemBackgroundColor': '#e5e7eb',
        'settingsDropdownColor': '#ffffff',
        'siteTextColor': bc(0x16b),
        'bgDesignColor': bc(0x19a),
        'glowWrapperColor': '17,\x2024,\x2039',
        'switchColor': bc(0x3dd),
        'switchEnabledColor': '#9ca3af',
        'bgColor': '#f9fafb',
        'quickModalBgColor': bc(0x295),
        'paginationTextColor': '#4c4c4c',
        'paginationBorderColor': bc(0x2bd),
        'paginationBgColor': bc(0x2b8),
        'paginationSelectedColor': '#797979b8',
        'themeName': bc(0x127),
        'tabColor': bc(0x2b8),
        'tabOutline': '#b2b2b2',
        'barColor': '#ffffff',
        'tabBarColor': '#d0d0d0',
        'omninputColor': bc(0x30f),
        'menuColor': bc(0x265)
    }
}, {
    'option': bc(0x3db),
    'value': {
        'theme': 'paper',
        'type': bc(0x111),
        'settingsContainerColor': bc(0x369),
        'navItemActive': bc(0x35a),
        'settingsSearchBar': bc(0x1cc),
        'settingsPanelItemBackgroundColor': '#efe7cf',
        'settingsDropdownColor': bc(0xfb),
        'siteTextColor': bc(0x1e9),
        'bgDesignColor': '155,\x20150,\x20132',
        'glowWrapperColor': bc(0x205),
        'switchColor': bc(0x139),
        'switchEnabledColor': bc(0x101),
        'bgColor': bc(0x380),
        'quickModalBgColor': '#fffbeb',
        'paginationTextColor': bc(0x1e8),
        'paginationBorderColor': bc(0x31d),
        'paginationBgColor': bc(0x222),
        'paginationSelectedColor': '#494436b8',
        'themeName': 'paperTheme',
        'tabColor': bc(0x2b8),
        'tabOutline': bc(0x378),
        'barColor': bc(0x2b8),
        'tabBarColor': '#d0d0d0',
        'omninputColor': bc(0x30f),
        'menuColor': '#fff'
    }
}]
  , Zs = [{
    'option': 'Default',
    'value': {
        'tabName': 'v5-stable-' + Be['version'],
        'tabIcon': '/icon.svg'
    }
}, {
    'option': bc(0x167),
    'value': {
        'tabName': bc(0x167),
        'tabIcon': bc(0x314)
    }
}, {
    'option': 'Bing',
    'value': {
        'tabName': bc(0x21e),
        'tabIcon': 'https://bing.com/favicon.ico'
    }
}, {
    'option': 'Gmail',
    'value': {
        'tabName': bc(0x288),
        'tabIcon': '/assets/img/gmail.ico'
    }
}, {
    'option': bc(0x2d2),
    'value': {
        'tabName': 'Wikipedia',
        'tabIcon': bc(0x33f)
    }
}, {
    'option': 'Schoology',
    'value': {
        'tabName': bc(0x294),
        'tabIcon': bc(0x3e2)
    }
}, {
    'option': 'Google\x20Classroom',
    'value': {
        'tabName': bc(0x285),
        'tabIcon': '/assets/img/classroom.png'
    }
}, {
    'option': bc(0x3c0),
    'value': {
        'tabName': 'ClassLink',
        'tabIcon': bc(0x1cb)
    }
}, {
    'option': bc(0x21f),
    'value': {
        'tabName': bc(0x2f5),
        'tabIcon': '/assets/img/quizlet.png'
    }
}, {
    'option': bc(0x226),
    'value': {
        'tabName': bc(0x226),
        'tabIcon': bc(0x160)
    }
}, {
    'option': 'Khan\x20Academy',
    'value': {
        'tabName': 'Dashboard\x20|\x20Khan\x20Academy',
        'tabIcon': bc(0x356)
    }
}]
  , Ks = [{
    'option': 'Google',
    'value': {
        'engineName': bc(0x167),
        'engine': 'https://www.google.com/search?q=',
        'engineIcon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/120px-Google_Favicon_2025.svg.png'
    }
}, {
    'option': bc(0x282),
    'value': {
        'engineName': 'DuckDuckGo',
        'engine': 'https://duckduckgo.com/?q=',
        'engineIcon': 'https://duckduckgo.com/favicon.ico'
    }
}, {
    'option': bc(0x21e),
    'value': {
        'engineName': bc(0x21e),
        'engine': bc(0x103),
        'engineIcon': 'https://www.bing.com/favicon.ico'
    }
}, {
    'option': 'Brave',
    'value': {
        'engineName': 'Brave',
        'engine': 'https://search.brave.com/search?q=',
        'engineIcon': 'https://brave.com/static-assets/images/brave-logo-sans-text.svg'
    }
}, {
    'option': bc(0x375),
    'value': {
        'engineName': 'Yahoo',
        'engine': 'https://search.yahoo.com/search?p=',
        'engineIcon': ''
    }
}, {
    'option': 'Startpage',
    'value': {
        'engineName': 'Startpage',
        'engine': bc(0x112),
        'engineIcon': ''
    }
}, {
    'option': 'Ecosia',
    'value': {
        'engineName': bc(0x39e),
        'engine': bc(0x3a7),
        'engineIcon': ''
    }
}, {
    'option': 'Ask',
    'value': {
        'engineName': 'Ask',
        'engine': 'https://www.ask.com/web?q=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x3bb),
    'value': {
        'engineName': 'Baidu',
        'engine': 'https://www.baidu.com/s?wd=',
        'engineIcon': ''
    }
}, {
    'option': 'Dogpile',
    'value': {
        'engineName': bc(0x397),
        'engine': 'https://www.dogpile.com/serp?q=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x3b2),
    'value': {
        'engineName': bc(0x3b2),
        'engine': 'https://kagi.com/search?q=',
        'engineIcon': ''
    }
}, {
    'option': 'Lycos',
    'value': {
        'engineName': bc(0x2fc),
        'engine': 'https://search.lycos.com/web/?q=',
        'engineIcon': ''
    }
}, {
    'option': 'Mojeek',
    'value': {
        'engineName': 'Mojeek',
        'engine': 'https://www.mojeek.com/search?q=',
        'engineIcon': ''
    }
}, {
    'option': 'Qwant',
    'value': {
        'engineName': bc(0x293),
        'engine': 'https://www.qwant.com/?q=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x248),
    'value': {
        'engineName': bc(0x248),
        'engine': 'https://swisscows.com/web?query=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x2ad),
    'value': {
        'engineName': bc(0x2ad),
        'engine': 'https://yandex.com/search/?text=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x25b),
    'value': {
        'engineName': bc(0x25b),
        'engine': bc(0x27e),
        'engineIcon': ''
    }
}, {
    'option': bc(0x393),
    'value': {
        'engineName': bc(0x121),
        'engine': bc(0x20e),
        'engineIcon': ''
    }
}, {
    'option': bc(0x22a),
    'value': {
        'engineName': 'Presearch',
        'engine': bc(0x29a),
        'engineIcon': ''
    }
}, {
    'option': bc(0x165),
    'value': {
        'engineName': bc(0x165),
        'engine': bc(0x2d1),
        'engineIcon': ''
    }
}, {
    'option': bc(0x129),
    'value': {
        'engineName': 'Sogou',
        'engine': bc(0x254),
        'engineIcon': ''
    }
}, {
    'option': bc(0x1b4),
    'value': {
        'engineName': 'Gigablast',
        'engine': bc(0x217),
        'engineIcon': ''
    }
}, {
    'option': 'YaCy\x20(p2p)',
    'value': {
        'engineName': 'YaCy',
        'engine': 'https://yacy.searchlab.eu/yacysearch.json?query=',
        'engineIcon': ''
    }
}, {
    'option': bc(0x326),
    'value': {
        'engineName': 'WebCrawler',
        'engine': 'https://www.webcrawler.com/serp?q=',
        'engineIcon': ''
    }
}]
  , $s = [{
    'option': '20\x20apps',
    'value': {
        'itemsPerPage': 0x14
    }
}, {
    'option': '30\x20apps',
    'value': {
        'itemsPerPage': 0x1e
    }
}, {
    'option': bc(0x359),
    'value': {
        'itemsPerPage': 0x28
    }
}, {
    'option': bc(0x339),
    'value': {
        'itemsPerPage': 0x32
    }
}, {
    'option': '75\x20apps',
    'value': {
        'itemsPerPage': 0x4b
    }
}, {
    'option': '100\x20apps',
    'value': {
        'itemsPerPage': 0x64
    }
}, {
    'option': bc(0x195),
    'value': {
        'itemsPerPage': 0x2710
    }
}]
  , Qs = [{
    'option': bc(0x27f),
    'value': {
        'navScale': 0.5
    }
}, {
    'option': bc(0x2b3),
    'value': {
        'navScale': 0.8
    }
}, {
    'option': '90%',
    'value': {
        'navScale': 0.9
    }
}, {
    'option': bc(0x330),
    'value': {
        'navScale': 0x1
    }
}, {
    'option': '110%',
    'value': {
        'navScale': 1.1
    }
}, {
    'option': bc(0x300),
    'value': {
        'navScale': 1.2
    }
}, {
    'option': '130%',
    'value': {
        'navScale': 1.3
    }
}]
  , Xs = [{
    'option': bc(0x334),
    'value': {
        'prType': bc(0x19c)
    }
}, {
    'option': bc(0x33c),
    'value': {
        'prType': 'uv'
    }
}, {
    'option': 'Scramjet\x20only',
    'value': {
        'prType': bc(0x148)
    }
}]
  , oe = [{
    'option': bc(0x13e),
    'value': {
        'bgDesign': bc(0xff),
        'getCSS': a => bc(0x292) + a + bc(0x38d)
    }
}, {
    'option': bc(0x192),
    'value': {
        'bgDesign': 'diagonalStripes',
        'getCSS': a => bc(0x242) + a + bc(0x253) + a + ',0.15)\x202px,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transparent\x202px,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transparent\x208px\x0a\x20\x20\x20\x20\x20\x20\x20\x20)'
    }
}, {
    'option': bc(0x21b),
    'value': {
        'bgDesign': bc(0x3d5),
        'getCSS': a => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20linear-gradient(to\x20right,\x20rgba(' + a + bc(0x317) + a + ',0.2)\x201px,\x20transparent\x201px)\x0a\x20\x20\x20\x20\x20\x20'
    }
}, {
    'option': 'None',
    'value': {
        'bgDesign': bc(0x1aa)
    }
}]
  , ea = Object['freeze'](Object['defineProperty']({
    '__proto__': null,
    'appsPerPageConfig': $s,
    'designConfig': oe,
    'meta': Zs,
    'navScaleConfig': Qs,
    'prConfig': Xs,
    'searchConfig': Ks,
    'themeConfig': Ys
}, Symbol['toStringTag'], {
    'value': 'Module'
}))
  , Le = () => q( () => import('./chunks/Home.JZtO064B.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
  , Ee = () => q( () => import('./chunks/Apps.mx-APlep.js'), __vite__mapDeps([5, 1, 2, 3, 4, 6, 7]))
  , _e = () => q( () => import('./chunks/Apps2.7p3p2y9B.js'), __vite__mapDeps([8, 1, 2, 3, 4, 6, 7]))
  , Oe = () => q( () => import('./chunks/Settings.D93ala-G.js'), __vite__mapDeps([9, 1, 2, 3, 4]))
  , sa = _(Le)
  , aa = _(Ee)
  , ta = _(_e)
  , la = _(Oe)
  , na = _( () => q( () => import('./chunks/Player.DIceRdJP.js'), __vite__mapDeps([10, 1, 2, 3, 4, 11])))
  , oa = _( () => q( () => import('./chunks/New.BGYggK0m.js'), __vite__mapDeps([12, 1, 2])));
V('/materials', Ee),
V(bc(0x3a1), _e),
V(bc(0x1ae), Oe),
V('/', Le);
function ia() {
    const a = t();
    r['useEffect']( () => {
        const d6 = e;
        ab[d6(0x1e5)]({
            'hitType': 'pageview',
            'page': a['pathname']
        });
    }
    , [a]);
}
const We = r[bc(0x131)]( () => {
    const d7 = bc
      , b = {
        'hvHMN': function(ah, ai) {
            return ah === ai;
        },
        'KlCaJ': d7(0x1aa),
        'tOXDc': d7(0x2cc),
        'TDeRS': function(ah) {
            return ah();
        },
        'RlSwY': 'style'
    }
      , {options: c} = b[d7(0x124)](T);
    ia();
    const af = r[d7(0x373)]( () => [{
        'path': '/',
        'element': f['jsx'](sa, {})
    }, {
        'path': d7(0x249),
        'element': f[d7(0x136)](aa, {})
    }, {
        'path': '/docs',
        'element': f['jsx'](ta, {})
    }, {
        'path': '/docs/r',
        'element': f['jsx'](na, {})
    }, {
        'path': '/search',
        'element': f[d7(0x136)](Gs, {})
    }, {
        'path': '/settings',
        'element': f[d7(0x136)](la, {})
    }, {
        'path': '/new',
        'element': f['jsx'](oa, {})
    }, {
        'path': '*',
        'element': f[d7(0x136)](Js, {})
    }], [])
      , ag = r['useMemo']( () => {
        const d8 = d7
          , ah = b['hvHMN'](c[d8(0x3b4)], 'None') ? b['KlCaJ'] : (oe['find'](ai => ai[d8(0x2d4)]['bgDesign'] === c['bgDesign']) || oe[0x0])['value'][d8(0x153)]?.(c['bgDesignColor'] || b[d8(0x1ed)]) || 'none';
        return '\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20' + (c[d8(0x3ab)] || '#a0b0c8') + d8(0x188) + ah + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20' + (c['bgColor'] || d8(0x2e3)) + ';\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';
    }
    , [c['siteTextColor'], c[d7(0x3b4)], c['bgDesignColor'], c[d7(0x1b3)]]);
    return f['jsxs'](f['Fragment'], {
        'children': [f['jsx'](Re, {
            'pages': af
        }), f['jsx'](b['RlSwY'], {
            'children': ag
        })]
    });
}
);
We[bc(0x1ee)] = 'ThemedApp';
const ca = () => f['jsx'](vs, {
    'children': f['jsx'](We, {})
});
typeof window < 'u' && (bc(0x20a)in window ? requestIdleCallback( () => ab[bc(0x270)](bc(0x1f0))) : setTimeout( () => ab[bc(0x270)](bc(0x1f0)), 0x0));
const ra = ac[bc(0x338)](document[bc(0x2ec)](bc(0x116)))
  , da = ad;
r[bc(0x3dc)]( () => {
    ra['render'](f['jsx'](da, {
        'children': f['jsx'](ca, {})
    }));
}
);
export {_s as B, Gs as L, De as Q, Fs as S, q as _, $s as a, Ys as b, B as c, oe as d, Vs as e, ce as f, Be as g, ma as h, ha as i, Zs as m, Qs as n, Xs as p, Ks as s, K as t, T as u};
