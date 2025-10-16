var map_3a4670564931cbf3dcff8c66617088f5 = L.map(
  "map_3a4670564931cbf3dcff8c66617088f5",
  {
    center: [19.08132367649682, 72.90117466812102],
    crs: L.CRS.EPSG3857,
    ...{
      zoom: 10,
      zoomControl: false,
      preferCanvas: false,
    },
  }
);

var tile_layer_867e2e2337014a61d6b01429e9f7dd50 = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    minZoom: 0,
    maxZoom: 19,
    maxNativeZoom: 19,
    noWrap: false,
    subdomains: "abc",
    detectRetina: false,
    tms: false,
    opacity: 1,
  }
);

tile_layer_867e2e2337014a61d6b01429e9f7dd50.addTo(
  map_3a4670564931cbf3dcff8c66617088f5
);

var marker_0ecfe67a7ce21523fd652e47e6791262 = L.marker(
  [19.1721, 72.9568],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_aa3af65429bb8e5b1b4f4fbafab5497f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_294222c4222159fa4407714b1507ef44 = L.popup({
  maxWidth: 350,
});

var html_dc275b726d1c2e571223453c38278cd8 = $(
  `<div id="html_dc275b726d1c2e571223453c38278cd8" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Mulund</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Mulund West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 108.4630074 kWh<br>     <b>Energy Consumed:</b> 60.71234573 kWh<br>     <b>Charging Duration:</b> 1.67 mins<br>     <b>Charging Rate:</b> 36.38918057 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_294222c4222159fa4407714b1507ef44.setContent(
  html_dc275b726d1c2e571223453c38278cd8
);

marker_0ecfe67a7ce21523fd652e47e6791262.bindPopup(
  popup_294222c4222159fa4407714b1507ef44
);

marker_0ecfe67a7ce21523fd652e47e6791262.bindTooltip(
  `<div>
                     ATUM Charge - Mulund
                 </div>`,
  {
    sticky: true,
  }
);

marker_0ecfe67a7ce21523fd652e47e6791262.setIcon(
  icon_aa3af65429bb8e5b1b4f4fbafab5497f
);

var marker_6a34decae65cde12350704183b59d476 = L.marker(
  [19.0994, 72.8269],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_83e61c7d1c6d64634069fd1f80130e3c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_76b4da345d9761cf05e4ac694caff554 = L.popup({
  maxWidth: 350,
});

var html_9f4aa30f78c73215ffe29c00fae9cd99 = $(
  `<div id="html_9f4aa30f78c73215ffe29c00fae9cd99" style="width: 100.0%; height: 100.0%;">     <h4>EV Point - Juhu</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Juhu Tara Rd, Near Juhu Beach, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 79.45782399 kWh<br>     <b>Charging Duration:</b> 2.42 mins<br>     <b>Charging Rate:</b> 32.88286976 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_76b4da345d9761cf05e4ac694caff554.setContent(
  html_9f4aa30f78c73215ffe29c00fae9cd99
);

marker_6a34decae65cde12350704183b59d476.bindPopup(
  popup_76b4da345d9761cf05e4ac694caff554
);

marker_6a34decae65cde12350704183b59d476.bindTooltip(
  `<div>
                     EV Point - Juhu
                 </div>`,
  {
    sticky: true,
  }
);

marker_6a34decae65cde12350704183b59d476.setIcon(
  icon_83e61c7d1c6d64634069fd1f80130e3c
);

var marker_090bce5a2c25e74b2bd589ad67043b8c = L.marker(
  [19.186, 73.1891],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f852c55bcff6addb070229445007341b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6a2dd74ac0f6344a39de8631c49cb4e4 = L.popup({
  maxWidth: 350,
});

var html_4d437df439b2e643b636963d2934d63a = $(
  `<div id="html_4d437df439b2e643b636963d2934d63a" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Ambernath</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Ambernath Station, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 36.86213999 kWh<br>     <b>Charging Duration:</b> 1.41 mins<br>     <b>Charging Rate:</b> 26.18518786 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6a2dd74ac0f6344a39de8631c49cb4e4.setContent(
  html_4d437df439b2e643b636963d2934d63a
);

marker_090bce5a2c25e74b2bd589ad67043b8c.bindPopup(
  popup_6a2dd74ac0f6344a39de8631c49cb4e4
);

marker_090bce5a2c25e74b2bd589ad67043b8c.bindTooltip(
  `<div>
                     ChargeZone - Ambernath
                 </div>`,
  {
    sticky: true,
  }
);

marker_090bce5a2c25e74b2bd589ad67043b8c.setIcon(
  icon_f852c55bcff6addb070229445007341b
);

var marker_2c0a7ac05e8e8c3d77b77886fecfa172 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f5ccc864ce123c290e319dfde5b551f5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5941bb943dd453b2365bcb024f289f6c = L.popup({
  maxWidth: 350,
});

var html_6ea9799cfbf632010d48b0152fd68004 = $(
  `<div id="html_6ea9799cfbf632010d48b0152fd68004" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 16.56106433 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 19.76909872 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5941bb943dd453b2365bcb024f289f6c.setContent(
  html_6ea9799cfbf632010d48b0152fd68004
);

marker_2c0a7ac05e8e8c3d77b77886fecfa172.bindPopup(
  popup_5941bb943dd453b2365bcb024f289f6c
);

marker_2c0a7ac05e8e8c3d77b77886fecfa172.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_2c0a7ac05e8e8c3d77b77886fecfa172.setIcon(
  icon_f5ccc864ce123c290e319dfde5b551f5
);

var marker_e68f0871c27b79e304d0f8a8f032d748 = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a44cf05d62ea6a5280a0f50f3f84916b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3c319427f8a1c70fdffd58fafb74c0ae = L.popup({
  maxWidth: 350,
});

var html_6e610e9299be9f7f0532f77d7666872f = $(
  `<div id="html_6e610e9299be9f7f0532f77d7666872f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 16.56106433 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 19.76909872 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3c319427f8a1c70fdffd58fafb74c0ae.setContent(
  html_6e610e9299be9f7f0532f77d7666872f
);

marker_e68f0871c27b79e304d0f8a8f032d748.bindPopup(
  popup_3c319427f8a1c70fdffd58fafb74c0ae
);

marker_e68f0871c27b79e304d0f8a8f032d748.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_e68f0871c27b79e304d0f8a8f032d748.setIcon(
  icon_a44cf05d62ea6a5280a0f50f3f84916b
);

var marker_6ed9f8183e30da88bb31b1fe58d4d801 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_107f1ae453c513ee1e3d04a8f1b72607 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_91554a9a1b8de1963dfd5eb43541f937 = L.popup({
  maxWidth: 350,
});

var html_2a5cac13bba5b6c58e994626223b1737 = $(
  `<div id="html_2a5cac13bba5b6c58e994626223b1737" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 16.56106433 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 19.76909872 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_91554a9a1b8de1963dfd5eb43541f937.setContent(
  html_2a5cac13bba5b6c58e994626223b1737
);

marker_6ed9f8183e30da88bb31b1fe58d4d801.bindPopup(
  popup_91554a9a1b8de1963dfd5eb43541f937
);

marker_6ed9f8183e30da88bb31b1fe58d4d801.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_6ed9f8183e30da88bb31b1fe58d4d801.setIcon(
  icon_107f1ae453c513ee1e3d04a8f1b72607
);

var marker_b82f4064217bdc41b4112d15349a2fd0 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_86004d87555e522518ea60d555e99ce4 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_dd22a0707a4e6c06ef4f9c2602791105 = L.popup({
  maxWidth: 350,
});

var html_d372c31327bf2e7a2b61064ab333b4fa = $(
  `<div id="html_d372c31327bf2e7a2b61064ab333b4fa" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 16.56106433 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 19.76909872 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_dd22a0707a4e6c06ef4f9c2602791105.setContent(
  html_d372c31327bf2e7a2b61064ab333b4fa
);

marker_b82f4064217bdc41b4112d15349a2fd0.bindPopup(
  popup_dd22a0707a4e6c06ef4f9c2602791105
);

marker_b82f4064217bdc41b4112d15349a2fd0.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_b82f4064217bdc41b4112d15349a2fd0.setIcon(
  icon_86004d87555e522518ea60d555e99ce4
);

var marker_719e406fb0661751a842309ccdcd9ced = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6665456b3431c77083896d034139b012 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8a828b1d0c464f8c4d2a6ff8b0e97976 = L.popup({
  maxWidth: 350,
});

var html_3ca74907335af83a280a944072f825de = $(
  `<div id="html_3ca74907335af83a280a944072f825de" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 16.56106433 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 19.76909872 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_8a828b1d0c464f8c4d2a6ff8b0e97976.setContent(
  html_3ca74907335af83a280a944072f825de
);

marker_719e406fb0661751a842309ccdcd9ced.bindPopup(
  popup_8a828b1d0c464f8c4d2a6ff8b0e97976
);

marker_719e406fb0661751a842309ccdcd9ced.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_719e406fb0661751a842309ccdcd9ced.setIcon(
  icon_6665456b3431c77083896d034139b012
);

var marker_5be63df2bef1120506012edcd420f56e = L.marker(
  [19.018857, 72.831076],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e0a05e9d41edc7ac58aa2a28829df6d1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_05914fa52225ee873b80a69f1dac2703 = L.popup({
  maxWidth: 350,
});

var html_fb9acd6e736861ad76b7247c4b00e372 = $(
  `<div id="html_fb9acd6e736861ad76b7247c4b00e372" style="width: 100.0%; height: 100.0%;">     <h4>IOCL - COCO, Prabhadevi</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Plot No, P. N. 1207, CADELL RD. MUMBAI, PRABHADEVI CADEL RD., MUMBAI - 400022<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 12.92754529 kWh<br>     <b>Charging Duration:</b> 0.53 mins<br>     <b>Charging Rate:</b> 24.21115012 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_05914fa52225ee873b80a69f1dac2703.setContent(
  html_fb9acd6e736861ad76b7247c4b00e372
);

marker_5be63df2bef1120506012edcd420f56e.bindPopup(
  popup_05914fa52225ee873b80a69f1dac2703
);

marker_5be63df2bef1120506012edcd420f56e.bindTooltip(
  `<div>
                     IOCL - COCO, Prabhadevi
                 </div>`,
  {
    sticky: true,
  }
);

marker_5be63df2bef1120506012edcd420f56e.setIcon(
  icon_e0a05e9d41edc7ac58aa2a28829df6d1
);

var marker_a53ddfba950f3c48892a4d3907f779e3 = L.marker(
  [19.2365, 72.8552],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_32df204c328b1398dd7cc22bd5e8bc95 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9d8664352e6675739c6bb60d083b9606 = L.popup({
  maxWidth: 350,
});

var html_4b821774313d970b8d5e769bf48fdaf3 = $(
  `<div id="html_4b821774313d970b8d5e769bf48fdaf3" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Borivali</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Borivali East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 27.60438468 kWh<br>     <b>Charging Duration:</b> 2.46 mins<br>     <b>Charging Rate:</b> 11.23853863 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9d8664352e6675739c6bb60d083b9606.setContent(
  html_4b821774313d970b8d5e769bf48fdaf3
);

marker_a53ddfba950f3c48892a4d3907f779e3.bindPopup(
  popup_9d8664352e6675739c6bb60d083b9606
);

marker_a53ddfba950f3c48892a4d3907f779e3.bindTooltip(
  `<div>
                     EVteQ - Borivali
                 </div>`,
  {
    sticky: true,
  }
);

marker_a53ddfba950f3c48892a4d3907f779e3.setIcon(
  icon_32df204c328b1398dd7cc22bd5e8bc95
);

var marker_15ff9b2a0e7a6aa069cca335cdc82f46 = L.marker(
  [19.0085, 72.8153],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b29d60d83fea14b11db174bdfdb42200 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4fa306b8c6266f43ae7f0d16942a525c = L.popup({
  maxWidth: 350,
});

var html_d25cb9da969216306c7cfbc43356653e = $(
  `<div id="html_d25cb9da969216306c7cfbc43356653e" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Worli</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Atria Mall, Dr Annie Besant Rd, Worli, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 43.48775122 kWh<br>     <b>Charging Duration:</b> 1.2 mins<br>     <b>Charging Rate:</b> 36.18237188 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_4fa306b8c6266f43ae7f0d16942a525c.setContent(
  html_d25cb9da969216306c7cfbc43356653e
);

marker_15ff9b2a0e7a6aa069cca335cdc82f46.bindPopup(
  popup_4fa306b8c6266f43ae7f0d16942a525c
);

marker_15ff9b2a0e7a6aa069cca335cdc82f46.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Worli
                 </div>`,
  {
    sticky: true,
  }
);

marker_15ff9b2a0e7a6aa069cca335cdc82f46.setIcon(
  icon_b29d60d83fea14b11db174bdfdb42200
);

var marker_8ad1f406c1d1d8e9f2b4cac5e27ef37b = L.marker(
  [18.9285, 72.8255],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b77e5511710b065259efe94572b7e591 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b13136cb122a291712222ff6f75ec56d = L.popup({
  maxWidth: 350,
});

var html_b34da68f83382574c795ebb3d2303019 = $(
  `<div id="html_b34da68f83382574c795ebb3d2303019" style="width: 100.0%; height: 100.0%;">     <h4>HP Super Service DC Charging Station</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> 157, Jeevan Bima Marg, Backbay Reclamation, Churchgate, Mumbai, Maharashtra 400020, India<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 60.06708509 kWh<br>     <b>Charging Duration:</b> 7.85 mins<br>     <b>Charging Rate:</b> 7.651570047 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_b13136cb122a291712222ff6f75ec56d.setContent(
  html_b34da68f83382574c795ebb3d2303019
);

marker_8ad1f406c1d1d8e9f2b4cac5e27ef37b.bindPopup(
  popup_b13136cb122a291712222ff6f75ec56d
);

marker_8ad1f406c1d1d8e9f2b4cac5e27ef37b.bindTooltip(
  `<div>
                     HP Super Service DC Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_8ad1f406c1d1d8e9f2b4cac5e27ef37b.setIcon(
  icon_b77e5511710b065259efe94572b7e591
);

var marker_c84dac00c191285372a07374911e3af2 = L.marker(
  [19.0094, 72.8394],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4bda23ead596744dffff1fab911dc3fb = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_96bc2fd18ea27b1cb73cacb23436c064 = L.popup({
  maxWidth: 350,
});

var html_301aaee0c5b37ed8c34ef78d864c47fa = $(
  `<div id="html_301aaee0c5b37ed8c34ef78d864c47fa" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint - Parel</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Dr Ambedkar Rd, Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 57.72437946 kWh<br>     <b>Charging Duration:</b> 12.87 mins<br>     <b>Charging Rate:</b> 4.485647105 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_96bc2fd18ea27b1cb73cacb23436c064.setContent(
  html_301aaee0c5b37ed8c34ef78d864c47fa
);

marker_c84dac00c191285372a07374911e3af2.bindPopup(
  popup_96bc2fd18ea27b1cb73cacb23436c064
);

marker_c84dac00c191285372a07374911e3af2.bindTooltip(
  `<div>
                     VoltaPoint - Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_c84dac00c191285372a07374911e3af2.setIcon(
  icon_4bda23ead596744dffff1fab911dc3fb
);

var marker_aa183003cadced59435b10c0cedf88dc = L.marker(
  [19.102, 72.8872],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0c26ab318c2adbb27ef5f448dc68e5c0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3f85de061a8ded555eae06b437f21cf9 = L.popup({
  maxWidth: 350,
});

var html_e35170743c37b8e95018ef0fec7ad64f = $(
  `<div id="html_e35170743c37b8e95018ef0fec7ad64f" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Sakinaka</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Sakinaka Junction, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 68.17785004 kWh<br>     <b>Charging Duration:</b> 2.92 mins<br>     <b>Charging Rate:</b> 23.31161908 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_3f85de061a8ded555eae06b437f21cf9.setContent(
  html_e35170743c37b8e95018ef0fec7ad64f
);

marker_aa183003cadced59435b10c0cedf88dc.bindPopup(
  popup_3f85de061a8ded555eae06b437f21cf9
);

marker_aa183003cadced59435b10c0cedf88dc.bindTooltip(
  `<div>
                     EVteQ - Sakinaka
                 </div>`,
  {
    sticky: true,
  }
);

marker_aa183003cadced59435b10c0cedf88dc.setIcon(
  icon_0c26ab318c2adbb27ef5f448dc68e5c0
);

var marker_176cba05bbef37a452d7867081910a4c = L.marker(
  [19.0161, 72.828],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_245caa57127d574e66e6d3fd4d9db3ca = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6f4f0e70a549e085d4d8497fec16fc65 = L.popup({
  maxWidth: 350,
});

var html_f43dc70f0c09cce2121b173251780151 = $(
  `<div id="html_f43dc70f0c09cce2121b173251780151" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint Charging Station</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> 527, Building No-2, SRA Cooperative Society, Prabhadevi, near Ahuja Towers, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 39.39874236 kWh<br>     <b>Charging Duration:</b> 1.93 mins<br>     <b>Charging Rate:</b> 20.46036487 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6f4f0e70a549e085d4d8497fec16fc65.setContent(
  html_f43dc70f0c09cce2121b173251780151
);

marker_176cba05bbef37a452d7867081910a4c.bindPopup(
  popup_6f4f0e70a549e085d4d8497fec16fc65
);

marker_176cba05bbef37a452d7867081910a4c.bindTooltip(
  `<div>
                     VoltaPoint Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_176cba05bbef37a452d7867081910a4c.setIcon(
  icon_245caa57127d574e66e6d3fd4d9db3ca
);

var marker_3c3f0a9939124f490c00a005be4d5785 = L.marker(
  [19.1441, 72.8366],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_10c1238108303ce90dd0e5a7f5c50fbf = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4fe94668c5ed395c833b88912f437c75 = L.popup({
  maxWidth: 350,
});

var html_9db5aea60e0ed486d917bd7bd71b31bf = $(
  `<div id="html_9db5aea60e0ed486d917bd7bd71b31bf" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Oshiwara</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Oshiwara Police Station Lane, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 12.04931971 kWh<br>     <b>Charging Duration:</b> 0.41 mins<br>     <b>Charging Rate:</b> 29.46894436 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_4fe94668c5ed395c833b88912f437c75.setContent(
  html_9db5aea60e0ed486d917bd7bd71b31bf
);

marker_3c3f0a9939124f490c00a005be4d5785.bindPopup(
  popup_4fe94668c5ed395c833b88912f437c75
);

marker_3c3f0a9939124f490c00a005be4d5785.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Oshiwara
                 </div>`,
  {
    sticky: true,
  }
);

marker_3c3f0a9939124f490c00a005be4d5785.setIcon(
  icon_10c1238108303ce90dd0e5a7f5c50fbf
);

var marker_91a570b3b58c246d73d97890f15ef707 = L.marker(
  [19.0977, 72.8271],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1e2bf6c6acca98cf4e2724db63b030ab = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a286fae4be800b3eaa1fd26d75c98b5d = L.popup({
  maxWidth: 350,
});

var html_603b707a8f9873e35ae14f1439214636 = $(
  `<div id="html_603b707a8f9873e35ae14f1439214636" style="width: 100.0%; height: 100.0%;">     <h4>ChargeAndDrive - Juhu</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Juhu Tara Rd, Near Juhu Beach, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 17.76943641 kWh<br>     <b>Charging Duration:</b> 0.52 mins<br>     <b>Charging Rate:</b> 34.45824194 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a286fae4be800b3eaa1fd26d75c98b5d.setContent(
  html_603b707a8f9873e35ae14f1439214636
);

marker_91a570b3b58c246d73d97890f15ef707.bindPopup(
  popup_a286fae4be800b3eaa1fd26d75c98b5d
);

marker_91a570b3b58c246d73d97890f15ef707.bindTooltip(
  `<div>
                     ChargeAndDrive - Juhu
                 </div>`,
  {
    sticky: true,
  }
);

marker_91a570b3b58c246d73d97890f15ef707.setIcon(
  icon_1e2bf6c6acca98cf4e2724db63b030ab
);

var marker_b444164b1411dba71a95205e9b6538cc = L.marker(
  [19.0977, 72.8271],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_66b832926be3026acffc40d1cf376ac9 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5b625d9bfcb4bceb876149c449d3a37e = L.popup({
  maxWidth: 350,
});

var html_0b97fe7abcb18783bb4dfa4cf852c921 = $(
  `<div id="html_0b97fe7abcb18783bb4dfa4cf852c921" style="width: 100.0%; height: 100.0%;">     <h4>ChargeAndDrive - Juhu</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Juhu Tara Rd, Near Juhu Beach, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 77.86372676 kWh<br>     <b>Charging Duration:</b> 1.65 mins<br>     <b>Charging Rate:</b> 47.1540098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_5b625d9bfcb4bceb876149c449d3a37e.setContent(
  html_0b97fe7abcb18783bb4dfa4cf852c921
);

marker_b444164b1411dba71a95205e9b6538cc.bindPopup(
  popup_5b625d9bfcb4bceb876149c449d3a37e
);

marker_b444164b1411dba71a95205e9b6538cc.bindTooltip(
  `<div>
                     ChargeAndDrive - Juhu
                 </div>`,
  {
    sticky: true,
  }
);

marker_b444164b1411dba71a95205e9b6538cc.setIcon(
  icon_66b832926be3026acffc40d1cf376ac9
);

var marker_8eb165fc87b04e7f94aa59b977a76ac0 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e23959b7d43ed91a843ba51be00bbb32 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5529512d78eb4f57445623e699370da5 = L.popup({
  maxWidth: 350,
});

var html_3bb8955fcec833f98266d1d94c54bf59 = $(
  `<div id="html_3bb8955fcec833f98266d1d94c54bf59" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.28000416 kWh<br>     <b>Charging Duration:</b> 1.75 mins<br>     <b>Charging Rate:</b> 40.61639923 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_5529512d78eb4f57445623e699370da5.setContent(
  html_3bb8955fcec833f98266d1d94c54bf59
);

marker_8eb165fc87b04e7f94aa59b977a76ac0.bindPopup(
  popup_5529512d78eb4f57445623e699370da5
);

marker_8eb165fc87b04e7f94aa59b977a76ac0.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_8eb165fc87b04e7f94aa59b977a76ac0.setIcon(
  icon_e23959b7d43ed91a843ba51be00bbb32
);

var marker_39c2fa5ce5dd145bb8b231cdd381eb40 = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_fe7a3d756fb3f8b5588e4c87ac90b07c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a24456945ddfa6c668015187a1dc536a = L.popup({
  maxWidth: 350,
});

var html_043af6b967e70c3944afe943e0073e20 = $(
  `<div id="html_043af6b967e70c3944afe943e0073e20" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.28000416 kWh<br>     <b>Charging Duration:</b> 1.75 mins<br>     <b>Charging Rate:</b> 40.61639923 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a24456945ddfa6c668015187a1dc536a.setContent(
  html_043af6b967e70c3944afe943e0073e20
);

marker_39c2fa5ce5dd145bb8b231cdd381eb40.bindPopup(
  popup_a24456945ddfa6c668015187a1dc536a
);

marker_39c2fa5ce5dd145bb8b231cdd381eb40.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_39c2fa5ce5dd145bb8b231cdd381eb40.setIcon(
  icon_fe7a3d756fb3f8b5588e4c87ac90b07c
);

var marker_7928fa2aee06bf6bbad4baf0b740f23e = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_66edbeeb5589aba922ad06667fa4f160 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9df81c970162836995bff1a97b5aedd1 = L.popup({
  maxWidth: 350,
});

var html_70974c95bb4c84e849408aebcc15c200 = $(
  `<div id="html_70974c95bb4c84e849408aebcc15c200" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.28000416 kWh<br>     <b>Charging Duration:</b> 1.75 mins<br>     <b>Charging Rate:</b> 40.61639923 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_9df81c970162836995bff1a97b5aedd1.setContent(
  html_70974c95bb4c84e849408aebcc15c200
);

marker_7928fa2aee06bf6bbad4baf0b740f23e.bindPopup(
  popup_9df81c970162836995bff1a97b5aedd1
);

marker_7928fa2aee06bf6bbad4baf0b740f23e.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_7928fa2aee06bf6bbad4baf0b740f23e.setIcon(
  icon_66edbeeb5589aba922ad06667fa4f160
);

var marker_5fd60f80815787340084c72a0fb80037 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b5d1e9515f6c682cd0a1106de791ee13 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f5c737bc796efeaaf14775ac019262be = L.popup({
  maxWidth: 350,
});

var html_7ab8435ccd41466128b2e3f2f3ba5f4b = $(
  `<div id="html_7ab8435ccd41466128b2e3f2f3ba5f4b" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.28000416 kWh<br>     <b>Charging Duration:</b> 1.75 mins<br>     <b>Charging Rate:</b> 40.61639923 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_f5c737bc796efeaaf14775ac019262be.setContent(
  html_7ab8435ccd41466128b2e3f2f3ba5f4b
);

marker_5fd60f80815787340084c72a0fb80037.bindPopup(
  popup_f5c737bc796efeaaf14775ac019262be
);

marker_5fd60f80815787340084c72a0fb80037.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_5fd60f80815787340084c72a0fb80037.setIcon(
  icon_b5d1e9515f6c682cd0a1106de791ee13
);

var marker_30ffd1d8506b4b2985bd246eb33e99bd = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ed19c80d42f203f6b57e501ce8b57c7b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e6da927496b9f116d7996082ad84c967 = L.popup({
  maxWidth: 350,
});

var html_311dbd7e65973e38bcab573160c42b68 = $(
  `<div id="html_311dbd7e65973e38bcab573160c42b68" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.28000416 kWh<br>     <b>Charging Duration:</b> 1.75 mins<br>     <b>Charging Rate:</b> 40.61639923 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_e6da927496b9f116d7996082ad84c967.setContent(
  html_311dbd7e65973e38bcab573160c42b68
);

marker_30ffd1d8506b4b2985bd246eb33e99bd.bindPopup(
  popup_e6da927496b9f116d7996082ad84c967
);

marker_30ffd1d8506b4b2985bd246eb33e99bd.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_30ffd1d8506b4b2985bd246eb33e99bd.setIcon(
  icon_ed19c80d42f203f6b57e501ce8b57c7b
);

var marker_5ea7e6a009c903d38d9c3ecf49af1be2 = L.marker(
  [19.1372, 72.8276],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_20f66c7aae3f13b95cb54e4efe187f30 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3e4e50626d5654397a86384d706f1110 = L.popup({
  maxWidth: 350,
});

var html_06d6186d689ae564917ef442fa3e65f7 = $(
  `<div id="html_06d6186d689ae564917ef442fa3e65f7" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Andheri West</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Near Infiniti Mall, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 21.82768818 kWh<br>     <b>Charging Duration:</b> 0.82 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_3e4e50626d5654397a86384d706f1110.setContent(
  html_06d6186d689ae564917ef442fa3e65f7
);

marker_5ea7e6a009c903d38d9c3ecf49af1be2.bindPopup(
  popup_3e4e50626d5654397a86384d706f1110
);

marker_5ea7e6a009c903d38d9c3ecf49af1be2.bindTooltip(
  `<div>
                     Kazam - Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_5ea7e6a009c903d38d9c3ecf49af1be2.setIcon(
  icon_20f66c7aae3f13b95cb54e4efe187f30
);

var marker_624ac4fc213a998e095e7aff3098e1d4 = L.marker(
  [19.032, 72.8597],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_971823f4e360702479e7a20831b6ae6a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c9e7eda6db351a1f928b3b4b60991828 = L.popup({
  maxWidth: 350,
});

var html_5554c8896134855bab950e6d24209ad8 = $(
  `<div id="html_5554c8896134855bab950e6d24209ad8" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - Sion</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Sion East, Near Sion Hospital, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 40.2 kWh<br>     <b>Energy Consumed:</b> 46.195137 kWh<br>     <b>Charging Duration:</b> 0.96 mins<br>     <b>Charging Rate:</b> 47.87752356 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c9e7eda6db351a1f928b3b4b60991828.setContent(
  html_5554c8896134855bab950e6d24209ad8
);

marker_624ac4fc213a998e095e7aff3098e1d4.bindPopup(
  popup_c9e7eda6db351a1f928b3b4b60991828
);

marker_624ac4fc213a998e095e7aff3098e1d4.bindTooltip(
  `<div>
                     Volttic - Sion
                 </div>`,
  {
    sticky: true,
  }
);

marker_624ac4fc213a998e095e7aff3098e1d4.setIcon(
  icon_971823f4e360702479e7a20831b6ae6a
);

var marker_bd4a9a7c6f896b2b020d9f01ceb468f1 = L.marker(
  [19.1737611, 72.8600172],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e632aecdb0692925003366acbbd2c43c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f817dccba3c5cc90a4401c0d090ba2f7 = L.popup({
  maxWidth: 350,
});

var html_f30168941c2dce022668878cf9a549fa = $(
  `<div id="html_f30168941c2dce022668878cf9a549fa" style="width: 100.0%; height: 100.0%;">     <h4>Oberoi Mall, Goregaon</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Western Express Hwy, Yashodham, Goregaon, Mumbai, Maharashtra 400063<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 59.25460166 kWh<br>     <b>Charging Duration:</b> 18.38615197 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f817dccba3c5cc90a4401c0d090ba2f7.setContent(
  html_f30168941c2dce022668878cf9a549fa
);

marker_bd4a9a7c6f896b2b020d9f01ceb468f1.bindPopup(
  popup_f817dccba3c5cc90a4401c0d090ba2f7
);

marker_bd4a9a7c6f896b2b020d9f01ceb468f1.bindTooltip(
  `<div>
                     Oberoi Mall, Goregaon
                 </div>`,
  {
    sticky: true,
  }
);

marker_bd4a9a7c6f896b2b020d9f01ceb468f1.setIcon(
  icon_e632aecdb0692925003366acbbd2c43c
);

var marker_ef292be0393e9b4455e9deffbbbce166 = L.marker(
  [19.109, 72.8771],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0d8eba43f7a9da70cacbbddd67c51468 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5f1ad1d0fc18546043d73f07d75d9d07 = L.popup({
  maxWidth: 350,
});

var html_597c6d86297dd9bfd9593bbf78511711 = $(
  `<div id="html_597c6d86297dd9bfd9593bbf78511711" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Marol Naka</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Marol Naka Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 67.00568214 kWh<br>     <b>Charging Duration:</b> 16.37 mins<br>     <b>Charging Rate:</b> 4.092360865 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_5f1ad1d0fc18546043d73f07d75d9d07.setContent(
  html_597c6d86297dd9bfd9593bbf78511711
);

marker_ef292be0393e9b4455e9deffbbbce166.bindPopup(
  popup_5f1ad1d0fc18546043d73f07d75d9d07
);

marker_ef292be0393e9b4455e9deffbbbce166.bindTooltip(
  `<div>
                     Statiq - Marol Naka
                 </div>`,
  {
    sticky: true,
  }
);

marker_ef292be0393e9b4455e9deffbbbce166.setIcon(
  icon_0d8eba43f7a9da70cacbbddd67c51468
);

var marker_dec705eba688d861b34f379376ed6f11 = L.marker(
  [19.0029, 72.824],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_082faea8e37803e52f6e32ce98774ca0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_aa3da57363200bcca6938e1c2d484914 = L.popup({
  maxWidth: 350,
});

var html_af70c0f225d864c15ca548fb23c8a383 = $(
  `<div id="html_af70c0f225d864c15ca548fb23c8a383" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Parel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Phoenix Mills Compound, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.13047583 kWh<br>     <b>Charging Duration:</b> 2.63 mins<br>     <b>Charging Rate:</b> 23.28180496 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_aa3da57363200bcca6938e1c2d484914.setContent(
  html_af70c0f225d864c15ca548fb23c8a383
);

marker_dec705eba688d861b34f379376ed6f11.bindPopup(
  popup_aa3da57363200bcca6938e1c2d484914
);

marker_dec705eba688d861b34f379376ed6f11.bindTooltip(
  `<div>
                     Statiq - Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_dec705eba688d861b34f379376ed6f11.setIcon(
  icon_082faea8e37803e52f6e32ce98774ca0
);

var marker_b77ee4c47b177dec08a063fad69e0b23 = L.marker(
  [19.06870454, 73.02298692],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_69814a292330c8b1c38edce5b96bc474 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2e7d9785ccd85c8668852c9b91c36600 = L.popup({
  maxWidth: 350,
});

var html_59745c7ad6579d408106dabe439de524 = $(
  `<div id="html_59745c7ad6579d408106dabe439de524" style="width: 100.0%; height: 100.0%;">     <h4>Magenta House - Mumbai</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> TTC Industrial Area, MIDC Industrial Area, Sanpada, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 69.16916706 kWh<br>     <b>Charging Duration:</b> 12.45 mins<br>     <b>Charging Rate:</b> 5.557358509 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_2e7d9785ccd85c8668852c9b91c36600.setContent(
  html_59745c7ad6579d408106dabe439de524
);

marker_b77ee4c47b177dec08a063fad69e0b23.bindPopup(
  popup_2e7d9785ccd85c8668852c9b91c36600
);

marker_b77ee4c47b177dec08a063fad69e0b23.bindTooltip(
  `<div>
                     Magenta House - Mumbai
                 </div>`,
  {
    sticky: true,
  }
);

marker_b77ee4c47b177dec08a063fad69e0b23.setIcon(
  icon_69814a292330c8b1c38edce5b96bc474
);

var marker_d83a9af43989dcbbbdcb0a0ffdbfaf2e = L.marker(
  [19.02460889, 72.84282021],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2a1a7511fa84ed603cc7f5c2d4fc854b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1a88ced369f3d8652eb863a706f8c1ab = L.popup({
  maxWidth: 350,
});

var html_089a142985c238720cbe8c2ef62bcbe9 = $(
  `<div id="html_089a142985c238720cbe8c2ef62bcbe9" style="width: 100.0%; height: 100.0%;">     <h4>Kohinoor MCGM parking</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Kohinoor Square, Kasaravadi, Dadar, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 30.65169982 kWh<br>     <b>Charging Duration:</b> 1.07 mins<br>     <b>Charging Rate:</b> 28.52235334 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_1a88ced369f3d8652eb863a706f8c1ab.setContent(
  html_089a142985c238720cbe8c2ef62bcbe9
);

marker_d83a9af43989dcbbbdcb0a0ffdbfaf2e.bindPopup(
  popup_1a88ced369f3d8652eb863a706f8c1ab
);

marker_d83a9af43989dcbbbdcb0a0ffdbfaf2e.bindTooltip(
  `<div>
                     Kohinoor MCGM parking
                 </div>`,
  {
    sticky: true,
  }
);

marker_d83a9af43989dcbbbdcb0a0ffdbfaf2e.setIcon(
  icon_2a1a7511fa84ed603cc7f5c2d4fc854b
);

var marker_366907bfb20ec58e7d1a8caf98269c63 = L.marker(
  [19.05231631, 72.90163581],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_db182f74da4b3ba925829ceb33de3c11 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e938a16ca2b03c1cc769843c22d8dce1 = L.popup({
  maxWidth: 350,
});

var html_41508aa4e43274122adb6d740c5a3d8d = $(
  `<div id="html_41508aa4e43274122adb6d740c5a3d8d" style="width: 100.0%; height: 100.0%;">     <h4>K Star Chembur</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> VN Purav Marg Diamond Garden, Basant Garden, Chembur Mumbai, Maharashtra,Chembur<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 59.98647673 kWh<br>     <b>Charging Duration:</b> 2.56 mins<br>     <b>Charging Rate:</b> 23.41792115 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_e938a16ca2b03c1cc769843c22d8dce1.setContent(
  html_41508aa4e43274122adb6d740c5a3d8d
);

marker_366907bfb20ec58e7d1a8caf98269c63.bindPopup(
  popup_e938a16ca2b03c1cc769843c22d8dce1
);

marker_366907bfb20ec58e7d1a8caf98269c63.bindTooltip(
  `<div>
                     K Star Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_366907bfb20ec58e7d1a8caf98269c63.setIcon(
  icon_db182f74da4b3ba925829ceb33de3c11
);

var marker_d328f2185cb297225d877988000af55d = L.marker(
  [19.163979, 72.938751],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_875fd41b626070a5b4456c6ba4502873 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d1220899aa9c20d1f42a4cc8cecce913 = L.popup({
  maxWidth: 350,
});

var html_4a671d1c063af6dd8da6a0d568485cf4 = $(
  `<div id="html_4a671d1c063af6dd8da6a0d568485cf4" style="width: 100.0%; height: 100.0%;">     <h4>Hare Krishna Mahindra, Mulund West</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Building, Plot 1, Udyog Kshtra, Mulund Goregaon Link Rd, near D Mart Mulund, Salpa Devi Pada, Mulund West, Mumbai, Maharashtra 400080<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 57.92445004 kWh<br>     <b>Charging Duration:</b> 4.62 mins<br>     <b>Charging Rate:</b> 12.53816191 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d1220899aa9c20d1f42a4cc8cecce913.setContent(
  html_4a671d1c063af6dd8da6a0d568485cf4
);

marker_d328f2185cb297225d877988000af55d.bindPopup(
  popup_d1220899aa9c20d1f42a4cc8cecce913
);

marker_d328f2185cb297225d877988000af55d.bindTooltip(
  `<div>
                     Hare Krishna Mahindra, Mulund West
                 </div>`,
  {
    sticky: true,
  }
);

marker_d328f2185cb297225d877988000af55d.setIcon(
  icon_875fd41b626070a5b4456c6ba4502873
);

var marker_20fa7299c3c7b8d65ef54a18c709bdc3 = L.marker(
  [19.2081, 73.1041],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4dd3607ee4772d52c828da243c89b361 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f084475269ee7db6f6e1eabe1d5bb82e = L.popup({
  maxWidth: 350,
});

var html_21ec433716d744016c14fe739b663bf8 = $(
  `<div id="html_21ec433716d744016c14fe739b663bf8" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Palava</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Near Palava City, Dombivli East<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 65.43101691 kWh<br>     <b>Charging Duration:</b> 3.23 mins<br>     <b>Charging Rate:</b> 20.27269894 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f084475269ee7db6f6e1eabe1d5bb82e.setContent(
  html_21ec433716d744016c14fe739b663bf8
);

marker_20fa7299c3c7b8d65ef54a18c709bdc3.bindPopup(
  popup_f084475269ee7db6f6e1eabe1d5bb82e
);

marker_20fa7299c3c7b8d65ef54a18c709bdc3.bindTooltip(
  `<div>
                     Tata Power - Palava
                 </div>`,
  {
    sticky: true,
  }
);

marker_20fa7299c3c7b8d65ef54a18c709bdc3.setIcon(
  icon_4dd3607ee4772d52c828da243c89b361
);

var marker_202526ab7d291f95863218c55b932b22 = L.marker(
  [19.1088, 72.8535],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4ce2c492ebea687f80e44660b839549b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9fe651feaac652b51e3dc94669079ef4 = L.popup({
  maxWidth: 350,
});

var html_99e758fd4e0acaf9d05686258c264c41 = $(
  `<div id="html_99e758fd4e0acaf9d05686258c264c41" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Chakala</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Chakala Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 36.137269 kWh<br>     <b>Charging Duration:</b> 0.99 mins<br>     <b>Charging Rate:</b> 36.37707579 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_9fe651feaac652b51e3dc94669079ef4.setContent(
  html_99e758fd4e0acaf9d05686258c264c41
);

marker_202526ab7d291f95863218c55b932b22.bindPopup(
  popup_9fe651feaac652b51e3dc94669079ef4
);

marker_202526ab7d291f95863218c55b932b22.bindTooltip(
  `<div>
                     Tata Power - Chakala
                 </div>`,
  {
    sticky: true,
  }
);

marker_202526ab7d291f95863218c55b932b22.setIcon(
  icon_4ce2c492ebea687f80e44660b839549b
);

var marker_9bfa82f7cb0a8be10ef23b355f8d529c = L.marker(
  [19.2188, 73.0935],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_de30ded99b75ee55d24aec45b70f6787 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_09df20f88b98e59ba986117466efd4f2 = L.popup({
  maxWidth: 350,
});

var html_b4276e78690bf208fed2773e5c57a873 = $(
  `<div id="html_b4276e78690bf208fed2773e5c57a873" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Dombivli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Dombivli East Railway Parking, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 43.44537898 kWh<br>     <b>Charging Duration:</b> 3.365143965 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_09df20f88b98e59ba986117466efd4f2.setContent(
  html_b4276e78690bf208fed2773e5c57a873
);

marker_9bfa82f7cb0a8be10ef23b355f8d529c.bindPopup(
  popup_09df20f88b98e59ba986117466efd4f2
);

marker_9bfa82f7cb0a8be10ef23b355f8d529c.bindTooltip(
  `<div>
                     Tata Power - Dombivli
                 </div>`,
  {
    sticky: true,
  }
);

marker_9bfa82f7cb0a8be10ef23b355f8d529c.setIcon(
  icon_de30ded99b75ee55d24aec45b70f6787
);

var marker_2823451440f8667b4b2b87e172a969b5 = L.marker(
  [19.0472567, 72.8783829],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c379d9f1bdc87363cc7d135b159de45d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5bc7e7bdc804f9c5fe54585dfd1429b0 = L.popup({
  maxWidth: 350,
});

var html_fe5bdb442ff5dce96fdaa4f2af406308 = $(
  `<div id="html_fe5bdb442ff5dce96fdaa4f2af406308" style="width: 100.0%; height: 100.0%;">     <h4>Mahanagar Gas Limited, Wadala</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> MGL Terminal, opposite Anik Depot, Wadala, Mumbai, Maharashtra 400022<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 63.09631665 kWh<br>     <b>Energy Consumed:</b> 47.7140959 kWh<br>     <b>Charging Duration:</b> 11.0477729 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_5bc7e7bdc804f9c5fe54585dfd1429b0.setContent(
  html_fe5bdb442ff5dce96fdaa4f2af406308
);

marker_2823451440f8667b4b2b87e172a969b5.bindPopup(
  popup_5bc7e7bdc804f9c5fe54585dfd1429b0
);

marker_2823451440f8667b4b2b87e172a969b5.bindTooltip(
  `<div>
                     Mahanagar Gas Limited, Wadala
                 </div>`,
  {
    sticky: true,
  }
);

marker_2823451440f8667b4b2b87e172a969b5.setIcon(
  icon_c379d9f1bdc87363cc7d135b159de45d
);

var marker_198ec9564d09f2a068338c4e8a144201 = L.marker(
  [19.2053, 72.8444],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ffce7c71857115407cb484b13de39e45 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e1fbb57e8b6d7946b080f89427e91da7 = L.popup({
  maxWidth: 350,
});

var html_e106e6e2bdbe564e906537ace7d1134b = $(
  `<div id="html_e106e6e2bdbe564e906537ace7d1134b" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Kandivali West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Raghuleela Mega Mall, Kandivali West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 64.41904929 kWh<br>     <b>Charging Duration:</b> 2.62 mins<br>     <b>Charging Rate:</b> 24.62165118 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e1fbb57e8b6d7946b080f89427e91da7.setContent(
  html_e106e6e2bdbe564e906537ace7d1134b
);

marker_198ec9564d09f2a068338c4e8a144201.bindPopup(
  popup_e1fbb57e8b6d7946b080f89427e91da7
);

marker_198ec9564d09f2a068338c4e8a144201.bindTooltip(
  `<div>
                     Tata Power - Kandivali West
                 </div>`,
  {
    sticky: true,
  }
);

marker_198ec9564d09f2a068338c4e8a144201.setIcon(
  icon_ffce7c71857115407cb484b13de39e45
);

var marker_a371f9ce50d874cc14a9fcaad0aa62b3 = L.marker(
  [19.2567, 72.8572],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d26cdbafe94ed69c7c44f6d14a78ac3a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_339f7c23d422cf4e98c13beb5c3a8b28 = L.popup({
  maxWidth: 350,
});

var html_c79bba63b0a72794eb65ef245846d9d7 = $(
  `<div id="html_c79bba63b0a72794eb65ef245846d9d7" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint - Dahisar</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Dahisar Check Naka Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 35.55367093 kWh<br>     <b>Charging Duration:</b> 0.78 mins<br>     <b>Charging Rate:</b> 45.8556972 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_339f7c23d422cf4e98c13beb5c3a8b28.setContent(
  html_c79bba63b0a72794eb65ef245846d9d7
);

marker_a371f9ce50d874cc14a9fcaad0aa62b3.bindPopup(
  popup_339f7c23d422cf4e98c13beb5c3a8b28
);

marker_a371f9ce50d874cc14a9fcaad0aa62b3.bindTooltip(
  `<div>
                     VoltaPoint - Dahisar
                 </div>`,
  {
    sticky: true,
  }
);

marker_a371f9ce50d874cc14a9fcaad0aa62b3.setIcon(
  icon_d26cdbafe94ed69c7c44f6d14a78ac3a
);

var marker_3e89773b1d756d9246b659a697af6b54 = L.marker(
  [18.989356, 72.825234],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_55dc2964d3dd3ec6f25b7de3d15929cd = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1f1472ff61978e2189a880e5e26c3fc9 = L.popup({
  maxWidth: 350,
});

var html_9b2f75919ec6d18ab44ac0ecbfbe3f04 = $(
  `<div id="html_9b2f75919ec6d18ab44ac0ecbfbe3f04" style="width: 100.0%; height: 100.0%;">     <h4>Blue Tokai Coffee</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Unit 20-22, Laxmi Woollen Mill, Opposite Blue Loft, Dr E Moses Marg, Off, Shakti Mills Ln, Mahalakshmi, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 36.61656862 kWh<br>     <b>Charging Duration:</b> 1.34 mins<br>     <b>Charging Rate:</b> 27.32114694 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_1f1472ff61978e2189a880e5e26c3fc9.setContent(
  html_9b2f75919ec6d18ab44ac0ecbfbe3f04
);

marker_3e89773b1d756d9246b659a697af6b54.bindPopup(
  popup_1f1472ff61978e2189a880e5e26c3fc9
);

marker_3e89773b1d756d9246b659a697af6b54.bindTooltip(
  `<div>
                     Blue Tokai Coffee
                 </div>`,
  {
    sticky: true,
  }
);

marker_3e89773b1d756d9246b659a697af6b54.setIcon(
  icon_55dc2964d3dd3ec6f25b7de3d15929cd
);

var marker_3b97b3815d82fa20f58ee51a98186eea = L.marker(
  [19.016, 73.0949],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_401c71c443af27dbf5be2f04b8c03083 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9ecc63629e8e0d58ef62575e3145067b = L.popup({
  maxWidth: 350,
});

var html_d154921f368f56bd9667e3ca187bf52e = $(
  `<div id="html_d154921f368f56bd9667e3ca187bf52e" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Kamothe</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Kamothe Bus Depot, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 65.48719596 kWh<br>     <b>Charging Duration:</b> 1.74 mins<br>     <b>Charging Rate:</b> 37.57728956 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9ecc63629e8e0d58ef62575e3145067b.setContent(
  html_d154921f368f56bd9667e3ca187bf52e
);

marker_3b97b3815d82fa20f58ee51a98186eea.bindPopup(
  popup_9ecc63629e8e0d58ef62575e3145067b
);

marker_3b97b3815d82fa20f58ee51a98186eea.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Kamothe
                 </div>`,
  {
    sticky: true,
  }
);

marker_3b97b3815d82fa20f58ee51a98186eea.setIcon(
  icon_401c71c443af27dbf5be2f04b8c03083
);

var marker_41dd3962d6324382db4b4d6b872ca207 = L.marker(
  [18.965, 72.8098],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8e4ac3933cca40d7168f2dec1d52b583 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_bf26376509fafffd67c4abbc7cd1fcc2 = L.popup({
  maxWidth: 350,
});

var html_3143a376c2b66e5af1014689ec76daff = $(
  `<div id="html_3143a376c2b66e5af1014689ec76daff" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Kapasi CHSL</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> 4/5, Enterprise Apartment, Forjet Hill Rd, Tardeo, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 33.88719708 kWh<br>     <b>Charging Duration:</b> 1.82 mins<br>     <b>Charging Rate:</b> 18.6042609 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_bf26376509fafffd67c4abbc7cd1fcc2.setContent(
  html_3143a376c2b66e5af1014689ec76daff
);

marker_41dd3962d6324382db4b4d6b872ca207.bindPopup(
  popup_bf26376509fafffd67c4abbc7cd1fcc2
);

marker_41dd3962d6324382db4b4d6b872ca207.bindTooltip(
  `<div>
                     Tata Power - Kapasi CHSL
                 </div>`,
  {
    sticky: true,
  }
);

marker_41dd3962d6324382db4b4d6b872ca207.setIcon(
  icon_8e4ac3933cca40d7168f2dec1d52b583
);

var marker_86286741b28c5605d560c467a8d929d1 = L.marker(
  [18.991, 72.8485],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_33c5715cde8351794e59fa8cfee12ac0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a884857347d05a47f8ebff4e14d3afe5 = L.popup({
  maxWidth: 350,
});

var html_cd6670253e4d651437fb3da8703b594c = $(
  `<div id="html_cd6670253e4d651437fb3da8703b594c" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Cotton Green</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Cotton Green Railyard, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 30.0651389 kWh<br>     <b>Charging Duration:</b> 0.84 mins<br>     <b>Charging Rate:</b> 35.87112113 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a884857347d05a47f8ebff4e14d3afe5.setContent(
  html_cd6670253e4d651437fb3da8703b594c
);

marker_86286741b28c5605d560c467a8d929d1.bindPopup(
  popup_a884857347d05a47f8ebff4e14d3afe5
);

marker_86286741b28c5605d560c467a8d929d1.bindTooltip(
  `<div>
                     Tata Power - Cotton Green
                 </div>`,
  {
    sticky: true,
  }
);

marker_86286741b28c5605d560c467a8d929d1.setIcon(
  icon_33c5715cde8351794e59fa8cfee12ac0
);

var marker_5c58411bf8ba030dab2f6aa17323ac54 = L.marker(
  [19.0756, 72.8322],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c03e19cd58e897e8dec07fcd758f3f87 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_979c0a3b8a25265481843f0f3710bcd3 = L.popup({
  maxWidth: 350,
});

var html_52f38e341c1510813d25fe6be5948b96 = $(
  `<div id="html_52f38e341c1510813d25fe6be5948b96" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Khar West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Khar Danda Road, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 47.37743937 kWh<br>     <b>Charging Duration:</b> 0.98 mins<br>     <b>Charging Rate:</b> 48.16033463 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_979c0a3b8a25265481843f0f3710bcd3.setContent(
  html_52f38e341c1510813d25fe6be5948b96
);

marker_5c58411bf8ba030dab2f6aa17323ac54.bindPopup(
  popup_979c0a3b8a25265481843f0f3710bcd3
);

marker_5c58411bf8ba030dab2f6aa17323ac54.bindTooltip(
  `<div>
                     Tata Power - Khar West
                 </div>`,
  {
    sticky: true,
  }
);

marker_5c58411bf8ba030dab2f6aa17323ac54.setIcon(
  icon_c03e19cd58e897e8dec07fcd758f3f87
);

var marker_70cc16c956c6bcb550ceb3cfe11d287d = L.marker(
  [19.2104, 72.8572],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_94212a56ab19c5395f456dcee4a90909 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f4d9873f60d8a7db4a8d1a2d1fc95438 = L.popup({
  maxWidth: 350,
});

var html_ecd28d0cd17391c57063225273dd6a3a = $(
  `<div id="html_ecd28d0cd17391c57063225273dd6a3a" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Kandivali</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Kandivali East, Next to Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 78.69341922 kWh<br>     <b>Charging Duration:</b> 2.15 mins<br>     <b>Charging Rate:</b> 36.56255637 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f4d9873f60d8a7db4a8d1a2d1fc95438.setContent(
  html_ecd28d0cd17391c57063225273dd6a3a
);

marker_70cc16c956c6bcb550ceb3cfe11d287d.bindPopup(
  popup_f4d9873f60d8a7db4a8d1a2d1fc95438
);

marker_70cc16c956c6bcb550ceb3cfe11d287d.bindTooltip(
  `<div>
                     EVteQ - Kandivali
                 </div>`,
  {
    sticky: true,
  }
);

marker_70cc16c956c6bcb550ceb3cfe11d287d.setIcon(
  icon_94212a56ab19c5395f456dcee4a90909
);

var marker_c9e315e5251d94c7f6a243c90bc5b10a = L.marker(
  [19.0977, 72.8271],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_073bed23e9fdad7f4ce937629fa1c6bf = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_96884af543d1a42737ff61a38d4babfb = L.popup({
  maxWidth: 350,
});

var html_2400680a609bacd5458609be424360e2 = $(
  `<div id="html_2400680a609bacd5458609be424360e2" style="width: 100.0%; height: 100.0%;">     <h4>ChargeAndDrive - Juhu</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Juhu Tara Rd, Near Juhu Beach, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 40.2483826 kWh<br>     <b>Charging Duration:</b> 1.19 mins<br>     <b>Charging Rate:</b> 33.73226426 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_96884af543d1a42737ff61a38d4babfb.setContent(
  html_2400680a609bacd5458609be424360e2
);

marker_c9e315e5251d94c7f6a243c90bc5b10a.bindPopup(
  popup_96884af543d1a42737ff61a38d4babfb
);

marker_c9e315e5251d94c7f6a243c90bc5b10a.bindTooltip(
  `<div>
                     ChargeAndDrive - Juhu
                 </div>`,
  {
    sticky: true,
  }
);

marker_c9e315e5251d94c7f6a243c90bc5b10a.setIcon(
  icon_073bed23e9fdad7f4ce937629fa1c6bf
);

var marker_dc2f4382cced4257014b457b6489a6d2 = L.marker(
  [19.15381142, 72.85579572],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a1f77a07be2eaeb5fdc0814148752f7e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_38447a587b2073dd6cade81add0ec613 = L.popup({
  maxWidth: 350,
});

var html_d982ada687abee5091cde748f6745634 = $(
  `<div id="html_d982ada687abee5091cde748f6745634" style="width: 100.0%; height: 100.0%;">     <h4>Lodha Florenza</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> On Western Express Highway, adjacent to Hub Mall, Cama Industrial Estate, Goregaon, Mumbai, Maharashtra ,Goregaon<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 56.06879095 kWh<br>     <b>Charging Duration:</b> 1.99 mins<br>     <b>Charging Rate:</b> 28.16853365 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_38447a587b2073dd6cade81add0ec613.setContent(
  html_d982ada687abee5091cde748f6745634
);

marker_dc2f4382cced4257014b457b6489a6d2.bindPopup(
  popup_38447a587b2073dd6cade81add0ec613
);

marker_dc2f4382cced4257014b457b6489a6d2.bindTooltip(
  `<div>
                     Lodha Florenza
                 </div>`,
  {
    sticky: true,
  }
);

marker_dc2f4382cced4257014b457b6489a6d2.setIcon(
  icon_a1f77a07be2eaeb5fdc0814148752f7e
);

var marker_00092c5925e8763392e27e7f565b35bf = L.marker(
  [19.0640261, 73.01971543],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b14831e7625525f52229ff1e9cfc47d5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f6b6cba6ec3f183ea5e76318de5a4501 = L.popup({
  maxWidth: 350,
});

var html_141b32569e151280e45ead2e4e965406 = $(
  `<div id="html_141b32569e151280e45ead2e4e965406" style="width: 100.0%; height: 100.0%;">     <h4>Hotel Yogi Midtown</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Plot No DX 12,Thane - Belapur Road D' Zone Bonsari, Village, TTC Industrial Area, Turbhe, Navi Mumbai, Maharashtra ,Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 65.04979561 kWh<br>     <b>Charging Duration:</b> 2.88 mins<br>     <b>Charging Rate:</b> 22.55945181 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_f6b6cba6ec3f183ea5e76318de5a4501.setContent(
  html_141b32569e151280e45ead2e4e965406
);

marker_00092c5925e8763392e27e7f565b35bf.bindPopup(
  popup_f6b6cba6ec3f183ea5e76318de5a4501
);

marker_00092c5925e8763392e27e7f565b35bf.bindTooltip(
  `<div>
                     Hotel Yogi Midtown
                 </div>`,
  {
    sticky: true,
  }
);

marker_00092c5925e8763392e27e7f565b35bf.setIcon(
  icon_b14831e7625525f52229ff1e9cfc47d5
);

var marker_52dd959028a52fddba9a1b6860ad3225 = L.marker(
  [18.9218, 72.8347],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a87b242bef50e8f3bfbe7d9c73ec42e8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6d78a81b40d48214631b5c18f206ffcc = L.popup({
  maxWidth: 350,
});

var html_5f6422dd08028e5b68a9289297cd9a3f = $(
  `<div id="html_5f6422dd08028e5b68a9289297cd9a3f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Gateway of India</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Apollo Bunder Road, Colaba, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.87061708 kWh<br>     <b>Energy Consumed:</b> 23.57128154 kWh<br>     <b>Charging Duration:</b> 0.47 mins<br>     <b>Charging Rate:</b> 49.78371903 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_6d78a81b40d48214631b5c18f206ffcc.setContent(
  html_5f6422dd08028e5b68a9289297cd9a3f
);

marker_52dd959028a52fddba9a1b6860ad3225.bindPopup(
  popup_6d78a81b40d48214631b5c18f206ffcc
);

marker_52dd959028a52fddba9a1b6860ad3225.bindTooltip(
  `<div>
                     Tata Power - Gateway of India
                 </div>`,
  {
    sticky: true,
  }
);

marker_52dd959028a52fddba9a1b6860ad3225.setIcon(
  icon_a87b242bef50e8f3bfbe7d9c73ec42e8
);

var marker_01810c736c4242755f52d67d81b3c74a = L.marker(
  [18.9563188, 73.1626506],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_91700abfc975a27c1c2de7114ac7c727 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8c771815b4512ba8cf8ac8829c95fda6 = L.popup({
  maxWidth: 350,
});

var html_a46b294422dfc73f51379ea21636f0b4 = $(
  `<div id="html_a46b294422dfc73f51379ea21636f0b4" style="width: 100.0%; height: 100.0%;">     <h4>Trimurti Petroleum, Panvel</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> GUT NO.151/2, VILLAGE - AJIVALI, TALUKA - PANVEL, RAIGAD, AJIVALI, 410216<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 45.57396766 kWh<br>     <b>Charging Duration:</b> 4.11 mins<br>     <b>Charging Rate:</b> 11.089827 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_8c771815b4512ba8cf8ac8829c95fda6.setContent(
  html_a46b294422dfc73f51379ea21636f0b4
);

marker_01810c736c4242755f52d67d81b3c74a.bindPopup(
  popup_8c771815b4512ba8cf8ac8829c95fda6
);

marker_01810c736c4242755f52d67d81b3c74a.bindTooltip(
  `<div>
                     Trimurti Petroleum, Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_01810c736c4242755f52d67d81b3c74a.setIcon(
  icon_91700abfc975a27c1c2de7114ac7c727
);

var marker_14451f14dcc5b68ec1e7ac5e31291c57 = L.marker(
  [19.2336, 73.1353],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_067ccf3c129cd93b6b70727393881dae = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7a90413eaaa0961ad52bb0f8ab6dfd88 = L.popup({
  maxWidth: 350,
});

var html_cb8f210b53890afc7ac20451399d074d = $(
  `<div id="html_cb8f210b53890afc7ac20451399d074d" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Ulhasnagar</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Ulhasnagar Station, Mumbai Region<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 54.6408791 kWh<br>     <b>Charging Duration:</b> 2.77 mins<br>     <b>Charging Rate:</b> 19.70948849 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7a90413eaaa0961ad52bb0f8ab6dfd88.setContent(
  html_cb8f210b53890afc7ac20451399d074d
);

marker_14451f14dcc5b68ec1e7ac5e31291c57.bindPopup(
  popup_7a90413eaaa0961ad52bb0f8ab6dfd88
);

marker_14451f14dcc5b68ec1e7ac5e31291c57.bindTooltip(
  `<div>
                     Statiq - Ulhasnagar
                 </div>`,
  {
    sticky: true,
  }
);

marker_14451f14dcc5b68ec1e7ac5e31291c57.setIcon(
  icon_067ccf3c129cd93b6b70727393881dae
);

var marker_cacc62b456cef934759df72ac84e8014 = L.marker(
  [19.0815, 72.8367],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_eff2a5e528487438c64d4b661b2f7185 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ee0cd36e2cee5db5861595292c65f926 = L.popup({
  maxWidth: 350,
});

var html_fddaf7525af772f42c23803d8d58eb28 = $(
  `<div id="html_fddaf7525af772f42c23803d8d58eb28" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Santacruz</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Santacruz West, Next to Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 56.01783154 kWh<br>     <b>Charging Duration:</b> 1.48 mins<br>     <b>Charging Rate:</b> 37.85307848 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ee0cd36e2cee5db5861595292c65f926.setContent(
  html_fddaf7525af772f42c23803d8d58eb28
);

marker_cacc62b456cef934759df72ac84e8014.bindPopup(
  popup_ee0cd36e2cee5db5861595292c65f926
);

marker_cacc62b456cef934759df72ac84e8014.bindTooltip(
  `<div>
                     ATUM Charge - Santacruz
                 </div>`,
  {
    sticky: true,
  }
);

marker_cacc62b456cef934759df72ac84e8014.setIcon(
  icon_eff2a5e528487438c64d4b661b2f7185
);

var marker_b4b5f9412a0e5a11d266196cd8887988 = L.marker(
  [19.1341, 72.9297],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_520cf88e12595a2738b30a68cda1fe04 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_528f67525e2577840d46c3b5f36122a5 = L.popup({
  maxWidth: 350,
});

var html_9c99d4fd69bafb5218ece9cd117c4b5f = $(
  `<div id="html_9c99d4fd69bafb5218ece9cd117c4b5f" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Kanjurmarg</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Kanjurmarg East Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 118.8974904 kWh<br>     <b>Charging Duration:</b> 12.8 mins<br>     <b>Charging Rate:</b> 9.2864977 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_528f67525e2577840d46c3b5f36122a5.setContent(
  html_9c99d4fd69bafb5218ece9cd117c4b5f
);

marker_b4b5f9412a0e5a11d266196cd8887988.bindPopup(
  popup_528f67525e2577840d46c3b5f36122a5
);

marker_b4b5f9412a0e5a11d266196cd8887988.bindTooltip(
  `<div>
                     Statiq - Kanjurmarg
                 </div>`,
  {
    sticky: true,
  }
);

marker_b4b5f9412a0e5a11d266196cd8887988.setIcon(
  icon_520cf88e12595a2738b30a68cda1fe04
);

var marker_79d35dc5657592fe1755647397529109 = L.marker(
  [19.0864, 72.9085],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_24f8ea5304afbd228eeabc0f0a9a4a54 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_90666be67c5001774cb29d69d97e99ce = L.popup({
  maxWidth: 350,
});

var html_b4354d48d1f3b43d3baa2e0fb74ce4e8 = $(
  `<div id="html_b4354d48d1f3b43d3baa2e0fb74ce4e8" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Ghatkopar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Near Ghatkopar Metro Station, Ghatkopar West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 41.15701391 kWh<br>     <b>Charging Duration:</b> 1.26 mins<br>     <b>Charging Rate:</b> 32.59959954 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_90666be67c5001774cb29d69d97e99ce.setContent(
  html_b4354d48d1f3b43d3baa2e0fb74ce4e8
);

marker_79d35dc5657592fe1755647397529109.bindPopup(
  popup_90666be67c5001774cb29d69d97e99ce
);

marker_79d35dc5657592fe1755647397529109.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Ghatkopar
                 </div>`,
  {
    sticky: true,
  }
);

marker_79d35dc5657592fe1755647397529109.setIcon(
  icon_24f8ea5304afbd228eeabc0f0a9a4a54
);

var marker_750d57f49170e54014ccae0144c28d06 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e4ff2d9c91eb85c106eb44b9fcbe2f11 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_14e2eef67a3ddbd52571d8d852aaa301 = L.popup({
  maxWidth: 350,
});

var html_d31b5e81fcfaa454cd4187d76b3bb6ad = $(
  `<div id="html_d31b5e81fcfaa454cd4187d76b3bb6ad" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 71.14274636 kWh<br>     <b>Charging Duration:</b> 4.8 mins<br>     <b>Charging Rate:</b> 14.82991098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_14e2eef67a3ddbd52571d8d852aaa301.setContent(
  html_d31b5e81fcfaa454cd4187d76b3bb6ad
);

marker_750d57f49170e54014ccae0144c28d06.bindPopup(
  popup_14e2eef67a3ddbd52571d8d852aaa301
);

marker_750d57f49170e54014ccae0144c28d06.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_750d57f49170e54014ccae0144c28d06.setIcon(
  icon_e4ff2d9c91eb85c106eb44b9fcbe2f11
);

var marker_ac15d1f68617772b5697e5842e7e518e = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f7a1a97a6b432a4839997f93df19e7e5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a9c711a39fd9efc572451c03653e522a = L.popup({
  maxWidth: 350,
});

var html_6876ec7a623da017338740989230a7b4 = $(
  `<div id="html_6876ec7a623da017338740989230a7b4" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 71.14274636 kWh<br>     <b>Charging Duration:</b> 4.8 mins<br>     <b>Charging Rate:</b> 14.82991098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a9c711a39fd9efc572451c03653e522a.setContent(
  html_6876ec7a623da017338740989230a7b4
);

marker_ac15d1f68617772b5697e5842e7e518e.bindPopup(
  popup_a9c711a39fd9efc572451c03653e522a
);

marker_ac15d1f68617772b5697e5842e7e518e.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_ac15d1f68617772b5697e5842e7e518e.setIcon(
  icon_f7a1a97a6b432a4839997f93df19e7e5
);

var marker_d8cb848aaff7c227ab1fe46f2ffeb245 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c339b738f429c9494629e4512fe2de15 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a42ac9d802cdff407a8c40a50501f191 = L.popup({
  maxWidth: 350,
});

var html_937a385c902ce8f8880ddbecd2d2ac73 = $(
  `<div id="html_937a385c902ce8f8880ddbecd2d2ac73" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 71.14274636 kWh<br>     <b>Charging Duration:</b> 4.8 mins<br>     <b>Charging Rate:</b> 14.82991098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a42ac9d802cdff407a8c40a50501f191.setContent(
  html_937a385c902ce8f8880ddbecd2d2ac73
);

marker_d8cb848aaff7c227ab1fe46f2ffeb245.bindPopup(
  popup_a42ac9d802cdff407a8c40a50501f191
);

marker_d8cb848aaff7c227ab1fe46f2ffeb245.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_d8cb848aaff7c227ab1fe46f2ffeb245.setIcon(
  icon_c339b738f429c9494629e4512fe2de15
);

var marker_f132b95ad60ebbe737f642f028d5afe8 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_5ccfa52d6be47f4569e96aa32857cd62 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9db060c3c23191fbd8371c353c12869e = L.popup({
  maxWidth: 350,
});

var html_39d94c7681f8d26b6eccdddac79da48d = $(
  `<div id="html_39d94c7681f8d26b6eccdddac79da48d" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 71.14274636 kWh<br>     <b>Charging Duration:</b> 4.8 mins<br>     <b>Charging Rate:</b> 14.82991098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9db060c3c23191fbd8371c353c12869e.setContent(
  html_39d94c7681f8d26b6eccdddac79da48d
);

marker_f132b95ad60ebbe737f642f028d5afe8.bindPopup(
  popup_9db060c3c23191fbd8371c353c12869e
);

marker_f132b95ad60ebbe737f642f028d5afe8.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_f132b95ad60ebbe737f642f028d5afe8.setIcon(
  icon_5ccfa52d6be47f4569e96aa32857cd62
);

var marker_80fa84493e8652556e008b01b1a4748a = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_bfc4968125fe89996753905a507c7ee6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f3d92d7419b9427a7057cc6ae79f3af5 = L.popup({
  maxWidth: 350,
});

var html_f953107872635bdbcdfd817215e6b4bd = $(
  `<div id="html_f953107872635bdbcdfd817215e6b4bd" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 71.14274636 kWh<br>     <b>Charging Duration:</b> 4.8 mins<br>     <b>Charging Rate:</b> 14.82991098 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f3d92d7419b9427a7057cc6ae79f3af5.setContent(
  html_f953107872635bdbcdfd817215e6b4bd
);

marker_80fa84493e8652556e008b01b1a4748a.bindPopup(
  popup_f3d92d7419b9427a7057cc6ae79f3af5
);

marker_80fa84493e8652556e008b01b1a4748a.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_80fa84493e8652556e008b01b1a4748a.setIcon(
  icon_bfc4968125fe89996753905a507c7ee6
);

var marker_1bb54c8dccc26ea73492fa42f02552bc = L.marker(
  [19.11999443, 72.9141036],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_cb546c2bc4a17c8d8d855ea6b98e680c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_aa424cbb87dfeebd23393990e98842be = L.popup({
  maxWidth: 350,
});

var html_45b9c804b78228a51ac3aba6a57f1fd5 = $(
  `<div id="html_45b9c804b78228a51ac3aba6a57f1fd5" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 21.82050637 kWh<br>     <b>Charging Duration:</b> 0.22 mins<br>     <b>Charging Rate:</b> 97.3422547 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_aa424cbb87dfeebd23393990e98842be.setContent(
  html_45b9c804b78228a51ac3aba6a57f1fd5
);

marker_1bb54c8dccc26ea73492fa42f02552bc.bindPopup(
  popup_aa424cbb87dfeebd23393990e98842be
);

marker_1bb54c8dccc26ea73492fa42f02552bc.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_1bb54c8dccc26ea73492fa42f02552bc.setIcon(
  icon_cb546c2bc4a17c8d8d855ea6b98e680c
);

var marker_6df790df1a43c98d9f52a3b29b2c283e = L.marker(
  [19.12, 72.9141],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2e62f39c17012f3ae3c6d2a75ce8f0b5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6bb296a9f95edab4c7a28ff35e8dce2a = L.popup({
  maxWidth: 350,
});

var html_597af61213afd3ae962f4d1547f92c79 = $(
  `<div id="html_597af61213afd3ae962f4d1547f92c79" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 21.82050637 kWh<br>     <b>Charging Duration:</b> 0.22 mins<br>     <b>Charging Rate:</b> 97.3422547 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_6bb296a9f95edab4c7a28ff35e8dce2a.setContent(
  html_597af61213afd3ae962f4d1547f92c79
);

marker_6df790df1a43c98d9f52a3b29b2c283e.bindPopup(
  popup_6bb296a9f95edab4c7a28ff35e8dce2a
);

marker_6df790df1a43c98d9f52a3b29b2c283e.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_6df790df1a43c98d9f52a3b29b2c283e.setIcon(
  icon_2e62f39c17012f3ae3c6d2a75ce8f0b5
);

var marker_6c1d40b0b8ae78ec57892b3dbe8c7b34 = L.marker(
  [19.1142415, 72.8518766],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_66223de0e5587f0b485ce1ef29f7dc81 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_14370b9f58a8e436fa2f9bdd91969d4e = L.popup({
  maxWidth: 350,
});

var html_fc4b7977554638a7fee9a8393a95655d = $(
  `<div id="html_fc4b7977554638a7fee9a8393a95655d" style="width: 100.0%; height: 100.0%;">     <h4>Hotel Suba Galaxy, Andheri East</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> NS Phadake Marg, Opp Teli galli,Near Eastern expres Highway, Andheri East Mumbai 400069u00c2u00a0<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 47.31460938 kWh<br>     <b>Charging Duration:</b> 4.66 mins<br>     <b>Charging Rate:</b> 10.16337295 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_14370b9f58a8e436fa2f9bdd91969d4e.setContent(
  html_fc4b7977554638a7fee9a8393a95655d
);

marker_6c1d40b0b8ae78ec57892b3dbe8c7b34.bindPopup(
  popup_14370b9f58a8e436fa2f9bdd91969d4e
);

marker_6c1d40b0b8ae78ec57892b3dbe8c7b34.bindTooltip(
  `<div>
                     Hotel Suba Galaxy, Andheri East
                 </div>`,
  {
    sticky: true,
  }
);

marker_6c1d40b0b8ae78ec57892b3dbe8c7b34.setIcon(
  icon_66223de0e5587f0b485ce1ef29f7dc81
);

var marker_702d1fd5a36fa219025c53b8e1f6c20c = L.marker(
  [19.0494, 73.1166],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f0f1d3738dbdcd561e66bb3f236dfe02 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_fa1fa1d9c973c103903a2b5d0d05f97c = L.popup({
  maxWidth: 350,
});

var html_6ab15d2389ab529bfbc87d38e7644a8f = $(
  `<div id="html_6ab15d2389ab529bfbc87d38e7644a8f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Taloja Station</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Taloja Panchanand Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 63.62653233 kWh<br>     <b>Charging Duration:</b> 6.37 mins<br>     <b>Charging Rate:</b> 9.986771923 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_fa1fa1d9c973c103903a2b5d0d05f97c.setContent(
  html_6ab15d2389ab529bfbc87d38e7644a8f
);

marker_702d1fd5a36fa219025c53b8e1f6c20c.bindPopup(
  popup_fa1fa1d9c973c103903a2b5d0d05f97c
);

marker_702d1fd5a36fa219025c53b8e1f6c20c.bindTooltip(
  `<div>
                     Tata Power - Taloja Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_702d1fd5a36fa219025c53b8e1f6c20c.setIcon(
  icon_f0f1d3738dbdcd561e66bb3f236dfe02
);

var marker_fc88b28dfdf0c67dd1545e05673de56b = L.marker(
  [18.9563188, 73.1626506],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4d0c6b07f91aaf70fd64695fbfce36e5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1e52878c0db0273c973cefdc83e20a88 = L.popup({
  maxWidth: 350,
});

var html_27550b8f5ad8c64f2c2bf58b8f58caf8 = $(
  `<div id="html_27550b8f5ad8c64f2c2bf58b8f58caf8" style="width: 100.0%; height: 100.0%;">     <h4>Trimurti Petroleum, Panvel</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> GUT NO.151/2, VILLAGE - AJIVALI, TALUKA - PANVEL, RAIGAD, AJIVALI, 410216<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 8.349591228 kWh<br>     <b>Charging Duration:</b> 0.18 mins<br>     <b>Charging Rate:</b> 47.48218949 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_1e52878c0db0273c973cefdc83e20a88.setContent(
  html_27550b8f5ad8c64f2c2bf58b8f58caf8
);

marker_fc88b28dfdf0c67dd1545e05673de56b.bindPopup(
  popup_1e52878c0db0273c973cefdc83e20a88
);

marker_fc88b28dfdf0c67dd1545e05673de56b.bindTooltip(
  `<div>
                     Trimurti Petroleum, Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_fc88b28dfdf0c67dd1545e05673de56b.setIcon(
  icon_4d0c6b07f91aaf70fd64695fbfce36e5
);

var marker_ef74cea3fc8d89101887d9816d062631 = L.marker(
  [19.3134, 72.8476],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a0034531def33036ac0f846059f29307 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a5ab8c82101e4f9f02b05ed111f587de = L.popup({
  maxWidth: 350,
});

var html_bc5a7b4542bfa26d3912974af73ae3d3 = $(
  `<div id="html_bc5a7b4542bfa26d3912974af73ae3d3" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bhayandar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Bhayandar West Station Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 13.48519533 kWh<br>     <b>Charging Duration:</b> 0.45 mins<br>     <b>Charging Rate:</b> 29.87310551 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_a5ab8c82101e4f9f02b05ed111f587de.setContent(
  html_bc5a7b4542bfa26d3912974af73ae3d3
);

marker_ef74cea3fc8d89101887d9816d062631.bindPopup(
  popup_a5ab8c82101e4f9f02b05ed111f587de
);

marker_ef74cea3fc8d89101887d9816d062631.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bhayandar
                 </div>`,
  {
    sticky: true,
  }
);

marker_ef74cea3fc8d89101887d9816d062631.setIcon(
  icon_a0034531def33036ac0f846059f29307
);

var marker_a0a70dccc8e9b19e3556f55064318411 = L.marker(
  [19.0387, 73.0222],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2b889aa610bd43e71919f3d6b28d28cd = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5587e4822c930f71af8bc2f6bfdf0d52 = L.popup({
  maxWidth: 350,
});

var html_ce160b7132daa2d2949c4d943213291a = $(
  `<div id="html_ce160b7132daa2d2949c4d943213291a" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Navi Mumbai</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Seawoods Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 70.99471727 kWh<br>     <b>Charging Duration:</b> 5.65 mins<br>     <b>Charging Rate:</b> 12.56141232 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_5587e4822c930f71af8bc2f6bfdf0d52.setContent(
  html_ce160b7132daa2d2949c4d943213291a
);

marker_a0a70dccc8e9b19e3556f55064318411.bindPopup(
  popup_5587e4822c930f71af8bc2f6bfdf0d52
);

marker_a0a70dccc8e9b19e3556f55064318411.bindTooltip(
  `<div>
                     Statiq - Navi Mumbai
                 </div>`,
  {
    sticky: true,
  }
);

marker_a0a70dccc8e9b19e3556f55064318411.setIcon(
  icon_2b889aa610bd43e71919f3d6b28d28cd
);

var marker_59b11d0b6cd3b2d39634f2e6de126551 = L.marker(
  [19.0549, 72.9038],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_379ca812bd5f76342ebb9ad6af3c29dd = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_25d786a763042b3cd3ab9c824f9d4ec8 = L.popup({
  maxWidth: 350,
});

var html_11cc54e28f3cdfa7463604f8de93126f = $(
  `<div id="html_11cc54e28f3cdfa7463604f8de93126f" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Chembur</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Chembur Station East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 89.03206383 kWh<br>     <b>Energy Consumed:</b> 78.64289917 kWh<br>     <b>Charging Duration:</b> 2.26 mins<br>     <b>Charging Rate:</b> 34.823951 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_25d786a763042b3cd3ab9c824f9d4ec8.setContent(
  html_11cc54e28f3cdfa7463604f8de93126f
);

marker_59b11d0b6cd3b2d39634f2e6de126551.bindPopup(
  popup_25d786a763042b3cd3ab9c824f9d4ec8
);

marker_59b11d0b6cd3b2d39634f2e6de126551.bindTooltip(
  `<div>
                     ChargeZone - Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_59b11d0b6cd3b2d39634f2e6de126551.setIcon(
  icon_379ca812bd5f76342ebb9ad6af3c29dd
);

var marker_edc2ee3f87199f07727cfc666262817f = L.marker(
  [19.1146146, 72.8840941],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_52540de08911fd198c39fc8f5feee52c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a40ef7768e23f6952abe8306c20d755b = L.popup({
  maxWidth: 350,
});

var html_5bf4c730f92c30f78759c7e2c6914184 = $(
  `<div id="html_5bf4c730f92c30f78759c7e2c6914184" style="width: 100.0%; height: 100.0%;">     <h4>Vasant oasis</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Borosil Plot,off, Makwana Rd, Marol, Andheri East, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 75.18617181 kWh<br>     <b>Charging Duration:</b> 1.41 mins<br>     <b>Charging Rate:</b> 53.1747828 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a40ef7768e23f6952abe8306c20d755b.setContent(
  html_5bf4c730f92c30f78759c7e2c6914184
);

marker_edc2ee3f87199f07727cfc666262817f.bindPopup(
  popup_a40ef7768e23f6952abe8306c20d755b
);

marker_edc2ee3f87199f07727cfc666262817f.bindTooltip(
  `<div>
                     Vasant oasis
                 </div>`,
  {
    sticky: true,
  }
);

marker_edc2ee3f87199f07727cfc666262817f.setIcon(
  icon_52540de08911fd198c39fc8f5feee52c
);

var marker_ed7c2aaf646a33ad53ee3fd9074b5ee3 = L.marker(
  [19.0585, 72.8557],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_691f02d4092d8b2e0d9153ec3686a6a4 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ced8a022c106e8f60aedbc7eca48940b = L.popup({
  maxWidth: 350,
});

var html_d4beb581b1db43ea3a7a40365bae9a31 = $(
  `<div id="html_d4beb581b1db43ea3a7a40365bae9a31" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - BKC Substation</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Near Asian Heart Hospital, Opp Bharat Diamond Bourse, Bandra East, Mumbai, MH 400051<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 15.27366667 kWh<br>     <b>Charging Duration:</b> 2.84 mins<br>     <b>Charging Rate:</b> 5.37038419 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ced8a022c106e8f60aedbc7eca48940b.setContent(
  html_d4beb581b1db43ea3a7a40365bae9a31
);

marker_ed7c2aaf646a33ad53ee3fd9074b5ee3.bindPopup(
  popup_ced8a022c106e8f60aedbc7eca48940b
);

marker_ed7c2aaf646a33ad53ee3fd9074b5ee3.bindTooltip(
  `<div>
                     Tata Power - BKC Substation
                 </div>`,
  {
    sticky: true,
  }
);

marker_ed7c2aaf646a33ad53ee3fd9074b5ee3.setIcon(
  icon_691f02d4092d8b2e0d9153ec3686a6a4
);

var marker_3ab056e043a4e8894f2b27cc8f3980b9 = L.marker(
  [18.99453515, 73.11513242],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_14af21f782a76b445d32c2dd237eee59 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e676116f913874c0d285b97c68341ee7 = L.popup({
  maxWidth: 350,
});

var html_db4eed86ba0f305220b31b02ac22b895 = $(
  `<div id="html_db4eed86ba0f305220b31b02ac22b895" style="width: 100.0%; height: 100.0%;">     <h4>HOTEL REDWINGS CASTLE</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Near to Orion Mall/ New Panvel Bridge, Old, Mumbai - Pune Expy,<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 44.15948701 kWh<br>     <b>Charging Duration:</b> 1.86 mins<br>     <b>Charging Rate:</b> 23.75243532 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e676116f913874c0d285b97c68341ee7.setContent(
  html_db4eed86ba0f305220b31b02ac22b895
);

marker_3ab056e043a4e8894f2b27cc8f3980b9.bindPopup(
  popup_e676116f913874c0d285b97c68341ee7
);

marker_3ab056e043a4e8894f2b27cc8f3980b9.bindTooltip(
  `<div>
                     HOTEL REDWINGS CASTLE
                 </div>`,
  {
    sticky: true,
  }
);

marker_3ab056e043a4e8894f2b27cc8f3980b9.setIcon(
  icon_14af21f782a76b445d32c2dd237eee59
);

var marker_81393b710d0d61aad928d96ac35f3577 = L.marker(
  [19.11599, 72.85018],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_650708410428c9a8ec73363171cc813b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_27337858b53fffd0bae82813212890f9 = L.popup({
  maxWidth: 350,
});

var html_5b01070b77268e7450fd589bace0d0b2 = $(
  `<div id="html_5b01070b77268e7450fd589bace0d0b2" style="width: 100.0%; height: 100.0%;">     <h4>Ginger Mumbai, Andheri East</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Teli - Gali Road, Andheri (East), Mumbai - 400069<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 20.46478094 kWh<br>     <b>Charging Duration:</b> 1.1 mins<br>     <b>Charging Rate:</b> 18.59949061 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_27337858b53fffd0bae82813212890f9.setContent(
  html_5b01070b77268e7450fd589bace0d0b2
);

marker_81393b710d0d61aad928d96ac35f3577.bindPopup(
  popup_27337858b53fffd0bae82813212890f9
);

marker_81393b710d0d61aad928d96ac35f3577.bindTooltip(
  `<div>
                     Ginger Mumbai, Andheri East
                 </div>`,
  {
    sticky: true,
  }
);

marker_81393b710d0d61aad928d96ac35f3577.setIcon(
  icon_650708410428c9a8ec73363171cc813b
);

var marker_fd392cf8d74fc62bf01cf444905cbe8c = L.marker(
  [18.9677, 72.8055],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_261f5b2aeb23d111a60670ab1b91788a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9392a54d760d5f47362ff79305cb2664 = L.popup({
  maxWidth: 350,
});

var html_78b9cd95ef8ff87fd0bab5007af0bdf0 = $(
  `<div id="html_78b9cd95ef8ff87fd0bab5007af0bdf0" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Breach Candy</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Breach Candy Hospital Complex, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 120.5106328 kWh<br>     <b>Energy Consumed:</b> 68.82528251 kWh<br>     <b>Charging Duration:</b> 4.06 mins<br>     <b>Charging Rate:</b> 16.93561005 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_9392a54d760d5f47362ff79305cb2664.setContent(
  html_78b9cd95ef8ff87fd0bab5007af0bdf0
);

marker_fd392cf8d74fc62bf01cf444905cbe8c.bindPopup(
  popup_9392a54d760d5f47362ff79305cb2664
);

marker_fd392cf8d74fc62bf01cf444905cbe8c.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Breach Candy
                 </div>`,
  {
    sticky: true,
  }
);

marker_fd392cf8d74fc62bf01cf444905cbe8c.setIcon(
  icon_261f5b2aeb23d111a60670ab1b91788a
);

var marker_b7075d85b7be940f7a901b90096c135c = L.marker(
  [19.1547, 72.9346],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_571c23f343b1e4dba4117c82a4a08be7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f12fa3b75d5f5f3913293295f2472676 = L.popup({
  maxWidth: 350,
});

var html_8186de5607bc1b80f6ce0827854d6656 = $(
  `<div id="html_8186de5607bc1b80f6ce0827854d6656" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bhandup</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> LBS Marg, Near Bhandup Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 22.57288245 kWh<br>     <b>Charging Duration:</b> 0.54 mins<br>     <b>Charging Rate:</b> 41.5266716 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f12fa3b75d5f5f3913293295f2472676.setContent(
  html_8186de5607bc1b80f6ce0827854d6656
);

marker_b7075d85b7be940f7a901b90096c135c.bindPopup(
  popup_f12fa3b75d5f5f3913293295f2472676
);

marker_b7075d85b7be940f7a901b90096c135c.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bhandup
                 </div>`,
  {
    sticky: true,
  }
);

marker_b7075d85b7be940f7a901b90096c135c.setIcon(
  icon_571c23f343b1e4dba4117c82a4a08be7
);

var marker_ef4409fa19110c626de504099c6902a4 = L.marker(
  [19.0281, 72.8647],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b18eb76295bbfe1960302adadb419439 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_38bee03bdd39ef8717c1cea6783da896 = L.popup({
  maxWidth: 350,
});

var html_85d4329f0543ba58fce0ca5761081f03 = $(
  `<div id="html_85d4329f0543ba58fce0ca5761081f03" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Mahanagar Gas</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> MGL Terminal, Opposite Anik Depot, Wadala, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 22.27571241 kWh<br>     <b>Charging Duration:</b> 1.22 mins<br>     <b>Charging Rate:</b> 18.2090343 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_38bee03bdd39ef8717c1cea6783da896.setContent(
  html_85d4329f0543ba58fce0ca5761081f03
);

marker_ef4409fa19110c626de504099c6902a4.bindPopup(
  popup_38bee03bdd39ef8717c1cea6783da896
);

marker_ef4409fa19110c626de504099c6902a4.bindTooltip(
  `<div>
                     Tata Power - Mahanagar Gas
                 </div>`,
  {
    sticky: true,
  }
);

marker_ef4409fa19110c626de504099c6902a4.setIcon(
  icon_b18eb76295bbfe1960302adadb419439
);

var marker_7341f8503620457b637f81e5a0195e36 = L.marker(
  [19.2403, 73.1258],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_831a8469180bc8536fb36fea45c97612 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3368f44e3a505c524a376f796b04c8ac = L.popup({
  maxWidth: 350,
});

var html_80af5db304eece6d50359e4d62a5340a = $(
  `<div id="html_80af5db304eece6d50359e4d62a5340a" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Kalyan</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Kalyan West, Kalyan, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.11752874 kWh<br>     <b>Charging Duration:</b> 2.15 mins<br>     <b>Charging Rate:</b> 28.40157855 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_3368f44e3a505c524a376f796b04c8ac.setContent(
  html_80af5db304eece6d50359e4d62a5340a
);

marker_7341f8503620457b637f81e5a0195e36.bindPopup(
  popup_3368f44e3a505c524a376f796b04c8ac
);

marker_7341f8503620457b637f81e5a0195e36.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Kalyan
                 </div>`,
  {
    sticky: true,
  }
);

marker_7341f8503620457b637f81e5a0195e36.setIcon(
  icon_831a8469180bc8536fb36fea45c97612
);

var marker_5afc1ebbc8171ccac1e550c00448a312 = L.marker(
  [18.9218, 72.8347],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ee88ee0fb7a57c0615eef703ce516b3f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7256b780c478388b611823e5a97e1c1d = L.popup({
  maxWidth: 350,
});

var html_88f44b2885963387dce64526334ed648 = $(
  `<div id="html_88f44b2885963387dce64526334ed648" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Gateway of India</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Apollo Bunder Road, Colaba, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 36.5318794 kWh<br>     <b>Charging Duration:</b> 7.17 mins<br>     <b>Charging Rate:</b> 5.092837674 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_7256b780c478388b611823e5a97e1c1d.setContent(
  html_88f44b2885963387dce64526334ed648
);

marker_5afc1ebbc8171ccac1e550c00448a312.bindPopup(
  popup_7256b780c478388b611823e5a97e1c1d
);

marker_5afc1ebbc8171ccac1e550c00448a312.bindTooltip(
  `<div>
                     Tata Power - Gateway of India
                 </div>`,
  {
    sticky: true,
  }
);

marker_5afc1ebbc8171ccac1e550c00448a312.setIcon(
  icon_ee88ee0fb7a57c0615eef703ce516b3f
);

var marker_098ef50b330352ea29cd5758e35e326c = L.marker(
  [19.2567, 72.8572],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a6dc9e3b860657ca8332fb150a8db226 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_588ee11b8cad29085471447017272413 = L.popup({
  maxWidth: 350,
});

var html_5f51b77ef8838674176935f9edc470c3 = $(
  `<div id="html_5f51b77ef8838674176935f9edc470c3" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint - Dahisar</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Dahisar Check Naka Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 47.90409794 kWh<br>     <b>Charging Duration:</b> 2.17 mins<br>     <b>Charging Rate:</b> 22.06190557 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_588ee11b8cad29085471447017272413.setContent(
  html_5f51b77ef8838674176935f9edc470c3
);

marker_098ef50b330352ea29cd5758e35e326c.bindPopup(
  popup_588ee11b8cad29085471447017272413
);

marker_098ef50b330352ea29cd5758e35e326c.bindTooltip(
  `<div>
                     VoltaPoint - Dahisar
                 </div>`,
  {
    sticky: true,
  }
);

marker_098ef50b330352ea29cd5758e35e326c.setIcon(
  icon_a6dc9e3b860657ca8332fb150a8db226
);

var marker_76202a7eeae2df7b2b0422b236dc11c7 = L.marker(
  [19.1787, 72.8446],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4f6f576b890007b76f4bdc31599d2fc7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_dcfb2f58b7f323d1c7a40b51e6f220b4 = L.popup({
  maxWidth: 350,
});

var html_0277b9568c8dc9530d21c1c095abffff = $(
  `<div id="html_0277b9568c8dc9530d21c1c095abffff" style="width: 100.0%; height: 100.0%;">     <h4>EV Dock - Malad</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> G-603/604, Vasari Hill Rd, Malad, Sunder Nagar, Goregaon West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 79.00225971 kWh<br>     <b>Charging Duration:</b> 2.93 mins<br>     <b>Charging Rate:</b> 26.97742286 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_dcfb2f58b7f323d1c7a40b51e6f220b4.setContent(
  html_0277b9568c8dc9530d21c1c095abffff
);

marker_76202a7eeae2df7b2b0422b236dc11c7.bindPopup(
  popup_dcfb2f58b7f323d1c7a40b51e6f220b4
);

marker_76202a7eeae2df7b2b0422b236dc11c7.bindTooltip(
  `<div>
                     EV Dock - Malad
                 </div>`,
  {
    sticky: true,
  }
);

marker_76202a7eeae2df7b2b0422b236dc11c7.setIcon(
  icon_4f6f576b890007b76f4bdc31599d2fc7
);

var marker_8b82fc8fa6d6a23d7ef464aaaf357424 = L.marker(
  [19.137, 72.8261],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0e02c11dfd96d36ffe88b8fb10a0973e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e9084063a70e88fb8a0daaa395187169 = L.popup({
  maxWidth: 350,
});

var html_a7768752a56f9ebf3dcc02fe75b9553b = $(
  `<div id="html_a7768752a56f9ebf3dcc02fe75b9553b" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Versova</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Versova Metro Station, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 51.62169093 kWh<br>     <b>Charging Duration:</b> 1.2 mins<br>     <b>Charging Rate:</b> 43.16138737 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_e9084063a70e88fb8a0daaa395187169.setContent(
  html_a7768752a56f9ebf3dcc02fe75b9553b
);

marker_8b82fc8fa6d6a23d7ef464aaaf357424.bindPopup(
  popup_e9084063a70e88fb8a0daaa395187169
);

marker_8b82fc8fa6d6a23d7ef464aaaf357424.bindTooltip(
  `<div>
                     ChargeZone - Versova
                 </div>`,
  {
    sticky: true,
  }
);

marker_8b82fc8fa6d6a23d7ef464aaaf357424.setIcon(
  icon_0e02c11dfd96d36ffe88b8fb10a0973e
);

var marker_5e2ba97358967c2cbf8e2521c5a66dff = L.marker(
  [19.11637, 72.91086],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9170755429f436c5ab2840a7fcb87439 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6c7b8ffac37d2d067d9e60d06a556442 = L.popup({
  maxWidth: 350,
});

var html_f6b220e78a9ccecee921d1c0421ad07c = $(
  `<div id="html_f6b220e78a9ccecee921d1c0421ad07c" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Spectra, High St, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 70.62045542 kWh<br>     <b>Charging Duration:</b> 3.85 mins<br>     <b>Charging Rate:</b> 18.33554746 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6c7b8ffac37d2d067d9e60d06a556442.setContent(
  html_f6b220e78a9ccecee921d1c0421ad07c
);

marker_5e2ba97358967c2cbf8e2521c5a66dff.bindPopup(
  popup_6c7b8ffac37d2d067d9e60d06a556442
);

marker_5e2ba97358967c2cbf8e2521c5a66dff.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_5e2ba97358967c2cbf8e2521c5a66dff.setIcon(
  icon_9170755429f436c5ab2840a7fcb87439
);

var marker_5f87e9621e48a747c19682895462e789 = L.marker(
  [19.11644, 72.90968],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c2c8da3e4e36c05bb9b27c7719cebe9a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e44f66a7b692b3c8de69b517e13cd76c = L.popup({
  maxWidth: 350,
});

var html_c3e80851f54d74ddf98469b48ed686ee = $(
  `<div id="html_c3e80851f54d74ddf98469b48ed686ee" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Pay & Park, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 70.62045542 kWh<br>     <b>Charging Duration:</b> 3.85 mins<br>     <b>Charging Rate:</b> 18.33554746 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_e44f66a7b692b3c8de69b517e13cd76c.setContent(
  html_c3e80851f54d74ddf98469b48ed686ee
);

marker_5f87e9621e48a747c19682895462e789.bindPopup(
  popup_e44f66a7b692b3c8de69b517e13cd76c
);

marker_5f87e9621e48a747c19682895462e789.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_5f87e9621e48a747c19682895462e789.setIcon(
  icon_c2c8da3e4e36c05bb9b27c7719cebe9a
);

var marker_6124020da10538953c57d50e138ee24c = L.marker(
  [18.9688627, 72.8207138],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2f66cc6119359631ce32b39c6ee0f621 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4c54ac9c3c546905c2b55c486bd94d07 = L.popup({
  maxWidth: 350,
});

var html_2efaf6af3c646e06bfeaa07956504be3 = $(
  `<div id="html_2efaf6af3c646e06bfeaa07956504be3" style="width: 100.0%; height: 100.0%;">     <h4>Nathani Heights, Mumbai Central</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Junction of Bellasis Road and Dr D.B. Marg , Mumbai Central, Mumbai 400008<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 32.52486105 kWh<br>     <b>Charging Duration:</b> 1.03 mins<br>     <b>Charging Rate:</b> 31.55315617 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_4c54ac9c3c546905c2b55c486bd94d07.setContent(
  html_2efaf6af3c646e06bfeaa07956504be3
);

marker_6124020da10538953c57d50e138ee24c.bindPopup(
  popup_4c54ac9c3c546905c2b55c486bd94d07
);

marker_6124020da10538953c57d50e138ee24c.bindTooltip(
  `<div>
                     Nathani Heights, Mumbai Central
                 </div>`,
  {
    sticky: true,
  }
);

marker_6124020da10538953c57d50e138ee24c.setIcon(
  icon_2f66cc6119359631ce32b39c6ee0f621
);

var marker_3fa5cc75f480f06e0e282dc154bb06fc = L.marker(
  [19.106, 72.9286],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_103221c6e38246fc6a9d358066d5adc8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cd61ec26a251e5772c2b2f900e846ac1 = L.popup({
  maxWidth: 350,
});

var html_2b0637f1e945e589bc36348608fbf0bf = $(
  `<div id="html_2b0637f1e945e589bc36348608fbf0bf" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Vikhroli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Near Vikhroli Station East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 78.3990561 kWh<br>     <b>Charging Duration:</b> 2.63 mins<br>     <b>Charging Rate:</b> 29.75315871 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_cd61ec26a251e5772c2b2f900e846ac1.setContent(
  html_2b0637f1e945e589bc36348608fbf0bf
);

marker_3fa5cc75f480f06e0e282dc154bb06fc.bindPopup(
  popup_cd61ec26a251e5772c2b2f900e846ac1
);

marker_3fa5cc75f480f06e0e282dc154bb06fc.bindTooltip(
  `<div>
                     Tata Power - Vikhroli
                 </div>`,
  {
    sticky: true,
  }
);

marker_3fa5cc75f480f06e0e282dc154bb06fc.setIcon(
  icon_103221c6e38246fc6a9d358066d5adc8
);

var marker_9bc70e1e19e620571cec7c1e1f1213cb = L.marker(
  [18.989356, 72.825234],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6118aeb66fd9646ed84616432cd5f05a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1d464e9f36f407321b44fb0eda42e11e = L.popup({
  maxWidth: 350,
});

var html_a0e765d11b7bae3b83b90a7434f4a879 = $(
  `<div id="html_a0e765d11b7bae3b83b90a7434f4a879" style="width: 100.0%; height: 100.0%;">     <h4>Blue Tokai Coffee</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Unit 20-22, Laxmi Woollen Mill, Opposite Blue Loft, Dr E Moses Marg, Off, Shakti Mills Ln, Mahalakshmi, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 23.99396127 kWh<br>     <b>Charging Duration:</b> 0.73 mins<br>     <b>Charging Rate:</b> 32.93397056 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_1d464e9f36f407321b44fb0eda42e11e.setContent(
  html_a0e765d11b7bae3b83b90a7434f4a879
);

marker_9bc70e1e19e620571cec7c1e1f1213cb.bindPopup(
  popup_1d464e9f36f407321b44fb0eda42e11e
);

marker_9bc70e1e19e620571cec7c1e1f1213cb.bindTooltip(
  `<div>
                     Blue Tokai Coffee
                 </div>`,
  {
    sticky: true,
  }
);

marker_9bc70e1e19e620571cec7c1e1f1213cb.setIcon(
  icon_6118aeb66fd9646ed84616432cd5f05a
);

var marker_3895e416e5a18a11d2f64bd4fc82ea64 = L.marker(
  [19.18066617, 72.94684724],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_cee15a839175b8a6be28472040f2b742 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_bbb059605d56739a70e219d09a06d05f = L.popup({
  maxWidth: 350,
});

var html_e156434af5c1aa71e327b09f20464cc9 = $(
  `<div id="html_e156434af5c1aa71e327b09f20464cc9" style="width: 100.0%; height: 100.0%;">     <h4>MCGM Parking || Runwal Anthurium</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Runwal Anthurium Rd, opposite Veena Nagar, Vardhman Nagar, Mulund West<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 23.54038392 kWh<br>     <b>Charging Duration:</b> 6.71 mins<br>     <b>Charging Rate:</b> 3.508161487 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_bbb059605d56739a70e219d09a06d05f.setContent(
  html_e156434af5c1aa71e327b09f20464cc9
);

marker_3895e416e5a18a11d2f64bd4fc82ea64.bindPopup(
  popup_bbb059605d56739a70e219d09a06d05f
);

marker_3895e416e5a18a11d2f64bd4fc82ea64.bindTooltip(
  `<div>
                     MCGM Parking || Runwal Anthurium
                 </div>`,
  {
    sticky: true,
  }
);

marker_3895e416e5a18a11d2f64bd4fc82ea64.setIcon(
  icon_cee15a839175b8a6be28472040f2b742
);

var marker_fff95df431c22fb1642d70ec41017259 = L.marker(
  [18.9688627, 72.8207138],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_06dfd999f159d0ed8ffa3163972fd6a2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7bfc0e90a237e044573dd9a87bdb9bd2 = L.popup({
  maxWidth: 350,
});

var html_9ac3a00b982cdd06a8932255c7470843 = $(
  `<div id="html_9ac3a00b982cdd06a8932255c7470843" style="width: 100.0%; height: 100.0%;">     <h4>Nathani Heights, Mumbai Central</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Junction of Bellasis Road and Dr D.B. Marg , Mumbai Central, Mumbai 400008<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 46.45478115 kWh<br>     <b>Charging Duration:</b> 1.08 mins<br>     <b>Charging Rate:</b> 42.8384828 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7bfc0e90a237e044573dd9a87bdb9bd2.setContent(
  html_9ac3a00b982cdd06a8932255c7470843
);

marker_fff95df431c22fb1642d70ec41017259.bindPopup(
  popup_7bfc0e90a237e044573dd9a87bdb9bd2
);

marker_fff95df431c22fb1642d70ec41017259.bindTooltip(
  `<div>
                     Nathani Heights, Mumbai Central
                 </div>`,
  {
    sticky: true,
  }
);

marker_fff95df431c22fb1642d70ec41017259.setIcon(
  icon_06dfd999f159d0ed8ffa3163972fd6a2
);

var marker_8ba1228cb06233244f381425bbdeb877 = L.marker(
  [19.0458, 72.8991],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1a3a3ce1b353f0844226b81f0f0f827e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_638c28c925739b22f578252c40add138 = L.popup({
  maxWidth: 350,
});

var html_51a6b52e48acf818b85d21add0a5bd60 = $(
  `<div id="html_51a6b52e48acf818b85d21add0a5bd60" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Chembur Diamond Garden</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Diamond Garden, Chembur, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 66.17491556 kWh<br>     <b>Charging Duration:</b> 16.16 mins<br>     <b>Charging Rate:</b> 4.096052506 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_638c28c925739b22f578252c40add138.setContent(
  html_51a6b52e48acf818b85d21add0a5bd60
);

marker_8ba1228cb06233244f381425bbdeb877.bindPopup(
  popup_638c28c925739b22f578252c40add138
);

marker_8ba1228cb06233244f381425bbdeb877.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Chembur Diamond Garden
                 </div>`,
  {
    sticky: true,
  }
);

marker_8ba1228cb06233244f381425bbdeb877.setIcon(
  icon_1a3a3ce1b353f0844226b81f0f0f827e
);

var marker_b3bf0ee8d9329c2a1ea82c82cd603b9c = L.marker(
  [19.0734, 72.8892],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_cf5ce007146b6d9966eded0879113f30 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8ebe7ad0da6110edbe58434774425a70 = L.popup({
  maxWidth: 350,
});

var html_92a0809f82cbdfcebf4c67f1638d966b = $(
  `<div id="html_92a0809f82cbdfcebf4c67f1638d966b" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Tilak Nagar</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Tilak Nagar Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 55.42091221 kWh<br>     <b>Charging Duration:</b> 1.42 mins<br>     <b>Charging Rate:</b> 39.08038685 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_8ebe7ad0da6110edbe58434774425a70.setContent(
  html_92a0809f82cbdfcebf4c67f1638d966b
);

marker_b3bf0ee8d9329c2a1ea82c82cd603b9c.bindPopup(
  popup_8ebe7ad0da6110edbe58434774425a70
);

marker_b3bf0ee8d9329c2a1ea82c82cd603b9c.bindTooltip(
  `<div>
                     Tata Power - Tilak Nagar
                 </div>`,
  {
    sticky: true,
  }
);

marker_b3bf0ee8d9329c2a1ea82c82cd603b9c.setIcon(
  icon_cf5ce007146b6d9966eded0879113f30
);

var marker_cb1be28a0afd7d675977574187cc7432 = L.marker(
  [19.034402, 72.85284],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6428dc4dc1413f291ce7a2f56ed41cba = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7307bca77650b9d0ad476a086c34ae94 = L.popup({
  maxWidth: 350,
});

var html_6e352dbb402e9ea70c60d8e4fa45644e = $(
  `<div id="html_6e352dbb402e9ea70c60d8e4fa45644e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power, Dharavi Colony</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Tata Power Dharavi Colony labour camp dharavi ,Matunga ,Mumbai 400019<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 14.50345514 kWh<br>     <b>Charging Duration:</b> 0.39 mins<br>     <b>Charging Rate:</b> 37.65992488 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7307bca77650b9d0ad476a086c34ae94.setContent(
  html_6e352dbb402e9ea70c60d8e4fa45644e
);

marker_cb1be28a0afd7d675977574187cc7432.bindPopup(
  popup_7307bca77650b9d0ad476a086c34ae94
);

marker_cb1be28a0afd7d675977574187cc7432.bindTooltip(
  `<div>
                     Tata Power, Dharavi Colony
                 </div>`,
  {
    sticky: true,
  }
);

marker_cb1be28a0afd7d675977574187cc7432.setIcon(
  icon_6428dc4dc1413f291ce7a2f56ed41cba
);

var marker_c47836a8bd98e1b0e8f7746ffb201ddc = L.marker(
  [19.1206, 72.9188],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_113ab6827056eb72aa9bcff8ac4fa1bf = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6e1c085f83c8961482ff2c56138a8d8a = L.popup({
  maxWidth: 350,
});

var html_a943175b70f9692ff4d59227a6ac4238 = $(
  `<div id="html_a943175b70f9692ff4d59227a6ac4238" style="width: 100.0%; height: 100.0%;">     <h4>Ather Grid - Hiranandani</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Hiranandani Gardens, Powai, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 103.8126056 kWh<br>     <b>Charging Duration:</b> 6.26 mins<br>     <b>Charging Rate:</b> 16.59138267 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_6e1c085f83c8961482ff2c56138a8d8a.setContent(
  html_a943175b70f9692ff4d59227a6ac4238
);

marker_c47836a8bd98e1b0e8f7746ffb201ddc.bindPopup(
  popup_6e1c085f83c8961482ff2c56138a8d8a
);

marker_c47836a8bd98e1b0e8f7746ffb201ddc.bindTooltip(
  `<div>
                     Ather Grid - Hiranandani
                 </div>`,
  {
    sticky: true,
  }
);

marker_c47836a8bd98e1b0e8f7746ffb201ddc.setIcon(
  icon_113ab6827056eb72aa9bcff8ac4fa1bf
);

var marker_0537f1cb56275cd95578bc68edf0c342 = L.marker(
  [19.1146146, 72.8840941],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_bab7253c54018191c4daa55c5ef875b0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_02bfa1496e0a1abb97a4d29d11f61983 = L.popup({
  maxWidth: 350,
});

var html_669abc38d1cc7ba0e293a3a2adae5565 = $(
  `<div id="html_669abc38d1cc7ba0e293a3a2adae5565" style="width: 100.0%; height: 100.0%;">     <h4>Vasant oasis</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Borosil Plot,off, Makwana Rd, Marol, Andheri East, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 62.19283346 kWh<br>     <b>Charging Duration:</b> 3.04 mins<br>     <b>Charging Rate:</b> 20.45251231 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_02bfa1496e0a1abb97a4d29d11f61983.setContent(
  html_669abc38d1cc7ba0e293a3a2adae5565
);

marker_0537f1cb56275cd95578bc68edf0c342.bindPopup(
  popup_02bfa1496e0a1abb97a4d29d11f61983
);

marker_0537f1cb56275cd95578bc68edf0c342.bindTooltip(
  `<div>
                     Vasant oasis
                 </div>`,
  {
    sticky: true,
  }
);

marker_0537f1cb56275cd95578bc68edf0c342.setIcon(
  icon_bab7253c54018191c4daa55c5ef875b0
);

var marker_706e9d0048e197e897ac9bfdf4e9ba0d = L.marker(
  [19.0815, 72.8367],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6cc3ef1e987d052b1e8dc3eb8050afe8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_89ff4f78fe1e360ada56ea11a133af91 = L.popup({
  maxWidth: 350,
});

var html_a6128becead526d6a08e0cd549ecf98f = $(
  `<div id="html_a6128becead526d6a08e0cd549ecf98f" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Santacruz</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Santacruz West, Next to Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 40.16142185 kWh<br>     <b>Charging Duration:</b> 1.41 mins<br>     <b>Charging Rate:</b> 28.47996213 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_89ff4f78fe1e360ada56ea11a133af91.setContent(
  html_a6128becead526d6a08e0cd549ecf98f
);

marker_706e9d0048e197e897ac9bfdf4e9ba0d.bindPopup(
  popup_89ff4f78fe1e360ada56ea11a133af91
);

marker_706e9d0048e197e897ac9bfdf4e9ba0d.bindTooltip(
  `<div>
                     ATUM Charge - Santacruz
                 </div>`,
  {
    sticky: true,
  }
);

marker_706e9d0048e197e897ac9bfdf4e9ba0d.setIcon(
  icon_6cc3ef1e987d052b1e8dc3eb8050afe8
);

var marker_9cba30d5c4396e0b6388b1b06a40f5ca = L.marker(
  [19.1643, 72.8346],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8e4f5a5438b3cd83142ce53468d0bee5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cecad48ac2126713af6c83c787531807 = L.popup({
  maxWidth: 350,
});

var html_46bf70ce6758a00aa0911819ac17946c = $(
  `<div id="html_46bf70ce6758a00aa0911819ac17946c" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Goregaon West</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Inorbit Mall, Goregaon West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 42.51736092 kWh<br>     <b>Charging Duration:</b> 1.07 mins<br>     <b>Charging Rate:</b> 39.91263736 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_cecad48ac2126713af6c83c787531807.setContent(
  html_46bf70ce6758a00aa0911819ac17946c
);

marker_9cba30d5c4396e0b6388b1b06a40f5ca.bindPopup(
  popup_cecad48ac2126713af6c83c787531807
);

marker_9cba30d5c4396e0b6388b1b06a40f5ca.bindTooltip(
  `<div>
                     Jio-bp Pulse - Goregaon West
                 </div>`,
  {
    sticky: true,
  }
);

marker_9cba30d5c4396e0b6388b1b06a40f5ca.setIcon(
  icon_8e4f5a5438b3cd83142ce53468d0bee5
);

var marker_afaa3dea39ee62c6ad17796e8da7284b = L.marker(
  [19.2587, 72.9773],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_797ef61961d99b29e3eaa93f0a25bd0e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e86f3167f29a7f1060285c5b87eb9bc9 = L.popup({
  maxWidth: 350,
});

var html_659eef6f87a61018ab3beaa2e73d9f54 = $(
  `<div id="html_659eef6f87a61018ab3beaa2e73d9f54" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Kolshet</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Kolshet Road, Thane West<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 10.45065783 kWh<br>     <b>Charging Duration:</b> 0.26 mins<br>     <b>Charging Rate:</b> 39.8938261 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e86f3167f29a7f1060285c5b87eb9bc9.setContent(
  html_659eef6f87a61018ab3beaa2e73d9f54
);

marker_afaa3dea39ee62c6ad17796e8da7284b.bindPopup(
  popup_e86f3167f29a7f1060285c5b87eb9bc9
);

marker_afaa3dea39ee62c6ad17796e8da7284b.bindTooltip(
  `<div>
                     Jio-bp Pulse - Kolshet
                 </div>`,
  {
    sticky: true,
  }
);

marker_afaa3dea39ee62c6ad17796e8da7284b.setIcon(
  icon_797ef61961d99b29e3eaa93f0a25bd0e
);

var marker_7f8b99b74a64a77c07e03ddc359a2ba8 = L.marker(
  [19.037, 72.9235],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2d0864c5ed102255ccbf790c8c87f107 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c586c00f7e0f3f4e0e0b38f36df67cce = L.popup({
  maxWidth: 350,
});

var html_055e8201bf1cf8e0b8c9150266450a4a = $(
  `<div id="html_055e8201bf1cf8e0b8c9150266450a4a" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Trombay</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Anushakti Nagar, Trombay, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 30.805662 kWh<br>     <b>Charging Duration:</b> 1.62 mins<br>     <b>Charging Rate:</b> 18.97988935 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c586c00f7e0f3f4e0e0b38f36df67cce.setContent(
  html_055e8201bf1cf8e0b8c9150266450a4a
);

marker_7f8b99b74a64a77c07e03ddc359a2ba8.bindPopup(
  popup_c586c00f7e0f3f4e0e0b38f36df67cce
);

marker_7f8b99b74a64a77c07e03ddc359a2ba8.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Trombay
                 </div>`,
  {
    sticky: true,
  }
);

marker_7f8b99b74a64a77c07e03ddc359a2ba8.setIcon(
  icon_2d0864c5ed102255ccbf790c8c87f107
);

var marker_be653457037dea7818e48ef9eed93c41 = L.marker(
  [19.097, 72.8261],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f6757acca4465df9998666e712ae58d0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_02dcb3878b2c055103c5570e373261c1 = L.popup({
  maxWidth: 350,
});

var html_be431acd8715f606052cd24c3f6efd0b = $(
  `<div id="html_be431acd8715f606052cd24c3f6efd0b" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Juhu Vile Parle</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Juhu Beach Gate 3, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 77.60847805 kWh<br>     <b>Energy Consumed:</b> 73.09045077 kWh<br>     <b>Charging Duration:</b> 2.41 mins<br>     <b>Charging Rate:</b> 30.38880381 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_02dcb3878b2c055103c5570e373261c1.setContent(
  html_be431acd8715f606052cd24c3f6efd0b
);

marker_be653457037dea7818e48ef9eed93c41.bindPopup(
  popup_02dcb3878b2c055103c5570e373261c1
);

marker_be653457037dea7818e48ef9eed93c41.bindTooltip(
  `<div>
                     Tata Power - Juhu Vile Parle
                 </div>`,
  {
    sticky: true,
  }
);

marker_be653457037dea7818e48ef9eed93c41.setIcon(
  icon_f6757acca4465df9998666e712ae58d0
);

var marker_4b069592766dd2690a451bf0040b045f = L.marker(
  [19.11999443, 72.9141036],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_eb7ede55d698bb516ceb0940134a979c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_61638028a535a334ae9090af464cfac8 = L.popup({
  maxWidth: 350,
});

var html_11d466b72c8109190408c96f4e637f3e = $(
  `<div id="html_11d466b72c8109190408c96f4e637f3e" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 26.99234408 kWh<br>     <b>Charging Duration:</b> 0.58 mins<br>     <b>Charging Rate:</b> 46.58137118 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_61638028a535a334ae9090af464cfac8.setContent(
  html_11d466b72c8109190408c96f4e637f3e
);

marker_4b069592766dd2690a451bf0040b045f.bindPopup(
  popup_61638028a535a334ae9090af464cfac8
);

marker_4b069592766dd2690a451bf0040b045f.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_4b069592766dd2690a451bf0040b045f.setIcon(
  icon_eb7ede55d698bb516ceb0940134a979c
);

var marker_904f582c63c22d76b74bda3225d89dc6 = L.marker(
  [19.12, 72.9141],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1e8a7f0759bffe83a3e7b78bd69a96c3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_038fe49bc5e6a144dfccd5857d7216be = L.popup({
  maxWidth: 350,
});

var html_5bf2a30af5787343c1ed405f3e150dd5 = $(
  `<div id="html_5bf2a30af5787343c1ed405f3e150dd5" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 26.99234408 kWh<br>     <b>Charging Duration:</b> 0.58 mins<br>     <b>Charging Rate:</b> 46.58137118 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_038fe49bc5e6a144dfccd5857d7216be.setContent(
  html_5bf2a30af5787343c1ed405f3e150dd5
);

marker_904f582c63c22d76b74bda3225d89dc6.bindPopup(
  popup_038fe49bc5e6a144dfccd5857d7216be
);

marker_904f582c63c22d76b74bda3225d89dc6.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_904f582c63c22d76b74bda3225d89dc6.setIcon(
  icon_1e8a7f0759bffe83a3e7b78bd69a96c3
);

var marker_e24feec2e8120029a9245d153f81af35 = L.marker(
  [19.1915, 72.972],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a9eaefa901a9f2e33603e5420bec378e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_55090944bfd652ba853ce4034778e22e = L.popup({
  maxWidth: 350,
});

var html_0b180066742cce2b2e4b8894b8c7aec4 = $(
  `<div id="html_0b180066742cce2b2e4b8894b8c7aec4" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Thane West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Thane West Station, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 52.90446367 kWh<br>     <b>Charging Duration:</b> 3.4 mins<br>     <b>Charging Rate:</b> 15.57205559 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_55090944bfd652ba853ce4034778e22e.setContent(
  html_0b180066742cce2b2e4b8894b8c7aec4
);

marker_e24feec2e8120029a9245d153f81af35.bindPopup(
  popup_55090944bfd652ba853ce4034778e22e
);

marker_e24feec2e8120029a9245d153f81af35.bindTooltip(
  `<div>
                     Tata Power - Thane West
                 </div>`,
  {
    sticky: true,
  }
);

marker_e24feec2e8120029a9245d153f81af35.setIcon(
  icon_a9eaefa901a9f2e33603e5420bec378e
);

var marker_7c1cc1ba93df0d1d0505c0421dbb4e68 = L.marker(
  [19.0188, 72.8571],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_5aab0ab53f869bd4edfa18c3660a22b9 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_75260441a471c744e5051766c2e7eddd = L.popup({
  maxWidth: 350,
});

var html_09e1d6023700404cc0b4266de4882cce = $(
  `<div id="html_09e1d6023700404cc0b4266de4882cce" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Wadala</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Wadala Truck Terminal, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 1.87 mins<br>     <b>Charging Rate:</b> 23.22301592 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_75260441a471c744e5051766c2e7eddd.setContent(
  html_09e1d6023700404cc0b4266de4882cce
);

marker_7c1cc1ba93df0d1d0505c0421dbb4e68.bindPopup(
  popup_75260441a471c744e5051766c2e7eddd
);

marker_7c1cc1ba93df0d1d0505c0421dbb4e68.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Wadala
                 </div>`,
  {
    sticky: true,
  }
);

marker_7c1cc1ba93df0d1d0505c0421dbb4e68.setIcon(
  icon_5aab0ab53f869bd4edfa18c3660a22b9
);

var marker_9f7169e443166dc104cf894a9a2fd218 = L.marker(
  [19.051601, 72.838011],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0826d13b757ef854cb0a595ebdd4bf40 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_95adf62905d72109e3c2f50ed4aa6620 = L.popup({
  maxWidth: 350,
});

var html_35298fdae5594fcdb07a4c81de18e780 = $(
  `<div id="html_35298fdae5594fcdb07a4c81de18e780" style="width: 100.0%; height: 100.0%;">     <h4>IOCL Kini Causway, Bandra</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> 36, SV Rd, Santosh Nagar, Bandra West, Mumbai, Maharashtra 400050<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 54.88401336 kWh<br>     <b>Charging Duration:</b> 7.86 mins<br>     <b>Charging Rate:</b> 6.985136805 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_95adf62905d72109e3c2f50ed4aa6620.setContent(
  html_35298fdae5594fcdb07a4c81de18e780
);

marker_9f7169e443166dc104cf894a9a2fd218.bindPopup(
  popup_95adf62905d72109e3c2f50ed4aa6620
);

marker_9f7169e443166dc104cf894a9a2fd218.bindTooltip(
  `<div>
                     IOCL Kini Causway, Bandra
                 </div>`,
  {
    sticky: true,
  }
);

marker_9f7169e443166dc104cf894a9a2fd218.setIcon(
  icon_0826d13b757ef854cb0a595ebdd4bf40
);

var marker_fea53817beb66e0fd07ba8c057552229 = L.marker(
  [19.0028, 73.1076],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_fe9e40e03331ef66a8180cc0fc516a7c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2aeebff848461e5c3257a2b5546f1b55 = L.popup({
  maxWidth: 350,
});

var html_44233ae3635a925a861238dc3b8a5e76 = $(
  `<div id="html_44233ae3635a925a861238dc3b8a5e76" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Khandeshwar</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Khandeshwar Railway Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 36.04757739 kWh<br>     <b>Charging Duration:</b> 0.72 mins<br>     <b>Charging Rate:</b> 49.85189639 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_2aeebff848461e5c3257a2b5546f1b55.setContent(
  html_44233ae3635a925a861238dc3b8a5e76
);

marker_fea53817beb66e0fd07ba8c057552229.bindPopup(
  popup_2aeebff848461e5c3257a2b5546f1b55
);

marker_fea53817beb66e0fd07ba8c057552229.bindTooltip(
  `<div>
                     Tata Power - Khandeshwar
                 </div>`,
  {
    sticky: true,
  }
);

marker_fea53817beb66e0fd07ba8c057552229.setIcon(
  icon_fe9e40e03331ef66a8180cc0fc516a7c
);

var marker_2b3ba198e0a21ae059a1659f3f69ffba = L.marker(
  [19.0685788, 73.022744],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7dd838f232c4e613d2556485db6440d3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4daf7ee46c5da55c21106cea5b3d3dfb = L.popup({
  maxWidth: 350,
});

var html_49c336dea6e7517effb834ec9fc66c9f = $(
  `<div id="html_49c336dea6e7517effb834ec9fc66c9f" style="width: 100.0%; height: 100.0%;">     <h4>Magenta TTC, Turbhe</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Magenta House, D-285, TTC Industrial Area, nTurbhe, Near Unitech Motors, Navi Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 31.73575031 kWh<br>     <b>Charging Duration:</b> 2.85 mins<br>     <b>Charging Rate:</b> 11.12987276 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_4daf7ee46c5da55c21106cea5b3d3dfb.setContent(
  html_49c336dea6e7517effb834ec9fc66c9f
);

marker_2b3ba198e0a21ae059a1659f3f69ffba.bindPopup(
  popup_4daf7ee46c5da55c21106cea5b3d3dfb
);

marker_2b3ba198e0a21ae059a1659f3f69ffba.bindTooltip(
  `<div>
                     Magenta TTC, Turbhe
                 </div>`,
  {
    sticky: true,
  }
);

marker_2b3ba198e0a21ae059a1659f3f69ffba.setIcon(
  icon_7dd838f232c4e613d2556485db6440d3
);

var marker_46aa7449a21a2b6c4522be45a763d750 = L.marker(
  [19.1206, 72.9188],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2c97de444efec6859e84c9a8fe35da9c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c66fcc7abc3f81b370262afde5239834 = L.popup({
  maxWidth: 350,
});

var html_38317e338c476a52c79effc8ee476c1d = $(
  `<div id="html_38317e338c476a52c79effc8ee476c1d" style="width: 100.0%; height: 100.0%;">     <h4>Ather Grid - Hiranandani</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Hiranandani Gardens, Powai, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 64.53824697 kWh<br>     <b>Charging Duration:</b> 3.68 mins<br>     <b>Charging Rate:</b> 17.56016007 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c66fcc7abc3f81b370262afde5239834.setContent(
  html_38317e338c476a52c79effc8ee476c1d
);

marker_46aa7449a21a2b6c4522be45a763d750.bindPopup(
  popup_c66fcc7abc3f81b370262afde5239834
);

marker_46aa7449a21a2b6c4522be45a763d750.bindTooltip(
  `<div>
                     Ather Grid - Hiranandani
                 </div>`,
  {
    sticky: true,
  }
);

marker_46aa7449a21a2b6c4522be45a763d750.setIcon(
  icon_2c97de444efec6859e84c9a8fe35da9c
);

var marker_d4e6fb686de6d7fd76c2c29a75164e3e = L.marker(
  [19.11999443, 72.9141036],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1aa1666b168870aeb64f3bd0c4380cbc = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e6825baaf27c251d8f50338b3e28b63c = L.popup({
  maxWidth: 350,
});

var html_a7696842ea95a20d9796fe6633186359 = $(
  `<div id="html_a7696842ea95a20d9796fe6633186359" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 69.44996148 kWh<br>     <b>Charging Duration:</b> 1.41 mins<br>     <b>Charging Rate:</b> 49.41673269 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_e6825baaf27c251d8f50338b3e28b63c.setContent(
  html_a7696842ea95a20d9796fe6633186359
);

marker_d4e6fb686de6d7fd76c2c29a75164e3e.bindPopup(
  popup_e6825baaf27c251d8f50338b3e28b63c
);

marker_d4e6fb686de6d7fd76c2c29a75164e3e.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_d4e6fb686de6d7fd76c2c29a75164e3e.setIcon(
  icon_1aa1666b168870aeb64f3bd0c4380cbc
);

var marker_6b046fdb46d992e15cedd95e7fbe7849 = L.marker(
  [19.12, 72.9141],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d9add7c7d4e10448e9d48a120e3bb954 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_67d7fcb14de2c4fb4ec8a04d845cead5 = L.popup({
  maxWidth: 350,
});

var html_dc053f1c0fa043f0c402f97f8bd45700 = $(
  `<div id="html_dc053f1c0fa043f0c402f97f8bd45700" style="width: 100.0%; height: 100.0%;">     <h4>MH|MUMBAI|POWAI#HIRANANDANI GARDENS</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> TECHNOLOGY ST,HIRANANADANI GARDENS,SAINATH NAGAR,POWAI,MUMBAI,MAHARASHTARA 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 69.44996148 kWh<br>     <b>Charging Duration:</b> 1.41 mins<br>     <b>Charging Rate:</b> 49.41673269 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_67d7fcb14de2c4fb4ec8a04d845cead5.setContent(
  html_dc053f1c0fa043f0c402f97f8bd45700
);

marker_6b046fdb46d992e15cedd95e7fbe7849.bindPopup(
  popup_67d7fcb14de2c4fb4ec8a04d845cead5
);

marker_6b046fdb46d992e15cedd95e7fbe7849.bindTooltip(
  `<div>
                     MH|MUMBAI|POWAI#HIRANANDANI GARDENS
                 </div>`,
  {
    sticky: true,
  }
);

marker_6b046fdb46d992e15cedd95e7fbe7849.setIcon(
  icon_d9add7c7d4e10448e9d48a120e3bb954
);

var marker_2e3c48a834b346dd177df600d0d41539 = L.marker(
  [19.106, 72.9286],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6f900418c23776ba84d00b6978ebae29 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8ad2343aa5ae91cae4e0ebcfd50250ae = L.popup({
  maxWidth: 350,
});

var html_87a2b65fa9eb399c31fdb61a4faf1165 = $(
  `<div id="html_87a2b65fa9eb399c31fdb61a4faf1165" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Vikhroli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Near Vikhroli Station East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 79.46231191 kWh<br>     <b>Charging Duration:</b> 3.13 mins<br>     <b>Charging Rate:</b> 25.41252017 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_8ad2343aa5ae91cae4e0ebcfd50250ae.setContent(
  html_87a2b65fa9eb399c31fdb61a4faf1165
);

marker_2e3c48a834b346dd177df600d0d41539.bindPopup(
  popup_8ad2343aa5ae91cae4e0ebcfd50250ae
);

marker_2e3c48a834b346dd177df600d0d41539.bindTooltip(
  `<div>
                     Tata Power - Vikhroli
                 </div>`,
  {
    sticky: true,
  }
);

marker_2e3c48a834b346dd177df600d0d41539.setIcon(
  icon_6f900418c23776ba84d00b6978ebae29
);

var marker_9ab9404465e35d2e77adf6b445d26972 = L.marker(
  [18.9451, 72.8354],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_796d8a233c21ddc473b628d8f9bcad3d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6e3e46f3df9c98ec0b218ddfbdc328c6 = L.popup({
  maxWidth: 350,
});

var html_d1fbee369cafcf81fb77eda275c8503e = $(
  `<div id="html_d1fbee369cafcf81fb77eda275c8503e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Ballard Estate</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Ballard Estate Parking Lot, Fort, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 27.04710323 kWh<br>     <b>Charging Duration:</b> 5.98 mins<br>     <b>Charging Rate:</b> 4.521631542 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6e3e46f3df9c98ec0b218ddfbdc328c6.setContent(
  html_d1fbee369cafcf81fb77eda275c8503e
);

marker_9ab9404465e35d2e77adf6b445d26972.bindPopup(
  popup_6e3e46f3df9c98ec0b218ddfbdc328c6
);

marker_9ab9404465e35d2e77adf6b445d26972.bindTooltip(
  `<div>
                     Tata Power - Ballard Estate
                 </div>`,
  {
    sticky: true,
  }
);

marker_9ab9404465e35d2e77adf6b445d26972.setIcon(
  icon_796d8a233c21ddc473b628d8f9bcad3d
);

var marker_e899613ace05bbd009681c22f654c634 = L.marker(
  [19.2336, 73.1353],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dc2c99da430cc84acd908057f15a67e1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c3eacdf5611dca8a32fc6f0bd9b70a2c = L.popup({
  maxWidth: 350,
});

var html_f0699fa12dd0bc512a9175a49860f387 = $(
  `<div id="html_f0699fa12dd0bc512a9175a49860f387" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Ulhasnagar</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Ulhasnagar Station, Mumbai Region<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 5.650181738 kWh<br>     <b>Charging Duration:</b> 0.48 mins<br>     <b>Charging Rate:</b> 11.66743821 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c3eacdf5611dca8a32fc6f0bd9b70a2c.setContent(
  html_f0699fa12dd0bc512a9175a49860f387
);

marker_e899613ace05bbd009681c22f654c634.bindPopup(
  popup_c3eacdf5611dca8a32fc6f0bd9b70a2c
);

marker_e899613ace05bbd009681c22f654c634.bindTooltip(
  `<div>
                     Statiq - Ulhasnagar
                 </div>`,
  {
    sticky: true,
  }
);

marker_e899613ace05bbd009681c22f654c634.setIcon(
  icon_dc2c99da430cc84acd908057f15a67e1
);

var marker_addd8c46a21159ae88de41b60c708c4e = L.marker(
  [19.2402, 73.1362],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9d455ae126fe3b00d0e170ff779eb63b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_93a42e685ec32d2442377c7549463072 = L.popup({
  maxWidth: 350,
});

var html_51de7d745e992bdde6a4682195bf3cd0 = $(
  `<div id="html_51de7d745e992bdde6a4682195bf3cd0" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Kalyan East</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Kalyan East Bus Depot, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 69.44504561 kWh<br>     <b>Energy Consumed:</b> 72.71574853 kWh<br>     <b>Charging Duration:</b> 2.25 mins<br>     <b>Charging Rate:</b> 32.25343212 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_93a42e685ec32d2442377c7549463072.setContent(
  html_51de7d745e992bdde6a4682195bf3cd0
);

marker_addd8c46a21159ae88de41b60c708c4e.bindPopup(
  popup_93a42e685ec32d2442377c7549463072
);

marker_addd8c46a21159ae88de41b60c708c4e.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Kalyan East
                 </div>`,
  {
    sticky: true,
  }
);

marker_addd8c46a21159ae88de41b60c708c4e.setIcon(
  icon_9d455ae126fe3b00d0e170ff779eb63b
);

var marker_baaa89e13549df3f1c3065c608f6f7b5 = L.marker(
  [19.1593952, 72.945112],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0c1c1f4ab921baf0dcd13fc2f72e0d39 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7ab8de6f200be6dbf63e72cb123d748c = L.popup({
  maxWidth: 350,
});

var html_8f5563f40f0e95e0ce85107df2d3fa99 = $(
  `<div id="html_8f5563f40f0e95e0ce85107df2d3fa99" style="width: 100.0%; height: 100.0%;">     <h4>BMC Parking Runwal Greens</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Nahur West, Industrial Area, Bhandup West, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 61.9271036 kWh<br>     <b>Charging Duration:</b> 2.45 mins<br>     <b>Charging Rate:</b> 25.27459826 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7ab8de6f200be6dbf63e72cb123d748c.setContent(
  html_8f5563f40f0e95e0ce85107df2d3fa99
);

marker_baaa89e13549df3f1c3065c608f6f7b5.bindPopup(
  popup_7ab8de6f200be6dbf63e72cb123d748c
);

marker_baaa89e13549df3f1c3065c608f6f7b5.bindTooltip(
  `<div>
                     BMC Parking Runwal Greens
                 </div>`,
  {
    sticky: true,
  }
);

marker_baaa89e13549df3f1c3065c608f6f7b5.setIcon(
  icon_0c1c1f4ab921baf0dcd13fc2f72e0d39
);

var marker_36f4b298a7eaffb7d4dfb2ced0574590 = L.marker(
  [18.9917205, 72.841513],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2a48962d15d9d81939725181c1d95284 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a55466bba499a75b5d2da7594c59acc1 = L.popup({
  maxWidth: 350,
});

var html_edfadf862c31203c10d4b8966b10113c = $(
  `<div id="html_edfadf862c31203c10d4b8966b10113c" style="width: 100.0%; height: 100.0%;">     <h4>Lodha Venezia CPL</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> GD Ambekar Marg, Lal Baug, Parel, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 33.39817876 kWh<br>     <b>Charging Duration:</b> 2.32 mins<br>     <b>Charging Rate:</b> 14.42092922 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a55466bba499a75b5d2da7594c59acc1.setContent(
  html_edfadf862c31203c10d4b8966b10113c
);

marker_36f4b298a7eaffb7d4dfb2ced0574590.bindPopup(
  popup_a55466bba499a75b5d2da7594c59acc1
);

marker_36f4b298a7eaffb7d4dfb2ced0574590.bindTooltip(
  `<div>
                     Lodha Venezia CPL
                 </div>`,
  {
    sticky: true,
  }
);

marker_36f4b298a7eaffb7d4dfb2ced0574590.setIcon(
  icon_2a48962d15d9d81939725181c1d95284
);

var marker_7ad47d1c3e0a334b9c2da91ee8e8ed33 = L.marker(
  [19.2402364, 72.8481819],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_bedff6d2194b197bf1fabd90f8e8916e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_877d925c1faf1494943ab3401ffd485f = L.popup({
  maxWidth: 350,
});

var html_77fbede7e663335defb9ebbcb4e8c1d8 = $(
  `<div id="html_77fbede7e663335defb9ebbcb4e8c1d8" style="width: 100.0%; height: 100.0%;">     <h4>MCGM Parking || Club Aquaria</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Devidas Lane, Shanti Ashram Borivali West, Near St.Lawrence High School, Mumbai, Maharashtra ,Borivali<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 74.54048486 kWh<br>     <b>Charging Duration:</b> 4.4 mins<br>     <b>Charging Rate:</b> 16.93586894 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_877d925c1faf1494943ab3401ffd485f.setContent(
  html_77fbede7e663335defb9ebbcb4e8c1d8
);

marker_7ad47d1c3e0a334b9c2da91ee8e8ed33.bindPopup(
  popup_877d925c1faf1494943ab3401ffd485f
);

marker_7ad47d1c3e0a334b9c2da91ee8e8ed33.bindTooltip(
  `<div>
                     MCGM Parking || Club Aquaria
                 </div>`,
  {
    sticky: true,
  }
);

marker_7ad47d1c3e0a334b9c2da91ee8e8ed33.setIcon(
  icon_bedff6d2194b197bf1fabd90f8e8916e
);

var marker_8e62a724457556705ff16ce8b82031da = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_5f273fcd39b6b8cfda9936a4af571504 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0bdbe4d2a9f082102ca08b8923c36f00 = L.popup({
  maxWidth: 350,
});

var html_21a292962f0712f28aa610e9f0a786ab = $(
  `<div id="html_21a292962f0712f28aa610e9f0a786ab" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 76.49931987 kWh<br>     <b>Charging Duration:</b> 2.04 mins<br>     <b>Charging Rate:</b> 37.44551098 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_0bdbe4d2a9f082102ca08b8923c36f00.setContent(
  html_21a292962f0712f28aa610e9f0a786ab
);

marker_8e62a724457556705ff16ce8b82031da.bindPopup(
  popup_0bdbe4d2a9f082102ca08b8923c36f00
);

marker_8e62a724457556705ff16ce8b82031da.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_8e62a724457556705ff16ce8b82031da.setIcon(
  icon_5f273fcd39b6b8cfda9936a4af571504
);

var marker_6b8204ce0ec9e5357617f133ca5d6bff = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e7efbd0df3b2a67840989554dbc18caa = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ca77fd781418d483c18fe3e5808a5678 = L.popup({
  maxWidth: 350,
});

var html_87a775bffea604b244eb7d0b5544c588 = $(
  `<div id="html_87a775bffea604b244eb7d0b5544c588" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 76.49931987 kWh<br>     <b>Charging Duration:</b> 2.04 mins<br>     <b>Charging Rate:</b> 37.44551098 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_ca77fd781418d483c18fe3e5808a5678.setContent(
  html_87a775bffea604b244eb7d0b5544c588
);

marker_6b8204ce0ec9e5357617f133ca5d6bff.bindPopup(
  popup_ca77fd781418d483c18fe3e5808a5678
);

marker_6b8204ce0ec9e5357617f133ca5d6bff.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_6b8204ce0ec9e5357617f133ca5d6bff.setIcon(
  icon_e7efbd0df3b2a67840989554dbc18caa
);

var marker_37310e1090d03f947f7a03bf3dd231cc = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_078038984b8461990c3ac6847e54709f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f9418dd358aadf23599f3c724a140191 = L.popup({
  maxWidth: 350,
});

var html_dd478fbca066f3c37a9befd2fcf6f512 = $(
  `<div id="html_dd478fbca066f3c37a9befd2fcf6f512" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 76.49931987 kWh<br>     <b>Charging Duration:</b> 2.04 mins<br>     <b>Charging Rate:</b> 37.44551098 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f9418dd358aadf23599f3c724a140191.setContent(
  html_dd478fbca066f3c37a9befd2fcf6f512
);

marker_37310e1090d03f947f7a03bf3dd231cc.bindPopup(
  popup_f9418dd358aadf23599f3c724a140191
);

marker_37310e1090d03f947f7a03bf3dd231cc.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_37310e1090d03f947f7a03bf3dd231cc.setIcon(
  icon_078038984b8461990c3ac6847e54709f
);

var marker_c9113665d3b68def3329613da76d18a7 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ccb3e48fba2ba706c0167f8b2aceea45 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c7c846816374da14f78fa01880b62d1b = L.popup({
  maxWidth: 350,
});

var html_2e80b7565d22d55446f1304db707dcf3 = $(
  `<div id="html_2e80b7565d22d55446f1304db707dcf3" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 76.49931987 kWh<br>     <b>Charging Duration:</b> 2.04 mins<br>     <b>Charging Rate:</b> 37.44551098 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c7c846816374da14f78fa01880b62d1b.setContent(
  html_2e80b7565d22d55446f1304db707dcf3
);

marker_c9113665d3b68def3329613da76d18a7.bindPopup(
  popup_c7c846816374da14f78fa01880b62d1b
);

marker_c9113665d3b68def3329613da76d18a7.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_c9113665d3b68def3329613da76d18a7.setIcon(
  icon_ccb3e48fba2ba706c0167f8b2aceea45
);

var marker_3b2fe4008b07fca99a50b4219e7ce8c6 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_10053f5b4a6691f26f6b882565e072ec = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3ed6c021cc7ba4a6e0cc4b9cbac0bed1 = L.popup({
  maxWidth: 350,
});

var html_c40a384e404e08dab47138f5403c0a27 = $(
  `<div id="html_c40a384e404e08dab47138f5403c0a27" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 76.49931987 kWh<br>     <b>Charging Duration:</b> 2.04 mins<br>     <b>Charging Rate:</b> 37.44551098 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3ed6c021cc7ba4a6e0cc4b9cbac0bed1.setContent(
  html_c40a384e404e08dab47138f5403c0a27
);

marker_3b2fe4008b07fca99a50b4219e7ce8c6.bindPopup(
  popup_3ed6c021cc7ba4a6e0cc4b9cbac0bed1
);

marker_3b2fe4008b07fca99a50b4219e7ce8c6.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_3b2fe4008b07fca99a50b4219e7ce8c6.setIcon(
  icon_10053f5b4a6691f26f6b882565e072ec
);

var marker_21254eb4187ab0ce9942b55058250035 = L.marker(
  [18.9892, 73.117],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d5b4e7b776d4a7eed8edcfb333f0dad0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6541ed7f4cedefef6dbc48630d9ac7a5 = L.popup({
  maxWidth: 350,
});

var html_6c6ddd47508b671d57c51c6271464336 = $(
  `<div id="html_6c6ddd47508b671d57c51c6271464336" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Panvel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Orion Mall, Panvel<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 63.83060875 kWh<br>     <b>Charging Duration:</b> 1.67 mins<br>     <b>Charging Rate:</b> 38.13906947 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_6541ed7f4cedefef6dbc48630d9ac7a5.setContent(
  html_6c6ddd47508b671d57c51c6271464336
);

marker_21254eb4187ab0ce9942b55058250035.bindPopup(
  popup_6541ed7f4cedefef6dbc48630d9ac7a5
);

marker_21254eb4187ab0ce9942b55058250035.bindTooltip(
  `<div>
                     Statiq - Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_21254eb4187ab0ce9942b55058250035.setIcon(
  icon_d5b4e7b776d4a7eed8edcfb333f0dad0
);

var marker_4bad401a1fb6a4cc3d612baa1aa285ec = L.marker(
  [18.994, 72.8231],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ee0fa0360bb2938a1e931fd9fd35b886 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c318656da40225d08958adac35af8348 = L.popup({
  maxWidth: 350,
});

var html_f3329278fb7d7ff76ecea73063304dcd = $(
  `<div id="html_f3329278fb7d7ff76ecea73063304dcd" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Mahalaxmi West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Shree Simandhar Towers, Mahalaxmi West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 65.18392769 kWh<br>     <b>Charging Duration:</b> 1.69 mins<br>     <b>Charging Rate:</b> 38.57770533 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c318656da40225d08958adac35af8348.setContent(
  html_f3329278fb7d7ff76ecea73063304dcd
);

marker_4bad401a1fb6a4cc3d612baa1aa285ec.bindPopup(
  popup_c318656da40225d08958adac35af8348
);

marker_4bad401a1fb6a4cc3d612baa1aa285ec.bindTooltip(
  `<div>
                     Tata Power - Mahalaxmi West
                 </div>`,
  {
    sticky: true,
  }
);

marker_4bad401a1fb6a4cc3d612baa1aa285ec.setIcon(
  icon_ee0fa0360bb2938a1e931fd9fd35b886
);

var marker_3e149d7f86f20911f371bd3fc721467a = L.marker(
  [19.137, 72.8261],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7dd6884f5d8406b6fd0829440fe7dbb6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7604e01e646d46eb5c15776683d64b85 = L.popup({
  maxWidth: 350,
});

var html_b1a3174d697c3717b9f8e6b43c1b31db = $(
  `<div id="html_b1a3174d697c3717b9f8e6b43c1b31db" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Versova</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Versova Metro Station, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 21.03051965 kWh<br>     <b>Charging Duration:</b> 2.52 mins<br>     <b>Charging Rate:</b> 8.332992518 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7604e01e646d46eb5c15776683d64b85.setContent(
  html_b1a3174d697c3717b9f8e6b43c1b31db
);

marker_3e149d7f86f20911f371bd3fc721467a.bindPopup(
  popup_7604e01e646d46eb5c15776683d64b85
);

marker_3e149d7f86f20911f371bd3fc721467a.bindTooltip(
  `<div>
                     ChargeZone - Versova
                 </div>`,
  {
    sticky: true,
  }
);

marker_3e149d7f86f20911f371bd3fc721467a.setIcon(
  icon_7dd6884f5d8406b6fd0829440fe7dbb6
);

var marker_f393fccbba37cd6fe76afd42bd7687c4 = L.marker(
  [19.072, 72.8821],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_68aa5bc182f2cf3a167fec1a87049042 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c7ac4409b19eec4aec08de32a118d8e2 = L.popup({
  maxWidth: 350,
});

var html_0f47a6e0ca3c7a08661ed010e35c6a9f = $(
  `<div id="html_0f47a6e0ca3c7a08661ed010e35c6a9f" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Kurla Nehru Nagar</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Nehru Nagar Bus Stand, Kurla East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 39.29742253 kWh<br>     <b>Energy Consumed:</b> 21.0022301 kWh<br>     <b>Charging Duration:</b> 0.8 mins<br>     <b>Charging Rate:</b> 26.23272288 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c7ac4409b19eec4aec08de32a118d8e2.setContent(
  html_0f47a6e0ca3c7a08661ed010e35c6a9f
);

marker_f393fccbba37cd6fe76afd42bd7687c4.bindPopup(
  popup_c7ac4409b19eec4aec08de32a118d8e2
);

marker_f393fccbba37cd6fe76afd42bd7687c4.bindTooltip(
  `<div>
                     Statiq - Kurla Nehru Nagar
                 </div>`,
  {
    sticky: true,
  }
);

marker_f393fccbba37cd6fe76afd42bd7687c4.setIcon(
  icon_68aa5bc182f2cf3a167fec1a87049042
);

var marker_960d09b310a3013f9a7243eacb81ae25 = L.marker(
  [19.3134, 72.8476],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b1eee979e0f2efbbc6552ac04581335a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a92fd61674ea0e21e772bd281a96dab7 = L.popup({
  maxWidth: 350,
});

var html_33dee465918401ef3e5a3fee209384de = $(
  `<div id="html_33dee465918401ef3e5a3fee209384de" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bhayandar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Bhayandar West Station Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 34.80201788 kWh<br>     <b>Charging Duration:</b> 2.1 mins<br>     <b>Charging Rate:</b> 16.59673018 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a92fd61674ea0e21e772bd281a96dab7.setContent(
  html_33dee465918401ef3e5a3fee209384de
);

marker_960d09b310a3013f9a7243eacb81ae25.bindPopup(
  popup_a92fd61674ea0e21e772bd281a96dab7
);

marker_960d09b310a3013f9a7243eacb81ae25.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bhayandar
                 </div>`,
  {
    sticky: true,
  }
);

marker_960d09b310a3013f9a7243eacb81ae25.setIcon(
  icon_b1eee979e0f2efbbc6552ac04581335a
);

var marker_d4645ad79936bb7ca39c1b2f4680ba9b = L.marker(
  [19.1372, 72.8276],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d3888f22a619bd2344f5733cfc9d7f4e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_84f8a3fa300780a56ccda8a9ecb54d3c = L.popup({
  maxWidth: 350,
});

var html_3fde40ebaca9020cdc6a166c8774204d = $(
  `<div id="html_3fde40ebaca9020cdc6a166c8774204d" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Andheri West</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Near Infiniti Mall, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 41.95057477 kWh<br>     <b>Charging Duration:</b> 1.07 mins<br>     <b>Charging Rate:</b> 39.2570047 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_84f8a3fa300780a56ccda8a9ecb54d3c.setContent(
  html_3fde40ebaca9020cdc6a166c8774204d
);

marker_d4645ad79936bb7ca39c1b2f4680ba9b.bindPopup(
  popup_84f8a3fa300780a56ccda8a9ecb54d3c
);

marker_d4645ad79936bb7ca39c1b2f4680ba9b.bindTooltip(
  `<div>
                     Kazam - Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_d4645ad79936bb7ca39c1b2f4680ba9b.setIcon(
  icon_d3888f22a619bd2344f5733cfc9d7f4e
);

var marker_d54c18e52ecf4eaea428731178a6e23d = L.marker(
  [19.0708, 72.9991],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4feb0811269428b6a9824fd128b1916a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2acc1ad0d8e54fd0a5df5b8d7a591ede = L.popup({
  maxWidth: 350,
});

var html_778c84300220901c5103c26ae81a84c5 = $(
  `<div id="html_778c84300220901c5103c26ae81a84c5" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Vashi</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Vashi Station East, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 11.48343149 kWh<br>     <b>Charging Duration:</b> 0.53 mins<br>     <b>Charging Rate:</b> 21.47990189 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_2acc1ad0d8e54fd0a5df5b8d7a591ede.setContent(
  html_778c84300220901c5103c26ae81a84c5
);

marker_d54c18e52ecf4eaea428731178a6e23d.bindPopup(
  popup_2acc1ad0d8e54fd0a5df5b8d7a591ede
);

marker_d54c18e52ecf4eaea428731178a6e23d.bindTooltip(
  `<div>
                     ChargeZone - Vashi
                 </div>`,
  {
    sticky: true,
  }
);

marker_d54c18e52ecf4eaea428731178a6e23d.setIcon(
  icon_4feb0811269428b6a9824fd128b1916a
);

var marker_fe5e300c9ed1265b45d7bc25017a27d1 = L.marker(
  [18.9892, 73.117],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1cbf5908426ea42994b5e3710369894d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d4922d35274b4ec43208695c2ca07339 = L.popup({
  maxWidth: 350,
});

var html_fddb8fa2bb45e691372c5de2d6a56f2c = $(
  `<div id="html_fddb8fa2bb45e691372c5de2d6a56f2c" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Panvel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Orion Mall, Panvel<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 15.25417073 kWh<br>     <b>Charging Duration:</b> 2.26 mins<br>     <b>Charging Rate:</b> 6.762530034 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_d4922d35274b4ec43208695c2ca07339.setContent(
  html_fddb8fa2bb45e691372c5de2d6a56f2c
);

marker_fe5e300c9ed1265b45d7bc25017a27d1.bindPopup(
  popup_d4922d35274b4ec43208695c2ca07339
);

marker_fe5e300c9ed1265b45d7bc25017a27d1.bindTooltip(
  `<div>
                     Statiq - Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_fe5e300c9ed1265b45d7bc25017a27d1.setIcon(
  icon_1cbf5908426ea42994b5e3710369894d
);

var marker_db3306fad369f655c981a32316e2a044 = L.marker(
  [19.0094, 72.8394],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d9c8e7c0d33f494ca6b815d05088fbf1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9a67c51b6e20fc277915066bcf028969 = L.popup({
  maxWidth: 350,
});

var html_ca4b5a5574b71390544af2729d0aabfb = $(
  `<div id="html_ca4b5a5574b71390544af2729d0aabfb" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Parel</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Dr Ambedkar Rd, Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 45.0685333 kWh<br>     <b>Charging Duration:</b> 1.1 mins<br>     <b>Charging Rate:</b> 41.03311514 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9a67c51b6e20fc277915066bcf028969.setContent(
  html_ca4b5a5574b71390544af2729d0aabfb
);

marker_db3306fad369f655c981a32316e2a044.bindPopup(
  popup_9a67c51b6e20fc277915066bcf028969
);

marker_db3306fad369f655c981a32316e2a044.bindTooltip(
  `<div>
                     Kazam - Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_db3306fad369f655c981a32316e2a044.setIcon(
  icon_d9c8e7c0d33f494ca6b815d05088fbf1
);

var marker_80993c693a5398024e6959d90a406f88 = L.marker(
  [19.037, 72.9235],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8d5d469a5f75bf3db71b6f189d49fa82 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c3bb6d07bfe88636a7ac329effc50b5a = L.popup({
  maxWidth: 350,
});

var html_d1133c3ebe35b1778afef3149a49b26c = $(
  `<div id="html_d1133c3ebe35b1778afef3149a49b26c" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Trombay</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Anushakti Nagar, Trombay, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 64.87047474 kWh<br>     <b>Charging Duration:</b> 1.66 mins<br>     <b>Charging Rate:</b> 38.98816937 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c3bb6d07bfe88636a7ac329effc50b5a.setContent(
  html_d1133c3ebe35b1778afef3149a49b26c
);

marker_80993c693a5398024e6959d90a406f88.bindPopup(
  popup_c3bb6d07bfe88636a7ac329effc50b5a
);

marker_80993c693a5398024e6959d90a406f88.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Trombay
                 </div>`,
  {
    sticky: true,
  }
);

marker_80993c693a5398024e6959d90a406f88.setIcon(
  icon_8d5d469a5f75bf3db71b6f189d49fa82
);

var marker_a21b63c516cd520cf89baa39469dd974 = L.marker(
  [19.17674569, 72.94574801],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4c952dce2873af40be5aeaf1b12f3443 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2362555ec3c0c7d2de0c7cd2046a97f9 = L.popup({
  maxWidth: 350,
});

var html_7471726fca9f5fda357a4fdca7241742 = $(
  `<div id="html_7471726fca9f5fda357a4fdca7241742" style="width: 100.0%; height: 100.0%;">     <h4>Masstech controls Pvt ltd</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> 2/7 Meghal Industrial Estate, Devidayal Road, Mulund West, Mumbai, Maharashtra 400080<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 25.13233553 kWh<br>     <b>Charging Duration:</b> 1.55 mins<br>     <b>Charging Rate:</b> 16.20549351 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_2362555ec3c0c7d2de0c7cd2046a97f9.setContent(
  html_7471726fca9f5fda357a4fdca7241742
);

marker_a21b63c516cd520cf89baa39469dd974.bindPopup(
  popup_2362555ec3c0c7d2de0c7cd2046a97f9
);

marker_a21b63c516cd520cf89baa39469dd974.bindTooltip(
  `<div>
                     Masstech controls Pvt ltd
                 </div>`,
  {
    sticky: true,
  }
);

marker_a21b63c516cd520cf89baa39469dd974.setIcon(
  icon_4c952dce2873af40be5aeaf1b12f3443
);

var marker_7e4bb82837848ed919787fcbe7a0414b = L.marker(
  [18.9255, 72.8234],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_26e6166dbb9ce41857d41e38d19520f5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d2fabb1cc55db014fa5ae8b140ad0950 = L.popup({
  maxWidth: 350,
});

var html_ed63bb9e09adc5205563c9d9c7144e80 = $(
  `<div id="html_ed63bb9e09adc5205563c9d9c7144e80" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Nariman Point</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> CR2 Mall Parking, Nariman Point, Mumbai, MH 400021<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 67.45124177 kWh<br>     <b>Charging Duration:</b> 1.5 mins<br>     <b>Charging Rate:</b> 45.01922284 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d2fabb1cc55db014fa5ae8b140ad0950.setContent(
  html_ed63bb9e09adc5205563c9d9c7144e80
);

marker_7e4bb82837848ed919787fcbe7a0414b.bindPopup(
  popup_d2fabb1cc55db014fa5ae8b140ad0950
);

marker_7e4bb82837848ed919787fcbe7a0414b.bindTooltip(
  `<div>
                     Tata Power - Nariman Point
                 </div>`,
  {
    sticky: true,
  }
);

marker_7e4bb82837848ed919787fcbe7a0414b.setIcon(
  icon_26e6166dbb9ce41857d41e38d19520f5
);

var marker_f48955e32deeaf6f441787dcd5744ea8 = L.marker(
  [19.0155, 72.8275],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_25e555d9e7dbfc24c71efbefc8d246c8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_de34d0429206285427f6aa631f6d155b = L.popup({
  maxWidth: 350,
});

var html_b0035278094689a05b36b9727282c887 = $(
  `<div id="html_b0035278094689a05b36b9727282c887" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Prabhadevi</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Century Bazaar, Prabhadevi, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 21.81937874 kWh<br>     <b>Charging Duration:</b> 20.89046305 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_de34d0429206285427f6aa631f6d155b.setContent(
  html_b0035278094689a05b36b9727282c887
);

marker_f48955e32deeaf6f441787dcd5744ea8.bindPopup(
  popup_de34d0429206285427f6aa631f6d155b
);

marker_f48955e32deeaf6f441787dcd5744ea8.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Prabhadevi
                 </div>`,
  {
    sticky: true,
  }
);

marker_f48955e32deeaf6f441787dcd5744ea8.setIcon(
  icon_25e555d9e7dbfc24c71efbefc8d246c8
);

var marker_82cf9629ce224ef9a5b949265feb9a17 = L.marker(
  [19.0588, 72.8703],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e0e623d31360a40c79f4395ab33e1b76 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8e868d59d3439a4043d3fdc50b103c31 = L.popup({
  maxWidth: 350,
});

var html_d02f68445f200b38c67520a6cf2e0aad = $(
  `<div id="html_d02f68445f200b38c67520a6cf2e0aad" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Bandra Kurla Complex</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Next to Bharat Diamond Bourse, BKC, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 60.12372287 kWh<br>     <b>Charging Duration:</b> 1.96 mins<br>     <b>Charging Rate:</b> 30.65934381 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_8e868d59d3439a4043d3fdc50b103c31.setContent(
  html_d02f68445f200b38c67520a6cf2e0aad
);

marker_82cf9629ce224ef9a5b949265feb9a17.bindPopup(
  popup_8e868d59d3439a4043d3fdc50b103c31
);

marker_82cf9629ce224ef9a5b949265feb9a17.bindTooltip(
  `<div>
                     Statiq - Bandra Kurla Complex
                 </div>`,
  {
    sticky: true,
  }
);

marker_82cf9629ce224ef9a5b949265feb9a17.setIcon(
  icon_e0e623d31360a40c79f4395ab33e1b76
);

var marker_3971e53a85ef2e06cd7114a24949bcf3 = L.marker(
  [19.1339, 73.0011],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_15297587869f674e1d646cb523d9b777 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_60dbebf75c64b77a67dd545d427eb5c1 = L.popup({
  maxWidth: 350,
});

var html_277784d73734e7dc16c99abff879af9a = $(
  `<div id="html_277784d73734e7dc16c99abff879af9a" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - Ghansoli</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Ghansoli Station East, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 28.57887808 kWh<br>     <b>Charging Duration:</b> 1.51 mins<br>     <b>Charging Rate:</b> 18.89050926 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_60dbebf75c64b77a67dd545d427eb5c1.setContent(
  html_277784d73734e7dc16c99abff879af9a
);

marker_3971e53a85ef2e06cd7114a24949bcf3.bindPopup(
  popup_60dbebf75c64b77a67dd545d427eb5c1
);

marker_3971e53a85ef2e06cd7114a24949bcf3.bindTooltip(
  `<div>
                     Volttic - Ghansoli
                 </div>`,
  {
    sticky: true,
  }
);

marker_3971e53a85ef2e06cd7114a24949bcf3.setIcon(
  icon_15297587869f674e1d646cb523d9b777
);

var marker_6808beed857da1c2c69e846158a0aedb = L.marker(
  [18.9959, 72.8532],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e10381c18ea19a08a0aa8861df79c543 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c02215978b64e64136f87c5b51481cb4 = L.popup({
  maxWidth: 350,
});

var html_a0c34bc8da71d3794db7f2ded0428d4e = $(
  `<div id="html_a0c34bc8da71d3794db7f2ded0428d4e" style="width: 100.0%; height: 100.0%;">     <h4>Ather Grid - Sewri</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Next to VRL Logistics, Ashok Gardens, PD’Mello Rd, Sewri West, Mumbai 400033<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 21.13404478 kWh<br>     <b>Charging Duration:</b> 0.65 mins<br>     <b>Charging Rate:</b> 32.2920457 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_c02215978b64e64136f87c5b51481cb4.setContent(
  html_a0c34bc8da71d3794db7f2ded0428d4e
);

marker_6808beed857da1c2c69e846158a0aedb.bindPopup(
  popup_c02215978b64e64136f87c5b51481cb4
);

marker_6808beed857da1c2c69e846158a0aedb.bindTooltip(
  `<div>
                     Ather Grid - Sewri
                 </div>`,
  {
    sticky: true,
  }
);

marker_6808beed857da1c2c69e846158a0aedb.setIcon(
  icon_e10381c18ea19a08a0aa8861df79c543
);

var marker_d31eebda31b60799b2b3ff3c5fb93e73 = L.marker(
  [19.0028, 73.1076],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2d54c67bcdf5ed431b9c5228f052e1b1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b07afef5d99975fb86ce869defa95d62 = L.popup({
  maxWidth: 350,
});

var html_db3f4eb197d9c3af1c7d2d3198a584dc = $(
  `<div id="html_db3f4eb197d9c3af1c7d2d3198a584dc" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Khandeshwar</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Khandeshwar Railway Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 79.39006382 kWh<br>     <b>Charging Duration:</b> 4.15 mins<br>     <b>Charging Rate:</b> 19.13778917 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_b07afef5d99975fb86ce869defa95d62.setContent(
  html_db3f4eb197d9c3af1c7d2d3198a584dc
);

marker_d31eebda31b60799b2b3ff3c5fb93e73.bindPopup(
  popup_b07afef5d99975fb86ce869defa95d62
);

marker_d31eebda31b60799b2b3ff3c5fb93e73.bindTooltip(
  `<div>
                     Tata Power - Khandeshwar
                 </div>`,
  {
    sticky: true,
  }
);

marker_d31eebda31b60799b2b3ff3c5fb93e73.setIcon(
  icon_2d54c67bcdf5ed431b9c5228f052e1b1
);

var marker_cd08add02f477c4fab4294a65f194a42 = L.marker(
  [19.1866, 72.9728],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_73582e9cd2579970b4895459c4eb5ae3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0e1de8f8b10a8454b44873205aff5596 = L.popup({
  maxWidth: 350,
});

var html_6a344b9c3e7a7e62d1c84ecad2645d0f = $(
  `<div id="html_6a344b9c3e7a7e62d1c84ecad2645d0f" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Thane</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Eastern Express Hwy, Near Viviana Mall, Thane, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 1.25 mins<br>     <b>Charging Rate:</b> 34.69206917 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_0e1de8f8b10a8454b44873205aff5596.setContent(
  html_6a344b9c3e7a7e62d1c84ecad2645d0f
);

marker_cd08add02f477c4fab4294a65f194a42.bindPopup(
  popup_0e1de8f8b10a8454b44873205aff5596
);

marker_cd08add02f477c4fab4294a65f194a42.bindTooltip(
  `<div>
                     Kazam - Thane
                 </div>`,
  {
    sticky: true,
  }
);

marker_cd08add02f477c4fab4294a65f194a42.setIcon(
  icon_73582e9cd2579970b4895459c4eb5ae3
);

var marker_27a8c9cfedc1f161e006ecf9678600fa = L.marker(
  [19.0418, 73.0634],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ff2eb72a0e093a2b31be6c462b5a9f5c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e5d3ebbf61f7ceb06ccd136289b372ff = L.popup({
  maxWidth: 350,
});

var html_956e2ba0e19e529772ccf9adfb0a9aa8 = $(
  `<div id="html_956e2ba0e19e529772ccf9adfb0a9aa8" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Kharghar Central Park</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Central Park Parking, Kharghar, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 64.60983161 kWh<br>     <b>Charging Duration:</b> 16.19 mins<br>     <b>Charging Rate:</b> 3.991359551 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e5d3ebbf61f7ceb06ccd136289b372ff.setContent(
  html_956e2ba0e19e529772ccf9adfb0a9aa8
);

marker_27a8c9cfedc1f161e006ecf9678600fa.bindPopup(
  popup_e5d3ebbf61f7ceb06ccd136289b372ff
);

marker_27a8c9cfedc1f161e006ecf9678600fa.bindTooltip(
  `<div>
                     Statiq - Kharghar Central Park
                 </div>`,
  {
    sticky: true,
  }
);

marker_27a8c9cfedc1f161e006ecf9678600fa.setIcon(
  icon_ff2eb72a0e093a2b31be6c462b5a9f5c
);

var marker_138da046d21b910d8202ea791eca053a = L.marker(
  [19.0836, 72.9136],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9f1f9b274df26d660907c19e2e4aa28c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_297bbe896fc2b02d53bfc0e641b833e9 = L.popup({
  maxWidth: 350,
});

var html_bd2e182da6405e7681ce8c1c5118f926 = $(
  `<div id="html_bd2e182da6405e7681ce8c1c5118f926" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Ghatkopar</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Ghatkopar East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 34.38288065 kWh<br>     <b>Charging Duration:</b> 5.24 mins<br>     <b>Charging Rate:</b> 6.558201297 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_297bbe896fc2b02d53bfc0e641b833e9.setContent(
  html_bd2e182da6405e7681ce8c1c5118f926
);

marker_138da046d21b910d8202ea791eca053a.bindPopup(
  popup_297bbe896fc2b02d53bfc0e641b833e9
);

marker_138da046d21b910d8202ea791eca053a.bindTooltip(
  `<div>
                     Statiq - Ghatkopar
                 </div>`,
  {
    sticky: true,
  }
);

marker_138da046d21b910d8202ea791eca053a.setIcon(
  icon_9f1f9b274df26d660907c19e2e4aa28c
);

var marker_b6c7d0c86801a7aff6694541658bb634 = L.marker(
  [19.2263, 73.0965],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_51622cc496c7749e3d51357cdbffa3af = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_933661d92707ff1d3cc8ff26d7db777a = L.popup({
  maxWidth: 350,
});

var html_b7a5c4c686e57ba4e562bdbd4695b91f = $(
  `<div id="html_b7a5c4c686e57ba4e562bdbd4695b91f" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Palava City</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Lodha Xperia Mall, Palava City, Dombivli<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 37.42669941 kWh<br>     <b>Charging Duration:</b> 2.2 mins<br>     <b>Charging Rate:</b> 16.98014038 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_933661d92707ff1d3cc8ff26d7db777a.setContent(
  html_b7a5c4c686e57ba4e562bdbd4695b91f
);

marker_b6c7d0c86801a7aff6694541658bb634.bindPopup(
  popup_933661d92707ff1d3cc8ff26d7db777a
);

marker_b6c7d0c86801a7aff6694541658bb634.bindTooltip(
  `<div>
                     Statiq - Palava City
                 </div>`,
  {
    sticky: true,
  }
);

marker_b6c7d0c86801a7aff6694541658bb634.setIcon(
  icon_51622cc496c7749e3d51357cdbffa3af
);

var marker_b5e724b5c09ed9cc698731ece41d11d3 = L.marker(
  [18.989356, 72.825234],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9dd3236f2144234d31812c0606466f32 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5b33f2c7dfb37165f1c6ec7c136916d7 = L.popup({
  maxWidth: 350,
});

var html_5625124743ff2531a703515a1eac4109 = $(
  `<div id="html_5625124743ff2531a703515a1eac4109" style="width: 100.0%; height: 100.0%;">     <h4>Blue Tokai Coffee</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Unit 20-22, Laxmi Woollen Mill, Opposite Blue Loft, Dr E Moses Marg, Off, Shakti Mills Ln, Mahalakshmi, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 75.62248861 kWh<br>     <b>Charging Duration:</b> 4.5 mins<br>     <b>Charging Rate:</b> 16.79147373 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5b33f2c7dfb37165f1c6ec7c136916d7.setContent(
  html_5625124743ff2531a703515a1eac4109
);

marker_b5e724b5c09ed9cc698731ece41d11d3.bindPopup(
  popup_5b33f2c7dfb37165f1c6ec7c136916d7
);

marker_b5e724b5c09ed9cc698731ece41d11d3.bindTooltip(
  `<div>
                     Blue Tokai Coffee
                 </div>`,
  {
    sticky: true,
  }
);

marker_b5e724b5c09ed9cc698731ece41d11d3.setIcon(
  icon_9dd3236f2144234d31812c0606466f32
);

var marker_072bf89c7af566d017c93c6bf862b71b = L.marker(
  [19.0734, 72.8892],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2908c2f5437687193057b876aa64a25d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_875e9517855b5fcddddcdefc246ea6ec = L.popup({
  maxWidth: 350,
});

var html_25031fb4337473351a68bc6b9d1fd034 = $(
  `<div id="html_25031fb4337473351a68bc6b9d1fd034" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Tilak Nagar</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Tilak Nagar Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 66.85109294 kWh<br>     <b>Charging Duration:</b> 3.3 mins<br>     <b>Charging Rate:</b> 20.27113939 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_875e9517855b5fcddddcdefc246ea6ec.setContent(
  html_25031fb4337473351a68bc6b9d1fd034
);

marker_072bf89c7af566d017c93c6bf862b71b.bindPopup(
  popup_875e9517855b5fcddddcdefc246ea6ec
);

marker_072bf89c7af566d017c93c6bf862b71b.bindTooltip(
  `<div>
                     Tata Power - Tilak Nagar
                 </div>`,
  {
    sticky: true,
  }
);

marker_072bf89c7af566d017c93c6bf862b71b.setIcon(
  icon_2908c2f5437687193057b876aa64a25d
);

var marker_6e901ed33d9ef76a08c0f80e300c5434 = L.marker(
  [18.9285, 72.8255],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9d74112017286636682e7424d4dfcfc6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_45af1ef5d0dac6caa13ed23515c7d432 = L.popup({
  maxWidth: 350,
});

var html_1344043a5e24b1b1a9aa9aef50c1a72c = $(
  `<div id="html_1344043a5e24b1b1a9aa9aef50c1a72c" style="width: 100.0%; height: 100.0%;">     <h4>HP Super Service DC Charging Station</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> 157, Jeevan Bima Marg, Backbay Reclamation, Churchgate, Mumbai, Maharashtra 400020, India<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 32.34799933 kWh<br>     <b>Charging Duration:</b> 2.13 mins<br>     <b>Charging Rate:</b> 15.17023592 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_45af1ef5d0dac6caa13ed23515c7d432.setContent(
  html_1344043a5e24b1b1a9aa9aef50c1a72c
);

marker_6e901ed33d9ef76a08c0f80e300c5434.bindPopup(
  popup_45af1ef5d0dac6caa13ed23515c7d432
);

marker_6e901ed33d9ef76a08c0f80e300c5434.bindTooltip(
  `<div>
                     HP Super Service DC Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_6e901ed33d9ef76a08c0f80e300c5434.setIcon(
  icon_9d74112017286636682e7424d4dfcfc6
);

var marker_42da849b21465471e3eea2cb61b39034 = L.marker(
  [19.1146, 72.8696],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_027b76b46ed7d4a8a29955753d86f935 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_73824b94896ec0a011830e8fafef129f = L.popup({
  maxWidth: 350,
});

var html_5d67e7e02bd409f39097404881442e8f = $(
  `<div id="html_5d67e7e02bd409f39097404881442e8f" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Andheri East</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Andheri East Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.48 mins<br>     <b>Charging Rate:</b> 21.4576929 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_73824b94896ec0a011830e8fafef129f.setContent(
  html_5d67e7e02bd409f39097404881442e8f
);

marker_42da849b21465471e3eea2cb61b39034.bindPopup(
  popup_73824b94896ec0a011830e8fafef129f
);

marker_42da849b21465471e3eea2cb61b39034.bindTooltip(
  `<div>
                     Statiq - Andheri East
                 </div>`,
  {
    sticky: true,
  }
);

marker_42da849b21465471e3eea2cb61b39034.setIcon(
  icon_027b76b46ed7d4a8a29955753d86f935
);

var marker_4b55320c2cc2c1b61e730ec71a118b68 = L.marker(
  [19.0313299, 72.8809653],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7c2db33d01445b5567f52fc27c2b9e7f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9121f82dd14891fede9b1a9dcc80044e = L.popup({
  maxWidth: 350,
});

var html_39cacfc3ffd8bf979e6f21b656adfd75 = $(
  `<div id="html_39cacfc3ffd8bf979e6f21b656adfd75" style="width: 100.0%; height: 100.0%;">     <h4>Carnival Cinemas Imax</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Carnival Cinemas Imax, Anik Wadala Link Rd, Bhakti Park, Wadala, Mumbai, Maharashtra ,Worli<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 71.97510218 kWh<br>     <b>Charging Duration:</b> 3.04 mins<br>     <b>Charging Rate:</b> 23.65002521 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_9121f82dd14891fede9b1a9dcc80044e.setContent(
  html_39cacfc3ffd8bf979e6f21b656adfd75
);

marker_4b55320c2cc2c1b61e730ec71a118b68.bindPopup(
  popup_9121f82dd14891fede9b1a9dcc80044e
);

marker_4b55320c2cc2c1b61e730ec71a118b68.bindTooltip(
  `<div>
                     Carnival Cinemas Imax
                 </div>`,
  {
    sticky: true,
  }
);

marker_4b55320c2cc2c1b61e730ec71a118b68.setIcon(
  icon_7c2db33d01445b5567f52fc27c2b9e7f
);

var marker_bf00fdddc7ad47744a466405c3d53bb5 = L.marker(
  [19.0302, 72.8927],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_115b261bb81d36d1fb20e16cee5b827e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4427aaa4d68168dded10b6ad57b746fc = L.popup({
  maxWidth: 350,
});

var html_9128a734ae20b3b34e7ebfb74b468cda = $(
  `<div id="html_9128a734ae20b3b34e7ebfb74b468cda" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power Charging Station</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Anik Depot, Municipal Kamgar Vasahat, Trombay Industrial Area, Chembur, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 75.40700954 kWh<br>     <b>Charging Duration:</b> 4.25 mins<br>     <b>Charging Rate:</b> 17.72970872 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_4427aaa4d68168dded10b6ad57b746fc.setContent(
  html_9128a734ae20b3b34e7ebfb74b468cda
);

marker_bf00fdddc7ad47744a466405c3d53bb5.bindPopup(
  popup_4427aaa4d68168dded10b6ad57b746fc
);

marker_bf00fdddc7ad47744a466405c3d53bb5.bindTooltip(
  `<div>
                     Tata Power Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_bf00fdddc7ad47744a466405c3d53bb5.setIcon(
  icon_115b261bb81d36d1fb20e16cee5b827e
);

var marker_64a5647f55027eac6ac815474f548ca9 = L.marker(
  [19.0836, 72.9136],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9c8dc06b6195fa6a57504f1259cdffc3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5618c49503381f16b823274839a3244d = L.popup({
  maxWidth: 350,
});

var html_697df011a37e2e44e47108e03de71890 = $(
  `<div id="html_697df011a37e2e44e47108e03de71890" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Ghatkopar</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Ghatkopar East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 28.27985715 kWh<br>     <b>Charging Duration:</b> 2.14 mins<br>     <b>Charging Rate:</b> 13.22697476 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5618c49503381f16b823274839a3244d.setContent(
  html_697df011a37e2e44e47108e03de71890
);

marker_64a5647f55027eac6ac815474f548ca9.bindPopup(
  popup_5618c49503381f16b823274839a3244d
);

marker_64a5647f55027eac6ac815474f548ca9.bindTooltip(
  `<div>
                     Statiq - Ghatkopar
                 </div>`,
  {
    sticky: true,
  }
);

marker_64a5647f55027eac6ac815474f548ca9.setIcon(
  icon_9c8dc06b6195fa6a57504f1259cdffc3
);

var marker_57dfa954792daadc7b2225a9613803e8 = L.marker(
  [19.0588, 72.8703],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_018f3754b94369599a9eca7b2ca07aa4 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_157c50e0db083653f79ef257e9cbd90f = L.popup({
  maxWidth: 350,
});

var html_43095644f6049e57faf208f112bfa236 = $(
  `<div id="html_43095644f6049e57faf208f112bfa236" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Bandra Kurla Complex</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Next to Bharat Diamond Bourse, BKC, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 21.42275953 kWh<br>     <b>Charging Duration:</b> 2.33 mins<br>     <b>Charging Rate:</b> 9.189077429 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_157c50e0db083653f79ef257e9cbd90f.setContent(
  html_43095644f6049e57faf208f112bfa236
);

marker_57dfa954792daadc7b2225a9613803e8.bindPopup(
  popup_157c50e0db083653f79ef257e9cbd90f
);

marker_57dfa954792daadc7b2225a9613803e8.bindTooltip(
  `<div>
                     Statiq - Bandra Kurla Complex
                 </div>`,
  {
    sticky: true,
  }
);

marker_57dfa954792daadc7b2225a9613803e8.setIcon(
  icon_018f3754b94369599a9eca7b2ca07aa4
);

var marker_b224e707b53e2aebd75479a9accc00ca = L.marker(
  [19.11637, 72.91086],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a1af004d71f640520a2a6e74b56b64f0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c59ec5d314a4a2001ebc87c98b0a3f2f = L.popup({
  maxWidth: 350,
});

var html_2a9ffadde8ebc4a215a0f68b1ab7a26a = $(
  `<div id="html_2a9ffadde8ebc4a215a0f68b1ab7a26a" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Spectra, High St, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 22.01644361 kWh<br>     <b>Charging Duration:</b> 0.53 mins<br>     <b>Charging Rate:</b> 41.19625064 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c59ec5d314a4a2001ebc87c98b0a3f2f.setContent(
  html_2a9ffadde8ebc4a215a0f68b1ab7a26a
);

marker_b224e707b53e2aebd75479a9accc00ca.bindPopup(
  popup_c59ec5d314a4a2001ebc87c98b0a3f2f
);

marker_b224e707b53e2aebd75479a9accc00ca.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_b224e707b53e2aebd75479a9accc00ca.setIcon(
  icon_a1af004d71f640520a2a6e74b56b64f0
);

var marker_5d9e0fc59da38ebd35b2c74d839357ce = L.marker(
  [19.11644, 72.90968],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d6f72538c27edf085a85e8153ffaf9e2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9d02a0d752cbcd5a8feb67710ad6bd71 = L.popup({
  maxWidth: 350,
});

var html_ff5b03ddac0073e7357b7da987919488 = $(
  `<div id="html_ff5b03ddac0073e7357b7da987919488" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Pay & Park, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 22.01644361 kWh<br>     <b>Charging Duration:</b> 0.53 mins<br>     <b>Charging Rate:</b> 41.19625064 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_9d02a0d752cbcd5a8feb67710ad6bd71.setContent(
  html_ff5b03ddac0073e7357b7da987919488
);

marker_5d9e0fc59da38ebd35b2c74d839357ce.bindPopup(
  popup_9d02a0d752cbcd5a8feb67710ad6bd71
);

marker_5d9e0fc59da38ebd35b2c74d839357ce.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_5d9e0fc59da38ebd35b2c74d839357ce.setIcon(
  icon_d6f72538c27edf085a85e8153ffaf9e2
);

var marker_5fca8e682771a42730f377d3e0441eba = L.marker(
  [19.0165, 72.8605],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_5855cb747c3ed881a83e4f4beb30d80a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_990c04124354f84316be1743e65d62b0 = L.popup({
  maxWidth: 350,
});

var html_bd1afe6bb270b5740ccade10cb13b1a2 = $(
  `<div id="html_bd1afe6bb270b5740ccade10cb13b1a2" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Antop Hill</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Antop Hill Post Office, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 49.73870005 kWh<br>     <b>Charging Duration:</b> 1.51 mins<br>     <b>Charging Rate:</b> 32.86836958 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_990c04124354f84316be1743e65d62b0.setContent(
  html_bd1afe6bb270b5740ccade10cb13b1a2
);

marker_5fca8e682771a42730f377d3e0441eba.bindPopup(
  popup_990c04124354f84316be1743e65d62b0
);

marker_5fca8e682771a42730f377d3e0441eba.bindTooltip(
  `<div>
                     Tata Power - Antop Hill
                 </div>`,
  {
    sticky: true,
  }
);

marker_5fca8e682771a42730f377d3e0441eba.setIcon(
  icon_5855cb747c3ed881a83e4f4beb30d80a
);

var marker_943ae9236eb13c8f9d799467a7282380 = L.marker(
  [19.0387, 73.0222],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_3301cc5d5a6abdb96f759396f3481eb7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a2a1b5346179a85832eb21d666a83731 = L.popup({
  maxWidth: 350,
});

var html_97f14cca8f5c62db188a024ed60354d1 = $(
  `<div id="html_97f14cca8f5c62db188a024ed60354d1" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Navi Mumbai</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Seawoods Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 44.95337165 kWh<br>     <b>Charging Duration:</b> 1.32 mins<br>     <b>Charging Rate:</b> 34.04003944 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a2a1b5346179a85832eb21d666a83731.setContent(
  html_97f14cca8f5c62db188a024ed60354d1
);

marker_943ae9236eb13c8f9d799467a7282380.bindPopup(
  popup_a2a1b5346179a85832eb21d666a83731
);

marker_943ae9236eb13c8f9d799467a7282380.bindTooltip(
  `<div>
                     Statiq - Navi Mumbai
                 </div>`,
  {
    sticky: true,
  }
);

marker_943ae9236eb13c8f9d799467a7282380.setIcon(
  icon_3301cc5d5a6abdb96f759396f3481eb7
);

var marker_fbfb6916a64d1c1443f45606ac063ff5 = L.marker(
  [19.0029, 72.824],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c294324ac4c0aeda38c311c0f3c933bf = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_bc18a70d6a1746c3f60966ad75cb942a = L.popup({
  maxWidth: 350,
});

var html_b8eaf1fc46c43872724e4357cfdc2a57 = $(
  `<div id="html_b8eaf1fc46c43872724e4357cfdc2a57" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Parel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Phoenix Mills Compound, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 44.06215479 kWh<br>     <b>Charging Duration:</b> 3.49 mins<br>     <b>Charging Rate:</b> 12.63772843 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_bc18a70d6a1746c3f60966ad75cb942a.setContent(
  html_b8eaf1fc46c43872724e4357cfdc2a57
);

marker_fbfb6916a64d1c1443f45606ac063ff5.bindPopup(
  popup_bc18a70d6a1746c3f60966ad75cb942a
);

marker_fbfb6916a64d1c1443f45606ac063ff5.bindTooltip(
  `<div>
                     Statiq - Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_fbfb6916a64d1c1443f45606ac063ff5.setIcon(
  icon_c294324ac4c0aeda38c311c0f3c933bf
);

var marker_1a01f8742e2c135b654cc5fbfd182d10 = L.marker(
  [19.1339, 73.0011],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_74a11e76c2bb4660105c40e618a130ab = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9e0492895b7adf9f3e0da9ffc2de45cb = L.popup({
  maxWidth: 350,
});

var html_4848731f07788510c52bb0ec0c8d6841 = $(
  `<div id="html_4848731f07788510c52bb0ec0c8d6841" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - Ghansoli</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Ghansoli Station East, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 38.59813941 kWh<br>     <b>Charging Duration:</b> 1.45 mins<br>     <b>Charging Rate:</b> 26.5629522 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9e0492895b7adf9f3e0da9ffc2de45cb.setContent(
  html_4848731f07788510c52bb0ec0c8d6841
);

marker_1a01f8742e2c135b654cc5fbfd182d10.bindPopup(
  popup_9e0492895b7adf9f3e0da9ffc2de45cb
);

marker_1a01f8742e2c135b654cc5fbfd182d10.bindTooltip(
  `<div>
                     Volttic - Ghansoli
                 </div>`,
  {
    sticky: true,
  }
);

marker_1a01f8742e2c135b654cc5fbfd182d10.setIcon(
  icon_74a11e76c2bb4660105c40e618a130ab
);

var marker_da2eb666928cd96fcc66a677953a4aa9 = L.marker(
  [19.2188, 73.0935],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9f26bc55512e78c8fcad7730f3041499 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a459eb81d65b1666e247e3a3b438717a = L.popup({
  maxWidth: 350,
});

var html_5c555ea01a67222a5ce45b895661475e = $(
  `<div id="html_5c555ea01a67222a5ce45b895661475e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Dombivli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Dombivli East Railway Parking, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 79.75044564 kWh<br>     <b>Charging Duration:</b> 10.72779587 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_a459eb81d65b1666e247e3a3b438717a.setContent(
  html_5c555ea01a67222a5ce45b895661475e
);

marker_da2eb666928cd96fcc66a677953a4aa9.bindPopup(
  popup_a459eb81d65b1666e247e3a3b438717a
);

marker_da2eb666928cd96fcc66a677953a4aa9.bindTooltip(
  `<div>
                     Tata Power - Dombivli
                 </div>`,
  {
    sticky: true,
  }
);

marker_da2eb666928cd96fcc66a677953a4aa9.setIcon(
  icon_9f26bc55512e78c8fcad7730f3041499
);

var marker_b3dc097aa3655c6585c5e0a4019faa30 = L.marker(
  [18.9892, 73.117],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4a89865a3d340da1e38664984e4e4bd1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_120746e5473dd7692c563e2ac83252d9 = L.popup({
  maxWidth: 350,
});

var html_e3cfa3ab866e3bb9136b23f105b32198 = $(
  `<div id="html_e3cfa3ab866e3bb9136b23f105b32198" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Panvel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Orion Mall, Panvel<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 66.89909636 kWh<br>     <b>Charging Duration:</b> 1.7 mins<br>     <b>Charging Rate:</b> 39.32414111 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_120746e5473dd7692c563e2ac83252d9.setContent(
  html_e3cfa3ab866e3bb9136b23f105b32198
);

marker_b3dc097aa3655c6585c5e0a4019faa30.bindPopup(
  popup_120746e5473dd7692c563e2ac83252d9
);

marker_b3dc097aa3655c6585c5e0a4019faa30.bindTooltip(
  `<div>
                     Statiq - Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_b3dc097aa3655c6585c5e0a4019faa30.setIcon(
  icon_4a89865a3d340da1e38664984e4e4bd1
);

var marker_366cfd954b1f438a422b40c721c34c6e = L.marker(
  [18.9636, 72.8019],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2985aaa74e487bdf30cd4ac95a7264fb = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d5bafc2f7139edd848b0df8c0e90a2ee = L.popup({
  maxWidth: 350,
});

var html_a808f5c19ec850de84d735ea8a8405fd = $(
  `<div id="html_a808f5c19ec850de84d735ea8a8405fd" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Napean Sea Road</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Priyadarshini Park, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 40.05179662 kWh<br>     <b>Charging Duration:</b> 1.52 mins<br>     <b>Charging Rate:</b> 26.32801687 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d5bafc2f7139edd848b0df8c0e90a2ee.setContent(
  html_a808f5c19ec850de84d735ea8a8405fd
);

marker_366cfd954b1f438a422b40c721c34c6e.bindPopup(
  popup_d5bafc2f7139edd848b0df8c0e90a2ee
);

marker_366cfd954b1f438a422b40c721c34c6e.bindTooltip(
  `<div>
                     Jio-bp Pulse - Napean Sea Road
                 </div>`,
  {
    sticky: true,
  }
);

marker_366cfd954b1f438a422b40c721c34c6e.setIcon(
  icon_2985aaa74e487bdf30cd4ac95a7264fb
);

var marker_3a440d54a807cc9e0ec39ac041c57c81 = L.marker(
  [18.9938, 72.8237],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_aaa6a2bae0060fa4b7725d5c77f721c1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2bfd8dbed54784210659be410b806e2a = L.popup({
  maxWidth: 350,
});

var html_a3cce90013e1a29860b22e0ee95e7f92 = $(
  `<div id="html_a3cce90013e1a29860b22e0ee95e7f92" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Mahalaxmi</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Mahalaxmi Race Course, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 38.36041213 kWh<br>     <b>Charging Duration:</b> 1.0 mins<br>     <b>Charging Rate:</b> 38.34376389 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_2bfd8dbed54784210659be410b806e2a.setContent(
  html_a3cce90013e1a29860b22e0ee95e7f92
);

marker_3a440d54a807cc9e0ec39ac041c57c81.bindPopup(
  popup_2bfd8dbed54784210659be410b806e2a
);

marker_3a440d54a807cc9e0ec39ac041c57c81.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Mahalaxmi
                 </div>`,
  {
    sticky: true,
  }
);

marker_3a440d54a807cc9e0ec39ac041c57c81.setIcon(
  icon_aaa6a2bae0060fa4b7725d5c77f721c1
);

var marker_2ce5fd8ba73b53bc6636e4aaf8d84e7e = L.marker(
  [19.0053, 72.8157],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_3e933693c7a6e62a8e340ed64e17baaf = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ed68a13bcf34ff4d9eccdeb9fb5bd868 = L.popup({
  maxWidth: 350,
});

var html_49b5c71a7271563367c652280158f4da = $(
  `<div id="html_49b5c71a7271563367c652280158f4da" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - Worli Sea Face</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Worli Sea Face Promenade, Worli, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 6.337534265 kWh<br>     <b>Charging Duration:</b> 1.47 mins<br>     <b>Charging Rate:</b> 4.315961671 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ed68a13bcf34ff4d9eccdeb9fb5bd868.setContent(
  html_49b5c71a7271563367c652280158f4da
);

marker_2ce5fd8ba73b53bc6636e4aaf8d84e7e.bindPopup(
  popup_ed68a13bcf34ff4d9eccdeb9fb5bd868
);

marker_2ce5fd8ba73b53bc6636e4aaf8d84e7e.bindTooltip(
  `<div>
                     Volttic - Worli Sea Face
                 </div>`,
  {
    sticky: true,
  }
);

marker_2ce5fd8ba73b53bc6636e4aaf8d84e7e.setIcon(
  icon_3e933693c7a6e62a8e340ed64e17baaf
);

var marker_761cce3cb398de48d8080cd72609363e = L.marker(
  [19.06895357, 73.02251015],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_10fbd57324fdb1c091ffdeb18061a68c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6ad33fb816e888e62048365079153aa0 = L.popup({
  maxWidth: 350,
});

var html_a44e7ace35d4017b0bd5d406c0444811 = $(
  `<div id="html_a44e7ace35d4017b0bd5d406c0444811" style="width: 100.0%; height: 100.0%;">     <h4>Lifeon Industries</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> D298, TTC Industrial area, turbhe<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 6.97877135 kWh<br>     <b>Charging Duration:</b> 0.19 mins<br>     <b>Charging Rate:</b> 35.78892354 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_6ad33fb816e888e62048365079153aa0.setContent(
  html_a44e7ace35d4017b0bd5d406c0444811
);

marker_761cce3cb398de48d8080cd72609363e.bindPopup(
  popup_6ad33fb816e888e62048365079153aa0
);

marker_761cce3cb398de48d8080cd72609363e.bindTooltip(
  `<div>
                     Lifeon Industries
                 </div>`,
  {
    sticky: true,
  }
);

marker_761cce3cb398de48d8080cd72609363e.setIcon(
  icon_10fbd57324fdb1c091ffdeb18061a68c
);

var marker_5cbd3d58d43f3c01c0c0bc159d91d724 = L.marker(
  [19.12012455, 72.88724762],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dfb502e763fe602c1fc17a784cbe5e71 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ece63a632c540417720fe7e5f4286f4f = L.popup({
  maxWidth: 350,
});

var html_de735f5adb67d079979a08bb663caf8e = $(
  `<div id="html_de735f5adb67d079979a08bb663caf8e" style="width: 100.0%; height: 100.0%;">     <h4>Volltic PCS04</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Gala No14 A, KBM compound, military road, raje shivaji nagar, marol, andheri east, 400072<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.42036137 kWh<br>     <b>Charging Duration:</b> 2.09 mins<br>     <b>Charging Rate:</b> 29.9083034 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_ece63a632c540417720fe7e5f4286f4f.setContent(
  html_de735f5adb67d079979a08bb663caf8e
);

marker_5cbd3d58d43f3c01c0c0bc159d91d724.bindPopup(
  popup_ece63a632c540417720fe7e5f4286f4f
);

marker_5cbd3d58d43f3c01c0c0bc159d91d724.bindTooltip(
  `<div>
                     Volltic PCS04
                 </div>`,
  {
    sticky: true,
  }
);

marker_5cbd3d58d43f3c01c0c0bc159d91d724.setIcon(
  icon_dfb502e763fe602c1fc17a784cbe5e71
);

var marker_970c9d86b3aa83ed683551f0c267542f = L.marker(
  [19.0803, 72.8365],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f764930572e0ce149664f3fee4db170a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_dd909b76bf879e118f0bcda2dc55f386 = L.popup({
  maxWidth: 350,
});

var html_e7865a78a23dbfda468e8bbf70119884 = $(
  `<div id="html_e7865a78a23dbfda468e8bbf70119884" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Santacruz</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Santacruz West, Near Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 23.8368801 kWh<br>     <b>Charging Duration:</b> 1.93 mins<br>     <b>Charging Rate:</b> 12.32951236 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_dd909b76bf879e118f0bcda2dc55f386.setContent(
  html_e7865a78a23dbfda468e8bbf70119884
);

marker_970c9d86b3aa83ed683551f0c267542f.bindPopup(
  popup_dd909b76bf879e118f0bcda2dc55f386
);

marker_970c9d86b3aa83ed683551f0c267542f.bindTooltip(
  `<div>
                     Statiq - Santacruz
                 </div>`,
  {
    sticky: true,
  }
);

marker_970c9d86b3aa83ed683551f0c267542f.setIcon(
  icon_f764930572e0ce149664f3fee4db170a
);

var marker_740769c4c1ff359da6bc42ec6cfb5f36 = L.marker(
  [19.0658, 72.8687],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4c20efdc7589d47496978d25bec9c92b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_96ccc9fec525dad2caa86e3e42e993d2 = L.popup({
  maxWidth: 350,
});

var html_1fcb0c0ecdd7e67cf2e7666aecb98a0d = $(
  `<div id="html_1fcb0c0ecdd7e67cf2e7666aecb98a0d" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - BKC</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Bandra Kurla Complex, Bandra East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 47.65326138 kWh<br>     <b>Energy Consumed:</b> 29.34959504 kWh<br>     <b>Charging Duration:</b> 0.97 mins<br>     <b>Charging Rate:</b> 30.32389572 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_96ccc9fec525dad2caa86e3e42e993d2.setContent(
  html_1fcb0c0ecdd7e67cf2e7666aecb98a0d
);

marker_740769c4c1ff359da6bc42ec6cfb5f36.bindPopup(
  popup_96ccc9fec525dad2caa86e3e42e993d2
);

marker_740769c4c1ff359da6bc42ec6cfb5f36.bindTooltip(
  `<div>
                     Volttic - BKC
                 </div>`,
  {
    sticky: true,
  }
);

marker_740769c4c1ff359da6bc42ec6cfb5f36.setIcon(
  icon_4c20efdc7589d47496978d25bec9c92b
);

var marker_5930c678d95a374c418a4e21fd7e9115 = L.marker(
  [19.164, 72.9948],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7e4e0acb2331faa8524fb203377d54f6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e92bea21386f24a36acd1a12fd40064c = L.popup({
  maxWidth: 350,
});

var html_034ac93de6f97fa005c95b08a4d45573 = $(
  `<div id="html_034ac93de6f97fa005c95b08a4d45573" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Airoli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Reliable Plaza, Airoli, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 69.71594631 kWh<br>     <b>Charging Duration:</b> 6.93 mins<br>     <b>Charging Rate:</b> 10.06309377 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e92bea21386f24a36acd1a12fd40064c.setContent(
  html_034ac93de6f97fa005c95b08a4d45573
);

marker_5930c678d95a374c418a4e21fd7e9115.bindPopup(
  popup_e92bea21386f24a36acd1a12fd40064c
);

marker_5930c678d95a374c418a4e21fd7e9115.bindTooltip(
  `<div>
                     Tata Power - Airoli
                 </div>`,
  {
    sticky: true,
  }
);

marker_5930c678d95a374c418a4e21fd7e9115.setIcon(
  icon_7e4e0acb2331faa8524fb203377d54f6
);

var marker_7700a1fb6849c11afbcbfae5098cb91d = L.marker(
  [19.0702, 72.881],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0ec095f7a0a7ee6959c68e20a5bf708a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_31c18ee30c5a7a39686b2ff93d68eab1 = L.popup({
  maxWidth: 350,
});

var html_2764daeb9cff5874bf90d32ded813a78 = $(
  `<div id="html_2764daeb9cff5874bf90d32ded813a78" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Kurla LBS</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> LBS Marg, Kurla West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 69.42235104 kWh<br>     <b>Charging Duration:</b> 7.02 mins<br>     <b>Charging Rate:</b> 9.889820742 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_31c18ee30c5a7a39686b2ff93d68eab1.setContent(
  html_2764daeb9cff5874bf90d32ded813a78
);

marker_7700a1fb6849c11afbcbfae5098cb91d.bindPopup(
  popup_31c18ee30c5a7a39686b2ff93d68eab1
);

marker_7700a1fb6849c11afbcbfae5098cb91d.bindTooltip(
  `<div>
                     Tata Power - Kurla LBS
                 </div>`,
  {
    sticky: true,
  }
);

marker_7700a1fb6849c11afbcbfae5098cb91d.setIcon(
  icon_0ec095f7a0a7ee6959c68e20a5bf708a
);

var marker_6a3fc8468656129eac8d3a5e327454bc = L.marker(
  [19.0852, 72.9114],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_05cf6ede0d2e2ba2a7873e1121742dd2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_677e094b4a81e384ec55989e8d2dc3bd = L.popup({
  maxWidth: 350,
});

var html_1cf3838b16bbd7cbf7e1fddc7294a45d = $(
  `<div id="html_1cf3838b16bbd7cbf7e1fddc7294a45d" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Ghatkopar</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Ghatkopar East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 105.5549669 kWh<br>     <b>Energy Consumed:</b> 48.50288659 kWh<br>     <b>Charging Duration:</b> 1.11 mins<br>     <b>Charging Rate:</b> 43.60970746 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_677e094b4a81e384ec55989e8d2dc3bd.setContent(
  html_1cf3838b16bbd7cbf7e1fddc7294a45d
);

marker_6a3fc8468656129eac8d3a5e327454bc.bindPopup(
  popup_677e094b4a81e384ec55989e8d2dc3bd
);

marker_6a3fc8468656129eac8d3a5e327454bc.bindTooltip(
  `<div>
                     ATUM Charge - Ghatkopar
                 </div>`,
  {
    sticky: true,
  }
);

marker_6a3fc8468656129eac8d3a5e327454bc.setIcon(
  icon_05cf6ede0d2e2ba2a7873e1121742dd2
);

var marker_e92539b73fc9134559ea096022ec9071 = L.marker(
  [19.1372, 72.8276],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d1261ae33b4b8ea08f3935e2008fa9fb = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cf553f316351a20d9a11c1815b74bb17 = L.popup({
  maxWidth: 350,
});

var html_e628fd560c3565d35304e6d4ea9efa0f = $(
  `<div id="html_e628fd560c3565d35304e6d4ea9efa0f" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Andheri West</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Near Infiniti Mall, Andheri West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 45.4711888 kWh<br>     <b>Charging Duration:</b> 0.95 mins<br>     <b>Charging Rate:</b> 48.01145593 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_cf553f316351a20d9a11c1815b74bb17.setContent(
  html_e628fd560c3565d35304e6d4ea9efa0f
);

marker_e92539b73fc9134559ea096022ec9071.bindPopup(
  popup_cf553f316351a20d9a11c1815b74bb17
);

marker_e92539b73fc9134559ea096022ec9071.bindTooltip(
  `<div>
                     Kazam - Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_e92539b73fc9134559ea096022ec9071.setIcon(
  icon_d1261ae33b4b8ea08f3935e2008fa9fb
);

var marker_c77e181ad52996595f9b93ef865997d9 = L.marker(
  [19.1866, 72.9728],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7ff2a11d5c4b345c9a36c10029580395 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_43c83f871204bf5c7ed56ef9eb16f5e7 = L.popup({
  maxWidth: 350,
});

var html_61faec3a5bdb3c10d861704d2fb1eb95 = $(
  `<div id="html_61faec3a5bdb3c10d861704d2fb1eb95" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Thane</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Eastern Express Hwy, Near Viviana Mall, Thane, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 51.20692409 kWh<br>     <b>Charging Duration:</b> 5.13 mins<br>     <b>Charging Rate:</b> 9.977877022 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_43c83f871204bf5c7ed56ef9eb16f5e7.setContent(
  html_61faec3a5bdb3c10d861704d2fb1eb95
);

marker_c77e181ad52996595f9b93ef865997d9.bindPopup(
  popup_43c83f871204bf5c7ed56ef9eb16f5e7
);

marker_c77e181ad52996595f9b93ef865997d9.bindTooltip(
  `<div>
                     Kazam - Thane
                 </div>`,
  {
    sticky: true,
  }
);

marker_c77e181ad52996595f9b93ef865997d9.setIcon(
  icon_7ff2a11d5c4b345c9a36c10029580395
);

var marker_908e366523ebb0025208b3c66d357f39 = L.marker(
  [19.0202, 72.8447],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d04e62dce4271af839baf2a777b78ad1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_162691a440267f899ebcb43a2ee67339 = L.popup({
  maxWidth: 350,
});

var html_4fa46e7059ab853958bc29b65d579d74 = $(
  `<div id="html_4fa46e7059ab853958bc29b65d579d74" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Dadar East</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Mujawar Pakhadi Rd, Dadar East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 101.1029879 kWh<br>     <b>Energy Consumed:</b> 7.275443511 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 21.06032431 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_162691a440267f899ebcb43a2ee67339.setContent(
  html_4fa46e7059ab853958bc29b65d579d74
);

marker_908e366523ebb0025208b3c66d357f39.bindPopup(
  popup_162691a440267f899ebcb43a2ee67339
);

marker_908e366523ebb0025208b3c66d357f39.bindTooltip(
  `<div>
                     Tata Power - Dadar East
                 </div>`,
  {
    sticky: true,
  }
);

marker_908e366523ebb0025208b3c66d357f39.setIcon(
  icon_d04e62dce4271af839baf2a777b78ad1
);

var marker_e8e10a67cd08030ec79e9bea54dd0977 = L.marker(
  [19.04520829, 72.84154175],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8a7c1b23b46a1cd1102a336fda38daa7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_fcb5e110c13d8c0ad333ec752c6c1bc7 = L.popup({
  maxWidth: 350,
});

var html_2333995980f1abc21c50597c3835b9ff = $(
  `<div id="html_2333995980f1abc21c50597c3835b9ff" style="width: 100.0%; height: 100.0%;">     <h4>Xavier Institute of Engineering</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Opposite S.L.Raheja Hospital, Mahim Causeway, Mahim (West), Raheja Hospital Marg, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 47.19744469 kWh<br>     <b>Charging Duration:</b> 2.01 mins<br>     <b>Charging Rate:</b> 23.43002275 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_fcb5e110c13d8c0ad333ec752c6c1bc7.setContent(
  html_2333995980f1abc21c50597c3835b9ff
);

marker_e8e10a67cd08030ec79e9bea54dd0977.bindPopup(
  popup_fcb5e110c13d8c0ad333ec752c6c1bc7
);

marker_e8e10a67cd08030ec79e9bea54dd0977.bindTooltip(
  `<div>
                     Xavier Institute of Engineering
                 </div>`,
  {
    sticky: true,
  }
);

marker_e8e10a67cd08030ec79e9bea54dd0977.setIcon(
  icon_8a7c1b23b46a1cd1102a336fda38daa7
);

var marker_4e085b305d541b6ec377bd31895a20ed = L.marker(
  [19.04527839, 72.84168159],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a2b575b8357ffb31395518e348212f2a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c71cd0b05eef2881d134e5626b8a8274 = L.popup({
  maxWidth: 350,
});

var html_b63ef2613d024746c35371183a886181 = $(
  `<div id="html_b63ef2613d024746c35371183a886181" style="width: 100.0%; height: 100.0%;">     <h4>Xavier Institute of Engineering</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Opposite S.L.Raheja Hospital, Mahim nCauseway, Mahim (West), Raheja Hospital nMarg, Mumbai, Maharashtra 400016<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 47.19744469 kWh<br>     <b>Charging Duration:</b> 2.01 mins<br>     <b>Charging Rate:</b> 23.43002275 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c71cd0b05eef2881d134e5626b8a8274.setContent(
  html_b63ef2613d024746c35371183a886181
);

marker_4e085b305d541b6ec377bd31895a20ed.bindPopup(
  popup_c71cd0b05eef2881d134e5626b8a8274
);

marker_4e085b305d541b6ec377bd31895a20ed.bindTooltip(
  `<div>
                     Xavier Institute of Engineering
                 </div>`,
  {
    sticky: true,
  }
);

marker_4e085b305d541b6ec377bd31895a20ed.setIcon(
  icon_a2b575b8357ffb31395518e348212f2a
);

var marker_ead046f8b0fad385b9f894c17d5b4805 = L.marker(
  [18.9216, 72.8326],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_de0e05d868b1805f66a4036beeca87f9 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f3e49a81fe1eef5e87573728fd8fa525 = L.popup({
  maxWidth: 350,
});

var html_b1246b6b355456e58f96cfdfaae841f0 = $(
  `<div id="html_b1246b6b355456e58f96cfdfaae841f0" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Colaba</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Colaba Causeway, Near Regal Cinema, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 24.40113304 kWh<br>     <b>Charging Duration:</b> 0.78 mins<br>     <b>Charging Rate:</b> 31.11524448 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f3e49a81fe1eef5e87573728fd8fa525.setContent(
  html_b1246b6b355456e58f96cfdfaae841f0
);

marker_ead046f8b0fad385b9f894c17d5b4805.bindPopup(
  popup_f3e49a81fe1eef5e87573728fd8fa525
);

marker_ead046f8b0fad385b9f894c17d5b4805.bindTooltip(
  `<div>
                     Tata Power - Colaba
                 </div>`,
  {
    sticky: true,
  }
);

marker_ead046f8b0fad385b9f894c17d5b4805.setIcon(
  icon_de0e05d868b1805f66a4036beeca87f9
);

var marker_56101061079f8c0d8e87bd4db1c0655b = L.marker(
  [19.291, 72.8511],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_13451a3609ecd9878dc37f3afcb3377d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_69fcce4d61c01ad6633aac018f2f6fce = L.popup({
  maxWidth: 350,
});

var html_d87274488787c043da265f714e09d837 = $(
  `<div id="html_d87274488787c043da265f714e09d837" style="width: 100.0%; height: 100.0%;">     <h4>EV Dock - Mira Road</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Mira Road East, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 193.0030739 kWh<br>     <b>Energy Consumed:</b> 42.74479257 kWh<br>     <b>Charging Duration:</b> 1.06 mins<br>     <b>Charging Rate:</b> 40.2059876 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_69fcce4d61c01ad6633aac018f2f6fce.setContent(
  html_d87274488787c043da265f714e09d837
);

marker_56101061079f8c0d8e87bd4db1c0655b.bindPopup(
  popup_69fcce4d61c01ad6633aac018f2f6fce
);

marker_56101061079f8c0d8e87bd4db1c0655b.bindTooltip(
  `<div>
                     EV Dock - Mira Road
                 </div>`,
  {
    sticky: true,
  }
);

marker_56101061079f8c0d8e87bd4db1c0655b.setIcon(
  icon_13451a3609ecd9878dc37f3afcb3377d
);

var marker_693df2777cc525e3149b68deacc85883 = L.marker(
  [19.0756, 72.8322],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_104579f8130e2689e4ddbe80dac0c4cd = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c0755cf936845f6442ceeb927e99128d = L.popup({
  maxWidth: 350,
});

var html_5fa050d00b1db370d320be53b50994b0 = $(
  `<div id="html_5fa050d00b1db370d320be53b50994b0" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Khar West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Khar Danda Road, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 45.90925215 kWh<br>     <b>Charging Duration:</b> 1.74 mins<br>     <b>Charging Rate:</b> 26.3121504 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_c0755cf936845f6442ceeb927e99128d.setContent(
  html_5fa050d00b1db370d320be53b50994b0
);

marker_693df2777cc525e3149b68deacc85883.bindPopup(
  popup_c0755cf936845f6442ceeb927e99128d
);

marker_693df2777cc525e3149b68deacc85883.bindTooltip(
  `<div>
                     Tata Power - Khar West
                 </div>`,
  {
    sticky: true,
  }
);

marker_693df2777cc525e3149b68deacc85883.setIcon(
  icon_104579f8130e2689e4ddbe80dac0c4cd
);

var marker_82b4b2eb0905dcc972752b0b6d5e50d0 = L.marker(
  [19.233, 72.8552],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4251b1d4283757f25a8460806de7ba29 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ce2de1e13aed824edc2a713c2757d01e = L.popup({
  maxWidth: 350,
});

var html_a333015f5f5188b692259272a3517441 = $(
  `<div id="html_a333015f5f5188b692259272a3517441" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Borivali West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Indraprastha Mall, Borivali West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 8.115370261 kWh<br>     <b>Charging Duration:</b> 14.42669236 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ce2de1e13aed824edc2a713c2757d01e.setContent(
  html_a333015f5f5188b692259272a3517441
);

marker_82b4b2eb0905dcc972752b0b6d5e50d0.bindPopup(
  popup_ce2de1e13aed824edc2a713c2757d01e
);

marker_82b4b2eb0905dcc972752b0b6d5e50d0.bindTooltip(
  `<div>
                     Tata Power - Borivali West
                 </div>`,
  {
    sticky: true,
  }
);

marker_82b4b2eb0905dcc972752b0b6d5e50d0.setIcon(
  icon_4251b1d4283757f25a8460806de7ba29
);

var marker_76b7b9b98f1195b8864c2d55220e86da = L.marker(
  [19.0533, 73.0571],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b5dda493a0434432b5495d5de41794f2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_41e010a10bb6c6e89469239a5a98cd6b = L.popup({
  maxWidth: 350,
});

var html_8316ce47fa346099485d8544e87da5ed = $(
  `<div id="html_8316ce47fa346099485d8544e87da5ed" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Kharghar</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Near Kharghar Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 21.30857255 kWh<br>     <b>Charging Duration:</b> 0.76 mins<br>     <b>Charging Rate:</b> 28.04359239 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_41e010a10bb6c6e89469239a5a98cd6b.setContent(
  html_8316ce47fa346099485d8544e87da5ed
);

marker_76b7b9b98f1195b8864c2d55220e86da.bindPopup(
  popup_41e010a10bb6c6e89469239a5a98cd6b
);

marker_76b7b9b98f1195b8864c2d55220e86da.bindTooltip(
  `<div>
                     Kazam - Kharghar
                 </div>`,
  {
    sticky: true,
  }
);

marker_76b7b9b98f1195b8864c2d55220e86da.setIcon(
  icon_b5dda493a0434432b5495d5de41794f2
);

var marker_6f396be3adf9a5ab6c70833ddbd61846 = L.marker(
  [19.13030121, 72.82229723],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_01bceb145013534bca22518140115711 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f90ec1679f99e8059e84a5798fa8fce3 = L.popup({
  maxWidth: 350,
});

var html_9fa58766a7938c18434269adc27b9673 = $(
  `<div id="html_9fa58766a7938c18434269adc27b9673" style="width: 100.0%; height: 100.0%;">     <h4>Kabra Metro One</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> 14, JP Rd, Aram Nagar, Seven Bunglow, Andheri West<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 55.30273056 kWh<br>     <b>Charging Duration:</b> 1.48 mins<br>     <b>Charging Rate:</b> 37.34746081 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f90ec1679f99e8059e84a5798fa8fce3.setContent(
  html_9fa58766a7938c18434269adc27b9673
);

marker_6f396be3adf9a5ab6c70833ddbd61846.bindPopup(
  popup_f90ec1679f99e8059e84a5798fa8fce3
);

marker_6f396be3adf9a5ab6c70833ddbd61846.bindTooltip(
  `<div>
                     Kabra Metro One
                 </div>`,
  {
    sticky: true,
  }
);

marker_6f396be3adf9a5ab6c70833ddbd61846.setIcon(
  icon_01bceb145013534bca22518140115711
);

var marker_9cea1352e7439b27768118ed68cbaacf = L.marker(
  [19.133659, 72.900817],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_111f2dfbb65486facb3745f65e4c0852 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_315e153d8c300e7dd0a1807c8b780764 = L.popup({
  maxWidth: 350,
});

var html_7ed044193603bc4aa6ba22cd73b36995 = $(
  `<div id="html_7ed044193603bc4aa6ba22cd73b36995" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> MH | Mumbai | The Westin Mumbai Powai Lake,The Westin Mumbai Powai Lake Kailash Nagar, Morarji Nagar, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 7.714516854 kWh<br>     <b>Energy Consumed:</b> 36.22941276 kWh<br>     <b>Charging Duration:</b> 3.27 mins<br>     <b>Charging Rate:</b> 11.09306321 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_315e153d8c300e7dd0a1807c8b780764.setContent(
  html_7ed044193603bc4aa6ba22cd73b36995
);

marker_9cea1352e7439b27768118ed68cbaacf.bindPopup(
  popup_315e153d8c300e7dd0a1807c8b780764
);

marker_9cea1352e7439b27768118ed68cbaacf.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_9cea1352e7439b27768118ed68cbaacf.setIcon(
  icon_111f2dfbb65486facb3745f65e4c0852
);

var marker_58934fcb847d6a91f228c8019a00cb04 = L.marker(
  [18.9862222, 72.8149436],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c6e6e31098831b62b7b78a3c919e1025 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_087d20e69a409b65f93358e55e76b5ed = L.popup({
  maxWidth: 350,
});

var html_dda0a7ea1afc9b11a30e8b3226c18208 = $(
  `<div id="html_dda0a7ea1afc9b11a30e8b3226c18208" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> MH | Mumbai | NSCI - Worli,NSCI, Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 7.714516854 kWh<br>     <b>Energy Consumed:</b> 36.22941276 kWh<br>     <b>Charging Duration:</b> 3.27 mins<br>     <b>Charging Rate:</b> 11.09306321 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_087d20e69a409b65f93358e55e76b5ed.setContent(
  html_dda0a7ea1afc9b11a30e8b3226c18208
);

marker_58934fcb847d6a91f228c8019a00cb04.bindPopup(
  popup_087d20e69a409b65f93358e55e76b5ed
);

marker_58934fcb847d6a91f228c8019a00cb04.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_58934fcb847d6a91f228c8019a00cb04.setIcon(
  icon_c6e6e31098831b62b7b78a3c919e1025
);

var marker_4793740da8a8a73e23ef439b5bf4fea4 = L.marker(
  [19.1485, 72.9358],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_830682fd225c2d2f5b24f150058cc153 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_68669eb315ae75ff2626a0046da3e533 = L.popup({
  maxWidth: 350,
});

var html_44720314a6fa714c7993294b1ca1fb59 = $(
  `<div id="html_44720314a6fa714c7993294b1ca1fb59" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Bhandup</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Neptune Magnet Mall, LBS Marg, Bhandup West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 12.35040612 kWh<br>     <b>Charging Duration:</b> 0.28 mins<br>     <b>Charging Rate:</b> 44.04764539 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_68669eb315ae75ff2626a0046da3e533.setContent(
  html_44720314a6fa714c7993294b1ca1fb59
);

marker_4793740da8a8a73e23ef439b5bf4fea4.bindPopup(
  popup_68669eb315ae75ff2626a0046da3e533
);

marker_4793740da8a8a73e23ef439b5bf4fea4.bindTooltip(
  `<div>
                     Jio-bp Pulse - Bhandup
                 </div>`,
  {
    sticky: true,
  }
);

marker_4793740da8a8a73e23ef439b5bf4fea4.setIcon(
  icon_830682fd225c2d2f5b24f150058cc153
);

var marker_f8eeae56cc5ace1fe1d019d89984ebb4 = L.marker(
  [19.1798, 72.8361],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9933fd29b299c57df1cbd2720fcc5979 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2d3ab6490cefe2aa51efdf66ae88329d = L.popup({
  maxWidth: 350,
});

var html_8ba9d82a0a4c2b90e3080f9184e7844e = $(
  `<div id="html_8ba9d82a0a4c2b90e3080f9184e7844e" style="width: 100.0%; height: 100.0%;">     <h4>Evershine Mall Charging Station</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Chincholi Bunder Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 68.24465321 kWh<br>     <b>Charging Duration:</b> 1.38 mins<br>     <b>Charging Rate:</b> 49.3612511 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_2d3ab6490cefe2aa51efdf66ae88329d.setContent(
  html_8ba9d82a0a4c2b90e3080f9184e7844e
);

marker_f8eeae56cc5ace1fe1d019d89984ebb4.bindPopup(
  popup_2d3ab6490cefe2aa51efdf66ae88329d
);

marker_f8eeae56cc5ace1fe1d019d89984ebb4.bindTooltip(
  `<div>
                     Evershine Mall Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_f8eeae56cc5ace1fe1d019d89984ebb4.setIcon(
  icon_9933fd29b299c57df1cbd2720fcc5979
);

var marker_07af0508605309beeed40e3cce200938 = L.marker(
  [19.109, 72.8771],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b9b6e8bb07937bf3f7b88b8b2708d0ae = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_32794330220dce9d2f4d510453dd9178 = L.popup({
  maxWidth: 350,
});

var html_323c236dd71e09aa75c990fbbf154068 = $(
  `<div id="html_323c236dd71e09aa75c990fbbf154068" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Marol Naka</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Marol Naka Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 6.065161713 kWh<br>     <b>Charging Duration:</b> 0.13 mins<br>     <b>Charging Rate:</b> 46.62351209 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_32794330220dce9d2f4d510453dd9178.setContent(
  html_323c236dd71e09aa75c990fbbf154068
);

marker_07af0508605309beeed40e3cce200938.bindPopup(
  popup_32794330220dce9d2f4d510453dd9178
);

marker_07af0508605309beeed40e3cce200938.bindTooltip(
  `<div>
                     Statiq - Marol Naka
                 </div>`,
  {
    sticky: true,
  }
);

marker_07af0508605309beeed40e3cce200938.setIcon(
  icon_b9b6e8bb07937bf3f7b88b8b2708d0ae
);

var marker_d895fc5001d3db478c2cf1d40c240661 = L.marker(
  [18.965, 72.8098],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2184a3f956ae9de21a66b1c6e9c8fcfa = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e8daaf04f7f629b9868f38b331cd001f = L.popup({
  maxWidth: 350,
});

var html_7c42d3877de25ea703a4251196d2b5e6 = $(
  `<div id="html_7c42d3877de25ea703a4251196d2b5e6" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Kapasi CHSL</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> 4/5, Enterprise Apartment, Forjet Hill Rd, Tardeo, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 41.7666481 kWh<br>     <b>Charging Duration:</b> 1.91 mins<br>     <b>Charging Rate:</b> 21.83372403 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_e8daaf04f7f629b9868f38b331cd001f.setContent(
  html_7c42d3877de25ea703a4251196d2b5e6
);

marker_d895fc5001d3db478c2cf1d40c240661.bindPopup(
  popup_e8daaf04f7f629b9868f38b331cd001f
);

marker_d895fc5001d3db478c2cf1d40c240661.bindTooltip(
  `<div>
                     Tata Power - Kapasi CHSL
                 </div>`,
  {
    sticky: true,
  }
);

marker_d895fc5001d3db478c2cf1d40c240661.setIcon(
  icon_2184a3f956ae9de21a66b1c6e9c8fcfa
);

var marker_1233bca661fc5d784564417d60518a36 = L.marker(
  [19.1146, 72.8696],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c66f0871110fc78c367d34f4600f56e8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_007bcdec9a2bbf7e62e2e135b64352e4 = L.popup({
  maxWidth: 350,
});

var html_a7ef4358f7c52d900bd4faf0d68cb5ea = $(
  `<div id="html_a7ef4358f7c52d900bd4faf0d68cb5ea" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Andheri East</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Andheri East Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 81.36841583 kWh<br>     <b>Energy Consumed:</b> 57.97765789 kWh<br>     <b>Charging Duration:</b> 8.92 mins<br>     <b>Charging Rate:</b> 6.499187935 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_007bcdec9a2bbf7e62e2e135b64352e4.setContent(
  html_a7ef4358f7c52d900bd4faf0d68cb5ea
);

marker_1233bca661fc5d784564417d60518a36.bindPopup(
  popup_007bcdec9a2bbf7e62e2e135b64352e4
);

marker_1233bca661fc5d784564417d60518a36.bindTooltip(
  `<div>
                     Statiq - Andheri East
                 </div>`,
  {
    sticky: true,
  }
);

marker_1233bca661fc5d784564417d60518a36.setIcon(
  icon_c66f0871110fc78c367d34f4600f56e8
);

var marker_920412781bd6be13377984a7b2c52728 = L.marker(
  [19.0012, 72.8281],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_de5a6265406ac3d1f3a1133544b93f4f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8523890158fef282dd33cee0a8dd47af = L.popup({
  maxWidth: 350,
});

var html_527e393c3b714071eec5987676f32832 = $(
  `<div id="html_527e393c3b714071eec5987676f32832" style="width: 100.0%; height: 100.0%;">     <h4>Fortum - Lower Parel</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> World Trade Centre One, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 74.10752218 kWh<br>     <b>Charging Duration:</b> 1.62 mins<br>     <b>Charging Rate:</b> 45.69740275 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_8523890158fef282dd33cee0a8dd47af.setContent(
  html_527e393c3b714071eec5987676f32832
);

marker_920412781bd6be13377984a7b2c52728.bindPopup(
  popup_8523890158fef282dd33cee0a8dd47af
);

marker_920412781bd6be13377984a7b2c52728.bindTooltip(
  `<div>
                     Fortum - Lower Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_920412781bd6be13377984a7b2c52728.setIcon(
  icon_de5a6265406ac3d1f3a1133544b93f4f
);

var marker_c79fd97e24b2a2f77d34eaecff22cc1e = L.marker(
  [19.05231631, 72.90163581],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9118e0c12ecb62c9c18434794395a2f5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a5c2dee283e521bd5b267ef5f7527591 = L.popup({
  maxWidth: 350,
});

var html_bf22218aa892c075b77caffa54fa5d99 = $(
  `<div id="html_bf22218aa892c075b77caffa54fa5d99" style="width: 100.0%; height: 100.0%;">     <h4>K Star Chembur</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> VN Purav Marg Diamond Garden, Basant Garden, Chembur Mumbai, Maharashtra,Chembur<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 64.37713244 kWh<br>     <b>Charging Duration:</b> 4.22 mins<br>     <b>Charging Rate:</b> 15.2565692 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a5c2dee283e521bd5b267ef5f7527591.setContent(
  html_bf22218aa892c075b77caffa54fa5d99
);

marker_c79fd97e24b2a2f77d34eaecff22cc1e.bindPopup(
  popup_a5c2dee283e521bd5b267ef5f7527591
);

marker_c79fd97e24b2a2f77d34eaecff22cc1e.bindTooltip(
  `<div>
                     K Star Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_c79fd97e24b2a2f77d34eaecff22cc1e.setIcon(
  icon_9118e0c12ecb62c9c18434794395a2f5
);

var marker_2762aabe55d38e863af1e1bd4e6ba4f9 = L.marker(
  [19.0121, 73.055],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2df38a42cfaeec439bfd62352c1f0d2c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_410ee7861bd1ae35cc5d5ee9350c4b2a = L.popup({
  maxWidth: 350,
});

var html_16d7097be491898e81424df0fcd49899 = $(
  `<div id="html_16d7097be491898e81424df0fcd49899" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Mansarovar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Mansarovar Railway Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 15.5583755 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 44.45073085 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_410ee7861bd1ae35cc5d5ee9350c4b2a.setContent(
  html_16d7097be491898e81424df0fcd49899
);

marker_2762aabe55d38e863af1e1bd4e6ba4f9.bindPopup(
  popup_410ee7861bd1ae35cc5d5ee9350c4b2a
);

marker_2762aabe55d38e863af1e1bd4e6ba4f9.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Mansarovar
                 </div>`,
  {
    sticky: true,
  }
);

marker_2762aabe55d38e863af1e1bd4e6ba4f9.setIcon(
  icon_2df38a42cfaeec439bfd62352c1f0d2c
);

var marker_a3068ee0f2ecc356f74584911bac98b7 = L.marker(
  [19.14207, 72.83241],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_52a82e03b284c3837390717fc1f00546 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_62b2b1dddf4b5bd3fb41ad37aefbaafa = L.popup({
  maxWidth: 350,
});

var html_bf0199ad2d294b60b61a4e157fbce573 = $(
  `<div id="html_bf0199ad2d294b60b61a4e157fbce573" style="width: 100.0%; height: 100.0%;">     <h4>Inderjit Cars, Andheri West</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> 1059/1060, Adarsh nagar, near infinity mall, Off New Link Road, Andheri West, Mumbai, Maharashtra 400053<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 40.7367048 kWh<br>     <b>Charging Duration:</b> 4.13 mins<br>     <b>Charging Rate:</b> 9.866759209 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_62b2b1dddf4b5bd3fb41ad37aefbaafa.setContent(
  html_bf0199ad2d294b60b61a4e157fbce573
);

marker_a3068ee0f2ecc356f74584911bac98b7.bindPopup(
  popup_62b2b1dddf4b5bd3fb41ad37aefbaafa
);

marker_a3068ee0f2ecc356f74584911bac98b7.bindTooltip(
  `<div>
                     Inderjit Cars, Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_a3068ee0f2ecc356f74584911bac98b7.setIcon(
  icon_52a82e03b284c3837390717fc1f00546
);

var marker_8b39f101464a305cc61f298827eec274 = L.marker(
  [19.1808, 72.9836],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d2f6d0ad0a7fcf7a3d8372e0cfe3bfb5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9cf2fa19d59721e5f9a1f7b903b8d3e1 = L.popup({
  maxWidth: 350,
});

var html_51653f389b5138f6b5f3145aa82f8a2c = $(
  `<div id="html_51653f389b5138f6b5f3145aa82f8a2c" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Mumbra</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Near Mumbra Station, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 20.51871405 kWh<br>     <b>Charging Duration:</b> 0.76 mins<br>     <b>Charging Rate:</b> 27.17353746 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9cf2fa19d59721e5f9a1f7b903b8d3e1.setContent(
  html_51653f389b5138f6b5f3145aa82f8a2c
);

marker_8b39f101464a305cc61f298827eec274.bindPopup(
  popup_9cf2fa19d59721e5f9a1f7b903b8d3e1
);

marker_8b39f101464a305cc61f298827eec274.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Mumbra
                 </div>`,
  {
    sticky: true,
  }
);

marker_8b39f101464a305cc61f298827eec274.setIcon(
  icon_d2f6d0ad0a7fcf7a3d8372e0cfe3bfb5
);

var marker_93cd06ece9e1802dc9ef646f90396f52 = L.marker(
  [19.11637, 72.91086],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d57412fedc9b51ab2a24247842b0f35f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_42df446af949313da692f2d3be25f735 = L.popup({
  maxWidth: 350,
});

var html_1165e94bfac67b1d9e1f911126088086 = $(
  `<div id="html_1165e94bfac67b1d9e1f911126088086" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Spectra, High St, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 13.58796474 kWh<br>     <b>Charging Duration:</b> 0.33 mins<br>     <b>Charging Rate:</b> 40.81172935 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_42df446af949313da692f2d3be25f735.setContent(
  html_1165e94bfac67b1d9e1f911126088086
);

marker_93cd06ece9e1802dc9ef646f90396f52.bindPopup(
  popup_42df446af949313da692f2d3be25f735
);

marker_93cd06ece9e1802dc9ef646f90396f52.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_93cd06ece9e1802dc9ef646f90396f52.setIcon(
  icon_d57412fedc9b51ab2a24247842b0f35f
);

var marker_6e9b0a60227362382be492d8d1dbb74a = L.marker(
  [19.11644, 72.90968],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6f506da1bcedc5d12a310caf2734f08d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ac9fde8084b5c76a8db9f17190fa8e26 = L.popup({
  maxWidth: 350,
});

var html_618a5c808ddd41cc08534698feec7e6a = $(
  `<div id="html_618a5c808ddd41cc08534698feec7e6a" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Pay & Park, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 13.58796474 kWh<br>     <b>Charging Duration:</b> 0.33 mins<br>     <b>Charging Rate:</b> 40.81172935 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_ac9fde8084b5c76a8db9f17190fa8e26.setContent(
  html_618a5c808ddd41cc08534698feec7e6a
);

marker_6e9b0a60227362382be492d8d1dbb74a.bindPopup(
  popup_ac9fde8084b5c76a8db9f17190fa8e26
);

marker_6e9b0a60227362382be492d8d1dbb74a.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_6e9b0a60227362382be492d8d1dbb74a.setIcon(
  icon_6f506da1bcedc5d12a310caf2734f08d
);

var marker_a8b82307e2367d3209af1e15be7a0997 = L.marker(
  [19.163979, 72.938751],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_00986f0ce99705e94553ff51253b9d9f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_67e53d5dfe2112487dcee65cbdc21076 = L.popup({
  maxWidth: 350,
});

var html_e645a1b2f31f410cf5e2d0ae94072693 = $(
  `<div id="html_e645a1b2f31f410cf5e2d0ae94072693" style="width: 100.0%; height: 100.0%;">     <h4>Hare Krishna Mahindra, Mulund West</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Building, Plot 1, Udyog Kshtra, Mulund Goregaon Link Rd, near D Mart Mulund, Salpa Devi Pada, Mulund West, Mumbai, Maharashtra 400080<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 73.37136541 kWh<br>     <b>Charging Duration:</b> 1.61 mins<br>     <b>Charging Rate:</b> 45.50795122 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_67e53d5dfe2112487dcee65cbdc21076.setContent(
  html_e645a1b2f31f410cf5e2d0ae94072693
);

marker_a8b82307e2367d3209af1e15be7a0997.bindPopup(
  popup_67e53d5dfe2112487dcee65cbdc21076
);

marker_a8b82307e2367d3209af1e15be7a0997.bindTooltip(
  `<div>
                     Hare Krishna Mahindra, Mulund West
                 </div>`,
  {
    sticky: true,
  }
);

marker_a8b82307e2367d3209af1e15be7a0997.setIcon(
  icon_00986f0ce99705e94553ff51253b9d9f
);

var marker_b9bae43be3354dfcae6648ea2a325630 = L.marker(
  [19.0455, 72.8996],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_86db46e4dcfd524ad9b688ef5e172cd1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3f11de5da4f768dca811c5b55fd6ef0c = L.popup({
  maxWidth: 350,
});

var html_2c426ff298c0523de60d9f8a791db652 = $(
  `<div id="html_2c426ff298c0523de60d9f8a791db652" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Chembur</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Next to Diamond Garden, Chembur, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 1.46 mins<br>     <b>Charging Rate:</b> 29.83758581 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3f11de5da4f768dca811c5b55fd6ef0c.setContent(
  html_2c426ff298c0523de60d9f8a791db652
);

marker_b9bae43be3354dfcae6648ea2a325630.bindPopup(
  popup_3f11de5da4f768dca811c5b55fd6ef0c
);

marker_b9bae43be3354dfcae6648ea2a325630.bindTooltip(
  `<div>
                     Tata Power - Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_b9bae43be3354dfcae6648ea2a325630.setIcon(
  icon_86db46e4dcfd524ad9b688ef5e172cd1
);

var marker_c55134a356c0b461fcd3ce7ddc236154 = L.marker(
  [19.18066617, 72.94684724],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_511c2614853a5ac73def3958726b920d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4f36029359762143fe1dc5305c461596 = L.popup({
  maxWidth: 350,
});

var html_8c6bba1c5c319a12febe92a78242514f = $(
  `<div id="html_8c6bba1c5c319a12febe92a78242514f" style="width: 100.0%; height: 100.0%;">     <h4>MCGM Parking || Runwal Anthurium</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Runwal Anthurium Rd, opposite Veena Nagar, Vardhman Nagar, Mulund West<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 43.25451714 kWh<br>     <b>Charging Duration:</b> 2.24 mins<br>     <b>Charging Rate:</b> 19.27803572 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_4f36029359762143fe1dc5305c461596.setContent(
  html_8c6bba1c5c319a12febe92a78242514f
);

marker_c55134a356c0b461fcd3ce7ddc236154.bindPopup(
  popup_4f36029359762143fe1dc5305c461596
);

marker_c55134a356c0b461fcd3ce7ddc236154.bindTooltip(
  `<div>
                     MCGM Parking || Runwal Anthurium
                 </div>`,
  {
    sticky: true,
  }
);

marker_c55134a356c0b461fcd3ce7ddc236154.setIcon(
  icon_511c2614853a5ac73def3958726b920d
);

var marker_65a4fa56a9f6173befcde7b998639a61 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c1cc1e4ecf7c89388ea074c0cbbf1bad = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_feccaf7f20569306167c331e318ebb9e = L.popup({
  maxWidth: 350,
});

var html_3e6b0b63fab45cf75ba8c8670d1add48 = $(
  `<div id="html_3e6b0b63fab45cf75ba8c8670d1add48" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 29.21621369 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_feccaf7f20569306167c331e318ebb9e.setContent(
  html_3e6b0b63fab45cf75ba8c8670d1add48
);

marker_65a4fa56a9f6173befcde7b998639a61.bindPopup(
  popup_feccaf7f20569306167c331e318ebb9e
);

marker_65a4fa56a9f6173befcde7b998639a61.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_65a4fa56a9f6173befcde7b998639a61.setIcon(
  icon_c1cc1e4ecf7c89388ea074c0cbbf1bad
);

var marker_5a9d7ae5b80167238a808a369eadcb59 = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8d6f20e1a539bc2a9263af7cc9d469f7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3183d44eb0465e4db8dad89c1c35a947 = L.popup({
  maxWidth: 350,
});

var html_9fbf7bafd26208a27410db989595361f = $(
  `<div id="html_9fbf7bafd26208a27410db989595361f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 29.21621369 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3183d44eb0465e4db8dad89c1c35a947.setContent(
  html_9fbf7bafd26208a27410db989595361f
);

marker_5a9d7ae5b80167238a808a369eadcb59.bindPopup(
  popup_3183d44eb0465e4db8dad89c1c35a947
);

marker_5a9d7ae5b80167238a808a369eadcb59.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_5a9d7ae5b80167238a808a369eadcb59.setIcon(
  icon_8d6f20e1a539bc2a9263af7cc9d469f7
);

var marker_1cd408a8c60f99651a6967e1d860729f = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_853ed838038ca78d0031352856579981 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4f17dc6445c2793c5abb9836cfcadbdd = L.popup({
  maxWidth: 350,
});

var html_64bb1727c8539a4f8135cb708d60e466 = $(
  `<div id="html_64bb1727c8539a4f8135cb708d60e466" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 29.21621369 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_4f17dc6445c2793c5abb9836cfcadbdd.setContent(
  html_64bb1727c8539a4f8135cb708d60e466
);

marker_1cd408a8c60f99651a6967e1d860729f.bindPopup(
  popup_4f17dc6445c2793c5abb9836cfcadbdd
);

marker_1cd408a8c60f99651a6967e1d860729f.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_1cd408a8c60f99651a6967e1d860729f.setIcon(
  icon_853ed838038ca78d0031352856579981
);

var marker_743f91a835ba1d49269d8e19c9a91b73 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ad55b789ecceda0cfd023e82cb08d8c8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_892dc15463a7239996f1b48a234889e3 = L.popup({
  maxWidth: 350,
});

var html_9b9623518eeff418f5bc09ce52110ede = $(
  `<div id="html_9b9623518eeff418f5bc09ce52110ede" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 29.21621369 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_892dc15463a7239996f1b48a234889e3.setContent(
  html_9b9623518eeff418f5bc09ce52110ede
);

marker_743f91a835ba1d49269d8e19c9a91b73.bindPopup(
  popup_892dc15463a7239996f1b48a234889e3
);

marker_743f91a835ba1d49269d8e19c9a91b73.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_743f91a835ba1d49269d8e19c9a91b73.setIcon(
  icon_ad55b789ecceda0cfd023e82cb08d8c8
);

var marker_dd5c2d8c9ac937888f140feca6ee1c21 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9ff65e5abb72a1fd8817ba3bf4acb08a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5941c87e9270484a2a174674ef48a598 = L.popup({
  maxWidth: 350,
});

var html_e55db40df2441a8767d76c9e9e4af28e = $(
  `<div id="html_e55db40df2441a8767d76c9e9e4af28e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.24188589 kWh<br>     <b>Charging Duration:</b> 0.35 mins<br>     <b>Charging Rate:</b> 29.21621369 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5941c87e9270484a2a174674ef48a598.setContent(
  html_e55db40df2441a8767d76c9e9e4af28e
);

marker_dd5c2d8c9ac937888f140feca6ee1c21.bindPopup(
  popup_5941c87e9270484a2a174674ef48a598
);

marker_dd5c2d8c9ac937888f140feca6ee1c21.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_dd5c2d8c9ac937888f140feca6ee1c21.setIcon(
  icon_9ff65e5abb72a1fd8817ba3bf4acb08a
);

var marker_ca75b3cd9d7b9ea329b5ab95b3163943 = L.marker(
  [19.0803, 72.8365],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d7956b891f9ad641e20abf03302db49d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9a6f4eab5302dc2685dde92ff2649602 = L.popup({
  maxWidth: 350,
});

var html_e722f6d5848fbfb15fe6fccf648db1ba = $(
  `<div id="html_e722f6d5848fbfb15fe6fccf648db1ba" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Santacruz</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Santacruz West, Near Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 8.918418778 kWh<br>     <b>Charging Duration:</b> 0.55 mins<br>     <b>Charging Rate:</b> 16.24196336 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_9a6f4eab5302dc2685dde92ff2649602.setContent(
  html_e722f6d5848fbfb15fe6fccf648db1ba
);

marker_ca75b3cd9d7b9ea329b5ab95b3163943.bindPopup(
  popup_9a6f4eab5302dc2685dde92ff2649602
);

marker_ca75b3cd9d7b9ea329b5ab95b3163943.bindTooltip(
  `<div>
                     Statiq - Santacruz
                 </div>`,
  {
    sticky: true,
  }
);

marker_ca75b3cd9d7b9ea329b5ab95b3163943.setIcon(
  icon_d7956b891f9ad641e20abf03302db49d
);

var marker_f06dadf2f22b1efa085dcc4b15545ab6 = L.marker(
  [19.02460889, 72.84282021],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_208396a4cfb9d9413c3543ea991abcb9 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_27dfbdca91cf99f2b708e65563068052 = L.popup({
  maxWidth: 350,
});

var html_bc615ab5f8dd20a43871b1f28cad10e5 = $(
  `<div id="html_bc615ab5f8dd20a43871b1f28cad10e5" style="width: 100.0%; height: 100.0%;">     <h4>Kohinoor MCGM parking</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Kohinoor Square, Kasaravadi, Dadar, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 27.00471086 kWh<br>     <b>Charging Duration:</b> 0.58 mins<br>     <b>Charging Rate:</b> 46.41136085 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_27dfbdca91cf99f2b708e65563068052.setContent(
  html_bc615ab5f8dd20a43871b1f28cad10e5
);

marker_f06dadf2f22b1efa085dcc4b15545ab6.bindPopup(
  popup_27dfbdca91cf99f2b708e65563068052
);

marker_f06dadf2f22b1efa085dcc4b15545ab6.bindTooltip(
  `<div>
                     Kohinoor MCGM parking
                 </div>`,
  {
    sticky: true,
  }
);

marker_f06dadf2f22b1efa085dcc4b15545ab6.setIcon(
  icon_208396a4cfb9d9413c3543ea991abcb9
);

var marker_ce5eff59ca896246dbc7c62d9eaf0bda = L.marker(
  [19.1182, 72.9053],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_48c49fb90a1090b2bf44602d52716dc9 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f9717b0b0224d4f0d7e0099db2b3ddec = L.popup({
  maxWidth: 350,
});

var html_05032c1cadea7cc6cc3089b73cde1c22 = $(
  `<div id="html_05032c1cadea7cc6cc3089b73cde1c22" style="width: 100.0%; height: 100.0%;">     <h4>Fortum - Powai Plaza</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Powai Plaza Mall Parking, Powai, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.661747206 kWh<br>     <b>Charging Duration:</b> 0.61 mins<br>     <b>Charging Rate:</b> 10.89013108 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f9717b0b0224d4f0d7e0099db2b3ddec.setContent(
  html_05032c1cadea7cc6cc3089b73cde1c22
);

marker_ce5eff59ca896246dbc7c62d9eaf0bda.bindPopup(
  popup_f9717b0b0224d4f0d7e0099db2b3ddec
);

marker_ce5eff59ca896246dbc7c62d9eaf0bda.bindTooltip(
  `<div>
                     Fortum - Powai Plaza
                 </div>`,
  {
    sticky: true,
  }
);

marker_ce5eff59ca896246dbc7c62d9eaf0bda.setIcon(
  icon_48c49fb90a1090b2bf44602d52716dc9
);

var marker_81cb5d45a244448fcb9a17789e99ef9f = L.marker(
  [19.109, 72.8771],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_3140f3b0907a23f89ede01efdb28efc7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_09394fca0a16723791f1b4c3003c17e4 = L.popup({
  maxWidth: 350,
});

var html_ed3b7b3ba53f4ceef53e55d936f12473 = $(
  `<div id="html_ed3b7b3ba53f4ceef53e55d936f12473" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Marol Naka</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Marol Naka Metro Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 53.64842443 kWh<br>     <b>Charging Duration:</b> 1.13 mins<br>     <b>Charging Rate:</b> 47.29035525 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_09394fca0a16723791f1b4c3003c17e4.setContent(
  html_ed3b7b3ba53f4ceef53e55d936f12473
);

marker_81cb5d45a244448fcb9a17789e99ef9f.bindPopup(
  popup_09394fca0a16723791f1b4c3003c17e4
);

marker_81cb5d45a244448fcb9a17789e99ef9f.bindTooltip(
  `<div>
                     Statiq - Marol Naka
                 </div>`,
  {
    sticky: true,
  }
);

marker_81cb5d45a244448fcb9a17789e99ef9f.setIcon(
  icon_3140f3b0907a23f89ede01efdb28efc7
);

var marker_99b6aae34865dbfb1895e814a14592f2 = L.marker(
  [19.1808, 72.9836],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dac55fcd3ffa8c800e985bd7c1ee6d92 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1da4b1e64a13b65685c2538903b30ffe = L.popup({
  maxWidth: 350,
});

var html_3fc2721cc2cc6ad81fcb69164e76a405 = $(
  `<div id="html_3fc2721cc2cc6ad81fcb69164e76a405" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Mumbra</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Near Mumbra Station, Thane<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 105.2870677 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 5.35 mins<br>     <b>Charging Rate:</b> 8.126977133 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_1da4b1e64a13b65685c2538903b30ffe.setContent(
  html_3fc2721cc2cc6ad81fcb69164e76a405
);

marker_99b6aae34865dbfb1895e814a14592f2.bindPopup(
  popup_1da4b1e64a13b65685c2538903b30ffe
);

marker_99b6aae34865dbfb1895e814a14592f2.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Mumbra
                 </div>`,
  {
    sticky: true,
  }
);

marker_99b6aae34865dbfb1895e814a14592f2.setIcon(
  icon_dac55fcd3ffa8c800e985bd7c1ee6d92
);

var marker_492cf31e31777fab4c75f016b1ca40d3 = L.marker(
  [19.1736, 72.8352],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ffd032201bece2a0721a48d6c0bf381c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_95ff98e37da36b324f31641728bda6fb = L.popup({
  maxWidth: 350,
});

var html_f05c507440bfbb4ffe20affd25d7ea02 = $(
  `<div id="html_f05c507440bfbb4ffe20affd25d7ea02" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Malad</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Next to Infinity Mall, New Link Rd, Malad West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 140.7620616 kWh<br>     <b>Energy Consumed:</b> 60.08034819 kWh<br>     <b>Charging Duration:</b> 1.3 mins<br>     <b>Charging Rate:</b> 46.15424524 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_95ff98e37da36b324f31641728bda6fb.setContent(
  html_f05c507440bfbb4ffe20affd25d7ea02
);

marker_492cf31e31777fab4c75f016b1ca40d3.bindPopup(
  popup_95ff98e37da36b324f31641728bda6fb
);

marker_492cf31e31777fab4c75f016b1ca40d3.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Malad
                 </div>`,
  {
    sticky: true,
  }
);

marker_492cf31e31777fab4c75f016b1ca40d3.setIcon(
  icon_ffd032201bece2a0721a48d6c0bf381c
);

var marker_35e3849aaff13bb0779898a5deb1bb99 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_fc188463747bdf2443fe34a175ccb083 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ece82939465764030c9c429be09471fe = L.popup({
  maxWidth: 350,
});

var html_601516e4904aee7978f4e7adae9dca19 = $(
  `<div id="html_601516e4904aee7978f4e7adae9dca19" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.56734925 kWh<br>     <b>Charging Duration:</b> 1.49 mins<br>     <b>Charging Rate:</b> 41.31627182 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ece82939465764030c9c429be09471fe.setContent(
  html_601516e4904aee7978f4e7adae9dca19
);

marker_35e3849aaff13bb0779898a5deb1bb99.bindPopup(
  popup_ece82939465764030c9c429be09471fe
);

marker_35e3849aaff13bb0779898a5deb1bb99.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_35e3849aaff13bb0779898a5deb1bb99.setIcon(
  icon_fc188463747bdf2443fe34a175ccb083
);

var marker_5a2876695efe8635f3bb7eab33336476 = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_877d87d278f51a25f86b743cbee0db43 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a968dd187224362e9b9f1cddfd53d728 = L.popup({
  maxWidth: 350,
});

var html_3f50e035d92bdffd84a03e8d38196c07 = $(
  `<div id="html_3f50e035d92bdffd84a03e8d38196c07" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.56734925 kWh<br>     <b>Charging Duration:</b> 1.49 mins<br>     <b>Charging Rate:</b> 41.31627182 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a968dd187224362e9b9f1cddfd53d728.setContent(
  html_3f50e035d92bdffd84a03e8d38196c07
);

marker_5a2876695efe8635f3bb7eab33336476.bindPopup(
  popup_a968dd187224362e9b9f1cddfd53d728
);

marker_5a2876695efe8635f3bb7eab33336476.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_5a2876695efe8635f3bb7eab33336476.setIcon(
  icon_877d87d278f51a25f86b743cbee0db43
);

var marker_931e5d1d15d62d6469b825a358c47856 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2eff3488a8ee39e4a7c4dfc2a6071293 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4b65bf30723f89170d4984330c63c78f = L.popup({
  maxWidth: 350,
});

var html_d7675840225feed1bcde6f36a895f8ee = $(
  `<div id="html_d7675840225feed1bcde6f36a895f8ee" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.56734925 kWh<br>     <b>Charging Duration:</b> 1.49 mins<br>     <b>Charging Rate:</b> 41.31627182 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_4b65bf30723f89170d4984330c63c78f.setContent(
  html_d7675840225feed1bcde6f36a895f8ee
);

marker_931e5d1d15d62d6469b825a358c47856.bindPopup(
  popup_4b65bf30723f89170d4984330c63c78f
);

marker_931e5d1d15d62d6469b825a358c47856.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_931e5d1d15d62d6469b825a358c47856.setIcon(
  icon_2eff3488a8ee39e4a7c4dfc2a6071293
);

var marker_ffa3e4825e85a73fc5d9835cbb9b33fb = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_57c9ae0bf0b81f1eb8ba02b048680221 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c7ff0968bddd265a1621cf0e51f32dba = L.popup({
  maxWidth: 350,
});

var html_45e1d6999ff854ba7bd0babd312f42da = $(
  `<div id="html_45e1d6999ff854ba7bd0babd312f42da" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.56734925 kWh<br>     <b>Charging Duration:</b> 1.49 mins<br>     <b>Charging Rate:</b> 41.31627182 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_c7ff0968bddd265a1621cf0e51f32dba.setContent(
  html_45e1d6999ff854ba7bd0babd312f42da
);

marker_ffa3e4825e85a73fc5d9835cbb9b33fb.bindPopup(
  popup_c7ff0968bddd265a1621cf0e51f32dba
);

marker_ffa3e4825e85a73fc5d9835cbb9b33fb.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_ffa3e4825e85a73fc5d9835cbb9b33fb.setIcon(
  icon_57c9ae0bf0b81f1eb8ba02b048680221
);

var marker_f4a2a4f192d5c2f0d243c1b660459eb7 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_033096c617efd15cd7ff196bb0739b05 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4ccd1eda1e46aec2370c0db2fbb9e61b = L.popup({
  maxWidth: 350,
});

var html_61770026df2fae34f2ad6db3a6d790e4 = $(
  `<div id="html_61770026df2fae34f2ad6db3a6d790e4" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.56734925 kWh<br>     <b>Charging Duration:</b> 1.49 mins<br>     <b>Charging Rate:</b> 41.31627182 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_4ccd1eda1e46aec2370c0db2fbb9e61b.setContent(
  html_61770026df2fae34f2ad6db3a6d790e4
);

marker_f4a2a4f192d5c2f0d243c1b660459eb7.bindPopup(
  popup_4ccd1eda1e46aec2370c0db2fbb9e61b
);

marker_f4a2a4f192d5c2f0d243c1b660459eb7.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_f4a2a4f192d5c2f0d243c1b660459eb7.setIcon(
  icon_033096c617efd15cd7ff196bb0739b05
);

var marker_225db8b210ad2cb7a73caa17040f0820 = L.marker(
  [18.9897, 73.1145],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_966503319b978d862fe2444b88028b73 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_143fc206614ca04267346c4d1c1598a5 = L.popup({
  maxWidth: 350,
});

var html_38d591ba1bba3cecc5cd2aa1ef1b7452 = $(
  `<div id="html_38d591ba1bba3cecc5cd2aa1ef1b7452" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Panvel</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Opp Panvel Station, Raigad<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 22.57288245 kWh<br>     <b>Charging Duration:</b> 0.89 mins<br>     <b>Charging Rate:</b> 25.29157595 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_143fc206614ca04267346c4d1c1598a5.setContent(
  html_38d591ba1bba3cecc5cd2aa1ef1b7452
);

marker_225db8b210ad2cb7a73caa17040f0820.bindPopup(
  popup_143fc206614ca04267346c4d1c1598a5
);

marker_225db8b210ad2cb7a73caa17040f0820.bindTooltip(
  `<div>
                     ATUM Charge - Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_225db8b210ad2cb7a73caa17040f0820.setIcon(
  icon_966503319b978d862fe2444b88028b73
);

var marker_71546a19c57e71dcbec55e83f29162c6 = L.marker(
  [19.1737611, 72.8600172],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_87b2245a855220d44e82c0f27bb967be = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_54b671d3518ec44f0c97782f1acca685 = L.popup({
  maxWidth: 350,
});

var html_254a563fafe409919c1d63d1c37a297f = $(
  `<div id="html_254a563fafe409919c1d63d1c37a297f" style="width: 100.0%; height: 100.0%;">     <h4>Oberoi Mall, Goregaon</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Western Express Hwy, Yashodham, Goregaon, Mumbai, Maharashtra 400063<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 51.49234638 kWh<br>     <b>Charging Duration:</b> 1.46 mins<br>     <b>Charging Rate:</b> 35.21951804 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_54b671d3518ec44f0c97782f1acca685.setContent(
  html_254a563fafe409919c1d63d1c37a297f
);

marker_71546a19c57e71dcbec55e83f29162c6.bindPopup(
  popup_54b671d3518ec44f0c97782f1acca685
);

marker_71546a19c57e71dcbec55e83f29162c6.bindTooltip(
  `<div>
                     Oberoi Mall, Goregaon
                 </div>`,
  {
    sticky: true,
  }
);

marker_71546a19c57e71dcbec55e83f29162c6.setIcon(
  icon_87b2245a855220d44e82c0f27bb967be
);

var marker_9fb0de866312326c6154b2de32b10ea1 = L.marker(
  [19.1206, 72.9188],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b5da1dcf94601107e09fcf9ceaf22171 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f2b5eff52d0a54801f5a2a4eb2008071 = L.popup({
  maxWidth: 350,
});

var html_2002db8db77462b319cc6e0ccd8c811b = $(
  `<div id="html_2002db8db77462b319cc6e0ccd8c811b" style="width: 100.0%; height: 100.0%;">     <h4>Ather Grid - Hiranandani</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Hiranandani Gardens, Powai, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 44.76974192 kWh<br>     <b>Charging Duration:</b> 2.17 mins<br>     <b>Charging Rate:</b> 20.59023558 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f2b5eff52d0a54801f5a2a4eb2008071.setContent(
  html_2002db8db77462b319cc6e0ccd8c811b
);

marker_9fb0de866312326c6154b2de32b10ea1.bindPopup(
  popup_f2b5eff52d0a54801f5a2a4eb2008071
);

marker_9fb0de866312326c6154b2de32b10ea1.bindTooltip(
  `<div>
                     Ather Grid - Hiranandani
                 </div>`,
  {
    sticky: true,
  }
);

marker_9fb0de866312326c6154b2de32b10ea1.setIcon(
  icon_b5da1dcf94601107e09fcf9ceaf22171
);

var marker_d4bb893fe32faa2a9a2ac025fa2239ea = L.marker(
  [19.2505, 72.8591],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d84c81baf96b45a278921ca7fedcdd51 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3163c776f8e9214c5d0a495a59d2dc52 = L.popup({
  maxWidth: 350,
});

var html_a5a23543002588cb5b7a6b5b2d3b3aef = $(
  `<div id="html_a5a23543002588cb5b7a6b5b2d3b3aef" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Dahisar</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Dahisar East Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 38.21376481 kWh<br>     <b>Charging Duration:</b> 1.06 mins<br>     <b>Charging Rate:</b> 35.89219701 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_3163c776f8e9214c5d0a495a59d2dc52.setContent(
  html_a5a23543002588cb5b7a6b5b2d3b3aef
);

marker_d4bb893fe32faa2a9a2ac025fa2239ea.bindPopup(
  popup_3163c776f8e9214c5d0a495a59d2dc52
);

marker_d4bb893fe32faa2a9a2ac025fa2239ea.bindTooltip(
  `<div>
                     ChargeZone - Dahisar
                 </div>`,
  {
    sticky: true,
  }
);

marker_d4bb893fe32faa2a9a2ac025fa2239ea.setIcon(
  icon_d84c81baf96b45a278921ca7fedcdd51
);

var marker_d5204b0cd93a1b3ce0c783df4f4e047a = L.marker(
  [19.0079, 72.8425],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_debc296ca691b41a3641cee9de8e1c12 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_29f397a45518ce036df91a2f14794252 = L.popup({
  maxWidth: 350,
});

var html_06075177bab3d9d284f2e6ae3e894b44 = $(
  `<div id="html_06075177bab3d9d284f2e6ae3e894b44" style="width: 100.0%; height: 100.0%;">     <h4>Magenta Charging Station (Parel)</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Station Rd, Parel East, Parel, Mumbai 400014<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 40.25719688 kWh<br>     <b>Charging Duration:</b> 2.24 mins<br>     <b>Charging Rate:</b> 17.94739459 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_29f397a45518ce036df91a2f14794252.setContent(
  html_06075177bab3d9d284f2e6ae3e894b44
);

marker_d5204b0cd93a1b3ce0c783df4f4e047a.bindPopup(
  popup_29f397a45518ce036df91a2f14794252
);

marker_d5204b0cd93a1b3ce0c783df4f4e047a.bindTooltip(
  `<div>
                     Magenta Charging Station (Parel)
                 </div>`,
  {
    sticky: true,
  }
);

marker_d5204b0cd93a1b3ce0c783df4f4e047a.setIcon(
  icon_debc296ca691b41a3641cee9de8e1c12
);

var marker_a9cc23d5db84cdbea8fb8102df45ede0 = L.marker(
  [19.2298, 72.8606],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0e8adb23bb434f2880bca74a6f85a313 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_496481b43ca50e4649c6ffb1bdad5ef9 = L.popup({
  maxWidth: 350,
});

var html_7f6104bad991952afb78c2314633dd55 = $(
  `<div id="html_7f6104bad991952afb78c2314633dd55" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Borivali</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Borivali West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 51.20288963 kWh<br>     <b>Charging Duration:</b> 1.13 mins<br>     <b>Charging Rate:</b> 45.19091647 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_496481b43ca50e4649c6ffb1bdad5ef9.setContent(
  html_7f6104bad991952afb78c2314633dd55
);

marker_a9cc23d5db84cdbea8fb8102df45ede0.bindPopup(
  popup_496481b43ca50e4649c6ffb1bdad5ef9
);

marker_a9cc23d5db84cdbea8fb8102df45ede0.bindTooltip(
  `<div>
                     ATUM Charge - Borivali
                 </div>`,
  {
    sticky: true,
  }
);

marker_a9cc23d5db84cdbea8fb8102df45ede0.setIcon(
  icon_0e8adb23bb434f2880bca74a6f85a313
);

var marker_a933e89b46dd8a104a584702ac3f5d60 = L.marker(
  [19.2505, 72.8591],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9995614758fe0a965665a4ca1278f2e7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5f40a45ff58e40c0ea2cfdb96d1b202b = L.popup({
  maxWidth: 350,
});

var html_fec9ac3195b6b064cd6e27cf798c631f = $(
  `<div id="html_fec9ac3195b6b064cd6e27cf798c631f" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Dahisar</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Dahisar East Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 77.45420996 kWh<br>     <b>Charging Duration:</b> 2.63 mins<br>     <b>Charging Rate:</b> 29.41340669 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_5f40a45ff58e40c0ea2cfdb96d1b202b.setContent(
  html_fec9ac3195b6b064cd6e27cf798c631f
);

marker_a933e89b46dd8a104a584702ac3f5d60.bindPopup(
  popup_5f40a45ff58e40c0ea2cfdb96d1b202b
);

marker_a933e89b46dd8a104a584702ac3f5d60.bindTooltip(
  `<div>
                     ChargeZone - Dahisar
                 </div>`,
  {
    sticky: true,
  }
);

marker_a933e89b46dd8a104a584702ac3f5d60.setIcon(
  icon_9995614758fe0a965665a4ca1278f2e7
);

var marker_0914c9a9f288604bb9d0d24226e5d1b7 = L.marker(
  [19.0533, 73.0571],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ae386b70260ab9f3c8dbc53c150e3826 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5d9bbfa4ca97ac37e297649ba00809dc = L.popup({
  maxWidth: 350,
});

var html_edfb5fde8701787b9cc76102811fa38d = $(
  `<div id="html_edfb5fde8701787b9cc76102811fa38d" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Kharghar</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Near Kharghar Station, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 88.86922407 kWh<br>     <b>Energy Consumed:</b> 20.17078858 kWh<br>     <b>Charging Duration:</b> 0.5 mins<br>     <b>Charging Rate:</b> 40.42078196 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5d9bbfa4ca97ac37e297649ba00809dc.setContent(
  html_edfb5fde8701787b9cc76102811fa38d
);

marker_0914c9a9f288604bb9d0d24226e5d1b7.bindPopup(
  popup_5d9bbfa4ca97ac37e297649ba00809dc
);

marker_0914c9a9f288604bb9d0d24226e5d1b7.bindTooltip(
  `<div>
                     Kazam - Kharghar
                 </div>`,
  {
    sticky: true,
  }
);

marker_0914c9a9f288604bb9d0d24226e5d1b7.setIcon(
  icon_ae386b70260ab9f3c8dbc53c150e3826
);

var marker_f860e414716bd584294de2c8401b9ee5 = L.marker(
  [19.0281, 72.8647],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8e49a28da62bf7fb2196995e3b02dd4b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_696a365f8597f9d3e84ce24bdbe98782 = L.popup({
  maxWidth: 350,
});

var html_2d69c6b24a710c19290a92af4df41976 = $(
  `<div id="html_2d69c6b24a710c19290a92af4df41976" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Mahanagar Gas</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> MGL Terminal, Opposite Anik Depot, Wadala, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 39.93276466 kWh<br>     <b>Charging Duration:</b> 0.81 mins<br>     <b>Charging Rate:</b> 49.11660927 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_696a365f8597f9d3e84ce24bdbe98782.setContent(
  html_2d69c6b24a710c19290a92af4df41976
);

marker_f860e414716bd584294de2c8401b9ee5.bindPopup(
  popup_696a365f8597f9d3e84ce24bdbe98782
);

marker_f860e414716bd584294de2c8401b9ee5.bindTooltip(
  `<div>
                     Tata Power - Mahanagar Gas
                 </div>`,
  {
    sticky: true,
  }
);

marker_f860e414716bd584294de2c8401b9ee5.setIcon(
  icon_8e49a28da62bf7fb2196995e3b02dd4b
);

var marker_769ff0c3a9e3eca88dbf943194e808ab = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8c492fc7aa806b2dbd8af8b8aee68465 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f45d083f687cc2a54fbc1044e8042f31 = L.popup({
  maxWidth: 350,
});

var html_6c5d773d99497c045f6de7d96839ff58 = $(
  `<div id="html_6c5d773d99497c045f6de7d96839ff58" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.268235994 kWh<br>     <b>Charging Duration:</b> 6.385988648 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f45d083f687cc2a54fbc1044e8042f31.setContent(
  html_6c5d773d99497c045f6de7d96839ff58
);

marker_769ff0c3a9e3eca88dbf943194e808ab.bindPopup(
  popup_f45d083f687cc2a54fbc1044e8042f31
);

marker_769ff0c3a9e3eca88dbf943194e808ab.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_769ff0c3a9e3eca88dbf943194e808ab.setIcon(
  icon_8c492fc7aa806b2dbd8af8b8aee68465
);

var marker_319c9e882b250b241a5aa0504458cc41 = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d093d15c1bf8e28b4676a92a93f8cc2f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_528da5ef9dd25a7eebc66dcd8f007395 = L.popup({
  maxWidth: 350,
});

var html_4dc5228dd4752b5013e8b7afea8e0d9d = $(
  `<div id="html_4dc5228dd4752b5013e8b7afea8e0d9d" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.268235994 kWh<br>     <b>Charging Duration:</b> 9.358943706 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_528da5ef9dd25a7eebc66dcd8f007395.setContent(
  html_4dc5228dd4752b5013e8b7afea8e0d9d
);

marker_319c9e882b250b241a5aa0504458cc41.bindPopup(
  popup_528da5ef9dd25a7eebc66dcd8f007395
);

marker_319c9e882b250b241a5aa0504458cc41.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_319c9e882b250b241a5aa0504458cc41.setIcon(
  icon_d093d15c1bf8e28b4676a92a93f8cc2f
);

var marker_d8ab3b44977e0589edd507712cf23547 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4657d9f7b98c726e49d6a99bf97774a3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_58b452ed72b32cdddb11d7138ca88e60 = L.popup({
  maxWidth: 350,
});

var html_55ab126ace69f4286a7fd6e80bdc1858 = $(
  `<div id="html_55ab126ace69f4286a7fd6e80bdc1858" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.268235994 kWh<br>     <b>Charging Duration:</b> 11.08500698 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_58b452ed72b32cdddb11d7138ca88e60.setContent(
  html_55ab126ace69f4286a7fd6e80bdc1858
);

marker_d8ab3b44977e0589edd507712cf23547.bindPopup(
  popup_58b452ed72b32cdddb11d7138ca88e60
);

marker_d8ab3b44977e0589edd507712cf23547.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_d8ab3b44977e0589edd507712cf23547.setIcon(
  icon_4657d9f7b98c726e49d6a99bf97774a3
);

var marker_5d147d117115363b16b4c8f08e7de166 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_5928ea3b46ebc2109702666e5daa9330 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_556a2e8c576f9075cbe04ffd032c0b3a = L.popup({
  maxWidth: 350,
});

var html_a250b841cb73cb027a79953c4741f96d = $(
  `<div id="html_a250b841cb73cb027a79953c4741f96d" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.268235994 kWh<br>     <b>Charging Duration:</b> 8.231092259 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_556a2e8c576f9075cbe04ffd032c0b3a.setContent(
  html_a250b841cb73cb027a79953c4741f96d
);

marker_5d147d117115363b16b4c8f08e7de166.bindPopup(
  popup_556a2e8c576f9075cbe04ffd032c0b3a
);

marker_5d147d117115363b16b4c8f08e7de166.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_5d147d117115363b16b4c8f08e7de166.setIcon(
  icon_5928ea3b46ebc2109702666e5daa9330
);

var marker_3ca59eb16a3023afdca559ff21632fba = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6f1f398893aa0f0b0a0fa6c596490271 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3d7759886aa50e892ddd1ed790860c31 = L.popup({
  maxWidth: 350,
});

var html_04d0703d39f07c1bbcc95dffbb383748 = $(
  `<div id="html_04d0703d39f07c1bbcc95dffbb383748" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.268235994 kWh<br>     <b>Charging Duration:</b> 14.5765951 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3d7759886aa50e892ddd1ed790860c31.setContent(
  html_04d0703d39f07c1bbcc95dffbb383748
);

marker_3ca59eb16a3023afdca559ff21632fba.bindPopup(
  popup_3d7759886aa50e892ddd1ed790860c31
);

marker_3ca59eb16a3023afdca559ff21632fba.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_3ca59eb16a3023afdca559ff21632fba.setIcon(
  icon_6f1f398893aa0f0b0a0fa6c596490271
);

var marker_24b02be1cc627e710efbf28244d99a77 = L.marker(
  [18.9545, 72.8189],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8a5f9a711b471ad91c865f1cbc915d28 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5e620c579ba7f1619aadf6a3b4592296 = L.popup({
  maxWidth: 350,
});

var html_a71b02cbbbfa0e467f4aee3984b2af46 = $(
  `<div id="html_a71b02cbbbfa0e467f4aee3984b2af46" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Opera House</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Charni Road East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 20.84637782 kWh<br>     <b>Charging Duration:</b> 0.78 mins<br>     <b>Charging Rate:</b> 26.57781476 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_5e620c579ba7f1619aadf6a3b4592296.setContent(
  html_a71b02cbbbfa0e467f4aee3984b2af46
);

marker_24b02be1cc627e710efbf28244d99a77.bindPopup(
  popup_5e620c579ba7f1619aadf6a3b4592296
);

marker_24b02be1cc627e710efbf28244d99a77.bindTooltip(
  `<div>
                     Tata Power - Opera House
                 </div>`,
  {
    sticky: true,
  }
);

marker_24b02be1cc627e710efbf28244d99a77.setIcon(
  icon_8a5f9a711b471ad91c865f1cbc915d28
);

var marker_a7dc8c67d7d12bb4a0cd5e8d70f7f6c2 = L.marker(
  [18.9545, 72.8189],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_68f641d41fdedf4e85a244742fb10df4 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7ca3e7e7bbb4b56dfa6f8947c222fbe9 = L.popup({
  maxWidth: 350,
});

var html_842811434426008628071972647afef4 = $(
  `<div id="html_842811434426008628071972647afef4" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Opera House</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Charni Road East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 37.61011503 kWh<br>     <b>Charging Duration:</b> 1.79 mins<br>     <b>Charging Rate:</b> 21.06766867 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_7ca3e7e7bbb4b56dfa6f8947c222fbe9.setContent(
  html_842811434426008628071972647afef4
);

marker_a7dc8c67d7d12bb4a0cd5e8d70f7f6c2.bindPopup(
  popup_7ca3e7e7bbb4b56dfa6f8947c222fbe9
);

marker_a7dc8c67d7d12bb4a0cd5e8d70f7f6c2.bindTooltip(
  `<div>
                     Tata Power - Opera House
                 </div>`,
  {
    sticky: true,
  }
);

marker_a7dc8c67d7d12bb4a0cd5e8d70f7f6c2.setIcon(
  icon_68f641d41fdedf4e85a244742fb10df4
);

var marker_92933169ca39586f9ec1aaef8d381bc9 = L.marker(
  [18.9897, 73.1145],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6027bee86c052151f529dbbbd8452b4d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_65052f98586d0af05f4623d752c891b8 = L.popup({
  maxWidth: 350,
});

var html_21d0f546bd5384bb39c800975994c262 = $(
  `<div id="html_21d0f546bd5384bb39c800975994c262" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Panvel</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Opp Panvel Station, Raigad<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 38.00957724 kWh<br>     <b>Charging Duration:</b> 5.77 mins<br>     <b>Charging Rate:</b> 6.590228457 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_65052f98586d0af05f4623d752c891b8.setContent(
  html_21d0f546bd5384bb39c800975994c262
);

marker_92933169ca39586f9ec1aaef8d381bc9.bindPopup(
  popup_65052f98586d0af05f4623d752c891b8
);

marker_92933169ca39586f9ec1aaef8d381bc9.bindTooltip(
  `<div>
                     ATUM Charge - Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_92933169ca39586f9ec1aaef8d381bc9.setIcon(
  icon_6027bee86c052151f529dbbbd8452b4d
);

var marker_ebb2457837e121665909be15676a3067 = L.marker(
  [18.991, 72.8485],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1e15ca9bf07273f33a30aa427a9874e6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_801acecd62ab7f068ffbf5cd377a7b50 = L.popup({
  maxWidth: 350,
});

var html_856503b77a25bed76275a9d64382993f = $(
  `<div id="html_856503b77a25bed76275a9d64382993f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Cotton Green</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Cotton Green Railyard, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 10.33664419 kWh<br>     <b>Charging Duration:</b> 1.847528978 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_801acecd62ab7f068ffbf5cd377a7b50.setContent(
  html_856503b77a25bed76275a9d64382993f
);

marker_ebb2457837e121665909be15676a3067.bindPopup(
  popup_801acecd62ab7f068ffbf5cd377a7b50
);

marker_ebb2457837e121665909be15676a3067.bindTooltip(
  `<div>
                     Tata Power - Cotton Green
                 </div>`,
  {
    sticky: true,
  }
);

marker_ebb2457837e121665909be15676a3067.setIcon(
  icon_1e15ca9bf07273f33a30aa427a9874e6
);

var marker_8f7e9f0b20cd0894edd176e62fc78a91 = L.marker(
  [19.034402, 72.85284],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ea18d934cedbc9c040656c53e1559c15 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_eba68b466fac2867413348e19755465c = L.popup({
  maxWidth: 350,
});

var html_b0bba7202be06fe68094906af47d2cba = $(
  `<div id="html_b0bba7202be06fe68094906af47d2cba" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power, Dharavi Colony</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Tata Power Dharavi Colony labour camp dharavi ,Matunga ,Mumbai 400019<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 37.11856726 kWh<br>     <b>Charging Duration:</b> 4.27 mins<br>     <b>Charging Rate:</b> 8.690646596 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_eba68b466fac2867413348e19755465c.setContent(
  html_b0bba7202be06fe68094906af47d2cba
);

marker_8f7e9f0b20cd0894edd176e62fc78a91.bindPopup(
  popup_eba68b466fac2867413348e19755465c
);

marker_8f7e9f0b20cd0894edd176e62fc78a91.bindTooltip(
  `<div>
                     Tata Power, Dharavi Colony
                 </div>`,
  {
    sticky: true,
  }
);

marker_8f7e9f0b20cd0894edd176e62fc78a91.setIcon(
  icon_ea18d934cedbc9c040656c53e1559c15
);

var marker_94fc412943eead8a62c0a03b4f0124dd = L.marker(
  [19.2402364, 72.8481819],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_96f6f29258fdb9cf4b77defbc0c1a95b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_caf474aaa3d10010a4b18574fbd84b66 = L.popup({
  maxWidth: 350,
});

var html_2564c6df6509f10001767976d1f76361 = $(
  `<div id="html_2564c6df6509f10001767976d1f76361" style="width: 100.0%; height: 100.0%;">     <h4>MCGM Parking || Club Aquaria</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Devidas Lane, Shanti Ashram Borivali West, Near St.Lawrence High School, Mumbai, Maharashtra ,Borivali<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.6603132 kWh<br>     <b>Charging Duration:</b> 1.12 mins<br>     <b>Charging Rate:</b> 40.67941804 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_caf474aaa3d10010a4b18574fbd84b66.setContent(
  html_2564c6df6509f10001767976d1f76361
);

marker_94fc412943eead8a62c0a03b4f0124dd.bindPopup(
  popup_caf474aaa3d10010a4b18574fbd84b66
);

marker_94fc412943eead8a62c0a03b4f0124dd.bindTooltip(
  `<div>
                     MCGM Parking || Club Aquaria
                 </div>`,
  {
    sticky: true,
  }
);

marker_94fc412943eead8a62c0a03b4f0124dd.setIcon(
  icon_96f6f29258fdb9cf4b77defbc0c1a95b
);

var marker_8a417a2e025ff20572de38aa9431b960 = L.marker(
  [19.133659, 72.900817],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6016101bc312cae6bee77783444721e5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b27ea15dcf8b19dfa5cc4ec33998ea1c = L.popup({
  maxWidth: 350,
});

var html_7cc14bc4aa6be65c8ac783bc9dcdf52f = $(
  `<div id="html_7cc14bc4aa6be65c8ac783bc9dcdf52f" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> MH | Mumbai | The Westin Mumbai Powai Lake,The Westin Mumbai Powai Lake Kailash Nagar, Morarji Nagar, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 58.74152298 kWh<br>     <b>Charging Duration:</b> 2.95 mins<br>     <b>Charging Rate:</b> 19.94270235 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_b27ea15dcf8b19dfa5cc4ec33998ea1c.setContent(
  html_7cc14bc4aa6be65c8ac783bc9dcdf52f
);

marker_8a417a2e025ff20572de38aa9431b960.bindPopup(
  popup_b27ea15dcf8b19dfa5cc4ec33998ea1c
);

marker_8a417a2e025ff20572de38aa9431b960.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_8a417a2e025ff20572de38aa9431b960.setIcon(
  icon_6016101bc312cae6bee77783444721e5
);

var marker_3a7328d552503c2db3cdcb3b9e631aa9 = L.marker(
  [18.9862222, 72.8149436],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_aa410db935c022de000778d43fd7ea7c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1a3e6be18241007f71db3b45a9b89510 = L.popup({
  maxWidth: 350,
});

var html_e646dd8d9f8e7f2dda7067a877cf0d9f = $(
  `<div id="html_e646dd8d9f8e7f2dda7067a877cf0d9f" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> MH | Mumbai | NSCI - Worli,NSCI, Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 58.74152298 kWh<br>     <b>Charging Duration:</b> 2.95 mins<br>     <b>Charging Rate:</b> 19.94270235 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_1a3e6be18241007f71db3b45a9b89510.setContent(
  html_e646dd8d9f8e7f2dda7067a877cf0d9f
);

marker_3a7328d552503c2db3cdcb3b9e631aa9.bindPopup(
  popup_1a3e6be18241007f71db3b45a9b89510
);

marker_3a7328d552503c2db3cdcb3b9e631aa9.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_3a7328d552503c2db3cdcb3b9e631aa9.setIcon(
  icon_aa410db935c022de000778d43fd7ea7c
);

var marker_d4a1583595c0c7c29c0a0cd45ae0cd48 = L.marker(
  [19.0984, 72.9262],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8f3f99364a1eb145546467a3a7cf2729 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e88060e1f9e8e532cf6c94e9c2657beb = L.popup({
  maxWidth: 350,
});

var html_9a21b5c78592bc25ef79303495dddab7 = $(
  `<div id="html_9a21b5c78592bc25ef79303495dddab7" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Vikhroli</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Vikhroli East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 33.47231506 kWh<br>     <b>Charging Duration:</b> 0.77 mins<br>     <b>Charging Rate:</b> 43.48176399 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e88060e1f9e8e532cf6c94e9c2657beb.setContent(
  html_9a21b5c78592bc25ef79303495dddab7
);

marker_d4a1583595c0c7c29c0a0cd45ae0cd48.bindPopup(
  popup_e88060e1f9e8e532cf6c94e9c2657beb
);

marker_d4a1583595c0c7c29c0a0cd45ae0cd48.bindTooltip(
  `<div>
                     EVteQ - Vikhroli
                 </div>`,
  {
    sticky: true,
  }
);

marker_d4a1583595c0c7c29c0a0cd45ae0cd48.setIcon(
  icon_8f3f99364a1eb145546467a3a7cf2729
);

var marker_700124ada005fc4f89ebb25eaf326b22 = L.marker(
  [19.0731, 72.8828],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d9690148df8596e0321b703b2b8268d1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ed252a3b8ae99ba74402893861b2a67b = L.popup({
  maxWidth: 350,
});

var html_d17d1896a489281621b289be50d044bc = $(
  `<div id="html_d17d1896a489281621b289be50d044bc" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Kurla</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Nehru Nagar, Near Kurla Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 72.08924277 kWh<br>     <b>Charging Duration:</b> 9.62 mins<br>     <b>Charging Rate:</b> 7.494575511 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ed252a3b8ae99ba74402893861b2a67b.setContent(
  html_d17d1896a489281621b289be50d044bc
);

marker_700124ada005fc4f89ebb25eaf326b22.bindPopup(
  popup_ed252a3b8ae99ba74402893861b2a67b
);

marker_700124ada005fc4f89ebb25eaf326b22.bindTooltip(
  `<div>
                     Kazam - Kurla
                 </div>`,
  {
    sticky: true,
  }
);

marker_700124ada005fc4f89ebb25eaf326b22.setIcon(
  icon_d9690148df8596e0321b703b2b8268d1
);

var marker_5c7f14a30f419496d7ccf05a96c10bb5 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d71ad0775ecc9179c61976a4b7468f43 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_43be90b2d0c5882824a37802ba08c308 = L.popup({
  maxWidth: 350,
});

var html_da09012f2cd3c92384965d05297b0aaa = $(
  `<div id="html_da09012f2cd3c92384965d05297b0aaa" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.81366157 kWh<br>     <b>Charging Duration:</b> 2.64 mins<br>     <b>Charging Rate:</b> 17.3546406 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_43be90b2d0c5882824a37802ba08c308.setContent(
  html_da09012f2cd3c92384965d05297b0aaa
);

marker_5c7f14a30f419496d7ccf05a96c10bb5.bindPopup(
  popup_43be90b2d0c5882824a37802ba08c308
);

marker_5c7f14a30f419496d7ccf05a96c10bb5.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_5c7f14a30f419496d7ccf05a96c10bb5.setIcon(
  icon_d71ad0775ecc9179c61976a4b7468f43
);

var marker_4744a2f5b5501020fcecd1886890876e = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_415630ee12ef0bd87131bc16ffe62aec = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_582ed62034739fdaf3c2dd9d5b3509e6 = L.popup({
  maxWidth: 350,
});

var html_873674e6d35d110950847fc40073129a = $(
  `<div id="html_873674e6d35d110950847fc40073129a" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.81366157 kWh<br>     <b>Charging Duration:</b> 2.64 mins<br>     <b>Charging Rate:</b> 17.3546406 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_582ed62034739fdaf3c2dd9d5b3509e6.setContent(
  html_873674e6d35d110950847fc40073129a
);

marker_4744a2f5b5501020fcecd1886890876e.bindPopup(
  popup_582ed62034739fdaf3c2dd9d5b3509e6
);

marker_4744a2f5b5501020fcecd1886890876e.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_4744a2f5b5501020fcecd1886890876e.setIcon(
  icon_415630ee12ef0bd87131bc16ffe62aec
);

var marker_01ac1b02a1f4554e3a62af35c771b5a2 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4aee92d31015d128994d4f02e64c5afa = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_fa1fc663dbe949e7e956b4b608a1012d = L.popup({
  maxWidth: 350,
});

var html_0e06749bb81cc9a75716cfffc1ad19b7 = $(
  `<div id="html_0e06749bb81cc9a75716cfffc1ad19b7" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.81366157 kWh<br>     <b>Charging Duration:</b> 2.64 mins<br>     <b>Charging Rate:</b> 17.3546406 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_fa1fc663dbe949e7e956b4b608a1012d.setContent(
  html_0e06749bb81cc9a75716cfffc1ad19b7
);

marker_01ac1b02a1f4554e3a62af35c771b5a2.bindPopup(
  popup_fa1fc663dbe949e7e956b4b608a1012d
);

marker_01ac1b02a1f4554e3a62af35c771b5a2.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_01ac1b02a1f4554e3a62af35c771b5a2.setIcon(
  icon_4aee92d31015d128994d4f02e64c5afa
);

var marker_85d603fb21278ccfa0b988e28dba554f = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4171989cec2070bf0bfc6cd614f7c661 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_418fb79cfc9a3a954e390ba1b7479ee5 = L.popup({
  maxWidth: 350,
});

var html_58f219367f76c3c9a7b0bc8753f7c8bb = $(
  `<div id="html_58f219367f76c3c9a7b0bc8753f7c8bb" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.81366157 kWh<br>     <b>Charging Duration:</b> 2.64 mins<br>     <b>Charging Rate:</b> 17.3546406 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_418fb79cfc9a3a954e390ba1b7479ee5.setContent(
  html_58f219367f76c3c9a7b0bc8753f7c8bb
);

marker_85d603fb21278ccfa0b988e28dba554f.bindPopup(
  popup_418fb79cfc9a3a954e390ba1b7479ee5
);

marker_85d603fb21278ccfa0b988e28dba554f.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_85d603fb21278ccfa0b988e28dba554f.setIcon(
  icon_4171989cec2070bf0bfc6cd614f7c661
);

var marker_fa0989988c934444b4c5a2990cedb634 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_575d0025437187a545ecd0e649483f82 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d80168dd75b74e6fb7b86e71129d7977 = L.popup({
  maxWidth: 350,
});

var html_4c2b36b157da5b3f94a3517ed1069327 = $(
  `<div id="html_4c2b36b157da5b3f94a3517ed1069327" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 45.81366157 kWh<br>     <b>Charging Duration:</b> 2.64 mins<br>     <b>Charging Rate:</b> 17.3546406 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_d80168dd75b74e6fb7b86e71129d7977.setContent(
  html_4c2b36b157da5b3f94a3517ed1069327
);

marker_fa0989988c934444b4c5a2990cedb634.bindPopup(
  popup_d80168dd75b74e6fb7b86e71129d7977
);

marker_fa0989988c934444b4c5a2990cedb634.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_fa0989988c934444b4c5a2990cedb634.setIcon(
  icon_575d0025437187a545ecd0e649483f82
);

var marker_c4332e1e6fa2f8b621ac2b2713f88b8b = L.marker(
  [19.0246, 72.8402],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_78a004f1ceb1aba1357a548ce20fa0a2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c7f44e66fd1d1001d193eb43e5ec20f4 = L.popup({
  maxWidth: 350,
});

var html_e84f9bbf47b66882df7251548e76a315 = $(
  `<div id="html_e84f9bbf47b66882df7251548e76a315" style="width: 100.0%; height: 100.0%;">     <h4>Kohinoor Altissimo Residential Tower</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Kohinoor Altissimo Residential Tower, Kohinoor Altissimo, Kasaravadi, Dadar, Mumbai, Maharashtra 400028<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 75.52338507 kWh<br>     <b>Charging Duration:</b> 3.03 mins<br>     <b>Charging Rate:</b> 24.8909192 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_c7f44e66fd1d1001d193eb43e5ec20f4.setContent(
  html_e84f9bbf47b66882df7251548e76a315
);

marker_c4332e1e6fa2f8b621ac2b2713f88b8b.bindPopup(
  popup_c7f44e66fd1d1001d193eb43e5ec20f4
);

marker_c4332e1e6fa2f8b621ac2b2713f88b8b.bindTooltip(
  `<div>
                     Kohinoor Altissimo Residential Tower
                 </div>`,
  {
    sticky: true,
  }
);

marker_c4332e1e6fa2f8b621ac2b2713f88b8b.setIcon(
  icon_78a004f1ceb1aba1357a548ce20fa0a2
);

var marker_b889dbd9f4e9db5f636cb6df7f90164c = L.marker(
  [19.0085, 72.8153],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1c986d70f5dbcefdb1d48abcd2df3b7c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_38832b49a3739f995c3c500e88edfdc2 = L.popup({
  maxWidth: 350,
});

var html_790d7c8b5f6afb0afc88cf5d0d8fa9aa = $(
  `<div id="html_790d7c8b5f6afb0afc88cf5d0d8fa9aa" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Worli</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Atria Mall, Dr Annie Besant Rd, Worli, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 77.63851677 kWh<br>     <b>Charging Duration:</b> 9.55 mins<br>     <b>Charging Rate:</b> 8.125454971 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_38832b49a3739f995c3c500e88edfdc2.setContent(
  html_790d7c8b5f6afb0afc88cf5d0d8fa9aa
);

marker_b889dbd9f4e9db5f636cb6df7f90164c.bindPopup(
  popup_38832b49a3739f995c3c500e88edfdc2
);

marker_b889dbd9f4e9db5f636cb6df7f90164c.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Worli
                 </div>`,
  {
    sticky: true,
  }
);

marker_b889dbd9f4e9db5f636cb6df7f90164c.setIcon(
  icon_1c986d70f5dbcefdb1d48abcd2df3b7c
);

var marker_7a8930daaf3c4ad8d696a4cdd1b93ae6 = L.marker(
  [19.1876, 72.8436],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_eb58c59cd43bb5d9b5345b248bc022b2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cba8d56c78955ebfe6066115de0fc541 = L.popup({
  maxWidth: 350,
});

var html_b88aed94114064274356cec1fafdef27 = $(
  `<div id="html_b88aed94114064274356cec1fafdef27" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge (Malad)</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> 95, Malad, Viaykar Vadi, Malad West, Mumbai 400064<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 53.9569817 kWh<br>     <b>Charging Duration:</b> 3.02 mins<br>     <b>Charging Rate:</b> 17.87474459 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_cba8d56c78955ebfe6066115de0fc541.setContent(
  html_b88aed94114064274356cec1fafdef27
);

marker_7a8930daaf3c4ad8d696a4cdd1b93ae6.bindPopup(
  popup_cba8d56c78955ebfe6066115de0fc541
);

marker_7a8930daaf3c4ad8d696a4cdd1b93ae6.bindTooltip(
  `<div>
                     ATUM Charge (Malad)
                 </div>`,
  {
    sticky: true,
  }
);

marker_7a8930daaf3c4ad8d696a4cdd1b93ae6.setIcon(
  icon_eb58c59cd43bb5d9b5345b248bc022b2
);

var marker_e5576f3a18439c2df9ca30808b69c32d = L.marker(
  [18.9692, 72.8195],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_efdd8b4ee27ec3af8411e30829011d16 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3a4c450735080ca97f9165f7891cb7a1 = L.popup({
  maxWidth: 350,
});

var html_d19304324e5ee8670157fb1ef8ad4b72 = $(
  `<div id="html_d19304324e5ee8670157fb1ef8ad4b72" style="width: 100.0%; height: 100.0%;">     <h4>Volttic - Mumbai Central</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Mumbai Central Station Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 46.61987333 kWh<br>     <b>Charging Duration:</b> 6.31 mins<br>     <b>Charging Rate:</b> 7.388686338 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_3a4c450735080ca97f9165f7891cb7a1.setContent(
  html_d19304324e5ee8670157fb1ef8ad4b72
);

marker_e5576f3a18439c2df9ca30808b69c32d.bindPopup(
  popup_3a4c450735080ca97f9165f7891cb7a1
);

marker_e5576f3a18439c2df9ca30808b69c32d.bindTooltip(
  `<div>
                     Volttic - Mumbai Central
                 </div>`,
  {
    sticky: true,
  }
);

marker_e5576f3a18439c2df9ca30808b69c32d.setIcon(
  icon_efdd8b4ee27ec3af8411e30829011d16
);

var marker_ebdda65fe0a91765102401d4e7d23836 = L.marker(
  [19.1265, 72.8874],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6085967fa055cac9fb5992221472bc9c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f488982d2cad391ccddc3a0ffbeebb28 = L.popup({
  maxWidth: 350,
});

var html_50d747ab96aa181935f37c3f7fcde9a7 = $(
  `<div id="html_50d747ab96aa181935f37c3f7fcde9a7" style="width: 100.0%; height: 100.0%;">     <h4>Volttic Mini Charging</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Saki Vihar Rd, Near Saki Naka Metro, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 6.443672289 kWh<br>     <b>Charging Duration:</b> 0.43 mins<br>     <b>Charging Rate:</b> 14.99241844 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f488982d2cad391ccddc3a0ffbeebb28.setContent(
  html_50d747ab96aa181935f37c3f7fcde9a7
);

marker_ebdda65fe0a91765102401d4e7d23836.bindPopup(
  popup_f488982d2cad391ccddc3a0ffbeebb28
);

marker_ebdda65fe0a91765102401d4e7d23836.bindTooltip(
  `<div>
                     Volttic Mini Charging
                 </div>`,
  {
    sticky: true,
  }
);

marker_ebdda65fe0a91765102401d4e7d23836.setIcon(
  icon_6085967fa055cac9fb5992221472bc9c
);

var marker_fa9ce30bcf0c2ec2e4ca315f578460d5 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ee0ebb65ba936878e801cb911752b5ff = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_fb9365bf4313b99ad26409423446a3dc = L.popup({
  maxWidth: 350,
});

var html_3ce178088f3fb59d08b914bb364d060a = $(
  `<div id="html_3ce178088f3fb59d08b914bb364d060a" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.04623037 kWh<br>     <b>Charging Duration:</b> 3.34 mins<br>     <b>Charging Rate:</b> 18.56265579 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_fb9365bf4313b99ad26409423446a3dc.setContent(
  html_3ce178088f3fb59d08b914bb364d060a
);

marker_fa9ce30bcf0c2ec2e4ca315f578460d5.bindPopup(
  popup_fb9365bf4313b99ad26409423446a3dc
);

marker_fa9ce30bcf0c2ec2e4ca315f578460d5.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_fa9ce30bcf0c2ec2e4ca315f578460d5.setIcon(
  icon_ee0ebb65ba936878e801cb911752b5ff
);

var marker_29704b6f80c45192ff1387b6c4281f0b = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6966f8f3fe9aab1f06d2118ac7f6bb9d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_421f1a28ef8d5f4e105c6494110b4800 = L.popup({
  maxWidth: 350,
});

var html_41f41567d5ea26eb7f6e348dc4af6e13 = $(
  `<div id="html_41f41567d5ea26eb7f6e348dc4af6e13" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.04623037 kWh<br>     <b>Charging Duration:</b> 3.34 mins<br>     <b>Charging Rate:</b> 18.56265579 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_421f1a28ef8d5f4e105c6494110b4800.setContent(
  html_41f41567d5ea26eb7f6e348dc4af6e13
);

marker_29704b6f80c45192ff1387b6c4281f0b.bindPopup(
  popup_421f1a28ef8d5f4e105c6494110b4800
);

marker_29704b6f80c45192ff1387b6c4281f0b.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_29704b6f80c45192ff1387b6c4281f0b.setIcon(
  icon_6966f8f3fe9aab1f06d2118ac7f6bb9d
);

var marker_04aaf1a5a5e4d4286382dba8aeb58b69 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d58015ed6895a4e62b063148318e994b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_454be6402d5e8ca295607e32552b515c = L.popup({
  maxWidth: 350,
});

var html_b79155c45883a3e03fb59be7147f904f = $(
  `<div id="html_b79155c45883a3e03fb59be7147f904f" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.04623037 kWh<br>     <b>Charging Duration:</b> 3.34 mins<br>     <b>Charging Rate:</b> 18.56265579 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_454be6402d5e8ca295607e32552b515c.setContent(
  html_b79155c45883a3e03fb59be7147f904f
);

marker_04aaf1a5a5e4d4286382dba8aeb58b69.bindPopup(
  popup_454be6402d5e8ca295607e32552b515c
);

marker_04aaf1a5a5e4d4286382dba8aeb58b69.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_04aaf1a5a5e4d4286382dba8aeb58b69.setIcon(
  icon_d58015ed6895a4e62b063148318e994b
);

var marker_6ac1a59111f4cdc149cb02898636d14b = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f256d88caac251357fd495237e432f72 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_182df34f3e849f0050079e4708547470 = L.popup({
  maxWidth: 350,
});

var html_66ba3d8a34580362391802a2a27d96b8 = $(
  `<div id="html_66ba3d8a34580362391802a2a27d96b8" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.04623037 kWh<br>     <b>Charging Duration:</b> 3.34 mins<br>     <b>Charging Rate:</b> 18.56265579 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_182df34f3e849f0050079e4708547470.setContent(
  html_66ba3d8a34580362391802a2a27d96b8
);

marker_6ac1a59111f4cdc149cb02898636d14b.bindPopup(
  popup_182df34f3e849f0050079e4708547470
);

marker_6ac1a59111f4cdc149cb02898636d14b.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_6ac1a59111f4cdc149cb02898636d14b.setIcon(
  icon_f256d88caac251357fd495237e432f72
);

var marker_bc89b67278c1651b53ccde7b4ec7b182 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_caa0dd045626d9743eb4b2593f94d9e2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cfb1abe1132f3db74f62a86257726673 = L.popup({
  maxWidth: 350,
});

var html_485b242967a2630a54a9a50095d07d8e = $(
  `<div id="html_485b242967a2630a54a9a50095d07d8e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 62.04623037 kWh<br>     <b>Charging Duration:</b> 3.34 mins<br>     <b>Charging Rate:</b> 18.56265579 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_cfb1abe1132f3db74f62a86257726673.setContent(
  html_485b242967a2630a54a9a50095d07d8e
);

marker_bc89b67278c1651b53ccde7b4ec7b182.bindPopup(
  popup_cfb1abe1132f3db74f62a86257726673
);

marker_bc89b67278c1651b53ccde7b4ec7b182.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_bc89b67278c1651b53ccde7b4ec7b182.setIcon(
  icon_caa0dd045626d9743eb4b2593f94d9e2
);

var marker_3b52c5f62a11f5db0818ab1e28276048 = L.marker(
  [19.133659, 72.900817],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_befb86d4fb6f11e26c551ab4d290d9ef = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ddbb14865ffb50125bc38c837181f173 = L.popup({
  maxWidth: 350,
});

var html_5e53cd39dc187cc9a142268e8abf7f9a = $(
  `<div id="html_5e53cd39dc187cc9a142268e8abf7f9a" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> MH | Mumbai | The Westin Mumbai Powai Lake,The Westin Mumbai Powai Lake Kailash Nagar, Morarji Nagar, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.70850688 kWh<br>     <b>Charging Duration:</b> 1.85 mins<br>     <b>Charging Rate:</b> 38.79607655 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_ddbb14865ffb50125bc38c837181f173.setContent(
  html_5e53cd39dc187cc9a142268e8abf7f9a
);

marker_3b52c5f62a11f5db0818ab1e28276048.bindPopup(
  popup_ddbb14865ffb50125bc38c837181f173
);

marker_3b52c5f62a11f5db0818ab1e28276048.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_3b52c5f62a11f5db0818ab1e28276048.setIcon(
  icon_befb86d4fb6f11e26c551ab4d290d9ef
);

var marker_26a37e6f6947bcd446d5b67760da0e67 = L.marker(
  [18.9862222, 72.8149436],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f314ca6626c3f22bd15ae2b20df879c2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5b2f684cb5a939cc39965a467d0f13e2 = L.popup({
  maxWidth: 350,
});

var html_283ac089bef45e5c4215686fa3dc7b46 = $(
  `<div id="html_283ac089bef45e5c4215686fa3dc7b46" style="width: 100.0%; height: 100.0%;">     <h4>Charge Zone</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> MH | Mumbai | NSCI - Worli,NSCI, Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 71.70850688 kWh<br>     <b>Charging Duration:</b> 1.85 mins<br>     <b>Charging Rate:</b> 38.79607655 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_5b2f684cb5a939cc39965a467d0f13e2.setContent(
  html_283ac089bef45e5c4215686fa3dc7b46
);

marker_26a37e6f6947bcd446d5b67760da0e67.bindPopup(
  popup_5b2f684cb5a939cc39965a467d0f13e2
);

marker_26a37e6f6947bcd446d5b67760da0e67.bindTooltip(
  `<div>
                     Charge Zone
                 </div>`,
  {
    sticky: true,
  }
);

marker_26a37e6f6947bcd446d5b67760da0e67.setIcon(
  icon_f314ca6626c3f22bd15ae2b20df879c2
);

var marker_39d399599af577ac1d4677539c0c9afa = L.marker(
  [19.2587, 72.9773],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_153671353585be12fced8d63678459d0 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_bd7dd959350496dbda925afb0d8f0b26 = L.popup({
  maxWidth: 350,
});

var html_3c6808059b51831725f5d27a7e133c0f = $(
  `<div id="html_3c6808059b51831725f5d27a7e133c0f" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Kolshet</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Kolshet Road, Thane West<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 44.01595166 kWh<br>     <b>Charging Duration:</b> 1.16 mins<br>     <b>Charging Rate:</b> 38.10527791 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_bd7dd959350496dbda925afb0d8f0b26.setContent(
  html_3c6808059b51831725f5d27a7e133c0f
);

marker_39d399599af577ac1d4677539c0c9afa.bindPopup(
  popup_bd7dd959350496dbda925afb0d8f0b26
);

marker_39d399599af577ac1d4677539c0c9afa.bindTooltip(
  `<div>
                     Jio-bp Pulse - Kolshet
                 </div>`,
  {
    sticky: true,
  }
);

marker_39d399599af577ac1d4677539c0c9afa.setIcon(
  icon_153671353585be12fced8d63678459d0
);

var marker_1bd9cfcd940c69e0b8e3ce4976939e90 = L.marker(
  [19.1182, 72.9053],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6bcee8874894510f460be5e6cf18653f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_53b629d7ef131f70c43a52456300ab0d = L.popup({
  maxWidth: 350,
});

var html_5c87bbc990af58716ecfdbd9f04432e9 = $(
  `<div id="html_5c87bbc990af58716ecfdbd9f04432e9" style="width: 100.0%; height: 100.0%;">     <h4>Fortum - Powai Plaza</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Powai Plaza Mall Parking, Powai, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 60.65969098 kWh<br>     <b>Energy Consumed:</b> 66.09153403 kWh<br>     <b>Charging Duration:</b> 1.76 mins<br>     <b>Charging Rate:</b> 37.60056306 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_53b629d7ef131f70c43a52456300ab0d.setContent(
  html_5c87bbc990af58716ecfdbd9f04432e9
);

marker_1bd9cfcd940c69e0b8e3ce4976939e90.bindPopup(
  popup_53b629d7ef131f70c43a52456300ab0d
);

marker_1bd9cfcd940c69e0b8e3ce4976939e90.bindTooltip(
  `<div>
                     Fortum - Powai Plaza
                 </div>`,
  {
    sticky: true,
  }
);

marker_1bd9cfcd940c69e0b8e3ce4976939e90.setIcon(
  icon_6bcee8874894510f460be5e6cf18653f
);

var marker_acddbd5a899259086657399391edf091 = L.marker(
  [18.9636, 72.8019],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_efc8a0c28dea3d98077e94e527e0c800 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c0e74af9928dab04ee27e93d35b7bef7 = L.popup({
  maxWidth: 350,
});

var html_1f49c5995d3eb76c770dd6a370fcb923 = $(
  `<div id="html_1f49c5995d3eb76c770dd6a370fcb923" style="width: 100.0%; height: 100.0%;">     <h4>Jio-bp Pulse - Napean Sea Road</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> Priyadarshini Park, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 44.88676331 kWh<br>     <b>Charging Duration:</b> 1.55 mins<br>     <b>Charging Rate:</b> 28.9773945 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_c0e74af9928dab04ee27e93d35b7bef7.setContent(
  html_1f49c5995d3eb76c770dd6a370fcb923
);

marker_acddbd5a899259086657399391edf091.bindPopup(
  popup_c0e74af9928dab04ee27e93d35b7bef7
);

marker_acddbd5a899259086657399391edf091.bindTooltip(
  `<div>
                     Jio-bp Pulse - Napean Sea Road
                 </div>`,
  {
    sticky: true,
  }
);

marker_acddbd5a899259086657399391edf091.setIcon(
  icon_efc8a0c28dea3d98077e94e527e0c800
);

var marker_56c6866b26b1be27dd2aefe0b835d10d = L.marker(
  [19.0588, 72.8703],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_ae6a2003b75c93d836209b6756c4933e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_94f70b4ee39445f57ae071419a1ded12 = L.popup({
  maxWidth: 350,
});

var html_de1d885bb6138e72ab1225dee7e4e126 = $(
  `<div id="html_de1d885bb6138e72ab1225dee7e4e126" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Bandra Kurla Complex</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Next to Bharat Diamond Bourse, BKC, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 58.94085857 kWh<br>     <b>Charging Duration:</b> 1.35 mins<br>     <b>Charging Rate:</b> 43.7022121 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_94f70b4ee39445f57ae071419a1ded12.setContent(
  html_de1d885bb6138e72ab1225dee7e4e126
);

marker_56c6866b26b1be27dd2aefe0b835d10d.bindPopup(
  popup_94f70b4ee39445f57ae071419a1ded12
);

marker_56c6866b26b1be27dd2aefe0b835d10d.bindTooltip(
  `<div>
                     Statiq - Bandra Kurla Complex
                 </div>`,
  {
    sticky: true,
  }
);

marker_56c6866b26b1be27dd2aefe0b835d10d.setIcon(
  icon_ae6a2003b75c93d836209b6756c4933e
);

var marker_b8b1e3ed17caceb26edf50b9e20f6d7f = L.marker(
  [19.0161, 72.828],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9cd08c493d5161fdb2d8d8620ba6cd88 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3889196d0200ee3e7aed05a932d7c4bb = L.popup({
  maxWidth: 350,
});

var html_aa79a8f9c16cbd942efd54b27f2671bd = $(
  `<div id="html_aa79a8f9c16cbd942efd54b27f2671bd" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint Charging Station</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> 527, Building No-2, SRA Cooperative Society, Prabhadevi, near Ahuja Towers, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 109.7951283 kWh<br>     <b>Energy Consumed:</b> 10.03981781 kWh<br>     <b>Charging Duration:</b> 21.04018412 mins<br>     <b>Charging Rate:</b> 26.50712322 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_3889196d0200ee3e7aed05a932d7c4bb.setContent(
  html_aa79a8f9c16cbd942efd54b27f2671bd
);

marker_b8b1e3ed17caceb26edf50b9e20f6d7f.bindPopup(
  popup_3889196d0200ee3e7aed05a932d7c4bb
);

marker_b8b1e3ed17caceb26edf50b9e20f6d7f.bindTooltip(
  `<div>
                     VoltaPoint Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_b8b1e3ed17caceb26edf50b9e20f6d7f.setIcon(
  icon_9cd08c493d5161fdb2d8d8620ba6cd88
);

var marker_614432cc7a6c5a164abd8cdac7da88e8 = L.marker(
  [19.051601, 72.838011],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0f4690bed4129b3b332b3a8d21e35e96 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_11048850559d57974a7c3d1f3259516b = L.popup({
  maxWidth: 350,
});

var html_dca1e3d9e8822d0ffd8a4652518fa454 = $(
  `<div id="html_dca1e3d9e8822d0ffd8a4652518fa454" style="width: 100.0%; height: 100.0%;">     <h4>IOCL Kini Causway, Bandra</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> 36, SV Rd, Santosh Nagar, Bandra West, Mumbai, Maharashtra 400050<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 29.75838484 kWh<br>     <b>Charging Duration:</b> 1.01 mins<br>     <b>Charging Rate:</b> 29.38504741 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_11048850559d57974a7c3d1f3259516b.setContent(
  html_dca1e3d9e8822d0ffd8a4652518fa454
);

marker_614432cc7a6c5a164abd8cdac7da88e8.bindPopup(
  popup_11048850559d57974a7c3d1f3259516b
);

marker_614432cc7a6c5a164abd8cdac7da88e8.bindTooltip(
  `<div>
                     IOCL Kini Causway, Bandra
                 </div>`,
  {
    sticky: true,
  }
);

marker_614432cc7a6c5a164abd8cdac7da88e8.setIcon(
  icon_0f4690bed4129b3b332b3a8d21e35e96
);

var marker_8ec7346e409c9c98e45bcb61a38f916b = L.marker(
  [19.02460889, 72.84282021],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_886d7efb43737ad9bcd07ce577e02419 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_91eda2df5446d9a27e3ef2f4ccecfdc3 = L.popup({
  maxWidth: 350,
});

var html_9ca0d307df527b07b2e5825a7c6b5799 = $(
  `<div id="html_9ca0d307df527b07b2e5825a7c6b5799" style="width: 100.0%; height: 100.0%;">     <h4>Kohinoor MCGM parking</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Kohinoor Square, Kasaravadi, Dadar, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 69.59647496 kWh<br>     <b>Charging Duration:</b> 4.68 mins<br>     <b>Charging Rate:</b> 14.86068898 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_91eda2df5446d9a27e3ef2f4ccecfdc3.setContent(
  html_9ca0d307df527b07b2e5825a7c6b5799
);

marker_8ec7346e409c9c98e45bcb61a38f916b.bindPopup(
  popup_91eda2df5446d9a27e3ef2f4ccecfdc3
);

marker_8ec7346e409c9c98e45bcb61a38f916b.bindTooltip(
  `<div>
                     Kohinoor MCGM parking
                 </div>`,
  {
    sticky: true,
  }
);

marker_8ec7346e409c9c98e45bcb61a38f916b.setIcon(
  icon_886d7efb43737ad9bcd07ce577e02419
);

var marker_c34b8d0d65b47083e0d6c0f6367e7d3b = L.marker(
  [18.9285, 72.8255],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8d55d49e729cf29b25b05f1b631159ff = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6cdd8c77d5c70c621a7c91f19401e9a1 = L.popup({
  maxWidth: 350,
});

var html_b617311c688ec5f09561d0cd96cbcaf8 = $(
  `<div id="html_b617311c688ec5f09561d0cd96cbcaf8" style="width: 100.0%; height: 100.0%;">     <h4>HP Super Service DC Charging Station</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> 157, Jeevan Bima Marg, Backbay Reclamation, Churchgate, Mumbai, Maharashtra 400020, India<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 8.234584116 kWh<br>     <b>Charging Duration:</b> 0.19 mins<br>     <b>Charging Rate:</b> 43.81287256 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6cdd8c77d5c70c621a7c91f19401e9a1.setContent(
  html_b617311c688ec5f09561d0cd96cbcaf8
);

marker_c34b8d0d65b47083e0d6c0f6367e7d3b.bindPopup(
  popup_6cdd8c77d5c70c621a7c91f19401e9a1
);

marker_c34b8d0d65b47083e0d6c0f6367e7d3b.bindTooltip(
  `<div>
                     HP Super Service DC Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_c34b8d0d65b47083e0d6c0f6367e7d3b.setIcon(
  icon_8d55d49e729cf29b25b05f1b631159ff
);

var marker_5593222a4a9321fe78bda3b5f1e23580 = L.marker(
  [18.99453515, 73.11513242],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_3e8053bb218bdd5bb4ce783f8941c469 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_86e67ed094ebe11c0cae85c4361f1911 = L.popup({
  maxWidth: 350,
});

var html_ec7d4b2ce6a9b9166e0d509928120ca3 = $(
  `<div id="html_ec7d4b2ce6a9b9166e0d509928120ca3" style="width: 100.0%; height: 100.0%;">     <h4>HOTEL REDWINGS CASTLE</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Near to Orion Mall/ New Panvel Bridge, Old, Mumbai - Pune Expy,<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 40.78700348 kWh<br>     <b>Charging Duration:</b> 3.7 mins<br>     <b>Charging Rate:</b> 11.03185075 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_86e67ed094ebe11c0cae85c4361f1911.setContent(
  html_ec7d4b2ce6a9b9166e0d509928120ca3
);

marker_5593222a4a9321fe78bda3b5f1e23580.bindPopup(
  popup_86e67ed094ebe11c0cae85c4361f1911
);

marker_5593222a4a9321fe78bda3b5f1e23580.bindTooltip(
  `<div>
                     HOTEL REDWINGS CASTLE
                 </div>`,
  {
    sticky: true,
  }
);

marker_5593222a4a9321fe78bda3b5f1e23580.setIcon(
  icon_3e8053bb218bdd5bb4ce783f8941c469
);

var marker_36b61b3fdabf25c3ae5dd898e4b311da = L.marker(
  [19.0455, 72.8996],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d827debe805d80295ec731fda7827482 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_14c01e4f6e8e984f8995ea4207e2b63e = L.popup({
  maxWidth: 350,
});

var html_df7741d7be6c3d57e009fa94a284897d = $(
  `<div id="html_df7741d7be6c3d57e009fa94a284897d" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Chembur</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Next to Diamond Garden, Chembur, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 82.66681121 kWh<br>     <b>Energy Consumed:</b> 18.79049305 kWh<br>     <b>Charging Duration:</b> 0.49 mins<br>     <b>Charging Rate:</b> 38.26182989 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_14c01e4f6e8e984f8995ea4207e2b63e.setContent(
  html_df7741d7be6c3d57e009fa94a284897d
);

marker_36b61b3fdabf25c3ae5dd898e4b311da.bindPopup(
  popup_14c01e4f6e8e984f8995ea4207e2b63e
);

marker_36b61b3fdabf25c3ae5dd898e4b311da.bindTooltip(
  `<div>
                     Tata Power - Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_36b61b3fdabf25c3ae5dd898e4b311da.setIcon(
  icon_d827debe805d80295ec731fda7827482
);

var marker_7fae08078ffe6795d9a02edf3591e4c2 = L.marker(
  [19.17674569, 72.94574801],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a1bf5443aed1ef7bcf2bec3473c56845 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d3d90c3dc75ec77982036904692a1115 = L.popup({
  maxWidth: 350,
});

var html_31a679c0fe51332ededcad71cc7d8e85 = $(
  `<div id="html_31a679c0fe51332ededcad71cc7d8e85" style="width: 100.0%; height: 100.0%;">     <h4>Masstech controls Pvt ltd</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> 2/7 Meghal Industrial Estate, Devidayal Road, Mulund West, Mumbai, Maharashtra 400080<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 34.89511327 kWh<br>     <b>Charging Duration:</b> 7.15 mins<br>     <b>Charging Rate:</b> 4.881436199 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d3d90c3dc75ec77982036904692a1115.setContent(
  html_31a679c0fe51332ededcad71cc7d8e85
);

marker_7fae08078ffe6795d9a02edf3591e4c2.bindPopup(
  popup_d3d90c3dc75ec77982036904692a1115
);

marker_7fae08078ffe6795d9a02edf3591e4c2.bindTooltip(
  `<div>
                     Masstech controls Pvt ltd
                 </div>`,
  {
    sticky: true,
  }
);

marker_7fae08078ffe6795d9a02edf3591e4c2.setIcon(
  icon_a1bf5443aed1ef7bcf2bec3473c56845
);

var marker_6b19feb3394dbcd5801574816807b263 = L.marker(
  [18.9218, 72.8347],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_64bcfaa9a992482e91e8088d726df1d5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_023b2aeb9312fe95fa9ec739b20faae0 = L.popup({
  maxWidth: 350,
});

var html_5d2e1ef06f4addd7ec3151976b1c4873 = $(
  `<div id="html_5d2e1ef06f4addd7ec3151976b1c4873" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Gateway of India</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Apollo Bunder Road, Colaba, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 78.43167082 kWh<br>     <b>Energy Consumed:</b> 38.08536377 kWh<br>     <b>Charging Duration:</b> 23.01 mins<br>     <b>Charging Rate:</b> 1.654937068 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_023b2aeb9312fe95fa9ec739b20faae0.setContent(
  html_5d2e1ef06f4addd7ec3151976b1c4873
);

marker_6b19feb3394dbcd5801574816807b263.bindPopup(
  popup_023b2aeb9312fe95fa9ec739b20faae0
);

marker_6b19feb3394dbcd5801574816807b263.bindTooltip(
  `<div>
                     Tata Power - Gateway of India
                 </div>`,
  {
    sticky: true,
  }
);

marker_6b19feb3394dbcd5801574816807b263.setIcon(
  icon_64bcfaa9a992482e91e8088d726df1d5
);

var marker_847d54eb1cba85f71eb4d228a5354f26 = L.marker(
  [19.1726, 72.9532],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d8d620388563b54debc9e1c35159d4bd = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a8156cf9921e55f669c5c7be2876ac90 = L.popup({
  maxWidth: 350,
});

var html_e375d36e6bdeccf938f9eb89d3da16a4 = $(
  `<div id="html_e375d36e6bdeccf938f9eb89d3da16a4" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Mulund</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> LBS Marg, Near Mulund Station, Mulund West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 68.56767861 kWh<br>     <b>Charging Duration:</b> 4.16 mins<br>     <b>Charging Rate:</b> 16.475471 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_a8156cf9921e55f669c5c7be2876ac90.setContent(
  html_e375d36e6bdeccf938f9eb89d3da16a4
);

marker_847d54eb1cba85f71eb4d228a5354f26.bindPopup(
  popup_a8156cf9921e55f669c5c7be2876ac90
);

marker_847d54eb1cba85f71eb4d228a5354f26.bindTooltip(
  `<div>
                     ChargeZone - Mulund
                 </div>`,
  {
    sticky: true,
  }
);

marker_847d54eb1cba85f71eb4d228a5354f26.setIcon(
  icon_d8d620388563b54debc9e1c35159d4bd
);

var marker_f5710965f6f0b28c7f220c3db6faf2e2 = L.marker(
  [19.1547, 72.9346],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_732b129679918a75f9894cc6f2684972 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e32bd3d0a1faa2e3f140685e4dac1206 = L.popup({
  maxWidth: 350,
});

var html_4a11e0f958ccbdb18bf29e88ccb967a5 = $(
  `<div id="html_4a11e0f958ccbdb18bf29e88ccb967a5" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bhandup</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> LBS Marg, Near Bhandup Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 59.76831247 kWh<br>     <b>Charging Duration:</b> 1.7 mins<br>     <b>Charging Rate:</b> 35.05498942 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e32bd3d0a1faa2e3f140685e4dac1206.setContent(
  html_4a11e0f958ccbdb18bf29e88ccb967a5
);

marker_f5710965f6f0b28c7f220c3db6faf2e2.bindPopup(
  popup_e32bd3d0a1faa2e3f140685e4dac1206
);

marker_f5710965f6f0b28c7f220c3db6faf2e2.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bhandup
                 </div>`,
  {
    sticky: true,
  }
);

marker_f5710965f6f0b28c7f220c3db6faf2e2.setIcon(
  icon_732b129679918a75f9894cc6f2684972
);

var marker_ad959182d3f03cf734560230c4b65290 = L.marker(
  [19.0751, 72.8893],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9492a07f5302b9e5f1f70bc4ba69bb16 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_dd26dc1022b1a6003519c42ffd7bd2a2 = L.popup({
  maxWidth: 350,
});

var html_c60ef0a0d87229317b93ac23e25812b6 = $(
  `<div id="html_c60ef0a0d87229317b93ac23e25812b6" style="width: 100.0%; height: 100.0%;">     <h4>Phoenix Market City Charging Station</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Entrance Gate 3, Phoenix Market City, Lal Bahadur Shastri Rd, Kurla West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 36.70152016 kWh<br>     <b>Charging Duration:</b> 1.92 mins<br>     <b>Charging Rate:</b> 19.12193264 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_dd26dc1022b1a6003519c42ffd7bd2a2.setContent(
  html_c60ef0a0d87229317b93ac23e25812b6
);

marker_ad959182d3f03cf734560230c4b65290.bindPopup(
  popup_dd26dc1022b1a6003519c42ffd7bd2a2
);

marker_ad959182d3f03cf734560230c4b65290.bindTooltip(
  `<div>
                     Phoenix Market City Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_ad959182d3f03cf734560230c4b65290.setIcon(
  icon_9492a07f5302b9e5f1f70bc4ba69bb16
);

var marker_afdfe59e9b90d352b73309ed0b103904 = L.marker(
  [19.037, 72.9235],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0844135bd0d4451edc5c88ec66f3d481 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f32540ad2b1c97e75b4980ef6135bd30 = L.popup({
  maxWidth: 350,
});

var html_5f2008051eb99c17d3cd8c268e383232 = $(
  `<div id="html_5f2008051eb99c17d3cd8c268e383232" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Trombay</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Anushakti Nagar, Trombay, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 15.72955117 kWh<br>     <b>Charging Duration:</b> 0.41 mins<br>     <b>Charging Rate:</b> 38.31515901 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_f32540ad2b1c97e75b4980ef6135bd30.setContent(
  html_5f2008051eb99c17d3cd8c268e383232
);

marker_afdfe59e9b90d352b73309ed0b103904.bindPopup(
  popup_f32540ad2b1c97e75b4980ef6135bd30
);

marker_afdfe59e9b90d352b73309ed0b103904.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Trombay
                 </div>`,
  {
    sticky: true,
  }
);

marker_afdfe59e9b90d352b73309ed0b103904.setIcon(
  icon_0844135bd0d4451edc5c88ec66f3d481
);

var marker_322805308cfc160adfae34d86ff06bed = L.marker(
  [19.0378, 73.1318],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2e0d7272ac9d95a73cb650bc4061bf5d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a513b4f64c0389c29695407b9bb890f1 = L.popup({
  maxWidth: 350,
});

var html_d68c44f9325b880447facab05719051c = $(
  `<div id="html_d68c44f9325b880447facab05719051c" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Taloja</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Taloja MIDC, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 34.07799973 kWh<br>     <b>Charging Duration:</b> 2.71 mins<br>     <b>Charging Rate:</b> 12.59762021 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_a513b4f64c0389c29695407b9bb890f1.setContent(
  html_d68c44f9325b880447facab05719051c
);

marker_322805308cfc160adfae34d86ff06bed.bindPopup(
  popup_a513b4f64c0389c29695407b9bb890f1
);

marker_322805308cfc160adfae34d86ff06bed.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Taloja
                 </div>`,
  {
    sticky: true,
  }
);

marker_322805308cfc160adfae34d86ff06bed.setIcon(
  icon_2e0d7272ac9d95a73cb650bc4061bf5d
);

var marker_ef64974c498c5b61900ba390e00c7435 = L.marker(
  [19.3134, 72.8476],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_74a5ec23d82e528723afafb7721a5e01 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4bdab7b0116c5065843916e907d9db2f = L.popup({
  maxWidth: 350,
});

var html_71b70ac598752bb67b40a01a8ea89c9c = $(
  `<div id="html_71b70ac598752bb67b40a01a8ea89c9c" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bhayandar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Bhayandar West Station Parking, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 23.19329022 kWh<br>     <b>Charging Duration:</b> 0.73 mins<br>     <b>Charging Rate:</b> 31.98319246 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_4bdab7b0116c5065843916e907d9db2f.setContent(
  html_71b70ac598752bb67b40a01a8ea89c9c
);

marker_ef64974c498c5b61900ba390e00c7435.bindPopup(
  popup_4bdab7b0116c5065843916e907d9db2f
);

marker_ef64974c498c5b61900ba390e00c7435.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bhayandar
                 </div>`,
  {
    sticky: true,
  }
);

marker_ef64974c498c5b61900ba390e00c7435.setIcon(
  icon_74a5ec23d82e528723afafb7721a5e01
);

var marker_6c4635ab7bb9c6c2ecb1009d5b8b88eb = L.marker(
  [19.2505, 72.8591],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dde48738f793b39b273db10c0648850c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1bfd5a0df8fdfb9b696c32f61f6908ed = L.popup({
  maxWidth: 350,
});

var html_bdb30b0f4ac6ba4082edf25fed63df2a = $(
  `<div id="html_bdb30b0f4ac6ba4082edf25fed63df2a" style="width: 100.0%; height: 100.0%;">     <h4>ChargeZone - Dahisar</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Dahisar East Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 9.206012695 kWh<br>     <b>Charging Duration:</b> 0.19 mins<br>     <b>Charging Rate:</b> 47.65616728 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_1bfd5a0df8fdfb9b696c32f61f6908ed.setContent(
  html_bdb30b0f4ac6ba4082edf25fed63df2a
);

marker_6c4635ab7bb9c6c2ecb1009d5b8b88eb.bindPopup(
  popup_1bfd5a0df8fdfb9b696c32f61f6908ed
);

marker_6c4635ab7bb9c6c2ecb1009d5b8b88eb.bindTooltip(
  `<div>
                     ChargeZone - Dahisar
                 </div>`,
  {
    sticky: true,
  }
);

marker_6c4635ab7bb9c6c2ecb1009d5b8b88eb.setIcon(
  icon_dde48738f793b39b273db10c0648850c
);

var marker_e50782a11037556d1ba0df5508acc401 = L.marker(
  [19.14207, 72.83241],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b9af7093a2c8190d782189de1abbd05e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1a9ce0b92948a184134eb44c0b3667c1 = L.popup({
  maxWidth: 350,
});

var html_6fd1f5c5f5a7bc8f6689fce436e206b6 = $(
  `<div id="html_6fd1f5c5f5a7bc8f6689fce436e206b6" style="width: 100.0%; height: 100.0%;">     <h4>Inderjit Cars, Andheri West</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> 1059/1060, Adarsh nagar, near infinity mall, Off New Link Road, Andheri West, Mumbai, Maharashtra 400053<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 56.1150925 kWh<br>     <b>Charging Duration:</b> 10.22 mins<br>     <b>Charging Rate:</b> 5.488039505 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_1a9ce0b92948a184134eb44c0b3667c1.setContent(
  html_6fd1f5c5f5a7bc8f6689fce436e206b6
);

marker_e50782a11037556d1ba0df5508acc401.bindPopup(
  popup_1a9ce0b92948a184134eb44c0b3667c1
);

marker_e50782a11037556d1ba0df5508acc401.bindTooltip(
  `<div>
                     Inderjit Cars, Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_e50782a11037556d1ba0df5508acc401.setIcon(
  icon_b9af7093a2c8190d782189de1abbd05e
);

var marker_851e645923704a233b954ecfed18810d = L.marker(
  [19.106, 72.9286],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_792276a5fd7a7723edb4df94fdfde0ec = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_88c470d58a7fa6d65d69296d95c79666 = L.popup({
  maxWidth: 350,
});

var html_44abb0716f56f6a2ae68497237f3bdfc = $(
  `<div id="html_44abb0716f56f6a2ae68497237f3bdfc" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Vikhroli</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Near Vikhroli Station East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 15.89873423 kWh<br>     <b>Charging Duration:</b> 0.39 mins<br>     <b>Charging Rate:</b> 40.44452193 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_88c470d58a7fa6d65d69296d95c79666.setContent(
  html_44abb0716f56f6a2ae68497237f3bdfc
);

marker_851e645923704a233b954ecfed18810d.bindPopup(
  popup_88c470d58a7fa6d65d69296d95c79666
);

marker_851e645923704a233b954ecfed18810d.bindTooltip(
  `<div>
                     Tata Power - Vikhroli
                 </div>`,
  {
    sticky: true,
  }
);

marker_851e645923704a233b954ecfed18810d.setIcon(
  icon_792276a5fd7a7723edb4df94fdfde0ec
);

var marker_2dc6eb650f6c65a0f7ab2b834fd960c7 = L.marker(
  [19.0618, 72.833],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9bef78d9d88b4a3001e0d441a1e1ed54 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d521892d6a23e2a122cff4ec164b2813 = L.popup({
  maxWidth: 350,
});

var html_0aaf63c5d7a40413bee1c971061e161a = $(
  `<div id="html_0aaf63c5d7a40413bee1c971061e161a" style="width: 100.0%; height: 100.0%;">     <h4>Ather Grid - Bandra West</h4>     <b>Operator:</b> Ather<br>     <b>Location:</b> Linking Road, Opp National College, Bandra West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 41.15701391 kWh<br>     <b>Charging Duration:</b> 0.89 mins<br>     <b>Charging Rate:</b> 46.12968887 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d521892d6a23e2a122cff4ec164b2813.setContent(
  html_0aaf63c5d7a40413bee1c971061e161a
);

marker_2dc6eb650f6c65a0f7ab2b834fd960c7.bindPopup(
  popup_d521892d6a23e2a122cff4ec164b2813
);

marker_2dc6eb650f6c65a0f7ab2b834fd960c7.bindTooltip(
  `<div>
                     Ather Grid - Bandra West
                 </div>`,
  {
    sticky: true,
  }
);

marker_2dc6eb650f6c65a0f7ab2b834fd960c7.setIcon(
  icon_9bef78d9d88b4a3001e0d441a1e1ed54
);

var marker_7af7ed426d3ac1c0c4b6f19c50df271a = L.marker(
  [19.1851, 72.8388],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_8483982525142dfe678df5d05efd9f55 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_63a7445b393f5dbf4147bda8fa4054c9 = L.popup({
  maxWidth: 350,
});

var html_bb3db335b112d33012ac424cde3af497 = $(
  `<div id="html_bb3db335b112d33012ac424cde3af497" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Malad</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Malad West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 90.23550358 kWh<br>     <b>Charging Duration:</b> 18.64 mins<br>     <b>Charging Rate:</b> 4.841450613 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_63a7445b393f5dbf4147bda8fa4054c9.setContent(
  html_bb3db335b112d33012ac424cde3af497
);

marker_7af7ed426d3ac1c0c4b6f19c50df271a.bindPopup(
  popup_63a7445b393f5dbf4147bda8fa4054c9
);

marker_7af7ed426d3ac1c0c4b6f19c50df271a.bindTooltip(
  `<div>
                     EVteQ - Malad
                 </div>`,
  {
    sticky: true,
  }
);

marker_7af7ed426d3ac1c0c4b6f19c50df271a.setIcon(
  icon_8483982525142dfe678df5d05efd9f55
);

var marker_d7a42a0eb205d931d686e806f0d1421b = L.marker(
  [19.102, 72.8872],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_0acd39013ff6a49231981f21f39b801d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6d209b043680f7ab9c67bfd1a785219b = L.popup({
  maxWidth: 350,
});

var html_469c0358e734acbf35204986c8c4e130 = $(
  `<div id="html_469c0358e734acbf35204986c8c4e130" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Sakinaka</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Sakinaka Junction, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 18.10247227 kWh<br>     <b>Charging Duration:</b> 0.44 mins<br>     <b>Charging Rate:</b> 41.55273261 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_6d209b043680f7ab9c67bfd1a785219b.setContent(
  html_469c0358e734acbf35204986c8c4e130
);

marker_d7a42a0eb205d931d686e806f0d1421b.bindPopup(
  popup_6d209b043680f7ab9c67bfd1a785219b
);

marker_d7a42a0eb205d931d686e806f0d1421b.bindTooltip(
  `<div>
                     EVteQ - Sakinaka
                 </div>`,
  {
    sticky: true,
  }
);

marker_d7a42a0eb205d931d686e806f0d1421b.setIcon(
  icon_0acd39013ff6a49231981f21f39b801d
);

var marker_7324c1562507565efddf404c9dd64293 = L.marker(
  [19.0313299, 72.8809653],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_17c58e360a34bcd80250ba2f536e0b66 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_aa208cf96cb7066d81f54ee2166c58f5 = L.popup({
  maxWidth: 350,
});

var html_65ee96a9369aeb44dc2a7c836408dab3 = $(
  `<div id="html_65ee96a9369aeb44dc2a7c836408dab3" style="width: 100.0%; height: 100.0%;">     <h4>Carnival Cinemas Imax</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Carnival Cinemas Imax, Anik Wadala Link Rd, Bhakti Park, Wadala, Mumbai, Maharashtra ,Worli<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 79.97267191 kWh<br>     <b>Charging Duration:</b> 2.13 mins<br>     <b>Charging Rate:</b> 37.46218915 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_aa208cf96cb7066d81f54ee2166c58f5.setContent(
  html_65ee96a9369aeb44dc2a7c836408dab3
);

marker_7324c1562507565efddf404c9dd64293.bindPopup(
  popup_aa208cf96cb7066d81f54ee2166c58f5
);

marker_7324c1562507565efddf404c9dd64293.bindTooltip(
  `<div>
                     Carnival Cinemas Imax
                 </div>`,
  {
    sticky: true,
  }
);

marker_7324c1562507565efddf404c9dd64293.setIcon(
  icon_17c58e360a34bcd80250ba2f536e0b66
);

var marker_fc55c340aa49eae4f610aa5725b000b2 = L.marker(
  [19.14207, 72.83241],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c8b412317a790a0be08ac43a5eded98e = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_018cf41b1ceed77d406255374c7db78c = L.popup({
  maxWidth: 350,
});

var html_89fff04d7c5e5ac136a5fef4647021d3 = $(
  `<div id="html_89fff04d7c5e5ac136a5fef4647021d3" style="width: 100.0%; height: 100.0%;">     <h4>Inderjit Cars, Andheri West</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> 1059/1060, Adarsh nagar, near infinity mall, Off New Link Road, Andheri West, Mumbai, Maharashtra 400053<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 5.163807088 kWh<br>     <b>Charging Duration:</b> 0.98 mins<br>     <b>Charging Rate:</b> 5.265203285 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_018cf41b1ceed77d406255374c7db78c.setContent(
  html_89fff04d7c5e5ac136a5fef4647021d3
);

marker_fc55c340aa49eae4f610aa5725b000b2.bindPopup(
  popup_018cf41b1ceed77d406255374c7db78c
);

marker_fc55c340aa49eae4f610aa5725b000b2.bindTooltip(
  `<div>
                     Inderjit Cars, Andheri West
                 </div>`,
  {
    sticky: true,
  }
);

marker_fc55c340aa49eae4f610aa5725b000b2.setIcon(
  icon_c8b412317a790a0be08ac43a5eded98e
);

var marker_49094619167f358900110aa426cc5655 = L.marker(
  [19.1798, 72.8361],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_bf331690d96a0c75a43efe2becded958 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6aaf87498d671fc46b3e9e594d5ee292 = L.popup({
  maxWidth: 350,
});

var html_425d53b9c5e5ab4679379eae4462b7b7 = $(
  `<div id="html_425d53b9c5e5ab4679379eae4462b7b7" style="width: 100.0%; height: 100.0%;">     <h4>Evershine Mall Charging Station</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Chincholi Bunder Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 45.45344885 kWh<br>     <b>Charging Duration:</b> 1.61 mins<br>     <b>Charging Rate:</b> 28.19404206 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_6aaf87498d671fc46b3e9e594d5ee292.setContent(
  html_425d53b9c5e5ab4679379eae4462b7b7
);

marker_49094619167f358900110aa426cc5655.bindPopup(
  popup_6aaf87498d671fc46b3e9e594d5ee292
);

marker_49094619167f358900110aa426cc5655.bindTooltip(
  `<div>
                     Evershine Mall Charging Station
                 </div>`,
  {
    sticky: true,
  }
);

marker_49094619167f358900110aa426cc5655.setIcon(
  icon_bf331690d96a0c75a43efe2becded958
);

var marker_015046da9d1242bef92522c841aed1a6 = L.marker(
  [19.2298, 72.8606],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_599d85c63b041fcb0fb3be6a735b19e1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_831d786167f1d2a6bcf3e877fa17a829 = L.popup({
  maxWidth: 350,
});

var html_321a2e1aaf11a85058355de587ff791e = $(
  `<div id="html_321a2e1aaf11a85058355de587ff791e" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Borivali</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Borivali West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 59.16864336 kWh<br>     <b>Charging Duration:</b> 3.89 mins<br>     <b>Charging Rate:</b> 15.22251353 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_831d786167f1d2a6bcf3e877fa17a829.setContent(
  html_321a2e1aaf11a85058355de587ff791e
);

marker_015046da9d1242bef92522c841aed1a6.bindPopup(
  popup_831d786167f1d2a6bcf3e877fa17a829
);

marker_015046da9d1242bef92522c841aed1a6.bindTooltip(
  `<div>
                     ATUM Charge - Borivali
                 </div>`,
  {
    sticky: true,
  }
);

marker_015046da9d1242bef92522c841aed1a6.setIcon(
  icon_599d85c63b041fcb0fb3be6a735b19e1
);

var marker_9aa696f24da7c7600daec185ec48d383 = L.marker(
  [19.058, 72.8675],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dd1fbe58e30ab4be69e57228d8d9b6ab = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_04cd25e3674fcbb467b80d15b4f77fea = L.popup({
  maxWidth: 350,
});

var html_b894e4d061da90bb40f775ed587ae6cc = $(
  `<div id="html_b894e4d061da90bb40f775ed587ae6cc" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Bandra Kurla Complex 2</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Maker Maxity, BKC, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 77.12500791 kWh<br>     <b>Charging Duration:</b> 1.96 mins<br>     <b>Charging Rate:</b> 39.42909617 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_04cd25e3674fcbb467b80d15b4f77fea.setContent(
  html_b894e4d061da90bb40f775ed587ae6cc
);

marker_9aa696f24da7c7600daec185ec48d383.bindPopup(
  popup_04cd25e3674fcbb467b80d15b4f77fea
);

marker_9aa696f24da7c7600daec185ec48d383.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Bandra Kurla Complex 2
                 </div>`,
  {
    sticky: true,
  }
);

marker_9aa696f24da7c7600daec185ec48d383.setIcon(
  icon_dd1fbe58e30ab4be69e57228d8d9b6ab
);

var marker_bae67857ae6522921ccf7d52c5e65a94 = L.marker(
  [19.034402, 72.85284],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_49af5edc4a91ce85e1bc5c960dd8c1c3 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_666fbeb08e1d737e66f63d5e6de25501 = L.popup({
  maxWidth: 350,
});

var html_6baadaf77186ab1699e6d73d76de2ecb = $(
  `<div id="html_6baadaf77186ab1699e6d73d76de2ecb" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power, Dharavi Colony</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Tata Power Dharavi Colony labour camp dharavi ,Matunga ,Mumbai 400019<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 8.28243854 kWh<br>     <b>Charging Duration:</b> 0.75 mins<br>     <b>Charging Rate:</b> 11.01799661 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_666fbeb08e1d737e66f63d5e6de25501.setContent(
  html_6baadaf77186ab1699e6d73d76de2ecb
);

marker_bae67857ae6522921ccf7d52c5e65a94.bindPopup(
  popup_666fbeb08e1d737e66f63d5e6de25501
);

marker_bae67857ae6522921ccf7d52c5e65a94.bindTooltip(
  `<div>
                     Tata Power, Dharavi Colony
                 </div>`,
  {
    sticky: true,
  }
);

marker_bae67857ae6522921ccf7d52c5e65a94.setIcon(
  icon_49af5edc4a91ce85e1bc5c960dd8c1c3
);

var marker_211cdffe2f038526dc8495c14b3579c3 = L.marker(
  [19.06895357, 73.02251015],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c36923aec0dd0bf381839ec57d27a295 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_321c694d48e669c3b6ff493b2ea8447f = L.popup({
  maxWidth: 350,
});

var html_c385dd36f8de68874408121c9b474a48 = $(
  `<div id="html_c385dd36f8de68874408121c9b474a48" style="width: 100.0%; height: 100.0%;">     <h4>Lifeon Industries</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> D298, TTC Industrial area, turbhe<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 27.70606779 kWh<br>     <b>Charging Duration:</b> 0.61 mins<br>     <b>Charging Rate:</b> 45.32674459 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_321c694d48e669c3b6ff493b2ea8447f.setContent(
  html_c385dd36f8de68874408121c9b474a48
);

marker_211cdffe2f038526dc8495c14b3579c3.bindPopup(
  popup_321c694d48e669c3b6ff493b2ea8447f
);

marker_211cdffe2f038526dc8495c14b3579c3.bindTooltip(
  `<div>
                     Lifeon Industries
                 </div>`,
  {
    sticky: true,
  }
);

marker_211cdffe2f038526dc8495c14b3579c3.setIcon(
  icon_c36923aec0dd0bf381839ec57d27a295
);

var marker_83711a3d725f8552497e8b0f1e7505db = L.marker(
  [19.04520829, 72.84154175],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6b18676c512cb9e9895607b3bb60158f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1db5a63ae1f952085f5af5ea4b8ede2a = L.popup({
  maxWidth: 350,
});

var html_0e4b669ee89513f4b289b83380b46cf3 = $(
  `<div id="html_0e4b669ee89513f4b289b83380b46cf3" style="width: 100.0%; height: 100.0%;">     <h4>Xavier Institute of Engineering</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> Opposite S.L.Raheja Hospital, Mahim Causeway, Mahim (West), Raheja Hospital Marg, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 5.755524649 kWh<br>     <b>Charging Duration:</b> 0.15 mins<br>     <b>Charging Rate:</b> 39.1270254 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_1db5a63ae1f952085f5af5ea4b8ede2a.setContent(
  html_0e4b669ee89513f4b289b83380b46cf3
);

marker_83711a3d725f8552497e8b0f1e7505db.bindPopup(
  popup_1db5a63ae1f952085f5af5ea4b8ede2a
);

marker_83711a3d725f8552497e8b0f1e7505db.bindTooltip(
  `<div>
                     Xavier Institute of Engineering
                 </div>`,
  {
    sticky: true,
  }
);

marker_83711a3d725f8552497e8b0f1e7505db.setIcon(
  icon_6b18676c512cb9e9895607b3bb60158f
);

var marker_25c820a182bc38b2f6d783d7f32ffbd6 = L.marker(
  [19.04527839, 72.84168159],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_731d8882a3b433301f34ed2a3c8c99d7 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0a0b8eb1928b97292b803803e6fdf0d1 = L.popup({
  maxWidth: 350,
});

var html_18dbe892654b1911c574cfc9dff901b9 = $(
  `<div id="html_18dbe892654b1911c574cfc9dff901b9" style="width: 100.0%; height: 100.0%;">     <h4>Xavier Institute of Engineering</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Opposite S.L.Raheja Hospital, Mahim nCauseway, Mahim (West), Raheja Hospital nMarg, Mumbai, Maharashtra 400016<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 5.755524649 kWh<br>     <b>Charging Duration:</b> 0.15 mins<br>     <b>Charging Rate:</b> 39.1270254 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_0a0b8eb1928b97292b803803e6fdf0d1.setContent(
  html_18dbe892654b1911c574cfc9dff901b9
);

marker_25c820a182bc38b2f6d783d7f32ffbd6.bindPopup(
  popup_0a0b8eb1928b97292b803803e6fdf0d1
);

marker_25c820a182bc38b2f6d783d7f32ffbd6.bindTooltip(
  `<div>
                     Xavier Institute of Engineering
                 </div>`,
  {
    sticky: true,
  }
);

marker_25c820a182bc38b2f6d783d7f32ffbd6.setIcon(
  icon_731d8882a3b433301f34ed2a3c8c99d7
);

var marker_810c83a0e89218f1fd085eaa5775c62f = L.marker(
  [19.1736, 72.8352],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_58932351770f8b1c43cc5fccae04c7f1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e7b26de9a776330b4b0c99914bc54d58 = L.popup({
  maxWidth: 350,
});

var html_ed74a7fc81b793eb7aa86c61f551b474 = $(
  `<div id="html_ed74a7fc81b793eb7aa86c61f551b474" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Malad</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Next to Infinity Mall, New Link Rd, Malad West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 9.206012695 kWh<br>     <b>Charging Duration:</b> 0.62 mins<br>     <b>Charging Rate:</b> 14.83291702 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_e7b26de9a776330b4b0c99914bc54d58.setContent(
  html_ed74a7fc81b793eb7aa86c61f551b474
);

marker_810c83a0e89218f1fd085eaa5775c62f.bindPopup(
  popup_e7b26de9a776330b4b0c99914bc54d58
);

marker_810c83a0e89218f1fd085eaa5775c62f.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Malad
                 </div>`,
  {
    sticky: true,
  }
);

marker_810c83a0e89218f1fd085eaa5775c62f.setIcon(
  icon_58932351770f8b1c43cc5fccae04c7f1
);

var marker_a12a9c13caf0d95333b4ca1a656eb64e = L.marker(
  [19.1737611, 72.8600172],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_586b7c38726d438b392c2d8ed0f88bce = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_775bf77b4b91481fa0bc0f6d5d325ca5 = L.popup({
  maxWidth: 350,
});

var html_4f3d98fe8d56467a645e75afea39993f = $(
  `<div id="html_4f3d98fe8d56467a645e75afea39993f" style="width: 100.0%; height: 100.0%;">     <h4>Oberoi Mall, Goregaon</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Western Express Hwy, Yashodham, Goregaon, Mumbai, Maharashtra 400063<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 72.94073166 kWh<br>     <b>Charging Duration:</b> 5.28 mins<br>     <b>Charging Rate:</b> 13.82503559 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_775bf77b4b91481fa0bc0f6d5d325ca5.setContent(
  html_4f3d98fe8d56467a645e75afea39993f
);

marker_a12a9c13caf0d95333b4ca1a656eb64e.bindPopup(
  popup_775bf77b4b91481fa0bc0f6d5d325ca5
);

marker_a12a9c13caf0d95333b4ca1a656eb64e.bindTooltip(
  `<div>
                     Oberoi Mall, Goregaon
                 </div>`,
  {
    sticky: true,
  }
);

marker_a12a9c13caf0d95333b4ca1a656eb64e.setIcon(
  icon_586b7c38726d438b392c2d8ed0f88bce
);

var marker_125fc8ea673f2c1e43c46887b03da722 = L.marker(
  [19.102, 72.8872],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2508adde5b4b186512d435fbeb34e38d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f3f10e54670228ec493b5f3a45d4bbc7 = L.popup({
  maxWidth: 350,
});

var html_ca8f9649c3733dc2c89683f027e96c61 = $(
  `<div id="html_ca8f9649c3733dc2c89683f027e96c61" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Sakinaka</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Sakinaka Junction, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 47.49433927 kWh<br>     <b>Charging Duration:</b> 2.19 mins<br>     <b>Charging Rate:</b> 21.67222574 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_f3f10e54670228ec493b5f3a45d4bbc7.setContent(
  html_ca8f9649c3733dc2c89683f027e96c61
);

marker_125fc8ea673f2c1e43c46887b03da722.bindPopup(
  popup_f3f10e54670228ec493b5f3a45d4bbc7
);

marker_125fc8ea673f2c1e43c46887b03da722.bindTooltip(
  `<div>
                     EVteQ - Sakinaka
                 </div>`,
  {
    sticky: true,
  }
);

marker_125fc8ea673f2c1e43c46887b03da722.setIcon(
  icon_2508adde5b4b186512d435fbeb34e38d
);

var marker_c7636ee3726264963a1dcb0fb910b575 = L.marker(
  [18.9788, 72.8337],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_40b80aab45a101cbd034b4939e9a54b6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4551b9a7e4efae8fec5c650442011a86 = L.popup({
  maxWidth: 350,
});

var html_a96d5af93f1444a6c3154a34179bd019 = $(
  `<div id="html_a96d5af93f1444a6c3154a34179bd019" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Byculla</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Rani Baug Entrance, Byculla East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 86.71809382 kWh<br>     <b>Energy Consumed:</b> 61.63104966 kWh<br>     <b>Charging Duration:</b> 3.02 mins<br>     <b>Charging Rate:</b> 20.39119229 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_4551b9a7e4efae8fec5c650442011a86.setContent(
  html_a96d5af93f1444a6c3154a34179bd019
);

marker_c7636ee3726264963a1dcb0fb910b575.bindPopup(
  popup_4551b9a7e4efae8fec5c650442011a86
);

marker_c7636ee3726264963a1dcb0fb910b575.bindTooltip(
  `<div>
                     Tata Power - Byculla
                 </div>`,
  {
    sticky: true,
  }
);

marker_c7636ee3726264963a1dcb0fb910b575.setIcon(
  icon_40b80aab45a101cbd034b4939e9a54b6
);

var marker_e8d8c781c0a9c74be15f8fd6889de352 = L.marker(
  [19.03639, 73.029907],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7b56193f8f806d63dcdacd56cdae2271 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5645309a10eaec3b5960fc01c31466cb = L.popup({
  maxWidth: 350,
});

var html_9e7842cf0d266bbafa3a6bb6e75b22b7 = $(
  `<div id="html_9e7842cf0d266bbafa3a6bb6e75b22b7" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Fortune Cars, Navi Mumbai, Plot No. D-400, TTC Industrial Area, MIDC, Near Uran Phata Signal, Nerul, Navi Mumbai, Maharashtra - 400706<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 77.63234569 kWh<br>     <b>Charging Duration:</b> 6.94 mins<br>     <b>Charging Rate:</b> 11.17901456 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_5645309a10eaec3b5960fc01c31466cb.setContent(
  html_9e7842cf0d266bbafa3a6bb6e75b22b7
);

marker_e8d8c781c0a9c74be15f8fd6889de352.bindPopup(
  popup_5645309a10eaec3b5960fc01c31466cb
);

marker_e8d8c781c0a9c74be15f8fd6889de352.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_e8d8c781c0a9c74be15f8fd6889de352.setIcon(
  icon_7b56193f8f806d63dcdacd56cdae2271
);

var marker_82678a8f046e1ec7a785ce82410f053a = L.marker(
  [18.92279506, 72.83351898],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_f9428730ef1d5b2673fee7fba8d508a1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3c0ff93f01a70488831b2db7f58c89ea = L.popup({
  maxWidth: 350,
});

var html_a6853e38577b0aded096b29ed7c112a1 = $(
  `<div id="html_a6853e38577b0aded096b29ed7c112a1" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> The Taj Mahal Palace, Colaba, In front of Times Building , Apollo Bandar, Colaba, Mumbai, Maharashtra 400001<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 77.63234569 kWh<br>     <b>Charging Duration:</b> 6.94 mins<br>     <b>Charging Rate:</b> 11.17901456 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3c0ff93f01a70488831b2db7f58c89ea.setContent(
  html_a6853e38577b0aded096b29ed7c112a1
);

marker_82678a8f046e1ec7a785ce82410f053a.bindPopup(
  popup_3c0ff93f01a70488831b2db7f58c89ea
);

marker_82678a8f046e1ec7a785ce82410f053a.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_82678a8f046e1ec7a785ce82410f053a.setIcon(
  icon_f9428730ef1d5b2673fee7fba8d508a1
);

var marker_f6a84909123d1e2053c95b2f34533a12 = L.marker(
  [19.118831, 72.87823],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_dacc9a803b696a5e9c69b856fdca8f2d = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_33a86e75e0454673b566ec90a1c3da16 = L.popup({
  maxWidth: 350,
});

var html_5bbdb95780fc4a3e01b45e0c15e99a56 = $(
  `<div id="html_5bbdb95780fc4a3e01b45e0c15e99a56" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> EV Dock<br>     <b>Location:</b> Seven Hills Hospital, Andheri East, SevenHills Health City, Marol Maroshi Road, Andheri East, Mumbai, Maharashtra 400059<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 77.63234569 kWh<br>     <b>Charging Duration:</b> 6.94 mins<br>     <b>Charging Rate:</b> 11.17901456 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_33a86e75e0454673b566ec90a1c3da16.setContent(
  html_5bbdb95780fc4a3e01b45e0c15e99a56
);

marker_f6a84909123d1e2053c95b2f34533a12.bindPopup(
  popup_33a86e75e0454673b566ec90a1c3da16
);

marker_f6a84909123d1e2053c95b2f34533a12.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_f6a84909123d1e2053c95b2f34533a12.setIcon(
  icon_dacc9a803b696a5e9c69b856fdca8f2d
);

var marker_cdef82e823569f1827e73a20228b5c35 = L.marker(
  [19.094122, 72.85223],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_1a48c9018613370534260681a5dff850 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_62418c9cfdbe30042053a9a2b34e4dc8 = L.popup({
  maxWidth: 350,
});

var html_7232743246c5d053909607257fbd494e = $(
  `<div id="html_7232743246c5d053909607257fbd494e" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> IOCL Sahara Hospitality, Vile Parle, opp. Domestic Airport, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400099<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 77.63234569 kWh<br>     <b>Charging Duration:</b> 6.94 mins<br>     <b>Charging Rate:</b> 11.17901456 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_62418c9cfdbe30042053a9a2b34e4dc8.setContent(
  html_7232743246c5d053909607257fbd494e
);

marker_cdef82e823569f1827e73a20228b5c35.bindPopup(
  popup_62418c9cfdbe30042053a9a2b34e4dc8
);

marker_cdef82e823569f1827e73a20228b5c35.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_cdef82e823569f1827e73a20228b5c35.setIcon(
  icon_1a48c9018613370534260681a5dff850
);

var marker_7f384cfaed4824fa45e6a380f42c3b21 = L.marker(
  [19.068262, 72.890964],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_829fc998494f9e0828df166dab4d2c61 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9d4d050140b3a560b646a01a64f88c93 = L.popup({
  maxWidth: 350,
});

var html_1568370186968d9daeb4128e972a4633 = $(
  `<div id="html_1568370186968d9daeb4128e972a4633" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> CR - Lokmanya Tilak Station, Kurla, Outside Platform 1, Beside LTT Pay and Park, LTT Station, Pipeline Rd, Tilak Nagar, Kurla, Mumbai, Maharashtra 400089<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 77.63234569 kWh<br>     <b>Charging Duration:</b> 6.94 mins<br>     <b>Charging Rate:</b> 11.17901456 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_9d4d050140b3a560b646a01a64f88c93.setContent(
  html_1568370186968d9daeb4128e972a4633
);

marker_7f384cfaed4824fa45e6a380f42c3b21.bindPopup(
  popup_9d4d050140b3a560b646a01a64f88c93
);

marker_7f384cfaed4824fa45e6a380f42c3b21.bindTooltip(
  `<div>
                     Tata Power
                 </div>`,
  {
    sticky: true,
  }
);

marker_7f384cfaed4824fa45e6a380f42c3b21.setIcon(
  icon_829fc998494f9e0828df166dab4d2c61
);

var marker_a57beb02936e168d864182a12614c4a8 = L.marker(
  [18.9907, 73.1195],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_2be044d37231293966fe080024c2d7c6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_f9faba534b918a3de39c93117372864b = L.popup({
  maxWidth: 350,
});

var html_b3a37d396caf3c677b3a1d443caa6b38 = $(
  `<div id="html_b3a37d396caf3c677b3a1d443caa6b38" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - New Panvel</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Panvel Railway Station East, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 54.03223627 kWh<br>     <b>Energy Consumed:</b> 21.27074191 kWh<br>     <b>Charging Duration:</b> 0.53 mins<br>     <b>Charging Rate:</b> 40.17685077 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_f9faba534b918a3de39c93117372864b.setContent(
  html_b3a37d396caf3c677b3a1d443caa6b38
);

marker_a57beb02936e168d864182a12614c4a8.bindPopup(
  popup_f9faba534b918a3de39c93117372864b
);

marker_a57beb02936e168d864182a12614c4a8.bindTooltip(
  `<div>
                     Tata Power - New Panvel
                 </div>`,
  {
    sticky: true,
  }
);

marker_a57beb02936e168d864182a12614c4a8.setIcon(
  icon_2be044d37231293966fe080024c2d7c6
);

var marker_10c51a778dc90d36e4594a08b587a476 = L.marker(
  [19.1146146, 72.8840941],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b5875619f0707a6189bbb714b4c6d48a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0bb790a8f7869557424d45f7224ac941 = L.popup({
  maxWidth: 350,
});

var html_0dfd70443a4f345435a924e035ac41d9 = $(
  `<div id="html_0dfd70443a4f345435a924e035ac41d9" style="width: 100.0%; height: 100.0%;">     <h4>Vasant oasis</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Borosil Plot,off, Makwana Rd, Marol, Andheri East, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 12.89314236 kWh<br>     <b>Charging Duration:</b> 0.74 mins<br>     <b>Charging Rate:</b> 17.34136646 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_0bb790a8f7869557424d45f7224ac941.setContent(
  html_0dfd70443a4f345435a924e035ac41d9
);

marker_10c51a778dc90d36e4594a08b587a476.bindPopup(
  popup_0bb790a8f7869557424d45f7224ac941
);

marker_10c51a778dc90d36e4594a08b587a476.bindTooltip(
  `<div>
                     Vasant oasis
                 </div>`,
  {
    sticky: true,
  }
);

marker_10c51a778dc90d36e4594a08b587a476.setIcon(
  icon_b5875619f0707a6189bbb714b4c6d48a
);

var marker_fa05a2da55345ea607e18f205ca91d11 = L.marker(
  [19.0012, 72.8281],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e46244e49e1e307c55c4cf220624d19c = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d996f66e292b09405ce7a6a8a165b41e = L.popup({
  maxWidth: 350,
});

var html_caa832f79aaf2aee1b9772db7f00f1c6 = $(
  `<div id="html_caa832f79aaf2aee1b9772db7f00f1c6" style="width: 100.0%; height: 100.0%;">     <h4>Fortum - Lower Parel</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> World Trade Centre One, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 1.19 mins<br>     <b>Charging Rate:</b> 36.60130618 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_d996f66e292b09405ce7a6a8a165b41e.setContent(
  html_caa832f79aaf2aee1b9772db7f00f1c6
);

marker_fa05a2da55345ea607e18f205ca91d11.bindPopup(
  popup_d996f66e292b09405ce7a6a8a165b41e
);

marker_fa05a2da55345ea607e18f205ca91d11.bindTooltip(
  `<div>
                     Fortum - Lower Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_fa05a2da55345ea607e18f205ca91d11.setIcon(
  icon_e46244e49e1e307c55c4cf220624d19c
);

var marker_a3d593c2b340ff6f050c12b79c3ba4c3 = L.marker(
  [19.0815, 72.8367],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_3f32ba0e77426544bd385010476d26fb = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_20a942fe5d594a78d60444094d772ff7 = L.popup({
  maxWidth: 350,
});

var html_2465386083567c80b69b25a7103c0a05 = $(
  `<div id="html_2465386083567c80b69b25a7103c0a05" style="width: 100.0%; height: 100.0%;">     <h4>ATUM Charge - Santacruz</h4>     <b>Operator:</b> ATUM<br>     <b>Location:</b> Santacruz West, Next to Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 43.12603812 kWh<br>     <b>Charging Duration:</b> 7.48 mins<br>     <b>Charging Rate:</b> 5.766635774 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_20a942fe5d594a78d60444094d772ff7.setContent(
  html_2465386083567c80b69b25a7103c0a05
);

marker_a3d593c2b340ff6f050c12b79c3ba4c3.bindPopup(
  popup_20a942fe5d594a78d60444094d772ff7
);

marker_a3d593c2b340ff6f050c12b79c3ba4c3.bindTooltip(
  `<div>
                     ATUM Charge - Santacruz
                 </div>`,
  {
    sticky: true,
  }
);

marker_a3d593c2b340ff6f050c12b79c3ba4c3.setIcon(
  icon_3f32ba0e77426544bd385010476d26fb
);

var marker_0003e03f77e07201f506b224f5d38d3a = L.marker(
  [19.0864, 72.9085],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e358ad5c7f183c77dee8c9540cb1635a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7b5eaf134fb786ba5a8d9793bd50e5df = L.popup({
  maxWidth: 350,
});

var html_402e024d191e0805bff900e0798d5bf6 = $(
  `<div id="html_402e024d191e0805bff900e0798d5bf6" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Ghatkopar</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Near Ghatkopar Metro Station, Ghatkopar West, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 11.32191413 kWh<br>     <b>Charging Duration:</b> 0.28 mins<br>     <b>Charging Rate:</b> 39.95811626 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_7b5eaf134fb786ba5a8d9793bd50e5df.setContent(
  html_402e024d191e0805bff900e0798d5bf6
);

marker_0003e03f77e07201f506b224f5d38d3a.bindPopup(
  popup_7b5eaf134fb786ba5a8d9793bd50e5df
);

marker_0003e03f77e07201f506b224f5d38d3a.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Ghatkopar
                 </div>`,
  {
    sticky: true,
  }
);

marker_0003e03f77e07201f506b224f5d38d3a.setIcon(
  icon_e358ad5c7f183c77dee8c9540cb1635a
);

var marker_e891fbdba3fea07220c1074cab6ef70c = L.marker(
  [19.1112, 72.874],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b20334c42643775f659a24513ca549e5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a25aa2d4682cf73aed8634afd2a0c09d = L.popup({
  maxWidth: 350,
});

var html_5c9280588769a2711d710352a52faee6 = $(
  `<div id="html_5c9280588769a2711d710352a52faee6" style="width: 100.0%; height: 100.0%;">     <h4>Volttic Charging - Marol</h4>     <b>Operator:</b> Volttic<br>     <b>Location:</b> Marol Naka Metro Station, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 26.58671022 kWh<br>     <b>Charging Duration:</b> 1.09 mins<br>     <b>Charging Rate:</b> 24.45076324 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_a25aa2d4682cf73aed8634afd2a0c09d.setContent(
  html_5c9280588769a2711d710352a52faee6
);

marker_e891fbdba3fea07220c1074cab6ef70c.bindPopup(
  popup_a25aa2d4682cf73aed8634afd2a0c09d
);

marker_e891fbdba3fea07220c1074cab6ef70c.bindTooltip(
  `<div>
                     Volttic Charging - Marol
                 </div>`,
  {
    sticky: true,
  }
);

marker_e891fbdba3fea07220c1074cab6ef70c.setIcon(
  icon_b20334c42643775f659a24513ca549e5
);

var marker_2d3dc2bad1a1eefdae69d1a04f01662d = L.marker(
  [19.102, 72.8872],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_260524fd523af7b5a62063f274ff50b1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8f21cd0a8e7fa48de897ce99e759207a = L.popup({
  maxWidth: 350,
});

var html_f3edd35222d0912f9781f9d06f3de6a3 = $(
  `<div id="html_f3edd35222d0912f9781f9d06f3de6a3" style="width: 100.0%; height: 100.0%;">     <h4>EVteQ - Sakinaka</h4>     <b>Operator:</b> EVteQ<br>     <b>Location:</b> Sakinaka Junction, Andheri East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 5.892835164 kWh<br>     <b>Charging Duration:</b> 0.14 mins<br>     <b>Charging Rate:</b> 40.77682699 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_8f21cd0a8e7fa48de897ce99e759207a.setContent(
  html_f3edd35222d0912f9781f9d06f3de6a3
);

marker_2d3dc2bad1a1eefdae69d1a04f01662d.bindPopup(
  popup_8f21cd0a8e7fa48de897ce99e759207a
);

marker_2d3dc2bad1a1eefdae69d1a04f01662d.bindTooltip(
  `<div>
                     EVteQ - Sakinaka
                 </div>`,
  {
    sticky: true,
  }
);

marker_2d3dc2bad1a1eefdae69d1a04f01662d.setIcon(
  icon_260524fd523af7b5a62063f274ff50b1
);

var marker_251d1e93a684fbb0a3c92c436c008d47 = L.marker(
  [19.11637, 72.91086],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_44cfad23b42647189ff2a08c308f2d18 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ee9924b2f6ba0f8d424911ccdf6fa17f = L.popup({
  maxWidth: 350,
});

var html_dc06fc34f2ff041400cee6d61a966eb7 = $(
  `<div id="html_dc06fc34f2ff041400cee6d61a966eb7" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Spectra, High St, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 47.67827375 kWh<br>     <b>Charging Duration:</b> 1.26 mins<br>     <b>Charging Rate:</b> 37.74994618 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ee9924b2f6ba0f8d424911ccdf6fa17f.setContent(
  html_dc06fc34f2ff041400cee6d61a966eb7
);

marker_251d1e93a684fbb0a3c92c436c008d47.bindPopup(
  popup_ee9924b2f6ba0f8d424911ccdf6fa17f
);

marker_251d1e93a684fbb0a3c92c436c008d47.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_251d1e93a684fbb0a3c92c436c008d47.setIcon(
  icon_44cfad23b42647189ff2a08c308f2d18
);

var marker_49e3732f0be0f0b73be9a6fe03e3fd43 = L.marker(
  [19.11644, 72.90968],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_58d37fc0fe601052cfb116646f2b3aa5 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_18b6f58cd0dbe41890a5647892437099 = L.popup({
  maxWidth: 350,
});

var html_0d990c615b7bbd77cbd6656e5be3881f = $(
  `<div id="html_0d990c615b7bbd77cbd6656e5be3881f" style="width: 100.0%; height: 100.0%;">     <h4>Brookfield, Powai</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Pay & Park, Central Ave, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 47.67827375 kWh<br>     <b>Charging Duration:</b> 1.26 mins<br>     <b>Charging Rate:</b> 37.74994618 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_18b6f58cd0dbe41890a5647892437099.setContent(
  html_0d990c615b7bbd77cbd6656e5be3881f
);

marker_49e3732f0be0f0b73be9a6fe03e3fd43.bindPopup(
  popup_18b6f58cd0dbe41890a5647892437099
);

marker_49e3732f0be0f0b73be9a6fe03e3fd43.bindTooltip(
  `<div>
                     Brookfield, Powai
                 </div>`,
  {
    sticky: true,
  }
);

marker_49e3732f0be0f0b73be9a6fe03e3fd43.setIcon(
  icon_58d37fc0fe601052cfb116646f2b3aa5
);

var marker_113b0ed93d756a7d5a0e5ba0f718688c = L.marker(
  [19.0498, 72.9317],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_92755033ab0198ffbf57f98f5b4f9d1a = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b56d553df80f03f743a1878d5246656f = L.popup({
  maxWidth: 350,
});

var html_fe1c5bf4fe6454fe129cfcec00f7a92d = $(
  `<div id="html_fe1c5bf4fe6454fe129cfcec00f7a92d" style="width: 100.0%; height: 100.0%;">     <h4>Tata Power - Mankhurd</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> Mankhurd Railway Station, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 61.11752874 kWh<br>     <b>Charging Duration:</b> 1.64 mins<br>     <b>Charging Rate:</b> 37.24649566 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_b56d553df80f03f743a1878d5246656f.setContent(
  html_fe1c5bf4fe6454fe129cfcec00f7a92d
);

marker_113b0ed93d756a7d5a0e5ba0f718688c.bindPopup(
  popup_b56d553df80f03f743a1878d5246656f
);

marker_113b0ed93d756a7d5a0e5ba0f718688c.bindTooltip(
  `<div>
                     Tata Power - Mankhurd
                 </div>`,
  {
    sticky: true,
  }
);

marker_113b0ed93d756a7d5a0e5ba0f718688c.setIcon(
  icon_92755033ab0198ffbf57f98f5b4f9d1a
);

var marker_5799607c7f424cdbd6f6d26b1096d958 = L.marker(
  [18.9398, 72.8354],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_10a41f11b2bb66fa6ddf3326aa9995a8 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_93b4717590e801eb5c2687203ad5c2b4 = L.popup({
  maxWidth: 350,
});

var html_00f6c1079b8f43bbd16527c3e3925aaa = $(
  `<div id="html_00f6c1079b8f43bbd16527c3e3925aaa" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - CST</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> Chhatrapati Shivaji Maharaj Terminus Parking, Fort, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 26.44403312 kWh<br>     <b>Charging Duration:</b> 0.98 mins<br>     <b>Charging Rate:</b> 27.1214299 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_93b4717590e801eb5c2687203ad5c2b4.setContent(
  html_00f6c1079b8f43bbd16527c3e3925aaa
);

marker_5799607c7f424cdbd6f6d26b1096d958.bindPopup(
  popup_93b4717590e801eb5c2687203ad5c2b4
);

marker_5799607c7f424cdbd6f6d26b1096d958.bindTooltip(
  `<div>
                     Magenta ChargeGrid - CST
                 </div>`,
  {
    sticky: true,
  }
);

marker_5799607c7f424cdbd6f6d26b1096d958.setIcon(
  icon_10a41f11b2bb66fa6ddf3326aa9995a8
);

var marker_5bda45c9d97070f9c89caaabde83eda8 = L.marker(
  [19.2402364, 72.8481819],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_e9c35dfcea1c7e5a8d2850bbc5516904 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ea4b44d91519e3d200725fc6116a3ed9 = L.popup({
  maxWidth: 350,
});

var html_655f7d70adc842c2042bf5ca260182ee = $(
  `<div id="html_655f7d70adc842c2042bf5ca260182ee" style="width: 100.0%; height: 100.0%;">     <h4>MCGM Parking || Club Aquaria</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Devidas Lane, Shanti Ashram Borivali West, Near St.Lawrence High School, Mumbai, Maharashtra ,Borivali<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 42.0179595 kWh<br>     <b>Charging Duration:</b> 3.16 mins<br>     <b>Charging Rate:</b> 13.30298668 kW<br>     <b>Busiest Hours:</b> Afternoon<br>     <b>Busiest Day of Week:</b> Wednesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_ea4b44d91519e3d200725fc6116a3ed9.setContent(
  html_655f7d70adc842c2042bf5ca260182ee
);

marker_5bda45c9d97070f9c89caaabde83eda8.bindPopup(
  popup_ea4b44d91519e3d200725fc6116a3ed9
);

marker_5bda45c9d97070f9c89caaabde83eda8.bindTooltip(
  `<div>
                     MCGM Parking || Club Aquaria
                 </div>`,
  {
    sticky: true,
  }
);

marker_5bda45c9d97070f9c89caaabde83eda8.setIcon(
  icon_e9c35dfcea1c7e5a8d2850bbc5516904
);

var marker_923d1258a7439812ccf573814d331a05 = L.marker(
  [19.3919, 72.833],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9062fea39f4208653567cfd28a97c437 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_94575e14d66768e26e017f492237de06 = L.popup({
  maxWidth: 350,
});

var html_2ef38232be87896f6079562151347475 = $(
  `<div id="html_2ef38232be87896f6079562151347475" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Vasai</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Vasai West, Palghar<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     . <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 28.80292498 kWh<br>     <b>Charging Duration:</b> 0.63 mins<br>     <b>Charging Rate:</b> 45.51884431 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_94575e14d66768e26e017f492237de06.setContent(
  html_2ef38232be87896f6079562151347475
);

marker_923d1258a7439812ccf573814d331a05.bindPopup(
  popup_94575e14d66768e26e017f492237de06
);

marker_923d1258a7439812ccf573814d331a05.bindTooltip(
  `<div>
                     Kazam - Vasai
                 </div>`,
  {
    sticky: true,
  }
);

marker_923d1258a7439812ccf573814d331a05.setIcon(
  icon_9062fea39f4208653567cfd28a97c437
);

var marker_ae5869b27f48e19a426dc5b5b20ed0d1 = L.marker(
  [19.0543, 73.1153],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_88d44c4c0cebddb47654d25b502cdef2 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_acba9f84c32e8a81ef251d0a8d4d2bb2 = L.popup({
  maxWidth: 350,
});

var html_21d131355216731c68bdeefd2c3e75de = $(
  `<div id="html_21d131355216731c68bdeefd2c3e75de" style="width: 100.0%; height: 100.0%;">     <h4>VoltaPoint - Kalamboli Highway</h4>     <b>Operator:</b> VoltaPoint<br>     <b>Location:</b> Kalamboli Steel Market Junction, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 100.0 kWh<br>     <b>Energy Consumed:</b> 85.03985431 kWh<br>     <b>Charging Duration:</b> 3.18 mins<br>     <b>Charging Rate:</b> 26.7265968 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_acba9f84c32e8a81ef251d0a8d4d2bb2.setContent(
  html_21d131355216731c68bdeefd2c3e75de
);

marker_ae5869b27f48e19a426dc5b5b20ed0d1.bindPopup(
  popup_acba9f84c32e8a81ef251d0a8d4d2bb2
);

marker_ae5869b27f48e19a426dc5b5b20ed0d1.bindTooltip(
  `<div>
                     VoltaPoint - Kalamboli Highway
                 </div>`,
  {
    sticky: true,
  }
);

marker_ae5869b27f48e19a426dc5b5b20ed0d1.setIcon(
  icon_88d44c4c0cebddb47654d25b502cdef2
);

var marker_1f5b5a309f90fcc70506d768a8fab409 = L.marker(
  [19.0737, 72.857],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_4dc86a5355783e557ca6c91185527ea1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_83b1b519f9ab5c94d8541587af98f042 = L.popup({
  maxWidth: 350,
});

var html_e7b1aa2b47bff2e53f7d9a922e20ea95 = $(
  `<div id="html_e7b1aa2b47bff2e53f7d9a922e20ea95" style="width: 100.0%; height: 100.0%;">     <h4>Moiz Apartments</h4>     <b>Operator:</b> Tata Power<br>     <b>Location:</b> 12th Road, Above Upadhyaya Nursing Home, Santacruz East, Mumbai, Maharashtra<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 47.76784734 kWh<br>     <b>Charging Duration:</b> 1.45 mins<br>     <b>Charging Rate:</b> 32.99434153 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Thursday<br>     <b>Payment Type:</b> App, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_83b1b519f9ab5c94d8541587af98f042.setContent(
  html_e7b1aa2b47bff2e53f7d9a922e20ea95
);

marker_1f5b5a309f90fcc70506d768a8fab409.bindPopup(
  popup_83b1b519f9ab5c94d8541587af98f042
);

marker_1f5b5a309f90fcc70506d768a8fab409.bindTooltip(
  `<div>
                     Moiz Apartments
                 </div>`,
  {
    sticky: true,
  }
);

marker_1f5b5a309f90fcc70506d768a8fab409.setIcon(
  icon_4dc86a5355783e557ca6c91185527ea1
);

var marker_981d25137c34d928d52f367509cc84de = L.marker(
  [19.0029, 72.824],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_c7f8d24cca5949f5b7793ea7fb8f84b6 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d1ea99e95b029501b926fe33794896b2 = L.popup({
  maxWidth: 350,
});

var html_cbe406046a9fc3f2befb03e581ed82e7 = $(
  `<div id="html_cbe406046a9fc3f2befb03e581ed82e7" style="width: 100.0%; height: 100.0%;">     <h4>Statiq - Parel</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> Phoenix Mills Compound, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 57.45442117 kWh<br>     <b>Charging Duration:</b> 1.61 mins<br>     <b>Charging Rate:</b> 35.73022937 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_d1ea99e95b029501b926fe33794896b2.setContent(
  html_cbe406046a9fc3f2befb03e581ed82e7
);

marker_981d25137c34d928d52f367509cc84de.bindPopup(
  popup_d1ea99e95b029501b926fe33794896b2
);

marker_981d25137c34d928d52f367509cc84de.bindTooltip(
  `<div>
                     Statiq - Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_981d25137c34d928d52f367509cc84de.setIcon(
  icon_c7f8d24cca5949f5b7793ea7fb8f84b6
);

var marker_ddeade6b08c5064bc1e64c1a1090fd1c = L.marker(
  [19.0337, 73.0204],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_d321260ad902701be591e4e452aec00f = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c843d816c3e6ed1cc2b55e71fbfde485 = L.popup({
  maxWidth: 350,
});

var html_187d5e833fe015c9c9e196789964dfc3 = $(
  `<div id="html_187d5e833fe015c9c9e196789964dfc3" style="width: 100.0%; height: 100.0%;">     <h4>EV Point - Navi Mumbai</h4>     <b>Operator:</b> EV Point<br>     <b>Location:</b> Plot 1, Sector 21, Nerul, Navi Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> DC Fast Charger<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 49.53480946 kWh<br>     <b>Charging Duration:</b> 1.18 mins<br>     <b>Charging Rate:</b> 42.13698966 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Sunday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_c843d816c3e6ed1cc2b55e71fbfde485.setContent(
  html_187d5e833fe015c9c9e196789964dfc3
);

marker_ddeade6b08c5064bc1e64c1a1090fd1c.bindPopup(
  popup_c843d816c3e6ed1cc2b55e71fbfde485
);

marker_ddeade6b08c5064bc1e64c1a1090fd1c.bindTooltip(
  `<div>
                     EV Point - Navi Mumbai
                 </div>`,
  {
    sticky: true,
  }
);

marker_ddeade6b08c5064bc1e64c1a1090fd1c.setIcon(
  icon_d321260ad902701be591e4e452aec00f
);

var marker_e94e17fb4a78548f21b2f9818f15278e = L.marker(
  [19.0012, 72.8281],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_9a0621553a888649174e60030178507b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e85554d1f213a90d20d633e47cbe19ab = L.popup({
  maxWidth: 350,
});

var html_dbb28d1750ceddccd1a77dc45f02d979 = $(
  `<div id="html_dbb28d1750ceddccd1a77dc45f02d979" style="width: 100.0%; height: 100.0%;">     <h4>Fortum - Lower Parel</h4>     <b>Operator:</b> Fortum<br>     <b>Location:</b> World Trade Centre One, Lower Parel, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     . <br>     <b>Battery Capacity:</b> 62.0 kWh<br>     <b>Energy Consumed:</b> 8.315805795 kWh<br>     <b>Charging Duration:</b> 0.71 mins<br>     <b>Charging Rate:</b> 11.73724408 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, RFID<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_e85554d1f213a90d20d633e47cbe19ab.setContent(
  html_dbb28d1750ceddccd1a77dc45f02d979
);

marker_e94e17fb4a78548f21b2f9818f15278e.bindPopup(
  popup_e85554d1f213a90d20d633e47cbe19ab
);

marker_e94e17fb4a78548f21b2f9818f15278e.bindTooltip(
  `<div>
                     Fortum - Lower Parel
                 </div>`,
  {
    sticky: true,
  }
);

marker_e94e17fb4a78548f21b2f9818f15278e.setIcon(
  icon_9a0621553a888649174e60030178507b
);

var marker_ec6c41f1fb6f21359e84253f9090457b = L.marker(
  [19.0546, 72.9047],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_7268c04e2d446ceed83e78825d681f6b = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_00e4acc9c196a8928e631575dc459d89 = L.popup({
  maxWidth: 350,
});

var html_8dc86c8d37fdad2f91672820aeecfaf8 = $(
  `<div id="html_8dc86c8d37fdad2f91672820aeecfaf8" style="width: 100.0%; height: 100.0%;">     <h4>Magenta ChargeGrid - Chembur</h4>     <b>Operator:</b> Magenta<br>     <b>Location:</b> RB Mehta Marg, Chembur East, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 10.18500019 kWh<br>     <b>Charging Duration:</b> 0.34 mins<br>     <b>Charging Rate:</b> 29.83066536 kW<br>     <b>Busiest Hours:</b> Evening<br>     <b>Busiest Day of Week:</b> Monday<br>     <b>Payment Type:</b> App, Card<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_00e4acc9c196a8928e631575dc459d89.setContent(
  html_8dc86c8d37fdad2f91672820aeecfaf8
);

marker_ec6c41f1fb6f21359e84253f9090457b.bindPopup(
  popup_00e4acc9c196a8928e631575dc459d89
);

marker_ec6c41f1fb6f21359e84253f9090457b.bindTooltip(
  `<div>
                     Magenta ChargeGrid - Chembur
                 </div>`,
  {
    sticky: true,
  }
);

marker_ec6c41f1fb6f21359e84253f9090457b.setIcon(
  icon_7268c04e2d446ceed83e78825d681f6b
);

var marker_12b5334e4286e8910f9322bb48aba236 = L.marker(
  [18.989356, 72.825234],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_b5e82bd22745c32ae7241421a9fb0183 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d6403abf2cce82116e7eafe3a73d596d = L.popup({
  maxWidth: 350,
});

var html_d5ba9e8a295d30280d148fdb3645bc78 = $(
  `<div id="html_d5ba9e8a295d30280d148fdb3645bc78" style="width: 100.0%; height: 100.0%;">     <h4>Blue Tokai Coffee</h4>     <b>Operator:</b> ChargeZone<br>     <b>Location:</b> Unit 20-22, Laxmi Woollen Mill, Opposite Blue Loft, Dr E Moses Marg, Off, Shakti Mills Ln, Mahalakshmi, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 85.0 kWh<br>     <b>Energy Consumed:</b> 21.7953825 kWh<br>     <b>Charging Duration:</b> 0.58 mins<br>     <b>Charging Rate:</b> 37.7362187 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Saturday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_d6403abf2cce82116e7eafe3a73d596d.setContent(
  html_d5ba9e8a295d30280d148fdb3645bc78
);

marker_12b5334e4286e8910f9322bb48aba236.bindPopup(
  popup_d6403abf2cce82116e7eafe3a73d596d
);

marker_12b5334e4286e8910f9322bb48aba236.bindTooltip(
  `<div>
                     Blue Tokai Coffee
                 </div>`,
  {
    sticky: true,
  }
);

marker_12b5334e4286e8910f9322bb48aba236.setIcon(
  icon_b5e82bd22745c32ae7241421a9fb0183
);

var marker_1a11bd6a89d3554e6fc24efb546295a4 = L.marker(
  [19.051601, 72.838011],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6a1e468c14eb8e2e807547ef735b58a1 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_827b32f4d73742adc384e21d6de7e180 = L.popup({
  maxWidth: 350,
});

var html_16dbdb48755ab619f37579584c5bebc8 = $(
  `<div id="html_16dbdb48755ab619f37579584c5bebc8" style="width: 100.0%; height: 100.0%;">     <h4>IOCL Kini Causway, Bandra</h4>     <b>Operator:</b> Jio-bp Pulse<br>     <b>Location:</b> 36, SV Rd, Santosh Nagar, Bandra West, Mumbai, Maharashtra 400050<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     <br>     <b>Battery Capacity:</b> 81.06203029 kWh<br>     <b>Energy Consumed:</b> 43.4665651 kWh<br>     <b>Charging Duration:</b> 3.22 mins<br>     <b>Charging Rate:</b> 13.48724207 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Friday<br>     <b>Payment Type:</b> App, RFID, UPI<br>     <b>User Type:</b> Long-Distance Traveler     </div>`
)[0];
popup_827b32f4d73742adc384e21d6de7e180.setContent(
  html_16dbdb48755ab619f37579584c5bebc8
);

marker_1a11bd6a89d3554e6fc24efb546295a4.bindPopup(
  popup_827b32f4d73742adc384e21d6de7e180
);

marker_1a11bd6a89d3554e6fc24efb546295a4.bindTooltip(
  `<div>
                     IOCL Kini Causway, Bandra
                 </div>`,
  {
    sticky: true,
  }
);

marker_1a11bd6a89d3554e6fc24efb546295a4.setIcon(
  icon_6a1e468c14eb8e2e807547ef735b58a1
);

var marker_90a08c3b92f43abfd30e2db2746c17ca = L.marker(
  [19.1866, 72.9728],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_6e772433bc2fd6d2c0c1b23f4031e324 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3d25c825bd50ca63e408181862919d8b = L.popup({
  maxWidth: 350,
});

var html_2bc736718e2d25649620eb5476154639 = $(
  `<div id="html_2bc736718e2d25649620eb5476154639" style="width: 100.0%; height: 100.0%;">     <h4>Kazam - Thane</h4>     <b>Operator:</b> Kazam<br>     <b>Location:</b> Eastern Express Hwy, Near Viviana Mall, Thane, Mumbai<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 2<br>     <br>     <b>Battery Capacity:</b> 50.0 kWh<br>     <b>Energy Consumed:</b> 74.27670058 kWh<br>     <b>Charging Duration:</b> 2.96 mins<br>     <b>Charging Rate:</b> 25.07354432 kW<br>     <b>Busiest Hours:</b> Night<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App<br>     <b>User Type:</b> Commuter     </div>`
)[0];
popup_3d25c825bd50ca63e408181862919d8b.setContent(
  html_2bc736718e2d25649620eb5476154639
);

marker_90a08c3b92f43abfd30e2db2746c17ca.bindPopup(
  popup_3d25c825bd50ca63e408181862919d8b
);

marker_90a08c3b92f43abfd30e2db2746c17ca.bindTooltip(
  `<div>
                     Kazam - Thane
                 </div>`,
  {
    sticky: true,
  }
);

marker_90a08c3b92f43abfd30e2db2746c17ca.setIcon(
  icon_6e772433bc2fd6d2c0c1b23f4031e324
);

var marker_a4671f811247864862f59889c8c7c102 = L.marker(
  [19.0925655, 72.9223514],
  {}
).addTo(map_3a4670564931cbf3dcff8c66617088f5);

var icon_a8caaa34ef344754a9622fcd781aa947 = L.AwesomeMarkers.icon({
  markerColor: "green",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b06b8280f20f10236bc430b536869c71 = L.popup({
  maxWidth: 350,
});

var html_7870b09cceaf1ca4aea1a20330492c79 = $(
  `<div id="html_7870b09cceaf1ca4aea1a20330492c79" style="width: 100.0%; height: 100.0%;">     <h4>Godrej One, Vikhroli</h4>     <b>Operator:</b> Statiq<br>     <b>Location:</b> 4 Wheeler Parking area Godrej One Pirojshanagar, Eastern Express Highway, Vikhroli u00e2u0080u0093 East, Mumbai u00e2u0080u0093 400079<br>     <b>City:</b> Mumbai<br>     <b>State:</b> Maharashtra<br>     <b>Charger Type:</b> Level 1<br>     . <br>     <b>Battery Capacity:</b> 75.0 kWh<br>     <b>Energy Consumed:</b> 39.73385255 kWh<br>     <b>Charging Duration:</b> 1.86 mins<br>     <b>Charging Rate:</b> 21.39560578 kW<br>     <b>Busiest Hours:</b> Morning<br>     <b>Busiest Day of Week:</b> Tuesday<br>     <b>Payment Type:</b> App, Card, UPI<br>     <b>User Type:</b> Casual Driver     </div>`
)[0];
popup_b06b8280f20f10236bc430b536869c71.setContent(
  html_7870b09cceaf1ca4aea1a20330492c79
);

marker_a4671f811247864862f59889c8c7c102.bindPopup(
  popup_b06b8280f20f10236bc430b536869c71
);

marker_a4671f811247864862f59889c8c7c102.bindTooltip(
  `<div>
                     Godrej One, Vikhroli
                 </div>`,
  {
    sticky: true,
  }
);

marker_a4671f811247864862f59889c8c7c102.setIcon(
  icon_a8caaa34ef344754a9622fcd781aa947
);
