(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`transferring`,name:`Grain Transferring`,icon:`move-horizontal`,img:`assets/products/pipe-coil-1.jpeg`},{id:`collecting`,name:`Grain Collecting`,icon:`circle-dot`,img:`assets/products/collector-field.jpeg`},{id:`bagging`,name:`Grain Bagging`,icon:`package`,img:`assets/products/collector-bags.jpeg`},{id:`handling`,name:`Grain Handling Equipment`,icon:`warehouse`,img:`assets/products/pipe-frame.jpeg`},{id:`machinery`,name:`Agricultural Machinery`,icon:`tractor`,img:`assets/products/collector-diagram.jpeg`},{id:`accessories`,name:`Pipes & Accessories`,icon:`cable`,img:`assets/products/pipe-mounted-2.jpeg`}],t=[{icon:`gauge`,value:`18 Tons/Hour`,label:`High Transfer Capacity`},{icon:`ruler`,value:`30–500 Feet`,label:`Pipe Length Options`},{icon:`move-vertical`,value:`20 Feet`,label:`Transfer Height`},{icon:`zap`,value:`5 HP–16 HP`,label:`Motor Options`},{icon:`package-check`,value:`90 Bags/Hour`,label:`Bagging Capacity`}],n={name:`Farm Craft`,gstin:`37AQXPV3001H1ZG`,logo:`assets/farmcraft-logo-full.png`,logoMark:`assets/farmcraft-logo-full.png`,email:`farmcraft68@gmail.com`,phone:`+91 94404 36868`,whatsapp:`919440436868`,address:`1-23A, Swaraj Tractor Showroom, Palakonda, Manyam District, Andhra Pradesh - 532440`,addressNote:`Official Farm Craft contact details.`,website:``,mobileNumbers:[`+91 94904 36868`],adminName:`VARADA VIJAYAKRISHNA`,adminEmail:`admin@farmcraft.com`,adminMobile:`+91 94404 36868`,adminMobileNumbers:[`+91 94904 36868`]},r=[{id:`grain-transferring`,title:`Grain Transferring Solutions`,icon:`move-horizontal`,image:`assets/products/pipe-mounted-1.jpeg`,tagline:`Move grain fast, over long distances, with far less manual handling.`,description:`We supply and support flexible, motor-driven grain transferring systems that move rice, wheat, corn, soybean and powders between trucks, stores and processing points — sized to fit daily farm and mill use.`,benefits:[`Transfer capacity up to 18 tons/hour`,`Pipe lengths from 30 ft to 500 ft`,`Motor options from 5 HP to 16 HP`,`Cuts down manual loading and labour time`],process:[`Share your site layout and daily grain volume with our team`,`We recommend a pipe length and motor configuration`,`Get a purchase code and confirm delivery details`,`On-site setup guidance provided on request`],categoryId:`transferring`},{id:`grain-collecting`,title:`Grain Collecting & Field Recovery`,icon:`circle-dot`,image:`assets/products/collector-field.jpeg`,tagline:`Recover loose grain from threshing floors and open yards efficiently.`,description:`Track-mounted and wheeled collectors gather loose grain from the ground and feed it into an inclined elevator, cutting manual scooping and speeding up cleanup after threshing.`,benefits:[`Handles rice, corn, wheat, soybean and side crops`,`Adjustable-incline elevator`,`Stable movement across loose grain heaps`,`Faster yard and threshing-floor cleanup after harvest`],process:[`Tell us your terrain and typical heap size`,`We match a collector unit to your operation`,`Purchase code and delivery are arranged`,`Live demonstration available on request`],categoryId:`collecting`},{id:`grain-bagging`,title:`Grain Bagging & Packaging`,icon:`package`,image:`assets/products/collector-bags.jpeg`,tagline:`Consistent, fast bag-filling for grains and powders.`,description:`Bagging attachments and collecting-and-bagging machines pair with your existing setup for consistent fill weight and quick bag changeovers, so filled bags are ready to stack and move.`,benefits:[`Up to 90 bags/hour`,`Standard 50 kg woven bag compatibility`,`Consistent fill weight across bags`,`Pairs with any Farm Craft collector unit`],process:[`Confirm your bag size and target throughput`,`We recommend the right bagging attachment`,`Get a purchase code and delivery schedule`,`Optional on-site setup walkthrough`],categoryId:`bagging`},{id:`custom-configuration`,title:`Custom Machinery Configuration`,icon:`settings-2`,image:`assets/products/collector-diagram.jpeg`,tagline:`Motor, pipe and mounting options matched to your operation, not the other way around.`,description:`Every farm, mill and store is different. We help you choose motor output, pipe length, mounting style and accessories so the machinery fits your daily volume and available space.`,benefits:[`Configurations from 5 HP to 16 HP motors`,`Fixed, wheeled or track-mounted builds`,`Sized to your grain type and daily volume`,`One point of contact for the full setup`],process:[`Describe your operation — grain type, volume, space`,`We propose one or two configurations to compare`,`Choose a configuration inside the Get a Code flow`,`Confirm your order and track it under My Orders`],categoryId:`machinery`},{id:`installation-support`,title:`On-Site Installation & Setup Guidance`,icon:`wrench`,image:`assets/products/pipe-frame.jpeg`,tagline:`Get your machinery running correctly from day one.`,description:`Once your order is confirmed, our team can walk you through safe setup, pipe routing and first-run checks so your machine is working correctly from the very start.`,benefits:[`Guided first-time setup`,`Safety and operating checks`,`Pipe routing and mounting guidance`,`Fewer early breakdowns caused by incorrect setup`],process:[`Confirm delivery and your preferred setup date`,`Our team shares a simple setup checklist`,`Guided walkthrough, in person or by phone`,`Sign-off once the machine is running smoothly`],categoryId:`handling`},{id:`after-sales-support`,title:`After-Sales Support & Maintenance`,icon:`headphones`,image:`assets/products/pipe-coil-2.jpeg`,tagline:`We stay reachable after the sale, not just before it.`,description:`From spare pipe sections to troubleshooting help, our team supports Farm Craft machinery for the long run — reach out any time using your order ID or purchase code.`,benefits:[`Spare parts and pipe sections available`,`Troubleshooting support by phone or WhatsApp`,`Guidance on routine maintenance`,`Support tied directly to your order and purchase code`],process:[`Reach out with your purchase code or order ID`,`Describe the issue or the part you need`,`Our team advises the next steps`,`We follow up with you until it is resolved`],categoryId:`accessories`}],i=`/api`.replace(/\/$/,``),a={auth:`fc_auth_session`,token:`fc_auth_token`,wishlist:`fc_wishlist`,addresses:`fc_addresses`};function o(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function s(e,t){localStorage.setItem(e,JSON.stringify(t))}async function c(e,t={}){let n=localStorage.getItem(a.token),r={"Content-Type":`application/json`,...t.headers||{}};n&&(r.Authorization=`Bearer ${n}`);let o;try{o=await fetch(`${i}${e}`,{...t,headers:r})}catch{throw Error(`Could not reach the Farm Craft server. Start the backend at http://127.0.0.1:8000 and try again.`)}if(o.status===204)return null;let s=null;try{s=await o.json()}catch{}if(!o.ok){o.status===401&&(localStorage.removeItem(a.token),localStorage.removeItem(a.auth));let e=typeof s?.detail==`string`&&s.detail?s.detail:{400:`That request was not valid. Please check the details and try again.`,401:`Please log in to continue.`,403:`You do not have permission to do that.`,404:`We could not find what you were looking for.`,409:`That could not be completed due to a conflict with existing data.`,422:`Please check the details you entered and try again.`}[o.status]||`Something went wrong on the Farm Craft server. Please try again.`,t=Error(e);throw t.status=o.status,t}return s}function l(e){s(a.auth,e.user),localStorage.setItem(a.token,e.access_token)}var u={async sendOtp(e){return await c(`/auth/customer/send-otp`,{method:`POST`,body:JSON.stringify({mobile:e})}),{ok:!0}},async verifyOtp(e,t,n){try{let r=await c(`/auth/customer/verify-otp`,{method:`POST`,body:JSON.stringify({name:e,mobile:t,otp:n})});return l(r),{ok:!0,session:r.user}}catch(e){return{ok:!1,error:e.message}}},logout(){localStorage.removeItem(a.token),localStorage.removeItem(a.auth)},getSession(){return o(a.auth,null)},isLoggedIn(){return!!localStorage.getItem(a.token)&&!!o(a.auth,null)}};function d(e){let t=(e.images&&e.images.length?e.images:[e.image]).filter(Boolean),n=[];for(let[t,r]of[[`Motor`,`motor`],[`Capacity`,`capacity`],[`Length`,`length`],[`Height`,`height`],[`Pipe Material`,`pipe_material`],[`Screw Material`,`screw_material`],[`Usage`,`usage`]])e[r]&&n.push({label:t,value:e[r]});n.length||n.push({label:`SKU`,value:e.sku});let r=e.slug||e.name.toLowerCase().trim().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``),i=e.price==null?null:Number(e.price),a=e.discount_price==null?void 0:Number(e.discount_price),o=a??i,s=i!=null&&a!=null&&a<i,c=e.stock<=0?`Out of Stock`:e.stock<=5?`Low Stock`:`In Stock`;return{...e,slug:r,price:o,listPrice:i,discountPrice:a,hasDiscount:s,images:t.length?t:[`assets/products/collector-diagram.jpeg`],specifications:n,features:e.features||[],applications:e.applications||[],stockStatus:c,rating:null,reviews:0}}var f={cache:[],loading:!1,loaded:!1,loadingPromise:null,error:null,async load({force:e=!1}={}){return this.loaded&&!e?this.cache:this.loadingPromise&&!e?this.loadingPromise:(this.loading=!0,this.loadingPromise=(async()=>{try{let e=await c(`/products?status=active&skip=0&limit=200`),t=e.items||[],n=e.total??t.length;for(;t.length<n;){let e=await c(`/products?status=active&skip=${t.length}&limit=200`);if(!e.items||!e.items.length)break;t=t.concat(e.items)}this.cache=t.map(d),this.error=null,this.loaded=!0}catch(e){this.error=e.message||`Could not load products.`}finally{this.loading=!1,this.loadingPromise=null}return this.cache})(),this.loadingPromise)},list(){return this.cache},search(e,{category:t,availability:n}={}){let r=(e||``).trim().toLowerCase();return this.cache.filter(e=>t&&e.category!==t||n===`in-stock`&&e.stockStatus!==`In Stock`||n===`low-stock`&&e.stockStatus!==`Low Stock`?!1:!r||[e.name,e.description,e.category,e.sku,...e.applications,...e.features].join(` `).toLowerCase().includes(r))},bySlug(e){return this.cache.find(t=>t.slug===e)||null}},p={loaded:!1,loadingPromise:null,async load({force:e=!1}={}){return this.loaded&&!e?n:(this.loadingPromise&&!e||(this.loadingPromise=(async()=>{try{let e=await c(`/company`,{auth:!1});Object.assign(n,{name:e.name??n.name,email:e.email??n.email,phone:e.mobile??n.phone,whatsapp:e.whatsapp??n.whatsapp,address:e.address??n.address,mobileNumbers:e.mobile_numbers??n.mobileNumbers,adminName:e.admin_name??n.adminName,adminEmail:e.admin_email??n.adminEmail,adminMobile:e.admin_mobile??n.adminMobile,adminMobileNumbers:e.admin_mobile_numbers??n.adminMobileNumbers,addressNote:e.address_note??n.addressNote,gstin:e.gstin??n.gstin,website:e.website??n.website}),this.loaded=!0}catch{}finally{this.loadingPromise=null}return n})()),this.loadingPromise)}},m={getProfile(){let e=u.getSession();return e?{...e,addresses:o(a.addresses,[])}:null},saveAddress(e){let t=o(a.addresses,[]);return t.unshift({id:`addr_${Date.now()}`,...e}),s(a.addresses,t),t},getAddresses(){return o(a.addresses,[])},toggleWishlist(e){let t=o(a.wishlist,[]),n=t.indexOf(e);return n>=0?t.splice(n,1):t.unshift(e),s(a.wishlist,t),t},getWishlist(){return o(a.wishlist,[])}},h={async get(){return c(`/cart`)},async add(e,t=1){return c(`/cart/items`,{method:`POST`,body:JSON.stringify({product_id:e,quantity:t})})},async update(e,t){return c(`/cart/items/${e}`,{method:`PUT`,body:JSON.stringify({quantity:t})})},async remove(e){return c(`/cart/items/${e}`,{method:`DELETE`})},async clear(){return c(`/cart`,{method:`DELETE`})}},g={cache:[],async create(e){let t=await c(`/orders`,{method:`POST`,body:JSON.stringify({address:e.address,mobile:e.customer?.mobile||null,configuration:e.configuration||null,order_method:e.orderMethod||`delivery`})});return this.cache.unshift(t),t},async load(){return this.cache=await c(`/orders`),this.cache},list(){return this.cache},byId(e){return this.cache.find(t=>t.id===e||t.order_number===e||t.orderId===e)||null}},ee=`data:image/svg+xml;charset=UTF-8,%0A%20%20%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2212%22%20fill%3D%22%231E7A3D%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M32%2014%20C20%2014%2014%2024%2014%2034%20C14%2044%2022%2050%2032%2050%20C42%2050%2050%2044%2050%2034%20C50%2024%2044%2014%2032%2014%20Z%22%0A%20%20%20%20%20%20%20%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.4%22%2F%3E%0A%20%20%20%20%20%20%3Cpath%20d%3D%22M32%2020%20V44%20M32%2044%20L24%2036%20M32%2038%20L40%2030%22%0A%20%20%20%20%20%20%20%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20`,_=null;function v(){return _||(_=fetch(n.logoMark).then(e=>{if(!e.ok)throw Error(`logo fetch failed`);return e.blob()}).then(e=>new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})).catch(()=>ee),_)}function y(e){return`INV-${e.order_number||e.id}`}var te={async buildInvoiceHtml(e){let t=await v(),r=p.get?.()||n,i=Number(e.total_amount||0),a=e.items?.reduce((e,t)=>e+t.quantity,0)||0,o=a?i/a:0,s=`₹${i.toLocaleString(`en-IN`)}`,c=`₹${o.toLocaleString(`en-IN`,{maximumFractionDigits:2})}`,l=s,u=new Date(e.created_at);return`
      <div style="font-family: 'Inter', Arial, sans-serif; color:#2A2E29; max-width:720px; margin:0 auto; background:#FCFBF8;">

        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:24px; padding:36px 40px 24px; border-bottom:4px solid #1E7A3D;">

          <div style="display:flex; align-items:center; gap:14px;">

            <img
              src="${t}"
              alt="Farm Craft logo"
              width="56"
              height="56"
              style="width:56px; height:56px; border-radius:12px; object-fit:contain; display:block;"
            />

            <div>
              <div style="font-size:22px; font-weight:700; letter-spacing:0.5px; color:#134A26;">
                FARM CRAFT
              </div>

              <div style="font-size:11px; color:#666; margin-top:2px;">
                Agricultural Machinery &amp; Grain Handling Equipment
              </div>

              <div style="font-size:11px; color:#666; margin-top:2px;">
                GSTIN: ${r.gstin||n.gstin}
              </div>
            </div>
          </div>

          <div style="text-align:right;">

            <div style="font-size:20px; font-weight:700; color:#1E7A3D; letter-spacing:1px;">
              INVOICE
            </div>

            <div style="font-size:12px; color:#666; margin-top:6px;">
              Invoice No:
              <strong style="color:#2A2E29;">
                ${y(e)}
              </strong>
            </div>

            <div style="font-size:12px; color:#666;">
              Order ID:
              <strong style="color:#2A2E29;">
                ${e.order_number||e.id}
              </strong>
            </div>

            <div style="font-size:12px; color:#666;">
              Date:
              <strong style="color:#2A2E29;">
                ${u.toLocaleDateString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`})}
              </strong>
            </div>

          </div>
        </div>

        <div style="padding:24px 40px 0;">

          <div style="background:#134A26; color:#fff; border-radius:14px; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">

            <div>
              <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">
                Purchase Code
              </div>

              <div style="font-size:20px; font-weight:700; letter-spacing:2px; margin-top:2px;">
                ${e.purchase_code}
              </div>
            </div>

            <div style="text-align:right;">
              <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">
                Status
              </div>

              <div style="font-size:13px; font-weight:600; margin-top:2px;">
                ${e.status}
              </div>
            </div>

          </div>

          <div style="display:flex; gap:32px; margin-bottom:24px;">

            <div style="flex:1;">

              <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">
                Billed To
              </div>

              <div style="font-size:13px; line-height:1.6;">

                <div style="font-weight:600;">
                  ${e.customer_snapshot?.name||``}
                </div>

                <div>
                  ${e.customer_snapshot?.email||``}
                </div>

                <div>
                  ${e.customer_snapshot?.mobile||``}
                </div>

              </div>
            </div>

            <div style="flex:1;">

              <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">
                Delivery Address
              </div>

              <div style="font-size:13px; line-height:1.6;">

                <div>
                  ${e.shipping_address?.line1||e.shipping_address?.address||`—`}
                </div>

                <div>
                  ${[e.shipping_address?.city,e.shipping_address?.state,e.shipping_address?.pincode].filter(Boolean).join(`, `)||``}
                </div>

              </div>
            </div>

            <div style="flex:1;">

              <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">
                From
              </div>

              <div style="font-size:13px; line-height:1.6;">

                <div style="font-weight:600;">
                  ${n.name}
                </div>

                <div>
                  ${r.email||n.email}
                </div>

                <div>
                  ${r.mobile||n.phone}
                </div>

              </div>
            </div>

          </div>

          <table style="width:100%; border-collapse:collapse; margin-bottom:4px;">

            <thead>
              <tr style="background:#E8F3EC; text-align:left;">

                <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; border-radius:8px 0 0 8px;">
                  Product
                </th>

                <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26;">
                  Configuration
                </th>

                <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:center;">
                  Qty
                </th>

                <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right;">
                  Unit Price
                </th>

                <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right; border-radius:0 8px 8px 0;">
                  Amount
                </th>

              </tr>
            </thead>

            <tbody>

              <tr>

                <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; font-weight:600;">
                  ${e.items?.[0]?.product_name||``}
                </td>

                <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:12px; color:#666;">
                  ${e.configuration||`—`}
                </td>

                <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:center;">
                  ${a}
                </td>

                <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right;">
                  ${c}
                </td>

                <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right; font-weight:600;">
                  ${s}
                </td>

              </tr>

            </tbody>

          </table>

          <div style="display:flex; justify-content:flex-end; margin-bottom:28px;">

            <div style="width:260px;">

              <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
                <span>Subtotal</span>
                <span>${l}</span>
              </div>

              <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
                <span>Taxes</span>
                <span>${i>0?`Included`:`—`}</span>
              </div>

              <div style="display:flex; justify-content:space-between; padding:12px; background:#E8F3EC; border-radius:10px; font-size:15px; font-weight:700; color:#134A26; margin-top:4px;">
                <span>Total</span>
                <span>${l}</span>
              </div>

            </div>
          </div>

          <div style="display:flex; gap:32px; margin-bottom:28px; font-size:12px; color:#666;">

            <div>
              <span style="color:#888;">Payment Method:</span>
              <strong style="color:#2A2E29;">
                ${e.payment_method||`—`}
              </strong>
            </div>

            <div>
              <span style="color:#888;">Order Date:</span>
              <strong style="color:#2A2E29;">
                ${u.toLocaleDateString(`en-IN`)}
              </strong>
            </div>

          </div>

        </div>

        <div style="border-top:1px solid #E4E2D9; padding:20px 40px 32px; font-size:11px; color:#999; text-align:center; line-height:1.7;">

          Thank you for choosing Farm Craft. Our team will contact you regarding order confirmation and delivery.
          <br />

          Farm Craft &middot;
          ${r.address||n.address}
          &middot;
          ${r.email||n.email}
          &middot;
          ${r.mobile||n.phone}

        </div>

      </div>
    `},async downloadInvoice(e){let t=await this.buildInvoiceHtml(e),n=`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />

          <title>
            Invoice ${y(e)} — Farm Craft
          </title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <style>
            body {
              margin: 0;
              padding: 32px 16px;
              background: #F1EFE7;
              font-family: Inter, Arial, sans-serif;
            }

            @media print {
              body {
                background: #fff;
                padding: 0;
              }
            }

            table {
              width: 100%;
            }
          </style>
        </head>

        <body>
          ${t}
        </body>
      </html>
    `,r=new Blob([n],{type:`text/html`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`FarmCraft-Invoice-${e.order_number||e.id}.html`,document.body.appendChild(a),a.click(),a.remove(),URL.revokeObjectURL(i)}},b={cache:[],async load({force:e=!1}={}){if(this.cache.length&&!e)return this.cache;try{this.cache=await c(`/offers`,{headers:{}})}catch{this.cache=[]}return this.cache},forProduct(e){return this.cache.find(t=>t.product===`All Machinery`||t.product===e)||null}};function x(){window.lucide&&window.lucide.createIcons()}function S(e,t={}){let n=document.getElementById(`toast-root`),r=document.createElement(`div`),i=t.type===`error`;r.className=`toast-enter flex items-center gap-2 px-4 py-3 rounded-xl shadow-soft text-sm font-medium ${i?`bg-fc-charcoal text-white`:`bg-fc-green text-white`}`,r.innerHTML=`<i data-lucide="${i?`alert-circle`:`check-circle-2`}" class="w-4 h-4 shrink-0"></i><span>${e}</span>`,n.appendChild(r),x(),setTimeout(()=>{r.style.transition=`opacity .3s ease, transform .3s ease`,r.style.opacity=`0`,r.style.transform=`translateY(-6px)`,setTimeout(()=>r.remove(),300)},2600)}function C(e,{size:t=`text-fc-charcoal font-display font-semibold`}={}){return e.price===null||e.price===void 0?`<span class="${t}">Price on Request</span>`:e.hasDiscount?`<span class="flex items-center gap-2 flex-wrap">
      <span class="${t}">₹${Number(e.price).toLocaleString(`en-IN`)}</span>
      <span class="text-sm text-fc-slate/50 line-through">₹${Number(e.listPrice).toLocaleString(`en-IN`)}</span>
    </span>`:`<span class="${t}">₹${Number(e.price).toLocaleString(`en-IN`)}</span>`}var ne=`data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22300%22%20viewBox%3D%220%200%20400%20300%22%3E%0A%20%20%20%20%20%3Crect%20width%3D%22400%22%20height%3D%22300%22%20fill%3D%22%23E8F3EC%22%2F%3E%0A%20%20%20%20%20%3Cg%20fill%3D%22none%22%20stroke%3D%22%231E7A3D%22%20stroke-width%3D%226%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20opacity%3D%220.55%22%3E%0A%20%20%20%20%20%20%20%3Crect%20x%3D%22130%22%20y%3D%22108%22%20width%3D%22140%22%20height%3D%22100%22%20rx%3D%2210%22%2F%3E%0A%20%20%20%20%20%20%20%3Cpath%20d%3D%22M130%20150%20L170%20108%20L230%20108%20L270%20150%22%2F%3E%0A%20%20%20%20%20%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22172%22%20r%3D%2216%22%2F%3E%0A%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%3C%2Fsvg%3E`;function w(e,t,n=``){return`<img src="${e}" alt="${t}" class="${n}" loading="lazy"
    onerror="this.onerror=null;this.src='${ne}';this.className='${n} object-contain p-10 bg-fc-greenlight';" />`}function T(e){return`<span class="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${{"In Stock":`bg-fc-greenlight text-fc-green`,"Low Stock":`bg-amber-50 text-amber-700`,"Out of Stock":`bg-red-50 text-red-600`}[e]||`bg-gray-100 text-gray-600`}">
    <span class="w-1.5 h-1.5 rounded-full ${e===`In Stock`?`bg-fc-green`:e===`Low Stock`?`bg-amber-500`:`bg-red-500`}"></span>
    ${e}
  </span>`}function E(e,{showRemoveFromFavorites:t=!1}={}){let n=m.getWishlist().includes(e.id);return`
  <article class="group bg-white rounded-2xl border border-fc-line shadow-card hover:shadow-soft transition-shadow duration-300 overflow-hidden flex flex-col">
    <a href="#/product/${e.slug}" class="zoom-wrap block relative aspect-[4/3] bg-fc-greenlight">
      ${w(e.images[0],e.name,`w-full h-full object-cover`)}
      <button data-wishlist="${e.id}" aria-label="Toggle wishlist" aria-pressed="${n}"
        class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-card hover:scale-105 transition-transform">
        <i data-lucide="heart" class="w-4 h-4 ${n?`text-fc-wheat fill-fc-wheat`:`text-fc-charcoal`}"></i>
      </button>
    </a>
    <div class="p-4 flex flex-col gap-2 flex-1">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[11px] uppercase tracking-wide text-fc-green font-semibold">${e.category.replace(/-/g,` `)}</span>
        ${T(e.stockStatus)}
      </div>
      <a href="#/product/${e.slug}" class="font-display font-semibold text-base leading-snug hover:text-fc-green transition-colors">${e.name}</a>
      <p class="text-sm text-fc-slate/80 clamp-2">${e.description}</p>
      <div class="text-xs text-fc-slate/70">${e.specifications[0]?.label}: <strong class="text-fc-charcoal">${e.specifications[0]?.value}</strong></div>
      <div class="mt-auto pt-3 flex items-center justify-between">
        ${C(e)}
      </div>
      <div class="flex gap-2 pt-1">
        <a href="#/product/${e.slug}" class="flex-1 text-center text-sm font-medium border border-fc-line rounded-xl py-2 hover:border-fc-green hover:text-fc-green transition-colors">View Details</a>
        <button data-cart-add="${e.id}" ${e.stockStatus===`Out of Stock`?`disabled`:``} class="flex-1 text-sm font-medium border border-fc-green text-fc-green rounded-xl py-2 hover:bg-fc-greenlight transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent">Add to Cart</button><button data-getcode="${e.id}" ${e.stockStatus===`Out of Stock`?`disabled`:``} class="flex-1 text-sm font-medium bg-fc-green text-white rounded-xl py-2 hover:bg-fc-greendark transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-fc-green">Get a Code</button>
      </div>
      ${t?`<button data-wishlist="${e.id}" class="text-xs font-medium text-fc-slate/60 hover:text-red-600 transition-colors mt-1 text-left">Remove from Favorites</button>`:``}
    </div>
  </article>`}function D(){let e=u.getSession(),t=m.getWishlist().length;return`
  <header id="site-header" class="sticky top-0 z-50 hdr-blur bg-white/80 border-b border-fc-line transition-shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-16 flex items-center justify-between gap-4">
        <a href="#/" class="flex items-center gap-0.5 sm:gap-1 shrink-0 min-w-0">
  <img src="${n.logoMark}" alt="Farm Craft" class="h-9 w-[96px] sm:h-10 sm:w-[112px] rounded-lg bg-white object-contain p-0 shrink-0" />
  <span class="font-display font-bold text-base sm:text-lg tracking-tight leading-none">
    FARM CRAFT
  </span>
