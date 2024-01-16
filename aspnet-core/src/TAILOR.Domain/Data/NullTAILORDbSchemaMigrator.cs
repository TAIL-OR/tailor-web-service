using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TAILOR.Data;

/* This is used if database provider does't define
 * ITAILORDbSchemaMigrator implementation.
 */
public class NullTAILORDbSchemaMigrator : ITAILORDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
