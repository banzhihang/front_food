<view class="food-list data-v-d5d31d40"><uni-list vue-id="d5d344ac-1" class="data-v-d5d31d40" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{$root.l0}}" qq:for-item="food" qq:for-index="__i0__" qq:key="id"><uni-list-item vue-id="{{('d5d344ac-2-'+__i0__)+','+('d5d344ac-1')}}" title="{{food.$orig.name}}" thumb="{{food.$orig.first_image}}" to="../../pages/index/food-details" class="data-v-d5d31d40" bind:__l="__l" vue-slots="{{['header','body','footer']}}"><view class="uni-thumb food-picture data-v-d5d31d40" slot="header"><image src="{{food.$orig.first_image}}" mode="aspectFill" class="data-v-d5d31d40"></image></view><view class="middle data-v-d5d31d40" slot="body"><view class="middle-title data-v-d5d31d40"><text class="data-v-d5d31d40">{{food.$orig.name}}</text></view><view class="middle-rate data-v-d5d31d40"><uni-rate vue-id="{{('d5d344ac-3-'+__i0__)+','+('d5d344ac-2-'+__i0__)}}" value="{{food.m0}}" size="0.5" allowHalf="{{true}}" readonly="{{true}}" class="data-v-d5d31d40" bind:__l="__l"></uni-rate><text class="score-text data-v-d5d31d40">{{food.$orig.score}}</text></view><view class="middle-desc data-v-d5d31d40"><text class="data-v-d5d31d40">{{food.$orig.desc}}</text></view></view><view class="want-eat data-v-d5d31d40" slot="footer"><uni-tag class="want-eat-btn data-v-d5d31d40" vue-id="{{('d5d344ac-4-'+__i0__)+','+('d5d344ac-2-'+__i0__)}}" text="想吃" type="warning" circle="{{true}}" bind:__l="__l"></uni-tag></view></uni-list-item></block></uni-list></view>