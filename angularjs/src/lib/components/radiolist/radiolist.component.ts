export function csRadiolist() {
  let directive = {
    scope: {
      options: '=',
      radioModel: '=ngModel',
      horizontal: '=?',
    },
    restrict: 'E',
    template: `
      <div class="cui-input-group cui-input-radio" ng-class="{horizontal: horizontal, disabled: radio.isDisabled}" ng-repeat="radio in options">
        <input class="cui-input cui-radio__input" type="radio" ng-model="$parent.radioModel" ng-value="{{radio.value}}" name="{{radio.name}}" id="{{radio.id}}" ng-disabled="{{radio.isDisabled}}">
        <label class="cui-radio__label" ng-class="{horizontal: horizontal}" for="{{radio.id}}">
          <span>{{radio.label}}</span>
        </label>
      </div>
    `,
  };

  return directive;
}
