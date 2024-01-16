using Volo.Abp.Modularity;

namespace TAILOR;

/* Inherit from this class for your domain layer tests. */
public abstract class TAILORDomainTestBase<TStartupModule> : TAILORTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
