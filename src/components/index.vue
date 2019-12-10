<template>
  <div>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened>
          <!-- <el-submenu  >
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
           
                <el-menu-item v-for="(item,index) in mockdata" :key='index' :index="'/'+item.route">{{item.name}}</el-menu-item>

            </el-menu-item-group>
         
 
          </el-submenu> -->
           <!-- 第一级 -->
          <template v-for="item in menu">
           
            <template v-if="item.sunSysColumns.length !=0">
              <el-submenu :index="item.colRoute" :key="item.colRoute">
                <template slot="title">
                  <i :class="item.icon"></i><span slot="title">{{ item.colName }}</span>
                </template>
                 <!-- 第二级 -->
                <template v-for="subItem in item.sunSysColumns">
                 
                  <el-submenu v-if="subItem.sunSysColumns.length !=0" :index="subItem.colRoute" :key="subItem.colRoute">
                    <template slot="title" :title="subItem.colName">{{ subItem.colName }}</template>
                    <!-- 第三级 -->
                    <el-menu-item v-for="(threeItem,i) in subItem.sunSysColumns" :key="i" :index="threeItem.colRoute">
                      <span :title="threeItem.colName">{{ threeItem.colName }}</span>
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item v-else :index="subItem.colRoute" :key="subItem.colRoute">
                    <span :title="subItem.colName">{{ subItem.colName }}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.colRoute" :key="item.colRoute">
                <i :class="item.icon"></i><span slot="title">{{ item.colName }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {

      return {
        menu: [{
            "id": 1,
            "colName": "会员部 测试数据",
            "colRoute": "1",
            "sunSysColumns": [{
              "id": 7,
              "colName": "about组件",
              "colRoute": "about",
              "sunSysColumns": []
            }]
          },
          {
            "id": 2,
            "colName": "公募基金部",
            "colRoute": "2",
            "sunSysColumns": [{
                "id": 8,
                "colName": "你好世界",
                "colRoute": "HelloWorld",
                "sunSysColumns": []
              },
              {
                "id": 9,
                "colName": "home组件",
                "colRoute": "home",
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

            "id": 8,
            "colName": "用户管理",
            "colRoute": "8",
            "sunSysColumns": [{
              "id": 31,
              "colName": "用户管理",
              "colRoute": "userManage",
              "sunSysColumns": []
            }]

          }
        ],
        created() {
          this.getSlider()
        },
        methods: {
          getSlider() {
            // this.$axios.get('/data/mockdata.json').then(res=>{
            //   console.log(res);

            // })
          }
        },
      }
    }
  }
</script>
<style scoped>
  #app {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .sidebar {
    height: 100%;
    /* width: 350px; */
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow: auto;
  }

  .sidebar::-webkit-scrollbar {
    width: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
    overflow-x: scroll;
    overflow-y: auto;
    white-space: nowrap;

  }

  .sidebar-el-menu:not(.el-menu--collapse)>span {
    /* width: 100%; */
  }

  .sidebar>ul {
    height: 100%;
  }

  /* .el-menu-item{padding-left: 20px!important;} */
  .el-submenu__title {
    padding-left: 10px !important;
  }
</style>