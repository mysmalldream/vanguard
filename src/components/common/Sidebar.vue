<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router background-color="#2F3B4F" text-color="#BAC6D4"
            active-text-color="#3B9BFF">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" v-if="item.hidden">
                        <template slot="title">
                            <i :class="item.icon"></i>{{ item.title }}
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" v-show="subItem.hidden">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <!-- <template v-else>
                                    <el-menu-item :index="item.index">
                                        <i :class="item.icon"></i>{{ item.title }}
                                    </el-menu-item>
                </template> -->
                <template v-else v-show="true">
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // power:false,               //是否显示增删改的按钮权限
                items: [{
                        icon: 'el-icon-setting',
                        index: 'readme',
                        title: '欢迎页',
                        hidden: true,
                    },
                    {
                        icon: 'el-icon-document',
                        index: '6',
                        title: '用户管理设置',
                        hidden: true,
                        subs: [{
                            index: 'UserManagement',
                            title: '用户管理',
                            hidden: true,
                        }, ]
                    },
                    {
                        icon: 'el-icon-picture-outline',
                        index: '9',
                        title: '景区管理设置',
                        hidden: true,
                        subs: [{
                                index: 'Sparpreis',
                                title: '景区列表',
                                hidden: true,
                            },
                            {
                                index: 'SparpreisNewAdd',
                                title: '景区新增',
                                hidden: true,
                            },
                            //  {
                            //     index: 'SparpreisEdit',
                            //     title: '修改',
                            //     hidden: true,
                            // },
                        ]
                    },
                    {
                        icon: 'el-icon-time',
                        index: '5',
                        title: '产品信息管理设置',
                        hidden: true,
                        subs: [{
                                index: 'ProductManage',
                                title: '产品信息管理',
                                hidden: true,
                            },
                            {
                                index: 'ProductnewAdd',
                                title: '产品新增',
                                hidden: true,
                            },
                        ]
                    },
                ]
            }
        },
        created() {
            // this.getPowerId() //根据用户权限加载相应的用户左侧菜单栏
        },
        methods: {
            getPowerId() {
                // console.log(this.items[5].subs)
                // console.log(this.items[3].subs[1].hidden)
                var powerId = JSON.parse(window.sessionStorage.getItem("powerId"));
                if (powerId == 0) {
                    this.items[4].hidden = true;
                } else if (powerId == 2) {
                    this.items[4].hidden = false;

                    this.items[5].subs[1].hidden = true; //分销商管理
                    this.items[5].subs[2].hidden = false;

                    this.items[2].subs[1].hidden = false; //景区管理新增
                    this.items[3].subs[1].hidden = true; //产品信息管理新增

                } else if (powerId == 1) {
                    this.items[4].hidden = false;

                    this.items[5].subs[1].hidden = false; //分销商管理
                    this.items[5].subs[2].hidden = false;

                    this.items[2].subs[1].hidden = false; //景区管理新增
                    this.items[3].subs[1].hidden = false; //产品信息管理新增
                }
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        }
    }

</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom: 0;
        background: #232C3C;
    }

    .sidebar>ul {
        height: 100%;
    }

    .el-menu-item {
        background-color: #232C3C !important;
        /* background-color: #434F61 !important; */
    }

</style>

