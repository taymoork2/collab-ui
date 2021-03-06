# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.1.0](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@11.0.0...@collab-ui/react@11.1.0) (2019-01-23)


### Bug Fixes

* **ButtonGroup:** fix error caused by mapping null children ([8c8d21a](https://github.com/collab-ui/collab-ui/commit/8c8d21a))
* **CallControl:** fix colors for call controls ([cbfba8c](https://github.com/collab-ui/collab-ui/commit/cbfba8c))


### Features

* **Avatar:** add in call, in meeting, presenting types ([90c1a60](https://github.com/collab-ui/collab-ui/commit/90c1a60))





## [11.0.1](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@11.0.0...@collab-ui/react@11.0.1) (2019-01-16)

**Note:** Version bump only for package @collab-ui/react





# [11.0.0](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@10.2.3...@collab-ui/react@11.0.0) (2019-01-16)


### Features

* **ButtonGroup:** adjust cloning so Buttons can be wrapped ([3f11979](https://github.com/collab-ui/collab-ui/commit/3f11979))


### BREAKING CHANGES

* **ButtonGroup:** Coachmark - change buttonChildren to buttonProps to include all props to be passed to internal button
Popover - change to React.Fragment instead of span (adjust app css if necessary)
Tooltip - add popoverProps to pass any popoverProps to Popover instead of passing extra props to Popover
Coachmark - change to React.Fragment instead of span (adjust app css if necessary)





## [10.2.3](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@10.2.2...@collab-ui/react@10.2.3) (2019-01-11)

**Note:** Version bump only for package @collab-ui/react





## [10.2.2](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@9.11.0...@collab-ui/react@10.2.2) (2019-01-10)

**Note:** Version bump only for package @collab-ui/react





## [10.2.1](https://github.com/collab-ui/collab-ui/compare/@collab-ui/react@9.9.0...@collab-ui/react@10.2.1) (2019-01-10)

**Note:** Version bump only for package @collab-ui/react





## 10.2.0 (2019-01-09)

**Note:** Version bump only for package
@collab-ui/react





## 10.1.1 (2019-01-04)


### Bug Fixes

* **CallControl:** add 'participant-list' as type in CallControl





# 10.1.0 (2018-12-20)


### Bug Fixes

* **CallControl:** add additional types for CallControl


### Features

* **CallControl:** add iconColor prop to CallControl
* **TopbarMobile:** add prop for closeOnClick





## 10.0.9 (2018-12-17)


### Bug Fixes

* **SideNav:** reverse SideNav Arrows





## 10.0.8 (2018-12-11)


### Bug Fixes

* **SideNav:** fix lint error in SideNav





## 10.0.7 (2018-12-07)


### Bug Fixes

* **SideNav:** update internal state based on props change





## 10.0.6 (2018-12-06)


### Bug Fixes

* **react-examples:** correct component names for icon, space list, tooltip





## 10.0.5 (2018-12-05)


### Bug Fixes

* **react-examples:** create seperate sections for examples without unnecessary styling





## 10.0.4 (2018-11-28)


### Bug Fixes

* **contentItem:** fix for tall images with FileContentItem





## 10.0.3 (2018-11-21)


### Bug Fixes

* **Avatar:** render avatar if title is made of only spaces





## 10.0.2 (2018-11-19)


### Bug Fixes

* **Avatar:** fix to render avatar image on SSR applications
* **Button:** componentDidUpdate - check previous focus before setting button focus





## 10.0.1 (2018-11-16)


### Bug Fixes

* **ContentItem:** update sixteenNine file example





# 10.0.0 (2018-11-15)


### Features

* **React:** update to version 16


### BREAKING CHANGES

* **React:** update to React v16, this package will no longer work with v15





# 9.11.0 (2018-11-12)


### Features

* **Modal:** remove content—left and content—right for dialog update





## 9.10.5 (2018-11-09)


### Bug Fixes

* **contentItem:** add text overflow for chat title and file subtitle, omit gifIcon prop, add position relative





## 9.10.4 (2018-11-07)


### Bug Fixes

* **examples:** update publish to create examples





## 9.10.3 (2018-11-07)


### Bug Fixes

* **examples:** update scripts for new json format





## 9.10.2 (2018-11-06)


### Bug Fixes

* **ContentItem:** add onClick for image, gif icon, failedText, loadingText, findAspect(), title overflow





## 9.10.1 (2018-11-02)


### Bug Fixes

* **Popover:** add back None trigger option removed by merge





# 9.10.0 (2018-11-01)


### Bug Fixes

* **Popover:** change trigger logic for adjusted prop value


### Features

* **Input:** added optional Icon node prop
* **Popover:** add initial open trigger
* **Popover:** add startOpen prop to initialize Popover as open





# 9.9.0 (2018-10-31)


### Features

* **list:** add wrap prop to List





## 9.8.1 (2018-10-29)


### Bug Fixes

* **Topbar:** return when child is null, instead of throwing error





# 9.8.0 (2018-10-12)


### Bug Fixes

* **Topbar:** remove row class


### Features

* **contrast:** displaying contrast versions in the docs
* **SideNav:** add ability to pass in node for expandable section





## 9.7.3 (2018-10-11)


### Bug Fixes

* **avatar:** add hover/pressed states when clickable





## 9.7.2 (2018-10-04)


### Bug Fixes

* **TopBar:** remove row class for alignment issues when TopBarNav not present





## 9.7.1 (2018-10-01)


### Bug Fixes

* **Button:** prevent active styles if disabled





# 9.7.0 (2018-09-26)


### Features

* **ContentItem:** add ContentItem component





# 9.6.0 (2018-09-19)


### Bug Fixes

* **TimePicker:** call onChange callback when new time is typed


### Features

* **popover:** add custom hover delay





# 9.5.0 (2018-09-14)


### Features

* **ListItemMeeting:** add prop to overwrite default Event Overlay props





# 9.4.0 (2018-09-12)


### Bug Fixes

* **AlertCall:** allow id prop to be applied without modification
* **ListItem:** allow id prop to be applied without modification
* **ListItemHeader:** allow id prop to be applied without modification
* **ListItemHeader:** allow subcomponents of Header to be interacted with
* **ListItemMeeting:** allow id prop to be applied without modification
* **SelectOption:** allow id prop to be applied without modification
* **SpaceListItem:** allow id prop to be applied without modification
* **SpaceListMeeting:** allow id prop to be applied without modification
* **SpaceListMeeting:** change attendees interaction to hover


### Features

* **Avatar:** add isDecrypting prop
* **ComboBox:** allow ListItemHeader to be passed as child
* **EventOverlay:** add props to contain content in document/overflow
* **SpaceListItem:** add isDecrypting prop





## 9.3.2 (2018-09-07)


### Bug Fixes

* **Popover:** clear timeout on mouse leave





## 9.3.1 (2018-09-05)


### Bug Fixes

* **TimePicker:** switch from defaultValue to value
* **TimePicker:** update callback function in setstate





# 9.3.0 (2018-09-03)


### Bug Fixes

* **ButtonGroup:** change icon-flag_12 to icon-flag_16
* **ButtonGroup:** move className prop after type
* **ButtonGroup:** style moved to className instead of inline


### Features

* **ButtonGroup:** add default type prop set to ' ', remove trimStart from lodash imports
* **ButtonGroup:** add pill prop to ButtonGroup, replace trimStart with substr
* **ButtonGroup:** move border-radius to style sheet
* **chips:** add new chip component





# 9.2.0 (2018-08-27)


### Bug Fixes

* **EditableTextfield:** persist event


### Features

* **Popover:** on hover popover will remain open if children are hovered





# 9.1.0 (2018-08-27)


### Bug Fixes

* **listItemMeeting:** switch inline style to classname
* **ListItemMeeting:** add date and status color prop
* **ListItemMeeting:** remove changes ListItemSection, add props: marginLeft, marginRight prop, dateColor
* **ListItemMeeting:** show spacing when inProgress and date
* **ListSeparator:** add lineColor, textPadding, children, & textColor props, create test file with tests
* **ListSeparator:** add margin prop, fix ternary, add css variable
* **ListSeparator:** fix props to spread
* **ListSeparator:** replace css variable to current color
* **ListSeparator:** set focus on alphakey


### Features

* **ListItemMeeting:** add type prop





# 9.0.0 (2018-08-24)


### Bug Fixes

* **EventOverlay:** allow inputs with esc/enter key events


### Code Refactoring

* **EditableTextField:** remove console log


### BREAKING CHANGES

* **EditableTextField:** EditTextfield now return (event {value}) from handleDoneEditingfunction.





# 8.6.0 (2018-08-16)


### Features

* **Avatar:** add notification badge
* **MenuItem:** pass value to onClick handler
* **ModalHeader:** add message prop and styling


### Reverts

* **cache:** change cache version to 1.1





# 8.5.0 (2018-08-10)


### Bug Fixes

* **EditableTextfield:** allow empty value for EditableTextfield
* **EditableTextfield:** update CR feedback


### Features

* **Spinner:** add checkmark to spinner if percentage is 100 and showCheck prop is true





## 8.4.2 (2018-08-07)


### Bug Fixes

* **Select:** add value prop, fix onSelect function





## 8.4.1 (2018-08-03)


### Bug Fixes

* **CallControl:** add two other icon sizes (10,16)
* **CallControl:** remove static logic, add iconSize prop
* **MenuItem:** add separate menu header classname





# 8.4.0 (2018-08-02)


### Bug Fixes

* **ComboBox:** change to Component, modify ref definition
* **SpaceListItem:** add regex escape for special characters


### Features

* **ComboBox:** ComboBox component implementation Phase-1/Phase-2





# 8.3.0 (2018-07-27)


### Features

* **Menu:** add ability to customize MenuItems by adding new SubMenu component
* **SubMenu:** add ability to pass in customNode





# 8.2.0 (2018-07-24)


### Bug Fixes

* **Popover:** add onClose function to Popover to fix duplicate close prop
* **Popover:** change wrapper element of Popover to span


### Features

* **Avatar:** add theme prop and dark theme example





# 8.1.0 (2018-07-23)


### Features

* **EditableTextfield:** allow classes and props to be passed to internal components
* **ListItem:** pass props down in ListItem





## 8.0.3 (2018-07-20)


### Bug Fixes

* **EventOverlay:** remove unset property from maxWidth/maxHeight for browser compatibility
* **Popover:** remove onBlur handler when Popover is set to Click





## 8.0.2 (2018-07-20)


### Bug Fixes

* **ActivityButton:** remove icon aria-label/title
* **avatar:** state is not updated on avatarUrl change
* **EventOverlay:** dynamic arrow position based on anchor size in relation to container size
* **Popover:** add doesAnchorToggle prop to Popover
* **Tooltip:** add otherProps passthrough to EventOverlay





## 8.0.1 (2018-07-14)


### Bug Fixes

* **utils:** move utils to shared folder





# 8.0.0 (2018-07-14)


### Bug Fixes

* **Button:** add removeStyle prop to Button component
* **Coachmark:** set isOpen state to false when prop changes to false
* **EventOverlay:** remove keyup event handler if allowClickAway is false
* **Icon:** change Icon onClick prop to mimic Avatar onClick prop


### Features

* **Avatar:** add onClick prop to wrap Avatar in button
* **DatePicker:** DatePicker component implementation
* **Icon:** add clear button functionality


### BREAKING CHANGES

* **Icon:** Icon isClickable prop has been removed and replaced with onClick. Remove isClickable prop.
* **Button:** Behavior of color="none" prop has changed. "removeStyle" prop now removes all button styles. color="none" prop only removes color styling. size="none" prop only removes size.





# 7.14.0 (2018-07-12)


### Bug Fixes

* **SpaceListMeeting:** change join button to proper size


### Features

* **Alerts:** add props to change ariaLabel
* **Button:** add size prop/default for button





## 7.13.1 (2018-07-06)


### Bug Fixes

* **ModalHeader:** allow passing of children





# 7.13.0 (2018-07-06)


### Features

* **ModalHeader:** allow ModalHeader to be passed into Modal





## 7.12.1 (2018-07-03)


### Bug Fixes

* **Input:** remove required name prop, rename id prop
* **TimePicker:** add inputId prop or create unique one





# 7.12.0 (2018-06-29)


### Bug Fixes

* **Coachmark:** made allowClickAway prop changeable
* **Icon:** change method of creating unique Id's
* **Popover:** handle anchor event handlers within Popover
* **Topbar:** add branchAnchorElement prop for wrapping brand logo


### Features

* **DatePicker:** Datepicker component - Phase 1





# 7.11.0 (2018-06-27)


### Bug Fixes

* **ListItem:** allow EventOverlay as child with ListItemSections
* **lodash:** destructured required lodash functions
* **SpaceListMeeting:** added isBold prop for Header
* **SpaceListMeeting:** typo


### Features

* **EventOverlay:** horizontal dynamic positioning update
* **Link:** created Link component/examples/tests
* **Menu:** Added shouldCloseMenu functionality within Menu

## Change Log
All notable changes to this project will be documented in this file.





# 7.10.0 (2018-6-20)

### Features

* **ListItemMeeting**: component created
* **CompositeAvatar**: added size 84
* **ButtonGroup**:
  * ButtonGroup implementation
  * Added highlightSelected and justified prop
* **Icon**: added Icon type
* **Avatar**: added logic for 40px Self Avatar

### Bug Fixes

* **ListItemMeeting**: refined examples
* **SpaceListMeeting**: stop event propagation
* **ButtonGroup**: change type to dark
* **Button**: loading reverted
* **ListItem**: add Title Prop to ListItem





# 7.9.0 (2018-6-13)

### Features

* **Avatar**: add self type





# 7.8.0 (2018-6-11)

### Features

* **AlertMeeting**: Add onClick handler and make snooze button optional.
* **Coachmark**: added base implementation

### Bug Fixes

* **Icon**: change error to warning
* **List**: Made initial focus function optional
* **ListItemHeader**: clickable children
* **Avatar**: trim title added





# 7.7.0 (2018-6-8)

### Features

* **EventOverlay**: Handling closeOnClick in bubble phase
* **AlertMeetingContainer**: Changed AlertMeetingContainer to accept alertList array prop.
* **AlertCallContainer**: Changed AlertCallContainer to accept alertList array prop.





# 7.6.0 (2018-6-6)

### Features

* **avatar**: add avatar size options

### Bug Fixes

* **AlertCallContainer**: add avatar support
* **Avatar**:
  * fixed className in img--hidden
  * remove hidden class
  * remove array of images returning





# 7.5.0 (2018-6-5)

### Features

* **SubMenu**: add SubMenu Component
* **Menu**: Add separator prop in menuItem
* **ListItem**: Added an additional prop to display separator in ListItem
* **CallMeetingContainer**: Initial Implementation
* **AlertContainer**: Repurpose AlertContainer for displaying Alerts
* **AlertCallContainer**: Intitial implementation AlertCallContainer
* **SpaceListItem**: added filter,search, and tests
* **EventOverlay**: Adding global click listener with bubble phase
* **SocialList**:
  * add social list
  * update footer component with social list component

### Bug Fixes

* **icon**: create icon examples
* **spacelistmeeting**: change header/subheader to nodes
* **SpaceListItem**: syntax formatting





## 7.4.1 (2018-5-31)

### Bug Fixes

* **Input**: add email type and return event instead of value
* **build**: fix build scripts





# 7.4.0 (2018-5-31)

### Features

* **EditableTextfield**: Added test cases for key handling
* **AlertCall**: Added device selection list.

### Build

* **es**: created ES module directory and cleaned scripts

### Bug Fixes

* **List**: make type cloning conditional
* **SpaceMeeting**: allow avatar to be passed in





# 7.3.0 (2018-5-23)

### Features

* **Modal**: add renderTo Prop
* **Avatar**:
  * Changing xlarge avatar size
  * Changed default values
  * Review comments fixed
  * Sizing avatar based with ems and taking overrideSize an optional prop

### Bug Fixes

* **ListItem**:
  * addedKeyPress to context
  * move handler to context
  * fixed unit tests





## 7.2.1 (2018-5-22)

### Bug Fixes

* **Topbar**: remove Scss import





# 7.2.0 (2018-5-21)

### Features

* **SpaceList**: added props for optional icons
* **AlertCall**: Initial implementation of AlertCall component
* **Accordion**:
  * Adding height as a modifier
  * Adding height prop to accordionHeader

### Bug Fixes

* **Icon**: fix opacity calculation





# 7.1.0 (2018-5-11)

### Features

* **Slider**:
  * Moved the position calculation of label to componentDidMount
  * removed the edge case handling
  * Fixing the alignment issue of slider label
* **Alert**: Updated Alert design
* **AlertMeeting**: Initial Meeting Alert implementation.
* **Avatar**: Adding bot, failure badge, typing types to Avatar
* **CollapseButton**: Implementation for collapse button
* **SpaceListMeeting**: added Component, adjusted EventOverlay
* **ListItemHeader**: created and added styles
* **Accordion**: showing separator based on a prop
* **Lightbox**: LightBox implementation

### Bug Fixes

* **List**: fixed className and Popover
* **formatting**: formatting and snapshots updated





# 7.0.0 (2018-5-4)

### Features

* **space-list**: added overview variation
* **sideNavigation**: add left side navigation
* **editInput**: new editable textfield

### Bug Fixes

* **docs**: update Buttons in examples to have children
* **spacelist**: example code prop fixed
* **prop name**: change isSummary to isOverview
* **Breadcrumbs**: update className to cui prefixed class
* **editText**: comments
* **Footer**: add color and className props
* **Topbar**: add fixed prop

* **Button**:
  * added containerLarge prop and tests
  * button container class
  * adjusted tests and props
  * update Call Control Icon, Button children/label props

## Breaking Changes

* **Button**:
  * label prop changed to external label
  * Button requires children





# 6.0.0 (2018-4-25)

### Chores

* **release:** initial release to new GitHub Repo
