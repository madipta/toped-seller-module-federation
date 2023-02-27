
# tokopedia seller home dashboard clone with Module Federation

this project built with nx monorepo, angular material and fort-awesome

![light theme](https://raw.githubusercontent.com/madipta/tokopedia-angular-material-theming/main/screen_shot/light-theme.png)  

![dark theme](https://raw.githubusercontent.com/madipta/tokopedia-angular-material-theming/main/screen_shot/dark-theme.png)


## Install

clone this project then install dependancy using
`yarn` or `npm install`


## Run Host with all remotes
`yarn nx serve app` or `npx nx serve app`

open http://localhost:4200 (host)

open http://localhost:4201 (home remote)   
open http://localhost:4202 (chat remote)   
open http://localhost:4203 (discussion remote)


## Run Remote Home page only
`yarn nx serve home` or `npx nx serve home`

open http://localhost:4201


## Run Remote Chat page only
`yarn nx serve chat` or `npx nx serve chat`

open http://localhost:4202


## Run Remote Discussion page only
`yarn nx serve discussion` or `npx nx serve discussion`

open http://localhost:4203
