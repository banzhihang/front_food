<view class="list"><view class="{{['tips',(tipShow)?'tips-ani':'']}}">为您更新了10条最新新闻动态</view><uni-section vue-id="7d5df410-1" title="最热商品" type="line" bind:__l="__l" vue-slots="{{['default']}}"><button data-event-opts="{{[['tap',[['select',['$event']]]]]}}" class="button-box" bindtap="__e">切换视图</button></uni-section><unicloud-db generic:scoped-slots-default="list-unicloud-db-default" class="vue-ref" vue-id="7d5df410-2" options="{{formData}}" collection="{{collection}}" field="{{field}}" data-ref="udb" data-event-opts="{{[['^load',[['load']]]]}}" bind:load="__e" bind:__l="__l" vue-slots="{{['default']}}"></unicloud-db></view>