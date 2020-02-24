<template>
  <div>
      <contact-positions-table
        :title="$t('global.routes.crm.positions')"
        :fields-info="fileteredTableFields"
        :details-loader="detailsLoader"
        :table-data="childrenList(fileteredTableFields, [], 'id', childItemName, 'active')"
        delete-mode="both"
        :item-elements="itemElements"
      ></contact-positions-table>
      <contact-position-details
        :details="details"
        :fields-info="fileteredDetailsFields"
      ></contact-position-details>
      <contact-position-tasks></contact-position-tasks>
  </div>
</template>

<script>
import FieldsInfoMixin from '../../positions/mixins/fields'
import LocalesMixin from '../../positions/mixins/locales'
import ChildElementsMixin from '../../positions/mixins/item-elements'
import ContactPositionsChildMixin from '@/utils/crud/mixins/child'
import ChildrenTable from '@/utils/crud/components/ChildrenTable.vue'
import ChildDetails from '@/utils/crud/components/ChildDetails.vue'
import ItemElements from '@/utils/crud/components/ItemElements.vue'

export default {
  mixins: [
    FieldsInfoMixin,
    LocalesMixin,
    ChildElementsMixin,
    ContactPositionsChildMixin,
  ],
  components: {
    'contact-positions-table': ChildrenTable,
    'contact-position-details': ChildDetails,
    'contact-position-tasks': ItemElements,
  },
}
</script>
