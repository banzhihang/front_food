<view class="content u-skeleton data-v-4227a229"><view class="header data-v-4227a229"><view class="food-picture uni-thumb data-v-4227a229"><image src="{{food.first_image}}" mode="aspectFill" class="data-v-4227a229"></image></view><view class="data-v-4227a229"><text class="food-name data-v-4227a229">{{food.foodName}}</text><view class="food-time data-v-4227a229"><u-icon class="food-time-img data-v-4227a229" vue-id="42278e73-1" name="clock" color="#1a56b4" size="25" bind:__l="__l"></u-icon><text class="data-v-4227a229">{{food.add_time}}</text></view><view class="food-address data-v-4227a229"><u-icon class="food-address-img data-v-4227a229" vue-id="42278e73-2" name="map" color="#1a56b4" size="26" bind:__l="__l"></u-icon><text class="data-v-4227a229">{{food.address}}</text></view><view class="food-want-eated data-v-4227a229"><view class="food-want data-v-4227a229"><u-button vue-id="42278e73-3" type="default" plain="{{true}}" custom-style="{{customStyle}}" hair-line="{{false}}" ripple="{{true}}" ripple-bg-color="rgba(236,159,58,0.5)" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><u-icon vue-id="{{('42278e73-4')+','+('42278e73-3')}}" name="bookmark" color="#EC9F3A" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="font-size:29rpx;" class="data-v-4227a229">想吃</text></u-button></view><view class="food-eated data-v-4227a229"><u-button vue-id="42278e73-5" type="default" plain="{{true}}" custom-style="{{customStyle}}" hair-line="{{false}}" ripple="{{true}}" ripple-bg-color="rgba(236,159,58,0.5)" data-event-opts="{{[['^click',[['e0']]]]}}" bind:click="__e" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><u-icon vue-id="{{('42278e73-6')+','+('42278e73-5')}}" name="star" color="#EC9F3A" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="font-size:29rpx;" class="data-v-4227a229">吃过</text></u-button><u-popup bind:input="__e" vue-id="42278e73-7" mode="bottom" length="100%" close-icon-pos="top-left" closeable="{{true}}" close-icon-size="40" value="{{isShowShortCommentEdit}}" data-event-opts="{{[['^input',[['__set_model',['','isShowShortCommentEdit','$event',[]]]]]]}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><short-comment-edit vue-id="{{('42278e73-8')+','+('42278e73-7')}}" class="data-v-4227a229" bind:__l="__l"></short-comment-edit></u-popup></view></view></view></view><view class="score data-v-4227a229"><u-card style="background:rgba(0,0,0,0.02);" vue-id="42278e73-9" title="吃小猪评分" box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx" border-radius="20" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['head','body']}}"><view class="score-head data-v-4227a229" slot="head"><u-icon style="margin-right:10rpx;" vue-id="{{('42278e73-10')+','+('42278e73-9')}}" name="https://hotschool.ltd/score.png" color="#1a56b4" size="38" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="margin-top:-49rpx;display:block;margin-left:40rpx;" class="data-v-4227a229">吃小猪评分</text><text class="score-head-right data-v-4227a229" style="margin-top:-4rpx;">{{food.vote_number+"人评分"}}</text></view><view class="score-body data-v-4227a229" slot="body"><food-rate vue-id="{{('42278e73-11')+','+('42278e73-9')}}" foodRate="{{food.rate_score}}" class="data-v-4227a229" bind:__l="__l"></food-rate></view></u-card></view><view class="desc data-v-4227a229"><u-card vue-id="42278e73-12" title="简介" border="{{false}}" head-border-bottom="{{false}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['head','body']}}"><view class="desc-head data-v-4227a229" slot="head"><u-icon style="margin-right:10rpx;" vue-id="{{('42278e73-13')+','+('42278e73-12')}}" name="https://hotschool.ltd/brief.png" color="#1a56b4" size="30" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="margin-top:-44rpx;display:block;margin-left:40rpx;" class="data-v-4227a229">简介</text></view><view class="desc-body data-v-4227a229" slot="body"><text class="data-v-4227a229">{{food.desc}}</text></view></u-card></view><view class="food-photo data-v-4227a229"><u-card vue-id="42278e73-14" title="图片" border="{{false}}" head-border-bottom="{{false}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['head','body']}}"><view class="photo-head data-v-4227a229" slot="head"><u-icon style="margin-right:10rpx;" vue-id="{{('42278e73-15')+','+('42278e73-14')}}" name="https://hotschool.ltd/photo.png" color="#1a56b4" size="32" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="margin-top:-46rpx;display:block;margin-left:40rpx;" class="data-v-4227a229">图片</text><text data-event-opts="{{[['tap',[['e1',['$event']]]]]}}" class="photo-head-right data-v-4227a229" style="margin-top:-4rpx;" bindtap="__e">{{"全部"+photoNum+" >"}}</text><u-popup bind:input="__e" vue-id="{{('42278e73-16')+','+('42278e73-14')}}" mode="bottom" length="100%" close-icon-pos="top-left" closeable="{{true}}" close-icon-size="30" value="{{isShowAllPhoto}}" data-event-opts="{{[['^input',[['__set_model',['','isShowAllPhoto','$event',[]]]]]]}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><photo-list vue-id="{{('42278e73-17')+','+('42278e73-16')}}" foodId="{{food.id}}" class="data-v-4227a229" bind:__l="__l"></photo-list></u-popup></view><view slot="body" class="data-v-4227a229"><u-swiper vue-id="{{('42278e73-18')+','+('42278e73-14')}}" list="{{food.image}}" mode="none" effect3d="{{true}}" effect3d-previous-margin="40" duration="1000" class="data-v-4227a229" bind:__l="__l"></u-swiper></view></u-card></view><view class="short-comment data-v-4227a229"><u-card style="background:rgba(0,0,0,0.02);" vue-id="42278e73-19" title="短评" box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 5rpx 5rpx" head-border-bottom="{{false}}" foot-border-top="{{false}}" border-radius="20" foot-style="{{cardStyle}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['head','body','foot']}}"><view class="comment-head data-v-4227a229" slot="head"><u-icon style="margin-right:10rpx;" vue-id="{{('42278e73-20')+','+('42278e73-19')}}" name="https://hotschool.ltd/short-comment.png" color="#1a56b4" size="30" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="margin-top:-48rpx;display:block;margin-left:40rpx;" class="data-v-4227a229">短评</text><text data-event-opts="{{[['tap',[['e2',['$event']]]]]}}" class="comment-head-right data-v-4227a229" style="margin-top:-9rpx;" bindtap="__e">{{$root.m0}}</text></view><view slot="body" class="data-v-4227a229"><short-comment vue-id="{{('42278e73-21')+','+('42278e73-19')}}" shortCommentList="{{food.short_comment}}" class="data-v-4227a229" bind:__l="__l"></short-comment></view><view class="short-comment-foot data-v-4227a229" slot="foot" data-event-opts="{{[['tap',[['e3',['$event']]]]]}}" bindtap="__e"><text style="color:#000000;" class="data-v-4227a229">{{"查看全部"+food.short_comment_number+"条短评"}}</text><text class="short-comment-foot-arrow data-v-4227a229" style="color:#000000;">></text></view></u-card><u-popup bind:input="__e" vue-id="42278e73-22" mode="bottom" length="100%" close-icon-pos="top-left" closeable="{{true}}" close-icon-size="30" value="{{isShowAllShortComment}}" data-event-opts="{{[['^input',[['__set_model',['','isShowAllShortComment','$event',[]]]]]]}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><all-short-comment vue-id="{{('42278e73-23')+','+('42278e73-22')}}" foodId="{{food.id}}" class="data-v-4227a229" bind:__l="__l"></all-short-comment></u-popup></view><view class="discuss data-v-4227a229"><u-card style="background:rgba(0,0,0,0.02);" vue-id="42278e73-24" title="讨论" box-shadow="rgba(0, 0, 0, 0.1) 1rpx 1rpx 3rpx 3rpx" head-border-bottom="{{false}}" foot-border-top="{{false}}" border-radius="20" foot-style="{{cardStyle}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['head','body','foot']}}"><view class="discuss-head data-v-4227a229" slot="head"><u-icon style="margin-right:10rpx;" vue-id="{{('42278e73-25')+','+('42278e73-24')}}" name="https://hotschool.ltd/discuss.png" color="#1a56b4" size="35" class="data-v-4227a229" bind:__l="__l"></u-icon><text style="margin-top:-48rpx;display:block;margin-left:40rpx;" class="data-v-4227a229">讨论</text><text data-event-opts="{{[['tap',[['e4',['$event']]]]]}}" class="discuss-head-right data-v-4227a229" style="margin-top:-7rpx;" bindtap="__e">{{''+$root.m1}}</text></view><view slot="body" class="data-v-4227a229"><discuss vue-id="{{('42278e73-26')+','+('42278e73-24')}}" dissCussList="{{food.discuss}}" class="data-v-4227a229" bind:__l="__l"></discuss></view><view class="discuss-foot data-v-4227a229" slot="foot" data-event-opts="{{[['tap',[['e5',['$event']]]]]}}" bindtap="__e"><text style="color:#000000;" class="data-v-4227a229">{{"查看全部"+food.discuss_number+"个讨论"}}</text><text class="discuss-foot-arrow data-v-4227a229" style="color:#000000;">></text></view></u-card><u-popup bind:input="__e" vue-id="42278e73-27" mode="bottom" length="100%" close-icon-pos="top-left" closeable="{{true}}" close-icon-size="30" value="{{isShowAllDiscuss}}" data-event-opts="{{[['^input',[['__set_model',['','isShowAllDiscuss','$event',[]]]]]]}}" class="data-v-4227a229" bind:__l="__l" vue-slots="{{['default']}}"><all-discuss vue-id="{{('42278e73-28')+','+('42278e73-27')}}" foodId="{{food.id}}" class="data-v-4227a229" bind:__l="__l"></all-discuss></u-popup></view></view>