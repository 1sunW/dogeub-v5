const Z = n;
(function(I, J) {
    const T = n
      , K = I();
    while (!![]) {
        try {
            const L = -parseInt(T(0x149)) / 0x1 * (-parseInt(T(0x15b)) / 0x2) + -parseInt(T(0x126)) / 0x3 + -parseInt(T(0x148)) / 0x4 + parseInt(T(0x143)) / 0x5 * (-parseInt(T(0x13d)) / 0x6) + -parseInt(T(0x12d)) / 0x7 + -parseInt(T(0x15a)) / 0x8 * (-parseInt(T(0x12f)) / 0x9) + -parseInt(T(0x124)) / 0xa * (-parseInt(T(0x12e)) / 0xb);
            if (L === J)
                break;
            else
                K['push'](K['shift']());
        } catch (O) {
            K['push'](K['shift']());
        }
    }
}(e, 0x9bc56));
const c = (function() {
    let I = !![];
    return function(J, K) {
        const L = I ? function() {
            const U = n;
            if (K) {
                const O = K[U(0x13c)](J, arguments);
                return K = null,
                O;
            }
        }
        : function() {}
        ;
        return I = ![],
        L;
    }
    ;
}())
  , a = c(this, function() {
    const V = n
      , I = {
        'tZgJO': function(P) {
            return P();
        },
        'mnDLH': V(0x140),
        'Eihuw': 'error',
        'JfOHZ': 'table',
        'IbMAw': V(0x14b),
        'GLwdi': function(P, Q) {
            return P < Q;
        }
    }
      , J = function() {
        const W = V;
        let P;
        try {
            P = Function(W(0x146) + W(0x141) + ');')();
        } catch (Q) {
            P = window;
        }
        return P;
    }
      , K = I['tZgJO'](J)
      , L = K[V(0x125)] = K[V(0x125)] || {}
      , O = [V(0x155), 'warn', I[V(0x142)], I[V(0x129)], 'exception', I['JfOHZ'], I[V(0x127)]];
    for (let P = 0x0; I['GLwdi'](P, O['length']); P++) {
        const Q = c['constructor'][V(0x153)][V(0x157)](c)
          , R = O[P]
          , S = L[R] || Q;
        Q['__proto__'] = c['bind'](c),
        Q['toString'] = S['toString']['bind'](S),
        L[R] = Q;
    }
});
a();
function n(a, b) {
    a = a - 0x11e;
    const c = e();
    let d = c[a];
    return d;
}
import {r as q, u as r, j as s, b as t, d as w, D as A, a5 as B, ad as D} from './vendor-modules.DTgpwBwG.js';
import {u as E, e as F, f, t as G, g as H} from '../Bp0cuWS2.js';
function e() {
    const a1 = ['btn-s', 'navHeight', 'prototype', 'Apps', 'log', 'span', 'bind', 'Fragment', 'type', '744LwkGPA', '2RcDSug', 'default', 'border\x20rounded-full\x20text-center', 'jsx', 'dhmfz7r', 'flex\x20gap-1\x20items-center\x20h-full\x20cursor-pointer', 'xRznH', '20McNYZg', 'console', '777906OCFpjS', 'IbMAw', 'Games', 'Eihuw', 'size', 'btn-g', 'oVAbh', '6116474UadTld', '14566134TOfToY', '6804iTukZC', 'div', 'logoWidth', 'onClick', 'name', 'TjUtt', 'useMemo', 'DljSm', 'pathname', 'jsxs', 'inset\x200\x20-2px\x200\x200\x20', 'AdptT', 'theme-', 'apply', '3911682kSXMIv', 'XRPqG', 'route', 'info', '{}.constructor(\x22return\x20this\x22)(\x20)', 'mnDLH', '5xQhKPj', 'nav-backgroundColor', 'calc(100%\x20-\x200.5rem)', 'return\x20(function()\x20', 'round', '1427700ajjCSP', '61298EUpnko', 'jYwDI', 'trace', '0.3rem', '/docs', 'hover:opacity-80\x20duration-100', '#c1d4f1', 'Settings'];
    e = function() {
        return a1;
    }
    ;
    return e();
}
const j = ({items: I}) => {
    const X = n
      , J = {
        'AdptT': function(Q, R, S) {
            return Q(R, S);
        },
        'xRznH': X(0x122),
        'DljSm': function(Q, R) {
            return Q * R;
        },
        'jYwDI': X(0x156),
        'OKwrU': function(Q) {
            return Q();
        },
        'TjUtt': X(0x14f)
    }
      , K = J['OKwrU'](r)
      , {options: L} = E()
      , O = L['navItemActive'] || J[X(0x134)]
      , P = Number(L['navScale'] || 0x1);
    return s['jsx'](s[X(0x158)], {
        'children': I['map'](Q => {
            const Y = X
              , R = Q[Y(0x159)];
            return s[Y(0x138)](Y(0x156), {
                'className': J[Y(0x13a)](t, J[Y(0x123)], K[Y(0x137)] !== Q['route'] && Y(0x14e)),
                'style': {
                    ...K[Y(0x137)] == Q[Y(0x13f)] ? {
                        'color': O,
                        'boxShadow': Y(0x139) + O
                    } : null,
                    'fontSize': 0x10 * P + 'px'
                },
                'onClick': Q[Y(0x132)],
                'onMouseEnter': () => F(Q[Y(0x13f)]),
                'onFocus': () => F(Q[Y(0x13f)]),
                'children': [R && s['jsx'](R, {
                    'color': K[Y(0x137)] == Q['route'] ? O : void 0x0,
                    'size': Math[Y(0x147)](J[Y(0x136)](Q[Y(0x12a)], P))
                }), s[Y(0x120)](J[Y(0x14a)], {
                    'children': Q[Y(0x133)]
                })]
            }, Q['id']);
        }
        )
    });
}
  , y = q['memo'](j)
  , M = Z(0x121)
  , b = {
    'nav': M
}
  , z = H['version']
  , $ = 0x10
  , k = [{
    'name': Z(0x154),
    'id': 'btn-a',
    'type': A,
    'route': '/materials'
}, {
    'name': Z(0x128),
    'id': Z(0x12b),
    'type': B,
    'route': Z(0x14d)
}, {
    'name': Z(0x150),
    'id': Z(0x151),
    'type': D,
    'route': '/settings'
}]
  , C = q['memo']( () => {
    const a0 = Z
      , I = {
        'FxAKw': function(R, S) {
            return R(S);
        },
        'NAjoR': a0(0x144),
        'oVAbh': a0(0x130),
        'XRPqG': a0(0x145)
    }
      , J = w()
      , {options: K} = E()
      , L = I['FxAKw'](Number, K['navScale'] || 0x1)
      , O = q[a0(0x135)]( () => ({
        'navHeight': Math['round'](0x45 * L),
        'logoWidth': Math[a0(0x147)](0x7a * L),
        'logoHeight': Math['round'](0x29 * L),
        'versionFont': Math['round'](0x9 * L),
        'versionMargin': Math[a0(0x147)](-0xa * L)
    }), [L])
      , P = q['useCallback']( () => J('/'), [J])
      , Q = q[a0(0x135)]( () => k['map'](R => ({
        ...R,
        'size': $,
        'onClick': () => J(R[a0(0x13f)])
    })), [J]);
    return s['jsxs']('div', {
        'className': t(b['nav'], G[I['NAjoR']], G[a0(0x13b) + (K['theme'] || a0(0x11e))], '\x20w-full\x20shadow-x1/20\x20flex\x20items-center\x20pl-6\x20pr-5\x20gap-5\x20z-50'),
        'style': {
            'height': O[a0(0x152)] + 'px'
        },
        'children': [s[a0(0x120)](f, {
            'width': O[a0(0x131)],
            'height': O['logoHeight'],
            'action': P
        }), s[a0(0x120)]('div', {
            'className': a0(0x11f),
            'style': {
                'fontSize': O['versionFont'] + 'px',
                'marginLeft': O['versionMargin'] + 'px',
                'paddingLeft': a0(0x14c),
                'paddingRight': '0.3rem'
            },
            'children': 'v' + z
        }), s['jsx'](I[a0(0x12c)], {
            'className': 'flex\x20items-center\x20gap-5\x20ml-auto',
            'style': {
                'height': I[a0(0x13e)]
            },
            'children': s['jsx'](y, {
                'items': Q
            })
        })]
    });
}
);
C['displayName'] = 'Nav';
export {C as N};
