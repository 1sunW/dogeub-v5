const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["chunks/vendor-modules.DTgpwBwG.js", "assets/BuigefS6.css", "Bp0cuWS2.js", "assets/DuENmPtj.css"]))) => i.map(i => d[i]);
const al = e;
(function(v, x) {
    const aj = e
      , y = v();
    while (!![]) {
        try {
            const A = -parseInt(aj(0x13e)) / 0x1 + parseInt(aj(0x10a)) / 0x2 * (parseInt(aj(0x122)) / 0x3) + -parseInt(aj(0x115)) / 0x4 + parseInt(aj(0x103)) / 0x5 + parseInt(aj(0x145)) / 0x6 * (parseInt(aj(0x152)) / 0x7) + -parseInt(aj(0x14f)) / 0x8 + parseInt(aj(0x116)) / 0x9;
            if (A === x)
                break;
            else
                y['push'](y['shift']());
        } catch (E) {
            y['push'](y['shift']());
        }
    }
}(d, 0xd7f97));
const c = (function() {
    let v = !![];
    return function(x, y) {
        const A = v ? function() {
            if (y) {
                const E = y['apply'](x, arguments);
                return y = null,
                E;
            }
        }
        : function() {}
        ;
        return v = ![],
        A;
    }
    ;
}())
  , b = c(this, function() {
    const ak = e
      , v = {
        'ZuDTD': '{}.constructor(\x22return\x20this\x22)(\x20)',
        'jIGNN': ak(0x126)
    };
    let x;
    try {
        const E = Function(ak(0x110) + v['ZuDTD'] + ');');
        x = E();
    } catch (G) {
        x = window;
    }
    const y = x[ak(0x111)] = x[ak(0x111)] || {}
      , A = ['log', 'warn', 'info', ak(0x13f), ak(0x100), 'table', v[ak(0x112)]];
    for (let H = 0x0; H < A['length']; H++) {
        const I = c['constructor'][ak(0x123)]['bind'](c)
          , J = A[H]
          , K = y[J] || I;
        I[ak(0x109)] = c[ak(0x124)](c),
        I[ak(0x137)] = K['toString'][ak(0x124)](K),
        y[J] = I;
    }
});
b();
import {b as f, j as h, r as i, d as k, S as l, D as n} from './vendor-modules.DTgpwBwG.js';
import {u as o, _ as p, t as r} from '../Bp0cuWS2.js';
import {N as t} from './Nav.CMWBzhLH.js';
function e(a, b) {
    a = a - 0xff;
    const c = d();
    let f = c[a];
    return f;
}
function d() {
    const aw = ['div', 'paginationBorderColor', 'current', 'target', '474EbQNjE', 'includes', 'toLowerCase', 'appsSearchColor', 'OXjsF', 'addEventListener', 'w-4\x20h-4\x20shrink-0', 'scrollbar-thumb-gray-500', '__i', 'vTsOt', '12741952qjMJSP', 'url', 'paginationBgColor', '128618xVhoCF', '#9baec8', 'appName', 'Search\x20', 'filter', 'text-m\x20font-semibold', 'exception', 'jsxs', 'AfIVu', '2415570cEtlGH', 'slice', 'useCallback', 'jsx', 'Apps', 'flex-1\x20overflow-y-auto', '__proto__', '439974SqKEgs', 'removeEventListener', 'oVxRc', 'categorical', 'type', 'SFProText', 'return\x20(function()\x20', 'console', 'jIGNN', 'NKTfo', 'disabled', '2171164XjYBSx', '2916297rRCXIm', 'desc', 'split', 'flex-1\x20bg-transparent\x20outline-none\x20text-sm', 'base', 'length', 'lazy', 'pCQcC', 'localeCompare', 'XEPNf', 'sort', 'value', '24VWkXle', 'prototype', 'bind', 'apps', 'trace', 'memo', 'text', 'alphabetical', 'czcXk', 'BxroO', 'MXrBx', 'nFDJa', '\x20w-full\x20mx-auto', 'Suspense', 'useEffect', 'text-sm\x20mt-2', 'outlined', '\x20apps', 'itemsPerPage', 'appItemColor', 'kibEB', 'toString', 'scrollbar-thumb-gray-600', 'useState', 'paginationSelectedColor', 'paged', 'useMemo', 'paginationTextColor', '998423oKvujv', 'error', 'theme'];
    d = function() {
        return aw;
    }
    ;
    return d();
}
import {s as u} from './apps.module.C0aMNKX4.js';
const T = i[al(0x11c)]( () => p( () => import('./vendor-modules.DTgpwBwG.js').then(v => v['af']), __vite__mapDeps([0, 1])))
  , q = i[al(0x127)]( ({app: x, onClick: y, fallbackMap: A, onImgError: E, itemTheme: G, itemStyles: H}) => {
    const am = al
      , I = {
        'uVnkk': 'w-full\x20h-full',
        'czcXk': am(0x11c)
    }
      , [J,K] = i['useState'](!0x1);
    return h['jsxs']('div', {
        'className': f(H['app'], G[am(0x135)], G['theme-' + (G[am(0x143)] || 'default')], x[am(0x114)] ? 'disabled\x20cursor-not-allowed' : 'cursor-pointer'),
        'onClick': x[am(0x114)] ? void 0x0 : () => y(x),
        'children': [h[am(0x101)]('div', {
            'className': 'w-20\x20h-20\x20rounded-[12px]\x20mb-4\x20overflow-hidden\x20relative',
            'children': [!J && !A[x['appName']] && h['jsx'](am(0x141), {
                'className': 'absolute\x20inset-0\x20bg-gray-700\x20animate-pulse'
            }), A[x[am(0x154)]] ? h[am(0x106)](n, {
                'className': I['uVnkk']
            }) : h[am(0x106)]('img', {
                'src': x['icon'],
                'draggable': 'false',
                'loading': I[am(0x12a)],
                'className': 'w-full\x20h-full\x20object-cover',
                'onLoad': () => K(!0x0),
                'onError': () => E(x['appName'])
            })]
        }), h[am(0x106)]('p', {
            'className': am(0xff),
            'children': x['appName']['split']('')['join']('​')
        }), h[am(0x106)]('p', {
            'className': am(0x131),
            'children': (x['desc'] || '')[am(0x118)]('')['join']('​')
        })]
    }, x[am(0x154)]);
}
)
  , w = i[al(0x127)]( () => {
    const an = al
      , H = {
        'oVxRc': function(ae, af, ag) {
            return ae(af, ag);
        },
        'MXrBx': 'newest',
        'nFDJa': function(ae, af) {
            return ae / af;
        },
        'vTsOt': function(ae, af) {
            return ae > af;
        },
        'AfIVu': function(ae, af) {
            return ae(af);
        },
        'JqHno': 'relative\x20flex\x20items-center\x20gap-2.5\x20rounded-[10px]\x20px-3\x20w-[600px]\x20h-11',
        'BxroO': 'input',
        'nPCQM': an(0x128),
        'pCQcC': an(0x141),
        'XEPNf': an(0x153),
        'iHxAC': an(0x10f),
        'NKTfo': '#75b3e8',
        'kibEB': '#fff\x20!important'
    }
      , I = k()
      , {options: J} = o()
      , [K,Q] = i[an(0x139)]([]);
    i['useEffect']( () => {
        const ao = an;
        let ae = !0x0;
        return H[ao(0x10c)](p, () => import('../Bp0cuWS2.js').then(af => af['i']), __vite__mapDeps([2, 0, 1, 3]))['then'](af => ae && Q(af['default']?.[ao(0x125)] || [])),
        () => {
            ae = !0x1;
        }
        ;
    }
    , []);
    const [R,U] = i[an(0x139)]('')
      , [W,X] = i['useState'](an(0x10d))
      , [Y,Z] = i['useState'](0x1)
      , [a0,a1] = i['useState'](!0x1)
      , a2 = i['useRef'](null)
      , [a3,a4] = i[an(0x139)]({})
      , a5 = J[an(0x134)] || 0x14;
    i[an(0x130)]( () => {
        const ap = an
          , ae = af => !a2['current']?.['contains'](af[ap(0x144)]) && a1(!0x1);
        return window[ap(0x14a)]('pointerdown', ae),
        () => window[ap(0x10b)]('pointerdown', ae);
    }
    , []);
    const a6 = i[an(0x13c)]( () => K['map']( (ae, af) => ({
        ...ae,
        '__i': af
    })), [K])
      , a7 = i[an(0x13c)]( () => {
        const aq = an;
        switch (W) {
        case aq(0x129):
            return [...a6][aq(0x120)]( (ae, af) => ae['appName'][aq(0x11e)](af['appName'], void 0x0, {
                'sensitivity': aq(0x11a)
            }));
        case aq(0x10d):
            return [...a6]['sort']( (ae, af) => (ae[aq(0x117)] || '')['localeCompare'](af['desc'] || '', void 0x0, {
                'sensitivity': aq(0x11a)
            }) || ae['appName']['localeCompare'](af['appName'], void 0x0, {
                'sensitivity': aq(0x11a)
            }));
        case H[aq(0x12c)]:
            return [...a6]['sort']( (ae, af) => af[aq(0x14d)] - ae[aq(0x14d)]);
        default:
            return a6;
        }
    }
    , [a6, W])
      , a8 = i['useMemo']( () => {
        const ar = an
          , ae = R[ar(0x147)]()
          , af = a7[ar(0x156)](ai => ai[ar(0x154)][ar(0x147)]()[ar(0x146)](ae))
          , ag = Math['ceil'](H[ar(0x12d)](af[ar(0x11b)], a5))
          , ah = af[ar(0x104)]((Y - 0x1) * a5, Y * a5);
        return {
            'filteredApps': af,
            'paged': ah,
            'totalPages': ag
        };
    }
    , [a7, R, Y, a5]);
    i[an(0x130)]( () => {
        const as = an;
        Y > a8['totalPages'] && H[as(0x14e)](a8['totalPages'], 0x0) && H['AfIVu'](Z, 0x1);
    }
    , [Y, a8['totalPages']]);
    const a9 = i[an(0x105)](ae => {
        const at = an;
        ae && I('/search', {
            'state': {
                'url': ae[at(0x150)]
            }
        });
    }
    , [I])
      , aa = i[an(0x105)](ae => {
        const au = an;
        H[au(0x102)](U, ae[au(0x144)][au(0x121)]),
        Z(0x1);
    }
    , [])
      , ab = i[an(0x105)](ae => a4(af => ({
        ...af,
        [ae]: !0x0
    })), [])
      , ac = i['useMemo']( () => f(r[an(0x148)], r['theme-' + (J[an(0x140)] || 'default')]), [J[an(0x140)]])
      , ad = i[an(0x13c)]( () => an(0x155) + K[an(0x11b)] + an(0x133), [K['length']]);
    return h[an(0x101)](an(0x141), {
        'className': u['appContainer'] + an(0x12e),
        'children': [h['jsx'](an(0x141), {
            'className': 'w-full\x20px-4\x20py-4\x20flex\x20justify-center\x20mt-3',
            'children': h[an(0x101)]('div', {
                'className': f(H['JqHno'], ac),
                'children': [h['jsx'](l, {
                    'className': an(0x14b)
                }), h[an(0x106)](H[an(0x12b)], {
                    'type': H['nPCQM'],
                    'placeholder': ad,
                    'value': R,
                    'onChange': aa,
                    'className': an(0x119)
                })]
            })
        }), h[an(0x106)](H[an(0x11d)], {
            'className': 'flex\x20flex-wrap\x20justify-center\x20pb-2',
            'children': a8[an(0x13b)]['map'](ae => h[an(0x106)](q, {
                'app': ae,
                'onClick': a9,
                'fallbackMap': a3,
                'onImgError': ab,
                'itemTheme': {
                    ...r,
                    'current': J[an(0x140)] || 'default'
                },
                'itemStyles': u
            }, ae['appName']))
        }), a8['filteredApps']['length'] > a5 && h[an(0x106)](an(0x141), {
            'className': 'flex\x20flex-col\x20items-center\x20pb-7',
            'children': h['jsx'](i[an(0x12f)], {
                'children': h[an(0x106)](T, {
                    'count': a8['totalPages'],
                    'page': Y,
                    'onChange': (ae, af) => Z(af),
                    'shape': 'rounded',
                    'variant': an(0x132),
                    'sx': {
                        '&\x20.MuiPaginationItem-root': {
                            'color': J[an(0x13d)] || H[an(0x11f)],
                            'borderColor': J[an(0x142)] || '#ffffff1c',
                            'backgroundColor': J[an(0x151)] || '#141d2b',
                            'fontFamily': H['iHxAC']
                        },
                        '&\x20.Mui-selected': {
                            'backgroundColor': (J[an(0x13a)] || H[an(0x113)]) + '\x20!important',
                            'color': H[an(0x136)]
                        }
                    }
                })
            })
        })]
    });
}
);
w['displayName'] = al(0x107);
const z = () => {
    const av = al
      , v = {
        'QGtlZ': function(A) {
            return A();
        },
        'OXjsF': 'flex\x20flex-col\x20h-screen\x20overflow-hidden',
        'GWyFr': av(0x141)
    }
      , {options: x} = v['QGtlZ'](o)
      , y = f('scrollbar\x20scrollbar-thin\x20scrollbar-track-transparent', !x?.[av(0x10e)] || x[av(0x10e)] === 'dark' ? av(0x138) : av(0x14c));
    return h[av(0x101)](av(0x141), {
        'className': v[av(0x149)],
        'children': [h['jsx'](t, {}), h['jsx'](v['GWyFr'], {
            'className': f(av(0x108), y),
            'children': h['jsx'](w, {})
        })]
    });
}
  , V = i[al(0x127)]( () => h['jsx'](z, {}));
V['displayName'] = 'Apps';
export {V as default};
