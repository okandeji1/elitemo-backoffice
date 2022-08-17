<template>
  <main>
    <lazy-car-user-header title="Dealers" icon="transaction-list" />

    <div id="transaction-filter" class="m-4 bg-primary-btn-tert">
      <div class="border-b border-primary-divider">
        <div class="px-4 py-2">
            <!--FIXME:  justify-end -->
          <div class="flex items-center w-full my-2">
            <lazy-car-export-excel
              :csvData="{
                records: dealers,
                fileName: 'dealers',
                source: 'DEALERS',
                disabled: dealers ? false : true,
              }"
            />

            <a-button class="ml-2 text-white bg-primary-m-warning"> Add  </a-button>
          </div>
        </div>
      </div>
    </div>

    <div class="m-4 transaction-table">
      <Lazy-car-base-input placeholder="Search" class="w-2/4 mb-3 md:w-1/4" />

      <lazy-car-skeleton-table v-if="isLoading" :columns="columns"></lazy-car-skeleton-table>
      <a-table
        :columns="columns"
        v-if="!isLoading"
        :data-source="dealers"
        :scroll="{ x: 'calc(700px + 50%)' }"
        :pagination="{ defaultPageSize: 10, size: 'small', showSizeChanger: true, pageSizeOptions: ['10', '20', '50', '100'] }"
        bordered
      >
        <template slot="name" slot-scope="index, record">
          <span class="cursor-pointer text-primary-bg-sec">
            {{ record.name }}
          </span>
        </template>
        <template slot="loadUnload" slot-scope="index, record">
          <div>
            <button
              class="w-full px-1 mb-1 text-xs text-white rounded-sm bg-primary-m-danger"
            >
              delete
            </button>
            <button
              class="w-full px-1 text-xs text-white rounded-sm bg-primary-m-success"
            >
              edit
            </button>
          </div>
        </template>
      </a-table>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
watch: {
    dealers() {
      if (this.dealers) {
        this.isLoading = false;
      }
    },
  },

  computed: {
    ...mapGetters({
      dealers: 'dealer/getDealers',
      loggedInUser: 'loggedInUser',
    }),
  },

  data() {
    return {
      isLoading: true,
      columns: [
        {
          name: 'name',
          dataIndex: 'name',
          key: 'name',
          title: 'Name',
          scopedSlots: { customRender: 'name' },
        },
        { name: 'phone', dataIndex: 'phone', key: 'phone', title: 'Phone', scopedSlots: { customRender: 'phone' } },
        {
          name: 'address',
          dataIndex: 'address',
          key: 'address',
          title: 'Address',
          scopedSlots: { customRender: 'address' },
        },
        {
          title: 'Action',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },

  methods: {
    ...mapActions({}),
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.ant-input {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum', 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  transition: all 0.3s;
}
.ant-form-item-label,
.ant-form-item-control-wrapper {
  display: block;
  width: 15rem;
}
.ant-calendar-picker {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum', 'tnum';
  position: relative;
  display: inline-block;
  outline: none;
  cursor: text;
  transition: opacity 0.3s;
  width: 100%;
}
// .ant-select-selection {
//   display: block;
//   box-sizing: border-box;
//   background-color: #1a2633;
//   border: 1px solid #d9d9d9;
//   border-top-width: 1.02px;
//   border-radius: 0.5rem;
//   outline: none;
//   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

/* @screen md {
  .ant-form {
    width: 35rem;
  }
} */

.form-row {
  border-bottom: 1px solid #dbdada;
  min-height: 22px;
}

.form-row .control-label {
  max-width: 35%;
  text-align: right;
  font-size: 14px;
}

.form-row label,
.form-row .periods-container {
  flex: 1;
}

.ant-select-arrow {
  @apply fill-current text-primary-default-main;
}

.checkbox-container {
  max-width: 530px;
}

.radio-button > div {
  flex-basis: 33.3%;
}

.submitPlace {
  background: #1a2633;
}

.no-results-container .no-results-header {
  background: #eeb941;
  color: #000;
  padding: 5px 10px;
  border-bottom: 1px solid #f4f4f4;
  font-size: 12px;
}
.no-results-container .no-results-body {
  background: #1a2633;
  color: #fff;
  padding: 14px 10px;
  font-size: 12px;
}

.h-88 {
  height: 88%;
}

.date-transaction {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 0 15px;
  align-items: center;
  height: 80px;
  color: #374562;
  font-weight: 600;
  // background-color: #3f5072;

  @apply bg-primary-btn-tert text-primary-default-main;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: unset;
  height: 100%;
  width: 100%;
}

.types .ant-select-selection {
  // border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-radius: 0.5rem;
  @apply bg-primary-input;
}

.t-head {
  background-color: #303a4d;
  border-right: 1px solid #374562;
  color: #fff;
  padding: 0 8px;
  text-align: left;
  font-size: 13px;
  height: 30px;
}

.t-row {
  color: #374562;
  font-size: 13px;
  font-weight: 600;
  height: 38px;
  background: #eef2fa;
  border-right: 1px solid #bec7da;
  border-bottom: 1px solid #bec7da;
}

.t-row > td {
  border-right: 1pt solid #d5dbe5;
  border-bottom: 1pt solid #d5dbe5;
  color: #374562;
  padding: 6px 8px;
}

.t-row:nth-child(odd) {
  background: #eef2fa;
}

.browny {
  background: #deb886;
  border: 1px solid #deb886;
  color: #213243;
}

.no-trans {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  font-size: 15px;
}

.trans-note {
  font-size: 13px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 15px;
  // background: #3f5072;
  color: #fff;
  @apply bg-primary-bg-sec;
}

.td-skele {
  background-color: #fff;
  border-right: 1pt solid #d5dbe5;
  border-bottom: 1pt solid #d5dbe5;
  color: #374562;
  font-weight: 500;
  padding: 6px 8px;
}

.tran-skele {
  display: flex;
  flex-direction: row;
  // justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  min-height: 46px;
}

.skele-bar {
  width: 130px;
  background-color: #f2f2f2;
  height: 10px;
  border-radius: 2px;
  overflow: hidden;
}

.skele-bar::before {
  display: block;
  content: '';
  width: 130px;
  height: 10px;
  background: linear-gradient(90deg, #dedcdc, #b2b2b2, #dedcdc);
  transform: translateX(-100%);
  animation-name: heart;
  animation-delay: 0.25s;
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
}

@keyframes heart {
  40%,
  to {
    transform: translateX(100%);
  }
}
</style>
