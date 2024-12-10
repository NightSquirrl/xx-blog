import{_ as E}from"./ValaxyMain.vue_vue_type_style_index_0_lang-Dy9x6f4y.js";import{c as d,w as a,f as g,e as c,p as r,o as y,g as s,h as i,r as l}from"./app-CLGX1n_q.js";import"./YunComment.vue_vue_type_style_index_0_lang-D20ev_5r.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-BWxP3HbI.js";import"./post-CIcC9C2_.js";const D={__name:"path-alias",setup(m,{expose:p}){const e=JSON.parse('{"title":"路径别名","description":"","frontmatter":{"title":"路径别名","date":"2024-11-29","updated":"2024-11-29","categories":"项目初始化","tags":["vue","项目初始化","路径别名"],"top":95},"headers":[{"level":2,"title":"vite.config.ts配置","slug":"vite-config-ts配置","link":"#vite-config-ts配置","children":[]},{"level":2,"title":"typescript配置","slug":"typescript配置","link":"#typescript配置","children":[]}],"relativePath":"pages/posts/project-init/vue/path-alias.md","path":"/home/runner/work/xx-blog/xx-blog/pages/posts/project-init/vue/path-alias.md","lastUpdated":1733798212000}'),h=c(),n=e.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",n),globalThis.$frontmatter=n,p({frontmatter:{title:"路径别名",date:"2024-11-29",updated:"2024-11-29",categories:"项目初始化",tags:["vue","项目初始化","路径别名"],top:95}}),(t,k)=>{const o=E;return y(),d(o,{frontmatter:g(n)},{"main-content-md":a(()=>k[0]||(k[0]=[s("p",null,[i("什么是路径别名? 在项目中引入文件,使用相对路径引入比如"),s("code",null,"'../../xx/xx'"),i("在很多情况下,很难清除的时候,准确的路径,所以为了方便引入,可以给所引入的路径添加一个名字")],-1),s("blockquote",null,[s("p",null,"安装依赖")],-1),s("div",{class:"language-bash vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"bash"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"npm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," i"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -D"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "@types/node"')])])]),s("button",{class:"collapse"})],-1),s("h2",{id:"vite-config-ts配置",tabindex:"-1"},[s("code",null,"vite.config.ts"),i("配置 "),s("a",{class:"header-anchor",href:"#vite-config-ts配置","aria-label":'Permalink to "`vite.config.ts`配置"'},"​")],-1),s("div",{class:"language-javascript vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"javascript"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "vite"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," vue "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "@vitejs/plugin-vue"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { fileURLToPath, URL } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "url"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// https://vitejs.dev/config/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  resolve: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    alias: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      src: "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fileURLToPath"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," URL"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./src"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"meta"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".url)),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      @: "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"fileURLToPath"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," URL"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"./src"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"meta"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".url)),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  plugins: [")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    vue"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(),")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  ],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"});")])])]),s("button",{class:"collapse"})],-1),s("blockquote",null,[s("p",null,"创建了两个名字 src 和 @ 都指向项目的src目录")],-1),s("h2",{id:"typescript配置",tabindex:"-1"},[i("typescript配置 "),s("a",{class:"header-anchor",href:"#typescript配置","aria-label":'Permalink to "typescript配置"'},"​")],-1),s("p",null,[s("code",null,"tsconfig.app.json"),i(),s("code",null,"tsconfig.node.json"),i(" 两个文件添加相同的配置")],-1),s("p",null,[i("在 "),s("code",null,"compilerOptions"),i(" 的属性中,添加:")],-1),s("div",{class:"language-json vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"json"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"paths"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "src/*"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"src/*"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'  "@/*"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"src/*"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])]),s("button",{class:"collapse"})],-1)])),"main-header":a(()=>[l(t.$slots,"main-header")]),"main-header-after":a(()=>[l(t.$slots,"main-header-after")]),"main-nav":a(()=>[l(t.$slots,"main-nav")]),"main-content":a(()=>[l(t.$slots,"main-content")]),"main-content-after":a(()=>[l(t.$slots,"main-content-after")]),"main-nav-before":a(()=>[l(t.$slots,"main-nav-before")]),"main-nav-after":a(()=>[l(t.$slots,"main-nav-after")]),comment:a(()=>[l(t.$slots,"comment")]),footer:a(()=>[l(t.$slots,"footer")]),aside:a(()=>[l(t.$slots,"aside")]),"aside-custom":a(()=>[l(t.$slots,"aside-custom")]),default:a(()=>[l(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{D as default};