using Xunit;

namespace TAILOR.EntityFrameworkCore;

[CollectionDefinition(TAILORTestConsts.CollectionDefinitionName)]
public class TAILOREntityFrameworkCoreCollection : ICollectionFixture<TAILOREntityFrameworkCoreFixture>
{

}
