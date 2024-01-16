using Volo.Abp.Settings;

namespace TAILOR.Settings;

public class TAILORSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TAILORSettings.MySetting1));
    }
}
