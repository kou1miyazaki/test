import { NgModule } from '@angular/core';
import { StaffPopoverComponent } from './staff-popover/staff-popover';
import { SpeicifyingPeriodComponent } from './speicifying-period/speicifying-period';
import { RegisterUserComponent } from './register-user/register-user';
import { DeletingUserRegistrationPopoverComponent } from './deleting-user-registration-popover/deleting-user-registration-popover';
import { UserSortingOrderPopoverComponent } from './user-sorting-order-popover/user-sorting-order-popover';
import { FacilityPopoverComponent } from './facility-popover/facility-popover';
import { FilterByYamatoLanguageTagPopoverComponent } from './filter-by-yamato-language-tag-popover/filter-by-yamato-language-tag-popover';
import { FilterBySeriesPopoverComponent } from './filter-by-series-popover/filter-by-series-popover';
import { ContentsSortingOrderPopoverComponent } from './contents-sorting-order-popover/contents-sorting-order-popover';
@NgModule({
	declarations: [StaffPopoverComponent,
    SpeicifyingPeriodComponent,
    RegisterUserComponent,
    DeletingUserRegistrationPopoverComponent,
    UserSortingOrderPopoverComponent,
    FacilityPopoverComponent,
    FilterByYamatoLanguageTagPopoverComponent,
    FilterBySeriesPopoverComponent,
    ContentsSortingOrderPopoverComponent],
	imports: [],
	exports: [StaffPopoverComponent,
    SpeicifyingPeriodComponent,
    RegisterUserComponent,
    DeletingUserRegistrationPopoverComponent,
    UserSortingOrderPopoverComponent,
    FacilityPopoverComponent,
    FilterByYamatoLanguageTagPopoverComponent,
    FilterBySeriesPopoverComponent,
    ContentsSortingOrderPopoverComponent]
})
export class ComponentsModule {}