</a>

        <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-fc-slate">
          <a href="#/" class="hover:text-fc-green transition-colors">Home</a>
          <a href="#/shop" class="hover:text-fc-green transition-colors">Products</a>
          <a href="#/about" class="hover:text-fc-green transition-colors">About Us</a>
          <a href="#/services" class="hover:text-fc-green transition-colors">Services</a>
          <a href="#/contact" class="hover:text-fc-green transition-colors">Contact</a>
        </nav>

        <form id="header-search" class="hidden md:flex items-center flex-1 max-w-xs bg-fc-offwhite border border-fc-line rounded-full px-3 py-2 focus-within:border-fc-green transition-colors">
          <i data-lucide="search" class="w-4 h-4 text-fc-slate/60 shrink-0"></i>
          <input name="q" type="search" placeholder="Search grain machinery…" class="bg-transparent outline-none text-sm px-2 w-full placeholder:text-fc-slate/50" />
        </form>

        <div class="flex items-center gap-1 sm:gap-2">
          <a href="#/cart" class="relative w-10 h-10 rounded-full hover:bg-fc-greenlight flex items-center justify-center transition-colors" aria-label="Cart"><i data-lucide="shopping-cart" class="w-5 h-5"></i></a>
          <a href="#/wishlist" class="relative w-10 h-10 rounded-full hover:bg-fc-greenlight flex items-center justify-center transition-colors" aria-label="Wishlist">
            <i data-lucide="heart" class="w-5 h-5"></i>
            <span id="wishlist-count-badge" class="absolute -top-0.5 -right-0.5 bg-fc-wheat text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ${t?``:`hidden`}">${t}</span>
          </a>
          <a href="#/${e?`profile`:`login`}" class="hidden sm:flex w-10 h-10 rounded-full hover:bg-fc-greenlight items-center justify-center transition-colors" aria-label="Account">
            <i data-lucide="user" class="w-5 h-5"></i>
          </a>
          <a href="#/shop" class="hidden md:inline-flex ml-1 bg-fc-green text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">
            Explore Products
          </a>
          <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full hover:bg-fc-greenlight flex items-center justify-center" aria-label="Open menu">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>
        </div>
      </div>

      <form id="header-search-mobile" class="md:hidden pb-3 flex items-center bg-fc-offwhite border border-fc-line rounded-full px-3 py-2">
        <i data-lucide="search" class="w-4 h-4 text-fc-slate/60 shrink-0"></i>
        <input name="q" type="search" placeholder="Search grain machinery…" class="bg-transparent outline-none text-sm px-2 w-full placeholder:text-fc-slate/50" />
      </form>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden border-t border-fc-line bg-white">
      <nav class="max-w-7xl mx-auto px-4 py-3 flex flex-col text-sm font-medium text-fc-slate">
        <a href="#/" class="py-2.5 border-b border-fc-line/70">Home</a>
        <a href="#/shop" class="py-2.5 border-b border-fc-line/70">Products</a>
        <a href="#/about" class="py-2.5 border-b border-fc-line/70">About Us</a>
        <a href="#/services" class="py-2.5 border-b border-fc-line/70">Services</a>
        <a href="#/contact" class="py-2.5 border-b border-fc-line/70">Contact</a>
        <a href="#/wishlist" class="py-2.5 border-b border-fc-line/70">Wishlist</a>
        <a href="#/cart" class="py-2.5 border-b border-fc-line/70">Cart</a>
        <a href="#/${e?`profile`:`login`}" class="py-2.5 border-b border-fc-line/70">${e?`My Profile`:`Login`}</a>
        <a href="#/orders" class="py-2.5">My Orders</a>
      </nav>
    </div>
  </header>`}function O(){let e=m.getWishlist().length;return`
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-fc-line grid grid-cols-5 pb-[env(safe-area-inset-bottom)]">
    <a href="#/" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="home" class="w-5 h-5"></i><span class="text-[11px]">Home</span>
    </a>
    <a href="#/shop" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="layout-grid" class="w-5 h-5"></i><span class="text-[11px]">Shop</span>
    </a>
    <a href="#/wishlist" class="relative flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="heart" class="w-5 h-5"></i><span class="text-[11px]">Wishlist</span>
      ${e?`<span class="absolute top-1 right-[calc(50%-18px)] bg-fc-wheat text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">${e}</span>`:``}
    </a>
    <a href="#/orders" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
  <i data-lucide="package" class="w-5 h-5"></i>
  <span class="text-[11px]">Orders</span>
 </a>
    <a href="#/profile" class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-fc-slate">
      <i data-lucide="user" class="w-5 h-5"></i><span class="text-[11px]">Profile</span>
    </a>
  </nav>`}function re(){return`
  <footer class="bg-fc-charcoal text-white/90 mt-24 pb-20 lg:pb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-5 gap-10">
      <div class="col-span-2 lg:col-span-2">
        <div class="flex items-center gap-2.5 mb-4">
          <img src="${n.logoMark}" alt="Farm Craft" class="h-11 w-28 rounded-xl bg-white object-contain p-0.5 shrink-0" />
          <span class="font-display font-bold text-lg">FARM CRAFT</span>
        </div>
        <p class="text-sm text-white/60 max-w-xs leading-relaxed">Agricultural machinery and grain handling equipment engineered for farms, mills and agri-businesses.</p>
        <div class="flex gap-3 mt-5">
          ${[`facebook`,`instagram`,`twitter`,`youtube`].map(e=>`
            <span class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors cursor-default">
              <i data-lucide="${e}" class="w-4 h-4"></i>
            </span>`).join(``)}
        </div>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Quick Links</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          <li><a href="#/" class="hover:text-white transition-colors">Home</a></li>
          <li><a href="#/shop" class="hover:text-white transition-colors">Products</a></li>
          <li><a href="#/services" class="hover:text-white transition-colors">Services</a></li>
          <li><a href="#/about" class="hover:text-white transition-colors">About</a></li>
          <li><a href="#/contact" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Products</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          ${e.slice(0,4).map(e=>`<li><a href="#/shop?category=${e.id}" class="hover:text-white transition-colors">${e.name}</a></li>`).join(``)}
        </ul>
      </div>
      <div>
        <h4 class="font-display font-semibold mb-4 text-sm">Customer</h4>
        <ul class="space-y-2.5 text-sm text-white/60">
          <li><a href="#/profile" class="hover:text-white transition-colors">My Account</a></li>
          <li><a href="#/orders" class="hover:text-white transition-colors">My Orders</a></li>
          <li><a href="#/orders" class="hover:text-white transition-colors">Purchase Codes</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/45">
        <span>© ${new Date().getFullYear()} Farm Craft. Demo storefront — no real transactions.</span>
        <span>GSTIN: ${n.gstin}</span>
      </div>
    </div>
  </footer>`}function k({icon:e=`inbox`,title:t,body:n,actionHref:r,actionLabel:i}){return`
  <div class="flex flex-col items-center justify-center text-center py-20 px-4">
    <div class="w-16 h-16 rounded-2xl bg-fc-greenlight flex items-center justify-center mb-5">
      <i data-lucide="${e}" class="w-7 h-7 text-fc-green"></i>
    </div>
    <h3 class="font-display font-semibold text-lg mb-1.5">${t}</h3>
    <p class="text-sm text-fc-slate/70 max-w-sm mb-6">${n}</p>
    ${r?`<a href="${r}" class="bg-fc-green text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">${i}</a>`:``}
  </div>`}function A(){let e=document.querySelectorAll(`.reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`in`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`in`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}function ie(e){let t=document.getElementById(`mobile-menu-btn`),n=document.getElementById(`mobile-menu`);t&&n&&t.addEventListener(`click`,()=>n.classList.toggle(`hidden`)),[`header-search`,`header-search-mobile`].forEach(e=>{let t=document.getElementById(e);t&&t.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(t).get(`q`);window.location.hash=`#/shop?q=${encodeURIComponent(n||``)}`})})}function ae(){return`
  <div class="min-h-[calc(100vh-64px)] grid lg:grid-cols-2">
    <div class="hidden lg:block relative bg-fc-charcoal">
      <img src="assets/products/collector-field.jpeg" class="absolute inset-0 w-full h-full object-cover opacity-70" alt="Farm Craft machinery in a field" />
      <div class="absolute inset-0 bg-gradient-to-t from-fc-charcoal via-fc-charcoal/30 to-transparent"></div>
      <div class="relative h-full flex flex-col justify-end p-12 text-white">
        <span class="text-xs uppercase tracking-wide text-fc-wheat font-semibold mb-3">Grain Handling, Engineered</span>
        <h2 class="font-display text-3xl font-semibold leading-tight max-w-md">Built for the fields, trusted by farms and mills.</h2>
      </div>
    </div>
    <div class="flex items-center justify-center px-6 py-14 sm:py-20">
      <div class="w-full max-w-sm">
        <img src="${n.logo}" alt="Farm Craft" class="h-24 w-40 rounded-2xl bg-white object-contain p-1 mb-6" />
        <h1 class="font-display text-2xl font-semibold mb-1.5">Welcome to Farm Craft</h1>
        <p class="text-sm text-fc-slate/70 mb-7">Explore powerful agricultural machinery built for efficient grain handling.</p>
        <div id="mobile-step">
          <form id="mobile-form" class="space-y-4" novalidate>
            <div>
              <label for="login-name" class="block text-sm font-medium mb-1.5">Full Name</label>
              <input id="login-name" name="name" type="text" required autocomplete="name" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors" placeholder="Your full name" />
              <p class="text-xs text-red-500 mt-1 hidden" data-error-for="name">Enter your full name.</p>
            </div>
            <div>
              <label for="login-mobile" class="block text-sm font-medium mb-1.5">Mobile Number</label>
              <input id="login-mobile" name="mobile" type="tel" required inputmode="numeric" autocomplete="tel" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors" placeholder="9876543210" />
              <p class="text-xs text-red-500 mt-1 hidden" data-error-for="mobile">Enter a valid 10-digit Indian mobile number.</p>
            </div>
            <button type="submit" class="w-full bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Send OTP</button>
          </form>
        </div>
        <div id="otp-step" class="hidden">
          <form id="otp-form" class="space-y-4" novalidate>
            <div>
              <p class="text-sm text-fc-slate/70 mb-1.5">Enter the 4-digit OTP for</p>
              <p class="text-sm font-semibold mb-4" id="otp-target-mobile"></p>
              <label for="login-otp" class="block text-sm font-medium mb-1.5">OTP</label>
              <input id="login-otp" name="otp" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="4" required autocomplete="one-time-code" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm tracking-[0.5em] text-center font-mono outline-none focus:border-fc-green transition-colors" placeholder="••••" />
              <p class="text-xs text-red-500 mt-1 hidden" data-error-for="otp">Incorrect OTP. Please try again.</p>
            </div>
            <button type="submit" class="w-full bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Verify OTP</button>
            <button type="button" id="change-mobile" class="w-full text-sm font-medium text-fc-slate/70 hover:text-fc-charcoal transition-colors">Change details</button>
          </form>
        </div>
        <div class="mt-7 rounded-2xl border border-fc-wheat/40 bg-amber-50/50 p-4">
          <div class="flex items-center gap-2 mb-2.5"><i data-lucide="sparkles" class="w-4 h-4 text-fc-wheat"></i><span class="text-sm font-semibold">Demo Login</span></div>
          <p class="text-xs text-fc-slate/70 mb-3">Enter your name and Indian mobile number, then use this demo OTP — no real SMS needed.</p>
          <div class="text-xs bg-white rounded-lg border border-fc-line p-3 space-y-1 font-mono"><div>Demo OTP: <strong>1234</strong></div></div>
        </div>
      </div>
    </div>
  </div>`}function oe(e){let t=document.getElementById(`mobile-step`),n=document.getElementById(`otp-step`),r=document.getElementById(`mobile-form`),i=document.getElementById(`otp-form`),a=document.getElementById(`otp-target-mobile`),o=document.getElementById(`login-otp`),s=``,c=``;function l(e){let t=String(e||``).replace(/\D/g,``);return t.startsWith(`91`)&&t.length===12&&(t=t.slice(2)),t}function d(e,r){s=e,c=r,a.textContent=r,t.classList.add(`hidden`),n.classList.remove(`hidden`),i.querySelector(`[data-error-for="otp"]`).classList.add(`hidden`),i.reset(),o.focus()}function f(){s=``,c=``,n.classList.add(`hidden`),t.classList.remove(`hidden`)}document.getElementById(`change-mobile`)?.addEventListener(`click`,f),r?.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(r),n=String(t.get(`name`)||``).trim(),i=l(t.get(`mobile`)),a=r.querySelector(`[data-error-for="name"]`),o=r.querySelector(`[data-error-for="mobile"]`);if(n.length<2){a.classList.remove(`hidden`);return}if(a.classList.add(`hidden`),!/^[6-9]\d{9}$/.test(i)){o.classList.remove(`hidden`);return}o.classList.add(`hidden`);try{await u.sendOtp(i),S(`OTP sent for ${i}`),d(n,i)}catch(e){S(e.message||`Could not send OTP`,{type:`error`})}}),i?.addEventListener(`submit`,async e=>{e.preventDefault();let t=String(new FormData(i).get(`otp`)||``).trim(),n=i.querySelector(`[data-error-for="otp"]`),r=await u.verifyOtp(s,c,t);r.ok?(n.classList.add(`hidden`),S(`Welcome back!`),window.location.hash=`#/`):(n.textContent=r.error,n.classList.remove(`hidden`))})}function se(){let n=f.list().slice(0,8);return`
  <section class="relative overflow-hidden bg-fc-charcoal text-white">
    <div class="absolute inset-0">
      <img src="assets/products/collector-field.jpeg" class="w-full h-full object-cover opacity-40" alt="" />
      <div class="absolute inset-0 bg-gradient-to-r from-fc-charcoal via-fc-charcoal/85 to-fc-charcoal/40"></div>
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fc-wheat mb-5">
          <i data-lucide="leaf" class="w-3.5 h-3.5"></i> Agricultural Machinery
        </span>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] mb-6">
          Powering Smarter<br class="hidden sm:block" /> Grain Handling
        </h1>
        <p class="text-white/70 text-base sm:text-lg max-w-lg mb-9 leading-relaxed">
          Reliable grain transferring, collecting and bagging solutions engineered for farms, mills and agricultural businesses.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#/shop" class="bg-fc-green hover:bg-fc-greendark transition-colors text-white font-medium px-6 py-3 rounded-full">Explore Products</a>
          <a href="#/contact" class="border border-white/25 hover:border-white/60 transition-colors text-white font-medium px-6 py-3 rounded-full">Get in Touch</a>
        </div>
      </div>
      <div class="hidden lg:block reveal">
        <div class="relative rounded-3xl overflow-hidden shadow-soft border border-white/10">
          <img src="assets/products/pipe-studio-1.jpeg" alt="Farm Craft grain transfer machine" class="w-full h-[420px] object-cover" />
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-10">
    <div class="bg-white rounded-2xl shadow-soft border border-fc-line grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-fc-line overflow-hidden">
      ${t.map(e=>`
        <div class="p-5 sm:p-6 flex flex-col items-start gap-2">
          <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center">
            <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
          </div>
          <div class="font-display font-semibold text-lg">${e.value}</div>
          <div class="text-xs text-fc-slate/60 leading-snug">${e.label}</div>
        </div>`).join(``)}
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
    <div class="flex items-end justify-between mb-10">
      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Browse by category</span>
        <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2">What are you looking for?</h2>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      ${e.map(e=>`
        <a href="#/shop?category=${e.id}" class="reveal group relative rounded-2xl overflow-hidden aspect-square border border-fc-line">
          <img src="${e.img}" alt="${e.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-fc-charcoal/85 via-fc-charcoal/10 to-transparent"></div>
          <div class="absolute bottom-0 p-3 sm:p-4">
            <span class="text-white text-sm font-medium leading-tight block">${e.name}</span>
          </div>
        </a>`).join(``)}
    </div>
  </section>

  <section class="bg-fc-greenlight/60 py-20 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-10">
        <div>
          <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Featured</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2">Popular grain machinery</h2>
        </div>
        <a href="#/shop" class="hidden sm:inline-flex text-sm font-medium text-fc-green hover:text-fc-greendark items-center gap-1">
          View all <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${n.length?n.map(e=>E(e)).join(``):f.error?`<div class="col-span-full text-center py-10 text-sm text-fc-slate/60">Could not load products right now. Please refresh the page.</div>`:`<div class="col-span-full text-center py-10 text-sm text-fc-slate/60">No products available yet.</div>`}
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
    <div class="reveal order-2 lg:order-1 rounded-3xl overflow-hidden border border-fc-line shadow-card">
      <img src="assets/products/pipe-mounted-1.jpeg" alt="Farm Craft machine in use" class="w-full h-[380px] object-cover" />
    </div>
    <div class="order-1 lg:order-2">
      <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">About Farm Craft</span>
      <h2 class="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-5">Built for Better Grain Handling</h2>
      <p class="text-fc-slate/75 leading-relaxed mb-7">
        Farm Craft designs agricultural machinery and grain handling equipment for farms, mills and agri-businesses that need
        dependable performance in the field, not just on a spec sheet.
      </p>
      <ul class="space-y-3.5 mb-8">
        ${[`Quality components built for daily use`,`Reliable performance across grain types`,`Efficient handling from field to store`,`Practical solutions sized to your operation`,`Support you can reach when it matters`].map(e=>`<li class="flex items-start gap-3 text-sm text-fc-slate/85">
            <i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}
          </li>`).join(``)}
      </ul>
      <a href="#/about" class="inline-flex items-center gap-2 text-sm font-medium text-fc-green hover:text-fc-greendark">
        Learn more about us <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
    <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 sm:py-16 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
      <div class="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-fc-green/20 blur-2xl"></div>
      <div class="relative">
        <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-3">Want to see our machinery in action?</h2>
        <p class="text-white/65 max-w-md">Visit Farm Craft to see the range up close before you decide.</p>
      </div>
      <div class="relative flex lg:justify-end">
        <a href="#/about" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Visit Our Company</a>
      </div>
    </div>
  </section>`}function ce({q:e=``,category:t=``,availability:n=``}={}){let r=f.search(e,{category:t,availability:n});return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div class="mb-8">
      <h1 class="font-display text-2xl sm:text-3xl font-semibold">Products</h1>
      <p class="text-sm text-fc-slate/60 mt-1">${r.length} result${r.length===1?``:`s`}${e?` for "${e}"`:``}</p>
    </div>

    <div class="flex gap-8">
      <aside class="hidden lg:block w-64 shrink-0">
        ${j({category:t,availability:n})}
      </aside>

      <div class="flex-1 min-w-0">
        <div class="flex lg:hidden items-center gap-3 mb-5">
          <button id="open-filters" class="flex-1 flex items-center justify-center gap-2 border border-fc-line rounded-xl py-2.5 text-sm font-medium">
            <i data-lucide="sliders-horizontal" class="w-4 h-4"></i> Filters
          </button>
        </div>

        <div id="results-grid" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          ${r.length?r.map(e=>E(e)).join(``):``}
        </div>
        ${r.length?``:f.error?k({icon:`wifi-off`,title:`Could not load products`,body:f.error,actionHref:`#/shop`,actionLabel:`Try Again`}):k(e||t||n?{icon:`search-x`,title:`No matching products`,body:`Try a different search term or clear your filters to see the full catalog.`,actionHref:`#/shop`,actionLabel:`Clear filters`}:{icon:`package-open`,title:`No products available`,body:`Check back soon — new products will appear here as soon as they are added.`})}
      </div>
    </div>
  </div>

  <div id="filter-drawer" class="hidden fixed inset-0 z-50 lg:hidden">
    <div class="absolute inset-0 bg-black/40 modal-backdrop" data-close-drawer></div>
    <div class="sheet-enter absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-5 max-h-[80vh] overflow-y-auto thin-scroll">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-semibold text-lg">Filters</h3>
        <button data-close-drawer aria-label="Close filters" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-fc-offwhite">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      ${j({category:t,availability:n})}
    </div>
  </div>`}function j({category:e,availability:t}){let n=[...new Set(f.list().map(e=>e.category).filter(Boolean))].sort();return`
  <form id="filter-form" class="space-y-7">
    <div>
      <h4 class="text-sm font-semibold mb-3">Category</h4>
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="category" value="" class="accent-fc-green" ${e?``:`checked`} /> All categories
        </label>
        ${n.map(t=>`
          <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
            <input type="radio" name="category" value="${t}" class="accent-fc-green" ${e===t?`checked`:``} /> ${t}
          </label>`).join(``)}
      </div>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-3">Availability</h4>
      <div class="space-y-2">
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="" class="accent-fc-green" ${t?``:`checked`} /> Any
        </label>
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="in-stock" class="accent-fc-green" ${t===`in-stock`?`checked`:``} /> In Stock
        </label>
        <label class="flex items-center gap-2 text-sm text-fc-slate/80 cursor-pointer">
          <input type="radio" name="availability" value="low-stock" class="accent-fc-green" ${t===`low-stock`?`checked`:``} /> Low Stock
        </label>
      </div>
    </div>
    <div>
      <h4 class="text-sm font-semibold mb-3">Capacity &amp; Motor</h4>
      <p class="text-xs text-fc-slate/60 leading-relaxed">5 HP – 16 HP motor range · up to 18 tons/hour transfer capacity across the range.</p>
    </div>
    <button type="submit" class="w-full bg-fc-green text-white text-sm font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Apply Filters</button>
  </form>`}function le(e){let t=document.getElementById(`open-filters`),n=document.getElementById(`filter-drawer`);t?.addEventListener(`click`,()=>n.classList.remove(`hidden`)),n?.querySelectorAll(`[data-close-drawer]`).forEach(e=>e.addEventListener(`click`,()=>n.classList.add(`hidden`))),document.querySelectorAll(`#filter-form`).forEach(t=>{t.addEventListener(`submit`,n=>{n.preventDefault();let r=new FormData(t),i=new URLSearchParams;e.q&&i.set(`q`,e.q);let a=r.get(`category`),o=r.get(`availability`);a&&i.set(`category`,a),o&&i.set(`availability`,o),window.location.hash=`#/shop?${i.toString()}`})})}function ue(e){let t=f.bySlug(e);if(!t)return`<div class="max-w-3xl mx-auto px-4 py-24">${k({icon:`package-x`,title:`Product not found`,body:`This product may have been removed or the link is incorrect.`,actionHref:`#/shop`,actionLabel:`Back to Products`})}</div>`;let n=m.getWishlist().includes(t.id);return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <nav class="text-xs text-fc-slate/60 mb-6 flex items-center gap-1.5">
      <a href="#/shop" class="hover:text-fc-green">Products</a> <span>/</span> <span class="text-fc-charcoal">${t.name}</span>
    </nav>

    <div class="grid lg:grid-cols-2 gap-10 mb-16">
      <div>
        <div class="zoom-wrap rounded-2xl overflow-hidden border border-fc-line aspect-[4/3] bg-fc-greenlight mb-3" id="gallery-main">
          ${w(t.images[0],t.name,`w-full h-full object-cover`).replace(`<img `,`<img data-gallery-image `)}
        </div>
        <div class="grid grid-cols-3 gap-3">
          ${t.images.map((e,n)=>`
            <button data-thumb="${e}" class="rounded-xl overflow-hidden border-2 ${n===0?`border-fc-green`:`border-transparent`} aspect-square bg-fc-greenlight">
              ${w(e,`${t.name} view ${n+1}`,`w-full h-full object-cover`)}
            </button>`).join(``)}
        </div>
      </div>

      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">${t.category.replace(/-/g,` `)}</span>
        <h1 class="font-display text-2xl sm:text-3xl font-semibold mt-2 mb-3">${t.name}</h1>
        <div class="flex items-center gap-3 mb-4">
          <div class="flex items-center gap-1 text-fc-wheat">
            ${t.rating?Array.from({length:5}).map((e,n)=>`<i data-lucide="star" class="w-4 h-4 ${n<Math.round(t.rating)?`fill-fc-wheat`:``}"></i>`).join(``):``}
          </div>
          ${t.rating?`<span class="text-sm text-fc-slate/60">${t.rating} (${t.reviews} reviews)</span>`:``}
        </div>
        <p class="text-fc-slate/75 leading-relaxed mb-5">${t.description}</p>

        <div class="flex items-center gap-3 mb-6">
          ${T(t.stockStatus)}
          ${C(t,{size:`font-display text-2xl font-semibold`})}
        </div>

        <div class="flex flex-col sm:flex-row gap-3 mb-3">
          <button data-cart-add="${t.id}" ${t.stockStatus===`Out of Stock`?`disabled`:``} class="flex-1 border border-fc-green text-fc-green font-medium py-3 rounded-xl hover:bg-fc-greenlight transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent">Add to Cart</button>
          <button data-getcode="${t.id}" ${t.stockStatus===`Out of Stock`?`disabled`:``} class="flex-1 bg-fc-green text-white font-medium py-3 rounded-xl hover:bg-fc-greendark transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-fc-green">Get a Code</button>
          <button data-wishlist="${t.id}" aria-pressed="${n}" class="w-12 h-12 shrink-0 self-center sm:self-auto border border-fc-line rounded-xl flex items-center justify-center hover:border-fc-wheat transition-colors">
            <i data-lucide="heart" class="w-5 h-5 ${n?`text-fc-wheat fill-fc-wheat`:``}"></i>
          </button>
        </div>
        ${t.stockStatus===`Out of Stock`?`<p class="text-xs text-red-600 mb-3 -mt-1">This product is currently out of stock and cannot be purchased right now.</p>`:``}
        <div class="mb-6">
          <a href="#/contact" class="block text-center border border-fc-line font-medium py-3 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">Contact Farm Craft</a>
        </div>

        <div class="grid grid-cols-2 gap-3">
          ${t.specifications.slice(0,4).map(e=>`
            <div class="rounded-xl border border-fc-line p-3.5">
              <div class="text-[11px] text-fc-slate/55 uppercase tracking-wide mb-1">${e.label}</div>
              <div class="text-sm font-medium">${e.value}</div>
            </div>`).join(``)}
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-10">
      <div class="lg:col-span-2 space-y-10">
        <section>
          <h2 class="font-display text-xl font-semibold mb-3">Product Overview</h2>
          <p class="text-fc-slate/75 leading-relaxed">${t.description} Designed for consistent, dependable operation across daily agricultural and industrial workloads.</p>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Technical Specifications</h2>
          <div class="grid sm:grid-cols-2 gap-3">
            ${t.specifications.map(e=>`
              <div class="flex items-center justify-between rounded-xl bg-fc-offwhite px-4 py-3 text-sm">
                <span class="text-fc-slate/60">${e.label}</span><span class="font-medium">${e.value}</span>
              </div>`).join(``)}
          </div>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Features</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            ${t.features.map(e=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/80"><i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}</li>`).join(``)}
          </ul>
        </section>
        <section>
          <h2 class="font-display text-xl font-semibold mb-4">Applications</h2>
          <div class="flex flex-wrap gap-2">
            ${t.applications.map(e=>`<span class="text-sm bg-fc-greenlight text-fc-green font-medium px-3.5 py-1.5 rounded-full">${e}</span>`).join(``)}
          </div>
        </section>
      </div>

      <aside>
        <div class="rounded-2xl border border-fc-line p-5 sticky top-24">
          <h3 class="font-display font-semibold mb-3">Need help choosing?</h3>
          <p class="text-sm text-fc-slate/70 mb-4">Talk to Farm Craft about the right configuration for your farm or mill.</p>
          <a href="#/contact" class="block text-center border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">Contact Farm Craft</a>
        </div>
      </aside>
    </div>
  </div>`}function de(){let e=document.querySelector(`#gallery-main img`);document.querySelectorAll(`[data-thumb]`).forEach(t=>{t.addEventListener(`click`,()=>{e.src=t.getAttribute(`data-thumb`),document.querySelectorAll(`[data-thumb]`).forEach(e=>e.classList.remove(`border-fc-green`)),document.querySelectorAll(`[data-thumb]`).forEach(e=>e.classList.add(`border-transparent`)),t.classList.remove(`border-transparent`),t.classList.add(`border-fc-green`)})})}function fe(){let e=m.getWishlist(),t=f.list().filter(t=>e.includes(t.id));return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <h1 class="font-display text-2xl sm:text-3xl font-semibold mb-8">Wishlist</h1>
    ${t.length?`<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">${t.map(e=>E(e,{showRemoveFromFavorites:!0})).join(``)}</div>`:k({icon:`heart`,title:`Your wishlist is empty`,body:`Save products you like and find them here later.`,actionHref:`#/shop`,actionLabel:`Browse Products`})}
  </div>`}function pe(e){let t=e.product.price==null?null:Number(e.product.price),n=e.product.discount_price==null?t:Number(e.product.discount_price),r=t!=null&&e.product.discount_price!=null&&Number(e.product.discount_price)<t,i=n==null?`<span>Price on Request</span>`:r?`<span>₹${n.toLocaleString(`en-IN`)}</span> <span class="line-through text-fc-slate/40">₹${t.toLocaleString(`en-IN`)}</span>`:`<span>₹${n.toLocaleString(`en-IN`)}</span>`;return`<div class="bg-white border border-fc-line rounded-2xl p-4 flex gap-4 items-center">${w(e.product.image||`assets/products/collector-diagram.jpeg`,e.product.name,`w-20 h-20 rounded-xl object-cover`)}<div class="flex-1"><div class="font-semibold">${e.product.name}</div><div class="text-sm text-fc-slate/60 flex items-center gap-2">${i}</div><div class="flex items-center gap-2 mt-2"><button data-cart-dec="${e.id}" class="w-8 h-8 border rounded-lg">−</button><span>${e.quantity}</span><button data-cart-inc="${e.id}" class="w-8 h-8 border rounded-lg">+</button><button data-cart-remove="${e.id}" class="ml-3 text-sm text-red-600">Remove</button></div></div><div class="font-semibold">₹${(n*e.quantity).toLocaleString(`en-IN`)}</div></div>`}var me=[{value:`delivery`,label:`Cash on Delivery`,desc:`Pay in cash when your order is delivered.`},{value:`visit_company`,label:`Visit Company`,desc:`Visit our office to complete the purchase in person.`}];function M(){return me.map((e,t)=>`
    <label class="flex items-start gap-2.5 border border-fc-line rounded-xl px-3.5 py-3 text-sm cursor-pointer has-[:checked]:border-fc-green has-[:checked]:bg-fc-greenlight/40">
      <input type="radio" name="cart-order-method" value="${e.value}" class="mt-0.5" ${t===0?`checked`:``} />
      <span><span class="font-medium block">${e.label}</span><span class="text-xs text-fc-slate/60">${e.desc}</span></span>
    </label>`).join(``)}function N(e){return e?.order_method===`visit_company`?`Visit Company`:e?.payment_method||`Cash on Delivery`}async function P(){if(!u.isLoggedIn())return z(`view your cart`);try{let e=await h.get();return`<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"><h1 class="font-display text-2xl sm:text-3xl font-semibold mb-8">Cart</h1>${e.items.length?`<div class="space-y-4">${e.items.map(pe).join(``)}</div><div class="mt-8 rounded-2xl border border-fc-line bg-white p-5"><h3 class="font-display font-semibold mb-4">Checkout</h3><div class="grid sm:grid-cols-2 gap-3"><input id="cart-line1" class="border rounded-xl px-3 py-2.5 text-sm" placeholder="Delivery address" /><input id="cart-city" class="border rounded-xl px-3 py-2.5 text-sm" placeholder="City" /><input id="cart-state" class="border rounded-xl px-3 py-2.5 text-sm" placeholder="State" /><input id="cart-pincode" class="border rounded-xl px-3 py-2.5 text-sm" placeholder="Pincode" /></div><div class="mt-4"><div class="text-sm font-medium mb-2">Order Method</div><div class="grid sm:grid-cols-2 gap-3">${M()}</div></div><div class="mt-5 flex justify-end items-center gap-6"><div class="font-display text-xl font-semibold">Total ₹${Number(e.total).toLocaleString(`en-IN`)}</div><button id="cart-checkout" class="bg-fc-green text-white px-5 py-3 rounded-xl font-medium">Place Order</button></div></div>`:k({icon:`shopping-cart`,title:`Your cart is empty`,body:`Add products to your cart to continue.`,actionHref:`#/shop`,actionLabel:`Browse Products`})}</div>`}catch{return`<div class="max-w-xl mx-auto px-4 py-24 text-center">Unable to load cart.</div>`}}function F(){document.querySelectorAll(`[data-cart-remove]`).forEach(e=>e.addEventListener(`click`,async()=>{await h.remove(e.dataset.cartRemove),window.location.hash=`#/cart`})),document.querySelectorAll(`[data-cart-inc],[data-cart-dec]`).forEach(e=>e.addEventListener(`click`,async()=>{let t=(await h.get()).items.find(t=>t.id===e.dataset.cartInc||t.id===e.dataset.cartDec);if(!t)return;let n=Math.max(1,t.quantity+(e.dataset.cartInc?1:-1));await h.update(t.id,n),window.location.hash=`#/cart`})),document.getElementById(`cart-checkout`)?.addEventListener(`click`,async()=>{let e={line1:document.getElementById(`cart-line1`)?.value.trim(),city:document.getElementById(`cart-city`)?.value.trim(),state:document.getElementById(`cart-state`)?.value.trim(),pincode:document.getElementById(`cart-pincode`)?.value.trim()};if(!e.line1||!e.city||!e.state||!e.pincode){S(`Please complete the delivery address`,{type:`error`});return}let t=document.querySelector(`input[name="cart-order-method"]:checked`)?.value||`delivery`;try{let n=await g.create({customer:u.getSession(),address:e,orderMethod:t});window.location.hash=`#/success/${n.order_number||n.id}`}catch(e){S(e.message||`Could not create order`,{type:`error`})}})}var I={Pending:`bg-amber-50 text-amber-700`,Confirmed:`bg-blue-50 text-blue-700`,Processing:`bg-indigo-50 text-indigo-700`,Dispatched:`bg-purple-50 text-purple-700`,Delivered:`bg-fc-greenlight text-fc-green`,Cancelled:`bg-red-50 text-red-600`};function L(){if(!u.isLoggedIn())return z(`view your orders`);let e=g.list();return`
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <h1 class="font-display text-2xl sm:text-3xl font-semibold mb-8">My Orders</h1>
    ${e.length?`
      <div class="space-y-4">
        ${e.map(e=>`
          <a href="#/order/${e.order_number||e.id}" class="block bg-white border border-fc-line rounded-2xl p-5 hover:border-fc-green transition-colors">
            <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div>
                <div class="font-display font-semibold">${e.items?.[0]?.product_name||`Order`}</div>
                <div class="text-xs text-fc-slate/55">Order ${e.order_number||e.id} · ${new Date(e.created_at).toLocaleDateString(`en-IN`)}</div>
              </div>
              <span class="text-xs font-medium px-2.5 py-1 rounded-full ${I[e.status]||`bg-gray-100`}">${e.status}</span>
            </div>
            <div class="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-fc-slate/70">
              <span>Code: <strong class="text-fc-charcoal font-mono">${e.purchase_code}</strong></span>
              <span>Qty: ${e.items?.reduce((e,t)=>e+t.quantity,0)||0}</span>
              <span>${N(e)}</span>
              <span>${e.total_amount?`₹`+Number(e.total_amount).toLocaleString(`en-IN`):`Contact for Price`}</span>
            </div>
          </a>`).join(``)}
      </div>`:k({icon:`receipt`,title:`No orders yet`,body:`Once you get a purchase code, your orders will show up here.`,actionHref:`#/shop`,actionLabel:`Browse Products`})}
  </div>`}function R(e){let t=g.byId(e);return t?B(t,{compact:!0}):`<div class="max-w-3xl mx-auto px-4 py-24">${k({icon:`file-question`,title:`Order not found`,body:`We could not find this order.`,actionHref:`#/orders`,actionLabel:`Back to Orders`})}</div>`}function z(e){return`<div class="max-w-3xl mx-auto px-4 py-24">${k({icon:`lock`,title:`Please log in`,body:`Log in to ${e}.`,actionHref:`#/login`,actionLabel:`Go to Login`})}</div>`}function B(e,{compact:t=!1}={}){return`
  <div class="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
    ${t?``:`
      <div class="text-center mb-8">
        <div class="w-16 h-16 rounded-full bg-fc-greenlight flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check" class="w-8 h-8 text-fc-green"></i>
        </div>
        <h1 class="font-display text-2xl font-semibold mb-1.5">Purchase Request Submitted</h1>
        <p class="text-sm text-fc-slate/65">Your Farm Craft purchase request has been successfully submitted.</p>
      </div>`}

    <div class="bg-fc-charcoal text-white rounded-2xl p-6 mb-5 text-center">
      <div class="text-xs uppercase tracking-wide text-white/50 mb-2">Your Farm Craft Purchase Code</div>
      <div class="font-display text-3xl font-bold tracking-wider">${e.purchase_code}</div>
    </div>

    <div class="bg-white border border-fc-line rounded-2xl p-6 mb-5 space-y-4">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Order ID</div><div class="font-medium">${e.order_number||e.id}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Status</div><span class="text-xs font-medium px-2 py-0.5 rounded-full ${I[e.status]||`bg-gray-100`}">${e.status}</span></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Customer</div><div class="font-medium">${e.customer_snapshot?.name||``}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Product</div><div class="font-medium">${e.items?.[0]?.product_name||`Order`}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Quantity</div><div class="font-medium">${e.items?.reduce((e,t)=>e+t.quantity,0)||0}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Order Method</div><div class="font-medium">${N(e)}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Date</div><div class="font-medium">${new Date(e.created_at).toLocaleDateString(`en-IN`)}</div></div>
        <div><div class="text-fc-slate/50 text-xs mb-0.5">Address</div><div class="font-medium">${e.shipping_address?.city||``}, ${e.shipping_address?.state||``}</div></div>
      </div>
      <p class="text-sm text-fc-slate/60 pt-2 border-t border-fc-line">Our team will contact you regarding the order and delivery.</p>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <button id="download-invoice" data-order="${e.order_number||e.id}" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors flex items-center justify-center gap-2">
        <i data-lucide="download" class="w-4 h-4"></i> Download Invoice
      </button>
      <a href="#/order/${e.order_number||e.id}" class="flex-1 text-center border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green hover:text-fc-green transition-colors">View Order</a>
      <a href="#/shop" class="flex-1 text-center bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Continue Shopping</a>
    </div>
  </div>`}function V(){let e=document.getElementById(`download-invoice`);e?.addEventListener(`click`,async t=>{let n=t.currentTarget.getAttribute(`data-order`),r=g.byId(n);if(!r){S(`Order not found`,{type:`error`});return}let i=e.innerHTML;e.disabled=!0,e.innerHTML=`<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Preparing invoice…`,x();try{await te.downloadInvoice(r),S(`Invoice downloaded`)}catch{S(`Could not generate the invoice — please try again`,{type:`error`})}finally{e.disabled=!1,e.innerHTML=i,x()}})}function he(){if(!u.isLoggedIn())return z(`view your profile`);let e=m.getProfile(),t=g.list();return`
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
    <div class="flex items-center gap-4 mb-10">
      <div class="w-16 h-16 rounded-full bg-fc-green text-white flex items-center justify-center font-display text-xl font-semibold shrink-0">
        ${e.name.split(` `).map(e=>e[0]).join(``).slice(0,2)}
      </div>
      <div>
        <h1 class="font-display text-xl sm:text-2xl font-semibold">${e.name}</h1>
        <p class="text-sm text-fc-slate/60">${e.email}</p>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 mb-8">
      <div class="bg-white border border-fc-line rounded-2xl p-5">
        <h3 class="font-display font-semibold mb-4 flex items-center gap-2"><i data-lucide="id-card" class="w-4 h-4 text-fc-green"></i> Personal Information</h3>
        <dl class="space-y-2.5 text-sm">
          <div class="flex justify-between"><dt class="text-fc-slate/55">Name</dt><dd class="font-medium">${e.name}</dd></div>
          <div class="flex justify-between"><dt class="text-fc-slate/55">Email</dt><dd class="font-medium">${e.email}</dd></div>
          <div class="flex justify-between"><dt class="text-fc-slate/55">Mobile</dt><dd class="font-medium">${e.mobile}</dd></div>
        </dl>
      </div>
      <div class="bg-white border border-fc-line rounded-2xl p-5">
        <h3 class="font-display font-semibold mb-4 flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-fc-green"></i> Saved Addresses</h3>
        ${e.addresses.length?`
          <ul class="space-y-3 text-sm">
            ${e.addresses.map(e=>`<li class="border-b border-fc-line/70 pb-2.5 last:border-0 last:pb-0">${e.line1}, ${e.city}, ${e.state} ${e.pincode}</li>`).join(``)}
          </ul>`:`<p class="text-sm text-fc-slate/55">No saved addresses yet — one is saved automatically the first time you get a purchase code.</p>`}
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 mb-8">
      <a href="#/orders" class="bg-white border border-fc-line rounded-2xl p-5 flex items-center justify-between hover:border-fc-green transition-colors">
        <div>
          <h3 class="font-display font-semibold mb-1">Order History</h3>
          <p class="text-sm text-fc-slate/55">${t.length} order${t.length===1?``:`s`}</p>
        </div>
        <i data-lucide="arrow-right" class="w-5 h-5 text-fc-slate/40"></i>
      </a>
      <a href="#/orders" class="bg-white border border-fc-line rounded-2xl p-5 flex items-center justify-between hover:border-fc-green transition-colors">
        <div>
          <h3 class="font-display font-semibold mb-1">Purchase Codes</h3>
          <p class="text-sm text-fc-slate/55">View all generated codes</p>
        </div>
        <i data-lucide="arrow-right" class="w-5 h-5 text-fc-slate/40"></i>
      </a>
    </div>

    <button id="logout-btn" class="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-2">
      <i data-lucide="log-out" class="w-4 h-4"></i> Logout
    </button>
  </div>`}function ge(){document.getElementById(`logout-btn`)?.addEventListener(`click`,()=>{u.logout(),S(`Logged out`),window.location.hash=`#/`})}function _e(){return`
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">About Farm Craft</span>
        <h1 class="font-display text-3xl sm:text-4xl font-semibold mt-2 mb-5">Built for Better Grain Handling</h1>
        <p class="text-fc-slate/75 leading-relaxed mb-4">
          Farm Craft focuses on one thing: agricultural machinery and grain handling solutions that hold up to real, daily
          farm and mill use. Every product is built around practical performance — capacity, motor options and pipe lengths
          sized to fit different operations.
        </p>
        <p class="text-fc-slate/75 leading-relaxed">
          From transferring and collecting to bagging, our range covers the full grain handling chain, engineered for
          efficiency and durability.
        </p>
      </div>
      <div class="rounded-3xl overflow-hidden border border-fc-line shadow-card">
        <img src="assets/products/collector-diagram.jpeg" alt="Farm Craft applications across grain types" class="w-full h-[380px] object-cover" />
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
      ${[[`shield-check`,`Quality`,`Components and builds chosen for daily agricultural use.`],[`gauge`,`Reliability`,`Consistent performance across grain types and conditions.`],[`move-horizontal`,`Efficient Handling`,`From field and truck to store, with less manual effort.`],[`settings-2`,`Practical Solutions`,`Configurations sized to your farm, mill or business.`],[`headphones`,`Customer Support`,`Our team is reachable when you need guidance.`]].map(([e,t,n])=>`
        <div class="bg-white border border-fc-line rounded-2xl p-5">
          <div class="w-10 h-10 rounded-lg bg-fc-greenlight flex items-center justify-center mb-3">
            <i data-lucide="${e}" class="w-5 h-5 text-fc-green"></i>
          </div>
          <h3 class="font-display font-semibold mb-1.5">${t}</h3>
          <p class="text-sm text-fc-slate/65 leading-relaxed">${n}</p>
        </div>`).join(``)}
    </div>

    <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="font-display text-2xl font-semibold mb-3">Want to see our machinery in action?</h2>
        <p class="text-white/65 max-w-md mb-1">Prefer to visit us? Our team is happy to walk you through the range in person.</p>
        <p class="text-xs text-white/40 mt-4">${n.addressNote}</p>
        <p class="text-sm text-white/70 mt-1">${n.address}</p>
      </div>
      <div class="flex lg:justify-end">
        <a href="#/contact" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Visit Our Company</a>
      </div>
    </div>
  </div>`}function ve(){return`
  <div class="pb-4">
    <section class="relative overflow-hidden bg-fc-charcoal text-white">
      <div class="absolute inset-0">
        ${w(`assets/products/pipe-frame.jpeg`,`Farm Craft machinery service`,`w-full h-full object-cover opacity-35`)}
        <div class="absolute inset-0 bg-gradient-to-r from-fc-charcoal via-fc-charcoal/85 to-fc-charcoal/50"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fc-wheat mb-4">
          <i data-lucide="wrench" class="w-3.5 h-3.5"></i> What We Offer
        </span>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl mb-4">Services built around your grain handling operation</h1>
        <p class="text-white/70 max-w-xl leading-relaxed">From choosing the right configuration to on-site setup and after-sales support, Farm Craft stays involved well beyond the purchase.</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-10 mb-4">
      <div class="bg-white rounded-2xl shadow-soft border border-fc-line grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-fc-line overflow-hidden">
        ${r.map(e=>`
          <a href="#service-${e.id}" class="p-4 sm:p-5 flex flex-col items-center text-center gap-2 hover:bg-fc-greenlight/40 transition-colors">
            <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center">
              <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
            </div>
            <span class="text-xs font-medium leading-snug">${e.title}</span>
          </a>`).join(``)}
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">
      ${r.map((e,t)=>ye(e,t)).join(``)}
    </div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="rounded-3xl bg-fc-charcoal text-white px-6 sm:px-14 py-14 grid lg:grid-cols-2 gap-8 items-center overflow-hidden relative">
        <div class="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-fc-green/20 blur-2xl"></div>
        <div class="relative">
          <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-3">Not sure which service you need?</h2>
          <p class="text-white/65 max-w-md">Tell our team about your farm, mill or store and we'll point you to the right products and services.</p>
        </div>
        <div class="relative flex flex-wrap gap-3 lg:justify-end">
          <a href="#/contact" class="bg-fc-wheat hover:brightness-95 transition-all text-fc-charcoal font-semibold px-6 py-3 rounded-full">Contact Farm Craft</a>
          <a href="#/shop" class="border border-white/25 hover:border-white/60 transition-colors text-white font-medium px-6 py-3 rounded-full">Browse Products</a>
        </div>
      </div>
    </section>
  </div>`}function ye(e,t){let n=t%2==1;return`
  <section id="service-${e.id}" class="reveal grid lg:grid-cols-2 gap-10 items-center scroll-mt-24">
    <div class="rounded-3xl overflow-hidden border border-fc-line shadow-card aspect-[4/3] bg-fc-greenlight ${n?`lg:order-2`:``}">
      ${w(e.image,e.title,`w-full h-full object-cover`)}
    </div>
    <div class="${n?`lg:order-1`:``}">
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-9 h-9 rounded-lg bg-fc-greenlight flex items-center justify-center shrink-0">
          <i data-lucide="${e.icon}" class="w-4.5 h-4.5 text-fc-green"></i>
        </div>
        <span class="text-xs uppercase tracking-wide text-fc-green font-semibold">Farm Craft Service</span>
      </div>
      <h2 class="font-display text-2xl sm:text-3xl font-semibold mb-2.5">${e.title}</h2>
      <p class="text-sm text-fc-wheat font-medium mb-4">${e.tagline}</p>
      <p class="text-fc-slate/75 leading-relaxed mb-6">${e.description}</p>

      <div class="grid sm:grid-cols-2 gap-6 mb-7">
        <div>
          <h3 class="text-xs uppercase tracking-wide font-semibold text-fc-slate/60 mb-3">Key Benefits</h3>
          <ul class="space-y-2.5">
            ${e.benefits.map(e=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/85">
              <i data-lucide="check" class="w-4 h-4 text-fc-green mt-0.5 shrink-0"></i>${e}
            </li>`).join(``)}
          </ul>
        </div>
        <div>
          <h3 class="text-xs uppercase tracking-wide font-semibold text-fc-slate/60 mb-3">How It Works</h3>
          <ol class="space-y-2.5">
            ${e.process.map((e,t)=>`<li class="flex items-start gap-2.5 text-sm text-fc-slate/85">
              <span class="w-5 h-5 rounded-full bg-fc-greenlight text-fc-green text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">${t+1}</span>${e}
            </li>`).join(``)}
          </ol>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <a href="#/shop?category=${e.categoryId}" class="bg-fc-green text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-fc-greendark transition-colors">Explore Related Products</a>
        <a href="#/contact" class="border border-fc-line text-sm font-medium px-5 py-2.5 rounded-full hover:border-fc-green hover:text-fc-green transition-colors">Contact for This Service</a>
      </div>
    </div>
  </section>`}function be(){return`
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
    <div class="text-center max-w-xl mx-auto mb-12">
      <h1 class="font-display text-3xl font-semibold mb-3">Get in Touch</h1>
      <p class="text-fc-slate/70">Questions about a product or configuration? Send an enquiry and our team will reach out.</p>
    </div>

    <div class="grid lg:grid-cols-5 gap-10">
      <form id="contact-form" class="lg:col-span-3 bg-white border border-fc-line rounded-2xl p-6 space-y-4" novalidate>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1.5" for="c-name">Name</label>
            <input id="c-name" name="name" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1.5" for="c-mobile">Mobile</label>
            <input id="c-mobile" name="mobile" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5" for="c-email">Email</label>
          <input id="c-email" name="email" type="email" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1.5" for="c-message">Message</label>
          <textarea id="c-message" name="message" rows="4" required class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green resize-none"></textarea>
        </div>
        <button type="submit" class="bg-fc-green text-white font-medium px-6 py-2.5 rounded-xl hover:bg-fc-greendark transition-colors">Send Enquiry</button>
      </form>

      <div class="lg:col-span-2 space-y-4">
        <div class="bg-fc-charcoal text-white rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-4">
            <img src="${n.logo}" class="h-8 w-24 rounded bg-white object-contain p-0.5" alt="Farm Craft" />
            <span class="font-display font-semibold">FARM CRAFT</span>
          </div>
          <div class="space-y-3 text-sm text-white/75">
            <div class="flex items-start gap-2.5"><i data-lucide="user-round" class="w-4 h-4 mt-0.5 shrink-0"></i><span><strong class="text-white">${n.adminName}</strong><br><span class="text-white/60">Administrator</span></span></div>
            <div class="flex items-start gap-2.5"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i><a class="hover:text-fc-wheat" href="mailto:${n.adminEmail}">${n.adminEmail}</a></div>
            <div class="flex items-start gap-2.5"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${[n.adminMobile,...n.adminMobileNumbers||[]].filter(Boolean).join(` / `)}</span></div>
            <div class="flex items-start gap-2.5"><i data-lucide="building-2" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${n.name}</span></div>
            <div class="flex items-start gap-2.5"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i><a class="hover:text-fc-wheat" href="mailto:${n.email}">${n.email}</a></div>
            <div class="flex items-start gap-2.5"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${[n.phone,...n.mobileNumbers||[]].filter(Boolean).join(` / `)}</span></div>
            <div class="flex items-start gap-2.5"><i data-lucide="map-pin" class="w-4 h-4 mt-0.5 shrink-0"></i>${n.address}</div>
          </div>
          <p class="text-xs text-white/40 mt-4 pt-4 border-t border-white/10">${n.addressNote} · GSTIN ${n.gstin}</p>
        </div>
        <div class="border border-fc-line rounded-2xl p-6">
          <div class="text-xs text-fc-slate/55 mb-1">GSTIN</div>
          <div class="font-mono font-medium">${n.gstin}</div>
        </div>
      </div>
    </div>
  </div>`}function xe(){let e=document.getElementById(`contact-form`);e?.addEventListener(`submit`,t=>{t.preventDefault(),e.reset(),S(`Your enquiry has been sent — we’ll be in touch shortly.`)})}var H=null;function Se(e){let t=u.getSession(),n=m.getAddresses()[0]||{};return{product:e,step:1,customer:{name:t?.name||``,email:t?.email||``,mobile:t?.mobile||``},address:{line1:n.line1||``,city:n.city||``,state:n.state||``,pincode:n.pincode||``},quantity:1,configuration:e.specifications?.[0]?`${e.specifications[0].label}: ${e.specifications[0].value}`:``,orderMethod:`delivery`}}function Ce(e){if(!u.isLoggedIn()){S(`Please log in to get a purchase code`,{type:`error`}),window.location.hash=`#/login`;return}let t=f.list().find(t=>t.id===e);if(t){if(!t.stock||t.stock<=0){S(`This product is currently out of stock`,{type:`error`});return}H=Se(t),W()}}function U(){let e=document.getElementById(`getcode-modal-root`);e&&e.remove(),H=null}function we(e){return[`Customer Details`,`Delivery Address`,`Product`,`Order Method`][e-1]}function Te(){return`
  <div class="flex items-center gap-2 mb-6">
    ${[1,2,3,4].map(e=>`
      <div class="flex-1 flex items-center gap-2">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${e<H.step||e===H.step?`bg-fc-green text-white`:`bg-fc-offwhite text-fc-slate/50 border border-fc-line`}">${e<H.step?`<i data-lucide="check" class="w-3.5 h-3.5"></i>`:e}</div>
        ${e<4?`<div class="h-0.5 flex-1 ${e<H.step?`bg-fc-green`:`bg-fc-line`}"></div>`:``}
      </div>`).join(``)}
  </div>
  <p class="text-xs uppercase tracking-wide text-fc-green font-semibold mb-4">Step ${H.step} of 4 &middot; ${we(H.step)}</p>`}function Ee(){let e=H.customer;return`
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Name</label>
      <input data-field="name" value="${e.name}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Email <span class="text-fc-slate/45 font-normal">(Optional)</span></label>
      <input data-field="email" type="email" value="${e.email}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Mobile Number</label>
      <input data-field="mobile" value="${e.mobile}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`}function De(){let e=H.address;return`
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Address</label>
      <textarea data-field="line1" rows="2" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green resize-none">${e.line1}</textarea>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1.5">City</label>
        <input data-field="city" value="${e.city}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1.5">State</label>
        <input data-field="state" value="${e.state}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Pincode</label>
      <input data-field="pincode" value="${e.pincode}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`}function Oe(){let e=H.product,t=(e.discountPrice==null?Number(e.price||0):Number(e.discountPrice))*H.quantity;return`
  <div class="flex gap-4 mb-5">
    ${w(e.images[0],e.name,`w-20 h-20 rounded-xl object-cover border border-fc-line shrink-0`)}
    <div>
      <div class="font-display font-semibold">${e.name}</div>
      <div class="text-xs text-fc-slate/50 mt-0.5">SKU: ${e.sku}</div>
      <div class="text-sm text-fc-slate/60 mt-1">${C(e,{size:`text-fc-slate/80 font-medium`})}</div>${(()=>{let t=b.forProduct(e.name);return t?`<div class="mt-2 rounded-lg bg-fc-greenlight/60 border border-fc-green/20 px-3 py-2"><div class="text-xs font-semibold text-fc-green">SPECIAL OFFER — ${t.discount}</div><div class="text-[11px] text-fc-slate/60 mt-0.5">${t.title}${t.code?` · Code: ${t.code}`:``}</div></div>`:``})()}
      <div class="text-xs mt-1 ${e.stock>0?`text-fc-green`:`text-red-600`}">${e.stock>0?`${e.stock} in stock`:`Out of stock`}</div>
    </div>
  </div>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Quantity</label>
      <div class="flex items-center gap-3">
        <button data-qty="dec" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">−</button>
        <span class="w-8 text-center font-medium" id="qty-value">${H.quantity}</span>
        <button data-qty="inc" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">+</button>
        <span class="text-xs text-fc-slate/50">Max ${e.stock} available</span>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Selected Configuration</label>
      <select data-field="configuration" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green">
        ${e.specifications.map(e=>`<option value="${e.label}: ${e.value}" ${H.configuration===`${e.label}: ${e.value}`?`selected`:``}>${e.label}: ${e.value}</option>`).join(``)}
      </select>
    </div>
    <div class="flex items-center justify-between rounded-xl bg-fc-offwhite px-4 py-3 text-sm">
      <span class="text-fc-slate/60">Total Amount</span>
      <span class="font-display font-semibold text-base" data-total-amount>₹${t.toLocaleString(`en-IN`)}</span>
    </div>
  </div>`}var ke=[{value:`delivery`,icon:`banknote`,title:`Cash on Delivery`,desc:`Pay in cash when your order is delivered.`},{value:`visit_company`,icon:`building-2`,title:`Visit Company`,desc:`Visit our office to complete the purchase and payment in person.`}];function Ae(){return`
  <div class="space-y-3">
    ${ke.map(e=>`
    <button type="button" data-order-method="${e.value}" class="w-full flex items-center gap-4 border-2 rounded-xl p-4 text-left transition-colors ${H.orderMethod===e.value?`border-fc-green bg-fc-greenlight/50`:`border-fc-line hover:border-fc-green/50`}">
      <div class="w-10 h-10 rounded-lg bg-white border border-fc-line flex items-center justify-center shrink-0">
        <i data-lucide="${e.icon}" class="w-5 h-5 text-fc-green"></i>
      </div>
      <div class="flex-1">
        <div class="font-medium text-sm">${e.title}</div>
        <div class="text-xs text-fc-slate/60">${e.desc}</div>
      </div>
      <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${H.orderMethod===e.value?`border-fc-green bg-fc-green`:`border-fc-line`}">
        ${H.orderMethod===e.value?`<div class="w-2 h-2 rounded-full bg-white"></div>`:``}
      </div>
    </button>`).join(``)}
    <p class="text-xs text-fc-slate/55 px-1">Choose Cash on Delivery to pay when your order arrives, or Visit Company to complete the purchase in person.</p>
  </div>`}function je(){return H.step===4?`
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="confirm" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Confirm Purchase</button>`:`
    ${H.step>1?`<button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>`:`<div class="flex-1"></div>`}
    <button data-action="next" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Continue</button>`}function W(){let e=document.getElementById(`getcode-modal-root`);e||(e=document.createElement(`div`),e.id=`getcode-modal-root`,document.body.appendChild(e));let t=H.step===1?Ee():H.step===2?De():H.step===3?Oe():Ae();e.innerHTML=`
  <div class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
    <div class="absolute inset-0 bg-black/50 modal-backdrop" data-close></div>
    <div class="modal-panel relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[92vh] overflow-y-auto thin-scroll">
      <div class="sticky top-0 bg-white border-b border-fc-line px-6 pt-5 pb-4 flex items-center justify-between">
        <h2 class="font-display font-semibold text-lg">Get Your Farm Craft Purchase Code</h2>
        <button data-close aria-label="Close" class="w-8 h-8 rounded-full hover:bg-fc-offwhite flex items-center justify-center">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="px-6 pt-5">
        ${Te()}
        ${t}
      </div>
      <div class="px-6 py-5 flex gap-3 mt-2">
        ${je()}
      </div>
    </div>
  </div>`,x(),Pe(e)}function Me(e){e.querySelectorAll(`[data-field]`).forEach(e=>{let t=e.getAttribute(`data-field`);H.step===1&&(H.customer[t]=e.value),H.step===2&&(H.address[t]=e.value),H.step===3&&t===`configuration`&&(H.configuration=e.value)})}function Ne(){if(H.step===1){let{name:e,email:t,mobile:n}=H.customer;if(!e.trim()||!n.trim()||t.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim()))return S(`Please enter your name and valid mobile number. Email is optional.`,{type:`error`}),!1}if(H.step===2){let{line1:e,city:t,state:n,pincode:r}=H.address;if(!e.trim()||!t.trim()||!n.trim()||!r.trim())return S(`Please complete the delivery address`,{type:`error`}),!1}return!0}function Pe(e){e.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,U)),e.querySelectorAll(`[data-order-method]`).forEach(e=>{e.addEventListener(`click`,()=>{H.orderMethod=e.getAttribute(`data-order-method`),W()})}),e.querySelectorAll(`[data-qty]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-qty`),r=H.product.stock||0,i=H.quantity+(n===`inc`?1:-1);if(n===`inc`&&i>r){S(`Only ${r} in stock`,{type:`error`});return}H.quantity=Math.max(1,Math.min(i,r)),e.querySelector(`#qty-value`).textContent=H.quantity;let a=(H.product.discountPrice==null?Number(H.product.price||0):Number(H.product.discountPrice))*H.quantity,o=e.querySelector(`[data-total-amount]`);o&&(o.textContent=`₹${a.toLocaleString(`en-IN`)}`)})}),e.querySelector(`[data-action="back"]`)?.addEventListener(`click`,()=>{H.step=Math.max(1,H.step-1),W()}),e.querySelector(`[data-action="next"]`)?.addEventListener(`click`,()=>{Me(e.querySelector(`.modal-panel`)),Ne()&&(H.step=Math.min(4,H.step+1),W())}),e.querySelector(`[data-action="confirm"]`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;if(t.disabled)return;if(H.quantity<1){S(`Please select a valid quantity`,{type:`error`});return}if(H.quantity>(H.product.stock||0)){S(`Requested quantity exceeds available stock`,{type:`error`});return}let n=t.textContent;t.disabled=!0,t.textContent=`Placing order…`,m.saveAddress(H.address);try{await h.clear(),await h.add(H.product.id,H.quantity);let e=await g.create({customer:H.customer,address:H.address,configuration:H.configuration,orderMethod:H.orderMethod});U(),S(`Purchase order created!`),window.location.hash=`#/success/${e.order_number||e.id}`}catch(e){S(e.message||`Could not create order`,{type:`error`}),t.disabled=!1,t.textContent=n}})}var G=[],K=!1,q=!1;function J(e){let t=encodeURIComponent(e||`Hi Farm Craft, I have a question about your products.`);return`https://wa.me/${n.whatsapp}?text=${t}`}var Fe=[{label:`Our products`,query:`What products do you sell?`},{label:`Track my order`,query:`How do I track my order?`},{label:`Delivery info`,query:`How does delivery work?`},{label:`Payment options`,query:`What payment methods do you accept?`},{label:`Returns & support`,query:`What is your return policy?`}],Ie=[{keywords:[`product`,`catalog`,`machine`,`machinery`,`what do you sell`,`range`,`sell`,`grain`],reply:`Farm Craft's range covers the full grain handling chain: Grain Transferring pipes &amp; motor heads, Grain Collecting machines, Grain Bagging attachments, Grain Handling systems, Agricultural Machinery and Pipes &amp; Accessories. Open the <a href="#/shop" class="text-fc-green underline font-medium">Products</a> page to browse by category, or the <a href="#/services" class="text-fc-green underline font-medium">Services</a> page to see how we help you configure the right setup.`},{keywords:[`order`,`purchase code`,`my order`,`track`,`status`,`where is my`],reply:`You can see every order and its purchase code under <a href="#/orders" class="text-fc-green underline font-medium">My Orders</a> (login required). Each order shows its status, quantity, payment method and a downloadable invoice.`},{keywords:[`deliver`,`delivery`,`shipping`,`how long`,`dispatch`,`arrive`],reply:`After you get a purchase code, our team confirms delivery details directly with you based on your address and the product's configuration. You can track the order status any time under My Orders.`},{keywords:[`pay`,`payment`,`cod`,`cash`,`online payment`,`upi`,`card`,`visit`],reply:`You can choose Cash on Delivery (pay in cash when your order is delivered) or Visit Company (complete the purchase in person at our office) in the last step of the "Get a Code" flow. We don't currently support online/card payments.`},{keywords:[`return`,`refund`,`warranty`,`replace`,`exchange`,`cancel`],reply:`For returns, replacements or warranty questions, please share your purchase code or order ID with our team on WhatsApp or by phone — we'll sort out next steps directly with you.`},{keywords:[`wishlist`,`favorite`,`favourite`,`heart`,`save product`,`saved`],reply:`Tap the heart icon on any product to save it — it'll show up on your <a href="#/wishlist" class="text-fc-green underline font-medium">Wishlist</a> page and stays saved as you browse.`},{keywords:[`invoice`,`bill`,`receipt`,`download invoice`],reply:`Every order has a downloadable invoice with our logo, your order details and totals — find the "Download Invoice" button on the order success page or any order's detail page under My Orders.`},{keywords:[`service`,`installation`,`setup`,`configure`,`configuration`,`maintenance`,`support`,`after sales`],reply:`Our <a href="#/services" class="text-fc-green underline font-medium">Services</a> page covers installation guidance, custom machinery configuration and after-sales support — take a look, or message us on WhatsApp with your requirement.`},{keywords:[`price`,`cost`,`how much`,`quote`],reply:`Pricing depends on configuration (motor size, pipe length, etc.), so many listings show "Contact for Price." Start the "Get a Code" flow on a product, or message us on WhatsApp for a quick quote.`},{keywords:[`contact`,`call`,`phone`,`email`,`human`,`agent`,`talk to someone`,`representative`],reply:()=>`You can reach Farm Craft at ${n.phone} or ${n.email}, or use the WhatsApp button below for the fastest response. Our <a href="#/contact" class="text-fc-green underline font-medium">Contact</a> page also has an enquiry form.`},{keywords:[`login`,`log in`,`sign in`,`account`,`demo credential`],reply:`Use the demo credentials shown on the <a href="#/login" class="text-fc-green underline font-medium">Login</a> page, or tap "Login as Customer" to jump straight in — no real account needed for this demo storefront.`},{keywords:[`hi`,`hello`,`hey`,`good morning`,`good evening`],reply:`Hello! I'm the Farm Craft Copilot. I can help with products, orders, delivery, payments, returns and more — what would you like to know?`},{keywords:[`thank`,`thanks`,`thank you`],reply:`You're welcome! Anything else I can help with?`}],Le=`I don't have a ready answer for that yet, but our team can help directly — tap "Chat on WhatsApp" below, or visit the <a href="#/contact" class="text-fc-green underline font-medium">Contact</a> page.`;function Re(e){let t=e.toLowerCase();for(let e of Ie)if(e.keywords.some(e=>t.includes(e)))return typeof e.reply==`function`?e.reply():e.reply;return Le}function ze(e){let t=e.role===`user`;return`
  <div class="flex ${t?`justify-end`:`justify-start`}">
    <div class="max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${t?`bg-fc-green text-white rounded-br-md`:`bg-fc-offwhite text-fc-charcoal rounded-bl-md border border-fc-line`}">${e.text}</div>
  </div>`}function Be(){return`
  <div class="flex justify-start" id="help-typing">
    <div class="bg-fc-offwhite border border-fc-line rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
      <span class="help-dot"></span><span class="help-dot"></span><span class="help-dot"></span>
    </div>
  </div>`}function Ve(){return`
  <div id="help-panel" class="fixed z-[90] bg-white shadow-soft border border-fc-line flex flex-col
    inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[560px] sm:rounded-3xl help-panel-enter overflow-hidden">
    <div class="shrink-0 bg-fc-charcoal text-white px-5 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-fc-green flex items-center justify-center shrink-0">
          <i data-lucide="sparkles" class="w-4.5 h-4.5"></i>
        </div>
        <div>
          <div class="font-display font-semibold text-sm leading-tight">Farm Craft Copilot</div>
          <div class="text-[11px] text-white/55 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-fc-green inline-block"></span>Instant answers, frontend demo</div>
        </div>
      </div>
      <button id="help-close" aria-label="Close help" class="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center shrink-0">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div id="help-messages" class="flex-1 overflow-y-auto thin-scroll px-4 py-4 space-y-3 bg-fc-paper">
      ${G.map(ze).join(``)}
      ${q?Be():``}
    </div>

    <div class="shrink-0 border-t border-fc-line px-4 py-3 bg-white">
      <div class="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1 thin-scroll">
        ${Fe.map(e=>`<button data-quick="${e.query.replace(/"/g,`&quot;`)}" class="shrink-0 text-xs font-medium border border-fc-line rounded-full px-3 py-1.5 hover:border-fc-green hover:text-fc-green transition-colors whitespace-nowrap">${e.label}</button>`).join(``)}
      </div>
      <form id="help-form" class="flex items-center gap-2 mb-2.5">
        <input id="help-input" type="text" placeholder="Ask about products, orders, delivery…"
          class="flex-1 bg-fc-offwhite border border-fc-line rounded-full px-4 py-2.5 text-sm outline-none focus:border-fc-green transition-colors" autocomplete="off" />
        <button type="submit" aria-label="Send" class="w-10 h-10 shrink-0 rounded-full bg-fc-green text-white flex items-center justify-center hover:bg-fc-greendark transition-colors">
          <i data-lucide="send" class="w-4 h-4"></i>
        </button>
      </form>
      <a href="${J()}" target="_blank" rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 w-full text-sm font-medium py-2.5 rounded-xl text-white transition-colors" style="background:#25D366;">
        <i data-lucide="message-circle" class="w-4 h-4"></i> Chat on WhatsApp
      </a>
    </div>
  </div>`}function He(){return`
  <a id="help-fab" href="${J()}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
    class="fixed z-[90] right-5 bottom-24 lg:bottom-6 w-14 h-14 rounded-full text-white shadow-soft flex items-center justify-center hover:scale-105 transition-transform help-fab-pulse"
    style="background:#25D366;">
    <i data-lucide="message-circle" class="w-7 h-7"></i>
  </a>`}function Ue(){window.lucide&&window.lucide.createIcons()}function We(){let e=document.getElementById(`help-messages`);e&&(e.scrollTop=e.scrollHeight)}function Y(){let e=document.getElementById(`help-widget-root`);e&&(e.innerHTML=`${K?Ve():``}${He()}`,Ue(),Ke(e),K&&We())}function X(e){let t=e.trim();if(!t)return;G.push({role:`user`,text:Ge(t)}),q=!0,Y();let n=500+Math.random()*400;setTimeout(()=>{q=!1,G.push({role:`assistant`,text:Re(t)}),Y()},n)}function Ge(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function Ke(e){e.querySelector(`#help-fab`)?.addEventListener(`click`,()=>{K=!0,Y()}),e.querySelector(`#help-close`)?.addEventListener(`click`,()=>{K=!1,Y()}),e.querySelectorAll(`[data-quick]`).forEach(e=>{e.addEventListener(`click`,()=>X(e.getAttribute(`data-quick`)))});let t=e.querySelector(`#help-form`),n=e.querySelector(`#help-input`);t?.addEventListener(`submit`,e=>{e.preventDefault(),n.value.trim()&&(X(n.value),n.value=``)}),e.querySelectorAll(`#help-messages a[href^="#/"]`).forEach(e=>{e.addEventListener(`click`,()=>{K=!1,Y()})})}function Z(){if(document.getElementById(`help-widget-root`))return;let e=document.createElement(`div`);e.id=`help-widget-root`,document.body.appendChild(e),G=[{role:`assistant`,text:`Hi! I'm the Farm Craft Copilot 👋 Ask me about products, orders, delivery, payments or returns — or use the quick options below.`}],Y()}var Q=document.getElementById(`app`);function qe(){let[e,t]=(window.location.hash.replace(/^#/,``)||`/`).split(`?`),n=Object.fromEntries(new URLSearchParams(t||``));return{path:e.replace(/\/$/,``)||`/`,params:n}}var Je=new Set([`/login`]);function Ye(e,{chrome:t=!0}={}){return t?`${D()}<main class="min-h-[60vh]">${e}</main>${re()}${O()}`:e}async function $({resetScroll:e=!0}={}){let{path:t,params:n}=qe();if(await p.load(),await b.load(),(t===`/shop`||t.startsWith(`/product/`))&&(await f.load(),f.error&&console.error(`Product API unavailable:`,f.error)),t===`/`||t===`/shop`||t.startsWith(`/product/`)||t===`/cart`||t===`/orders`||t.startsWith(`/order/`)||t.startsWith(`/success/`))try{await g.load()}catch(e){console.error(`Order API unavailable`,e)}e&&window.scrollTo({top:0,behavior:`instant`in document.documentElement.style?`instant`:`auto`});let r=``,i=null,a=!Je.has(t);if(t===`/login`)r=ae(),i=()=>oe($);else if(t===`/`)r=se(),i=()=>A();else if(t===`/shop`)r=ce(n),i=()=>le(n);else if(t.startsWith(`/product/`))r=ue(t.replace(`/product/`,``)),i=()=>de();else if(t===`/cart`)r=await P(),i=()=>F();else if(t===`/wishlist`)r=fe();else if(t===`/orders`)r=L(),i=()=>V();else if(t.startsWith(`/order/`))r=R(t.replace(`/order/`,``)),i=()=>V();else if(t.startsWith(`/success/`)){let e=t.replace(`/success/`,``),n=g.byId(e);r=n?B(n):`<div class="max-w-xl mx-auto px-4 py-24 text-center">Order not found.</div>`,i=()=>V()}else t===`/profile`?(r=he(),i=()=>ge()):t===`/about`?r=_e():t===`/services`?(r=ve(),i=()=>A()):t===`/contact`?(r=be(),i=()=>xe()):r=`<div class="max-w-xl mx-auto px-4 py-32 text-center">
      <h1 class="font-display text-2xl font-semibold mb-2">Page not found</h1>
      <a href="#/" class="text-fc-green font-medium">Back to Home</a>
    </div>`;Q.innerHTML=Ye(r,{chrome:a}),x(),a&&ie($),i&&i(),Xe()}function Xe(){Q.querySelectorAll(`[data-cart-add]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-cart-add`),r=f.list().find(e=>e.id===n);if(r&&r.price==null){S(`This product is currently available for enquiry. Please contact the company for pricing.`,{type:`error`});return}if(!u.isLoggedIn()){S(`Please log in to add items to your cart`,{type:`error`}),window.location.hash=`#/login`;return}try{await h.add(e.getAttribute(`data-cart-add`),1),S(`Added to cart`)}catch(e){e.status===401?(S(`Your session has expired. Please log in again.`,{type:`error`}),window.location.hash=`#/login`):S(e.message||`Could not add to cart`,{type:`error`})}})}),Q.querySelectorAll(`[data-getcode]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),Ce(e.getAttribute(`data-getcode`))})}),Q.querySelectorAll(`[data-wishlist]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-wishlist`);S(m.toggleWishlist(n).includes(n)?`Added to wishlist`:`Removed from wishlist`),$({resetScroll:!1})})})}window.addEventListener(`hashchange`,()=>$()),window.addEventListener(`DOMContentLoaded`,()=>$()),$(),Z();