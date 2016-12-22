<template>
    <div id='recu'>
        <!--bnner-->
        <div class="banner5"></div>
        <!--banner_end-->
        <!--关于我们-->
        <div class="_Contact" style="margin:0px auto;width:1052px;">
            <div style="margin:0 auto; height:44px; padding-top:50px; width:358px;"><img src="resource/website/images/recruitment_bt.jpg" /></div>
            <div style="margin:0 auto; width:1052px; height:20px;"><img src="resource/website/images/fgx.jpg" /></div>
            <div style="width:100%;margin:10px 0px;">
                <div id="statement" style="text-indent:50px;color:red;font-weight:bold;font-size:16px;margin-bottom:20px;"><a name="long" style="cursor: pointer;" @click="alertZhao">●&nbsp;&nbsp;&nbsp;&nbsp;关于不法分子利用我公司名义以招聘事由实施诈骗的声明</a></div>
                <div class="job">
                    <div class="fl">
                        <h3>职位列表</h3>
                        <ul id="ul_nav">
                            <li v-for='(job,index) in jobs' @click='addActive(index)'><router-link :to='job[1]' :class='{current:index == isActive}'>{{job[0]}}</router-link></li>
                        </ul>
                    </div>
                    <div class="fr" id="div_con">
                        <router-view></router-view>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
        </div>
        <!--关于我们-->
        <div class="mask" id="mask" v-show="show"></div>
        <div id="alert_wrap" v-show="show">
            <i id="alert_close" @click="closeZhao"></i>
            <iframe class="statement-alert" id="statement_alert" scrolling="auto" src="pages/statement.html"></iframe>
        </div>
    </div>
</template>
<script>
module.exports = {

    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    data: function() {
        return {
            jobs: [
                ['PHP工程师', '/user/zhaopin/php'],
                ['总经理助理', '/user/zhaopin/leader'],
                ['拓展专员/市场推广/销售代表/业务员', '/user/zhaopin/market'],
                ['仓库管理员', '/user/zhaopin/git'],
                ['采购专员', '/user/zhaopin/buy']
            ],
            isActive:0
        }
    },
    methods: {
        alertZhao: function() {

            this.$emit('zhaopin');
        },
        closeZhao: function() {
            this.$emit('zhaopin');
        },
        addActive:function(n){        
            this.isActive = n;        
        }
    },
    created: function() {

    }
}

</script>
