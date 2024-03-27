"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3370],{89028:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(17624),o=t(4552);const s={sidebar_position:1,description:"How to setup KiCad with the Raspberry Pi Pico"},r="KiCad setup",a={id:"tutorials/kicad",title:"KiCad setup",description:"How to setup KiCad with the Raspberry Pi Pico",source:"@site/docs/tutorials/kicad.md",sourceDirName:"tutorials",slug:"/tutorials/kicad",permalink:"/docs/tutorials/kicad",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/tutorials/kicad.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"How to setup KiCad with the Raspberry Pi Pico"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Embassy-rs Setup",permalink:"/docs/tutorials/embassy"}},c={},d=[{value:"Resources",id:"resources",level:2},{value:"What is KiCad?",id:"what-is-kicad",level:2},{value:"What is a symbol?",id:"what-is-a-symbol",level:3},{value:"What is a footprint?",id:"what-is-a-footprint",level:3},{value:"What is a 3D model?",id:"what-is-a-3d-model",level:3},{value:"Installation",id:"installation",level:2},{value:"How to add custom schematics, footprints and 3D models",id:"how-to-add-custom-schematics-footprints-and-3d-models",level:2},{value:"Getting the Raspberry Pi Pico W KiCad files",id:"getting-the-raspberry-pi-pico-w-kicad-files",level:3},{value:"Import the symbol",id:"import-the-symbol",level:3},{value:"Import the footprint",id:"import-the-footprint",level:3},{value:"Manual link",id:"manual-link",level:4},{value:"Import 3D model",id:"import-3d-model",level:3},{value:"How to create a new project",id:"how-to-create-a-new-project",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"kicad-setup",children:"KiCad setup"}),"\n",(0,n.jsx)(i.p,{children:"In this tutorial you will learn how to setup your computer for KiCad and create electric schematics."}),"\n",(0,n.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.kicad.org/8.0/en/introduction/introduction.html",children:"KiCad Introduction"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.kicad.org/8.0/en/getting_started_in_kicad/getting_started_in_kicad.html",children:"Getting started in KiCad"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"what-is-kicad",children:"What is KiCad?"}),"\n",(0,n.jsx)(i.p,{children:"KiCad is a free and open-source electronics design automation (EDA) suite. It features schematic capture, integrated circuit simulation, printed circuit board (PCB) layout, 3D rendering, and plotting/data export to numerous formats. KiCad also includes a high-quality component library featuring thousands of symbols, footprints, and 3D models. KiCad has minimal system requirements and runs on Linux, Windows, and macOS."}),"\n",(0,n.jsx)(i.h3,{id:"what-is-a-symbol",children:"What is a symbol?"}),"\n",(0,n.jsx)(i.p,{children:"In KiCad, a symbol refers to a graphical representation of an electronic component or device used in a schematic diagram. Symbols are used to represent different types of electronic components such as resistors, capacitors, transistors, integrated circuits, and more. Each symbol typically corresponds to a specific type of electronic component and includes graphical elements that convey information about the component's function and connections."}),"\n",(0,n.jsx)(i.p,{children:"Symbols in KiCad are part of the schematic design phase. When you create a schematic using KiCad, you place symbols on the schematic sheet and connect them to represent the electrical connections between components. These symbols serve as a visual representation of the electronic circuit you are designing."}),"\n",(0,n.jsx)(i.h3,{id:"what-is-a-footprint",children:"What is a footprint?"}),"\n",(0,n.jsx)(i.p,{children:"In KiCad and in the context of electronic design, a footprint refers to the physical layout or pattern on a printed circuit board (PCB) that corresponds to a specific electronic component's pins and package. Each electronic component, such as resistors, capacitors, integrated circuits, etc., has a specific physical shape and arrangement of pins or pads that need to be accurately represented on the PCB."}),"\n",(0,n.jsx)(i.p,{children:"The footprint includes information about the component's pin locations, pad sizes, and other details necessary for correctly placing and soldering the component onto the PCB. Creating or selecting the appropriate footprint is crucial for ensuring that the physical components fit correctly onto the PCB and align with the electrical connections specified in the schematic."}),"\n",(0,n.jsx)(i.p,{children:"Footprints are associated with symbols in the design process. While symbols are used in schematic capture to represent the logical or electrical connections between components, footprints are used in the layout phase to represent the physical layout on the PCB."}),"\n",(0,n.jsx)(i.h3,{id:"what-is-a-3d-model",children:"What is a 3D model?"}),"\n",(0,n.jsx)(i.p,{children:"In KiCad, a 3D model refers to a three-dimensional representation of a component or object used in electronic design, specifically for printed circuit board (PCB) layout and visualization. 3D models in KiCad are associated with the footprints of electronic components. These 3D models provide a realistic view of how the physical component will appear on the PCB, aiding in the design and verification process."}),"\n",(0,n.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(i.p,{children:["You can get KiCad from ",(0,n.jsx)(i.a,{href:"https://www.kicad.org/download/",children:"here"})," for your OS."]}),"\n",(0,n.jsx)(i.h2,{id:"how-to-add-custom-schematics-footprints-and-3d-models",children:"How to add custom schematics, footprints and 3D models"}),"\n",(0,n.jsxs)(i.p,{children:["KiCad comes with a standard library that has a wide variety of components. For most project you will only need to import just a bunch of specific integrated circuits or custom components. We will work with a ",(0,n.jsx)(i.em,{children:"Raspberry Pi Pico W"}),", a development board designed around RP2040 microcontroller(MCU). KiCad's standard library has the RP2040 designs, but for the lab work we need to import the development board symbol, footprint and 3D model, as it is not included in the standard library."]}),"\n",(0,n.jsx)(i.h3,{id:"getting-the-raspberry-pi-pico-w-kicad-files",children:"Getting the Raspberry Pi Pico W KiCad files"}),"\n",(0,n.jsxs)(i.p,{children:["We can get the symbol, footprint and 3D model of the development board from this git ",(0,n.jsx)(i.a,{href:"https://github.com/bdubs-astro/Raspberry_Pi_Pico_W_Kicad_Files.git",children:"repository"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Create a directory where you want to store your downloaded design files and clone the repository there."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"git clone https://github.com/bdubs-astro/Raspberry_Pi_Pico_W_Kicad_Files.git\n"})}),"\n",(0,n.jsx)(i.h3,{id:"import-the-symbol",children:"Import the symbol"}),"\n",(0,n.jsxs)(i.p,{children:["Open the Symbol Libraries manager by clicking ",(0,n.jsx)(i.code,{children:"Preferences"})," -> ",(0,n.jsx)(i.code,{children:"Manage Symbol Libraries..."}),"."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Symbol Libraries",src:t(91756).c+"",width:"1030",height:"697"})})}),"\n",(0,n.jsxs)(i.p,{children:["Click the ",(0,n.jsx)(i.code,{children:"+"})," icon and give your symbol a nickname and the path to the ",(0,n.jsx)(i.code,{children:".kicad_sym"})," file."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Symbol Libraries Import",src:t(23784).c+"",width:"1030",height:"697"})})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Give your symbol an suitable nickname. This nickname will be the keyword you search for when you want to use it in your schematics."})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["You can move your ",(0,n.jsx)(i.code,{children:".kicad_sym"})," file to the predefined symbol directory and use the relative path as shown for the rest of the components. The predefined symbol directory is created on KiCad's installation phase."]})}),"\n",(0,n.jsx)(i.h3,{id:"import-the-footprint",children:"Import the footprint"}),"\n",(0,n.jsxs)(i.p,{children:["Open the Symbol Libraries manager by clicking ",(0,n.jsx)(i.code,{children:"Preferences"})," -> ",(0,n.jsx)(i.code,{children:"Manage Footprint Libraries..."}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Click the ",(0,n.jsx)(i.code,{children:"+"})," icon and give your footprint the same nickname as the symbol and the path to the design files ",(0,n.jsx)(i.strong,{children:"directory"}),"."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Footprint Libraries Import",src:t(93976).c+"",width:"1030",height:"697"})})}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Giving the footprint and symbol the same nickname will automatically link them, in most cases. In some cases, due to the ",(0,n.jsx)(i.code,{children:".kicad_sym"})," configuration, the symbol is linked with a predefined footprint that probably is not in your footprint library. In these cases you have to manually link them."]})}),"\n",(0,n.jsx)(i.h4,{id:"manual-link",children:"Manual link"}),"\n",(0,n.jsxs)(i.p,{children:["In KiCad Project Manager click on ",(0,n.jsx)(i.code,{children:"Symbol editor"})," and search for your symbol."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"New project",src:t(46800).c+"",width:"1025",height:"667"})})}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Symbol editor",src:t(79264).c+"",width:"1300",height:"738"})})}),"\n",(0,n.jsxs)(i.p,{children:["After selecting the symbol, click on ",(0,n.jsx)(i.code,{children:"Symbol properties"})," icon highlighted below."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Symbol properties",src:t(13840).c+"",width:"1300",height:"738"})})}),"\n",(0,n.jsx)(i.p,{children:"In this dialog edit the footprint linked with the symbol with the one you imported."}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Change footprint",src:t(86596).c+"",width:"1136",height:"682"})})}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Change footprint 2",src:t(77028).c+"",width:"1300",height:"738"})})}),"\n",(0,n.jsxs)(i.p,{children:["Double click on the footprint -> ",(0,n.jsx)(i.code,{children:"OK"})," in the ",(0,n.jsx)(i.code,{children:"Symbol properties"})," dialog -> ",(0,n.jsx)(i.code,{children:"Save"})," in ",(0,n.jsx)(i.code,{children:"Symbol editor"})," dialog."]}),"\n",(0,n.jsx)(i.h3,{id:"import-3d-model",children:"Import 3D model"}),"\n",(0,n.jsx)(i.p,{children:"KiCad gives us an extra feature that allows us to have an idea of how our PCB would look like. Some footprints have 3D models predefined but for custom ones we need to import them."}),"\n",(0,n.jsxs)(i.p,{children:["In KiCad Project Manager click on ",(0,n.jsx)(i.code,{children:"Footprint editor"})," and search for your footprint. After selecting the footprint, click on ",(0,n.jsx)(i.code,{children:"Footprint properties"})," icon highlighted below."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Footprint editor",src:t(44412).c+"",width:"1300",height:"738"})})}),"\n",(0,n.jsxs)(i.p,{children:["In ",(0,n.jsx)(i.code,{children:"Footprint properties"})," dialog go to ",(0,n.jsx)(i.code,{children:"3D Model"}),"."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Footprint properties",src:t(31164).c+"",width:"862",height:"778"})})}),"\n",(0,n.jsxs)(i.p,{children:["Delete the old 3D model and add the path to the ",(0,n.jsx)(i.code,{children:".step"})," file downloaded earlier."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3D model offset",src:t(57984).c+"",width:"862",height:"778"})})}),"\n",(0,n.jsxs)(i.p,{children:["Use the ",(0,n.jsx)(i.code,{children:"Offset"})," section to place the component in the right place."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3D model center",src:t(85964).c+"",width:"862",height:"778"})})}),"\n",(0,n.jsxs)(i.p,{children:["Click -> ",(0,n.jsx)(i.code,{children:"OK"})," -> ",(0,n.jsx)(i.code,{children:"Save changes"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Now you are all good to go to design your first circuit with the Raspberry Pi Pico W!"}),"\n",(0,n.jsx)(i.h2,{id:"how-to-create-a-new-project",children:"How to create a new project"}),"\n",(0,n.jsxs)(i.p,{children:["The first thing you do when starting a new design is to create a new project. Open Kicad, click ",(0,n.jsx)(i.code,{children:"File"}),"->",(0,n.jsx)(i.code,{children:"New Project"}),", browse to your desired location and give your project a name."]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"New project",src:t(46800).c+"",width:"1025",height:"667"})})}),"\n",(0,n.jsx)(i.p,{children:"A project contains three types of files:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["a file with the extension ",(0,n.jsx)(i.code,{children:".kicad_pro"})]}),"\n",(0,n.jsxs)(i.li,{children:["a schematic file with the extension ",(0,n.jsx)(i.code,{children:".kicad_sch"})]}),"\n",(0,n.jsxs)(i.li,{children:["a board file with the extension ",(0,n.jsx)(i.code,{children:".kicad_pcb"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The project files all share the name of your project."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["A project uses the state of symbol, footprint and 3D model libraries at its creation. If you want to add new components in an existing project, in ",(0,n.jsx)(i.code,{children:"Schematic Editor"})," and ",(0,n.jsx)(i.code,{children:"PCB Editor"})," click on ",(0,n.jsx)(i.code,{children:"Preferences"})," -> ",(0,n.jsx)(i.code,{children:"Manage Symbol libraries..."})," / ",(0,n.jsx)(i.code,{children:"Manage Footprint libraries..."})," and do the same steps as shown above."]})})]})}function h(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},85964:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/3d_model_center-6f0d469eb98943cff61b91a47270af98.png"},57984:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/3d_model_offset-0c21a1c8b7c983a6ad518075e4ce9530.png"},86596:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/change_footprint-06669d2000be14d84a191828779754ef.png"},77028:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/change_footprint_2-f383cc6c39bb3c0ba1e11fdba3272acf.png"},44412:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/footprint_editor-4c79283e61b1df84f9afb480d60dea48.png"},93976:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/footprint_libraries-db30ea596f57d2dd7076bd2a7266a1fb.png"},31164:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/footprint_properties-cad3f3841a6bc8958f33a21889653d92.png"},46800:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/new_project-812237ae047c47a6a9f61976213603b8.png"},79264:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/symbol_editor-692e67c7a60cd65d03421188de7dca32.png"},91756:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/symbol_libraries-1850ca58028664fb0abe830f178ca6f1.png"},23784:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/symbol_libraries_import-b010562fa3b5599e86144bc372bd47f6.png"},13840:(e,i,t)=>{t.d(i,{c:()=>n});const n=t.p+"assets/images/symbol_properties-dc7383333212a8613312eafbc7e07e2a.png"},4552:(e,i,t)=>{t.d(i,{I:()=>a,M:()=>r});var n=t(11504);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);