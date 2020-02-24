<template>
  <item-details-container
    :title="$t('title')"
    :fields="fields"
    :basic-information="$t('basicInformation')"
  >
    <v-tab key="positions" ripple>{{ $t('positions') }}</v-tab>
    <v-tab key="comments" ripple>{{ $t('comments') }}</v-tab>
    <!-- Positions -->
    <v-tab-item key="positions">
      <v-card flat>
        <v-card-text>
          <contact-positions
            :exclude="['id', 'contact']"
            path="crm/positions"
            child-item-name="contactPositions"
            fk-name="contact_id"
          ></contact-positions>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <!-- Comments -->
    <v-tab-item key="comments">
      <v-card flat>
        <v-card-text>
          <contact-comments
            :exclude="['id', 'contact']"
            path="crm/contact-comments"
            child-item-name="contactComments"
            fk-name="contact_id"
          ></contact-comments>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </item-details-container>
</template>

<script>
import ItemDetailsContainer from '@/utils/crud/components/ItemDetailsContainer.vue'
import ItemDetailsContainerMixin from '@/utils/crud/mixins/item-details-container'
import ContactPositions from './ContactPositions.vue'
import ContactComments from './ContactComments.vue'

export default {
  mixins: [ItemDetailsContainerMixin],
  components: {
    ItemDetailsContainer,
    ContactPositions,
    ContactComments,
  },
  created () {
    this.setIdColumn('id')
    this.setChildItemsMapping([
      {
        name: 'contactPositions',
        objName: 'positions',
      },
      {
        name: 'contactComments',
        objName: 'comments',
      },
    ])
  },
  i18n: {
    messages: {
      pl: {
        title: 'Szczegóły firmy',
        basicInformation: 'Dane podstawowe',
        positions: 'Stanowiska',
        comments: 'Komentarze',
        files: 'Pliki',
      },
      en: {
        title: 'Contact details',
        basicInformation: 'Basic information',
        positions: 'Positions',
        comments: 'Comments',
        files: 'Files',
      },
    },
  },
}

</script>
