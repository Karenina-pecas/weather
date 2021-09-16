(this.webpackJsonpweather = this.webpackJsonpweather || []).push([
	[0],
	{
		21: function (t, e, n) {
			'use strict';
			n.r(e);
			var a,
				i,
				c,
				r,
				s,
				o,
				l,
				b,
				j,
				d,
				m,
				u,
				h = n(1),
				f = n.n(h),
				g = n(8),
				O = n.n(g),
				x = (n(7), n(6)),
				v = n.n(x),
				p = n(9),
				y = n(4),
				w = n(2),
				k = n(3),
				z = n(0);
			function N(t) {
				var e = t.city,
					n = t.country,
					r = k.a.div(
						a ||
							(a = Object(w.a)([
								'\n\t\tdisplay: flex-flexbox;\n\t\ttext-align: center;\n\t\tfont-family: helvetica, arial, sans-serif;\n\t'
							]))
					),
					s = k.a.h1(
						i ||
							(i = Object(w.a)([
								'\n\t\t/* font-size: auto; */\n\t\t/* margin-bottom: -15%; */\n\t\tfont-family: helvetica, arial, sans-serif;\n\t'
							]))
					),
					o = k.a.h5(
						c ||
							(c = Object(w.a)([
								'\n\t\tfont-size: 1.2em;\n\t\tfont-family: helvetica, arial, sans-serif;\n\t\tmargin-bottom: 5%;\n\t'
							]))
					);
				return Object(z.jsx)('div', {
					children: Object(z.jsxs)(r, {
						children: [Object(z.jsx)(s, { children: e }), Object(z.jsx)(o, { children: n })]
					})
				});
			}
			function S(t) {
				var e = t.temp,
					n = t.condition,
					a = t.humidity,
					i = k.a.h5(
						r ||
							(r = Object(w.a)([
								'\n\t\tfont-family: helvetica, arial, sans-serif;\n\t\tfont-size: 1.4em;\n\t\tmargin-bottom: 10%;\n\t'
							]))
					),
					c = k.a.h1(
						s ||
							(s = Object(w.a)([
								'\n\t\tfont-family: helvetica, arial, sans-serif;\n\t\tfont-size: 2em;\n\t\tmargin-top: -10%;\n\t'
							]))
					),
					l = k.a.h5(
						o ||
							(o = Object(w.a)([
								'\n\t\tfont-family: helvetica, arial, sans-serif;\n\t\tfont-size: 1.2em;\n\t\tmargin-bottom: -6%;\n\t\topacity: 70%;\n\t'
							]))
					);
				return Object(z.jsxs)('div', {
					children: [
						Object(z.jsx)(i, { children: n }),
						Object(z.jsxs)(c, { children: [e, 'C\xb0'] }),
						Object(z.jsxs)(l, { children: ['Humidity: ', a, '%'] })
					]
				});
			}
			function C(t) {
				var e = t.condition,
					n = k.a.img(l || (l = Object(w.a)(['\n\t\twidth: 80px;\n\t\tmargin-bottom: -16px;\n\t']))),
					a = '';
				switch (e) {
					case 'Clear':
						a = '../images/sunny.svg';
						break;
					case 'Clouds':
						a = '../images/clouds.svg';
						break;
					case 'Rain':
						a = '../images/rainy.svg';
						break;
					case 'Snow':
						a = '../images/snowing.svg';
						break;
					case 'Thunderstorm':
						a = '../images/cloud-lightning.svg';
						break;
					case 'Drizzle':
						a = '../images/drizzle.svg';
						break;
					case 'Tornado':
						a = '../images/tornado.svg';
						break;
					case 'Fog':
						a = '../images/fog.svg';
						break;
					case 'Default':
						a = '../images/stars.svg';
				}
				return Object(z.jsx)('div', {
					children: Object(z.jsx)(n, { className: 'icon', src: a, alt: 'Weather Icon' })
				});
			}
			function A(t) {
				var e = t.temp,
					n = t.condition,
					a = t.city,
					i = t.country,
					c = t.humidity,
					r = t.time,
					s = 0,
					o = 0,
					l = null;
				e > 12
					? ((o = (s = 255 * (1 - (e - 12) / 28)) - 150),
					  (l = 'linear-gradient(\n\t\t\t10deg,\n\t\t\trgb(255, '
							.concat(s, ', 100),\n\t\t\trgb(255, 172, 68),\n\t\t\trgb(255, ')
							.concat(o, ', 0))')))
					: +e <= 12 &&
					  ((o = (s = 255 * (1 - (e - 12) / 28)) - 150),
					  (l = 'linear-gradient(\n\t\t\t10deg,\n\t\t\trgb(0, '
							.concat(s, ', 255),\n\t\t\trgb(126, 242, 252),\n\t\t\trgb(88, ')
							.concat(o, ', 188))\n\t\t')));
				var d = k.a.div(
						b ||
							(b = Object(w.a)([
								'\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tbox-sizing: border-box;\n\t\talign-items: center;\n\t\tfont-family: helvetica, arial, sans-serif;\n\t'
							]))
					),
					m = k.a.div(
						j ||
							(j = Object(w.a)([
								'\n\t\twidth: 250px;\n\t\theight: 400px;\n\n\t\tbackground: ',
								';\n\t\topacity: 80%;\n\t\talign-items: center;\n\t\tposition: relative;\n\t\ttext-align: center;\n\t\tmargin: auto;\n\t\tmargin-top: 25px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t'
							])),
						l
					);
				return Object(z.jsx)('div', {
					children: Object(z.jsx)('body', {
						children: Object(z.jsx)(d, {
							children: Object(z.jsx)('main', {
								className: 'full-screen-main zoomed',
								children: Object(z.jsx)('div', {
									id: 'media-viewer',
									children: Object(z.jsx)('div', {
										className: 'square-background',
										children: Object(z.jsxs)(m, {
											children: [
												Object(z.jsx)(N, { city: a, country: i }),
												Object(z.jsx)(C, { condition: n }),
												Object(z.jsx)(S, { temp: e, condition: n, humidity: c, time: r })
											]
										})
									})
								})
							})
						})
					})
				});
			}
			var D = function () {
				var t = k.a.h1(d || (d = Object(w.a)(['\n\t\tfont-family: helvetica, arial, sans-serif;\n\t']))),
					e = k.a.div(
						m ||
							(m = Object(w.a)([
								'\n\t\tmargin-left: 48px;\n\t\tmargin-bottom: 3%;\n\t\tgrid-column: 2;\n\t\tgrid-row: 2;\n\t\tfont-family: helvetica, arial, sans-serif;\n\t'
							]))
					),
					n = k.a.span(
						u ||
							(u = Object(w.a)([
								"\n\t\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\t\tfont-style: italic;\n\t\tfont-size: 0.6em;\n\t\ttext-align: center;\n\t\tmargin-left: 35px;\n\t"
							]))
					),
					a = Object(h.useState)('Tampico'),
					i = Object(y.a)(a, 2),
					c = i[0],
					r = i[1],
					s = Object(h.useState)(''),
					o = Object(y.a)(s, 2),
					l = o[0],
					b = o[1],
					j = Object(h.useState)(''),
					f = Object(y.a)(j, 2),
					g = f[0],
					O = f[1],
					x = Object(h.useState)(''),
					N = Object(y.a)(x, 2),
					S = N[0],
					C = N[1],
					D = Object(h.useState)(0),
					M = Object(y.a)(D, 2),
					T = M[0],
					q = M[1],
					E = Object(h.useState)(''),
					F = Object(y.a)(E, 2),
					I = F[0],
					J = F[1],
					W = Object(h.useState)(''),
					B = Object(y.a)(W, 2),
					G = B[0],
					H = B[1];
				Object(h.useEffect)(function () {
					R();
				}, []);
				var R = (function () {
					var t = Object(p.a)(
						v.a.mark(function t() {
							var e, n;
							return v.a.wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(t.prev = 0),
													H(''),
													(t.next = 4),
													fetch(
														'https://api.openweathermap.org/data/2.5/weather?q='.concat(
															c,
															'&appid=2c045c1dbbb951593e7270196784c765&units=metric'
														)
													)
												);
											case 4:
												return (e = t.sent), (t.next = 7), e.json();
											case 7:
												if (((n = t.sent), e.ok)) {
													t.next = 10;
													break;
												}
												throw n;
											case 10:
												b(n.name),
													O(n.sys.country),
													q(n.main.temp),
													C(n.weather[0].main),
													J(n.main.humidity),
													(t.next = 20);
												break;
											case 17:
												(t.prev = 17), (t.t0 = t.catch(0)), H(t.t0.message);
											case 20:
											case 'end':
												return t.stop();
										}
								},
								t,
								null,
								[[0, 17]]
							);
						})
					);
					return function () {
						return t.apply(this, arguments);
					};
				})();
				return Object(z.jsxs)('div', {
					className: 'App',
					children: [
						Object(z.jsx)('header', {
							className: 'full-screen-header',
							children: Object(z.jsxs)('div', {
								className: 'box',
								children: [
									Object(z.jsx)('div', {
										className: 'logo-p',
										children: Object(z.jsx)('img', { className: 'logo', src: 'logo.png', alt: 'logo' })
									}),
									Object(z.jsx)(t, { children: 'Weather' }),
									Object(z.jsxs)('form', {
										onSubmit: function (t) {
											return (function (t) {
												t.preventDefault(), R();
											})(t);
										},
										children: [
											Object(z.jsx)(e, {
												children: Object(z.jsx)('label', { for: 'city', children: 'City' })
											}),
											Object(z.jsx)('div', {
												className: 'city-input',
												children: Object(z.jsx)('input', {
													onChange: function (t) {
														return (function (t) {
															var e = t.target.value;
															r(e);
														})(t);
													},
													value: c,
													type: 'text',
													id: 'city-input',
													name: 'city'
												})
											}),
											G && Object(z.jsx)(n, { children: G })
										]
									})
								]
							})
						}),
						Object(z.jsx)(A, { city: l, country: g, temp: Math.trunc(T), condition: S, humidity: I })
					]
				});
			};
			O.a.render(
				Object(z.jsx)(f.a.StrictMode, { children: Object(z.jsx)(D, {}) }),
				document.getElementById('root')
			);
		},
		7: function (t, e, n) {}
	},
	[[21, 1, 2]]
]);
//# sourceMappingURL=main.7f31ebf6.chunk.js.map
