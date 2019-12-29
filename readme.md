## 项目搭建
1、请先确保已全局安装yeoman： yeoman:yarn global add yo 
2、新建项目文件，在命令行中输入yo panda-vue-cli，项目搭建成功
3、安装依赖：cnpm i;

## 使用方法
1、此脚手架定义了三个环境：dev、test、production，webpack配置文件定义在build文件夹内，每个环境对应自己的配置文件。test为测试环境，跟production相比少了对文件的压缩，以方便出错时排除

2、全局变量注入：在config文件夹下，有针对每个环境的全局变量配置文件，在对应文件内配置即可

3、此脚手架支持构建单页面和多页面，只需要在src/pages目录下为每个页面创建自己的文件夹，在文件夹内定义entry.js，webpack会根据该文件夹内的文件创建对应的页面。每个页面的文件夹内包含该自己的apis、router、vuex。

4、为了更简单快捷的创建新页面目录结构，本脚手架引入了polp，只需要执行polp xxx即可自动创建一个新页面的目录结构

5、此脚手架已封装好vue-router，开发者只需要做两件事，第一：按照特定的目录结构创建文件：在pages/页面文件/views/文件夹下，针对每个路由创建自己的文件夹，入口文件命名为Index.vue，有子路由就继续在该文件夹内继续创建子路由文件即可；第二：在router.config.js内按照目录结构配置path和children即可。

6、在axios的基础上封装了pandaAxios，开发者调用即可
