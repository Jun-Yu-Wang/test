<template>
  <table width="850" border="0" align="center" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td>
          <table width="850" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="350">
                  <img src="@/assets/img/layout/style02_02.gif" width="301" height="22" />
                </td>
                <td bgcolor="#FFFFFF">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td :background="layoutImg16_03" style="height: 3px"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="365">
                  <div align="left"></div>
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td bgcolor="#FFFFFF" class="a02">
                          ．工程類&nbsp;|．總務、公關&nbsp;|．行銷&nbsp;|．Web應用&nbsp;|．其他
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td><img src="./表格製作1_files/style02_05.gif" width="850" height="15" /></td>
      </tr>
      <tr>
        <td>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="16">
                  <img src="./表格製作1_files/style02_06.gif" width="16" height="136" />
                </td>
                <td background="./表格製作1_files/15_01.gif">
                  <object
                    classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"
                    width="818"
                    height="136"
                  >
                    <param name="movie" value="neter/banner.swf" />
                    <param name="quality" value="high" />
                    <param name="wmode" value="transparent" />
                    <embed
                      src="neter/banner.swf"
                      width="818"
                      height="136"
                      quality="high"
                      pluginspage="http://www.macromedia.com/go/getflashplayer"
                      type="application/x-shockwave-flash"
                      wmode="transparent"
                    />
                  </object>
                </td>
                <td width="16">
                  <img src="./表格製作1_files/style02_09.gif" width="16" height="136" />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td><img src="./表格製作1_files/style02_10.gif" width="850" height="12" /></td>
      </tr>
      <tr>
        <td>
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td width="16">
                  <img src="./表格製作1_files/style02_11.gif" width="16" height="28" />
                </td>
                <td :background="layoutImgStyle02_12">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td width="10">&nbsp;</td>
                        <td>
                          <p class="13px_word">
                            <a href="https://dam.cht.com.tw/CHT_DAM/o2.jsp" class="a01">資料上載</a>
                            <font color="#FFFFFF"
                              >&nbsp;|&nbsp;<a
                                href="https://dam.cht.com.tw/CHT_DAM/v1.jsp"
                                class="a01"
                                >資料．搜尋 / 修改</a
                              >&nbsp;|&nbsp;<router-link to="table" class="a01"
                                >表格製作</router-link
                              >&nbsp;|&nbsp;<router-link to="search" class="a01"
                                >未結案表格修改</router-link
                              >&nbsp;|&nbsp;<router-link to="search2" class="a01"
                                >已結案表格查詢</router-link
                              >&nbsp;|&nbsp;<router-link to="work" class="a01"
                                >待處理案件</router-link
                              >&nbsp;|&nbsp;<a
                                href="https://dam.cht.com.tw/CHT_DAM/note2.jsp"
                                class="a01"
                                >系統資訊</a
                              >&nbsp;|&nbsp;<a
                                href="https://dam.cht.com.tw/CHT_DAM/message.jsp"
                                class="a01"
                                >公告消息</a
                              ></font
                            >
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="16">
                  <img src="./表格製作1_files/style02_13.gif" width="16" height="28" />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td><img src="./表格製作1_files/style02_14.gif" width="850" height="14" /></td>
      </tr>
      <tr>
        <td>
          <router-view></router-view>
        </td>
      </tr>
      <tr>
        <td><img src="./表格製作1_files/style02_19-g.gif" width="850" height="17" /></td>
      </tr>
      <tr>
        <td>
          <table width="100%" border="0" cellspacing="0" cellpadding="10">
            <tbody>
              <tr>
                <td>
                  <div align="center">
                    COPYRIGHT &#169; 2005 CHUNGHWA TELECOM CO., LTD.<br />
                    版權所有：中華電信股份有限公司
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import '@/assets/style/home/hinet.css'
import layoutImg16_03 from '@/assets/img/layout/16_03.gif'
import layoutImgStyle02_12 from '@/assets/img/layout/style02_12.gif'
</script>

<style></style>
