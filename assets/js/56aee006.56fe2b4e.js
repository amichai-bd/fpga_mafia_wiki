"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},A=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,p=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(p,o(o({ref:t},A),{},{components:n})):a.createElement(p,o({ref:t},A))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"TFM/projectTool/mod3_cnt",id:"TFM/projectTool/mod3_cnt",title:"mod3_cnt",description:"7segcnt.png",source:"@site/docs/TFM/projectTool/mod3_cnt.md",sourceDirName:"TFM/projectTool",slug:"/TFM/projectTool/mod3_cnt",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/mod3_cnt",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/TFM/projectTool/mod3_cnt.md",tags:[],version:"current",frontMatter:{},sidebar:"TFM",previous:{title:"basic_example",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/basic_example"},next:{title:"de10_lite",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/de10_lite"}},u={},s=[{value:"lets start",id:"lets-start",level:2},{value:"Simulation using Modelsim",id:"simulation-using-modelsim",level:3},{value:"Compilation",id:"compilation",level:3},{value:"Simulation using gui",id:"simulation-using-gui",level:3},{value:"Quartus",id:"quartus",level:3}],A={toc:s},c="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},A,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"7seg_cnt.png",src:n(725).Z,width:"659",height:"291"}),(0,r.kt)("br",{parentName:"p"}),"\n","In that example we will design basic mod3 counter. The output will be a 7 segment display"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clk"),(0,r.kt)("td",{parentName:"tr",align:null},"50Mhz fpga clk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rst"),(0,r.kt)("td",{parentName:"tr",align:null},"reset push button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seg"),(0,r.kt)("td",{parentName:"tr",align:null},"7 segment display")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"up/down"),(0,r.kt)("td",{parentName:"tr",align:null},"cnt sw direction ctrl")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will implement the rst (reset) button using a push button"),(0,r.kt)("li",{parentName:"ul"},"We will implement the up/down button using a switch"),(0,r.kt)("li",{parentName:"ul"},"If up/down is 1 the counter will count up : ",(0,r.kt)("inlineCode",{parentName:"li"},"0,1,2,3,0,1,2,3,0,1,2,3...")," and if up/down is 0 the counter will count down : ",(0,r.kt)("inlineCode",{parentName:"li"},"3,2,1,0,3,2,1,0,3,2,1,0...")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Save your time")," and always read the de10_lite manual to understand the pins of the fpga. For example the push button is low active, so when you press the button the signal is 0 and when you release the button the signal is 1. By the way, thats the reason we implemented reset as active low (",(0,r.kt)("inlineCode",{parentName:"li"},"!rst"),"). The seven segment display is common anode, so you have to drive the cathodes of the display to 0 in order to light up a segment."),(0,r.kt)("li",{parentName:"ul"},"The push buttons are the ",(0,r.kt)("inlineCode",{parentName:"li"},"Buttonx2")," in the next figure.    ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fpga.png",src:n(231).Z,width:"626",height:"398"})),(0,r.kt)("h2",{id:"lets-start"},"lets start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Never, Never, Never")," start a design without testing it with simulation. You will save a lot of time if you test your design with simulation before you implement it on the fpga. ")),(0,r.kt)("h3",{id:"simulation-using-modelsim"},"Simulation using Modelsim"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create file named ",(0,r.kt)("inlineCode",{parentName:"li"},"counter.sv")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"counter_tb.sv"),". Create file named ",(0,r.kt)("inlineCode",{parentName:"li"},"test_list.f")," and add your files."),(0,r.kt)("li",{parentName:"ul"},"Create directory named ",(0,r.kt)("inlineCode",{parentName:"li"},"work"),"."),(0,r.kt)("li",{parentName:"ul"},"For deeper explanation ",(0,r.kt)("a",{parentName:"li",href:"/fpga_mafia_wiki/docs/TFM/projectTool/hw_compile"},"click here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// counter.sv file\n`timescale 1ns / 1ps\n\n`define zero  7'b1000000\n`define one   7'b1111001\n`define two   7'b0100100\n`define three 7'b0110000\n\ntypedef enum logic [1:0] {\n    Zero,\n    One, \n    Two, \n    Three\n} states;\n\n\nmodule counter(\n    input logic        clk, \n    input logic        rst,\n    input logic        up_down,\n    output logic [6:0] seg\n  );\n    \n    states ps_state, next_state;\n    \n    integer counter = 0;\n    // 1 sec counter must count until 49999999. \n    // de10_lite clk is 50Mhz\n    always_ff@(posedge clk) begin\n        if(!rst)\n            counter <= 0;\n        else if(counter == 49999999)\n            counter <= 0;    \n        else\n            counter <= counter + 1;\n    end\n    \n     \n    //state register\n    always_ff@(posedge clk) begin\n        if(!rst)\n            ps_state <= Zero;\n        else\n            ps_state <= next_state;\n    end\n    \n    // next state logic   \n    always_comb begin\n        next_state = ps_state;\n        case(ps_state)\n            Zero: begin\n                if(up_down && counter == 49999999)\n                    next_state = One;\n                else if (!up_down && counter == 49999999)\n                    next_state = Three;\n            end\n            One: begin\n                if(up_down && counter == 49999999)\n                    next_state = Two;\n                else if (!up_down && counter == 49999999)\n                    next_state = Zero;\n            end\n            Two: begin\n                if(up_down && counter == 49999999)\n                    next_state = Three;\n                else if (!up_down && counter == 49999999)\n                    next_state = One;\n            end\n            Three: begin\n                if(up_down && counter == 49999999)\n                    next_state = Zero;\n                else if (!up_down && counter == 49999999)\n                    next_state = Two;\n            end     \n        endcase        \n    end\n   \n    // output logic\n    assign seg = (ps_state == Zero) ? `zero : (ps_state == One) ? `one : (ps_state == Two) ? `two : (ps_state == Three) ? `three : 7'b1111111; \n    \nendmodule\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"notes"),":   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The clock of our fpga is 50Mhz. In order to change the display every second we need to count until 50 million and than change the display value. Thats the reason we use the counter variable."),(0,r.kt)("li",{parentName:"ul"},"In the simulation its recommended to set the counter variable to smaller number, for example 3. That way you can see the changes faster. In our simulation we will set it to 3.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// counter_tb.sv file\n`timescale 1ns / 1ps\n\nmodule counter_tb();\n\n    localparam DELAY = 10;\n    \n    logic clk;\n    logic rst;\n    logic up_down;\n    logic [6:0] seg;\n    \n    always #DELAY clk = !clk;\n    \n    counter counter (\n    .clk(clk), \n    .rst(rst),\n    .up_down(up_down),\n    .seg(seg)\n  );\n\n    initial begin\n        clk     = 1'b0;\n        rst     = 1'b0;\n        up_down = 1'b1;\n        #(4*DELAY);\n       \n        rst =  1'b1;\n        #(50*DELAY);\n        \n        up_down = 1'b0;\n        #(50*DELAY);\n        \n        up_down = 1'b1;\n        #(50*DELAY);\n        \n        $finish();\n       \n    end\nendmodule\n\n")),(0,r.kt)("h3",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"Compile the design in the terminal using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vlog.exe -f test_list.f\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not forget that we are using Modelsim and not Quartus. We will soon return to Quartus  ")),(0,r.kt)("h3",{id:"simulation-using-gui"},"Simulation using gui"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Modelsim using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vsim.exe -gui work.counter_tb\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Drag the counter signals to the wave window. You can also use the following command:\n",(0,r.kt)("img",{alt:"modelsim1.png",src:n(7868).Z,width:"1919",height:"612"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press the marked button to run the simulation. Fit the waves using zoom in/out buttons.\n",(0,r.kt)("img",{alt:"modelsim2.png",src:n(7678).Z,width:"1155",height:"566"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Observe the changes of the signals. Note that the counter is counting up and down every 4 clock cycles cause we set the counter to be 3 (0, 1, 2, 3)."))),(0,r.kt)("h3",{id:"quartus"},"Quartus"),(0,r.kt)("p",null,"After the design validation we can implement the design on the fpga. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Quartus and open the project as we created in the ",(0,r.kt)("inlineCode",{parentName:"li"},"basic_example"),"."),(0,r.kt)("li",{parentName:"ul"},"Change the counter variable to 49999999."),(0,r.kt)("li",{parentName:"ul"},"Compile the design and open pin assignment."),(0,r.kt)("li",{parentName:"ul"},"Use the de10_lite manual to assign the pins.\n",(0,r.kt)("img",{alt:"pin_assignment5.png",src:n(6442).Z,width:"1097",height:"243"})," "),(0,r.kt)("li",{parentName:"ul"},"Program the device and observe the changes on the 7 segment display.")))}m.isMDXComponent=!0},725:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},231:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fpga-674ea539e70e6305cfcfe818ddec8327.png"},7868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modelsim1-efb243e0ac319a1e2a41cd7d861eed06.png"},7678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/modelsim2-65d57c9f942af245789b44abef64ed6e.png"},6442:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_assignment5-26862556cebeb2ea36e7bb75e4a507d8.png"}}]);