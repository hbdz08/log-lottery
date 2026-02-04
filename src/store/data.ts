import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'
import { id } from 'zod/v4/locales'

const originUrl = 'https://to2026.xyz'
type IPersonConfigWithoutUuid = Omit<IPersonConfig, 'uuid'>
export const defaultPersonList = <IPersonConfigWithoutUuid[]>
[
    { "uid": "U100156002", "name": "李琼", "department": "港服二部", "identity": "主管/运营部总管", "avatar": "https://api.dicebear.com/6.x/adventurer/svg?seed=liqiong-gangfu2", "x": 1, "y": 1, "id": 1, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156003", "name": "李世通", "department": "韩服一部", "identity": "主管", "avatar": "https://robohash.org/lishitong-hanfu1?set=set1", "x": 1, "y": 1, "id": 2, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156004", "name": "李玫", "department": "综合部", "identity": "人事主管", "avatar": "https://api.dicebear.com/6.x/avataaars/svg?seed=limei-zonghe", "x": 1, "y": 1, "id": 3, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156005", "name": "张寻", "department": "港服运维", "identity": "副主管", "avatar": "https://robohash.org/zhangxun-gangfuys?set=set2", "x": 1, "y": 1, "id": 4, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156006", "name": "李海朋", "department": "港服二部", "identity": "组长", "avatar": "https://api.dicebear.com/6.x/bottts/svg?seed=lihaipeng-gangfu2", "x": 1, "y": 1, "id": 5, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156007", "name": "龚华清", "department": "港服运维", "identity": "主管", "avatar": "https://robohash.org/gonghuaqing-gangfuys?set=set3", "x": 1, "y": 1, "id": 6, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156008", "name": "龚锶杰", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/personas/svg?seed=gongsijie-gangfu1", "x": 1, "y": 1, "id": 7, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156009", "name": "黄秀华", "department": "韩服二部", "identity": "主管", "avatar": "https://robohash.org/huangxiuhua-hanfu2?set=set4", "x": 1, "y": 1, "id": 8, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156010", "name": "彭卓", "department": "韩服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/fun-emoji/svg?seed=pengzhuo-hanfu1", "x": 1, "y": 1, "id": 9, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156011", "name": "欧志远", "department": "港服一部", "identity": "主管", "avatar": "https://robohash.org/ouzhiyuan-gangfu1?set=set1", "x": 1, "y": 1, "id": 10, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156012", "name": "郭书双", "department": "韩服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/big-smile/svg?seed=guoshushuang-hanfu1", "x": 1, "y": 1, "id": 11, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156013", "name": "眭雄杰", "department": "韩服二部", "identity": "运营", "avatar": "https://robohash.org/suixiongjie-hanfu2?set=set2", "x": 1, "y": 1, "id": 12, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156014", "name": "滕根", "department": "翻译", "identity": "翻译", "avatar": "https://api.dicebear.com/6.x/micah/svg?seed=tenggen-fanyi", "x": 1, "y": 1, "id": 13, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156015", "name": "金成宇", "department": "韩服运维", "identity": "主管", "avatar": "https://robohash.org/jinchengyu-hanfuys?set=set3", "x": 1, "y": 1, "id": 14, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156016", "name": "周宽", "department": "韩服运维", "identity": "运维", "avatar": "https://api.dicebear.com/6.x/adventurer/svg?seed=zhoukuan-hanfuys", "x": 1, "y": 1, "id": 15, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156017", "name": "李志", "department": "韩服二部", "identity": "运营", "avatar": "https://robohash.org/lizhi-hanfu2?set=set4", "x": 1, "y": 1, "id": 16, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156018", "name": "葛越", "department": "韩服二部", "identity": "组长", "avatar": "https://api.dicebear.com/6.x/avataaars/svg?seed=geyue-hanfu2", "x": 1, "y": 1, "id": 17, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156019", "name": "叶权", "department": "韩服一部", "identity": "运营", "avatar": "https://robohash.org/yequan-hanfu1?set=set1", "x": 1, "y": 1, "id": 18, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156020", "name": "陈文凯", "department": "港服二部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/bottts/svg?seed=chenwenkai-gangfu2", "x": 1, "y": 1, "id": 19, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156021", "name": "姜茜", "department": "翻译", "identity": "翻译", "avatar": "https://robohash.org/jiangxi-fanyi?set=set2", "x": 1, "y": 1, "id": 20, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156022", "name": "谭诗琴", "department": "综合部", "identity": "财务", "avatar": "https://api.dicebear.com/6.x/personas/svg?seed=tanshiqin-zonghe", "x": 1, "y": 1, "id": 21, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156023", "name": "杜超群", "department": "韩服一部", "identity": "运营", "avatar": "https://robohash.org/duchaoqun-hanfu1?set=set3", "x": 1, "y": 1, "id": 22, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156024", "name": "梁培朗", "department": "韩服二部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/fun-emoji/svg?seed=liangpeilang-hanfu2", "x": 1, "y": 1, "id": 23, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156025", "name": "王猛进", "department": "韩服一部", "identity": "运营", "avatar": "https://robohash.org/wangmengjin-hanfu1?set=set4", "x": 1, "y": 1, "id": 24, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156026", "name": "段斌", "department": "韩服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/big-smile/svg?seed=duanbin-hanfu1", "x": 1, "y": 1, "id": 25, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156027", "name": "张佳", "department": "韩服二部", "identity": "运营", "avatar": "https://robohash.org/zhangjia-hanfu2?set=set1", "x": 1, "y": 1, "id": 26, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156028", "name": "汤永康", "department": "韩服二部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/micah/svg?seed=tangyongkang-hanfu2", "x": 1, "y": 1, "id": 27, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156029", "name": "陶春羽", "department": "韩服运维", "identity": "运维", "avatar": "https://robohash.org/taochunyu-hanfuys?set=set2", "x": 1, "y": 1, "id": 28, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156030", "name": "罗万泽", "department": "港服运维", "identity": "运维", "avatar": "https://api.dicebear.com/6.x/adventurer/svg?seed=luowanze-gangfuys", "x": 1, "y": 1, "id": 29, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156031", "name": "文翔", "department": "港服二部", "identity": "运营", "avatar": "https://robohash.org/wenxiang-gangfu2?set=set3", "x": 1, "y": 1, "id": 30, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156032", "name": "蒋丽莉", "department": "综合部", "identity": "人事", "avatar": "https://api.dicebear.com/6.x/avataaars/svg?seed=jianglili-zonghe", "x": 1, "y": 1, "id": 31, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156033", "name": "李美坚", "department": "韩服运维", "identity": "运维/客服", "avatar": "https://robohash.org/limaijian-hanfuys?set=set4", "x": 1, "y": 1, "id": 32, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156034", "name": "潘存彦", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/bottts/svg?seed=pancunyan-gangfu1", "x": 1, "y": 1, "id": 33, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156035", "name": "刘涛", "department": "综合部", "identity": "技术", "avatar": "https://robohash.org/liutao-zonghe?set=set1", "x": 1, "y": 1, "id": 34, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156036", "name": "顿官章", "department": "港服二部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/personas/svg?seed=dunguanzhang-gangfu2", "x": 1, "y": 1, "id": 35, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156037", "name": "杨键", "department": "韩服二部", "identity": "运营", "avatar": "https://robohash.org/yangjian-hanfu2?set=set2", "x": 1, "y": 1, "id": 36, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156038", "name": "王浩男", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/fun-emoji/svg?seed=wanghaonan-gangfu1", "x": 1, "y": 1, "id": 37, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156039", "name": "颜川", "department": "韩服运维", "identity": "运维", "avatar": "https://robohash.org/yan chuan-hanfuys?set=set3", "x": 1, "y": 1, "id": 38, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156040", "name": "胡皓文", "department": "韩服二部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/big-smile/svg?seed=huhaowen-hanfu2", "x": 1, "y": 1, "id": 39, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156041", "name": "刘欣雨", "department": "综合部", "identity": "人事", "avatar": "https://robohash.org/liuxinyu-zonghe?set=set4", "x": 1, "y": 1, "id": 40, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156042", "name": "沈若熙", "department": "翻译", "identity": "翻译", "avatar": "https://api.dicebear.com/6.x/micah/svg?seed=shenruoxi-fanyi", "x": 1, "y": 1, "id": 41, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156043", "name": "曹睿淇", "department": "港服二部", "identity": "运营", "avatar": "https://robohash.org/caoruiqi-gangfu2?set=set1", "x": 1, "y": 1, "id": 42, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156044", "name": "廖华美", "department": "综合部", "identity": "人事", "avatar": "https://api.dicebear.com/6.x/adventurer/svg?seed=liaohuamei-zonghe", "x": 1, "y": 1, "id": 43, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156045", "name": "姚希睿", "department": "韩服一部", "identity": "运营", "avatar": "https://robohash.org/yaoxirui-hanfu1?set=set2", "x": 1, "y": 1, "id": 44, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156046", "name": "刘琰", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/avataaars/svg?seed=liuyan1-gangfu1", "x": 1, "y": 1, "id": 45, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156047", "name": "葛亮", "department": "综合部", "identity": "美术", "avatar": "https://robohash.org/geliang-zonghe?set=set3", "x": 1, "y": 1, "id": 46, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156048", "name": "戴世能", "department": "港服运维", "identity": "运维", "avatar": "https://api.dicebear.com/6.x/bottts/svg?seed=daishineng-gangfuys", "x": 1, "y": 1, "id": 47, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156049", "name": "颜慎", "department": "港服二部", "identity": "运营", "avatar": "https://robohash.org/yanshen-gangfu2?set=set4", "x": 1, "y": 1, "id": 48, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156050", "name": "熊自清", "department": "韩服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/personas/svg?seed=xiongziqing-hanfu1", "x": 1, "y": 1, "id": 49, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156051", "name": "覃志帆", "department": "港服一部", "identity": "运营", "avatar": "https://robohash.org/qinzhifan-gangfu1?set=set1", "x": 1, "y": 1, "id": 50, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156052", "name": "王锦帆", "department": "韩服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/fun-emoji/svg?seed=wangjinfan-hanfu1", "x": 1, "y": 1, "id": 51, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156053", "name": "朴进宇", "department": "韩服运维", "identity": "运维", "avatar": "https://robohash.org/pujinyu-hanfuys?set=set2", "x": 1, "y": 1, "id": 52, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156054", "name": "胡博文", "department": "韩服运维", "identity": "运维", "avatar": "https://api.dicebear.com/6.x/big-smile/svg?seed=hubowen-hanfuys", "x": 1, "y": 1, "id": 53, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156055", "name": "廖韩宇", "department": "港服二部", "identity": "运营", "avatar": "https://robohash.org/liaohanyu-gangfu2?set=set3", "x": 1, "y": 1, "id": 54, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156056", "name": "何泉", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/micah/svg?seed=hequan-gangfu1", "x": 1, "y": 1, "id": 55, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156057", "name": "郭俊", "department": "港服一部", "identity": "运营", "avatar": "https://robohash.org/guojun-gangfu1?set=set4", "x": 1, "y": 1, "id": 56, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156058", "name": "张有情", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/adventurer/svg?seed=zhangyouqing-gangfu1", "x": 1, "y": 1, "id": 57, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156059", "name": "李金", "department": "港服一部", "identity": "运营", "avatar": "https://robohash.org/lijin-gangfu1?set=set1", "x": 1, "y": 1, "id": 58, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156060", "name": "漆依亮", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/avataaars/svg?seed=qiyiliang-gangfu1", "x": 1, "y": 1, "id": 59, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156061", "name": "陈坤", "department": "港服二部", "identity": "运营", "avatar": "https://robohash.org/chenkun-gangfu2?set=set2", "x": 1, "y": 1, "id": 60, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] },
    { "uid": "U100156062", "name": "欧代鸿", "department": "港服一部", "identity": "运营", "avatar": "https://api.dicebear.com/6.x/bottts/svg?seed=oudaihong-gangfu1", "x": 1, "y": 1, "id": 61, "isWin": false, "createTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "updateTime": "Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)", "prizeName": [], "prizeTime": [], "prizeId": [] }
]

export const defaultMusicList = [
    {
        id: `Geoff Knorr - China (The Industrial Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr - China (The Industrial Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr - China (The Industrial Era).ogg`,
    },
    {
        id: `Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg`,
    },
    {
        id: `Radetzky March.mp3${new Date().getTime().toString()}`,
        name: 'Radetzky March.mp3',
        url: `${originUrl}/resource/audio/Radetzky March.mp3`,
    },
    {
        id: `Shanghai.mp3${new Date().getTime().toString()}`,
        name: 'Shanghai.mp3',
        url: `${originUrl}/resource/audio/Shanghai.mp3`,
    },
    {
        id: `Waltz No.2.mp3${new Date().getTime().toString()}`,
        name: 'Waltz No.2.mp3',
        url: `${originUrl}/resource/audio/Waltz No.2.mp3`,
    },
    {
        id: `WildChinaTheme.mp3${new Date().getTime().toString()}`,
        name: 'WildChinaTheme.mp3',
        url: `${originUrl}/resource/audio/WildChinaTheme.mp3`,
    },
    {
        id: `边程&房东的猫 - 美好事物-再遇少年.ogg${new Date().getTime().toString()}`,
        name: '边程&房东的猫 - 美好事物-再遇少年.ogg',
        url: `${originUrl}/resource/audio/边程&房东的猫 - 美好事物-再遇少年.ogg`,
    },
    {
        id: `大乔小乔 - 相见难别亦难.ogg${new Date().getTime().toString()}`,
        name: '大乔小乔 - 相见难别亦难.ogg',
        url: `${originUrl}/resource/audio/大乔小乔 - 相见难别亦难.ogg`,
    },
    {
        id: `你要跳舞吗-新裤子.mp3${new Date().getTime().toString()}`,
        name: '你要跳舞吗-新裤子.mp3',
        url: `${originUrl}/resource/audio/你要跳舞吗-新裤子.mp3`,
    },
    {
        id: `生命-声音玩具.mp3${new Date().getTime().toString()}`,
        name: '生命-声音玩具.mp3',
        url: `${originUrl}/resource/audio/生命-声音玩具.mp3`,
    },
    {
        id: `与非门 - Happy New Year.ogg${new Date().getTime().toString()}`,
        name: '与非门 - Happy New Year.ogg',
        url: `${originUrl}/resource/audio/与非门 - Happy New Year.ogg`,
    },

]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: '幸运奖（小米手环）',
        sort: 1,
        isAll: false,
        count: 4,
        isUsedCount: 0,
        picture: {
            id: '3',
            name: '幸运奖',
            url: `https://image.manmanyouhudong.com/image/img3.jpg`,
        },
        separateCount: {
            enable: true,
            countList: [ {
                "id": "1",
                "count": 2,
                "isUsedCount": 0
            },
            {
                "id": "2",
                "count": 2,
                "isUsedCount": 0
            }],
        },
        desc: '幸运奖（小米手环）',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '002',
        name: '三等奖（徕芬吹风机礼盒）',
        sort: 2,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: '三等奖',
            url: `https://image.manmanyouhudong.com/image/img4.jpg`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '三等奖（徕芬吹风机礼盒）',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '003',
        name: '二等奖（苹果蓝牙耳机）',
        sort: 3,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: '二等奖',
            url: `https://image.manmanyouhudong.com/image/img1.jpg`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '二等奖（苹果蓝牙耳机）',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '004',
        name: '一等奖（苹果手机17）',
        sort: 4,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '0',
            name: '一等奖',
            url: `https://image.manmanyouhudong.com/image/img2.jpg`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: '一等奖（苹果手机17）',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '001',
    name: '三等奖',
    sort: 1,
    isAll: false,
    count: 12,
    isUsedCount: 0,
    picture: {
        id: '2',
        name: '三等奖',
        url: `${originUrl}/resource/image/image3.png`,
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '三等奖',
    isShow: true,
    isUsed: false,
    frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: '',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const defaultImageList = [
    {
        id: '0',
        name: '一等奖',
        url: `https://image.manmanyouhudong.com/image/img2.jpg`,
    },
    {
        id: '1',
        name: '二等奖',
        url: `https://image.manmanyouhudong.com/image/img1.jpg`,
    },
    {
        id: '2',
        name: '三等奖',
        url: `https://image.manmanyouhudong.com/image/img4.jpg`,
    },
    {
        id: '3',
        name: '幸运奖',
        url: `https://image.manmanyouhudong.com/image/img3.jpg`,
    },
    {
        id: '4',
        name: '背景图',
        url: `https://image.manmanyouhudong.com/image/bg2.png`,
    },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 66, 67, 84, 101, 100, 32, 33, 93, 65, 82, 99]

export const defaultServerHostList = [
    {
        id: 'default',
        name: '默认服务器',
        value: 'default',
        host: 'https://to2026.xyz:8080',
    },
    {
        id: 'local',
        name: '本地服务器',
        value: 'local',
        host: 'http://127.0.0.1:8080',
    },
    {
        id: 'custom',
        name: '自定义服务器',
        value: 'custom',
        host: '',
    },
]
