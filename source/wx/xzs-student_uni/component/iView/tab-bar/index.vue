<template>
    <view :class="'i-class i-tab-bar ' + (fixed ? 'i-tab-bar-fixed' : '')">
        <slot></slot>
        <view class="i-tab-bar-list">
            <view
                class="i-tab-bar-layer"
                :data-key="item.key"
                @click="handleClickItem"
                :style="'width: ' + 100 / list.length + '%'"
                v-for="(item, index) in list"
                :key="item.key"
            ></view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    externalClasses: ['i-class'],
    relations: {
        '../tab-bar-item/index': {
            type: 'child',

            linked() {
                this.changeCurrent();
            },

            linkChanged() {
                this.changeCurrent();
            },

            unlinked() {
                this.changeCurrent();
            }
        }
    },
    props: {
        current: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        fixed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeCurrent(val = this.current) {
            let items = this.getRelationNodes('../tab-bar-item/index');
            const len = items.length;

            if (len > 0) {
                const list = [];
                items.forEach((item) => {
                    item.changeCurrent(item.data.key === val);
                    item.changeCurrentColor(this.color);
                    list.push({
                        key: item.data.key
                    });
                });
                this.setData({
                    list: list
                });
            }
        },

        emitEvent(key) {
            this.$emit('change', {
                detail: {
                    key
                }
            });
        },

        handleClickItem(e) {
            const key = e.currentTarget.dataset.key;
            this.emitEvent(key);
        }
    },
    watch: {
        current: {
            handler: function (val = this.current) {
                let items = this.getRelationNodes('../tab-bar-item/index');
                const len = items.length;

                if (len > 0) {
                    const list = [];
                    items.forEach((item) => {
                        item.changeCurrent(item.data.key === val);
                        item.changeCurrentColor(this.color);
                        list.push({
                            key: item.data.key
                        });
                    });
                    this.setData({
                        list: list
                    });
                }
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
