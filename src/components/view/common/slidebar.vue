
<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" 
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.sunSysColumns.length !=0">
                    <el-submenu :index="item.colRoute" :key="item.colRoute" >
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.colName }}</span>
                        </template>
                        <template v-for="subItem in item.sunSysColumns">
                            <el-submenu v-if="subItem.sunSysColumns.length !=0" :index="subItem.colRoute" :key="subItem.colRoute">
                                <template slot="title" :title="subItem.colName">{{ subItem.colName }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.sunSysColumns" :key="i" :index="threeItem.colRoute" >
                                    <span :title="threeItem.colName">{{ threeItem.colName }}</span>
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.colRoute" :key="subItem.colRoute" >
                                <span :title="subItem.colName">{{ subItem.colName }}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.colRoute" :key="item.colRoute" >
                        <i :class="item.icon"></i><span slot="title">{{ item.colName }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        name: 'sidebar',
        data() {
            return {
                collapse: false,
                menu:[
                    {
                        "id": 1,
                        "colName": "会员部 测试数据",
                        "colRoute": "1",
                        "sunSysColumns": [{
                            "id": 7,
                            "colName": "会员数据",
                            "colRoute": "memberInfo",
                            "sunSysColumns": []
                        }]
                    },
                    {
                        "id": 2,
                        "colName": "公募基金部",
                        "colRoute": "2",
                        "sunSysColumns": [
                            {
                                "id": 8,
                                "colName": "公募基金行业数据",
                                "colRoute": "industryData",
                                "sunSysColumns": []
                            },
                            {
                                "id": 9,
                                "colName": "公募基金资产统计",
                                "colRoute": "assetStatistics",
                                "sunSysColumns": []
                            },
                            {
                                "id": 10,
                                "colName": "基金管理机构非货币理财公募基金月规模排名",
                                "colRoute": "fundManage",
                                "sunSysColumns": []
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "colName": "私募管理部",
                        "colRoute": "3",
                        "sunSysColumns": [
                            {
                                "id": 11,
                                "colName": "不予登记机构",
                                "colRoute": "noRegistered",
                                "sunSysColumns": []
                            },
                            {
                                "id": 12,
                                "colName": "私募基金行业数据",
                                "colRoute": "privateEIData",
                                "sunSysColumns": []
                            },
                            {
                                "id": 13,
                                "colName": "私募基金管理人登记月度趋势情况",
                                "colRoute": "monthlyTrend",
                                "sunSysColumns": []
                            },
                            {
                                "id": 14,
                                "colName": "不同机构类型私募基金管理人登记情况",
                                "colRoute": "differTypeIns",
                                "sunSysColumns": []
                            },
                            {
                                "id": 15,
                                "colName": "私募基金管理人管理基金规模分布情况",
                                "colRoute": "fundSizeDistr",
                                "sunSysColumns": []
                            },
                            {
                                "id": 16,
                                "colName": "不同基金类型私募基金备案情况",
                                "colRoute": "noTypeFundFiling",
                                "sunSysColumns": []
                            },
                            {
                                "id": 17,
                                "colName": "私募基金管理人注册地分布",
                                "colRoute": "disRPOPFManager",
                                "sunSysColumns": []
                            },
                            {
                                "id": 18,
                                "colName": "合伙型、公司型私募基金注册地分布",
                                "colRoute": "disCPFRegistr",
                                "sunSysColumns": []
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "colName": "资管产品部",
                        "colRoute": "4",
                        "sunSysColumns": [
                            {
                                "id": 19,
                                "colName": "港股投顾机构信息",
                                "colRoute": "hkOrgan",
                                "sunSysColumns": []
                            },
                            {
                                "id": 20,
                                "colName": "私募资产管理计划",
                                "colRoute": "siMuMoney",
                                "sunSysColumns": [
                                    {
                                        "id": 30,
                                        "colName": "资管行业数据",
                                        "colRoute": "ziGuanData",
                                        "sunSysColumns": []
                                    },
                                    {
                                        "id": 31,
                                        "colName": "资管业务机构数量统计",
                                        "colRoute": "ziGuanJiGou",
                                        "sunSysColumns": []
                                    },
                                    {
                                        "id": 32,
                                        "colName": "资管产品存续规模",
                                        "colRoute": "ziGuanProduct",
                                        "sunSysColumns": []
                                    }
                                ]
                            },
                            {
                                "id": 21,
                                "colName": "资产证券化(ABS)数据",
                                "colRoute": "absData",
                                "sunSysColumns": [
                                    {
                                        "id": 33,
                                        "colName": "资产证券化业务机构数量统计",
                                        "colRoute": "absDataNumber",
                                        "sunSysColumns": []
                                    },
                                    {
                                        "id": 34,
                                        "colName": "资产证券化产品规模",
                                        "colRoute": "absDataScale",
                                        "sunSysColumns": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "colName": "理财及服务机构部部",
                        "colRoute": "5",
                        "sunSysColumns": [
                            {
                                "id": 22,
                                "colName": "基金托管人名单信息",
                                "colRoute": "jiJinPeopleName",
                                "sunSysColumns": []
                            },
                            {
                                "id": 23,
                                "colName": "合格境外机构托管人名单信息",
                                "colRoute": "foreignPeopleName",
                                "sunSysColumns": []
                            },
                            {
                                "id": 32,
                                "colName": "基金评价机构公示",
                                "colRoute": "fundEvalPub",
                                "sunSysColumns": []
                            },
                            {
                                "id": 24,
                                "colName": "基金销售行业数据",
                                "colRoute": "jiJinSaleData",
                                "sunSysColumns": []
                            },
                            {
                                "id": 25,
                                "colName": "基金管理公司养老金管理规模排名",
                                "colRoute": "oldMoney",
                                "sunSysColumns": []
                            },
                            {
                                "id": 26,
                                "colName": "ICI美国养老金与公募基金市场数据",
                                "colRoute": "ICIoldMoney",
                                "sunSysColumns": []
                            },
                            {
                                "id": 27,
                                "colName": "OECD国家养老金市场数据",
                                "colRoute": "OECDoldMoney",
                                "sunSysColumns": []
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "colName": "研究与风险检测部",
                        "colRoute": "6",
                        "sunSysColumns": [
                            {
                                "id": 28,
                                "colName": "社会责任投资基金",
                                "colRoute": "socialResInv",
                                "sunSysColumns": []
                            },
                            {
                                "id": 29,
                                "colName": "社会责任投资方向的基金",
                                "colRoute": "socialResInvTwo",
                                "sunSysColumns": []
                            },
                        
                        ]
                    },
                    {
                            
                                "id": 7,
                                "colName": "日志查询",
                                "colRoute": "7",
                                "sunSysColumns": [
                                    {
                                         "id": 30,
                                "colName": "日志查询",
                                "colRoute": "sysLog",
                                "sunSysColumns": []
                                    }
                                ]
                            
                    },
                    {
                            
                                "id": 8,
                                "colName": "用户管理",
                                "colRoute": "8",
                                "sunSysColumns": [
                                    {
                                         "id": 31,
                                "colName": "用户管理",
                                "colRoute": "userManage",
                                "sunSysColumns": []
                                    }
                                ]
                            
                    }
                ],
              items:[]
            }
        },
        methods:{
            getSidebarData(){
                // this.items = this.menu;return;
                this.$get(`${this.$url}portal/web/column/colAuthTrees`,{}).then((res)=>{
                    // console.log(res.data.code)
                    if(res.data.code == 200){
                        this.items = res.data.data.data;
                        // console.log(res.data.data.data);
                        
                        // console.log(this.items)
                    }else if(res.data.code == 602){
                        this.$router.push('/login');
                    }else{
                        this.$router.push('/login');
                        console.log(res)
                    }
                }).catch((err) => {
                    console.log(err+'--------------');
                    this.$router.push('/login');
                    // this.$message.error("请求出错，请稍候再试");
                });
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            },
            
        },
        created(){
   
            this.getSidebarData();
        }
    }
</script>

<style scoped>
    .sidebar{
        height: 100%;
        /* width: 350px; */
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
      overflow: auto;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
        overflow-x: scroll;
        overflow-y: auto;
                 white-space: nowrap;

    }
    .sidebar-el-menu:not(.el-menu--collapse)>span{
        /* width: 100%; */
    }
    .sidebar > ul {
        height:100%;
    }
/* .el-menu-item{padding-left: 20px!important;} */
.el-submenu__title{padding-left: 10px!important; }

</style>

