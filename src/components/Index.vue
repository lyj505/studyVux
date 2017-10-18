<template>
    <div>
        <XHeader :left-options.backText="{backText: headerByCus}" :right-options="{showMore: true}" :left-options="{showBack: false}" class="theme-header-bg header-style">
            elema elema elema elema elema
            <a slot="left" class="fcfff">{{headerByCus}}</a>
            13113
        </XHeader>
        <!--<div style="padding-top:40px;">
                                                        <img src="../resource/外卖01_商品页.jpg"  class="width-percent-full">
                                                   </div>-->
        <!--bottom tab bar-->
    
        <div>
            <!--<img src="../resource/外卖01_商品页.jpg"  class="width-percent-full">-->
            首页
    
            <grid v-if="dataList">
                <grid-item label="Grid"  v-for="item in dataList.modules.iconFuns" style="text-align:center;" :style="{ background: item.back_ground }">
                    <img slot="icon" v-if="item" :src="localpath + item.img_path"> {{item.title}}
                </grid-item>
            </grid>
    
        </div>
    </div>
</template>

<script>
import { XHeader, ButtonTabItem, Grid, GridItem } from 'vux'
import _ from 'lodash'
//import merchantDetail from 'merchantDetail'
//import merchantDetail from 'merchantDetail'
//use 了之后 在这里不需要再引入。
export default {
    components: {
        XHeader,
        Grid,
        GridItem
    },
    data() {
        return {
            msg: 'Hello World!',
            headerByCus: 'ele',
            dataList: null,
            localpath: 'http://localhost:8080/'
        }
    },
    methods: {
        SetDefaultHeader(boolean) {
            //  this.$store.commit('incrementByPayload', {
            //   amount: 10
            // })
            //second fun
            this.$store.commit({
                type: 'setDefaultHeader',
                boolean: boolean
            })
        },
    },
    mounted() {
        this.SetDefaultHeader(false)
        console.log('index html mounted', this.$store.state.appOptions.showHeader);



        ///////////////////////       使用箭头函数 可以轻松获取this             1
        // this.$http.post(this.localpath + 'Store/Show/GetIndex', ).then( (response) => {
        //     this.dataList = JSON.parse(response.data.data);
        //     console.log(this.dataList);
        // },  (res) => {
        //     console.log('没有数据');
        // })
        //////////////////            使用 self                              2
        // let self = this;
        // this.$http.post(self.localpath + 'Store/Show/GetIndex', ).then(function (response) {
        //     self.dataList = JSON.parse(response.data.data);
        //     console.log(self.dataList);
        // }, function (res) {
        //     console.log('没有数据');
        // }
        ///使用bind                                                            3
        this.$http.post(this.localpath + 'Store/Show/GetIndex', ).then(function (response) {
           // this.dataList = 
     this.dataList  =  JSON.parse(response.data.data);
     //this.dataList =  _.extend(this.dataList,JSON.parse(response.data.data));




            console.log(self.dataList);
        }.bind(this), function (res) {
            console.log('没有数据');
        })


    },
    destroyed() {
        this.SetDefaultHeader(true);
    }

}
</script>

<style scoped>
.vux-header .vux-header-left a.fcfff {
    color: #fff;
}

.vux-header.theme-header-bg {
    background-color: #1c9cff;
}
</style>
