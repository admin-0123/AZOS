/*<FILE_LICENSE>
 * Azos (A to Z Application Operating System) Framework
 * The A to Z Foundation (a.k.a. Azist) licenses this file to you under the MIT license.
 * See the LICENSE file in the project root for more information.
</FILE_LICENSE>*/

import { css } from "./ui.js";

export const ARENA_STYLES = css`
header{
  position: fixed;
  min-width: 360px;
  left: 0px;
  width: 100%;
  height: var(--hdr-height);
  top: 0px;
  z-index: 100;
  margin-top: 0px;
  padding-top: 0px;
  color: var(--hdr-color);
  background-color: var(--hdr-bg-color);
  box-shadow: var(--hdr-shadow);
}
      header .side-menu{
        display: block;
        position: fixed;
        z-index: 200;
        left: -500px;
        top: 0;
        width: 250px;
        height: 100vh;
        color: var(--menu-color);
        background: var(--menu-bg-color);
        opacity: var(--menu-opacity);
        transition: 0.75s;
        font-size: var(--menu-font-size);
        overflow: hidden;
        box-shadow: var(--menu-shadow);
      }

      header .side-menu_expanded{
        left: 0px;
        opacity: var(--menu-opacity);
      }

      header .side-menu .close-button{
        font-size: 1.8em;
        position: absolute;
        top: 6px;
        left: 6px;
        margin-top: -10px;
      }

      header .side-menu a{
        text-decoration:  none;
        color: inherit;
        transition: 0.3s;
      }
      header .side-menu a:hover{
        color: #d8d8d8;
      }

      header .side-menu ul{
        list-style: none;
        padding: 28px 24px 8px 48px;
      }

      header .side-menu li{
        padding: 8px;
      }

      header .menu{
        float: left;
        width: var(--menu-btn-width);
        height: 100%;
        display: block;
        background: var(--menu-btn-color);
      }

      header .menu svg{
        display: block;
        margin: 8px auto 8px auto;
        width: 30px;
        height: 30px;

        stroke: var(--menu-svg-color);
        stroke-width: var(--menu-svg-stroke);
      }



      header .title{
        //float: left;
        position: absolute;
        left: var(--menu-btn-width);
        top: 0px;
        display: block;
        font-size: 1.6rem;
        padding: 6px 2px 0px 8px;
        color: #d8d8d8;
        letter-spacing:  -1.5px;
        width: 100%;
        Xborder: 1px solid lime;
      }

      header .strip{
        position: absolute;
        top: 0px;
        right: 0px;
        display: flex;
        /*float: right;*/
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        /*border: 1px solid lime;*/
        height: 100%;
        background: linear-gradient(to right, rgba(100,100,100, 0.0), var(--hdr-bg-color) 15%);
        padding-left: 20px;
      }

      header .strip-btn{
        display: inline-block;
        font-size: 0.75em;
        text-align: center;
        width: auto;
        min-width: 45px;
        max-width: 20vw;
        margin: 2px 1px 2px 2px;
        color: #d0d0d0;
        padding: 4px 2px 2px 2px;

        XXXborder: 1px solid red;
        overflow: hidden;

        stroke: #e0e0e0;
        stroke-width: 0.8px;
        fill: none;
        stroke-linecap="round";
      }

      header .strip-btn:hover{
        background-color: rgba(255, 255, 255, 0.1);
      }

/* ------------------- */

main{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background: var(--main-bg);
}

main::after {
  content: "";
  clear: both;
  display: table;
}


main .strip{
  position: fixed;
  top: 0px;
  left: 0px;
  width: var(--menu-btn-width);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  padding-top: 55px;
}

main .strip-btn{
  display: inline-block;
  font-size: 0.9rem;
  text-align: center;
  width: 45px;
  margin: 2px 1px 2px 4px;
  XXXbackground-color: #808080;
  color: #858585;
  padding-top: 4px;

  stroke: #505050;
  stroke-width: 0.8px;
  fill: none;
  stroke-linecap="round";
}

main .strip-btn-selected{
  border-left: 4px solid #40a0ff;
  margin-left: 0px;
}

main .strip-btn:hover{
  background-color: rgba(255, 255, 255, .2);
  stroke-width: 1px;
  stroke: #404040;
}

main .applet-container{
  display: block;
  width: calc(100% - var(--menu-btn-width));
  min-height: 50vh;
  box-sizing: border-box;
  float: right;
  background-color: var(--paper);
  padding:  calc(4px + var(--hdr-height)) 16px 16px 16px;
  text-align: justify;
  overflow: auto;
}

@media screen and (max-width: 420px) {
  main .strip{
    top: unset;
    position: fixed;
    bottom: 0px;
    padding: 1px 2px 4px 2px;
    border-top: 1px solid #d0d0d0;
    left: 0px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    height: 38px;
    background: #e4e4e4;
  }

  main .applet-container{
    width: 100%;
  }

  main .strip-btn-selected{
    border: unset;
    border-bottom: 4px solid #40a0ff;
    margin-bottom: 0px;
  }

}

/* ------------------- */

footer{
  background-color: #606060;
  color: #aaa;
  padding: 10px;
}

      /*footer .bottom-menu{
      }*/

      footer .bottom-menu a{
        text-decoration:  none;
        color: #a8a8a0;
        transition: 0.3s;
        font-size: 1.1em;
      }
      footer .bottom-menu a:hover{
        color: #e8e8d8;
      }

      footer .bottom-menu ul{
        list-style: none;
        padding: 28px 10px 10px 32px;
      }

      footer .bottom-menu li{
        padding: 2px;
      }

      footer .contact{
        position: relative;
        top: -3em;
        text-align: right;
        font-size: 0.75em;
        opacity: 0.5;
      }

      footer .contact .line{
        display: block;
      }
`;
