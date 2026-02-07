const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["chunks/vendor-modules.DTgpwBwG.js", "assets/BuigefS6.css", "Bp0cuWS2.js", "assets/DuENmPtj.css", "chunks/localGmLoader.BHvzcz9h.js"]))) => i.map(i => d[i]);
const aA = d;
(function(x, z) {
    const ax = d
      , A = x();
    while (!![]) {
        try {
            const B = parseInt(ax(0x12a)) / 0x1 * (-parseInt(ax(0x172)) / 0x2) + -parseInt(ax(0x14e)) / 0x3 * (parseInt(ax(0x15b)) / 0x4) + -parseInt(ax(0x16b)) / 0x5 + parseInt(ax(0x168)) / 0x6 * (parseInt(ax(0x153)) / 0x7) + -parseInt(ax(0x182)) / 0x8 * (parseInt(ax(0x14f)) / 0x9) + -parseInt(ax(0x177)) / 0xa * (-parseInt(ax(0x174)) / 0xb) + -parseInt(ax(0x12c)) / 0xc * (-parseInt(ax(0x183)) / 0xd);
            if (B === z)
                break;
            else
                A['push'](A['shift']());
        } catch (C) {
            A['push'](A['shift']());
        }
    }
}(c, 0xca5cb));
const b = (function() {
    let x = !![];
    return function(z, A) {
        const B = x ? function() {
            if (A) {
                const C = A['apply'](z, arguments);
                return A = null,
                C;
            }
        }
        : function() {}
        ;
        return x = ![],
        B;
    }
    ;
}())
  , a = b(this, function() {
    const ay = d
      , x = {
        'UGSND': function(D, E) {
            return D + E;
        },
        'LdCii': function(D) {
            return D();
        },
        'QQcUv': 'exception',
        'gAMAx': ay(0x155),
        'tecjG': 'trace'
    }
      , z = function() {
        const az = ay;
        let D;
        try {
            D = Function(x['UGSND'](az(0x167), az(0x16a)) + ');')();
        } catch (E) {
            D = window;
        }
        return D;
    }
      , A = x[ay(0x12e)](z)
      , B = A['console'] = A[ay(0x13b)] || {}
      , C = ['log', ay(0x169), 'info', 'error', x[ay(0x146)], x[ay(0x125)], x[ay(0x13d)]];
    for (let D = 0x0; D < C['length']; D++) {
        const E = b[ay(0x139)][ay(0x127)]['bind'](b)
          , F = C[D]
          , G = B[F] || E;
        E['__proto__'] = b[ay(0x186)](b),
        E[ay(0x150)] = G[ay(0x150)][ay(0x186)](G),
        B[F] = E;
    }
});
a();
function d(a, b) {
    a = a - 0x118;
    const e = c();
    let f = e[a];
    return f;
}
import {b as f, j as g, r as h, d as i, S as j, D as l, J as m, K as n, O as o} from './vendor-modules.DTgpwBwG.js';
import {u as p, _ as q, t as r} from '../Bp0cuWS2.js';
import {N as s} from './Nav.CMWBzhLH.js';
import {s as u} from './apps.module.C0aMNKX4.js';
const Y = h[aA(0x178)]( () => q( () => import('./vendor-modules.DTgpwBwG.js').then(x => x['af']), __vite__mapDeps([0, 1])))
  , M = h['memo']( ({app: x, onClick: z, fallbackMap: A, onImgError: B, itemTheme: C, itemStyles: D}) => {
    const aB = aA
      , E = {
        'uzzVK': aB(0x118),
        'vAWZy': 'img'
    }
      , [F,G] = h[aB(0x11f)](!0x1);
    return g[aB(0x143)](E['uzzVK'], {
        'className': f('flex-shrink-0', D[aB(0x15c)], C['appItemColor'], C['theme-' + (C['current'] || aB(0x128))], x['disabled'] ? 'disabled\x20cursor-not-allowed' : 'cursor-pointer'),
        'onClick': x['disabled'] ? void 0x0 : () => z(x),
        'children': [g[aB(0x143)](aB(0x118), {
            'className': aB(0x129),
            'children': [!F && !A[x['appName']] && g[aB(0x12f)](aB(0x118), {
                'className': 'absolute\x20inset-0\x20bg-gray-700\x20animate-pulse'
            }), A[x['appName']] ? g[aB(0x12f)](l, {
                'className': aB(0x165)
            }) : g[aB(0x12f)](E[aB(0x179)], {
                'src': x[aB(0x121)],
                'draggable': 'false',
                'loading': 'lazy',
                'className': 'w-full\x20h-full\x20object-cover',
                'onLoad': () => G(!0x0),
                'onError': () => B(x[aB(0x11a)])
            })]
        }), g['jsx']('p', {
            'className': 'text-m\x20font-semibold\x20mb-3\x20flex-grow\x20line-clamp-2',
            'children': x['appName'][aB(0x133)]('')['join']('​')
        }), g[aB(0x143)](aB(0x152), {
            'className': aB(0x134),
            'children': [g['jsx'](m, {
                'size': 0x10,
                'fill': aB(0x17c)
            }), 'Play']
        })]
    }, x[aB(0x11a)]);
}
)
  , Z = h['memo']( ({category: x, games: z, onClick: A, onViewMore: B, fallback: C, onImgError: D, theme: E, styles: F}) => {
    const aC = aA
      , G = {
        'DjAvi': 'mb-3\x20max-w-7xl\x20mx-auto\x20px-9',
        'xYWjF': 'div',
        'yLciH': aC(0x154),
        'Drsls': aC(0x130),
        'XiICL': aC(0x138),
        'vNBJa': aC(0x152),
        'FcZng': 'Scroll\x20right'
    }
      , I = h[aC(0x15e)](null)
      , N = P => {
        const aD = aC;
        I['current'] && I['current'][aD(0x157)]({
            'left': P === aD(0x161) ? -0x190 : 0x190,
            'behavior': 'smooth'
        });
    }
    ;
    return g['jsxs']('div', {
        'className': G['DjAvi'],
        'children': [g['jsxs'](G['xYWjF'], {
            'className': aC(0x11e),
            'children': [g['jsxs']('div', {
                'className': G['yLciH'],
                'children': [g['jsx']('h2', {
                    'className': G['Drsls'],
                    'children': x
                }), g[aC(0x12f)](aC(0x152), {
                    'onClick': () => B(x),
                    'className': aC(0x14d),
                    'children': 'View\x20more'
                })]
            }), g['jsxs'](aC(0x118), {
                'className': 'flex\x20gap-2',
                'children': [g[aC(0x12f)](aC(0x152), {
                    'onClick': () => N('left'),
                    'className': G['XiICL'],
                    'aria-label': aC(0x13e),
                    'children': g[aC(0x12f)](n, {
                        'size': 0x14
                    })
                }), g[aC(0x12f)](G['vNBJa'], {
                    'onClick': () => N('right'),
                    'className': aC(0x138),
                    'aria-label': G[aC(0x181)],
                    'children': g['jsx'](o, {
                        'size': 0x14
                    })
                })]
            })]
        }), g[aC(0x12f)](G['xYWjF'], {
            'ref': I,
            'className': 'flex\x20gap-1\x20overflow-x-auto\x20pb-2\x20-ml-3\x20scrollbar-hide',
            'style': {
                'scrollbarWidth': 'none',
                'msOverflowStyle': 'none'
            },
            'children': z['map'](P => g['jsx'](M, {
                'app': P,
                'onClick': A,
                'fallbackMap': C,
                'onImgError': D,
                'itemTheme': E,
                'itemStyles': F
            }, P['appName']))
        })]
    });
}
)
  , O = h['memo']( () => {
    const aE = aA
      , C = {
        'YBGAd': function(ar, as, at) {
            return ar(as, at);
        },
        'cUUlz': function(ar, as) {
            return ar / as;
        },
        'YNRBr': function(ar, as) {
            return ar - as;
        },
        'XkJBg': function(ar, as) {
            return ar > as;
        },
        'dniLr': function(ar, as) {
            return ar(as);
        },
        'KIftT': function(ar, as) {
            return ar(as);
        },
        'iBWhm': 'div',
        'hNYPN': 'w-full\x20px-4\x20py-4\x20flex\x20justify-center\x20mt-3\x20relative',
        'xwymj': function(ar, as, at) {
            return ar(as, at);
        },
        'GFAhW': aE(0x149),
        'myilK': aE(0x144),
        'lylgl': aE(0x135),
        'YHWBV': aE(0x136),
        'nJtvg': aE(0x13f),
        'aAbpN': aE(0x176),
        'pOvoX': '#141d2b',
        'rYede': aE(0x122),
        'ofzHG': aE(0x180),
        'tGoBT': aE(0x15f)
    }
      , D = i()
      , {options: N} = p()
      , [a0,a1] = h[aE(0x11f)]({});
    h['useEffect']( () => {
        const aF = aE;
        let ar = !0x0;
        return C['YBGAd'](q, () => import('../Bp0cuWS2.js').then(as => as['i']), __vite__mapDeps([2, 0, 1, 3]))[aF(0x11c)](as => ar && a1(as['default']?.[aF(0x16d)] || {})),
        () => {
            ar = !0x1;
        }
        ;
    }
    , []);
    const [a2,a3] = h['useState']('')
      , [a4,a5] = h['useState'](0x1)
      , [a6,a7] = h[aE(0x11f)](null)
      , [a8,a9] = h[aE(0x11f)]({})
      , [aa,ab] = h['useState'](0x0)
      , [ac,ad] = h['useState'](!0x1)
      , [ae,af] = h[aE(0x11f)]([]);
    h[aE(0x166)]( () => {
        const aG = aE
          , ar = {
            'aRcGJ': function(as, at) {
                return as(at);
            }
        };
        q( () => import('./localGmLoader.BHvzcz9h.js'), __vite__mapDeps([4, 0, 1]))[aG(0x11c)](async as => {
            const aH = aG
              , at = new as['default']();
            await at[aH(0x163)]();
            const au = await at['getAllGms']();
            ar['aRcGJ'](ab, au['length']),
            ar[aH(0x173)](af, au);
        }
        )['catch']( () => {}
        );
    }
    , []);
    const ag = N['itemsPerPage'] || 0x14
      , ah = h[aE(0x131)]( () => {
        const ar = [];
        return Object['values'](a0)['forEach'](as => {
            const aI = d;
            ar[aI(0x137)](...as);
        }
        ),
        ar;
    }
    , [a0])
      , ai = h[aE(0x131)]( () => {
        const aJ = aE;
        let ar = ah;
        if (ac) {
            const au = new Set(ae[aJ(0x189)](av => av['name']));
            ar = ah['filter'](av => {
                const aK = aJ
                  , aw = (Array[aK(0x126)](av['url']) ? av['url'][0x0] : av['url'])?.[aK(0x133)]('/')[aK(0x120)]()?.[aK(0x124)](aK(0x16f), '');
                return aw && au[aK(0x17b)](aw);
            }
            );
        } else
            a6 && (ar = a0[a6] || []);
        if (a2) {
            const av = a2[aJ(0x17e)]()['trim']();
            ar = ar['filter'](aw => aw[aJ(0x11a)][aJ(0x17e)]()['includes'](av));
        }
        const as = Math[aJ(0x17d)](C[aJ(0x185)](ar['length'], ag))
          , at = ar[aJ(0x162)](C[aJ(0x14c)](a4, 0x1) * ag, a4 * ag);
        return {
            'filteredGames': ar,
            'paged': at,
            'totalPages': as
        };
    }
    , [ah, a0, a6, ac, ae, a2, a4, ag]);
    h[aE(0x166)]( () => {
        const aL = aE;
        a4 > ai[aL(0x16e)] && C['XkJBg'](ai[aL(0x16e)], 0x0) && a5(0x1);
    }
    , [a4, ai['totalPages']]);
    const aj = h[aE(0x160)](ar => {
        const aM = aE;
        ar && D(aM(0x12d), {
            'state': {
                'app': ar
            }
        });
    }
    , [D])
      , ak = h['useCallback'](ar => {
        const aN = aE;
        a3(ar['target'][aN(0x119)]),
        C[aN(0x184)](a7, null),
        C['dniLr'](a5, 0x1);
    }
    , [])
      , al = h['useCallback'](ar => {
        a7(ar),
        a3(''),
        a5(0x1);
    }
    , [])
      , am = h[aE(0x160)]( () => {
        a7(null),
        ad(!0x1),
        a3(''),
        C['KIftT'](a5, 0x1);
    }
    , [])
      , an = h[aE(0x160)]( () => {
        ad(!0x0),
        a7(null),
        a3(''),
        a5(0x1);
    }
    , [])
      , ao = h['useCallback'](ar => a9(as => ({
        ...as,
        [ar]: !0x0
    })), [])
      , ap = h['useMemo']( () => f(r[aE(0x17a)], r[aE(0x159) + (N['theme'] || aE(0x128))]), [N['theme']])
      , aq = h['useMemo']( () => 'Search\x20' + ah[aE(0x123)] + '\x20games', [ah['length']]);
    return g['jsxs']('div', {
        'className': u['appContainer'] + '\x20w-full\x20mx-auto',
        'children': [g[aE(0x143)](C[aE(0x148)], {
            'className': C['hNYPN'],
            'children': [(a6 || ac) && g['jsx']('button', {
                'onClick': am,
                'className': aE(0x187),
                'children': aE(0x175)
            }), g['jsxs']('div', {
                'className': C[aE(0x16c)](f, C['GFAhW'], ap),
                'children': [g[aE(0x12f)](j, {
                    'className': 'w-4\x20h-4\x20shrink-0'
                }), g[aE(0x12f)](aE(0x145), {
                    'type': aE(0x11b),
                    'placeholder': aq,
                    'value': a2,
                    'onChange': ak,
                    'className': C['myilK']
                })]
            })]
        }), ac && g['jsx'](aE(0x118), {
            'className': C['lylgl'],
            'children': C['YHWBV']
        }), !a6 && !ac && aa > 0x0 && g['jsx'](aE(0x118), {
            'className': aE(0x156),
            'children': g[aE(0x143)]('button', {
                'onClick': an,
                'className': 'cursor-pointer\x20text-xs\x20hover:opacity-80\x20transition-opacity\x20whitespace-nowrap',
                'children': [C[aE(0x158)], aa, ')']
            })
        }), a2 || a6 || ac ? g[aE(0x143)](g[aE(0x15a)], {
            'children': [g[aE(0x12f)](aE(0x118), {
                'className': 'flex\x20flex-wrap\x20justify-center\x20pb-2',
                'children': ai[aE(0x14b)]['map'](ar => g[aE(0x12f)](M, {
                    'app': ar,
                    'onClick': aj,
                    'fallbackMap': a8,
                    'onImgError': ao,
                    'itemTheme': {
                        ...r,
                        'current': N['theme'] || aE(0x128)
                    },
                    'itemStyles': u
                }, ar['appName']))
            }), ai[aE(0x13a)]['length'] > ag && g[aE(0x12f)]('div', {
                'className': 'flex\x20flex-col\x20items-center\x20pb-7',
                'children': g['jsx'](h['Suspense'], {
                    'children': g[aE(0x12f)](Y, {
                        'count': ai['totalPages'],
                        'page': a4,
                        'onChange': (ar, as) => a5(as),
                        'shape': 'rounded',
                        'variant': aE(0x141),
                        'sx': {
                            '&\x20.MuiPaginationItem-root': {
                                'color': N[aE(0x132)] || aE(0x142),
                                'borderColor': N['paginationBorderColor'] || C[aE(0x140)],
                                'backgroundColor': N['paginationBgColor'] || C[aE(0x170)],
                                'fontFamily': aE(0x151)
                            },
                            '&\x20.Mui-selected': {
                                'backgroundColor': (N[aE(0x164)] || C['rYede']) + aE(0x17f),
                                'color': C[aE(0x13c)]
                            }
                        }
                    })
                })
            })]
        }) : g['jsx']('div', {
            'className': C['tGoBT'],
            'children': Object['entries'](a0)[aE(0x189)]( ([ar,as]) => g['jsx'](Z, {
                'category': ar,
                'games': as,
                'onClick': aj,
                'onViewMore': al,
                'fallback': a8,
                'onImgError': ao,
                'theme': {
                    ...r,
                    'current': N['theme'] || 'default'
                },
                'styles': u
            }, ar))
        })]
    });
}
);
O['displayName'] = 'Games';
const ee = () => {
    const aO = aA
      , x = {
        'YsIMV': aO(0x171),
        'lUSuP': 'scrollbar-thumb-gray-500',
        'JfXAe': aO(0x118),
        'xvgLH': function(B, C, D) {
            return B(C, D);
        }
    }
      , {options: z} = p()
      , A = f(x['YsIMV'], !z?.[aO(0x14a)] || z['type'] === 'dark' ? aO(0x147) : x[aO(0x11d)]);
    return g[aO(0x143)]('div', {
        'className': 'flex\x20flex-col\x20h-screen\x20overflow-hidden',
        'children': [g[aO(0x12f)](s, {}), g[aO(0x12f)](x[aO(0x188)], {
            'className': x['xvgLH'](f, 'flex-1\x20overflow-y-auto', A),
            'children': g['jsx'](O, {})
        })]
    });
}
  , se = h['memo']( () => g['jsx'](ee, {}));
