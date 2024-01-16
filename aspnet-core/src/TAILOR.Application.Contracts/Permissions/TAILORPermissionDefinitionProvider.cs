using TAILOR.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TAILOR.Permissions;

public class TAILORPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TAILORPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(TAILORPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TAILORResource>(name);
    }
}
