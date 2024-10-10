# 每5天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */5 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

15 0,16 * * * node /scripts/jd_beanSign.js >> /scripts/logs/jd_beanSign.log
11 11,21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log
25 2,14 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log
20 22 * * * node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log
3 3,10 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log
11 11 11 11 * node /scripts/jd_car_play_exchange.js >> /scripts/logs/jd_car_play_exchange.log
13 */6 * * * node /scripts/jd_check_cookie.js >> /scripts/logs/jd_check_cookie.log
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log
1 1 1 1 * node /scripts/jd_shop_sign.js >> /scripts/logs/jd_shop_sign.log
6 6,14 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log
6 5,13 * * * node /scripts/jd_dygetbeans.js >> /scripts/logs/jd_dygetbeans.log
7 4,12 * * * node /scripts/jd_dygetbeans.js >> /scripts/logs/jd_dygetbeans.log
10 10 * * * node /scripts/jd_fruit_friend.js >> /scripts/logs/jd_fruit_friend.log
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log
21 9 * * * node /scripts/jd_gua_MMdou_Mod.js >> /scripts/logs/jd_gua_MMdou_Mod.log
21 8 * * * node /scripts/jd_gwfd.js >> /scripts/logs/jd_gwfd.log
45 20 * * * node /scripts/jd_hbCount.js >> /scripts/logs/jd_hbCount.log
15 13,20 * * * node /scripts/jd_hdcheck.js >> /scripts/logs/jd_hdcheck.log
13 0,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log
8 8 8 8 7 node /scripts/jd_healthCheck.js >> /scripts/logs/jd_healthCheck.log
10 12,20 * * * node /scripts/jd_insight.js >> /scripts/logs/jd_insight.log
16 12,20 * * * node /scripts/jd_jdjoypark.js >> /scripts/logs/jd_jdjoypark.log
20 12,20 * * * node /scripts/jd_jdkd.js >> /scripts/logs/jd_jdkd.log
40 12,20 * * * node /scripts/jd_jksq.js >> /scripts/logs/jd_jksq.log
40 0,10 * * * node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log
1 3 * * * node /scripts/jd_marketmh.js >> /scripts/logs/jd_marketmh.log
1 5,11,15,19 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log
12 1,9 * * * node /scripts/jd_sign_graphics1.js >> /scripts/logs/jd_sign_graphics1.log
2 1,10 * * * node /scripts/jd_signbeanact.js >> /scripts/logs/jd_signbeanact.log
2 2,11 * * * node /scripts/jd_slider_sign.js >> /scripts/logs/jd_slider_sign.log
8 0-23/3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log
20 5,21 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log
30 9,14,18 * * * node /scripts/jd_superBrandJK_1.js >> /scripts/logs/jd_superBrandJK_1.log
30 21 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log
39 */2 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log
39 20 * * * node /scripts/jd_vipgrowth.js >> /scripts/logs/jd_vipgrowth.log
29 */2 * * * node /scripts/jd_clean_car.js >> /scripts/logs/jd_clean_car.js
21 3,9 * * * node /scripts/jd_wind_sign_xd.js >> /scripts/logs/jd_wind_sign_xd.log
21 2,8 * * * node /scripts/jd_speed_sign_new.js >> /scripts/logs/jd_speed_sign_new.log
10 1,11 * * * node /scripts/jddj_plantBeans.js >> /scripts/logs/jddj_plantBeans.log
30 1,11 * * * node /scripts/jd_wq_wxsign.js >> /scripts/logs/jd_wq_wxsign.log
9 19 * * * node /scripts/jd_wyw.js >> /scripts/logs/jd_wyw.log
9 7 * * * node /scripts/jd_xiaoshou_sendBean.js >> /scripts/logs/jd_xiaoshou_sendBean.log
7 7 7 7 7 node /scripts/jd_fruit_watering.js >> /scripts/logs/jd_fruit_watering.log
10 0,9 * * * node /scripts/jd_fruit_help.js >> /scripts/logs/jd_fruit_help.log
#10 0,9 * * * node /scripts/jd_fruit_inner_help >> /scripts/logs/jd_fruit_help.log
10 4,20 * * * node /scripts/jd_fruit_new_help.js >> /scripts/logs/jd_fruit_new_help.log
30 6,12,20 * * * node /scripts/jd_fruit_new.js >> /scripts/logs/jd_fruit_new.log
30 0-18/6 * * * node /scripts/jd_fruit_task.js >> /scripts/logs/jd_fruit.log
30 10 * * * node /scripts/jd_dongDongFarm_draw.js >> /scripts/logs/jd_dongDongFarm_draw.log
7 7 7 7 7 node /scripts/jd_AutoEval.js >> /scripts/logs/jd_AutoEval.log
3 3 29 2 * node /scripts/jd_CheckCK.js >> /scripts/logs/jd_CheckCK.log
3 3 29 2 * node /scripts/jd_MideaSuper.js >> /scripts/logs/jd_MideaSuper.log
3 3 29 2 * node /scripts/jd_cashtored.js >> /scripts/logs/jd_cashtored.log
3 3 29 2 * node /scripts/jd_categoryUnion.js >> /scripts/logs/jd_categoryUnion.log
3 3 29 2 * node /scripts/jd_completeInfoActivity.js >> /scripts/logs/jd_completeInfoActivity.log
3 3 29 2 * node /scripts/jd_dailysign.js >> /scripts/logs/jd_dailysign.log
3 3 29 2 * node /scripts/jd_ddgj.js >> /scripts/logs/jd_ddgj.log
3 3 29 2 * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log
3 3 29 2 * node /scripts/jd_drawCenter.js >> /scripts/logs/jd_drawCenter.log
3 3 29 2 * node /scripts/jd_fanfanka.js >> /scripts/logs/jd_fanfanka.log
3 3 29 2 * node /scripts/jd_fen2bean.js >> /scripts/logs/jd_fen2bean.log
3 3 29 2 * node /scripts/jd_floor.js >> /scripts/logs/jd_floor.log
3 3 29 2 * node /scripts/jd_jdblottery.js >> /scripts/logs/jd_jdblottery.log
3 3 29 2 * node /scripts/jd_jdc.js >> /scripts/logs/jd_jdc.log
3 3 29 2 * node /scripts/jd_jdkdcoupon.js >> /scripts/logs/jd_jdkdcoupon.log
3 3 29 2 * node /scripts/jd_jlong.js >> /scripts/logs/jd_jlong.log
3 3 29 2 * node /scripts/jd_jlychl.js >> /scripts/logs/jd_jlychl.log
3 3 29 2 * node /scripts/jd_lnjhy.js >> /scripts/logs/jd_lnjhy.log
3 3 29 2 * node /scripts/jd_loadBlindBox.js >> /scripts/logs/jd_loadBlindBox.log
3 3 29 2 * node /scripts/jd_lottery.js >> /scripts/logs/jd_lottery.log
3 3 29 2 * node /scripts/jd_lottery2.js >> /scripts/logs/jd_lottery2.log
3 3 29 2 * node /scripts/jd_mkredrain.js >> /scripts/logs/jd_mkredrain.log
3 3 29 2 * node /scripts/jd_newfarmlottery.js >> /scripts/logs/jd_newfarmlottery.log
3 3 29 2 * node /scripts/jd_opencardDPLHTY.js >> /scripts/logs/jd_opencardDPLHTY.log
3 3 29 2 * node /scripts/jd_opencardJoy.js >> /scripts/logs/jd_opencardJoy.log
3 3 29 2 * node /scripts/jd_pointExgBeans.js >> /scripts/logs/jd_pointExgBeans.log
3 3 29 2 * node /scripts/jd_pointExgHb.js >> /scripts/logs/jd_pointExgHb.log
3 3 29 2 * node /scripts/jd_pointExgShiWu.js >> /scripts/logs/jd_pointExgShiWu.log
3 3 29 2 * node /scripts/jd_ppdt.js >> /scripts/logs/jd_ppdt.log
3 3 29 2 * node /scripts/jd_price.js >> /scripts/logs/jd_price.log
3 3 29 2 * node /scripts/jd_prodev.js >> /scripts/logs/jd_prodev.log
3 3 29 2 * node /scripts/jd_qszd.js >> /scripts/logs/jd_qszd.log
3 3 29 2 * node /scripts/jd_redRain2021.js >> /scripts/logs/jd_redRain2021.log
3 3 29 2 * node /scripts/jd_rmvcart.js >> /scripts/logs/jd_rmvcart.log
3 3 29 2 * node /scripts/jd_seckillViewTask.js >> /scripts/logs/jd_seckillViewTask.log
3 3 29 2 * node /scripts/jd_sevenDay.js >> /scripts/logs/jd_sevenDay.log
3 3 29 2 * node /scripts/jd_shopDraw.js >> /scripts/logs/jd_shopDraw.log
3 3 29 2 * node /scripts/jd_shopSign.js >> /scripts/logs/jd_shopSign.log
3 3 29 2 * node /scripts/jd_showCart.js >> /scripts/logs/jd_showCart.log
3 3 29 2 * node /scripts/jd_showDrawOne.js >> /scripts/logs/jd_showDrawOne.log
3 3 29 2 * node /scripts/jd_showFavoriteShop.js >> /scripts/logs/jd_showFavoriteShop.log
3 3 29 2 * node /scripts/jd_showInviteJoin.js >> /scripts/logs/jd_showInviteJoin.log
3 3 29 2 * node /scripts/jd_showPartition.js >> /scripts/logs/jd_showPartition.log
3 3 29 2 * node /scripts/jd_showPerfectInformation.js >> /scripts/logs/jd_showPerfectInformation.log
3 3 29 2 * node /scripts/jd_showSign.js >> /scripts/logs/jd_showSign.log
3 3 29 2 * node /scripts/jd_showTaskDraw.js >> /scripts/logs/jd_showTaskDraw.log
3 3 29 2 * node /scripts/jd_sllottery.js >> /scripts/logs/jd_sllottery.log
3 3 29 2 * node /scripts/jd_try.js >> /scripts/logs/jd_try.log
3 3 29 2 * node /scripts/jd_unFollow.js >> /scripts/logs/jd_unFollow.log
3 3 29 2 * node /scripts/jd_vxFans.js >> /scripts/logs/jd_vxFans.log
3 3 29 2 * node /scripts/jd_wanyiwan.js >> /scripts/logs/jd_wanyiwan.log
3 3 29 2 * node /scripts/jd_washbeans.js >> /scripts/logs/jd_washbeans.log
3 3 29 2 * node /scripts/jd_wwzy.js >> /scripts/logs/jd_wwzy.log
3 3 29 2 * node /scripts/jd_wxBuildActivity.js >> /scripts/logs/jd_wxBuildActivity.log
3 3 29 2 * node /scripts/jd_wxCartKoi.js >> /scripts/logs/jd_wxCartKoi.log
3 3 29 2 * node /scripts/jd_wxCollectCard.js >> /scripts/logs/jd_wxCollectCard.log
3 3 29 2 * node /scripts/jd_wxCollectionActivity.js >> /scripts/logs/jd_wxCollectionActivity.log
3 3 29 2 * node /scripts/jd_wxFansInterActionActivity.js >> /scripts/logs/jd_wxFansInterActionActivity.log
3 3 29 2 * node /scripts/jd_wxGameActivity.js >> /scripts/logs/jd_wxGameActivity.log
3 3 29 2 * node /scripts/jd_wxKnowledgeActivity.js >> /scripts/logs/jd_wxKnowledgeActivity.log
3 3 29 2 * node /scripts/jd_wxMcLevelAndBirthGifts.js >> /scripts/logs/jd_wxMcLevelAndBirthGifts.log
3 3 29 2 * node /scripts/jd_wxSecond.js >> /scripts/logs/jd_wxSecond.log
3 3 29 2 * node /scripts/jd_wxShareActivity.js >> /scripts/logs/jd_wxShareActivity.log
3 3 29 2 * node /scripts/jd_wxShopGift.js >> /scripts/logs/jd_wxShopGift.log
3 3 29 2 * node /scripts/jd_wxSign.js >> /scripts/logs/jd_wxSign.log
3 3 29 2 * node /scripts/jd_wxSignRed.js >> /scripts/logs/jd_wxSignRed.log
3 3 29 2 * node /scripts/jd_wxTeam.js >> /scripts/logs/jd_wxTeam.log
3 3 29 2 * node /scripts/jd_wxUnPackingActivity.js >> /scripts/logs/jd_wxUnPackingActivity.log
3 3 29 2 * node /scripts/jd_wxgame.js >> /scripts/logs/jd_wxgame.log
3 3 29 2 * node /scripts/jd_yaoyao.js >> /scripts/logs/jd_yaoyao.log
3 3 29 2 * node /scripts/jd_yqs.js >> /scripts/logs/jd_yqs.log
3 3 29 2 * node /scripts/jd_zwb.js >> /scripts/logs/jd_zwb.log
3 3 29 2 * node /scripts/jd_zzhb.js >> /scripts/logs/jd_zzhb.log
3 3 29 2 * node /scripts/jd_tchlx.js >> /scripts/logs/jd_tchlx.log
3 3 29 2 * node /scripts/jd_liveLottery.js >> /scripts/logs/jd_liveLottery.log
3 3 29 2 * node /scripts/jd_opencard0615.js >> /scripts/logs/jd_opencard0615.log
3 3 29 2 * node /scripts/jd_medical.js >> /scripts/logs/jd_medical.log
3 3 29 2 * node /scripts/jd_dplhbshop.js >> /scripts/logs/jd_dplhbshop.log
3 3 29 2 * node /scripts/jd_MktV50.js >> /scripts/logs/jd_MktV50.log
3 3 29 2 * node /scripts/jd_sendbeans.js >> /scripts/logs/jd_sendbeans.log
3 3 29 2 * node /scripts/jd_wxSignPoint.js >> /scripts/logs/jd_wxSignPoint.log
#3 3 29 2 * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log
3 3 29 2 * node /scripts/jd_618phone.js >> /scripts/logs/jd_618phone.log
3 3 29 2 * node /scripts/jd_fanV618.js >> /scripts/logs/jd_fanV618.log
3 3 29 2 * node /scripts/jd_dplh0624.js >> /scripts/logs/jd_dplh0624.log
3 3 29 2 * node /scripts/jd_delLjq.js >> /scripts/logs/jd_delLjq.log
3 3 29 2 * node /scripts/jd_code2url.js >> /scripts/logs/jd_code2url.log
3 3 29 2 * node /scripts/jd_dplh0701.js >> /scripts/logs/jd_dplh0701.log
3 3 29 2 * node /scripts/jd_pointExgECard.js >> /scripts/logs/jd_pointExgECard.log
3 3 29 2 * node /scripts/jd_wxCollectionActivity2.js >> /scripts/logs/jd_wxCollectionActivity2.log
3 3 29 2 * node /scripts/jd_wxShopFollowActivity.js >> /scripts/logs/jd_wxShopFollowActivity.log
3 3 29 2 * node /scripts/jd_opencard0705.js >> /scripts/logs/jd_opencard0705.log
3 3 29 2 * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log
3 3 29 2 * node /scripts/jd_dplh0706.js >> /scripts/logs/jd_dplh0706.log
3 3 29 2 * node /scripts/jd_dplh0708.js >> /scripts/logs/jd_dplh0708.log
3 3 29 2 * node /scripts/jd_dplh0710.js >> /scripts/logs/jd_dplh0710.log
3 3 29 2 * node /scripts/jd_mktV50.js >> /scripts/logs/jd_mktV50.log
3 3 29 2 * node /scripts/jd_opencard0715.js >> /scripts/logs/jd_opencard0715.log
3 3 29 2 * node /scripts/jd_dplh0720.js >> /scripts/logs/jd_dplh0720.log
3 3 29 2 * node /scripts/jd_opencard0723.js >> /scripts/logs/jd_opencard0723.log
3 3 29 2 * node /scripts/jd_opencard0724.js >> /scripts/logs/jd_opencard0724.log
3 3 29 2 * node /scripts/jd_dplh0725.js >> /scripts/logs/jd_dplh0725.log
3 3 29 2 * node /scripts/jd_plus2bean.js >> /scripts/logs/jd_plus2bean.log
3 3 29 2 * node /scripts/jd_dplh0801.js >> /scripts/logs/jd_dplh0801.log
3 3 29 2 * node /scripts/jd_mybbphdyh.js >> /scripts/logs/jd_mybbphdyh.log
3 3 29 2 * node /scripts/jd_dplh0806.js >> /scripts/logs/jd_dplh0806.log
3 3 29 2 * node /scripts/jd_cacheIsvToken.js >> /scripts/logs/jd_cacheIsvToken.log
3 3 29 2 * node /scripts/jd_dplh0810.js >> /scripts/logs/jd_dplh0810.log
3 3 29 2 * node /scripts/jd_dplh0809.js >> /scripts/logs/jd_dplh0809.log
3 3 29 2 * node /scripts/jd_drawShopGift.js >> /scripts/logs/jd_drawShopGift.log
3 3 29 2 * node /scripts/jd_dplh0815.js >> /scripts/logs/jd_dplh0815.log
3 3 29 2 * node /scripts/jd_evaluation.js >> /scripts/logs/jd_evaluation.log
3 3 29 2 * node /scripts/jd_818.js >> /scripts/logs/jd_818.log
3 3 29 2 * node /scripts/jd_mybbphdyh2.js >> /scripts/logs/jd_mybbphdyh2.log
3 3 29 2 * node /scripts/jd_dplh0820.js >> /scripts/logs/jd_dplh0820.log
3 3 29 2 * node /scripts/jd_jdgift.js >> /scripts/logs/jd_jdgift.log
3 3 29 2 * node /scripts/jd_yzj.js >> /scripts/logs/jd_yzj.log
3 3 29 2 * node /scripts/jd_kxbbp.js >> /scripts/logs/jd_kxbbp.log
3 3 29 2 * node /scripts/jd_dplh0825.js >> /scripts/logs/jd_dplh0825.log
3 3 29 2 * node /scripts/jd_dplh0830.js >> /scripts/logs/jd_dplh0830.log
3 3 29 2 * node /scripts/jd_dplh0906.js >> /scripts/logs/jd_dplh0906.log
3 3 29 2 * node /scripts/jd_dplh0908.js >> /scripts/logs/jd_dplh0908.log
3 3 29 2 * node /scripts/jd_doudou.js >> /scripts/logs/jd_doudou.log
3 3 29 2 * node /scripts/jd_dplh0910.js >> /scripts/logs/jd_dplh0910.log
3 3 29 2 * node /scripts/jd_dplh0913.js >> /scripts/logs/jd_dplh0913.log
3 3 29 2 * node /scripts/jd_mybbphdyh3.js >> /scripts/logs/jd_mybbphdyh3.log
3 3 29 2 * node /scripts/jd_dplh0915.js >> /scripts/logs/jd_dplh0915.log
3 3 29 2 * node /scripts/jd_dplh0920.js >> /scripts/logs/jd_dplh0920.log
3 3 29 2 * node /scripts/jd_gfjd.js >> /scripts/logs/jd_gfjd.log
3 3 29 2 * node /scripts/jd_dplh1010.js >> /scripts/logs/jd_dplh1010.log
