(this["webpackJsonpe_commerce-app"]=this["webpackJsonpe_commerce-app"]||[]).push([[0],{136:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(10),u=n(11),l=n(76),j=new(n.n(l).a)("pk_test_315962244ebc4bc228417e492adb023023f57938bff64",!0),d=n(171),b=n(173),p=n(57),m=n(174),h=n(175),O=n(176),x=n(14),f=n(20),g=n.p+"static/media/commerce.457bea4f.png",v=n(16),y=n(168),k=n(18),C=Object(y.a)((function(t){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.c)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.c)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),w=n(2),S=function(t){var e=t.totalItems,n=C(),a=Object(x.f)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(d.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(w.jsxs)(b.a,{children:[Object(w.jsxs)(p.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(w.jsx)("img",{src:g,alt:"Commerce.js",height:"25px",className:n.image}),"Commerce.js"]}),Object(w.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(w.jsx)("div",{className:n.button,children:Object(w.jsx)(m.a,{component:f.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(w.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(w.jsx)(O.a,{})})})})]})})})},_=n(182),N=n(177),T=n(178),B=n(179),R=n(180),F=n(181),E=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),L=function(t){var e=t.product,n=t.onAddToCart,a=E();return Object(w.jsxs)(N.a,{className:a.root,children:[Object(w.jsx)(T.a,{className:a.media,image:e.media.source,title:e.name}),Object(w.jsxs)(B.a,{children:[Object(w.jsxs)("div",{className:a.cardContent,children:[Object(w.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(w.jsx)(p.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(w.jsx)(p.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(w.jsx)(R.a,{disableSpacing:!0,className:a.cardActions,children:Object(w.jsx)(m.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(w.jsx)(F.a,{})})})]})},A=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),I=function(t){var e=t.products,n=t.onAddToCart,a=A();return Object(w.jsxs)("main",{className:a.content,children:[Object(w.jsx)("div",{className:a.toolbar}),Object(w.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(w.jsx)(_.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(w.jsx)(L,{product:t,onAddToCart:n})},t.id)}))})]})},D=n(183),W=n(184),q=Object(y.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(v.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),z=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),P=function(t){var e=t.item,n=t.onUpdateCartQty,a=t.onRemoveFromCart,r=z();return Object(w.jsxs)(N.a,{children:[Object(w.jsx)(T.a,{image:e.media.source,alt:e.name,className:r.media}),Object(w.jsxs)(B.a,{className:r.cardContent,children:[Object(w.jsx)(p.a,{variant:"h4",children:e.name}),Object(w.jsx)(p.a,{variant:"h5",children:e.line_total_formatted_with_symbol})]}),Object(w.jsxs)(R.a,{className:r.cardActions,children:[Object(w.jsxs)("div",{className:r.buttons,children:[Object(w.jsx)(D.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(w.jsx)(p.a,{children:e.quantity}),Object(w.jsx)(D.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(w.jsx)(D.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:"Remove"})]})]})},H=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=t.handleEmptyCart,c=q(),i=function(){return Object(w.jsxs)(p.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(w.jsx)(f.b,{to:"/",className:c.link,children:"start adding some!"})]})},s=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(w.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(w.jsx)(P,{item:t,onUpdateCartQty:n,onRemoveFromCart:a})},t.id)}))}),Object(w.jsxs)("div",{className:c.cardDetails,children:[Object(w.jsxs)(p.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(D.a,{className:c.emptyButton,size:"large",type:"button",varian:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(w.jsx)(D.a,{component:f.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",varian:"contained",color:"primary",children:"Checkout Cart"})]})]})]})};return e.line_items?Object(w.jsxs)(W.a,{children:[Object(w.jsx)("div",{className:c.toolbar}),Object(w.jsx)(p.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(w.jsx)(s,{}):Object(w.jsx)(i,{})]}):"Loading..."},M=n(190),Q=n(191),U=n(83),J=n(199),G=n(193),Y=n(195),K=n(192),V=Object(y.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(v.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),X=n(50),Z=n(198),$=n(194),tt=n(188),et=n(45),nt=n(196),at=function(t){var e=t.name,n=t.label,a=Object(et.d)().control;return Object(w.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(et.a,{defaultValue:"",control:a,name:e,render:function(t){t.field;return Object(w.jsx)(nt.a,{fullWidth:!0,label:n,required:!0})}})})},rt=function(t){var e=t.checkoutToken,n=t.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],l=c[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),g=x[0],v=x[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),C=k[0],S=k[1],N=Object(a.useState)([]),T=Object(u.a)(N,2),B=T[0],R=T[1],F=Object(a.useState)(""),E=Object(u.a)(F,2),L=E[0],A=E[1],I=Object(et.c)(),W=Object.entries(i).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),q=Object.entries(g).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),z=B.map((function(t){return{id:t.id,label:"".concat(t.description,"-(").concat(t.price.formatted_with_symbol,")")}})),P=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,l(a),h(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.services.localeListSubdivisions(e);case 2:n=t.sent,a=n.subdivisions,v(a),S(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,t.next=3,j.checkout.getShippingOptions(e,{country:n,region:a});case 3:r=t.sent,R(r),A(r[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){P(e.id)}),[]),Object(a.useEffect)((function(){m&&H(m)}),[m]),Object(a.useEffect)((function(){C&&M(e.id,m,C)}),[C]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(w.jsx)(et.b,Object(X.a)(Object(X.a)({},I),{},{children:Object(w.jsxs)("form",{onSubmit:I.handleSubmit((function(t){return n(Object(X.a)(Object(X.a)({},t),{},{shippingCountry:m,shippingSubdivision:C,shippingOption:L}))})),children:[Object(w.jsxs)(_.a,{container:!0,spacing:3,children:[Object(w.jsx)(at,{name:"firstName",label:"First name"}),Object(w.jsx)(at,{name:"lastName",label:"Last name"}),Object(w.jsx)(at,{name:"address1",label:"Address"}),Object(w.jsx)(at,{name:"email",label:"Email"}),Object(w.jsx)(at,{name:"city",label:"City"}),Object(w.jsx)(at,{name:"zip",label:"ZIP / Postal code"}),Object(w.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(w.jsx)(Z.a,{children:"Shipping Country"}),Object(w.jsx)($.a,{value:m,fullWidth:!0,onChange:function(t){return h(t.target.value)},children:W.map((function(t){return Object(w.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(w.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(w.jsx)(Z.a,{children:"Shipping Subdivisions"}),Object(w.jsx)($.a,{value:C,fullWidth:!0,onChange:function(t){return S(t.target.value)},children:q.map((function(t){return Object(w.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(w.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(w.jsx)(Z.a,{children:"Shipping Options"}),Object(w.jsx)($.a,{value:L,fullWidth:!0,onChange:function(t){return A(t.target.value)},children:z.map((function(t){return Object(w.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(w.jsx)(D.a,{component:f.b,to:"/cart",varian:"outline",children:"Back to Cart"}),Object(w.jsx)(D.a,{type:"submit",varian:"contained",color:"primary",children:"Next"})]})]})}))]})},ct=n(51),it=n(81),st=n(187),ot=n(137),ut=n(189),lt=function(t){var e=t.checkoutToken;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Order Summary"}),Object(w.jsxs)(st.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(w.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(w.jsx)(ut.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(w.jsx)(p.a,{variant:"body2",children:t.line_total.formatted_with_symbol})]},t.name)})),Object(w.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(w.jsx)(ut.a,{primary:"Total"}),Object(w.jsx)(p.a,{variant:"subtitle1",style:{fontWeight:700},children:e.live.subtotal.formatted_with_symbol})]})]})]})},jt=Object(it.a)("pk_test_51JNSW0ARUHBOFYzR6MKD9OFmfR5qVmxiO2RlusLMfo9yby6kzu8gdOJH9OeL7mpbDcfHWre3DRJCfxXtsFIFLKqq009M3SRTQU;"),dt=function(t){var e=t.checkoutToken,n=t.shippingData,a=t.backStep,r=t.onCaptureCheckout,c=t.nextStep,i=t.timeout,u=function(){var t=Object(o.a)(s.a.mark((function t(a,o,u){var l,j,d,b,p;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),l=o.getElement(ct.CardElement),t.next=4,u.createPaymentMethod({type:"card",card:l});case 4:j=t.sent,d=j.error,b=j.paymentMethod,d?console.log(d):(p={line_items:e.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:b.id}}},r(e.id,p),i(),c());case 8:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(lt,{checkoutToken:e}),Object(w.jsx)(M.a,{}),Object(w.jsx)(p.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(w.jsx)(ct.Elements,{stripe:jt,children:Object(w.jsx)(ct.ElementsConsumer,{children:function(t){var n=t.elements,r=t.stripe;return Object(w.jsxs)("form",{onSubmit:function(t){return u(t,n,r)},children:[Object(w.jsx)(ct.CardElement,{}),Object(w.jsx)("br",{})," ",Object(w.jsx)("br",{}),Object(w.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(w.jsx)(D.a,{variant:"outlined",onClick:a,children:"Back"}),Object(w.jsxs)(D.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",e.live.subtotal.formatted_with_symbol]})]})]})}})})]})},bt=["Shipping address","Payment details"],pt=function(t){var e=t.cart,n=t.order,r=t.onCaptureCheckout,c=t.error,i=Object(a.useState)(0),l=Object(u.a)(i,2),d=l[0],b=l[1],m=Object(a.useState)(null),h=Object(u.a)(m,2),O=h[0],x=h[1],g=Object(a.useState)({}),v=Object(u.a)(g,2),y=v[0],k=v[1],C=Object(a.useState)(!1),S=Object(u.a)(C,2),_=S[0],N=S[1],T=V();Object(a.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,x(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var B=function(){return b((function(t){return t+1}))},R=function(){return b((function(t){return t-1}))},F=function(t){console.log(t),k(t),B()},E=function(){setTimeout((function(){N(!0)}),3e3)},L=function(){return n.customer?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)(p.a,{variant:"h5",children:["Thank you for you purchase, ",n.customer.firstname,n.customer.lastname]}),Object(w.jsx)(M.a,{className:T.divider}),Object(w.jsxs)(p.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(w.jsx)("br",{}),Object(w.jsx)(D.a,{component:f.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):_?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(p.a,{variant:"h5",children:"Thank you for you purchase"}),Object(w.jsx)(M.a,{className:T.divider})]}),Object(w.jsx)("br",{}),Object(w.jsx)(D.a,{component:f.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):Object(w.jsx)("div",{className:T.spinner,children:Object(w.jsx)(Q.a,{})})};c&&(w.Fragment,p.a,D.a,f.b);var A=function(){return 0===d?Object(w.jsx)(rt,{checkoutToken:O,next:F}):Object(w.jsx)(dt,{shippingData:y,checkoutToken:O,nextStep:B,backStep:R,onCaptureCheckout:r,timeout:E})};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(K.a,{}),Object(w.jsx)("div",{className:T.toolbar}),Object(w.jsx)("main",{className:T.layout,children:Object(w.jsxs)(U.a,{className:T.paper,children:[Object(w.jsx)(p.a,{variant:"h4",align:"center",children:"Checkout"}),Object(w.jsx)(J.a,{activeStep:d,className:T.stepper,children:bt.map((function(t){return Object(w.jsx)(G.a,{children:Object(w.jsx)(Y.a,{children:t})},t)}))}),d===bt.length?Object(w.jsx)(L,{}):O&&Object(w.jsx)(A,{})]})})]})},mt=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=Object(a.useState)({}),p=Object(u.a)(b,2),m=p[0],h=p[1],O=Object(a.useState)(""),g=Object(u.a)(O,2),v=g[0],y=g[1],k=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=d,t.next=3,j.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.add(e,n);case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,d(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.remove(e);case 2:n=t.sent,a=n.cart,d(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.empty();case 2:e=t.sent,n=e.cart,d(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.cart.refresh();case 2:e=t.sent,d(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.checkout.capture(e,n);case 3:a=t.sent,h(a),R(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y(t.t0.data.error.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),C()}),[]),Object(w.jsx)(f.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{totalItems:l.total_items}),Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{exact:!0,path:"/",children:Object(w.jsx)(I,{products:n,onAddToCart:_})}),Object(w.jsx)(x.a,{exact:!0,path:"/cart",children:Object(w.jsx)(H,{cart:l,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(w.jsx)(x.a,{exact:!0,path:"/checkout",children:Object(w.jsx)(pt,{cart:l,order:m,onCaptureCheckout:F,error:v})})]})]})})};c.a.render(Object(w.jsx)(mt,{}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.a2381927.chunk.js.map