se[aA(0x15d)] = aA(0x12b);
export {se as default};
function c() {
    const aP = ['vAWZy', 'appsSearchColor', 'has', 'currentColor', 'ceil', 'toLowerCase', '\x20!important', '#fff\x20!important', 'FcZng', '12747976DTNKws', '143ePcgGD', 'dniLr', 'cUUlz', 'bind', 'absolute\x20cursor-pointer\x20left-10\x20text-sm\x20hover:opacity-80\x20transition-opacity\x20whitespace-nowrap', 'JfXAe', 'map', 'div', 'value', 'appName', 'text', 'then', 'lUSuP', 'flex\x20items-center\x20justify-between\x20mb-1', 'useState', 'pop', 'icon', '#75b3e8', 'length', 'replace', 'gAMAx', 'isArray', 'prototype', 'default', 'w-20\x20h-20\x20rounded-[12px]\x20mb-4\x20overflow-hidden\x20relative', '2229ZKaMfT', 'Games', '3163884aBHugY', '/docs/r/', 'LdCii', 'jsx', 'text-2xl\x20font-bold', 'useMemo', 'paginationTextColor', 'split', 'flex\x20items-center\x20gap-1.5\x20px-3\x20py-1.5\x20rounded-lg\x20bg-[#ffffff15]\x20hover:bg-[#ffffff25]\x20transition-colors\x20text-sm\x20font-medium\x20mt-auto\x20self-start', 'text-center\x20text-xs\x20opacity-60\x20pb-2', 'Local\x20games\x20not\x20played\x20for\x203+\x20days\x20are\x20automatically\x20removed', 'push', 'p-2\x20rounded-full\x20bg-[#ffffff10]\x20hover:bg-[#ffffff18]\x20transition-colors', 'constructor', 'filteredGames', 'console', 'ofzHG', 'tecjG', 'Scroll\x20left', 'View\x20Downloaded\x20Games\x20(', 'aAbpN', 'outlined', '#9baec8', 'jsxs', 'flex-1\x20bg-transparent\x20outline-none\x20text-sm', 'input', 'QQcUv', 'scrollbar-thumb-gray-600', 'iBWhm', 'relative\x20flex\x20items-center\x20gap-2.5\x20rounded-[10px]\x20px-3\x20w-[600px]\x20h-11', 'type', 'paged', 'YNRBr', 'text-xs\x20px-3\x20py-1\x20rounded-full\x20bg-[#ffffff10]\x20hover:bg-[#ffffff18]\x20transition-colors', '9PvoGXS', '9uurHfb', 'toString', 'SFProText', 'button', '3418793vXpibe', 'flex\x20items-center\x20gap-3', 'table', 'w-full\x20flex\x20justify-center\x20pb-1', 'scrollBy', 'nJtvg', 'theme-', 'Fragment', '990372zQpHcr', 'app', 'displayName', 'useRef', 'space-y-2', 'useCallback', 'left', 'slice', 'cleanupOld', 'paginationSelectedColor', 'w-full\x20h-full', 'useEffect', 'return\x20(function()\x20', '12glzktO', 'warn', '{}.constructor(\x22return\x20this\x22)(\x20)', '3879425kiqxrp', 'xwymj', 'games', 'totalPages', '.zip', 'pOvoX', 'scrollbar\x20scrollbar-thin\x20scrollbar-track-transparent', '982hZQPry', 'aRcGJ', '169906QcaOpv', '←\x20Back\x20to\x20all', '#ffffff1c', '750FadbXu', 'lazy'];
    c = function() {
        return aP;
    }
    ;
    return c();
}
