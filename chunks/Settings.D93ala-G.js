const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["Bp0cuWS2.js", "chunks/vendor-modules.DTgpwBwG.js", "assets/BuigefS6.css", "assets/DuENmPtj.css"]))) => i.map(i => d[i]);
const aI = h;
(function(a, b) {
    const aD = h
      , c = a();
    while (!![]) {
        try {
            const am = parseInt(aD(0x141)) / 0x1 * (-parseInt(aD(0x15f)) / 0x2) + parseInt(aD(0x161)) / 0x3 * (parseInt(aD(0x1c8)) / 0x4) + -parseInt(aD(0x1e3)) / 0x5 + parseInt(aD(0x15b)) / 0x6 + parseInt(aD(0x1bc)) / 0x7 + parseInt(aD(0x1d8)) / 0x8 * (-parseInt(aD(0x18d)) / 0x9) + parseInt(aD(0x16d)) / 0xa;
            if (am === b)
                break;
            else
                c['push'](c['shift']());
        } catch (an) {
            c['push'](c['shift']());
        }
    }
}(g, 0xd791b));
import {u as i, m as j, n as l, a as m, d as n, b as o, p, s as r, _ as s, t} from '../Bp0cuWS2.js';
import {r as u, b as v, j as x, U as a0, V as a1, Y as a2, _ as a3, $ as a4, a0 as a5, s as a6, a1 as a7, i as a8, z as a9, Q as aa, W as ab, Z as ac, l as ad, k as af, a2 as ag, a3 as ah, G as ai, a4 as aj, S as ak} from './vendor-modules.DTgpwBwG.js';
import {N as al} from './Nav.CMWBzhLH.js';
const oe = ({config: b=[], selectedValue: c, action: am, maxW: an=0x28, placeholder: ao='Choose\x20an\x20option'}) => {
    const aE = h
      , ap = {
        'bytsE': function(aw) {
            return aw();
        },
        'AGiiH': function(aw, ax) {
            return aw === ax;
        },
        'pcXbg': function(aw, ax, ay) {
            return aw(ax, ay);
        },
        'hPDwR': aE(0x170),
        'awNFJ': 'flex\x20w-full\x20h-10',
        'fJJft': aE(0x163),
        'jrhZC': aE(0x1ea),
        'yuEvs': 'absolute\x20left-0\x20top-full\x20z-10\x20mt-1'
    }
      , {options: aq} = ap['bytsE'](i)
      , [ar,as] = u['useState']('')
      , at = aw => aw && typeof aw == 'object' ? aw[aE(0x18e)] || aw['id'] || JSON[aE(0x1c7)](aw) : aw
      , au = ar === '' ? b : b['filter']( ({option: aw}) => aw['toLowerCase']()[aE(0x206)](ar[aE(0x18f)]()))
      , av = v(aE(0x1e6), ap[aE(0x1f9)](aq?.['type'], 'dark') || !aq?.['type'] ? aE(0x201) : aE(0x1d2));
    return x[aE(0x1f1)](a0, {
        'value': c,
        'onChange': am,
        'by': (aw, ax) => at(aw) === at(ax),
        'children': x['jsxs'](aE(0x170), {
            'className': ap[aE(0x1f8)](v, aE(0x1aa), 'rounded-xl\x20border'),
            'style': {
                'backgroundColor': aq['settingsDropdownColor'] || aE(0x173),
                'maxWidth': an + aE(0x1c5)
            },
            'children': [x[aE(0x167)](ap[aE(0x1df)], {
                'className': ap[aE(0x1f8)](v, ap['awNFJ'], 'p-2.5\x20pl-5'),
                'children': [x['jsx'](a1, {
                    'displayValue': aw => {
                        const aF = aE;
                        if (!aw)
                            return '';
                        const ax = b['find'](ay => at(ay['value']) === at(aw));
                        return ax ? ax['option'] + aF(0x1c1) : '';
                    }
                    ,
                    'onChange': aw => as(aw['target']['value']),
                    'placeholder': ao,
                    'className': v('flex-1\x20min-w-0', ap['fJJft'], ap[aE(0x162)]),
                    'spellCheck': !0x1
                }), x['jsx'](a2, {
                    'className': v('flex\x20flex-shrink-0\x20items-center\x20justify-center', aE(0x15c), 'cursor-pointer'),
                    'children': x['jsx'](a3, {
                        'size': 0x11
                    })
                })]
            }), au['length'] !== 0x0 && x['jsx'](a4, {
                'className': v(ap[aE(0x17e)], aE(0x1cd), 'w-full\x20max-h-60\x20overflow-auto', aE(0x1e8), av),
                'children': au[aE(0x1a1)](aw => x[aE(0x1f1)](a5, {
                    'value': aw['value'],
                    'className': v(aE(0x19d), 'cursor-pointer\x20hover:bg-[#ffffff15]', aE(0x1af)),
                    'children': ({selected: ax}) => x['jsxs'](x['Fragment'], {
                        'children': [x['jsx'](aE(0x19b), {
                            'className': v(aE(0x189), 'w-[20px]\x20flex-shrink-0'),
                            'children': ax && x[aE(0x1f1)](a6, {
                                'size': 0x10
                            })
                        }), x[aE(0x1f1)]('p', {
                            'className': v('flex-1\x20min-w-0\x20ml-2', aE(0x1c9)),
                            'children': aw[aE(0x1ba)]
                        })]
                    })
                }, at(aw['value'])))
            })]
        })
    });
}
;
function h(a, b) {
    a = a - 0x13c;
    const c = g();
    let d = c[a];
    return d;
}
function re({action: b, value: c}) {
    const aG = h
      , am = {
        'hafwb': function(ar, as) {
            return ar(as);
        },
        'ofyxb': function(ar) {
            return ar();
        },
        'oRbpK': '#4c6c91',
        'eALZF': 'span'
    }
      , {options: an} = am['ofyxb'](i)
      , [ao,ap] = u[aG(0x16b)](c)
      , aq = ar => {
        const aH = aG;
        am[aH(0x18b)](ap, ar),
        b(ar);
    }
    ;
    return x['jsx'](a7, {
        'checked': ao,
        'onChange': aq,
        'className': aG(0x195),
        'style': {
            'backgroundColor': ao ? an[aG(0x196)] || am[aG(0x19e)] : an['switchColor'] || '#ffffff1a',
            'transition': 'background-color\x200.2s\x20ease-in-out'
        },
        'children': x[aG(0x1f1)](am[aG(0x1d7)], {
            'aria-hidden': aG(0x145),
            'className': aG(0x180)
        })
    });
}
const le = ({defValue: b, onChange: c, placeholder: am=aI(0x17d), maxW: an=0x28}) => {
    const aJ = aI
      , ao = {
        'VhSWb': aJ(0x1bd),
        'ORjCK': aJ(0x160)
    }
      , {options: ap} = i();
    return x[aJ(0x1f1)]('div', {
        'className': v(aJ(0x1aa), 'rounded-xl\x20border'),
        'style': {
            'backgroundColor': ap['settingsDropdownColor'] || aJ(0x164),
            'maxWidth': an + aJ(0x1c5)
        },
        'children': x[aJ(0x1f1)]('div', {
            'className': v(aJ(0x1ef), ao['VhSWb']),
            'children': x['jsx'](aJ(0x142), {
                'type': aJ(0x19a),
                'defaultValue': b,
                'placeholder': am,
                'spellCheck': ao['ORjCK'],
                'onBlur': aq => c?.(aq['target']['value']),
                'className': 'flex-1\x20min-w-0\x20text-[0.9rem]\x20truncate\x20bg-transparent\x20outline-none'
            })
        })
    });
}
  , ie = ({value: b, action: c, disabled: am=!0x1, maxW: an=0x28}) => {
    const aK = aI
      , ao = {
        'JwOmA': 'button',
        'gPtpU': aK(0x198)
    }
      , {options: ap} = i();
    return x[aK(0x1f1)](ao[aK(0x150)], {
        'onClick': c,
        'className': v(aK(0x1bf), ao[aK(0x191)], aK(0x1fd), am ? aK(0x1e5) : void 0x0),
        'style': {
            'backgroundColor': ap[aK(0x1dd)] || '#1a2a42',
            'maxWidth': an + 'rem'
        },
        'children': b
    });
}
  , ce = ({config: b, action: c, name: am, type: an, children: ao, value: ap, disabled: aq=!0x1, isLast: ar=!0x1, isFirst: as=!0x1}) => {
    const aL = aI
      , at = {
        'chEbG': 'flex\x20items-center\x20gap-4\x20py-4\x20px-5\x20transition-colors\x20min-w-0',
        'AcRjq': function(av, aw) {
            return av && aw;
        },
        'lclXD': aL(0x1a6),
        'LknrU': function(av, aw) {
            return av && aw;
        },
        'bcblB': '#18283e',
        'RJUfk': aL(0x14c),
        'IBiJJ': 'div',
        'bbmSb': function(av, aw) {
            return av === aw;
        },
        'doKdJ': 'switch',
        'nSwiE': aL(0x142)
    }
      , {options: au} = i();
    return x['jsxs']('div', {
        'className': v(at[aL(0x18c)], !ar && aL(0x17f), at[aL(0x19c)](as, 'rounded-t-xl'), ar && at[aL(0x13f)], at[aL(0x1e2)](aq, aL(0x1b9))),
        'style': {
            'backgroundColor': au['settingsContainerColor'] || at[aL(0x16e)]
        },
        'children': [x[aL(0x167)](aL(0x170), {
            'className': 'flex-1\x20min-w-0\x20overflow-hidden',
            'children': [x[aL(0x1f1)]('p', {
                'className': at['RJUfk'],
                'children': am
            }), x['jsx']('p', {
                'className': aL(0x158),
                'children': ao
            })]
        }), !aq && x['jsxs'](at[aL(0x1e1)], {
            'className': 'flex-shrink-0',
            'children': [at[aL(0x154)](an, aL(0x1e9)) && x[aL(0x1f1)](oe, {
                'config': b,
                'action': c,
                'selectedValue': ap,
                'maxW': 0xc
            }), an === at[aL(0x1be)] && x[aL(0x1f1)](re, {
                'action': c,
                'value': ap
            }), an === at[aL(0x17a)] && x[aL(0x1f1)](le, {
                'onChange': c,
                'defValue': ap
            }), at['bbmSb'](an, 'button') && x['jsx'](ie, {
                'action': c,
                'value': ap
            })]
        })]
    });
}
  , K = ({options: b, updateOption: c, openPanic: am}) => ({
    0x1: {
        'name': 'Site\x20Title',
        'desc': aI(0x1f2),
        'config': j,
        'value': (j['find'](an => an['value'] && typeof an['value'] == aI(0x148) && an['value']['tabName'] === b[aI(0x1ff)]) || j[0x0])[aI(0x1b2)],
        'type': aI(0x1e9),
        'action': an => {
            const aM = aI;
            c(an),
            s(async () => {
                const {ckOff: ao} = await import('../Bp0cuWS2.js').then(ap => ap['h']);
                return {
                    'ckOff': ao
                };
            }
            , __vite__mapDeps([0, 1, 2, 3]))[aM(0x1b1)]( ({ckOff: ao}) => ao());
        }
    },
    0x2: {
        'name': 'Auto\x20Cloak',
        'desc': aI(0x183),
        'config': j,
        'value': !!b['clkOff'],
        'type': 'switch',
        'action': an => {
            setTimeout( () => {
                c({
                    'clkOff': an
                }),
                s(async () => {
                    const {ckOff: ao} = await import('../Bp0cuWS2.js').then(ap => ap['h']);
                    return {
                        'ckOff': ao
                    };
                }
                , __vite__mapDeps([0, 1, 2, 3]))['then']( ({ckOff: ao}) => ao());
            }
            , 0x64);
        }
        ,
        'disabled': !b['tabName'] || b[aI(0x1ff)] == j[0x0]['value'][aI(0x1ff)]
    },
    0x3: {
        'name': 'Open\x20in\x20AB',
        'desc': 'This\x20will\x20open\x20the\x20site\x20into\x20an\x20about:blank\x20tab.\x20Make\x20sure\x20popups\x20are\x20enabled.',
        'value': b['aboutBlank'],
        'type': 'switch',
        'action': an => setTimeout( () => c({
            'aboutBlank': an
        }), 0x64)
    },
    0x4: {
        'name': 'Panic\x20Key',
        'desc': 'Enable\x20or\x20disable\x20the\x20panic\x20key\x20option.',
        'value': !!b['panicToggleEnabled'],
        'type': 'switch',
        'action': an => {
            const ao = {
                'mClxR': function(ap, aq, ar) {
                    return ap(aq, ar);
                }
            };
            setTimeout( () => {
                const aN = h;
                c({
                    'panicToggleEnabled': an
                }),
                ao[aN(0x1cb)](s, async () => {
                    const {panic: ap} = await import('../Bp0cuWS2.js').then(aq => aq['h']);
                    return {
                        'panic': ap
                    };
                }
                , __vite__mapDeps([0, 1, 2, 3]))[aN(0x1b1)]( ({panic: ap}) => ap());
            }
            , 0x64);
        }
    },
    0x5: {
        'name': aI(0x1f5),
        'desc': 'Set\x20a\x20keybind/shortcut\x20that\x20redirects\x20you\x20to\x20a\x20page\x20when\x20pressed.',
        'value': 'Set\x20Key',
        'type': aI(0x147),
        'action': am,
        'disabled': !b[aI(0x1de)]
    }
})
  , $ = ({options: b, updateOption: c}) => ({
    0x1: {
        'name': 'Site\x20Theme',
        'desc': aI(0x157),
        'config': o,
        'value': w(o, am => am[aI(0x1b2)]?.['themeName'] === b[aI(0x18e)], 0x0),
        'type': aI(0x1e9),
        'action': am => c(am)
    },
    0x2: {
        'name': 'Background\x20Design',
        'desc': 'Customize\x20the\x20site\x27s\x20background\x20design.',
        'config': n,
        'value': w(n, am => am[aI(0x1b2)]?.[aI(0x153)] === b['bgDesign'], 0x0),
        'type': 'select',
        'action': am => c(am)
    },
    0x3: {
        'name': 'Apps\x20per\x20Page',
        'desc': 'Number\x20of\x20apps\x20to\x20show\x20per\x20page\x20(\x22All\x22\x20will\x20show\x20everything).',
        'config': m,
        'value': w(m, am => am['value'][aI(0x1e4)] === (b[aI(0x1e4)] ?? 0x14), 0x2),
        'type': aI(0x1e9),
        'action': am => c(am)
    },
    0x4: {
        'name': 'Navigation\x20Scale',
        'desc': aI(0x1e7),
        'config': l,
        'value': w(l, am => am[aI(0x1b2)]['navScale'] === (b['navScale'] ?? 0x1), 0x3),
        'type': 'select',
        'action': am => c(am)
    },
    0x5: {
        'name': aI(0x181),
        'desc': aI(0x185),
        'value': b[aI(0x1da)] ?? !0x0,
        'type': aI(0x1ec),
        'action': am => setTimeout( () => c({
            'showTb': am
        }), 0x64)
    },
    0x6: {
        'name': 'Donation\x20button',
        'desc': 'Toggle\x20whether\x20you\x20want\x20the\x20\x22Support\x20us\x22\x20button\x20to\x20show.',
        'value': b[aI(0x14b)] ?? !0x0,
        'type': aI(0x1ec),
        'action': am => setTimeout( () => c({
            'donationBtn': am
        }), 0x64)
    }
})
  , R = ({options: b, updateOption: c}) => ({
    0x1: {
        'name': aI(0x1ac),
        'desc': aI(0x1b0),
        'config': r,
        'value': w(r, am => am[aI(0x1b2)]?.['engine'] === b['engine'], 0x0),
        'type': aI(0x1e9),
        'action': am => c(am)
    },
    0x2: {
        'name': aI(0x1c0),
        'desc': aI(0x1d0),
        'config': p,
        'value': w(p, am => am[aI(0x1b2)]?.['prType'] === b['prType'], 0x0),
        'type': aI(0x1e9),
        'action': am => c(am)
    }
})
  , V = ({options: b, updateOption: c}) => ({
    0x1: {
        'name': 'Confirm\x20Leave',
        'desc': 'Show\x20a\x20confirmation\x20when\x20attempting\x20to\x20leave\x20the\x20site.',
        'value': !!b[aI(0x13c)],
        'type': aI(0x1ec),
        'action': am => {
            const aO = aI
              , an = {
                'tpunX': function(ao, ap) {
                    return ao(ap);
                }
            };
            an['tpunX'](setTimeout, () => c({
                'beforeUnload': am
            })),
            location[aO(0x172)]();
        }
    },
    0x2: {
        'name': 'Wisp\x20Config',
        'desc': 'Configure\x20the\x20websocket\x20server\x20location.',
        'value': b[aI(0x1f3)] ? b['wServer'] : (location[aI(0x169)] === 'https:' ? aI(0x1ed) : 'ws:') + '//' + location['host'] + aI(0x204),
        'type': aI(0x142),
        'action': am => c({
            'wServer': am || null
        })
    },
    0x3: {
        'name': aI(0x16a),
        'desc': 'Clear\x20your\x20site\x20data\x20if\x20you\x20are\x20having\x20issues.',
        'type': 'button',
        'value': 'Reset\x20Data',
        'action': () => s(async () => {
            const {resetInstance: am} = await import('../Bp0cuWS2.js').then(an => an['h']);
            return {
                'resetInstance': am
            };
        }
        , __vite__mapDeps([0, 1, 2, 3]))[aI(0x1b1)]( ({resetInstance: am}) => am())
    }
});
function w(am, an, ao=0x0) {
    const aP = aI
      , ap = {
        'uodXS': function(at, au) {
            return at(au);
        },
        'DgClX': function(at, au) {
            return at + au;
        },
        'nllnS': aP(0x178),
        'Ysyto': 'info',
        'VFhrY': 'trace',
        'RilMh': function(at, au) {
            return at < au;
        }
    }
      , aq = (function() {
        let at = !![];
        return function(au, av) {
            const aw = at ? function() {
                if (av) {
                    const ax = av['apply'](au, arguments);
                    return av = null,
                    ax;
                }
            }
            : function() {}
            ;
            return at = ![],
            aw;
        }
        ;
    }())
      , ar = aq(this, function() {
        const aQ = aP;
        let at;
        try {
            const aw = ap[aQ(0x1c2)](Function, ap[aQ(0x1a8)](aQ(0x1d6), aQ(0x1c4)) + ');');
            at = aw();
        } catch (ax) {
            at = window;
        }
        const au = at['console'] = at['console'] || {}
          , av = ['log', ap['nllnS'], ap['Ysyto'], aQ(0x1a4), aQ(0x193), aQ(0x14d), ap[aQ(0x186)]];
        for (let ay = 0x0; ap[aQ(0x1d1)](ay, av[aQ(0x17c)]); ay++) {
            const az = aq['constructor']['prototype'][aQ(0x1db)](aq)
              , aA = av[ay]
              , aB = au[aA] || az;
            az['__proto__'] = aq['bind'](aq),
            az[aQ(0x1fc)] = aB['toString'][aQ(0x1db)](aB),
            au[aA] = az;
        }
    });
    ar();
    const as = am[aP(0x165)](an);
    return as ? as[aP(0x1b2)] : am[ao][aP(0x1b2)];
}
const ue = Object[aI(0x13e)](Object['defineProperty']({
    '__proto__': null,
    'advancedConfig': V,
    'browsingConfig': R,
    'customizeConfig': $,
    'privacyConfig': K
}, Symbol['toStringTag'], {
    'value': aI(0x17b)
}))
  , de = ({state: b, set: c}) => {
    const aR = aI
      , am = {
        'eRrVj': aR(0x1d5),
        'wXEiU': 'Meta',
        'bdvmC': function(au, av) {
            return au(av);
        },
        'rCQbD': function(au) {
            return au();
        },
        'cMQOF': aR(0x1a0),
        'FhlWp': aR(0x1a9),
        'YzupM': 'panic-key-input',
        'rfZKP': function(au, av, aw) {
            return au(av, aw);
        },
        'KfiQY': 'text-[0.7rem]',
        'SwEZA': function(au, av) {
            return au === av;
        },
        'HmqIc': aR(0x203),
        'RCEAt': aR(0x170),
        'Gzswx': 'cursor-pointer\x20hover:opacity-80'
    }
      , {options: an, updateOption: ao} = am['rCQbD'](i)
      , [ap,aq] = u[aR(0x16b)]({
        'key': '',
        'url': ''
    });
    u['useEffect']( () => {
        if (b) {
            const au = an['panic'] || {
                'key': '',
                'url': ''
            };
            aq(au);
        }
    }
    , [b, an['panic']]),
    u[aR(0x16f)]( () => {
        const aT = aR
          , au = aw => {
            const aS = h;
            aw[aS(0x187)]();
            let ax = [];
            aw['ctrlKey'] && ax[aS(0x1a3)](am[aS(0x1a7)]),
            aw[aS(0x194)] && ax[aS(0x1a3)]('Alt'),
            aw[aS(0x15a)] && ax['push']('Shift'),
            aw['metaKey'] && ax[aS(0x1a3)](am['wXEiU']),
            ax[aS(0x1a3)](aw[aS(0x1b7)]['length'] === 0x1 ? aw[aS(0x1b7)][aS(0x199)]() : aw[aS(0x1b7)]),
            aq(ay => ({
                ...ay,
                'key': ax[aS(0x205)]('+')
            }));
        }
          , av = document[aT(0x1ad)]('panic-key-input');
        return av && av[aT(0x14a)](aT(0x159), au),
        () => {
            av && av['removeEventListener']('keydown', au);
        }
        ;
    }
    , []);
    const ar = au => /^(https?:)?\/\//[aR(0x1bb)](au) ? au : aR(0x1f4) + au
      , as = () => {
        const aU = aR;
        am[aU(0x146)](c, !0x1),
        ao({
            'panic': {
                'key': ap['key'],
                'url': ar(ap['url']['trim']())
            }
        }),
        location['reload']();
    }
      , at = ap[aR(0x1b7)] && ap['url'];
    return x['jsx'](a8, {
        'open': b,
        'onClose': () => c(!0x1),
        'className': 'fixed\x20inset-0\x20bg-black/40\x20z-50',
        'children': x['jsx'](aR(0x170), {
            'className': 'flex\x20justify-center\x20items-center\x20h-full',
            'children': x[aR(0x167)](a9, {
                'className': aR(0x177),
                'style': {
                    'backgroundColor': an['quickModalBgColor'] || am[aR(0x1ee)]
                },
                'children': [x[aR(0x1f1)](aa, {
                    'className': aR(0x1f6),
                    'children': am['FhlWp']
                }), x['jsxs'](ab, {
                    'children': [x[aR(0x1f1)](ac, {
                        'className': 'text-[0.7rem]',
                        'children': 'Shortcut\x20Key'
                    }), x['jsx'](ad, {
                        'id': am['YzupM'],
                        'className': am['rfZKP'](v, aR(0x200), an[aR(0x188)] === aR(0x203) ? 'bg-black/40' : 'bg-black/15'),
                        'value': ap[aR(0x1b7)],
                        'onChange': () => {}
                    })]
                }), x[aR(0x167)](ab, {
                    'children': [x[aR(0x1f1)](ac, {
                        'className': am[aR(0x1fb)],
                        'children': 'Redirect\x20URL'
                    }), x['jsx'](ad, {
                        'className': v('w-full\x20h-10\x20pl-3\x20rounded-md\x20outline-0\x20border', am[aR(0x14f)](an[aR(0x188)], am['HmqIc']) ? 'bg-black/40' : 'bg-black/15'),
                        'value': ap['url'],
                        'onChange': au => aq({
                            ...ap,
                            'url': au['target']['value']
                        })
                    })]
                }), x[aR(0x167)](am['RCEAt'], {
                    'className': aR(0x202),
                    'children': [x[aR(0x1f1)](af, {
                        'onClick': () => c(!0x1),
                        'className': aR(0x175),
                        'children': 'Cancel'
                    }), x[aR(0x1f1)](af, {
                        'onClick': at ? as : void 0x0,
                        'className': v(at ? am['Gzswx'] : 'cursor-not-allowed\x20opacity-70', 'duration-150'),
                        'children': 'Confirm'
                    })]
                })]
            })
        })
    });
}
  , N = ({type: b, title: c}) => {
    const aV = aI
      , am = {
        'ljMUo': function(ar) {
            return ar();
        }
    }
      , {options: an, updateOption: ao} = am['ljMUo'](i)
      , ap = b({
        'options': an,
        'updateOption': ao
    })
      , aq = Object['entries'](ap);
    return x[aV(0x167)]('div', {
        'className': 'mb-8',
        'children': [x[aV(0x1f1)]('h2', {
            'className': 'text-xl\x20font-medium\x20mb-3\x20px-1',
            'children': c
        }), x[aV(0x1f1)]('div', {
            'className': aV(0x1ab),
            'children': aq['map']( ([ar,as], at) => x[aV(0x1f1)](ce, {
                ...as,
                'isFirst': at === 0x0,
                'isLast': at === aq['length'] - 0x1,
                'children': as[aV(0x1cf)]
            }, ar))
        })]
    });
}
  , me = ({setting: b}) => {
    const aW = aI
      , c = {
        'rAWTY': 'scrollbar-thumb-gray-500',
        'KDNEv': 'Privacy'
    }
      , {options: am, updateOption: an} = i()
      , [ao,ap] = u['useState'](!0x1)
      , aq = K({
        'options': am,
        'updateOption': an,
        'openPanic': () => ap(!0x0)
    })
      , ar = v('scrollbar\x20scrollbar-track-transparent\x20scrollbar-thin', am?.['type'] === 'dark' || !am?.['type'] ? 'scrollbar-thumb-gray-600' : c['rAWTY'])
      , as = ({children: at}) => x['jsxs']('div', {
        'className': v(t['theme-' + (am['theme'] || 'default')], 'flex\x20flex-1\x20flex-col\x20overflow-y-auto\x20py-6\x20px-4\x20sm:px-8\x20md:px-16', ar),
        'children': [at, x['jsx'](de, {
            'state': ao,
            'set': ap
        })]
    });
    return x['jsxs'](as, {
        'children': [b === c['KDNEv'] && x[aW(0x1f1)](N, {
            'type': () => aq,
            'title': c[aW(0x144)]
        }), b === 'Customize' && x[aW(0x1f1)](N, {
            'type': $,
            'title': 'Customize'
        }), b === aW(0x166) && x['jsx'](N, {
            'type': R,
            'title': aW(0x166)
        }), b === 'Advanced' && x[aW(0x1f1)](N, {
            'type': V,
            'title': aW(0x1f0)
        })]
    });
}
;
let I = [];
const he = [{
    'name': 'Privacy',
    'icon': ag,
    'keywords': [aI(0x1ce), 'cloak', 'cloaking', 'tab\x20cloak', aI(0x168), aI(0x14e), aI(0x1c6)],
    'key': 'privacyConfig'
}, {
    'name': 'Customize',
    'icon': ah,
    'keywords': [aI(0x1e0), aI(0x1b8), 'appearance', 'ui', 'interface', 'games', 'pages', aI(0x1b4), 'scale', 'nav', 'navigation\x20bar', 'nav\x20bar', aI(0x1d3), aI(0x171), aI(0x192), 'donation', aI(0x1f7), 'tab\x20bar'],
    'key': aI(0x1a2)
}, {
    'name': 'Browsing',
    'icon': ai,
    'keywords': [aI(0x1dc), aI(0x190), 'type', aI(0x15e)],
    'key': 'browsingConfig'
}, {
    'name': 'Advanced',
    'icon': aj,
    'keywords': ['wisp', aI(0x188), aI(0x184), 'leave\x20confirm', 'debug', 'reset\x20instance', aI(0x1eb), 'inspect', 'clear\x20cache'],
    'key': 'advancedConfig'
}]
  , ge = () => {
    const aX = aI
      , b = {
        'uMbMr': function(ay, az, aA) {
            return ay(az, aA);
        },
        'tibrj': function(ay, az) {
            return ay === az;
        },
        'XApWQ': 'w-5',
        'YOvap': 'mx-4',
        'VmWFI': 'ml-9\x20text-xs\x20text-gray-400\x20truncate',
        'Fbnqk': 'Privacy',
        'JxEiQ': 'flex\x20flex-col\x20h-screen',
        'vrdRN': 'flex\x20flex-1\x20overflow-hidden',
        'PRbjE': 'input',
        'ITXUI': 'text',
        'sltUN': aX(0x197),
        'xbWnB': aX(0x170),
        'CgCAP': function(ay, az) {
            return ay > az;
        }
    }
      , {options: c, updateOption: am} = i()
      , [an,ao] = u[aX(0x16b)]('')
      , [ap,aq] = u['useState'](b[aX(0x179)])
      , [ar,as] = u['useState'](!0x1);
    u['useEffect']( () => {
        const aY = aX;
        let ay = !0x0;
        return b[aY(0x16c)](s, () => Promise[aY(0x1b5)]()[aY(0x1b1)]( () => ue), void 0)['then'](az => {
            const aZ = aY;
            ay && (I = he[aZ(0x1a1)](aA => ({
                ...aA,
                'fn': az[aA[aZ(0x1b7)]]
            })),
            as(!0x0));
        }
        ),
        () => {
            ay = !0x1;
        }
        ;
    }
    , []);
    const at = u['useMemo']( () => ar ? I['map']( ({fn: ay, ...az}) => ({
        ...az,
        'items': Object[aX(0x155)](ay({
            'options': c,
            'updateOption': am
        }))[aX(0x1a1)]( ({name: aA, desc: aB}) => ({
            'name': aA,
            'desc': aB
        }))
    })) : [], [c, am, ar])
      , au = an['trim']()[aX(0x18f)]()
      , av = u['useMemo']( () => au ? at[aX(0x1b3)]( ({name: ay, keywords: az, items: aA}) => ay[aX(0x18f)]()[aX(0x206)](au) || az['some'](aB => aB[aX(0x18f)]()['includes'](au)) || aA['some'](aB => aB['name'][aX(0x18f)]()[aX(0x206)](au))) : at, [at, au])
      , aw = u['useMemo']( () => at['reduce']( (ay, az) => ay + az['items'][aX(0x1b3)](aA => aA['name']['toLowerCase']()[aX(0x206)](au))['length'], 0x0), [at, au])
      , ax = !!au && av[aX(0x17c)] > 0x0 && !av['some'](ay => ay[aX(0x1ca)]['toLowerCase']()[aX(0x206)](au)) && av['some'](ay => ay[aX(0x143)][aX(0x152)](az => az['toLowerCase']()['includes'](au)));
    return x['jsxs']('div', {
        'className': b[aX(0x156)],
        'children': [x[aX(0x1f1)](aX(0x170), {
            'className': 'shrink-0',
            'children': x['jsx'](al, {})
        }), x[aX(0x167)]('div', {
            'className': b['vrdRN'],
            'children': [x['jsxs']('div', {
                'className': v(t[aX(0x176)], t[aX(0x1d9) + (c['theme'] || 'default')], 'w-60\x20shrink-0\x20overflow-y-auto\x20p-2\x20pt-3'),
                'children': [x[aX(0x167)](aX(0x170), {
                    'className': 'flex\x20items-center\x20max-w-52\x20h-7\x20rounded-lg\x20mx-auto\x20px-2',
                    'style': {
                        'backgroundColor': c['settingsSearchBar'] || aX(0x1c3)
                    },
                    'children': [x['jsx'](ak, {
                        'className': aX(0x151)
                    }), x[aX(0x1f1)](b['PRbjE'], {
                        'type': b[aX(0x1b6)],
                        'placeholder': aX(0x15d),
                        'className': b[aX(0x149)],
                        'value': an,
                        'onChange': ay => ao(ay['target']['value'])
                    })]
                }), ax && x[aX(0x1f1)](b['xbWnB'], {
                    'className': aX(0x19f),
                    'children': aX(0x1d4)
                }), au && b['CgCAP'](aw, 0x1) && x['jsxs'](b[aX(0x182)], {
                    'className': 'mt-2\x20text-xs\x20text-gray-400\x20text-center\x20px-2',
                    'children': [aX(0x1a5), aw, '\x20matching\x20settings']
                }), x[aX(0x1f1)]('div', {
                    'className': aX(0x1fe),
                    'children': av[aX(0x1a1)]( ({name: ay, icon: az, items: aA}) => {
                        const b0 = aX
                          , aB = au ? aA['filter'](aC => aC['name']['toLowerCase']()[b0(0x206)](au)) : [];
                        return x['jsxs'](b0(0x170), {
                            'className': v('w-full\x20flex\x20flex-col\x20rounded-xl\x20duration-75\x20cursor-pointer\x20px-5\x20py-2', ap !== ay && 'bg-transparent\x20hover:bg-[#ffffff23]'),
                            'style': {
                                'backgroundColor': b[b0(0x140)](ap, ay) ? c[b0(0x1ae)] || b0(0x18a) : void 0x0
                            },
                            'onClick': () => aq(aC => aC === ay ? '' : ay),
                            'children': [x[b0(0x167)]('div', {
                                'className': 'flex\x20items-center\x20h-6',
                                'children': [x['jsx'](az, {
                                    'className': b[b0(0x1cc)]
                                }), x[b0(0x1f1)]('p', {
                                    'className': b[b0(0x13d)],
                                    'children': ay
                                })]
                            }), aB['length'] > 0x0 && x[b0(0x1f1)]('p', {
                                'className': b[b0(0x174)],
                                'children': aB[b0(0x1a1)](aC => aC['name'])['join'](',\x20')
                            })]
                        }, ay);
                    }
                    )
                })]
            }), ar ? x['jsx'](me, {
                'setting': ap
            }) : x['jsx']('div', {
                'className': aX(0x1fa),
                'children': 'Loading...'
            })]
        })]
    });
}
;
export {ge as default};
function g() {
    const b1 = ['wss:', 'cMQOF', 'flex\x20w-full\x20h-10', 'Advanced', 'jsx', 'This\x20setting\x20allows\x20you\x20to\x20change\x20the\x20site\x27s\x20tab\x20title\x20and\x20icon.', 'wServer', 'https://', 'Panic\x20Shortcut', 'text-[1rem]\x20mb-1', 'tabs\x20bar', 'pcXbg', 'AGiiH', 'flex-1\x20flex\x20items-center\x20justify-center\x20text-sm', 'KfiQY', 'toString', 'hover:opacity-80\x20active:opacity-90', 'flex\x20flex-col\x20gap-3\x20mt-5', 'tabName', 'w-full\x20h-10\x20pl-3\x20rounded-lg\x20outline-0\x20border', 'scrollbar-thumb-gray-600', 'absolute\x20bottom-5\x20right-5\x20flex\x20flex-row\x20gap-5', 'dark', '/wisp/', 'join', 'includes', 'beforeUnload', 'YOvap', 'freeze', 'lclXD', 'tibrj', '108080acFVAD', 'input', 'keywords', 'KDNEv', 'true', 'bdvmC', 'button', 'object', 'sltUN', 'addEventListener', 'donationBtn', 'text-[0.9375rem]\x20font-medium\x20mb-0.5\x20truncate', 'table', 'about:blank', 'SwEZA', 'JwOmA', 'w-4\x20mr-1.5', 'some', 'bgDesign', 'bbmSb', 'values', 'JxEiQ', 'Customize\x20the\x20appearance\x20of\x20the\x20website\x20by\x20selecting\x20a\x20theme.', 'text-[0.8125rem]\x20text-gray-400\x20leading-snug\x20truncate', 'keydown', 'shiftKey', '8859498JmnqmY', 'px-1', 'Filter\x20settings', 'search\x20engine', '26xpUYGc', 'false', '173442YIRPlq', 'jrhZC', 'text-[0.88rem]\x20truncate', '#1a2a42', 'find', 'Browsing', 'jsxs', 'about', 'protocol', 'Reset\x20Instance', 'useState', 'uMbMr', '10490780xBCiCy', 'bcblB', 'useEffect', 'div', 'size', 'reload', '#162337', 'VmWFI', 'cursor-pointer\x20duration-150\x20hover:opacity-80', 'settings-panelColor', 'w-[30rem]\x20h-64\x20p-5\x20rounded-xl\x20relative\x20flex\x20flex-col\x20gap-3\x20shadow-2xl', 'warn', 'Fbnqk', 'nSwiE', 'Module', 'length', 'Enter\x20text', 'yuEvs', 'border-b\x20border-white/5', 'pointer-events-none\x20inline-block\x20size-5\x20translate-x-0\x20rounded-full\x20bg-white\x20shadow-lg\x20ring-0\x20transition\x20duration-200\x20ease-in-out\x20group-data-checked:translate-x-7', 'Tabs\x20Bar', 'xbWnB', 'Automatically\x20apply\x20the\x20selected\x20cloak\x20when\x20you\x20switch\x20tabs,\x20restore\x20original\x20when\x20you\x20return.', 'bare', 'Show\x20the\x20tabs\x20bar,\x20allowing\x20you\x20to\x20open\x20multiple\x20sites\x20when\x20browsing.', 'VFhrY', 'preventDefault', 'type', 'flex\x20items-center\x20justify-center', '#405a77', 'hafwb', 'chEbG', '2466DSCYqD', 'themeName', 'toLowerCase', 'tab', 'gPtpU', 'donate', 'exception', 'altKey', 'group\x20relative\x20flex\x20h-7\x20w-14\x20cursor-pointer\x20rounded-full\x20p-1\x20ease-in-out\x20focus:outline-none', 'switchEnabledColor', 'bg-transparent\x20outline-hidden\x20w-full\x20text-sm', 'flex\x20items-center\x20justify-center\x20h-10\x20px-4\x20transition-opacity\x20duration-150', 'toUpperCase', 'text', 'span', 'AcRjq', 'flex\x20items-center', 'oRbpK', 'mt-2\x20text-xs\x20text-gray-400\x20text-center\x20px-2', '#252f3e', 'map', 'customizeConfig', 'push', 'error', 'Found\x20', 'rounded-b-xl', 'eRrVj', 'DgClX', 'Set\x20Panic\x20Key', 'relative\x20w-full', 'rounded-xl\x20overflow-visible', 'Search\x20Engine', 'getElementById', 'settingsPanelItemBackgroundColor', 'px-2\x20py-2\x20rounded-md', 'Choose\x20the\x20default\x20search\x20engine\x20used\x20for\x20queries.', 'then', 'value', 'filter', 'apps', 'resolve', 'ITXUI', 'key', 'color', 'opacity-50\x20pointer-events-none', 'option', 'test', '2670059yisjMt', 'p-2.5\x20pl-5', 'doKdJ', 'rounded-xl\x20border\x20text-[0.9rem]\x20font-medium\x20cursor-pointer', 'Backend\x20Engine', '\x20(selected)', 'uodXS', '#3c475a', '{}.constructor(\x22return\x20this\x22)(\x20)', 'rem', 'blank', 'stringify', '20ZosYhW', 'truncate\x20text-[0.88rem]', 'name', 'mClxR', 'XApWQ', 'flex\x20flex-col\x20gap-1', 'title', 'desc', 'Choose\x20the\x20default\x20engine\x20used\x20for\x20browsing.', 'RilMh', 'scrollbar-thumb-gray-500', 'navbar', 'May\x20contain\x20what\x20you\x27re\x20looking\x20for', 'Ctrl', 'return\x20(function()\x20', 'eALZF', '23648wmzqDe', 'theme-', 'showTb', 'bind', 'tabs', 'settingsDropdownColor', 'panicToggleEnabled', 'hPDwR', 'theme', 'IBiJJ', 'LknrU', '491065lQOrVm', 'itemsPerPage', 'opacity-60', 'scrollbar\x20scrollbar-track-transparent\x20scrollbar-thin', 'Scale\x20navigation\x20bar\x20size\x20(logo\x20&\x20font)\x20globally.', 'rounded-[0.8rem]\x20border\x20bg-inherit\x20p-[0.4rem]\x20shadow-lg', 'select', 'bg-transparent\x20outline-none', 'experimental', 'switch'];
    g = function() {
        return b1;
    }
    ;
    return g();
}
